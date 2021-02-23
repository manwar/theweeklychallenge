
---
author:       Colin Crain
date:         2021-02-23T00:00:00
description:  "Colin Crain › Perl Weekly Review #098"
tags:         ["perl"]
title:        "Colin Crain › Perl Weekly Review #098"
image:        images/blog/p5-review-challenge-098.jpg
type:         post
---

( *...continues from [previous week](/blog/review-challenge-097/).* )

Welcome to the Perl review for **Week 098** of the Weekly Challenge! Here we will take the time to discuss the  submissions offered by the team, factor out the common methodologies that came up in those solutions, and highlight some of the unique approaches and unusual code created.

---

### Why do we do these challenges?

I suppose any answers to that would be as wide ranging and varied as the people who choose to join the team. One thing is clear: it's not a competition, and there are no judges, even if there is a "prize" of sorts. About that -- I think of it more as an honorarium periodically awarded to acknowledge the efforts we make towards this strange goal. So there's no determination to find the *fastest*, or the *shortest*, or even, in some abstract way, the *best* way to go about things, although I'm certain the individuals have their own aspirations and personal drives. As Perl is such a wonderfully expressive language, this provides quite a bit of fodder to the core idea of TMTOWTDI, producing a gamut of wonderfully varied techniques and solutions.

Even the tasks themselves are often open to a certain amount of discretionary interpretation. What we end up with is a situation where each participant is producing something in the manner they find the most interesting or satisfying. Some team members focus on carefully crafted complete applications that thoroughly vet input data and handle every use case they can think up. Others chose to apply themselves to the logic of the underlying puzzle and making it work in the most elegant way they can. Some eschew modules they would ordinarily reach for, others embrace them, bringing to light wheels perhaps invented years ago that happen to exactly solve the problem in front of them today.

I've been considering this question for some time and have found one binding commonality between all of us solving these challenges each week, in that however we normally live our lives, the task in front of us more than likely has nothing to do with any of that . And I think this has great value. We all do what we do, out in the real world, and hopefully we do it well. The Weekly Challenge provides a opportunity to do something germane to that life yet distinctly different; if we only do the things we already know how to do we only do the same things over and over. This is where the "challenge" aspect comes into play.

So we can consider the Weekly Challenge as providing a problem space outside of our comfort zone, as far out from comfort as we wish to take things. From those reaches we can gather and learn things and bring what we want back into our lives. Personally, I think that's its greatest value of all.

---

Every week there is an enormous global collective effort made by the team, analyzing and creatively coding the submissions, and that effort deserves credit due. And that's why I'm here, to try and figure out how to do that.

Let's have a look and see what we can find.

---

**<big>For context</big>**  before we begin, you may wish to revisit either of the pages for the [**original tasks**](/blog/perl-weekly-challenge-098/) or the summary [**recap**](/blog/recap-challenge-098/) of the challenge. But don't worry, the challenges themselves will be briefly summarized, presented below as we progress from task by task. Oh, and one more thing before we get started:

### Getting in Touch with Us

<a href="mailto:pwc.perfectwave@gmail.com"><img src="/images/blog/Email.svg" height="50" width="50"> Email</a> › Please email me (Colin) with any feedback, notes, clarifications or whatnot about this review.

<a href="https://github.com/manwar/perlweeklychallenge"><img src="/images/blog/Github.svg" height="50" width="50"> GitHub</a> › Submit a pull request to us for any issues you may find with this page.

<a href="https://twitter.com/perlwchallenge"><img src="/images/blog/Twitter.svg" height="50" width="50"> Twitter</a> › Join the discussion on Twitter!

I'm always curious as to what the people think of these efforts. Everyone here at the PWC would like to hear any feedback you'd like to give.

**So finally, without further ado...**

---

## •   &nbsp;  &nbsp;  &nbsp;   [Task 1](#PWC098TASK1)       &nbsp;  &nbsp;  &nbsp;   •   &nbsp;  &nbsp;  &nbsp;   [Task 2](#PWC098TASK2)   &nbsp;  &nbsp;  &nbsp;   	•   &nbsp;  &nbsp;  &nbsp;   [BLOGS](#PWC098BLOGS)    &nbsp;  &nbsp;  &nbsp;   	•

---

# TASK 1 {#PWC098TASK1}

# Read N-characters
*Submitted by: Mohammad S Anwar*

You are given file $FILE.

Create subroutine readN($FILE, $number) returns the first n-characters and moves the pointer to the (n+1)th character.

**Example:**

Input: Suppose the file (input.txt) contains "1234567890"

Output:
```
    print readN("input.txt", 4); # returns "1234"
    print readN("input.txt", 4); # returns "5678"
    print readN("input.txt", 4); # returns "90"
```

## about the solutions

There were 26 submissions for the first task this past week.

The crux of the task was on the function input. It's stated we are given a file `$FILE`, without clarification, and only in the example can it be inferred that what we are to be given is a file *name*, rather than the contents or a handle to that file.

The task, thus, morphs from simply reading a file from a given point to managing an index of filenames to keep track of the offsets (or something like that).

In practice, that would often be a hash lookup of either offsets or the filehandles themselves, which unless otherwise bothered will keep track of their own file seek points for reading.

To actually do the reading, `read` was a common choice, seeing as that's what it's made for. Well, that and `sysread`, coming in second. We did see some alternatives though, including going big: reading a line or even the slurping in the whole file and chopping off pieces with `substr`; or going small with  `getc()` and taking it one character at a time.

## a note on PERSISTENCE

Varying ideas arose around the notion of persistence, that is, when calling the function again that the reading would pick up where it had previously left off. In the example given, however, only one file is ever called upon. Thus keeping only one current filehandle open as a package variable, for instance, could replicate the example behavior without allowing free ability to *switch* files and maintaining state. As presented, the task never requires this, nor is it even mentioned less explained. Consequently multiple schemes arose. Because of this confusion we'll try and avoid labeling anyone's contributions as actually *broken* per se, but instead will try and give more airtime to the more robust solutions.

Sometimes this cache was kept in scope in the outer package, but using an internal `state` variable within the `readN` routine itself was a popular choice.

## a CACHE, a HASH, a FILEHANDLE
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/arne-sommer/perl/ch-1.pl),
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/athanasius/perl/ch-1.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/dave-cross/perl/ch-1.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/duncan-c-white/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/e-choroba/perl/ch-1.pl),
[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/gustavo-chaves/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/perlboy1967/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/paulo-custodio/perl/ch-1.pl), and
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/sgreen/perl/ch-1.pl)

