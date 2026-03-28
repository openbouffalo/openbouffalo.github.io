+++
title = "Custom Lowload"
+++

To use peripherals that are not connected to the core running Linux on D0, interrupt handling currently needs to happen on the M0 core. This guide shows how to set up the environment for building custom lowload binaries.

## Requirements

Install the following tools before building.

### Source tools

- `git`

### Build tools

- `which`
- `sed`
- `make` version `3.81` or newer
- `binutils`
- `build-essential` on Debian-based systems
- `diffutils`
- `gcc` version `4.8` or newer
- `g++` version `4.8` or newer
- `bash`
- `patch`
- `gzip`
- `bzip2`
- `perl` version `5.8.7` or newer
- `tar`
- `cpio`
- `unzip`
- `rsync`
- `file`, available as `/usr/bin/file`
- `bc`
- `findutils`
- `wget`
- `python3`

### Config tools

- `ncurses5`, sometimes packaged as `ncurses`, `ncurses-dev`, or similar

## Install dependencies on Arch Linux

```sh
pacman -Syu git which sed make binutils diffutils gcc bash patch gzip bzip2 perl tar cpio unzip rsync file bc findutils wget ncurses python3
```

## Install dependencies on Debian

```sh
sudo apt update
sudo apt install git sed make binutils diffutils gcc g++ bash patch gzip bzip2 perl tar cpio unzip rsync file bc findutils wget libncurses-dev python3
```

## Get the tools and source

```sh
cd ~/buildroot_bouffalo/
git clone https://github.com/openbouffalo/OBLFR.git
git clone https://github.com/bouffalolab/bl_mcu_sdk.git
git clone https://gitee.com/bouffalolab/toolchain_gcc_t-head_linux.git
```

## Set up the toolchain path

```sh
PATH=$PATH:$(pwd)/toolchain_gcc_t-head_linux/bin/
```

## Build

```sh
cd OBLFR/apps/m0_lowload
make
```

## Flashing

The resulting files:

- `OBLFR/apps/m0_lowload/build/build_out/m0_lowload_bl808_m0.bin`
- `OBLFR/apps/d0_lowload/build/build_out/d0_lowload_bl808_d0.bin`

can be flashed as described in [Flashing](/chips/bl808/linux/flashing/).

