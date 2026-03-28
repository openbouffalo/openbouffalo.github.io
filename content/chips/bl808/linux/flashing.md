+++
title = "Flashing"
+++

After you have either [built your own Buildroot images](/chips/bl808/linux/buildroot/) or downloaded the [prebuilt binaries](https://github.com/openbouffalo/buildroot_bouffalo/releases), the next step is flashing them to the board.

## Prerequisites

Before starting, make sure you have:

- Downloaded the preferred image for your SoC and extracted it, or built it yourself.
- Downloaded DevCube from <http://dev.bouffalolab.com/download>.
- Connected the BL808 board to your PC over the serial port.
- Put the BL808 board into programming mode:
  Press the `BOOT` button while resetting or applying power, then release `BOOT`.

Flashing does not work with DevCube `v1.8.4`, so use `v1.8.3` or another known-good version. See [openbouffalo/buildroot_bouffalo#60](https://github.com/openbouffalo/buildroot_bouffalo/issues/60).

## Set up DevCube

- Run DevCube, select `BL808`, then switch to the `MCU` page.
- Select the UART port and set the baud rate to `2000000`.

UART mapping for the MCU page:

- TX: physical pin `1`, `GPIO 14`
- RX: physical pin `2`, `GPIO 15`

## Set image addresses

On the `MCU` page:

- Under `M0 Group[Group0]`, set the image address to `0x58000000` and select `m0_lowload_bl808_m0.bin`.
- Under `D0 Group[Group0]`, set the image address to `0x58100000` and select `d0_lowload_bl808_d0.bin`.
- Click `Create & Download` and wait for completion.

## Download the firmware image

- Switch to the `IOT` page in DevCube.
- Enable `Single Download`.
- Set the address to `0x800000`.
- Select the `bl808-firmware.bin` file.
- Click `Create & Download` again and wait for completion.

## Flash the SD card

Flash either `sdcard-pine64-*.img.xz` or `sdcard-pine64-*.img` to the SD card using `dd` after decompression, or use [balenaEtcher](https://github.com/balena-io/etcher).

## Connect to the serial console

To access the SoC console:

- TX: physical pin `32`, `GPIO 16`
- RX: physical pin `31`, `GPIO 17`
- Baud rate: `2000000`

Double-check the image addresses and file paths before flashing.

