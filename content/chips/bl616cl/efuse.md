+++
title = "eFuse"
+++

### sw_usage_0

Address is `0x70`

| Field name | Bit offset | Field width | Default value | Description |
|-|-|-|-|-|
| bootrom_protect | 0 | 1 | x | |
| uart_log_disable | 1 | 1 | x | |
| boot_pin_cfg | 2 | 1 | x | |
| mediaboot_disable | 3 | 1 | x | |
| uartboot_disable | 4 | 1 | x | |
| usbboot_enable | 5 | 1 | x | Enable USB flashing |
| jtag_cfg | 6 | 3 | x | Enable and set JTAG pinout at boot (1: 20-23, 2: 12-13 18-19, 3: 8-11)|
| sdh_en | 9 | 1 | x | |
| boot_level_revert | 10 | 1 | x | |
| uart_download_cfg | 11 | 2 | x | |
| xtal_type | 13 | 3 | x | |
| wifipll_pu | 16 | 1 | x | |
| sdioboot_enable | 17 | 1 | x | |
| mcu_clk | 18 | 3 | x | |
| mcu_clk_div | 21 | 1 | x | |
| mcu_pbclk_div | 22 | 2 | x | |
| uart_baudrate_sel | 24 | 1 | x | |
| sign_cfg | 25 | 3 | x | |
| bootlog_pin_cfg | 28 | 1 | x | |
| usb_if_int_disable | 29 | 1 | x | |
| reserved_0 | 30 | 2 | x | |

### sw_usage_1

Address is `0x74`

| Field name | Bit offset | Field width | Default value | Description |
|-|-|-|-|-|
| uart_log_reopen | 0 | 1 | x | |
| reserved_1 | 1 | 2 | x | |
| dcache_disable | 3 | 1 | x | |
| fix_key_sel | 4 | 1 | x | |
| sf_pin_cfg | 5 | 6 | x | |
| boot_pin_dly | 11 | 2 | x | |
| power_trim_disable | 13 | 1 | x | |
| trim_enable | 14 | 1 | x | |
| flash_power_delay | 15 | 2 | x | |
| tz_boot | 17 | 1 | x | |
| usb_desc_cfg | 18 | 1 | x | |
| hbn_check_sign | 19 | 1 | x | |
| pkhash_sel | 20 | 2 | x | |
| keep_dbg_port_closed | 22 | 1 | x | |
| hbn_jump_disable | 23 | 1 | x | |
| isp_dbg_mode | 24 | 2 | x | |
| psram_pad_for_flash | 26 | 1 | x | |
| ldo18io_cfg_dis | 27 | 1 | x | |
| abt_offset | 28 | 1 | x | |
| boot_pull_cfg | 29 | 1 | x | |
| pkhash_len | 30 | 1 | x | |
| pidvid_sel | 31 | 1 | x | |