To maintain an idea of the current file position across multiple files, a need for some sort of lookup arose — to see whether a given file had been read from previously, so that the read postion could be picked up properly from where it had been left off. Within reason, keeping files open for reading has no great cost in Perl, so maintaining a cache of open filehandles against their filenames was an efficient way of proceeding. When a filename is given to be read from, it is first checked against the cache to see if there is already an open handle for it. If found, that filehandle is used, if not, one is created and stored. Filehandles already keep track of their current position, so read persistence is automatically taken care of.

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/sgreen/perl/ch-1.pl)

Simon demonstrates the use of a cached database of filehandles to draw on. Done this way the solution can be quite compact, but Simon's example is exceptionally well laid out. All wheat, no chaff.

The `state` variable lexically scopes the cache completely within the subroutine itself, keeping the mechanism opaque to the outside observer, as it arguably should be, making the routine self-contained. This declaration has been a welcome addition to the core since v.5.10.

```perl
    sub readN {
        my ( $filename, $length ) = @_;
        state $fh = {};

        # Map the file name to a file handle if not already done
        if ( not exists $fh->{$filename} ) {
            open( $fh->{$filename}, "<:encoding(UTF-8)", $filename )
              || die "Can't open UTF-8 encoded $filename: $!";
        }

        # Read $length characters into $output and display it
        my $output = '';
        read( $fh->{$filename}, $output, $length );
        say $output;
    }
```

[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/dave-cross/perl/ch-1.pl)

Perhaps even cleaner we have Dave Cross' version:

```perl
    sub readN ($filename, $n) {
      state %fh;

      unless ($fh{$filename}) {
        open $fh{$filename}, '<', $filename
          or die "Cannot open '$filename': $!\n";
      }

      read $fh{$filename}, my ($buf), $n;

      return $buf;
    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/e-choroba/perl/ch-1.pl)

Choroba raises a very valid point:

>This is very unusual. What should happen if we refer to the same file
in a different way, e.g. C<file.txt> versus C<./file.txt>? Creating an
object for each file would have made more sense.

One systemic ambiguity of simply handing in filenames to determine where to read from is that a single file on disk can be referred to by any number of valid paths to locate it, so hashing against the input file name as given may fail if that naming convention is inconsistent. An object, encapsulating code to address this, would make a whole lot more sense, and Choroba was not the only one with this suggestion.

Here the hash is initialized in the scope of the outer block, rather than by declaring a `state` variable. This method is more compatible, surely, and either way it makes little difference in the end, but I do like lexically scoping a `state` variable within the routine itself — it's just that much less potential for namespace conflict.

```perl
    {   my %fh;
        sub readN {
            my ($file, $chars) = @_;
            unless (exists $fh{$file}) {
                open $fh{$file}, '<:encoding(UTF-8)', $file;
            }
            read $fh{$file}, my ($buffer), $chars;
            return $buffer
        }
    }
```

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/perlboy1967/perl/ch-1.pl)

Niels gives us a quite robust and fully-featured little module, `readN.pm`, which in turn  exports its one function, `readN()`. In it he maintains a pair of hashes, one to cache filehandles, the other keeping track of whether or not an EOF condition has occured. If the end of the file is found, a flag is set in this hash which is checked on every call to the routine. If found, the open filehandle is closed and then reopened, resetting the file pointer to 0.

Did I mention it's robust? It's robust.

```perl
    sub readN ($$) {
      my ($fileName, $length) = @_;

      # Close the file when eof is reached
      if (exists $EOF{$fileName}) {
        delete $FH{$fileName};
        delete $EOF{$fileName};
        return;
      }

      if (!exists ($FH{$fileName})) {
        sysopen($FH{$fileName}, $fileName, O_RDONLY) //
          die "Can't open '$fileName' ($!)";
        binmode($FH{$fileName});
      }

      my $return;
      my $retry = 10;
      do {
        my $buf;
        my $nread = sysread($FH{$fileName}, $buf, $length);
        if (!defined $nread) {
          $retry--; usleep 1_000;
        } elsif ($nread == 0) {
          $EOF{$fileName}++;
        } elsif ($nread <= $length) {
          $return .= $buf;
        }
      } while (!exists  $EOF{$fileName} and length($return // '') != $length and $retry);

      return $return;
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/duncan-c-white/perl/ch-1.pl)

Duncan similarly handles running out of road during a read by closing out the filehandle, requiring it to be reopened from the beginning should we need it again.

```perl
    my %filename2fh;
    sub readN
    {
        my( $filename, $nchars ) = @_;
        my $fh = $filename2fh{$filename};
        unless( defined $fh )
        {
            open( $fh, '<', $filename ) ||
                die "readN: can't open $filename\n";
            $filename2fh{$filename} = $fh;
        }
        my $s = "";
        my $nread = sysread( $fh, $s, $nchars );

        # if hit eof, close filehandle for neatness
        # (this would case future calls to readN from this
        # same filename will simply reread the file from the
        # beginning.  But if we don't do this, we never
        # close any filehandles.
        if( $nchars > 0 && $nread == 0 )
        {
            close $fh;
            delete $filename2fh{$filename};
        }
        return $s;
    }
```


## save the POSITIONS to return to
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/dave-jacoby/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/polettix/perl/ch-1.pl), and
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/lubos-kolouch/perl/ch-1.pl)

Another way to go about preserving read state was to just keep track of the current read position for each filename. Then when called, every file is opened, the file pointer is moved, the file read from at the correct position, then closed again. Or something like that.

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/polettix/perl/ch-1.pl)

