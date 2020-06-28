const path = require("path");
function resolve(dir) {
  return path.join(__dirname, dir);
}
// const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
//const webpack = require("webpack");

// var targetUrl = "http://localhost:8080";
// if (process.env.VUE_APP_URL != undefined && process.env.VUE_APP_URL != "") {
//   targetUrl = process.env.VUE_APP_URL;
// }
// console.log("targetUrl:" + targetUrl);

module.exports = {
  // 项目部署的基本路径,默认假设你的应用将会部署在域名的根部,比如，https://www.vue-cli.com/
  // 如果你的应用是部署在一个子路径下，那么你需要在这里指定子路径，比如，
  // 如果你部署在 https://www.my-vue.com/my-app/; 那么将这个值改为 “/my-app/”
  // 部署应用时的根路径(默认'/'),也可用相对路径(存在使用限制)
  publicPath: process.env.NODE_ENV === "production" ? "./" : "./",
  //将构建好的文件输出到哪里 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。
  // 注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)。
  // 运行时生成的生产环境构建文件的目录(默认''dist''，构建之前会被清除)
  outputDir: "dist",
  //放置生成的静态资源(s、css、img、fonts)的(相对于 outputDir 的)目录(默认'')
  assetsDir: "static",
  // 是否在开发环境下通过 eslint-loader 在每次保存时 lint 代码。这个值会在 @vue/cli-plugin-eslint 被安装之后生效。
  // 设置为 true 时，eslint-loader 会将 lint 错误输出为编译警告。默认情况下，警告仅仅会被输出到命令行，且不会使得编译失败。
  // 如果你希望让 lint 错误在开发时直接显示在浏览器中，你可以使用 lintOnSave: 'error'。
  // 这会强制 eslint-loader 将 lint 错误输出为编译错误，同时也意味着 lint 错误将会导致编译失败。
  // 是否开启eslint保存检测
  lintOnSave: false,
  //是否使用包含运行时编译器的 Vue 构建版本。设置为 true 后你就可以在 Vue 组件中使用 template 选项了，但是这会让你的应用额外增加 10kb 左右。
  runtimeCompiler: false,
  // 默认情况下 babel-loader 会忽略所有 node_modules 中的文件。如果你想要通过 Babel 显式转译一个依赖，可以在这个选项中列出来。
  //transpileDependencies: [],
  //如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  // 是否在构建生产包时生成sourcdeMap
  productionSourceMap: false,
  //是一个函数，会接收一个基于 webpack-chain 的 ChainableConfig 实例。允许对内部的 webpack 配置进行更细粒度的修改。
  chainWebpack: config => {
    // 为指定目录设置全局别名
    config.resolve.alias
      .set("@", resolve("src"))
      .set("@public", resolve("public"));
    //   .set("assets", resolve("src/assets"))
    //   .set("components", resolve("src/components"))
    //   .set("utils", resolve("src/utils"))
    //   .set("api", resolve("src/api"));
  },

  // 向 PWA 插件传递选项。
  // https://github.com/vuejs/vue-cli/tree/dev/packages/%40vue/cli-plugin-pwa
  //pwa: {},

  // 所有 webpack-dev-server 的选项都支持。注意：有些值像 host、port 和 https 可能会被命令行参数覆写。
  //有些值像 publicPath 和 historyApiFallback 不应该被修改，因为它们需要和开发服务器的 publicPath 同步以保障正常的工作。
  // 代理配置
  devServer: {
    /* 本地ip地址 */
    host: "127.0.0.1",
    port: "8060",
    hot: true,
    /* 自动打开浏览器 open: 'Google Chrome'-默认启动谷歌 */
    open: true,
    overlay: {
      warning: false,
      error: true
    }, // 错误、警告在页面弹出
    /* 代理 */
    proxy: {
      "/User": {
        /* 目标代理服务器地址 */
        target: "http://127.0.0.1:8061",
        /* 允许跨域 */
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/User": ""
        }
      },
      "/Blog": {
        /* 目标代理服务器地址 */
        target: "http://127.0.0.1:8062",
        /* 允许跨域 */
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          "^/Blog": ""
        }
      }
    }
    // pluginOptions: {// 第三方插件配置
    // }
  }
};
