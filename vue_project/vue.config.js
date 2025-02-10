const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  configureWebpack: {
    optimization: {
      splitChunks: {
        chunks: 'all',
      },
    },
  },
  chainWebpack: config => {
    config.resolve.symlinks(false);
  },
  transpileDependencies: true,
  outputDir: "dist",
  assetsDir: "assets",
})
