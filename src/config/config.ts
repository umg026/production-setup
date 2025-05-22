import dotenvFlow from "dotenv-flow";

dotenvFlow.config();

export default {
  ENV: process.env.ENV,
  PORT: process.env.PORT,
  DB_NAME: process.env.DB_NAME,
  DB_PASSWORD: process.env.DB_PASSWORD,
  DB_USER: process.env.DB_USER,
  DB_HOST: process.env.DB_HOST,
};
