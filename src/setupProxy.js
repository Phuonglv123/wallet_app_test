
const proxy = require('http-proxy-middleware');

module.exports = function(app) {
    // ...
    app.use(
        proxy("/rootpath", {
            target: "http://45.77.241.228:8088/api/",
            changeOrigin: true,
            onProxyReq(proxyReq) {
                if (proxyReq.getHeader("origin")) {
                    proxyReq.setHeader("origin", "http://45.77.241.228:8088/api/")
                }
            },
            pathRewrite: { "^/rootpath": "" },
            logLevel: "debug",
        })
    )
};