Flavio ultimately chose this path to walk, after much thorough analysis and a bit of hand-wringing, as detailed on his [blog post](https://github.polettix.it/ETOOBUSY/2021/02/03/pwc098-readn/).

The upshot on whether to keep a cache of filehandles or file positions seems to fall on the relative merits of resource management; either the expense of the file handles themselves or the effort used to establish them repeatedly. There seem to be multiple places to land on the subject and in non-pathological cases I'm inclined to say it doesn't matter much if at all. Perhaps should we require our toy `readN()` function to operate on tens of thousands of files in hundreds of thousands of calls we might wish to revisit our optimization, which sounds like a good thing under those circumstances whatever we do.

Flavio also choses to avoid any possibility of unflushed buffering by going directly to `sysopen` and `sysread` to do his dirty work sub rosa. This in turn requires him to use `sysseek` before reading to properly reposition the file pointer. It sounds complex but isn't really as bad as all that.

```perl
    sub readN ($FILE, $number) {
       state $at = {};
       sysopen my $fh, $FILE, O_RDONLY or die "sysopen('$FILE'): $!\n";
       sysseek $fh, $at->{$FILE} // 0, SEEK_SET;
       my $retval = '';
       my $n = sysread $fh, $retval, $number;
       close $fh or die "close('$FILE'): $!\n";
       die "sysread($FILE) \@$number: $!\n"  if ! defined $n;
       $at->{$FILE} += $n;
       return $retval;
    }

    my $highlight = "\e[1;97;45m"; my $reset = "\e[0m";
    my $file = shift || __FILE__;
    my @numbers = @ARGV ? @ARGV : qw< 4 5 2 >;
    for my $n (@numbers) {
       my $chunk = readN($file, $n);
       say "got $n: $highlight$chunk$reset";
    }
```

I almost missed the part at the end. Looking at it, I'm asking myself: "Is he *highlighting my terminal?*". Why yes, yes he is. Magenta. Spring is around the corner, I can feel it.

In my dreams, not my toes. My toes are cold.


[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/dave-jacoby/perl/ch-1.pl)

Dave also keeps a database of file pointers to tell him where to read, but rather than dealing with low-level system reads he  simply slurps in the whole file,  calling `substr` with the appropriate offset and length requested. Dave was not alone in this choice, as we will see later.

```perl
    sub readN ( $file, $chars ) {
        state $index;
        $index->{$file} //= 0;
        my $i = $index->{$file};
        return '' unless -f $file;
        return '' unless -r $file;
        return '' if $i > -s $file;
        my $output = '';

        if ( open my $fh, '<', $file ) {
            my $string = join '', <$fh>;
            $output = substr $string, $i, $chars;
            close $fh;
        }
        $index->{$file} += $chars;
        return $output;
    }
```


## CLOSURES
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/adam-russell/perl/ch-1.pl) and
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/wlmb/perl/ch-1.pl)

Both Choroba and Roger Bell_West suggested that in the real world, this task would be better served with an object, rather than by a subroutine handed a file path string. No one went as far as to implement this, but several people did bring us a similarly encapsulated solution, being an anonymous subroutine closed around the input path and the resultant filehandle created.

[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/wlmb/perl/ch-1.pl)

Luis breaks his process down functionally, creating a series of components that, when given a filename, call each other, eventually yielding a coderef to a closure over the open filehandle. The closures are created as required, and kept in a hash which functions as a dispatch table.

When given a new filename, it's handed off first to a `reader` function that determines whether it's been seen before. If not it hands the path off to a second routine that opens a filehandle, creating a new anonymous reader widget from it. By reading in lines using the diamond operator and chopping off bits with `substr`, this anonymous  routine wraps the filehandle and the whole reading operation up in a coderef that gets returned. The  closure is ultimately passed on and  returned by `reader()` to the `readN()` function that initiated the sequence. The closure coderef is stored in the `reader()` cache and accessed from there rather than being recreated, should it be required again.

```perl
    sub reader { #returns a reader, maybe creating it.
        state %reader; #hash of readers, one per seen filename
        my $filename=shift;
        $reader{$filename} //=new_reader($filename);
    }

    sub new_reader {#create a new reader
        my $filename=shift;
        open my $fh, "<", $filename or die "Couldn't open $filename: $!";
        my $line=""; #plays the role of a buffer
        my $reader= sub { #This is the actual reader routine
            my $number=shift;
            while($number>length($line)){ #get enough characters
                my $nextline=<$fh>;
                last unless $nextline;
                #I remove newlines. If not desired, comment the next line
                chomp($nextline);
                $line .= $nextline;
            }
            my $result=substr $line,0,$number;
            (substr $line,0,$number)='';
            return $result;
        }
    }
```


[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/adam-russell/perl/ch-1.pl)

Adam provides us with solutions done two ways, both involving creating a closure around an open filehandle that takes one argument, the number of characters to be read next.

The input filenames are handed to a constructor, which opens the file and uses the filehandle created to build a new, anonymous routine that knows how to read from it. This coderef is returned, and when called with a value returns that many characters from the enclosed handle.

Although he gives demonstrations for both versions of his solution the coderefs are not cached, only sequentially called as in the task example. As his readers are independant object-like creatures, though, same as Luis', there's no reason why they couldn't be.

```perl
    sub read_maker1{
        my ($file) = @_;
        my $n = 0;
        open(FILE, $file);
        return sub{
            my($x) = @_;
            my $chars;
            my $read = read(FILE, $chars, $x);
            $n = $n + $x;
            unless(seek(FILE, $n, 0)){
                close(FILE);
            }
            return $chars;
        }
    }
```


## I/O VARIATIONS

### read()
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/adam-russell/perl/ch-1.pl),
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/arne-sommer/perl/ch-1.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/colin-crain/perl/ch-1.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/cristian-heredia/perl/ch-1.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/dave-cross/perl/ch-1.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/e-choroba/perl/ch-1.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/james-smith/perl/ch-1.pl),
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/jo-37/perl/ch-1.pl),
[**Lubos Kolouch**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/lubos-kolouch/perl/ch-1.pl),
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/nunovieira220/perl/ch-1.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/paulo-custodio/perl/ch-1.pl),
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/roger-bell-west/perl/ch-1.pl),
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/sgreen/perl/ch-1.pl),
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/stuart-little/perl/ch-1.pl),
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/ulrich-rieke/perl/ch-1.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/wanderdoc/perl/ch-1.pl)

The immediate choice for reading *x* amount of characters from at filehandle should reasonably be the Perl function `read`, seeing as that is what it was made to do. Given a filehandle, a buffer and a quantity of characters, it will read that many characters from the filehandle, parking them in the buffer, returning the number of characters actually read, which can be checked against the request to make sure nothing went wrong.

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/arne-sommer/perl/ch-1.pl)

Using a hash to cache filehandles once they are created, Arne shows us the basics. There really need not be much to it.

```perl
    sub readN ($FILE, $number)
    {
      state %handle;

      open($handle{$FILE}, "<", $FILE) unless $handle{$FILE};

      my $string;
      read $handle{$FILE}, $string, $number;
      return $string;
    }
```


[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/jo-37/perl/ch-1.pl)

Jorg demonstrates for properly handling UTF-8 multi-byte characters. He also closes the handle and deletes the cached object should an end-of-file be reached.

