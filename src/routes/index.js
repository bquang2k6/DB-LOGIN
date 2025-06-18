const locketRouter = require("../routes/locket.route.js");
const keepaliveRouter = require("../routes/keepalive.route.js");
const locketProRouter = require("../routes/locket-pro.route.js")

module.exports = (app) => {
    app.use("/locket", locketRouter);
    app.use("/", keepaliveRouter);
    app.use("/locketpro", locketProRouter);
};
