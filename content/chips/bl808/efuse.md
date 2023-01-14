+++
title = "eFuse"
+++

## Description of sw_usage_0/1

The eFuse words `sw_usage_0` and `sw_usage_1` control the boot ROM behavior of the BL808. The field names in the following table come from the [SDK](https://github.com/bouffalolab/bl_mcu_sdk/blob/9e189b69cbc0a75ffa170f600a28820848d56432/examples/boot2_isp/port/bl808/bflb_port_boot2.h#L79-L143), but the semantics are not specified anywhere (except where they can reasonably be derived from the name). In the following table, additional information derived from reverse-engineering the boot ROM has been added. Code references are with respect to the `Sep 29 2021 17:07:23` version of the boot ROM.

The default values of these words on the Ox64 and M1s dock boards are identical, namely:

```
sw_usage_0 == 0x02c1140b:
  28   24   20   16   12    8    4    0
0000 0010 1100 0001 0001 0100 0000 1011

sw_usage_1 == 0x18fbf42f
  28   24   20   16   12    8    4    0
0001 1000 1111 1011 1111 0100 0010 1111
```

### sw_usage_0

| Field name           | Bit offset | Field width | Default value | Description                                                                                                                                                                                                        |
|----------------------|------------|-------------|---------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| bootrom_protect      | 0          | 1           | 1             | Code at 0x900140b0. Executed before jumping to user code. Presumably disables access to the boot ROM.                                                                                                              |
| uart_log_disable     | 1          | 1           | 1             | Boot ROM debugging, see notes                                                                                                                                                                                      |
| boot_pin_cfg         | 2          | 1           | 0             | Bootloader entry GPIO. 0: GPIO39, 1: GPIO8                                                                                                                                                                         |
| uart_download_cfg    | 3          | 1           | 1             | Bootloader UART (UART0) pins (RX/TX): 0: GPIO20/21, 1: GPIO14/15                                                                                                                                                   |
| mediaboot_disable    | 4          | 1           | 0             | Do not attempt boot from SPI/SD storage, but see note                                                                                                                                                              |
| uartboot_disable     | 5          | 1           | 0             | Disables bootloader communication via UART                                                                                                                                                                         |
| usbboot_enable       | 6          | 1           | 0             | Enable bootloader communication via USB (**broken** in ROM version `Sep 29 2021 17:07:23`. Do not set, will crash on bootloader entry)                                                                             |
| uart_log_reopen      | 7          | 1           | 0             | Boot ROM debugging, see notes                                                                                                                                                                                      |
| sign_cfg             | 8          | 1           | 0             |                                                                                                                                                                                                                    |
| dcache_disable       | 9          | 1           | 0             | Disable M0 dcache                                                                                                                                                                                                  |
| jtag_cfg             | 10         | 2           | 01 (1)        | JTAG pin configuration. 0: GPIO16-19, 1: GPIO6/7/12/13, 2/3: disabled                                                                                                                                              |
| fix_key_sel          | 12         | 1           | 1             |                                                                                                                                                                                                                    |
| sdh_en               | 13         | 1           | 0             | Enable boot from SD card (**untested**)                                                                                                                                                                            |
| sf_pin_cfg           | 14         | 5           | 00100 (4)     | Flash IO pin configuration, equivalent to [enum SF_Ctrl_Pin_Select](https://github.com/bouffalolab/bl_mcu_sdk/blob/9e189b69cbc0a75ffa170f600a28820848d56432/drivers/soc/bl808/std/include/bl808_sf_ctrl.h#L66-L76) |
| boot_level_revert    | 19         | 1           | 0             | Bootloader entry GPIO polarity. 0: active high, 1: active low                                                                                                                                                      |
| boot_pin_dly         | 20         | 2           | 00 (0)        | Time to wait between configuring and sampling bootloader entry GPIO. 0: 5us, 1: 10us, 2: 100us, 3: 500us                                                                                                           |
| ldo_trim_enable      | 22         | 1           | 1             | Apply LDO18 trimming from eFuse (0x78, see `F_Ctrl_Read_LDO18IO_Vout_Trim`                                                                                                                                         |
| trim_enable          | 23         | 1           | 1             | Apply RC32m trimming from eFuse (0x00, see `F_Ctrl_Read_Xtal_Trim_RC32M`                                                                                                                                           |
| no_hd_boot_en        | 24         | 1           | 0             |                                                                                                                                                                                                                    |
| flash_power_delay    | 25         | 2           | 01 (1)        | Time to wait after power-cycling the flash (via `GLB_PU_LDO18FLASH`). 0: none, 1: 1ms, 2: 8ms, 3: 16ms                                                                                                             |
| tz_boot              | 27         | 1           | 0             | Wide-ranging effects. Disables some bootloader protocol commands (such as WRITE_MEMORY). Disallows ROM-based setup of cores other than M0.                                                                         |
| encrypted_tz_boot    | 28         | 1           | 0             |                                                                                                                                                                                                                    |
| hbn_check_sign       | 29         | 1           | 0             |                                                                                                                                                                                                                    |
| keep_dbg_port_closed | 30         | 1           | 0             | Code at 0x900140b0. Executed before jumping to user code. Sets `TZC_SEC_TZC_SBOOT_DONE` to all-ones.                                                                                                                 |
| hbn_jump_disable     | 31         | 1           | 0             |                                                                                                                                                                                                                    |

Notes:
 - Boot ROM debug output is enabled if and only if `uart_log_disable == 1 && uart_log_reopen == 0`. Since `uart_log_disable` is set on all available devboards, burning `uart_log_reopen` enables boot ROM debugging on the UART selected by `bootlog_pin_cfg`.
 - Even if `mediaboot_disable` is set, media boot will _still_ be attempted if both the UART and USB bootloader protocols are disabled (i.e. `usbboot_enable == 0 && uartboot_disable == 1`)

### sw_usage_1
| Field name            | Bit offset | Field width | Default value | Description                                                                       |
|-----------------------|------------|-------------|---------------|-----------------------------------------------------------------------------------|
| xtal_type             | 0          | 3           | 111 (7)       |                                                                                   |
| wifipll_pu            | 3          | 1           | 1             |                                                                                   |
| aupll_pu              | 4          | 1           | 0             |                                                                                   |
| cpupll_pu             | 5          | 1           | 1             |                                                                                   |
| mipipll_pu            | 6          | 1           | 0             |                                                                                   |
| uhspll_pu             | 7          | 1           | 0             |                                                                                   |
| mcu_clk               | 8          | 3           | 100 (4)       |                                                                                   |
| mcu_clk_div           | 11         | 1           | 0             |                                                                                   |
| mcu_pbclk_div         | 12         | 2           | 11 (3)        |                                                                                   |
| lp_div                | 14         | 1           | 1             |                                                                                   |
| dsp_clk               | 15         | 2           | 11 (3)        |                                                                                   |
| dsp_clk_div           | 17         | 1           | 1             |                                                                                   |
| dsp_pbclk             | 18         | 2           | 10 (2)        |                                                                                   |
| emi_clk               | 20         | 2           | 11 (3)        |                                                                                   |
| emi_clk_div           | 22         | 1           | 1             |                                                                                   |
| flash_clk_type        | 23         | 3           | 001 (1)       |                                                                                   |
| flash_clk_div         | 26         | 1           | 0             |                                                                                   |
| ldo18flash_bypass_cfg | 27         | 1           | 1             | Sets `GLB_LDO18FLASH_BYPASS`                                                      |
| bootlog_pin_cfg       | 28         | 1           | 1             | Boot ROM debug UART (UART1) output pin. 0: GPIO39, 1: GPIO8                       |
| abt_offset            | 29         | 1           | 0             | Bootloader UART autobaud tolerance (see `UART_SetAllowableError0X55`). 0: 7, 1: 3 |
| boot_pull_cfg         | 30         | 1           | 0             | Boot pin pull direction. 0: down, 1: up                                           |
| usb_if_int_disable    | 31         | 1           | 0             | Disable USB interrupts before jumping to user code                                |

Notes:
 - The clock tree config fields are equivalent to the corresponding fields in [struct hal_sys_clk_config](https://github.com/bouffalolab/bl_mcu_sdk/blob/9e189b69cbc0a75ffa170f600a28820848d56432/examples/boot2_isp/port/bl808/bflb_port_boot2.h#L167-L192). The config is only applied if `xtal_type != 0`.
