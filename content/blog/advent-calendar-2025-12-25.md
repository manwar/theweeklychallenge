---
title: "Advent Calendar - December 25, 2025"
date: 2025-12-25T00:00:00+00:00
description: "Advent Calendar - December 25, 2025."
type: post
image: images/blog/2025-12-25.jpg
author: Mohammad Sajid Anwar
tags: ["Perl", "Raku"]
---

## [**Advent Calendar 2025**](/blog/advent-calendar-2025)
### | &nbsp; [**Day 24**](/blog/advent-calendar-2025-12-24) &nbsp; | &nbsp; **Day 25** &nbsp; |
***

`Merry Christmas to everyone. May God bless us all with happiness and good health.`

The year `2025` has allowed me to return to contributing the weekly challenge.

The last time I participated was in `Week #196` - back in `2022`.

That was clearly a long time ago. I last blogged about my contributions was in `Week #143` which was in `2021`.

That doesn't look very good, does it?.

Getting back into the routine was the best decision I made. Although, I limited myself to just one task, it was still a big deal for me.

The best part is that I didn't take a break - I kept going.

Today, I'd like to walk you through my contributions, mix of `Perl`, `Raku` and `Python`.

<br>

***

### | &nbsp; [[Week #339](#week339)] &nbsp; | &nbsp; [[Week #340]](#week340) &nbsp; | &nbsp; [[Week #341]](#week341) &nbsp; | &nbsp; [[Week #342]](#week342) &nbsp; | &nbsp; [[Week #343]](#week343) &nbsp; |
### | &nbsp; [[Week #344](#week344)] &nbsp; | &nbsp; [[Week #345]](#week345) &nbsp; | &nbsp; [[Week #346]](#week346) &nbsp; | &nbsp; [[Week #347]](#week347) &nbsp; | &nbsp; [[Week #348]](#week348) &nbsp; |
### | &nbsp; [[Week #349](#week349)] &nbsp; | &nbsp; [[Week #350]](#week350) &nbsp; | &nbsp; [[Week #351]](#week351) &nbsp; | &nbsp; [[Week #352]](#week352) &nbsp; | &nbsp; [[Week #353]](#week353) &nbsp; |

***

<br>

## [**Week #339**](https://theweeklychallenge.org/blog/perl-weekly-challenge-339){#week339}
***

### Task #1: Max Diff

    You are given an array of integers having four or more elements.

    Write a script to find two pairs of numbers from this list (four numbers total)
    so that the difference between their products is as large as possible.

    In the end return the max difference.

<br>

#### [[**Perl Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-339/mohammad-anwar/perl/ch-1.pl)

```perl
sub max_diff {
    my @n = @_;
    my @pairs = map {
        my $i = $_;
        map { [$i, $_, $n[$i]*$n[$_]] } $i+1 .. $#n
    } 0 .. $#n-1;

    return max
        grep { defined }
        map {
            my ($i,$j,$p1) = @$_;
            map {
                my ($k,$l,$p2) = @$_;
                ($i==$k||$i==$l||$j==$k||$j==$l) ? () : $p1-$p2
            } @pairs
        } @pairs;
}
```

<br>

## [**Week #340**](https://theweeklychallenge.org/blog/perl-weekly-challenge-340){#week340}
***

### Task #1: Duplicate Removals

    You are given a string, $str, consisting of lowercase English letters.

    Write a script to return the final string after all duplicate removals
    have been made. Repeat duplicate removals on the given string until we
    no longer can.

<br>

#### [[**Perl Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-340/mohammad-anwar/perl/ch-1.pl)

```perl
sub remove_duplicates($str) {
    return $str if length($str) < 2;

    for (my $i = 0; $i < length($str) - 1; $i++) {
        if (substr($str, $i, 1) eq substr($str, $i + 1, 1)) {
            my $new_str = substr($str, 0, $i) . substr($str, $i + 2);
            return remove_duplicates($new_str);
        }
    }

    return $str;
}
```

#### [[**Python Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-340/mohammad-anwar/python/ch-1.py)

```python
def remove_duplicates(s: str) -> str:
    if len(s) < 2:
        return s

    for i in range(len(s) - 1):
        if s[i] == s[i + 1]:
            new_str = s[:i] + s[i + 2:]
            return remove_duplicates(new_str)

    return s
```

<br>

