import config from "./config/index.js.js";
import express from "express";
import expressLoader from "./loaders/expressLoader.js.js";

const app = express();

const foodFetceherServer = expressLoader(app);

foodFetceherServer.listen(config.port, () => {
    console.log(`
        +++++++++++++++++++++++++++++++++++++++++++
        💀 48  Server listening on port: ${"\x1b[35m"}${
        config.port
    }${"\x1b[0m"}  48 💀
        +++++++++++++++++++++++++++++++++++++++++++
      `);
}).on("error", (err) => {
    console.log("Server is not running because of: ", err);
    process.exit(1);
});
