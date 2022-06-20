# eFuse

> Applies to BL702, BL704 and BL706  
> Size: 1Kbit

eFuse is one time programmable memory. It's mostly used to store things like MAC Address, encryption keys and all other stuff, which are not possible to change after it being burned into eFuse.

In case of eFuse core inside BL70X chips, it's _currently_ unknown how exactly it works (TBD). eFuse contents can be read or writen, until it is not locked by burning read/write bit in eFuse lock area.

The structure of the eFuse is available in [Bouffalo's SDK](https://github.com/bouffalolab/bl_mcu_sdk/blob/master/drivers/bl702_driver/regs/ef_data_0_reg.h) and bfl_mcu_tools (file `efuse_cfg_keys.py`), although, it doesn't contains *all* properties.

At the moment, if you use firmware encryption or firmware verification feature, there is *no* free space for app-used eFuses.

## Table of eFuse structure

|     Name             |     Byte Offset |     Bit index |     Length (bits) |     Used in                   |     Notes    | Verified |
|----------------------|-----------------|---------------|-------------------|-------------------------------|--------------|----------|
| ef_sf_aes_mode       | 0               | 0             | 2                 |                               |              |          |
| ef_sboot_sign_mode   | 0               | 2             | 2                 |                               |              |          |
| ef_sboot_en          | 0               | 4             | 2                 |                               |              |          |
| ef_cpu_enc_en        | 0               | 7             | 1                 |                               |              |          |
| trim_enable          | 0               | 12            | 1                 |                               |              |          |
| ef_sw_usage_1        | 0               | 13            | 1                 |                               |              |          |
| ef_sdu_dis           | 0               | 14            | 1                 |                               |              |          |
| ef_ble_dis           | 0               | 15            | 1                 |                               |              |          |
| ef_wifi_dis          | 0               | 16            | 1                 |                               |              |          |
| ef_0_key_enc_en      | 0               | 17            | 1                 |                               |              |          |
| ef_sf_dis            | 0               | 19            | 1                 |                               |              |          |
| ef_cpu_rst_dbg_dis   | 0               | 21            | 1                 |                               |              |          |
| ef_se_dbg_dis        | 0               | 22            | 1                 |                               |              |          |
| ef_efuse_dbg_dis     | 0               | 23            | 1                 |                               |              |          |
| ef_dbg_jtag_dis      | 0               | 26            | 2                 |                               |              |          |
| ef_dbg_mode          | 0               | 28            | 4                 |                               |              |          |
| ef_dbg_pwd_low       | 4               | 0             | 32                |                               |              |          |
| ef_dbg_pwd_high      | 8               | 0             | 32                |                               |              |          |
| ef_ana_trim_0        | 12              | 0             | 32                |                               |              |          |
| ef_sw_usage_0        | 16              | 0             | 32                |                               |              |          |
| bootrom_protect      | 16              | 0             | 1                 |                               |              |          |
| uart_log_disable     | 16              | 1             | 1                 |                               |              |          |
| sdio_pin_init        | 16              | 2             | 1                 |                               |              |          |
| disable_cci_coexist  | 16              | 3             | 1                 |                               |              |          |
| xtal_type            | 16              | 4             | 3                 |                               |              |          |
| pll_clk              | 16              | 7             | 3                 |                               |              |          |
| hclk_div             | 16              | 10            | 1                 |                               |              |          |
| bclk_div             | 16              | 11            | 1                 |                               |              |          |
| flash_clk_type       | 16              | 12            | 3                 |                               |              |          |
| flash_clk_div        | 16              | 15            | 1                 |                               |              |          |
| flash_cfg            | 16              | 16            | 2                 |                               |              |          |
| flash_pwr_delay      | 16              | 18            | 2                 |                               |              |          |
| tz_boot              | 16              | 20            | 1                 |                               |              |          |
| encrypted_tz_boot    | 16              | 21            | 1                 |                               |              |          |
| hbn_check_sign       | 16              | 22            | 1                 |                               |              |          |
| keep_dbg_port_closed | 16              | 23            | 1                 |                               |              |          |
| mediaboot_disable    | 16              | 24            | 1                 |                               |              |          |
| uartboot_disable     | 16              | 25            | 1                 |                               |              |          |
| sdioboot_disable     | 16              | 26            | 1                 |                               |              |          |
| hbn_jump_disable     | 16              | 27            | 1                 |                               |              |          |
| jtag_switch          | 16              | 28            | 1                 |                               |              |          |
| jtag_init            | 16              | 29            | 1                 |                               |              |          |
| qfn40                | 16              | 30            | 1                 |                               |              |          |
| debug_log_reopen     | 16              | 31            | 1                 |                               |              |          |
| ef_wifi_mac_low      | 20              | 0             | 32                | BootROM, eflash_loader, boot2 |              |          |
| ef_wifi_mac_high     | 24              | 0             | 32                | BootROM, eflash_loader, boot2 |              |          |
| ef_key_slot_0_w0     | 28              | 0             | 32                |                               |              |          |
| ef_key_slot_0_w1     | 32              | 0             | 32                |                               |              |          |
| ef_key_slot_0_w2     | 36              | 0             | 32                |                               |              |          |
| ef_key_slot_0_w3     | 40              | 0             | 32                |                               |              |          |
| ef_key_slot_1_w0     | 44              | 0             | 32                |                               |              |          |
| ef_key_slot_1_w1     | 48              | 0             | 32                |                               |              |          |
| ef_key_slot_1_w2     | 52              | 0             | 32                |                               |              |          |
| ef_key_slot_1_w3     | 56              | 0             | 32                |                               |              |          |
| ef_key_slot_2_w0     | 60              | 0             | 32                |                               |              |          |
| ef_key_slot_2_w1     | 64              | 0             | 32                |                               |              |          |
| ef_key_slot_2_w2     | 68              | 0             | 32                |                               |              |          |
| ef_key_slot_2_w3     | 72              | 0             | 32                |                               |              |          |
| ef_key_slot_3_w0     | 76              | 0             | 32                |                               |              |          |
| ef_key_slot_3_w1     | 80              | 0             | 32                |                               |              |          |
| ef_key_slot_3_w2     | 84              | 0             | 32                |                               |              |          |
| ef_key_slot_3_w3     | 88              | 0             | 32                |                               |              |          |
| ef_key_slot_4_w0     | 92              | 0             | 32                |                               |              |          |
| ef_key_slot_4_w1     | 96              | 0             | 32                |                               |              |          |
| ef_key_slot_4_w2     | 100             | 0             | 32                |                               |              |          |
| ef_key_slot_4_w3     | 104             | 0             | 32                |                               |              |          |
| ef_key_slot_5_w0     | 108             | 0             | 32                |                               |              |          |
| ef_key_slot_5_w1     | 112             | 0             | 32                |                               |              |          |
| ef_key_slot_5_w2     | 116             | 0             | 32                |                               |              |          |
| ef_key_slot_5_w3     | 120             | 0             | 32                |                               |              |          |
| wr_lock_key_slot_4_l | 124             | 13            | 1                 |                               |              |          |
| wr_lock_key_slot_5_l | 124             | 14            | 1                 |                               |              |          |
| wr_lock_boot_mode    | 124             | 15            | 1                 |                               |              |          |
| wr_lock_dbg_pwd      | 124             | 16            | 1                 |                               |              |          |
| wr_lock_sw_usage_0   | 124             | 17            | 1                 |                               |              |          |
| wr_lock_wifi_mac     | 124             | 18            | 1                 |                               |              |          |
| wr_lock_key_slot_0   | 124             | 19            | 1                 |                               |              |          |
| wr_lock_key_slot_1   | 124             | 20            | 1                 |                               |              |          |
| wr_lock_key_slot_2   | 124             | 21            | 1                 |                               |              |          |
| wr_lock_key_slot_3   | 124             | 22            | 1                 |                               |              |          |
| wr_lock_key_slot_4_h | 124             | 23            | 1                 |                               |              |          |
| wr_lock_key_slot_5_h | 124             | 24            | 1                 |                               |              |          |
| rd_lock_dbg_pwd      | 124             | 25            | 1                 |                               |              |          |
| rd_lock_key_slot_0   | 124             | 26            | 1                 |                               |              |          |
| rd_lock_key_slot_1   | 124             | 27            | 1                 |                               |              |          |
| rd_lock_key_slot_2   | 124             | 28            | 1                 |                               |              |          |
| rd_lock_key_slot_3   | 124             | 29            | 1                 |                               |              |          |
| rd_lock_key_slot_4   | 124             | 30            | 1                 |                               |              |          |
| rd_lock_key_slot_5   | 124             | 31            | 1                 |                               |              |          |