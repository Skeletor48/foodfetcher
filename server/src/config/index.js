import dotenv from 'dotenv';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const envFound = dotenv.config();
if (envFound.error) {
    throw new Error("⚠️  Couldn't find .env file  ⚠️")
}

export default {
    port: parseInt(process.env.PORT, 10),
    heroku_proxy: process.env.HEROKU_PROXY,
    api: {
        prefix: "/api",
    },
};
