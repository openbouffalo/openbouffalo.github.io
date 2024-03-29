+++
title = "eFuse"
+++

> Applies to BL702, BL704 and BL706  
> Size: 1Kbit

eFuse is one time programmable memory. It's mostly used to store things like MAC Address, encryption keys and all other stuff, which are not possible to change after it being burned into eFuse.

In case of BL70X eFuse, once you burn the bit in eFuse, it's not possible to revert it. You can also write/read lock of specific eFuse slots/areas.

The structure of the eFuse is available in [Bouffalo's SDK](https://github.com/bouffalolab/bl_mcu_sdk/blob/master/drivers/bl702_driver/regs/ef_data_0_reg.h) and bfl_mcu_tools (file `efuse_cfg_keys.py`), although, it doesn't contains *all* properties.

## Free eFuse slots for user application

*NOTE: This still work in progress and those information still can be not true*

The slots `ef_key_slot_4_w0` and `ef_key_slot_4_w1` **seems** not to be used by any code.  
If encryption is not used, slots from `ef_key_slot_0_w0` to `ef_key_slot_3_w3` can be free for the user application.


## Table of eFuse structure

|     Name             |     Byte Offset |     Bit index |     Length (bits) |     Used in                   |     Notes                                                             | Verified |
|----------------------|-----------------|---------------|-------------------|-------------------------------|-----------------------------------------------------------------------|----------|
| ef_sf_aes_mode       | 0 (0x0)         | 0             | 2                 | TBD                           | 0 - disabled, 1 - 32 bit AES   key, 2 - 48 bit key, 3 - 64 bit key    | No       |
| ef_sboot_sign_mode   | 0 (0x0)         | 2             | 2                 |                               |                                                                       | No       |
| ef_sboot_en          | 0 (0x0)         | 4             | 2                 |                               |                                                                       | No       |
| ef_cpu_enc_en        | 0 (0x0)         | 7             | 1                 |                               |                                                                       | No       |
| trim_enable          | 0 (0x0)         | 12            | 1                 |                               |                                                                       | No       |
| ef_sw_usage_1        | 0 (0x0)         | 13            | 1                 |                               |                                                                       | No       |
| ef_sdu_dis           | 0 (0x0)         | 14            | 1                 |                               |                                                                       | No       |
| ef_ble_dis           | 0 (0x0)         | 15            | 1                 |                               |                                                                       | No       |
| ef_wifi_dis          | 0 (0x0)         | 16            | 1                 |                               |                                                                       | No       |
| ef_0_key_enc_en      | 0 (0x0)         | 17            | 1                 |                               |                                                                       | No       |
| ef_sf_dis            | 0 (0x0)         | 19            | 1                 |                               |                                                                       | No       |
| ef_cpu_rst_dbg_dis   | 0 (0x0)         | 21            | 1                 |                               |                                                                       | No       |
| ef_se_dbg_dis        | 0 (0x0)         | 22            | 1                 |                               |                                                                       | No       |
| ef_efuse_dbg_dis     | 0 (0x0)         | 23            | 1                 |                               |                                                                       | No       |
| ef_dbg_jtag_dis      | 0 (0x0)         | 26            | 2                 |                               |                                                                       | No       |
| ef_dbg_mode          | 0 (0x0)         | 28            | 4                 |                               |                                                                       | No       |
| ef_dbg_pwd_low       | 4 (0x4)         | 0             | 32                |                               |                                                                       | No       |
| ef_dbg_pwd_high      | 8 (0x8)         | 0             | 32                |                               |                                                                       | No       |
| ef_ana_trim_0        | 12 (0xC)        | 0             | 32                |                               |                                                                       | No       |
| ef_sw_usage_0        | 16 (0x10)       | 0             | 32                |                               |                                                                       | No       |
| bootrom_protect      | 16 (0x10)       | 0             | 1                 |                               |                                                                       | No       |
| uart_log_disable     | 16 (0x10)       | 1             | 1                 |                               |                                                                       | No       |
| sdio_pin_init        | 16 (0x10)       | 2             | 1                 |                               |                                                                       | No       |
| disable_cci_coexist  | 16 (0x10)       | 3             | 1                 |                               |                                                                       | No       |
| xtal_type            | 16 (0x10)       | 4             | 3                 |                               |                                                                       | No       |
| pll_clk              | 16 (0x10)       | 7             | 3                 |                               |                                                                       | No       |
| hclk_div             | 16 (0x10)       | 10            | 1                 |                               |                                                                       | No       |
| bclk_div             | 16 (0x10)       | 11            | 1                 |                               |                                                                       | No       |
| flash_clk_type       | 16 (0x10)       | 12            | 3                 |                               |                                                                       | No       |
| flash_clk_div        | 16 (0x10)       | 15            | 1                 |                               |                                                                       | No       |
| flash_cfg            | 16 (0x10)       | 16            | 2                 |                               |                                                                       | No       |
| flash_pwr_delay      | 16 (0x10)       | 18            | 2                 |                               |                                                                       | No       |
| tz_boot              | 16 (0x10)       | 20            | 1                 |                               |                                                                       | No       |
| encrypted_tz_boot    | 16 (0x10)       | 21            | 1                 |                               |                                                                       | No       |
| hbn_check_sign       | 16 (0x10)       | 22            | 1                 |                               |                                                                       | No       |
| keep_dbg_port_closed | 16 (0x10)       | 23            | 1                 |                               |                                                                       | No       |
| mediaboot_disable    | 16 (0x10)       | 24            | 1                 |                               |                                                                       | No       |
| uartboot_disable     | 16 (0x10)       | 25            | 1                 |                               |                                                                       | No       |
| sdioboot_disable     | 16 (0x10)       | 26            | 1                 |                               |                                                                       | No       |
| hbn_jump_disable     | 16 (0x10)       | 27            | 1                 |                               |                                                                       | No       |
| jtag_switch          | 16 (0x10)       | 28            | 1                 |                               |                                                                       | No       |
| jtag_init            | 16 (0x10)       | 29            | 1                 |                               |                                                                       | No       |
| qfn40                | 16 (0x10)       | 30            | 1                 |                               |                                                                       | No       |
| debug_log_reopen     | 16 (0x10)       | 31            | 1                 |                               |                                                                       | No       |
| ef_wifi_mac_low      | 20 (0x14)       | 0             | 32                | BootROM, eflash_loader, boot2 | Lower part of MAC Address (BT/WIFI), also used as ChipID              | Yes      |
| ef_wifi_mac_high     | 24 (0x18)       | 0             | 32                | BootROM, eflash_loader, boot2 | Higher part of MAC Address (BT/WIFI), also used as ChipID             | Yes      |
| ef_key_slot_0_w0     | 28 (0x1C)       | 0             | 32                | TBD                           | Public key hash, when `ef_sboot_sign_mode` is 1 [0:8 bytes of hash]   | Yes      |
| ef_key_slot_0_w1     | 32 (0x20)       | 0             | 32                | TBD                           | Public key hash, when `ef_sboot_sign_mode` is 1 [8:16 bytes of hash]  | Yes      |
| ef_key_slot_0_w2     | 36 (0x24)       | 0             | 32                | TBD                           | Public key hash, when `ef_sboot_sign_mode` is 1 [16:24 bytes of hash] | Yes      |
| ef_key_slot_0_w3     | 40 (0x28)       | 0             | 32                | TBD                           | Public key hash, when `ef_sboot_sign_mode` is 1 [24:32 bytes of hash] | Yes      |
| ef_key_slot_1_w0     | 44 (0x2C)       | 0             | 32                | TBD                           | Public key hash, when `ef_sboot_sign_mode` is 1 [32:40 bytes of hash] | Yes      |
| ef_key_slot_1_w1     | 48 (0x30)       | 0             | 32                | TBD                           | Public key hash, when `ef_sboot_sign_mode` is 1 [40:48 bytes of hash] | Yes      |
| ef_key_slot_1_w2     | 52 (0x34)       | 0             | 32                | TBD                           | Public key hash, when `ef_sboot_sign_mode` is 1 [48:56 bytes of hash] | Yes      |
| ef_key_slot_1_w3     | 56 (0x38)       | 0             | 32                | TBD                           | Public key hash, when `ef_sboot_sign_mode` is 1 [56:64 bytes of hash] | Yes      |
| ef_key_slot_2_w0     | 60 (0x3C)       | 0             | 32                | TBD                           | AES key (`aes_mode` == 1, 2, 3)                                       | Yes      |
| ef_key_slot_2_w1     | 64 (0x40)       | 0             | 32                | TBD                           | AES key (`aes_mode` == 1, 2, 3)                                       | Yes      |
| ef_key_slot_2_w2     | 68 (0x44)       | 0             | 32                | TBD                           | AES key (`aes_mode` == 1, 2, 3)                                       | Yes      |
| ef_key_slot_2_w3     | 72 (0x48)       | 0             | 32                | TBD                           | AES key (`aes_mode` == 1, 2, 3)                                       | Yes      |
| ef_key_slot_3_w0     | 76 (0x4C)       | 0             | 32                | TBD                           | AES key (`aes_mode` == 2, 3)                                          | Yes      |
| ef_key_slot_3_w1     | 80 (0x50)       | 0             | 32                | TBD                           | AES key (`aes_mode` == 2, 3)                                          | Yes      |
| ef_key_slot_3_w2     | 84 (0x54)       | 0             | 32                | TBD                           | AES key (`aes_mode` == 3)                                             | Yes      |
| ef_key_slot_3_w3     | 88 (0x58)       | 0             | 32                | TBD                           | AES key (`aes_mode` == 3)                                             | Yes      |
| ef_key_slot_4_w0     | 92 (0x5C)       | 0             | 32                | TBD                           | Empty?                                                                | No       |
| ef_key_slot_4_w1     | 96 (0x60)       | 0             | 32                | TBD                           | Empty?                                                                | No       |
| ef_key_slot_4_w2     | 100 (0x64)      | 0             | 32                | TBD                           | Customer VID (0xFFFF0000) & PID (0x0000FFFF)                          | Yes      |
| ef_key_slot_4_w3     | 104 (0x68)      | 0             | 32                | TBD                           | Chip VID (0xFFFF0000) & PID (0x0000FFFF)                              | Yes      |
| ef_key_slot_5_w0     | 108 (0x6C)      | 0             | 32                | TBD                           | Optional MAC Address slot (low)                                       | Yes      |
| ef_key_slot_5_w1     | 112 (0x70)      | 0             | 32                | TBD                           | Optional MAC Address slot (high)                                      | Yes      |
| ef_key_slot_5_w2     | 116 (0x74)      | 0             | 32                | TBD                           | Device Info structure (TBD)                                           | Yes      |
| ef_key_slot_5_w3     | 120 (0x78)      | 0             | 32                | TBD                           | CapCode (TBD)                                                         | No       |
| wr_lock_key_slot_4_l | 124 (0x7C)      | 13            | 1                 |                               |                                                                       | No       |
| wr_lock_key_slot_5_l | 124 (0x7C)      | 14            | 1                 |                               |                                                                       | No       |
| wr_lock_boot_mode    | 124 (0x7C)      | 15            | 1                 |                               |                                                                       | No       |
| wr_lock_dbg_pwd      | 124 (0x7C)      | 16            | 1                 |                               |                                                                       | No       |
| wr_lock_sw_usage_0   | 124 (0x7C)      | 17            | 1                 |                               |                                                                       | No       |
| wr_lock_wifi_mac     | 124 (0x7C)      | 18            | 1                 |                               | Write lock for MAC Address eFuse (by default burned from factory)     | Yes      |
| wr_lock_key_slot_0   | 124 (0x7C)      | 19            | 1                 |                               |                                                                       | No       |
| wr_lock_key_slot_1   | 124 (0x7C)      | 20            | 1                 |                               |                                                                       | No       |
| wr_lock_key_slot_2   | 124 (0x7C)      | 21            | 1                 |                               |                                                                       | No       |
| wr_lock_key_slot_3   | 124 (0x7C)      | 22            | 1                 |                               |                                                                       | No       |
| wr_lock_key_slot_4_h | 124 (0x7C)      | 23            | 1                 |                               |                                                                       | No       |
| wr_lock_key_slot_5_h | 124 (0x7C)      | 24            | 1                 |                               |                                                                       | No       |
| rd_lock_dbg_pwd      | 124 (0x7C)      | 25            | 1                 |                               |                                                                       | No       |
| rd_lock_key_slot_0   | 124 (0x7C)      | 26            | 1                 |                               |                                                                       | No       |
| rd_lock_key_slot_1   | 124 (0x7C)      | 27            | 1                 |                               |                                                                       | No       |
| rd_lock_key_slot_2   | 124 (0x7C)      | 28            | 1                 |                               |                                                                       | No       |
| rd_lock_key_slot_3   | 124 (0x7C)      | 29            | 1                 |                               |                                                                       | No       |
| rd_lock_key_slot_4   | 124 (0x7C)      | 30            | 1                 |                               |                                                                       | No       |
| rd_lock_key_slot_5   | 124 (0x7C)      | 31            | 1                 |                               |                                                                       | No       |
