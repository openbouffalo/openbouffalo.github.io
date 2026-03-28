+++
title = "Custom Linux Kernel"
+++

When developing for the BL808, you may want to customize the Linux kernel or add your own device drivers. This guide walks through the SDK setup, Linux source checkout, configuration, and kernel build process.

## Get the SDK

You can download the SDK from the [OpenBouffalo Buildroot releases](https://github.com/openbouffalo/buildroot_bouffalo/releases) page, or build it from source.

If you choose to download a prebuilt SDK, extract it somewhere convenient and skip to [Relocate the SDK](#relocate-the-sdk).

## Requirements when building from source

Set up the [Buildroot environment](/chips/bl808/linux/buildroot/) first, up to but not including the main build step.

## Build the SDK from source

Buildroot provides an `SDK` target intended to simplify application and kernel development for the BL808:

```sh
make SDK
```

This creates the SDK under `~/buildroot_bouffalo/buildroot/output/host/`.

## Relocate the SDK

The following example copies the generated SDK so it sits next to `buildroot/` and `buildroot_bouffalo/`:

```sh
cd ~/buildroot_bouffalo/
cp -r ~/buildroot_bouffalo/buildroot/output/host/ ~/buildroot_bouffalo/bl808-sdk/
cd bl808-sdk
./relocate-sdk.sh
```

## Optional: add the environment name to `$PS1`

In the `environment-setup` file, add:

```sh
PS1="(riscv) $PS1"
```

This makes the shell prompt show `(riscv)` while the SDK environment is active.

## Activate the environment

Source the `environment-setup` file:

```sh
source environment-setup
```

## Get the Linux source

Normally you would fork the project and use your own repository, but this example uses the upstream tree directly:

```sh
cd ~/buildroot_bouffalo/
git clone https://github.com/openbouffalo/linux
```

## Check out the correct branch

The repository contains several BL808-related branches:

- `bl808/all` contains the stable driver set.
- `bl808/boards` contains the board configuration for the drivers.
- Other `bl808/*` branches contain individual feature or driver work.

If you want to create a new driver that does not depend on other in-progress drivers, start from `bl808/boards`. If your work depends on another feature branch such as pinctrl or DMA, base it on the relevant branch instead.

The proposed branching structure is discussed [here](https://github.com/openbouffalo/linux/issues/1).

If you only want to configure the kernel without adding new drivers, use the stable branch:

```sh
git checkout bl808/all
```

## Copy the defconfig

Use the default BL808 kernel config:

```sh
cp arch/riscv/configs/bl808_defconfig .config
```

## Optional: run menuconfig

You can now modify the kernel configuration:

```sh
make menuconfig
```

## Build

Build the kernel:

```sh
make -jN
```

Replace `N` with the number of CPU cores you want to dedicate to the build.

Example:

```sh
make -j20
```

This produces the kernel image in `arch/riscv/boot/` and device trees in `arch/riscv/boot/dts/bouffalolab/`.

Main output files:

- `arch/riscv/boot/Image`
- `arch/riscv/boot/dts/bouffalolab/bl808-pine64-ox64.dts`
- `arch/riscv/boot/dts/bouffalolab/bl808-sipeed-m1s.dts`

## Flash

If you used the method described in [Flashing](/chips/bl808/linux/flashing/), copy these files to the root of the SD card and replace the corresponding existing files.