```perl
    binmode STDOUT, ':utf8';

    # Read up to $n characters from named file at current position.  Will
    # start over from the beginning after eof was detected for the named
    # file.
    sub readN ($file, $n) {

        # Track filehandles for named files.
        state %fh;

        # Open filehandle for reading characters, not bytes.
        open $fh{$file}, '<:encoding(utf8)', $file or die "$file: $!"
            unless $fh{$file};

        my $nchar = read $fh{$file}, (my $read), $n;
        die "$file: $!" unless defined $nchar;

        # Close filehandle if eof was detected.
        delete $fh{$file} if $nchar < $n;

        $read;
    }
```

[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/roger-bell-west/perl/ch-1.pl)

Roger's interpretation led him to implement successive calls to the same filehandle, as shown in the example. To provide this behavior he keeps his current filehandle in block-scope outside his `readN()` routine. If the filename to be read from changes, the filehandle is closed and reopened with the new file.

```perl
    {
      my $fh;
      my $fn='';
      sub readN {
        my $fnn=shift;
        my $siz=shift;
        if ($fnn ne $fn) {
          $fn=$fnn;
          if (defined $fh) {
            close $fh;
            undef $fh;
          }
        }
        if (!defined $fh) {
          open $fh,'<',$fn;
        }
        my $buf;
        my $l=read ($fh,$buf,$siz);
        if ($l < $siz) {
          close $fh;
          undef $fh;
          $fn='';
        }
        return $buf;
      }
    }
```



### sysread()
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/duncan-c-white/perl/ch-1.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/polettix/perl/ch-1.pl),
[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/gustavo-chaves/perl/ch-1.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/perlboy1967/perl/ch-1.pl), and
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/pete-houston/perl/ch-1.pl)

Some folks wanted to avoid the Perl I/O stack and cut straight to the meat of the matter, opting to use the direct access to system calls given by `sysread`. This eliminates, among other things, all buffering of the input, assuring a more direct path for the data.

When hooked up to a filehandle, either normal or `:utf-8` encoded, and reading from a standard file, `read()` and `sysread()` are pretty interchangeable. The only practical difference will be the lack of buffering, which itself shouldn't be obvious. There *are* differences in the underlying implementation, but they won't present themselves in this simple case, as long as only one form or the other is used.




[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/gustavo-chaves/perl/ch-1.pl)

Gustavo delivers a straightforward solution. A hash is declared with `state` to hold the filehandles, which themselves take care of the file positions. If an end-of-file is reached, the partial result is returned and the filehandle deleted so it can be replaced if required.

```perl
    sub readN {
        my ($filename, $length) = @_;

        my ($fh, $buffer);

        state $cache = {};
        if (exists $cache->{$filename}) {
            $fh = $cache->{$filename};
        } else {
            if (sysopen($fh, $filename, O_RDONLY)) {
                $cache->{$filename} = $fh;
            } else {
                die "Failed to sysopen '$filename'\n";
            }
        }

        my $bytes_read = sysread($fh, $buffer, $length);
        if (! defined $bytes_read) {
            die "Failed to sysread '$filename'\n";
        } elsif ($bytes_read == 0) {
            delete $cache->{$filename};
        }

        return $buffer;
    }
```

[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/pete-houston/perl/ch-1.pl)

Pete also makes allowance for reaching an end-of-file:

```perl
    sub readN {
        my ($filename, $len) = @_;
        state %handles;

        unless (exists $handles{$filename}) {
            open $handles{$filename}, "<:encoding($ENC)", $filename or
                die "Cannot open $ENC-encoded file $filename for reading: $!";
        }
        my $chars = sysread $handles{$filename}, (my $text), $len;
        unless ($chars == $len) {
            # We have reached the end of the file. Close the handle and
            # remove it from the hash
            close $handles{$filename};
            delete $handles{$filename};
        }
        return $text;
    }
```


### getc()
[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/athanasius/perl/ch-1.pl) and
[**Laurent Rosenfeld**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/laurent-rosenfeld/perl/ch-1.pl)

The `getc()` function, as one might expect, gets a single character from an open filehandle.

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/athanasius/perl/ch-1.pl)

The monk here provides us with an example using `getc()`. They've thought out a number of contingencies, producing a robust solution with some unusual differences. For example, if a end-of-file is reached the `readN()` routine continues to produce null strings without error, which is a diversion from the usual choice of closing and reopening the filehandle taken elsewhere. They do, however, provide an optional third `reset` parameter, which calls `seek` internally to reset the open filehandle pointer to the 0 position. A `%pointers` hash keeps track of the filehandles themselves.

You know, to me calling the hash "pointers" brings up many existential questions about the filehandle data structure itself. What *is* a filehandle anyway? The internal name-mapping? The file pointer aspect? The file data itself? I know I'm being a bit ridiculous (what else is new?) but I have to say there's quite a lot of information out there on what a filehandle *does*, but precious little about what is actually *is*. Sure, I'm pretty sure it's an `SVt_PVGV`  typeglob scalar value that holds a pointer to a `PerlIO` thingy, but what's *that*? I am quite certain no one cares about this right now, but I do wonder.

If Athanasius want to call their filehandle hash `%pointers` who am I to say?

```perl
    sub readN
    {
        state %pointers;

        my ($FILE, $number, $reset) = @_;

        $number =~ / ^ $RE{num}{int} $ /x && $number > 0
            or die "Invalid \$number($number): must be an integer > 0\n";

        if (exists $pointers{ $FILE })
        {
            seek( $pointers{ $FILE }, 0, SEEK_SET ) if $reset;
        }
        else
        {
            open( my $fh, '<', $FILE )
                or die qq[Can't open file "$FILE" for reading, stopped];

            $pointers{ $FILE } = $fh;
        }

        my $fh   = $pointers{ $FILE };
        my $text = '';

        for (1 .. $number)
        {
            if (defined( my $char = getc $fh ))
            {
                $text .= $char;
            }
            else
            {
                last;
            }
        }

        return $text;
    }
```

### various BUFFERS plans
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/abigail/perl/ch-1.pl) and
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/dave-jacoby/perl/ch-1.pl)

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/abigail/perl/ch-1.pl)

Abigail presents us with no less than 13 questions as to the meaning of the challenge, pretty much breaking down every point requiring further clarification. And obviously, if you've followed this far, you will also realize there are many of these.

After a rather thorough exploration of the whorl of questions surrounding the description, he provides us with a unique and very interesting solution. Much like Dave Jacoby's example above, he settles on slurping the entire file and caching it on first read, then returning that cached string *n* characters at a time. Here the cached file contents returned are consumed in the reading process, so the next read will always recommence from last unread character.