## [**Week #341**](https://theweeklychallenge.org/blog/perl-weekly-challenge-341){#week341}
***

### Task #1: Broken Keyboard

    You are given a string containing English letters only and also
    you are given broken keys.

    Write a script to return the total words in the given sentence
    can be typed completely.

<br>

#### [[**Perl Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-341/mohammad-anwar/perl/ch-1.pl)

```perl
sub typable_word_count($str, $keys) {
    my @words = split /\s+/, $str;
    return scalar @words unless @$keys;

    my $broken_chars = quotemeta(join '', @$keys);
    return scalar grep { !/[$broken_chars]/i } @words;
}
```

#### [[**Python Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-341/mohammad-anwar/python/ch-1.py)

```python
def typable_word_count(text: str, broken_keys: list[str]) -> int:
    words = text.split()
    if not broken_keys:
        return len(words)

    broken_chars  = set(key.lower() for key in broken_keys)
    typable_count = sum(
        1 for word in words
        if all(char.lower() not in broken_chars for char in word)
    )

    return typable_count
```

<br>

## [**Week #342**](https://theweeklychallenge.org/blog/perl-weekly-challenge-342){#week342}
***

### Task #1: Balance String

    You are given a string made up of lowercase English letters and digits only.

    Write a script to format the give string where no letter is followed by
    another letter and no digit is followed by another digit. If there are
    multiple valid rearrangements, always return the lexicographically smallest one.
    Return empty string if it is impossible to format the string.

<br>

#### [[**Perl Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-342/mohammad-anwar/perl/ch-1.pl)

```perl
sub typable_word_count($str, $keys) {
    my @words = split /\s+/, $str;
    return scalar @words unless @$keys;

    my $broken_chars = quotemeta(join '', @$keys);
    return scalar grep { !/[$broken_chars]/i } @words;
}
```

#### [[**Python Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-342/mohammad-anwar/python/ch-1.py)

```python
def balance_string(s):
    d = sorted([c for c in s if c.isdigit()])
    l = sorted([c for c in s if c.isalpha()])

    if abs(len(d) - len(l)) > 1:
        return ""

    if len(d) > len(l):
        result = ""
        for i in range(len(d)):
            result += d[i] + (l[i] if i < len(l) else "")
        return result
    elif len(l) > len(d):
        result = ""
        for i in range(len(l)):
            result += l[i] + (d[i] if i < len(d) else "")
        return result
    else:
        if d[0] < l[0]:
            result = ""
            for i in range(len(d)):
                result += d[i] + l[i]
            return result
        else:
            result = ""
            for i in range(len(d)):
                result += l[i] + d[i]
            return result
```

<br>

## [**Week #343**](https://theweeklychallenge.org/blog/perl-weekly-challenge-343){#week343}
***

### Task #1: Zero Friend

    You are given a list of numbers.

    Find the number that is closest to zero and return its distance to zero.

<br>

#### [[**Perl Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-343/mohammad-anwar/perl/ch-1.pl)

```perl
sub zero_friend {
    my ($nums) = @_;
    return min map abs, @$nums
}
```

#### [[**Raku Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-343/mohammad-anwar/raku/ch-1.raku)

```raku
sub zero_friend($nums) {
    return min $nums.map(&abs);
}
```

#### [[**Python Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-343/mohammad-anwar/python/ch-1.py)

```python
def zero_friend(nums):
    return min(map(abs, nums))
```

<br>

## [**Week #344**](https://theweeklychallenge.org/blog/perl-weekly-challenge-344){#week344}
***

### Task #1: Array Form Compute

    You are given an array of integers, @ints and an integer, $x.

    Write a script to add $x to the integer in the array-form.

    The array form of an integer is a digit-by-digit representation stored
    as an array, where the most significant digit is at the 0th index.

<br>

#### [[**Perl Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-344/mohammad-anwar/perl/ch-1.pl)

```perl
sub add_to_array_form {
    map $_+0, split //, join('', @{$_[0]}) + $_[1]
}
```

#### [[**Raku Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-344/mohammad-anwar/raku/ch-1.raku)

```raku
sub add-to-array-form($arr, $x) {
    ($arr.join('') + $x).comb».Int
}
```

#### [[**Python Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-344/mohammad-anwar/python/ch-1.py)

```python
def add_to_array_form(arr, x):
    return [int(d) for d in str(int(''.join(map(str, arr))) + x)]
```

<br>

