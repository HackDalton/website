---
title: Windows Subsystem For Linux Installation Instructions
subtitle: Some problems may require the Windows Subsystem for Linux to be solveable on a Windows computer.
prisim: true
hidden: true
layout: page
---

<div class="notification is-warning">
  <strong>Not using a Windows computer?</strong> Computers running macOS or Linux are already set up to compete! You don't have to worry about these instructions.
</div>

Installing the Windows Subsystem for Linux (WSL) is easy to do, and gives you access to a Linux terminal on a windows machine.

## Step 1: Enable WSL through PowerShell
Open PowerShell as an Administrator by right clicking on the Start button, then clicking "Windows PowerShell (Admin)."

![PowerShell (Admin)](/assets/img/powershell.jpg)

Type the following into powershell, then press enter.
```powershell
Enable-WindowsOptionalFeature -Online -FeatureName Microsoft-Windows-Subsystem-Linux
``` 

When prompted, restart your computer.

## Step 2: Install Ubuntu
<div class="notification is-info">
  <strong>Prefer a different distro?</strong> You're more than welcome to use that; however, the problems were written with Ubuntu in mind, so we reccomend using Ubuntu.
</div>

Install [Ubuntu](https://www.microsoft.com/en-us/p/ubuntu-2004-lts/9n6svws3rx71?activetab=pivot:overviewtab) from the Windows Store.

<a class="button is-primary" href="https://www.microsoft.com/en-us/p/ubuntu-2004-lts/9n6svws3rx71?activetab=pivot:overviewtab">Install Ubuntu</a>

## Step 3: Launch Ubuntu
You can launch Ubuntu by simply typing "Ubuntu" into the start menu.

![Launch Ubuntu](/assets/img/ubuntu-launch.jpg)