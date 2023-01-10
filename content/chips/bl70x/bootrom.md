+++
title = "BootROM"
+++

## General information

- Location: `0x21000000 - 0x21020000`
- Size: `128 KiB`
- Can boot from: USB, UART, SPI Flash
- BootROM mode trigger: IO28 pulled HIGH

## Boot Info header structure

Size: `24 Bytes`

- `Byte 0 - 3` - BootROM version
- `Byte 4` - Sign configuration
- `Byte 5` - Encrypt configuration
- `Byte 6 - 15` - Unknown
- `Byte 16 - 23` - ChipID (Something related to MAC)


## Dumps

| File                                                                       | Chip   | Version | Build Date            | Dumped by |
|----------------------------------------------------------------------------|--------|---------|-----------------------|-----------|
| [bl706-bootrom.bin](/binaries/bl70x/bl706-bootrom.bin)                     | BL706? | TODO    | May 14 2020           | gamiee    |