```perl
    sub readN ($filename, $amount) {
        state $cache;
        chomp ($$cache {$filename} //= do {local (@ARGV, $/) = $filename; <>});
        substr $$cache {$filename} => 0, $amount, ""
    }

```






---

# TASK 2 {#PWC098TASK2}

# Search Insert Position
*Submitted by: Mohammad S Anwar*

You are given a sorted array of distinct integers @N and a target $N.

Write a script to return the index of the given target if found otherwise place the target in the sorted array and return the index.

**Example 1:**
```
    Input: @N = (1, 2, 3, 4) and $N = 3
    Output: 2 since the target 3 is in the array at the index 2.
```
**Example 2:**
```
    Input: @N = (1, 3, 5, 7) and $N = 6
    Output: 3 since the target 6 is missing and should be placed at the index 3.
```
**Example 3:**
```
    Input: @N = (12, 14, 16, 18) and $N = 10
    Output: 0 since the target 10 is missing and should be placed at the index 0.
```
**Example 4:**
```
    Input: @N = (11, 13, 15, 17) and $N = 19
    Output: 4 since the target 19 is missing and should be placed at the index 4.
```

## about the solutions

There were 25 working submissions for the second task this past week. Superficially, the task presented one fairly straightforward solution, which was to iterate up through the sorted list and locate either the value in question or the insert point. There we a number of methods based around this concept.

The other root idea was to improve on this by performing a binary search: establishing a lower and an upper bound for the location, then inserting into the middle of this range, adjusting the bounds of the possible range at each pass until we have successfully homed in on the target.

There were other ways presented, such as calling on the assistance of a module routine, of which there were several candidates available. In the remaining variants if the candidate is not found in the array already, in some way it's added and then found. Which makes more sense once you know the details.

## a note on the directives

After the target index is located, the directives call to:
1. place the target in the sorted array
2. `return` the insert index

Now, `return` is something subroutines, and only subroutines, do. So if following the letter, we need to create a subroutine that takes a value and an array, find the insert index in the array, insert the element into the array and then return only the index.

So what happens to the array?

On the face of it it appears that the array is abandoned. So if that is the case, why insert the element at all? As perhaps throwing away the array just seemed too sad, this seemed to lead to one of two alternatives, to either:
1. ignore the insert directive, or
2. ignore the return directive and not wrap the function up in its own routine

A Zen koan:

>The master says: If you eat this bowl of rice I will hit you with this stick. If you do not eat this bowl of rice I will hit you with this stick. What do you do?
The answer is: you take away the stick.

Reminiscent of this, when faced with two seemingly incompatible negative outcomes a third way did present itself, which was to pass the array in by reference. In this way both the original array can be spliced and the index of the new element returned.

As I can hardly hold thousand-year-old zen puzzles as the standard for completion, any of the three interpretations were fine.

## a LOOPY approach
[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/adam-russell/perl/ch-2.pl),
[**Dave Cross**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/dave-cross/perl/ch-2.pl),
[**Dave Jacoby**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/dave-jacoby/perl/ch-2.pl),
[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/duncan-c-white/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/e-choroba/perl/ch-2.pl),
[**Gustavo Chaves**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/gustavo-chaves/perl/ch-2.pl),
[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/james-smith/perl/ch-2.pl),
[**Nuno Vieira**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/nunovieira220/perl/ch-2.pl), and
[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/sgreen/perl/ch-2.pl)

On the face of it, if we are given a unique, sorted array, there's some position any element belongs in it. And it will either already be found there, or it can be placed there. The only thing remaining is to find either the element of the interval it belongs in. By starting at the beginning and working our way through the array, eventually we will find our location, or, should we not, then the new element belongs on the far end.

[**Adam Russell**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/adam-russell/perl/ch-2.pl)

Adam starts us off with a demonstration of the technique. After a few edge cases for placement at the beginning and the end of the array, the elements are iterated through until the element or the proper hole is found.

```perl
    sub find_insert{
        my($list, $n) = @_;
        if($n < $list->[0]){
            unshift @{$list}, $n;
            return 0;
        }
        if($n > $list->[@{$list} - 1]){
            push @{$list}, $n;
            return @{$list} - 1;
        }
        for(my $i = 0; $i < (@{$list} - 1); $i++){
            return $i if $n == $list->[$i];
            if($n > $list->[$i] && $n < $list->[$i + 1]){
                splice(@{$list}, $i, 2, ($list->[$i], $n, $list->[$i + 1]));
                return $i + 1;
            }
        }
    }
```

[**Duncan C. White**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/duncan-c-white/perl/ch-2.pl)

Using his preferred `Function::Parameters` to implement signatures, Duncan demonstrates traversing the array to find the insertion point. `fun` is this module's version of `sub`, for all practical purposes.

```perl
    fun findorinsert( $target, $values )
    {
        foreach my $pos (0..$#$values)
        {
            my $v = $values->[$pos];
            if( $v == $target )
            {
                say "debug: found $target at pos $pos" if $debug;
                return $pos;
            }
            if( $v > $target )
            {
                say "debug: inserting $target at pos $pos" if $debug;
                splice( @$values, $pos, 0, $target );
                return $pos;
            }
        }
        say "debug: appending $target at end" if $debug;
        push( @$values, $target );
        return $#$values;
    }
```

[**Simon Green**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/sgreen/perl/ch-2.pl)

Simon uses a `while ( ... each ... )` loop construct to parcel out both the indices and their values at each iteration through the array, which is interesting in itself. From there, he looks for the first value found that is greater than the target. Inserting there will move the remainder of the array up one position, so that locates the insertion point.

