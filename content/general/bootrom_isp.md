+++
title = "BootROM ISP"
+++

{{< hint type=important >}}
This page is old and unfinished, so some information might not be fully accurate.
{{< /hint >}}

This page describes Bouffalo ISP Protocol V1, which is used to run images, write images to flash, or program fuses over UART, USB, SDIO, or JTAG.

It is integrated in BL602, BL702, BL808, and BL616 series chips, although each series has some differences and improvements in the protocol.

## Supported interfaces by chip

| Chip | UART | USB | SDIO | JTAG | SD Card |
|------|------|-----|------|------|---------|
| BL602 Series | Yes | No | Yes | ? | No |
| BL702 Series | Yes | Yes | No | ? | No |
| BL808C | Yes | Broken | ? | ? | Broken? |
| BL808D | Yes | N/A | ? | ? | N/A |
| BL606P | Yes | ? | ? | ? | N/A |
| BL616 Series | Yes | Yes | ? | ? | ? |

## Getting into ISP or BootROM mode

The BootROM is not explored enough yet to describe the complete boot process, but the known and tested ISP entry methods are documented below.

Currently there are two known ways to enter ISP mode.

### Via GPIO

Every chip using ISP Protocol V1 can enter ISP mode by sampling a specific pin during boot. This mechanism is implemented in BootROM.

Using BL602 as an example, the boot pin must be driven to the required level, usually high, about `0.1 s` before powering up the chip with `PU_CHIP`. The pin then needs to remain at that level for at least `2 ms` after `PU_CHIP` goes high.

| Chip | Pin | ISP mode when pin is | Note |
|------|-----|----------------------|------|
| BL602 Series | IO8 | High | |
| BL702 Series | IO28 | High | |
| BL808 Series | IO39 | High | Multiplexed with QSPI D3 |
| BL616 Series | IO2 | High | Multiplexed with JTAG? Not fully confirmed |

### Via software

There are registers that can reboot the chip and automatically launch ISP mode.

TODO: document the exact register sequence.

## Handshake

TODO.

## Run firmware

TODO.

