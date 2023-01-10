+++
title = "BootROM"
+++

## General information

- Location: `0x21000000 - 0x21020000`
- Size: `128 KiB`
- Can boot from: UART, SDIO, SPI Flash
- BootROM mode trigger: IO8 pulled HIGH

## Boot Info header structure

Size: `20 Bytes`

- `Byte 0 - 3` - BootROM version
- `Byte 4` - Sign configuration
- `Byte 5` - Encrypt configuration
- `Byte 6 - 11` - Unknown
- `Byte 12 - 17` - ChipID (MAC?)
- `Byte 18 - 19` - Unknown


## Dumps

| File                                                                       | Chip   | Version | Build Date            | Dumped by |
|----------------------------------------------------------------------------|--------|---------|-----------------------|-----------|
| [bl602-bootrom.bin](/binaries/bl60x/bl602-bootrom.bin)                     | BL602? | TODO    | May 11 2020           | gamiee    |