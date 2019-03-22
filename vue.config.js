module.exports = {
  baseUrl: "./",
  outputDir: "oraitOnline",
  devServer: {
    proxy: {
      "/orait_online": {
        target: "https://orait.oss-cn-hangzhou.aliyuncs.com",
        ws: true,
        changeOrigin: true
      }
    }
  },
  pages: {
    login: {
      // page 的入口
      entry: "src/views/login/login.js",
      // 模板来源
      template: "src/views/login/login.html",
      // 在 dist/index.html 的输出
      filename: "login.html"
    },
    workbench: {
      // page 的入口
      entry: "src/views/workbench/workbench.js",
      // 模板来源
      template: "src/views/workbench/workbench.html",
      // 在 dist/index.html 的输出
      filename: "workbench.html"
    },
    pricing: {
      // page 的入口
      entry: "src/views/pricing/pricing.js",
      // 模板来源
      template: "src/views/pricing/pricing.html",
      // 在 dist/pricing.html 的输出
      filename: "pricing.html"
    },
    homePage: {
      // page 的入口
      entry: "src/views/homePage/homePage.js",
      // 模板来源
      template: "src/views/homePage/homePage.html",
      // 在 dist/homePage.html 的输出
      filename: "homePage.html"
    },
    setting: {
      // page 的入口
      entry: "src/views/setting/setting.js",
      // 模板来源
      template: "src/views/setting/setting.html",
      // 在 dist/setting.html 的输出
      filename: "setting.html"
    }
  }
};
