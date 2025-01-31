+++
date = '2025-01-05T19:23:50-06:00'
draft = false
title = 'How I manage my Dotfiles'
description = "How I setup and manage my dotfiles in my manjaro system"
tags = [
    "dotfiles",
    "productivity",
]
+++

This is mostly a blog post for me to look back and understand how I've setup and configured my dotfiles and other applications that I use.

This is how my shell currently looks like. If you spend considerable amount of time in the shell, it usually is worth to make it look nice.
<!-- <p align="center">
<a href="https://asciinema.org/a/niycA8U7FqciflhJSjx3B7xIJ" target="_blank"><img src="https://asciinema.org/a/niycA8U7FqciflhJSjx3B7xIJ.svg" /></a>
</p> -->

[![Watch the recording](https://asciinema.org/a/niycA8U7FqciflhJSjx3B7xIJ.svg)](https://asciinema.org/a/niycA8U7FqciflhJSjx3B7xIJ)
> OS=Linux SHELL=zsh TERM=xterm-256color
---
### ZSH and Prezto Reference
Before we get into the setup, let's try to understand the various shell related dotfiles that are in use.

#### Breakdown of zsh dotfiles
There are five basic starup files which get sourced whenever a new shell is instantiated (excluding prezto config). These are all located in ```$HOME```, i.e ```~/```.
 * ```.zshenv``` - This file gets sourced in ___all___ shells. Environment variables which are ___updated frequently___ should be set here. (```$PATH```, ```$EDITOR```, ```$PAGER```)
 * ```.zprofile``` - Similar to ```.zlogin``` and run in login ```shells```. __NOT__ meant to be used together with ```.zlogin```
 * ```.zshrc``` - This file gets sourced in ___all interactive___ shells (```[[ -o interactive ]]``` is _true_). It should contain commands for interactive usage. Aliases, functions, options, key bindings, command completion, prompt, coloring are defined and configured here.
    ##### Prezto dotfiles
     * ```.zpreztorc``` - Gets sourced after ```.zshrc```. This file configures Prezto. ```.zshrc``` sources ```.zprezto/init.zsh```. ```.zprezto/init.zsh``` sources ```.zpreztorc```.     
* ```.zlogin``` - This file gets sourced in ___all login___ shells (```[[ -o login ]]``` is _true_). It should ___not___ modify the shell environment at all. Rather, it should be used to run external commands (fortune, msgs, etc).
 * ```.zlogout``` - Gets sourced when ___login___ shells exit. Used to clear and reset the terminal.
#### Prezto's execution order

According to zsh documentation,
> You may wonder why there are both ```.zprofile``` and ```.zlogin```, when they are both for ___login___ shells: the answer is the obvious one, that one is run before, one after ```.zshrc```. This is historical; Bourne-type shells run ```/etc/profile```, and csh-type shells run ```~/.login```, and zsh tries to cover the bases with its own startup files.
>
1. ```~/.zshenv```
2. ```~/.zprofile``` - Prezto source this file for ___non-login___ and ___level 1___ shells. (```[[ ( "$SHLVL" -eq 1 && ! -o LOGIN ) ]]```)
3. ```~/.zshrc```
4. ```~/.zpreztorc```
5. ```~/.zlogin``` - Only for login shells
6. ```~/.zlogout``` - Only for login shells

---
## How I manage my dotfiles?
Simple, using git. I have [git repository](https://github.com/kumaran-14/dotfiles), ```~/.dotfiles```.
All necessary files should be symlinked to ```$HOME```.
In the near future, ~~the files will be renamed to ```filename.symlink```, and a new ```init.sh``` script will be created which will recursively symlink the files~~  GNU Stow will be used to auto symlink necessary files.

When ```~/.zshrc``` file is sourced, the script in it sources all my ```*.zsh``` configuration in the ```~/.dofiles/``` recursively. 
#### My filesystem
I tweaked [XDG](https://wiki.archlinux.org/index.php/XDG_Base_Directory) base directory specification to suit my needs.
* ```$HOME/.config``` is now ```$HOME/.dotfiles```
* ```$HOME/.local/bin``` is now ```$HOME/.dotfiles/local/bin```
* ```$HOME/.local/share``` is now ```$HOME/.dotfiles/local/share```

Why? Because symlinking is a tedious process and it's way more easier to add ```$HOME/.dotfiles/local/bin``` to ```$PATH```

#### Prompt

I use Spaceship prompt. I've configured the shell prompt symbol to be random. This sparks joy in me. Have a look at `zsh/prompt.zsh` for prompt configuration

#### Vim

I prefer to use vim wherever I can. Currently I use vim in 
* chrome using vimium extension,
* ideavim in Idea products (Clion mostly)
* vscodevim in vscode

~/.vimrc is symlinked, and vim plugins are installed through vim-plug in ~/.vim/plugged

#### Vscode
I can't remember shorcuts for different applications over the long term. So I prefer to learn one type of shortcuts and use it everywhere. So I learnt IntelliJ's shortcuts and use the same shortcuts via extension in vscode.


#### Grub Screen
I customized my grub bootloader to have this background image. Yes, I'm a Messi fan.
![Grub Background](/blog/images/grub-screenshot.png?height=10px)


### Inspiration
[Holman's dotfiles.](https://github.com/holman/dotfiles)