## [**Week #345**](https://theweeklychallenge.org/blog/perl-weekly-challenge-345){#week345}
***

### Task #1: Peak Positions

    You are given an array of integers, @ints.

    Find all the peaks in the array, a peak is an element that is strictly
    greater than its left and right neighbours. Return the indices of all
    such peak positions.

<br>

#### [[**Perl Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-345/mohammad-anwar/perl/ch-1.pl)

```perl
sub peak_point {
    my @n = @_;
    return join(", ", grep {
        ($_ == 0   ? @n > 1 && $n[0]  > $n[1]  :
         $_ == $#n ? @n > 1 && $n[-1] > $n[-2] :
         $n[$_] > $n[$_-1]  && $n[$_] > $n[$_+1])
    } 0..$#n);
}
```

#### [[**Raku Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-345/mohammad-anwar/raku/ch-1.raku)

```raku
sub peak-point(@n) {
    return @n.keys.grep({
        $_ == 0             ?? @n > 1 && @n[0]   > @n[1]   !!
        $_ == @n.end        ?? @n > 1 && @n[*-1] > @n[*-2] !!
        @n[$_] > @n[$_ - 1] && @n[$_] >  @n[$_ + 1]
    }).join(", ");
}
```

#### [[**Python Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-345/mohammad-anwar/python/ch-1.py)

```python
def peak_point(nums):
    n = nums
    return ", ".join(str(i) for i in range(len(n)) if
        (i == 0 and len(n) > 1 and n[0] > n[1]) or
        (i == len(n) - 1 and len(n) > 1 and n[-1] > n[-2]) or
        (0 < i < len(n) - 1 and n[i] > n[i-1] and n[i] > n[i+1]))
```

<br>

## [**Week #346**](https://theweeklychallenge.org/blog/perl-weekly-challenge-346){#week346}
***

### Task #1: Longest Parenthesis

    You are given a string containing only ( and ).

    Write a script to find the length of the longest valid parenthesis.

<br>

#### [[**Perl Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-346/mohammad-anwar/perl/ch-1.pl)

```perl
sub valid_longest_parenthesis {
    my $s       = shift;
    my @stack   = (-1);
    my $max_len = 0;

    for my $i (0 .. length($s) - 1) {
        if (substr($s, $i, 1) eq "(") {
            push @stack, $i;
        } else {
            pop @stack;
            if (@stack) {
                $max_len = $max_len > ($i - $stack[-1])
                          ? $max_len : ($i - $stack[-1]);
            } else {
                push @stack, $i;  # New starting point
            }
        }
    }

    return $max_len;
}
```

#### [[**Raku Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-346/mohammad-anwar/raku/ch-1.raku)

```raku
sub valid-longest-parenthesis(Str $s) {
    my @stack   = (-1);
    my $max-len = 0;

    for 0 .. $s.chars - 1 -> $i {
        if $s.substr($i, 1) eq "(" {
            @stack.push($i);
        } else {
            @stack.pop();
            if @stack.elems > 0 {
                $max-len = $max-len > ($i - @stack[*-1])
                           ?? $max-len
                           !! ($i - @stack[*-1]);
            } else {
                @stack.push($i);  # New starting point
            }
        }
    }

    return $max-len;
}
```

#### [[**Python Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-346/mohammad-anwar/python/ch-1.py)

```python
def valid_longest_parenthesis(s):
    stack = [-1]
    max_len = 0

    for i in range(len(s)):
        if s[i] == "(":
            stack.append(i)
        else:
            stack.pop()
            if stack:
                max_len = max(max_len, i - stack[-1])
            else:
                stack.append(i)  # New starting point

    return max_len
```

<br>

## [**Week #347**](https://theweeklychallenge.org/blog/perl-weekly-challenge-347){#week347}
***

### Task #1: Format Date

    You are given a date in the form: 10th Nov 2025.

    Write a script to format the given date in the form: 2025-11-10 using the set below.

<br>

#### [[**Perl Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-347/mohammad-anwar/perl/ch-1.pl)

```perl
sub format_date {
    my $str = shift;
    $str =~ /(\d+)\w{2} (\w{3}) (\d+)/;
    sprintf("%04d-%02d-%02d", $3,
            1+index("JanFebMarAprMayJunJulAugSepOctNovDec",$2)/3, $1);
}
```

#### [[**Raku Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-347/mohammad-anwar/raku/ch-1.raku)

