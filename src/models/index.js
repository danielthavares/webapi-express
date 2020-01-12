import "dotenv/config";
import Sequelize from "sequelize";

const sequelize = new Sequelize(
  process.env.DATABASE,
  process.env.DATABASE_USER,
  process.env.DATABASE_PASSWORD,
  {
    host: "localhost",
    dialect: "postgres"
  }
);

const models = {
  Project: sequelize.import("./project"),
  Task: sequelize.import("./task")
};

export { sequelize };

export default models;
