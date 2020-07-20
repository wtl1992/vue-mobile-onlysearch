module.exports = {
    publicPath: "./",
    outputDir: "dist",
    assetsDir: "static",
    filenameHashing: true,
    lintOnSave: true,
    runtimeCompiler: false,
    devServer: {
        open: process.platform === "darwin",
        host: "0.0.0.0",
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: {
            "/api": {
                target: "https://ljxwtl.cn",
                changeOrigin: true,
                ws:false,
                secure: false,
                pathRewrite: {
                    "^/api": ""
                }
            }
        }
    }
};