```raku
sub format-date(Str $str) {
    $str ~~ /(\d+) \w**2 \s (\w**3) \s (\d+)/;
    sprintf("%04d-%02d-%02d", $2,
            1+index("JanFebMarAprMayJunJulAugSepOctNovDec", $1)/3, $0);
}
```

#### [[**Python Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-347/mohammad-anwar/python/ch-1.py)

```python
def format_date(date_str):
    match = re.search(r'(\d+)\w{2} (\w{3}) (\d+)', date_str)
    if match:
        day, month, year = match.groups()
        month_num = 1 + "JanFebMarAprMayJunJulAugSepOctNovDec".index(month) // 3
        return f"{year}-{month_num:02d}-{int(day):02d}"
    return ""
```

<br>

## [**Week #348**](https://theweeklychallenge.org/blog/perl-weekly-challenge-348){#week348}
***

### Task #1: String Alike


    You are given a string of even length.

    Write a script to find out whether the given string can be split into two
    halves of equal lengths, each with the same non-zero number of vowels.

<br>

#### [[**Perl Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-348/mohammad-anwar/perl/ch-1.pl)

```perl
sub string_alike {
    my $s = shift;
    my $l = length($s)/2;
    my $v = substr($s,0,$l) =~ y/aeiouAEIOU//;
    return $v > 0 && $v == substr($s,$l) =~ y/aeiouAEIOU// ? 1 : 0;
}
```

#### [[**Raku Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-348/mohammad-anwar/raku/ch-1.raku)

```raku
sub string-alike(Str $s) {
    my $l = $s.chars div 2;
    my $v = $s.substr(0, $l).comb.grep({ /<[aeiouAEIOU]>/ }).elems;
    return ($v > 0 && $v == $s.substr($l).comb.grep({ /<[aeiouAEIOU]>/ }).elems) ?? 1 !! 0;
}
```

#### [[**Python Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-348/mohammad-anwar/python/ch-1.py)

```python
def string_alike(s: str) -> int:
    length = len(s) // 2
    vowels = "aeiouAEIOU"
    v = sum(1 for char in s[:length] if char in vowels)
    return 1 if v > 0 and v == sum(1 for char in s[length:] if char in vowels) else 0
```

<br>

## [**Week #349**](https://theweeklychallenge.org/blog/perl-weekly-challenge-349){#week349}
***

### Task #1: Split String

    You are given a string.

    Write a script to return the power of the given string.

    The power of the string is the maximum length of a non-empty substring
    that contains only one unique character.

<br>

#### [[**Perl Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-349/mohammad-anwar/perl/ch-1.pl)

```perl
sub power_string {
    my ($s) = @_;
    return 0 unless length $s;

    my $max   = 1;
    my $count = 1;

    for my $i (1 .. length($s)-1) {
        if (substr($s,$i,1) eq substr($s,$i-1,1)) {
            $count++;
        } else {
            $max = $count if $count > $max;
            $count = 1;
        }
    }

    $max = $count if $count > $max;
    return $max;
}
```

#### [[**Raku Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-349/mohammad-anwar/raku/ch-1.raku)

```raku
sub power_string(Str $s) {
    return 0 if $s.chars == 0;

    my $max   = 1;
    my $count = 1;

    for 1 ..^ $s.chars -> $i {
        if $s.substr($i,1) eq $s.substr($i-1,1) {
            $count++;
        } else {
            $max = $count if $count > $max;
            $count = 1;
        }
    }

    $max = $count if $count > $max;
    return $max;
}
```

#### [[**Python Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-349/mohammad-anwar/python/ch-1.py)

```python
def power_string(s: str) -> int:
    if len(s) == 0:
        return 0

    max_len = 1
    count   = 1

    for i in range(1, len(s)):
        if s[i] == s[i-1]:
            count += 1
        else:
            if count > max_len:
                max_len = count
            count = 1

    if count > max_len:
        max_len = count

    return max_len
```

<br>

## [**Week #350**](https://theweeklychallenge.org/blog/perl-weekly-challenge-350){#week350}
***

### Task #1: Good Substrings

    You are given a string.

    Write a script to return the number of good substrings of length three
    in the given string.

<br>

#### [[**Perl Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-350/mohammad-anwar/perl/ch-1.pl)

```perl
sub good_substring {
    my ($str) = @_;

    return grep { !/(.).*\1/ }
           map  { substr($str, $_, 3) }
           0..length($str) - 3;
}
```

