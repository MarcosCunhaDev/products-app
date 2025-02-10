module.exports = {
  presets: ['module:@react-native/babel-preset'],
  plugins: [
    [
      'module-resolver',
      {
        root: ['.'], // The root directory for your absolute imports
        alias: {
          // Define your aliases here
          '@components': './src/components',
          '@screens': './src/screens',
          '@assets': './src/assets',
          '@utils': './src/utils',
          '@theme': './src/theme',
          '@hooks': './src/hooks',
          '@services': './src/services',
          '@navigation': './src/navigation',
        },
      },
    ],
  ],
};
