import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";
import routes from "./routes";

dotenv.config();

const app: Express = express();
const port: string = process.env.PORT ?? "3000";

app.use(cors());
app.use(express.json());
app.use(routes);

const MONGO_DB_URL: string = process.env.MONGO_DB_URL ?? "";
mongoose.connect(MONGO_DB_URL);

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
