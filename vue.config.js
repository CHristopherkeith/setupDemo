// const { defineConfig } = require("@vue/cli-service");
const AutoImport = require("unplugin-auto-import/webpack");
const Components = require("unplugin-vue-components/webpack");
const { ElementPlusResolver } = require("unplugin-vue-components/resolvers");
const BundleAnalyzerPlugin =
  require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const isProduction = process.env.NODE_ENV === "production";

// module.exports = defineConfig({
//   outputDir: "build/dist",
//   publicPath: process.env.VUE_APP_PUBLIC_PATH || "",
//   transpileDependencies: true,
//   productionSourceMap: false,
//   configureWebpack: {
//     plugins: [
//       AutoImport.default({
//         resolvers: [ElementPlusResolver()],
//       }),
//       Components.default({
//         resolvers: [ElementPlusResolver()],
//       }),
//       new BundleAnalyzerPlugin({ analyzerPort: isProduction ? 8891 : 8890 }),
//     ],
//   },
// });

module.exports = {
  outputDir: "build/dist",
  publicPath: process.env.VUE_APP_PUBLIC_PATH || "",
  // transpileDependencies: true,
  productionSourceMap: false,
  configureWebpack: {
    plugins: [
      AutoImport.default({
        resolvers: [ElementPlusResolver()],
      }),
      Components.default({
        resolvers: [ElementPlusResolver()],
      }),
      new BundleAnalyzerPlugin({ analyzerPort: isProduction ? 8891 : 8890 }),
    ],
  },
};
