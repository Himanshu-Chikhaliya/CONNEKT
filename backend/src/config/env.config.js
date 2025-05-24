const dotenv = require("dotenv");
dotenv.config();

const MONGO_URL=process.env.MONGO_URL;
const JWT_KEY = process.env.JWT_KEY;
const PORT = process.env.PORT || 4000;

module.exports = {
    MONGO_URL,
    JWT_KEY,
    PORT
}