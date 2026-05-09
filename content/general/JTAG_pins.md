+++
title = "JTAG Pins"
+++

## Default JTAG Pins

|JTAG Pin|BL60x|BL70x|BL70xL|BL61x|BL808|
|---|---|---|---|---|---|
|TMS|12|0|0|0|6|
|TCK|14|2|2|1|12|
|TDO|11|9|7|2|7|
|TDI|17|1|1|3|13|

## Changing JTAG pins

JTAG pins can be switched in 2 ways:
- Burning JTAG efuse bits (jtag_cfg key)
- Runtime remapping in user program

### Burning JTAG efuse bits

Here is an example for BL61x, switching default mapping to pins 16 17 18 19:

1. Make Efuse image and its mask, provided for convenience in [there](/data/jtag_efuse_bl61x.tar.gz)
They are composed of 2 elements, the efuse bin, which sets the value (0x96 at 0x5D here), and efuse_mask bin, which sets the modification mask (we only want to modify a single bit, so we put 0x4 at 0x5D).
2. Copy the 2 files to chips/bl616/efuse_bootheader/, overwrite if other files of same name are present.
3. Open Devcube, enable advanced pages, and go to the 'Efuse' tab.
4. Setup your settings on the right side and your device, do not click any buttons, especially program or create. Set AES Mode to None and verify no locks or keys are set.
5. Press the Program button.
6. Verify by resetting the device into flash mode, pressing the Read button, and opening the file efuse.bin next to devcube executable that 0x5D is now 0x96 instead of 0x92

### Runtime remapping

Runtime remapping is done by first disabling the JTAG function of the default pins, and then
configuring the new chosen pins to provide the JTAG functionality.

[Bare Example for Thirdreality Temperature and Humidity Sensor Lite](https://github.com/zephyrproject-rtos/zephyr/blob/f39ad09bd21c5bf409e13e6420e5b396d56d2ae8/boards/thirdreality/3r_tnh_sensor_lite/board.c)