In his [blog he makes mention](https://dev.to/simongreennet/weekly-challenge-098-235h) of the function `firstidx` from `List::MoreUtils`, which will efficiently perform this same actions, that he has declined to use here. Others were not so disinclined, as we will see later.

```perl
    sub main {
        my ( $array, $target ) = @_;
        my @array = ( $array =~ /(-?\d+)/g );

        while ( my ( $idx, $value ) = each @array ) {
            if ( $value >= $target ) {
                # We found an equal or greater value, target is this index
                say $idx;
                return;
            }
        }

        # The target value is greater than all the values. Display $#array + 1
        say scalar(@array);
    }
```

[**James Smith**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/james-smith/perl/ch-2.pl)

James casts his loop in a somewhat unusual first line, true to form because I suppose he's just a sort of an unusual guy. After passing his list in by reference, he performs another somewhat unusual `splice` if the conditions are met.

In a third noteworthy and unusual line he explicitly calls `warn` to discuss his changes out through STDERR, which is a considerate touch.

```perl
    sub insert_pos {
      my( $t, $l, $val ) = (0,@_);

      ## Repeat unless we have got to end of list or the new entry is greater than val
      $t++ while $t < @{$l} && $l->[$t] < $val;

      ## If we are after the end of the list (to avoid warning) OR
      ## If we haven't found the entry then we use splice to insert it
      splice @{$l},$t,0,$val if $t == @{$l} || $l->[$t] != $val;

        ## Warn to show splice has worked...
        warn ">> $t ( @{$l} )\n"; ## Demonstrate splice

      ## Return the index of the number!
      return $t;
    }
```

## creating a BINARY SEACH
[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/arne-sommer/perl/ch-2.pl),
[**Colin Crain**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/colin-crain/perl/ch-2.pl),
[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/e-choroba/perl/ch-2.pl),
[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/polettix/perl/ch-2.pl),
[**Paulo Custodio**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/paulo-custodio/perl/ch-2.pl),
[**Pete Houston**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/pete-houston/perl/ch-2.pl), and
[**Roger Bell_West**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/roger-bell-west/perl/ch-2.pl)

Instead of starting at an extreme boundary of the array and systematically working our way across, we can instead choose to test our insert point in the middle of the array. Depending on whether the value found there is lower, higher or equal to our target element, the range of values for the correct insert location can be constrained. If the value found is lower than the target, then the lower bound of the range can be moved up to the test location; if the value is higher, than the upper bound of the range can be moved downwards instead. The resulting range available will now be half the size of that previous.The test position is then moved to the middle on the narrowed range and the evaluation is repeated. In this way, by successively halving the possible range of the correct location we can home in on the target until we find either the element itself already present, or a hole with a smaller value on one side and a larger on the other, where the new element should be inserted.

[**Flavio Poletti**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/polettix/perl/ch-2.pl)

Flavio demonstrates the technique, albeit somewhat densely. A `$lo` and `$hi` bound set is established at the ends of the array, and at every iteration one or the other is moved inward, constricting the remaining options.

```perl
    sub search_insert_position ($aref, $new_item) {
       my ($lo, $hi, $i) = (0, $aref->$#*, undef);
       while ($lo <= $hi) {
          $i = int(($lo + $hi) / 2);
          my $item = $aref->[$i];
          if ($new_item == $item)   { return $i }
          elsif ($new_item < $item) { $hi = $i }
          else                      { $lo = $i }
          last if ($hi - $lo) <= 1;
       }
       splice $aref->@*, $i, 0, $new_item;
       return $i;
    }
```

[**My Own Solution**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/colin-crain/perl/ch-2.pl)

In my own solution I tried to put a little more air in it :) As you can see, the same elements are there. A few edge cases need to be addressed for the 0 and final positions, but if the target value is found to be between these extremes, there must be a place for it within the existing array.

```perl
    sub insert {
        my ($num, $arr) = @_;
        $num > $arr->[-1] and do { push $arr->@*,    $num; return $#$arr };
        $num < $arr->[0]  and do { unshift $arr->@*, $num; return 0 };

        my $lower = 0;
        my $upper = $#$arr;
        while ( $lower <= $upper ) {
            my $pos = int( ($lower+$upper)/2 );                 ## midpoint

            return $pos if $arr->[$pos] == $num;
            if ($arr->[$pos-1] < $num < $arr->[$pos]) {
                splice( $arr->@*, $pos, 0, $num );
                return $pos;
            }

            $arr->[$pos] > $num ? ($upper = $pos-1)             ## restrict the range
                                : ($lower = $pos+1);
        }

    }
```

[**E. Choroba**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/e-choroba/perl/ch-2.pl)

Choroba provides us with a brace of solutions, one based on the simple iteration, the other on a binary search. He provides a benchmark as well, showing the binary version to run about 225% faster.

```perl
    sub binary_search {
        my ($array, $value) = @_;
        my ($from, $to) = (0, $#$array);
        while ($from != $to) {
            my $middle = int(($from + $to) / 2);
            if (($array->[$middle] // $value) >= $value) {
                $to = $middle;
            } else {
                $from = $from == $middle ? $to : $middle;
            }
        }
        ++$from if @$array && $value > $array->[-1];

        splice @$array, $from, 0, $value
            unless $from <= $#$array && $array->[$from] == $value;
        return $from
    }
```

[**Arne Sommer**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/arne-sommer/perl/ch-2.pl)

Arne takes a slightly different approach to essentially the same task. Instead of establishing upper and lower bounds to subdivide, a delta is calculated at one half the length of the array and the first try established at the delta position. At every successive iteration the delta is halved and depending on the conditionals at the try position the delta is either added or subtracted from the index.

One important consideration in making this approach work is adding the 0.5 before truncating the new delta value. This ensures that asymmetries of the rounding errors do not add to the point where the delta becomes less than one before the correct location is found.

```perl
    while (1)
    {
      say ": try at $try" if $verbose;

      if ($try == 0 && $N < $N[0])
      {
        say 0;
        last;
      }
      elsif ($try == $end && $N > $N[$end])
      {
        say $end +1;
        last;
      }

      if ($N[$try] == $N)
      {
        say $try;
        last;
      }
      elsif ($N[$try] < $N && $N[$try+1] > $N)
      {
        say ++$try;
        last;
      }

      $delta = int(0.5 + $delta/2);

      if ($N[$try] < $N)
      {
        $try += $delta;
      }
      elsif ($N[$try] > $N)
      {
        $try -= $delta;
      }
    }
```


## not just any BINARY SEARCH, but a whole BINARY SEARCH TREE!

[**Cheok-Yin Fung**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/cheok-yin-fung/perl/ch-2.pl)

Never to shy from trouble, CY has taken the binary search plan to the next level by constructing a full-blown binary search *tree*. Starting with a recycled `BTNode` object grabbed off the shelf in her lab, she populates it with the data from her sorted list of values by splitting the list at every node, subdividing as required. A `search` method attached to the object will return an in-order, LNR traversal ordering of the value searched for, which, incidentally, is the index location of the inserted value.

```perl
    sub search {
        my $aRoot = $_[0];
        my $target = $_[1];
        if ($target == ($aRoot->value)) {
            return $aRoot->order;
        } elsif ( $aRoot->value > $target ) {
            if (defined($aRoot->leftchild->value)) {
                return $aRoot->leftchild->search($target);
            } else {
                return ($aRoot->order);
            }
        } elsif ( $aRoot->value < $target ) {
            if (defined($aRoot->rightchild->value)) {
                return $aRoot->rightchild->search($target);
            } else {
                return ($aRoot->order + 1);
            }
        }
    }
```



