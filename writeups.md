---
title: Writeups
subtitle: HackDalton 2020 writeups and resources
layout: page
toc: true
---

# Solutions submitted by participants

These solutions were submitted in the [chat](/closing-chat.txt) during the closing remarks.

### CoolCPU 1

Alex Studer's assemby solution
```nasm
CON 0x93                ; 22 93
loop:                   ; this will be at position 0x02
	LDB [A]             ; 05
	SWB                 ; 40
	JZ end              ; 31 0C
	SWB                 ; 40
	STB 0xF1            ; 12 F1
	INC                 ; 20
	JP loop             ; 30 02
end:                    ; this will be at position 0x0C
	HCF                 ; FF
```

William Barkoff's assembly solution
```nasm
CON 0x93             ; stores 0x93 in register A
DEC
SWB
loop:
	SWB              ; puts current position back in register A
	INC
	LDB [A]          ; loads value at current position into register B 
	STB 0xf1         ; outputs value at register B
	SWB              ; swaps a and b
	JNZ loop         ; stop CPU
	HCF
```

rmorycz's (TechHacks Team) assembly solution
```nasm
	CON 0x93 ; 22 93
loop:
	LDB [A]  ; 05
	STB 0xF1 ; 12 F1
	INC      ; 20
	JNZ loop ; 32 02
	HCF      ; FF
```

