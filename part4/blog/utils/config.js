require("dotenv").config();

const PORT = process.env.PORT;
const DB_URL = process.env.LOCAL_DB_URL;

module.exports = { PORT, DB_URL };
