---
title: "Weekly Review: Perl Weekly Challenge - 007"
date: 2019-05-13T16:00:00+00:00
description: "Kian-Meng Ang Review Challenge #007."
type: post
image: images/blog/blog-header-1.jpg
author: Kian-Meng Ang
tags: ["Perl5", "Perl6"]
---
Below is the write-up review (only covers Perl 5) of the Perl Weekly Challenge #007 of all the submitted answers. You can read the [original questions](/blog/perl-weekly-challenge-007/) first to understand the details of these two challenges.

***

## Challenge #1

***

If we read the question carefully, there are several steps to solve this problem. First, to find all niven number from 0 to 50 inclusively. Second, to find the sum of its digits of this range of number. Third, print all the niven number on their own line.

For first step, as 0 is not a niven number since it can be divided by zero, some solutions will skip this number and count the range from 1 instead. Participants who took such approach are [Gustavo Chaves](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/gustavo-chaves/perl5/ch-1.pl), [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/joelle-maslak/perl5/ch-1.pl), [Andrezgz](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/andrezgz/perl5/ch-1.pl), and [Dave Jacoby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/dave-jacoby/perl5/ch-1.pl). The alternative approach is to check for the value of zero and skip it in the loop ([Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/athanasius/perl5/ch-1.pl) and [Alicia Bielsa](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/alicia-bielsa/perl5/ch-1.pl)) or treat the number as boolean value ([Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/ruben-westerberg/perl5/ch-1.pl) and [Maxim Nechaev](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/maxim-nechaev/perl5/ch-1.pl)).

The second step is to calculate the sum of its digits. There are two approach, calculate the sum of all the digits in the array using **sum** function of the module [List::Util](https://metacpan.org/pod/List::Util) ([Gustavo Chaves](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/gustavo-chaves/perl5/ch-1.pl), [Maxim Nechaev](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/maxim-nechaev/perl5/ch-1.pl), [Andrezgz](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/andrezgz/perl5/ch-1.pl), and [Dave Jacoby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/dave-jacoby/perl5/ch-1.pl)) or without using external module ([Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/ruben-westerberg/perl5/ch-1.pl), [Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/athanasius/perl5/ch-1.pl), [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/joelle-maslak/perl5/ch-1.pl), [Adam Russell](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/adam-russell/perl5/ch-1.pl), and [Alicia Bielsa](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/alicia-bielsa/perl5/ch-1.pl)). Main difference is solution that uses [List::Util](https://metacpan.org/pod/List::Util) are shorter compare to those without. Special mention of Adam Russell's solution which [binary summation](https://adamcrussell.livejournal.com/2336.html) to calculate the total sum.

    do{
        my @digits = split(//,$i);
        my $digit_sum = unpack("%32C*", pack("C*", @digits));
        if($i % $digit_sum == 0){
            print "$i ";
            $count++;
        }
        $i++;
    } while($count &lt; NIVEN_COUNT);

And lastly, the third step is to print these number, "each on their own line". There are two camps of people here. Those who [say](https://perldoc.perl.org/functions/say.html)  (or [CORE::say](https://perldoc.perl.org/CORE.html)) it out ([Gustavo Chaves](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/gustavo-chaves/perl5/ch-1.pl), [Joelle Maslak](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/joelle-maslak/perl5/ch-1.pl), [Andrezgz](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/andrezgz/perl5/ch-1.pl), and [Dave Jacoby](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/dave-jacoby/perl5/ch-1.pl)) or those who [print](https://perldoc.perl.org/functions/print.html) newline **\n** explicitly ([Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/ruben-westerberg/perl5/ch-1.pl), [Athanasius](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/athanasius/perl5/ch-1.pl), [Maxim Nechaev](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/maxim-nechaev/perl5/ch-1.pl), and [Alicia Bielsa](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/alicia-bielsa/perl5/ch-1.pl)).

Looking through all the solutions, you will notice developers have different coding personalities or styles and motivation. The solution by [Ruben Westerberg](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/ruben-westerberg/perl5/ch-1.pl) which uses only essential core features with minimal dependencies was done so so it can fit into one-liner is a good example of his chosen approach.


***

## Challenge #2

***

This question was quite complicated and the number of submission was lower compare to first question. Basically the solution can be divided into two steps. First, obtain and filter the necessary dictionary words. Second, build a graph and find the shortest ladder between two words using [Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm).

For the first step, Gustavo Chaves' [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/gustavo-chaves/perl5/ch-2.pl) caught my attention because how clean and readable on preparing the necessary word list for generating the graph. How he generates the word list remind me of [Unix pipeline](https://en.wikipedia.org/wiki/Pipeline_(Unix)). Each function filters the necessary word list from the previous function.

    my ($source, $target) = map {lc} @ARGV;

    my $length = length $source;

    my @words =
        uniq
        sort
        map {lc}
        grep {length == $length}
        path('/usr/share/dict/words')-&gt;lines({chomp =&gt; 1});

    my @ladder = first_shortest_ladder($source, $target, \@words);

For the second step that build the graph from the word list and find the shortest path between two words, Maxim Nechaev provided us with the shortest and cleanest [solution](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-007/maxim-nechaev/perl5/ch-2.pl). This was achieved by using [Graph::Undirected](https://metacpan.org/pod/Graph::Undirected) and [Algorithm::Combinatorics](https://metacpan.org/pod/Algorithm::Combinatorics) to implement [Dijkstra's algorithm](https://en.wikipedia.org/wiki/Dijkstra%27s_algorithm).


    sub find_shortest_ladder
    {
        my ($word1, $word2, $words) = @_;

        my $g = Graph::Undirected-&gt;new;
        map { $g-&gt;add_vertex($_) } @$words;

        my $len = length($words-&gt;[0]) - 1;
        my $iter = combinations($words, 2);
        while( my $pair = $iter-&gt;next ) {
            my $diffs = 0;
            foreach my $i (0..$len) {
                $diffs++ if substr($pair-&gt;[0], $i, 1) ne substr($pair-&gt;[1], $i, 1);
                last if $diffs == 2;
            }
            $g-&gt;add_edge( @$pair ) if $diffs == 1;
        }
        return $g-&gt;SP_Dijkstra($word1, $word2);
    }

Related blog posts to this week challenges by the usual suspect.

1. Laurent Rosenfeld's [post](http://blogs.perl.org/users/laurent_r/2019/05/perl-weekly-challenge-7-niven-numbers-and-word-ladders.html) on both Perl 5 and 6 solutions.
2. Arne Sommer's [post](https://perl6.eu/niven-ladder.html) on step-by-step solutions using Perl 6.
3. Jo Christian Oterhals' [post](https://medium.com/@jcoterhals/perl-6-small-stuff-19-a-challenge-of-niven-numbers-and-word-ladders-ed33dcd2b45b) on Perl 6 solutions and usages.
4. Adam Russell's [post](https://adamcrussell.livejournal.com/2336.html) on detailed explanation on his approach to solve both questions.
5. Dave Jacoby's [post](https://jacoby.github.io//2019/05/06/niven-numbers-in-perl-and-javascript.html) on simple solution to challenge #1 using both Perl and Javascript.
