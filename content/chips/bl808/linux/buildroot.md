+++
title = "Buildroot"
+++

Setting up a Buildroot environment for the BL808 SoC is a practical starting point for developing custom Linux firmware and applications. This guide covers the required tools, the repository layout, the default configuration, and the resulting output artifacts.

## Overview

- Install the required host tools.
- Download Buildroot and the `buildroot_bouffalo` overlay.
- Export the overlay path so Buildroot can find the board support.
- Load the default configuration for the Pine64 Ox64 board.
- Optionally adjust the configuration with `make menuconfig`.
- Build the images.
- Collect the output artifacts from `output/images/`.

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

### Config tools

- `ncurses5`, sometimes packaged as `ncurses`, `ncurses-dev`, or similar

## Get Buildroot and set up the overlay

Download the sources:

```sh
mkdir buildroot_bouffalo && cd buildroot_bouffalo
git clone https://github.com/buildroot/buildroot
git clone https://github.com/openbouffalo/buildroot_bouffalo
```

Export the overlay path so Buildroot can find `buildroot_bouffalo`:

```sh
export BR_BOUFFALO_OVERLAY_PATH=$(pwd)/buildroot_bouffalo
```

Change into the Buildroot directory:

```sh
cd buildroot
```

## Load the default configuration

This loads the Pine64 Ox64 board configuration into the default `.config` file:

```sh
make BR2_EXTERNAL=$BR_BOUFFALO_OVERLAY_PATH pine64_ox64_defconfig
```

## Optional configuration

You can skip directly to the build step, or customize the Buildroot environment with:

```sh
make menuconfig
```

## Build

Build the full environment with:

```sh
make
```

This can take anywhere from a few minutes to several hours depending on your machine and network connection. One notable download is the Xuantie compiler, which is roughly `500 MB`.

By default, Buildroot does not support top-level parallel builds, so running `make -jN` is not required. Individual build steps that support parallelism will use available CPU cores on their own.

## Output

After a successful build, the generated files are placed in `buildroot_bouffalo/buildroot/output/images`.

```sh
cd output/images/
ls -l
```

Example output:

```text
total 210116
-rw-r--r-- 1 root root   13154816 Apr 25 21:33 Image
-rw-r--r-- 1 root root    7340032 Apr 25 21:35 bl808-firmware.bin
-rwxr-xr-x 1 root root       4012 Apr 25 21:33 bl808-pine64-ox64.dtb
-rwxr-xr-x 1 root root       4106 Apr 25 21:33 bl808-sipeed-m1s.dtb
-rw-r--r-- 1 root root        350 Apr 25 21:35 boot-m1s.scr
-rw-r--r-- 1 root root        352 Apr 25 21:35 boot-pine64.scr
-rwxr-xr-x 1 root root        352 Apr 25 21:35 boot.scr
-rw-r--r-- 1 root root  209715200 Apr 25 21:35 boot.vfat
-rwxr-xr-x 1 root root      31360 Apr 25 21:35 d0_lowload_bl808_d0.bin
-rwxr-xr-x 1 root root       4352 Apr 25 21:35 efusedata.bin
-rwxr-xr-x 1 root root        256 Apr 25 21:35 efusedata_mask.bin
-rwxr-xr-x 1 root root        256 Apr 25 21:35 efusedata_raw.bin
drwxr-xr-x 2 root root       4096 Apr 25 21:35 extlinux
-rw-r--r-- 1 root root     109864 Apr 25 21:32 fw_jump.bin
-rw-r--r-- 1 root root    1200416 Apr 25 21:32 fw_jump.elf
-rwxr-xr-x 1 root root      65760 Apr 25 21:35 m0_lowload_bl808_m0.bin
-rw-r--r-- 1 root root  536870912 Apr 25 21:35 rootfs.ext2
lrwxrwxrwx 1 root root         11 Apr 25 21:35 rootfs.ext4 -> rootfs.ext2
-rw-r--r-- 1 root root   50247680 Apr 25 21:35 rootfs.tar
-rw-r--r-- 1 root root 1820364800 Apr 25 21:35 sdcard.img
-rw-r--r-- 1 root root     519746 Apr 25 21:32 u-boot.bin
-rw-r--r-- 1 root root     315597 Apr 25 21:32 u-boot.bin.lz4
-rw-r--r-- 1 root root      14314 Apr 25 21:32 u-boot.dtb
```

The main files of interest are:

- `bl808-firmware.bin`
- `d0_lowload_bl808_d0.bin`
- `m0_lowload_bl808_m0.bin`
- `sdcard.img`

The remaining files are intermediate artifacts or helper images.

## Next steps

- [Flashing](/chips/bl808/linux/flashing/)
- [Custom Linux Kernel](/chips/bl808/linux/custom_linux_kernel/)
- [Custom Lowload](/chips/bl808/linux/custom_low_load/)

## Full example on Arch Linux

These commands were run in order on a fresh Arch install:

```sh
cd ~
mkdir buildroot_bouffalo && cd buildroot_bouffalo
pacman -Syu git which sed make binutils diffutils gcc bash patch gzip bzip2 perl tar cpio unzip rsync file bc findutils wget ncurses
git clone https://github.com/buildroot/buildroot
git clone https://github.com/openbouffalo/buildroot_bouffalo
export BR_BOUFFALO_OVERLAY_PATH=$(pwd)/buildroot_bouffalo
cd buildroot
make BR2_EXTERNAL=$BR_BOUFFALO_OVERLAY_PATH pine64_ox64_defconfig
make menuconfig
make
cd output/images/
ls
```

## Full example on Debian

These commands were run in order on a fresh Debian install:

```sh
cd ~
mkdir buildroot_bouffalo && cd buildroot_bouffalo
sudo apt update
sudo apt install git sed make binutils diffutils gcc g++ bash patch gzip bzip2 perl tar cpio unzip rsync file bc findutils wget libncurses-dev libssl-dev
git clone https://github.com/buildroot/buildroot
git clone https://github.com/openbouffalo/buildroot_bouffalo
export BR_BOUFFALO_OVERLAY_PATH=$(pwd)/buildroot_bouffalo
cd buildroot
make BR2_EXTERNAL=$BR_BOUFFALO_OVERLAY_PATH pine64_ox64_defconfig
make menuconfig
make
cd output/images/
ls
```