#### [[**Raku Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-350/mohammad-anwar/raku/ch-1.raku)

```raku
sub good-substring(Str $str) {
    $str.comb.rotor(3 => -2)
        .map(*.join)
        .grep({!/(.).*$0/})
        .elems
}
```

#### [[**Python Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-350/mohammad-anwar/python/ch-1.py)

```python
def good_substring(s: str) -> int:
    return sum(1 for i in range(len(s) - 2)
        if len(set(s[i:i+3])) == 3)
```

<br>

## [**Week #351**](https://theweeklychallenge.org/blog/perl-weekly-challenge-351){#week351}
***

### Task #1: Special Average

    You are given an array of integers.

    Write a script to return the average excluding the minimum and maximum of the given array.

<br>

#### [[**Perl Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-351/mohammad-anwar/perl/ch-1.pl)

```perl
sub special_average {
    my @nums = @_;
    return 0 unless @nums;

    my $min = min @nums;
    my $max = max @nums;

    my @filtered = grep { $_ != $min && $_ != $max } @nums;
    return 0 unless @filtered;

    my $sum = sum @filtered;

    return $sum / @filtered;
}
```

#### [[**Raku Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-351/mohammad-anwar/raku/ch-1.raku)

```raku
sub special-average(*@nums) {
    return 0 unless @nums.elems;

    my $min = @nums.min;
    my $max = @nums.max;

    my @filtered = @nums.grep: { $_ != $min && $_ != $max };
    return 0 unless @filtered.elems;

    my $sum = [+] @filtered;

    return $sum / @filtered.elems;
}
```

#### [[**Python Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-351/mohammad-anwar/python/ch-1.py)

```python
def special_average(nums):
    if not nums:
        return 0

    min_val = min(nums)
    max_val = max(nums)

    filtered = [x for x in nums if x != min_val and x != max_val]
    if not filtered:
        return 0

    return sum(filtered) / len(filtered)
```

<br>

## [**Week #352**](https://theweeklychallenge.org/blog/perl-weekly-challenge-352){#week352}
***

### Task #1: Match String

    You are given an array of strings.

    Write a script to return all strings that are a substring of another word
    in the given array in the order they occur.

<br>

#### [[**Perl Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-352/mohammad-anwar/perl/ch-1.pl)

```perl
sub match_string {
    my @words = @_;
    my %seen;

    return [ grep {
        my $word = $_;
        !$seen{$word}++ && grep {
            $_ ne $word && index($_, $word) >= 0
        } @words
    } @words ];
}
```

#### [[**Raku Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-352/mohammad-anwar/raku/ch-1.raku)

```raku
sub match-string(*@words) {
    my %seen;

    return @words.grep(-> $word {
        !%seen{$word}++ && @words.first(-> $other {
            $other ne $word && $other.contains($word)
        }).defined
    }).Array;
}
```

#### [[**Python Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-352/mohammad-anwar/python/ch-1.py)

```python
def match_string(words):
    seen   = {}
    result = []

    for word in words:
        if word in seen:
            continue
        seen[word] = True

        for other in words:
            if other != word and word in other:
                result.append(word)
                break

    return result
```

<br>

## [**Week #353**](https://theweeklychallenge.org/blog/perl-weekly-challenge-353){#week353}
***

### Task #1: Max Words

    You are given an array of sentences.

    Write a script to return the maximum number of words that appear in a single sentence.

<br>

#### [[**Perl Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-353/mohammad-anwar/perl/ch-1.pl)

```perl
sub max_word {
    my @w = map { scalar split } @{$_[0]};
    return 0+(@w ? (sort {$b <=> $a} @w)[0] : 0);
}
```

#### [[**Raku Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-353/mohammad-anwar/raku/ch-1.raku)

```raku
sub max_word(@sentences) {
    my @w = @sentences.map: { $_.words.elems };
    return @w ?? @w.sort.reverse[0] !! 0;
}
```

#### [[**Python Source Code**]](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-353/mohammad-anwar/python/ch-1.py)

```python
def max_word(sentences):
    if not sentences:
        return 0
    return max(len(sentence.split()) for sentence in sentences)
```

***

If you have any suggestion then please do share with us **<perlweeklychallenge@yahoo.com>**.

| &nbsp; [**Advent Calendar 2025**](/blog/advent-calendar-2025) &nbsp; |
