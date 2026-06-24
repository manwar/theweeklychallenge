import os
import re
import sys
import argparse
import pandas as pd

def count_lines(file_path):
    """Counts non-empty lines of code."""
    try:
        with open(file_path, 'r', encoding='utf-8', errors='ignore') as f:
            lines = [line.strip() for line in f.readlines()]
            non_empty = [l for l in lines if l]
            return len(non_empty)
    except Exception:
        return 0

def parse_repository(club_repo_path):
    data = []
    challenge_pattern = re.compile(r'^challenge-(\d+)$')

    print(f"Scanning solutions data inside: {club_repo_path} ...")

    # Verify path validity
    if not os.path.exists(club_repo_path):
        print(f"Error: The path '{club_repo_path}' does not exist.")
        sys.exit(1)

    # Define non-code or metadata extensions to ignore
    ignored_extensions = (
        '.md', '.txt', '.json', '.yml', '.yaml', '.csv',
        '.png', '.jpg', '.jpeg', '.gif', '.pdf', '.svg',
        '.toml', '.xml', '.ini', '.lock'
    )

    for root, dirs, files in os.walk(club_repo_path):
        if '.git' in root or '.github' in root:
            continue

        parts = os.path.relpath(root, club_repo_path).split(os.sep)

        # We look for files inside relative path structure: challenge-XYZ/participant/language/
        if len(parts) >= 3:
            challenge_dir = parts[0]
            participant = parts[1]
            language = parts[2]

            match = challenge_pattern.match(challenge_dir)
            if match:
                week_num = int(match.group(1))

                for file in files:
                    # Ignore system/hidden files and known documentation/asset types
                    if file.startswith('.') or file.lower().endswith(ignored_extensions):
                        continue

                    # Determine task number from filename if possible (e.g., ch-1 or ch-2)
                    task_match = re.search(r'ch-(\d+)', file)
                    task_num = int(task_match.group(1)) if task_match else 1

                    file_path = os.path.join(root, file)
                    loc = count_lines(file_path)

                    # Normalize core community language naming variations
                    lang_clean = language.lower()
                    if lang_clean in ['raku', 'p6', 'perl6']: lang_clean = 'raku'
                    if lang_clean in ['pl', 'perl5']: lang_clean = 'perl'

                    data.append({
                        'week': week_num,
                        'task': task_num,
                        'user': participant,
                        'language': lang_clean,
                        'lines_of_code': loc
                    })

    df = pd.DataFrame(data)
    print(f"Found {len(df)} total solutions!")
    return df

def generate_insights(df, output_dir):
    print(f"Writing calculated datasets to: {output_dir} ...")
    os.makedirs(output_dir, exist_ok=True)

    # Base Raw Dataset
    df.to_csv(os.path.join(output_dir, 'solutions_dataset.csv'), index=False)

    # Insight 1: Top Languages
    top_languages = df['language'].value_counts().reset_index(name='count')
    top_languages.to_csv(os.path.join(output_dir, 'top_languages.csv'), index=False)

    # Insight 2: Growth tracking
    solutions_per_week = df.groupby('week').size().reset_index(name='total_submissions')
    solutions_per_week.to_csv(os.path.join(output_dir, 'growth_by_week.csv'), index=False)

    # Insight 3: Core language pivot matrix
    top_5_langs = df['language'].value_counts().head(5).index
    df_top_langs = df[df['language'].isin(top_5_langs)]
    lang_evolution = pd.crosstab(df_top_langs['week'], df_top_langs['language'])
    lang_evolution.to_csv(os.path.join(output_dir, 'language_evolution_by_week.csv'))

    # Insight 4: User leaderboard
    top_contributors = df['user'].value_counts().head(20).reset_index(name='submissions')
    top_contributors.to_csv(os.path.join(output_dir, 'top_contributors.csv'), index=False)

    # Insight 5: Polyglot block distributions
    df['week_bucket'] = (df['week'] // 50) * 50
    polyglot = pd.crosstab(df['week_bucket'], df['language'])
    if 'perl' in polyglot.columns and 'raku' in polyglot.columns:
        major_langs = ['perl', 'raku']
        guests = [col for col in polyglot.columns if col not in major_langs]
        polyglot['guest languages'] = polyglot[guests].sum(axis=1)
        polyglot_summary = polyglot[['perl', 'raku', 'guest languages']]
    else:
        top_3 = df['language'].value_counts().head(3).index
        polyglot_summary = polyglot[list(top_3)]
    polyglot_summary.to_csv(os.path.join(output_dir, 'polyglot_evolution.csv'))

    # Insight 6: Active retention footprints
    active_users = df.groupby('week_bucket')['user'].nunique().reset_index(name='active_contributors')
    active_users.to_csv(os.path.join(output_dir, 'active_contributors_history.csv'), index=False)

    print("Success! All operational records parsed successfully.")

if __name__ == "__main__":
    parser = argparse.ArgumentParser(description="Process historical records for The Weekly Challenge.")
    parser.add_argument("club_repo", help="Path to local clone of 'perlweeklychallenge-club'")
    args = parser.parse_args()

    # Determine execution root to accurately isolate /static/analytics/ folder paths
    script_root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
    target_output = os.path.join(script_root, 'static', 'analytics')

    raw_df = parse_repository(args.club_repo)
    if not raw_df.empty:
        generate_insights(raw_df, target_output)
