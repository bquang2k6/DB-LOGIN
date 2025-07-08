const express = require("express");
const cookieParser = require("cookie-parser");
const dotenv = require("dotenv");
const envFile =
    process.env.NODE_ENV === "production"
        ? ".env.production"
        : ".env.development";

dotenv.config({ path: envFile });

const cors = require("cors");
const { logInfo } = require("./src/services/logger.service.js");

// Routers
const routes = require("./src/routes");
const errorHandler = require("./src/helpers/error-handler.js");

const app = express();
app.use(
    cors({
        methods: ["GET", "POST", "HEAD"], 
        origin: ["http://127.0.0.1:5173", "http://localhost:5173", "http://192.168.1.105:5173", "https://locket-wan.vercel.app", "https://client-lk-cloned-main.vercel.app" ],

        // Nhằm cho phép client gửi cookie lên server
        credentials: true,
    })
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Nạp các route vào ứng dụng
routes(app);

// Middleware xử lý lỗi
app.use(errorHandler);

const PORT = process.env.PORT;

// app.listen(PORT, () => {
//     logInfo("main.js", `Server backend is running at localhost:${PORT}`);
// });
app.listen(PORT, () => {
    logInfo("main.js", `Server backend is running at http://localhost:${PORT}`);
});