## use a MODULE
[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/jo-37/perl/ch-2.pl),
[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/perlboy1967/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/wanderdoc/perl/ch-2.pl)

There were a number of module routines available to make this task simple, with offerings made from `List::Util` and `List::MoreUtils`.

[**Niels van Dijke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/perlboy1967/perl/ch-2.pl)

Perhaps it seemed too easy to do this with a presorted array, but in any case Niels has decided to purposely ignore that qualifier for his method, requiring an extra `sort` step. Then moving in with `firstidx` from `List::MoreUtils`, the first index fulfilling the condition that the value found is greater than or equal to the target is returned. As we saw previously, this index is the correct position for the element.

```perl
    my ($N, @N) = split(/,/);
    @N = sort(@N);

    my $idx = firstidx { $_ >= $N } @N;
    $idx = scalar(@N)
        if ($idx < 0);

    printf "Input: \@N = (%s) and \$N = %d\n", join(',', @N), $N;
    printf "Output: %d\n\n", $idx;
```

[**Athanasius**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/athanasius/perl/ch-2.pl)

The monk uses `first_index` (a synonym for `firstidx`, by the way) twice: once to test and look for an existing element, and then again for the next element greater to find the insert point should it not.

```perl
    my $idx = first_index { $_ == $N } @N;

    if ($idx < 0)
    {
        $msg = 'missing and should be placed';
        $idx = first_index { $_ > $N } @N;
        $idx = $#N + 1 if $idx < 0;
    }
```



[**Jorg Sommrey**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/jo-37/perl/ch-2.pl)

Jorg brings us the very interesting `lower_bound` function from `List::MoreUtils`, which, using a sort-like binary search comparison, efficiently homes in the correct location. There is a small suite of similar functions available in the module designed to search within sorted lists. From the description for `lower_bound`:

>Returns the index of the first element in LIST which does not compare less than val. Technically it's the first element in LIST which does not return a value below zero when passed to BLOCK.

A very interesting function indeed, that certainly seems to have found its place.

```perl
    sub find_or_insert ($val, $arr) :prototype($\@) {

        # A binary search is the tool of choice to operate on sorted data.
        # "lower_bound" provides the wanted index accordingly.  Select zero
        # for an empty array.
        my $idx = @$arr ? lower_bound {$_ <=> $val} @$arr : 0;

        # Insert the value at the identified position if missing.  Use a
        # virtually appended 'inf' to force a "push" operation.
        splice @$arr, $idx, 0, $val if ($arr->[$idx] // 'inf') > $val;
        say "$idx: (@$arr)" if $verbose;

        # Return a reference to the resulting array and the index.
        ($arr, $idx);
    }
```


[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/wanderdoc/perl/ch-2.pl)

The Doctor's double-dose prescription hinges on the following little gem of cleverness:

```perl
     @idx{@$aref} = keys @$aref;
```

What this does is create a reverse lookup  hash with the unique sorted values of the array as keys, pointing to their array indices as values. If the target is already in the array then it will be found in the hash. If not, a search is made with `first` from `List::Util`, for the first element with a value greater than the target value. The index for this value is looked up, and that is the index returned.

```perl
    sub return_idx
    {
         my ($aref, $num) = @_;
         my %idx;
         @idx{@$aref} = keys @$aref;
         return $idx{$num} if exists $idx{$num};


         my $neighbour = first { $_ > $num } @$aref;
         my $should_be_placed = $neighbour ? $idx{$neighbour} : scalar @$aref;
         return $should_be_placed;
    }
```

Covering all bases, if an insert is required another form is provided, which brings us to our next category. With the above trick any existing element can be quickly located. So, if it is *not* present already, we need only add it and sort. Repeating the hash assignment, now it will be found.

```perl
    sub search_insert
    {
         my ($aref, $num) = @_;

         my %idx;
         @idx{@$aref} = keys @$aref;
         return $idx{$num} if exists $idx{$num};
         @$aref = sort {$a <=> $b} @$aref, $num;
         @idx{@$aref} = keys @$aref;
         return $idx{$num};
    }
```




## value not found? Let's ADD IT and LOOK AGAIN
[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/abigail/perl/ch-2.pl),
[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/cristian-heredia/perl/ch-2.pl),
[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/wlmb/perl/ch-2.pl), and
[**Wanderdoc**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/wanderdoc/perl/ch-2.pl)

The gist of this method is described in Wanderdoc's second solution, above. Essentially the title says it all: if the element is not already in the sorted array, then add it to the array and sort again. Looking the second time will always find it.


[**Cristina Heredia**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/cristian-heredia/perl/ch-2.pl)

Christina lays out the steps in a very orderly and well-documented fashion. Her comments explain the process quite well.

```perl
    #Call the function to search in the array
    findNumber();

    #If the target isn't in the array, the target will be added into the array and the "new array" will be sorted. Then, call the search function (with the new array)
    if (findNumber() == -1 ) {
        push @NList, $N;
        my @sorted = sort { $a <=> $b } @NList;
        @NList = @sorted;
        findNumber();
    }

    #Print the position of target inside the array
    print (findNumber()."\n");

    #Function to check if the target is in the array
    sub findNumber{

        #walk through the array
        foreach (my $i=0; $i <@NList; $i++){
            #If the target is in the array, it will return its position
            if ($NList[$i] == $N) {
                return $i;
            }
        }
        return -1;
    }
```

[**Abigail**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/abigail/perl/ch-2.pl)

Abigail strips the logic down to the bare metal, starting by arguing a simple iterative search is likely good as any as we're likely in linear **O**(n) time anyway. From there if the value is found the index is stated and we move to the next input. If it's *not* found then we add it to the end and sort. Then he does a very clever trick with `goto LABEL`, in this case `SEARCH`. The control flow is redirected back to above the search steps, which, because we have inserted the element, will alway now find it.

And yes, this is a very unusual thing to see in Perl. I may have never seen `goto` in this form (in Perl), but makes sense here, in this specific case, to make a single loop without any overhead. I don't know what I feel about it. It's outright weird. Which is of course lovely. But still weird.

```perl
    INPUT: while (<>) {
        chomp;
        my ($N, @N) = split ' ';
      SEARCH:
        for my $i (keys @N) {
            if ($N == $N [$i]) {
                say $i;
                next INPUT;
            }
        }

        #
        # Not found. Insert by adding to the end and sorting.
        #
        @N = sort {$a <=> $b} @N, $N;

        #
        # Now, do the search again -- this time, it will succeed.
        #
        goto SEARCH;
    }
```



