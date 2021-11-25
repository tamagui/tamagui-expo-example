const defaultSourceExts =
  require('metro-config/src/defaults/defaults').sourceExts

console.log('defaultSourceExts', defaultSourceExts)
  
module.exports = {
  transformer: {
    getTransformOptions: () => ({
      transform: {
        experimentalImportSupport: true,
        inlineRequires: true,
      },
    }),
  },
  resolver: {
    sourceExts: [...defaultSourceExts, 'cjs'],
  },
}
