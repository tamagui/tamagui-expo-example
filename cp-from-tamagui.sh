#!/bin/bash

# metro hates symlinks doing this for local dev :/

# rm -r node_modules/@tamagui || true
# rm -r node_modules/tamagui || true

# cp -r ~/tamagui/packages/tamagui ./node_modules

# mkdir node_modules/@tamagui
# cp -r ~/tamagui/packages/helpers ./node_modules/@tamagui
# cp -r ~/tamagui/packages/babel-plugin ./node_modules/@tamagui
# cp -r ~/tamagui/packages/core ./node_modules/@tamagui
# cp -r ~/tamagui/packages/core-node ./node_modules/@tamagui
# cp -r ~/tamagui/packages/static ./node_modules/@tamagui
# cp -r ~/tamagui/packages/fake-react-native ./node_modules/@tamagui

cp -r -n ~/tamagui/node_modules/* ./node_modules/
