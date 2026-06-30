+++
title = "eFuse"
+++

### sw_usage_0

Address is `0x5C`

| Field name | Bit offset | Field width | Default value | Description |
|-|-|-|-|-|
| bootrom_protect | 0 | 1 | x | |
| uart_log_disable | 1 | 1 | x | |
| boot_pin_cfg | 2 | 1 | x | |
| mediaboot_disable | 3 | 1 | x | |
| uartboot_disable | 4 | 1 | x | |
| usbboot_enable | 5 | 1 | 1 | Enable USB flashing |
| uart_log_reopen | 6 | 1 | x | |
| sign_cfg | 7 | 1 | x | |
| dcache_disable | 8 | 1 | x | |
| jtag_cfg | 9 | 3 | 1 | Enable and set JTAG pinout at boot (0: 0 1 13 20, 1: 0-3, 2: 27-30 3: 16-19)|
| fix_key_sel | 12 | 1 | x | |
| sdh_en | 13 | 1 | x | |
| sf_pin_cfg | 14 | 6 | x | |
| boot_pin_dly | 21 | 2 | x | |
| power_trim_disable | 22 | 1 | x | |
| trim_enable | 23 | 1 | x | |
| flash_power_delay | 24 | 2 | x | |
| boot_level_revert | 26 | 1 | x | |
| tz_boot | 27 | 1 | x | |
| usb_desc_cfg | 28 | 1 | x | |
| hbn_check_sign | 29 | 1 | x | |
| keep_dbg_port_closed | 30 | 1 | x | |
| hbn_jump_disable | 31 | 1 | x | |

### sw_usage_1

Address is `0x60`

| Field name | Bit offset | Field width | Default value | Description |
|-|-|-|-|-|
| xtal_type | 0 | 3 | x | |
| wifipll_pu | 3 | 1 | x | |
| aupll_pu | 4 | 1 | x | |
| product_id | 5 | 2 | x | |
| sdioboot_enable | 7 | 1 | x | |
| mcu_clk | 8 | 3 | x | |
| mcu_clk_div | 11 | 1 | x | |
| mcu_pbclk_div | 12 | 2 | x | |
| uart_download_cfg | 14 | 2 | x | |
| pin_func_0_init | 16 | 1 | x | |
| always_uart | 17 | 1 | x | |
| abt_shake_hands_dis | 18 | 1 | x | |
| no_hd_boot_en | 19 | 1 | x | |
| ocram_way_dis_cfg | 20 | 2 | x | |
| xtal_level_revert | 22 | 1 | x | |
| flash_clk_type | 23 | 3 | x | |
| flash_clk_div | 26 | 1 | x | |
| ldo18io_cfg_dis | 27 | 1 | x | |
| bootlog_pin_cfg | 28 | 1 | x | |
| abt_offset | 29 | 1 | x | |
| boot_pull_cfg | 30 | 1 | x | |
| usb_if_int_disable | 31 | 1 | x | |
