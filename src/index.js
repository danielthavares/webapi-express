import "dotenv/config";
import path from "path";
import cors from "cors";
import express from "express";
import routes from "./routes";
import { sequelize } from "./models";

const app = express();

app.use(cors());
app.use(express.static(path.join(__dirname, "../public")));
app.use("/", routes);

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch(err => {
    console.error("Unable to connect to the database:", err);
  });

sequelize.sync();

app.listen(process.env.PORT, () =>
  console.log(`Example app listening on port ${process.env.PORT}!`)
);
