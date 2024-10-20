---
slug: /notes/unison-versions
date: 2023-12-22
title: Compiling Specific Versions of Unison (File Sync Application)
description: Learn how to compile specific versions of the Unison file sync application to ensure compatibility across devices. J. Barrett Coats provides a step-by-step guide on handling different versions of Unison and OCaml in varied environments.
tags: ["Unison", "file sync", "OCaml", "compiling Unison", "cross-platform sync", "version management", "Linux", "FreeBSD"]
---

Unison can be very fussy about which version of the application and which
version of the ocaml library you are using on both the client and server side.
It can sometimes be a real chore to get all of the different devices on the same
version and working well with each other, especially in a mixed architecture/OS
environment.

## Determine Your Target Version

Consider the various OSs you hope to support and choose the one you
feel like could be the hardest to target the correct version on. Linux, MacOS,
and Windows typically have binaries available from
[unison's releases page in github](https://github.com/bcpierce00/unison/releases)
that will match most configurations so it would be wise to choose an OS or
architecture that is not readily available for download.

In this example I am going to install the version in FreeBSD's package manager:

```sh
pkg update
pkg install unison
```

After installation, audit which version was installed by running the following command:

```sh
unison -version
```

In my case it returned: `unison version 2.51.3 (ocaml 4.05.0)`. These are
versions I need to target for all my other installations.

## Download Unison Binaries for Common Configurations

Going to [unison's releases page in github](https://github.com/bcpierce00/unison/releases),
you will need to locate the version of unison (not ocaml) that you need to
download. Once, you have located the release you need expand the **Assets**
section and download the specific ocaml version for the OS and architecture you
need and install them in to your respective systems.

## Compile Unison Binaries for Uncommon Configurations

Hopefully, you only have one uncommon machine you need a binary for, but if you
have two or more you will more than likely need to compile unison for the
specific platform you need. I chose to compile unison on an ARM/Linux machine by
doing the following.

### Get the Correct Version of Unison

Check out the version of the source to match your target version. In this
example I am looking for version `2.51.3` of unison:

```sh
git clone https://github.com/bcpierce00/unison.git
cd unison
git checkout v2.51.3
```

### Switch to the Correct Version of opam/ocaml

Install opam from your package manager:

```sh
sudo apt install opam
```

Initialize your opam environment:

```sh
opam init
```

When prompted with the following two choices choose no for both:

```text
Do you want opam to modify ~/.profile? [N/y/f]
(default is 'no', use 'f' to choose a different file)

A hook can be added to opam's init scripts to ensure that the shell remains in
sync with the opam environment when they are loaded. Set that
up? [y/N]
```

Switch your opam environment to the correct ocaml version you need by running
the following command (be sure to switch out the version in the example with the
version you need):

```sh
opam switch create 4.05.0
```

Update the current shell environment to use the version of opam that was selected:

```sh
eval $(opam env)
```

### Compile Unison

Run make commands to build the application:

```sh
make clean
make
```

Check the version you have built:

```sh
./src/unison -version
```

If everything looks good, run the installer script (or just manually install the
built binary)

```sh
make install
```
