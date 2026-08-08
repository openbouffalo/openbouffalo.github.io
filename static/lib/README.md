Blobs can be mirrored from whichever version Zephyr by initializing a Zephyr workspace

```
pip install west
cd ~/zephyrproject
west init
west update
```

Then mirroring can be done this way:

```
west blobs fetch
cp -r modules/hal/bouffalolab/zephyr/blobs/lib/ openbouffalo.github.io/static/
```
