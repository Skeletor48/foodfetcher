import express from "express";
import cors from "cors";
import routes from "../api/index.js";
import config from "../config/index.js";

export default (app) => {
    app.use(cors());
    app.use(express.json());
    app.use(config.api.prefix, routes());

    app.use((req, res, next) => {
        const err = new Error("Not Found");
        err["status"] = 404;
        next(err);
    });

    app.use((err, req, res, next) => {
        res.status(err.status || 500);
        res.json({
            errors: {
                message: err.message,
            },
        });
    });

    return app;
};
