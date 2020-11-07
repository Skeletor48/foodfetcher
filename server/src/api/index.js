import express from "express";
import menuRouter from "./routes/menuRouter.js.js";

export default () => {
    const router = express.Router();
    router.use("/menus", router);
    menuRouter(router);

    return router;
};
