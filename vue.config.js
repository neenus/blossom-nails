const path = require("path");

module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolveSrc("."),
        "@src": resolveSrc("src"),
        "@assets": resolveSrc("src/assets/"),
        "@components": resolveSrc("src/components/"),
        "@plugins": resolveSrc("src/plugins")
      }
    },
    devServer: {
      disableHostCheck: true
    }
  }
};

function resolveSrc(_path) {
  return path.resolve(__dirname, _path);
}
