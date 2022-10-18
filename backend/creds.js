const dotenv = require("dotenv");
dotenv.config();

module.exports = {
  MONGO_DB_URL: process.env.MONGO_DB,
  PORT: process.env.PORT,
  JWT_SIGNATURE: process.env.JWT_SIGN,
  DIR: __dirname + "/images/",
};