[**W. Luis Mochan**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/wlmb/perl/ch-2.pl)

Already quite straightforward, by using an import module the method becomes even simpler, producing potentially very compact solutions. Just to show you how compact, here is Luis' logic in its entirety.

```perl
my ($N, @N)=@ARGV;
say "Input: \@N=(", join(", ", @N), ") and \$N=$N\n",
    "Output: ",
    first_index {$_==$N} sort {$a<=>$b} uniq (@N, $N);
```

Essentially the logic is now a single line.


## UNIQUE GLIMPSES into the FRAGILE, WEAK UNDERBELLY of our SPECIFICATION
[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/ulrich-rieke/perl/ch-2.pl) and
[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/stuart-little/perl/ch-2.pl)

If a element is lost in a dark forest, is it really there? Revisiting our existential quandary with a few more unusual examples of finding what *should* be, instead of exactly *what is*. These things should be the same.

Right guys? Guys? Hey where'd everybody go?


[**Ulrich Rieke**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/ulrich-rieke/perl/ch-2.pl)

Ulrich takes a unique approach, first making an existence hash with keys from values in the array. Checking this lookup, he can determine whether the target value is already present. If it is the array is iterated through until the value is found. If it's *not* found, then we grep the array for all the values smaller than the target. The quantity of these, the size of the grepped list, is the index to be inserted at. The logic is sound, and I like the indirectness of the inference.

```perl
    foreach my $num ( @N ) {
      $numhash{ $num }++ ;
    }
    #if $N is in the hash find the position in the array
    if ( exists $numhash{ $N } ) {
      my $i = -1 ;
      do {
          $i++ ;
      } until ( $N[ $i ] == $N ) ;
      $index = $i ;
    }
    #otherwise : count the number of elements that are smaller than $N
    else {
      $index = scalar( grep { $_ < $N } @N ) ;
    }
    say $index ;
```


[**Stuart Little**](https://github.com/manwar/perlweeklychallenge-club/blob/master/challenge-098/stuart-little/perl/ch-2.pl)

Stuart really probes the dark corners of our understanding of the challenge as stated with his submission. It's short, succinct and very to-the-point. This is it:

```perl
    say scalar(grep {$_ < $ARGV[0]} @ARGV[1..$#ARGV]);

```
Again we have the number of existing  elements smaller than the target value. So the big question is: does it or doesn't it? Given a sorted list this will find the position the candidate *should* occupy. What it doesn't determine is whether it's actually there or not. But then again the challenge says to return the position, not the array. And if an element is added to an array and it's immediately thrown away, who's to say what was done?

Does it satisfy the conditions? With the function considered a black box it does, but it also exposes a certain weakness in our specified requirements.

**"I always wanted to be somebody, but now I realize I should have been more specific." — Lily Tomlin**
---

# BLOGS {#PWC098BLOGS}

---

**That’s it for me this week, people! Warped by the rain, driven by the snow, resolute and unbroken by the torrential influx, I somehow continue to maintain my bearings. Looking forward to next wave, the perfect wave, I am: *your humble servant*.**

# But if Your *THIRST* for *KNOWLEDGE* is not *SLAKED*, {#PWC093BLOGS}
# then *RUN* *(dont walk!)* to the *WATERING HOLE*
# and *READ* these *BLOG* *LINKS*:

**( *don't think, trust your training, you're in the zone, just do it ...* )**


**Aaron Smith**

 * [Perl Weekly Challenge 98 - Aaron Smith](https://aaronreidsmith.github.io/blog/perl-weekly-challenge-098/) ( *Raku* )

**Adam Russell**

 * [Perl Weekly Challenge 098 - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/perl/2021/02/06) ( *Perl* )
 * [Perl Weekly Challenge 098 - RabbitFarm](http://www.rabbitfarm.com/cgi-bin/blosxom/prolog/2021/02/07) ( *Prolog* )

**Andinus**

 * [Challenge 098](https://andinus.tilde.institute/pwc/challenge-098/) ( *Raku* )

**Arne Sommer**

 * [Read 'n' Search with Raku and Perl](https://raku-musings.com/read-n-search.html) ( *Perl & Raku* )

**Colin Crain**

 * [Practicin&#8217; the Three &#8216;R&#8217;s, Hummin&#8217; an&#8217; Homin&#8217; in on Home &#8211; Programming Excursions in Perl and Raku](https://colincrain.com/2021/02/06/practicin-the-three-rs-hummin-an-homin-in-on-home/) ( *Perl & Raku* )

**Dave Jacoby**

 * [Various Positions: Perl Weekly Challenge #98 | Committed to Memory](https://jacoby.github.io/2021/02/01/various-positions-perl-weekly-challenge-98.html) ( *Perl* )

**Flavio Poletti**

 * [PWC098 - Read N-characters - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/02/03/pwc098-readn/) ( *Perl* )
 * [PWC098 - Search Insert Position - ETOOBUSY](https://github.polettix.it/ETOOBUSY/2021/02/04/pwc098-search-insert-position/) ( *Perl* )

**Laurent Rosenfeld**

 * [Perl Weekly Challenge 98: Read N-Characters and Search Insert Position](http://blogs.perl.org/users/laurent_r/2021/02/perl-weekly-challenge-98-read-n-characters-and-search-insert-position.html) ( *Perl & Raku* )

**Luca Ferrari**

 * [Perl Weekly Challenge 98: reading chars and inserting in array – Luca Ferrari](https://fluca1978.github.io/2021/02/01/PerlWeeklyChallenge98.html#task1) ( *Raku* )
 * [Perl Weekly Challenge 98: reading chars and inserting in array – Luca Ferrari](https://fluca1978.github.io/2021/02/01/PerlWeeklyChallenge98.html#task2) ( *Raku* )

**Roger Bell_West**

 * [RogerBW&#39;s Blog: Perl Weekly Challenge 98: Insert N](https://blog.firedrake.org/archive/2021/02/Perl_Weekly_Challenge_98__Insert_N.html) ( *Perl & Raku* )

**Simon Green**

 * [Weekly Challenge 098](https://dev.to/simongreennet/weekly-challenge-098-235h) ( *Perl* )

**W. Luis Mochan**

 * [Perl Weekly Challenge 98 – W. Luis Mochán](https://wlmb.github.io/2021/02/01/PWC098/) ( *Perl* )
