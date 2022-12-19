+++
title = "Errata"
+++

> Applies to BL702, BL704 and BL706

## Issues with running image loaded by BootROM

For some reason, `BOOTROM_RUN_IMAGE` (`0x1A`) command in BootROM, doesn't work properly, and because of it,
eflash_loader have issues with initializing USB (so sometimes in Windows, the UART driver freeze, so it can't communicate with eflash_loader).
(NOTE: This is observation, other issues are not known yet)

To workaround this, there are three registers set, via `BOOTROM_WRITE_MEM` (`0x50`) command in BootROM:

- `0x4000F100 => 0x4E424845` (This sets `RSV0` to `HBN_STATUS_ENTER_FLAG` in Deep Sleep Control (Hibernate) core, in SDK it is used as set `STATUS` flag. (*gamiee*: My guess is that BootROM read this after CPU reset?))
- `0x4000F104 => 0x22010000` (This sets `RSV1` register in Hibernate core, in SDK it is used as WakeUp Address, and exactly we write the launch address, where eflash_loader should be) (*gamiee*: those reserved registers in HBN does nothing at all, just those values are preserved between CPU Resets)
- `0x40000018 => 0x00000002` (This sets `swrst_cfg2` register in Global Control Register, enabling register `reg_ctrl_cpu_reset`)

You can find this workaround in `bflb_mcu_tool` in file `bflb_mcu_tool/libs/bl702/chiptype_patch.py`.