### DynamicSystems Link
rmorycz emailed us his DynamicSystems Link client [github.com/ThatNerdyPikachu/dsl800](https://github.com/ThatNerdyPikachu/dsl800)

# HackDalton official writeups

## General Knowledge

### Lunchtime Infrastructure Chat (10pts)
Attend the lunchtime infrastructure chat at 12:30 and see if you can find the flag.

**Missed the chat?** No problem, slides are available at [slides.hackdalton.com](https://slides.hackdalton.com)

> The flag was located on a slide in the chat.

**Requirements**

None

### Hello, netcat (50pts)
* [Source](https://github.com/HackDalton/hello-netcat)
* [Writeup](https://github.com/HackDalton/hello-netcat/blob/master/WRITEUP.md)

Use the `netcat` program to listen to `problems.hackdalton.com` on port `17156`.

**Hints**
1. Try running `man nc` in terminal to read the manual for the netcat program

**Requirements**

None

### Talking loudly (100pts)
* [Source](https://github.com/HackDalton/talking-loudly)
* [Writeup](https://github.com/HackDalton/talking-loudly/blob/master/WRITEUP.md)

I heard that someone is transmitting the flag in parts on problems.hackdalton.com:41694, but someone else is transmitting a bunch of nonsense to try and prevent you from hearing it.

**Hints**
1. Try running `man grep` in terminal to read the manual for the `grep` program
2. Read about [pipes](https://en.wikipedia.org/wiki/Pipeline_(Unix)).

**Requirements**
- Hello, netcat

### Secret Agent (200pts)
* [Source](https://github.com/HackDalton/secret-agent)
* [Writeup](https://github.com/HackDalton/secret-agent/blob/master/WRITEUP.md)

Agent, the fate of the world rests on you. Terrorists have taken control of a nuclear arsenal and now have control of a stockpile of nuclear weapons. They have locked themselves in the arsenal with a password, and when entered wrong or broken into, the nuclear missiles will automatically be launched and strike capital cities around the world. The terrorists are communicating the password between each other using the attached image. The world is doomed unless you can crack the code, special agent.

**Files**
- [nhb.out.png](https://github.com/HackDalton/secret-agent/releases/download/hd-final/nhb.out.png)

**Hints**
1. Look into least-significant-bit encoding.

**Requirements**
- Talking loudly

### Homemade HTTP (400pts)
* [Source](https://github.com/HackDalton/homemade-http)
* [Writeup](https://github.com/HackDalton/homemade-http/blob/master/WRITEUP.md)

Try and get into the website at problems.hackdalton.com by connecting to this HTTP server, but be careful - there's a CAPTCHA first! I heard the username is `admin` and the password is `secret`.

```shell
nc problems.hackdalton.com 33858
```

**Hints**
1. Read about http

**Requirements**
- Talking loudly

---

### Pretty Good Privacy (Removed)
This problem was removed at the last minute due to technical issues.

* [Source](https://github.com/HackDalton/pretty-good-privacy)

It was intended that the user would enter their PGP Public Key, and the server would encrypt and sign it, then the user would need to decrypt it.

## Web Exploitation

### Let me in 1 (100pts)

* [Source](https://github.com/HackDalton/let-me-in-1)
* [Writeup](https://github.com/HackDalton/let-me-in-1/blob/master/WRITEUP.md)

My friend got locked out of his website. Can you help him get back in?

http://problem-letmein1.hackdalton.com/

**Hints**
1. Try using the "View source" option in your browser

**Requirements**

None

### Let me in 2 (200pts)
* [Source](https://github.com/HackDalton/let-me-in-2)
* [Writeup](https://github.com/HackDalton/let-me-in-2/blob/master/WRITEUP.md)

My friend finally upgraded the security on his website; however he forgot his password again. He remembered that his username is `admin`, but he needs to get into the site without his password.

http://problems.hackdalton.com:9458

**Hints**
1. Read about [SQL Injection](https://en.wikipedia.org/wiki/SQL_injection). [This article](https://www.cloudflare.com/learning/security/threats/sql-injection/) is pretty helpful.

**Requirements**
- Let me in 1

### Get a py 1 (300pts)
* [Source](https://github.com/HackDalton/get-a-py-1)
* [Writeup](https://github.com/HackDalton/get-a-py-1/blob/master/WRITEUP.md)

I have a friend who owns a bakery, and he just released a new website, but he's a bit worried about the security. Could you check it out for him?

http://problems.hackdalton.com:35365

**Hints**
1. Read about [Server Side Template Injection](https://portswigger.net/research/server-side-template-injection).

**Requirements**

None

### Get a py 2 (400pts)
* [Source](https://github.com/HackDalton/get-a-py-2)
* [Writeup](https://github.com/HackDalton/get-a-py-2/blob/master/WRITEUP.md)

I explained the vulnerabilities in the Bakery website to my friend, but he disregarded them :(. I explained to him how severe these security issues are, but he didn't believe me. To prove me wrong, he made an "admin" page and hid a flag in there.

http://problems.hackdalton.com:16617

**Hints**
1. Use what you learned in Get a Py 1 to access the secret key. What can a Flask secret key do?
2. What does a flask secret key have to do with session cookies?

**Requirements**
- Get a py 1

### Get a py 3 (600pts)
* [Source](https://github.com/HackDalton/get-a-py-3)
* [Writeup](https://github.com/HackDalton/get-a-py-3/blob/master/WRITEUP.md)

My friend still doesn't believe me that his bakery website is insecure. I told him that anyone can access everything on his server, but he still doesn't believe me (even after the whole admin page fiasco). To prove it to him, he hid a flag in a file on his server and wants me to provide it to him.

http://problems.hackdalton.com:43596

> Note: If you break something in this problem, please report it immediately on the [help site](https://help.hackdalton.com). That way, we can fix it and the competition can go on for everyone.

**Hints**
1. See if you can access a list of classes that are used in the site

**Requirements**
- Get a py 2

## Binary Exploitation & Reverse Engineering

### Decompile (100pts)
* [Source](https://github.com/HackDalton/decompile)
* [Writeup](https://github.com/HackDalton/decompile/blob/master/WRITEUP.md)

I found this program online, but I keep getting unlucky and not getting a flag. Can you help?

**Files**
- [Program.class](https://github.com/HackDalton/decompile/releases/download/hd-final/Program.class)

**Requirements**

None

### Heist (150pts)
* [Source](https://github.com/HackDalton/heist)
* [Writeup](https://github.com/HackDalton/heist/blob/master/WRITEUP.md)

You and [your friends with city names](https://en.wikipedia.org/wiki/Money_Heist) decide to break into the Royal Mint of Spain to print 2.4 billion euros without stealing a cent from anyone*. You're in charge of disarming the security system before you break in. You were able to find a copy of the software used. Connect to the Royal Mint of Spain's security system with `nc problems.hackdalton.com 24482`.

\*I guess technically you're stealing from everyone who uses the Euro.

**Requirements**

None

### CoolCPU 1 (400pts)
_This problem was written by [Alex Studer](https://alex.studer.dev), a guest problem writer._

* [Source](https://github.com/HackDalton/coolcpu)
* [Writeup](https://github.com/HackDalton/coolcpu/blob/master/WRITEUP-1.md)

You've been hearing about the exciting new DynamicSystems&trade; CoolCPU, which they finally announced on their website: [problems.hackdalton.com:45414](http://problems.hackdalton.com:45414)

You've also heard from a friend that there's some...interesting data...on the online CoolCPU simulator. More specifically, a string of characters at memory address `0x93`, ending with a `0x00` character.

**Requirements**

None

### CoolCPU 2 (600pts)
_This problem was written by [Alex Studer](https://alex.studer.dev), a guest problem writer._

* [Source](https://github.com/HackDalton/coolcpu)
* [Writeup](https://github.com/HackDalton/coolcpu/blob/master/WRITEUP-2.md)

DynamicSystems&trade; finally announced version 2 of the CoolCPU, and updated their website for it: [problems.hackdalton.com:28616](http://problems.hackdalton.com:28616)

You've also heard from a friend that this time the...interesting data...is now on the new hard drive of the online CoolCPU simulator. More specifically, it takes up exactly one sector of the hard drive.

**Requirements**
- CoolCPU 1

### DynamicSystems Link (800pts)
_This problem was written by [Alex Studer](https://alex.studer.dev), a guest problem writer._

* [Source](https://github.com/HackDalton/dynamicsystems-link)
* [Writeup](https://github.com/HackDalton/dynamicsystems-link/blob/master/WRITEUP.md)

You've been trying to get into the servers of _DynamicSystems_, a company that...well, no one really seems to know what they do.

You've discovered that their employees connect to a _link server_ and download some secret information from there, which DynamicSystems refers to as a "flag".

**Requirements**
- CoolCPU 1
