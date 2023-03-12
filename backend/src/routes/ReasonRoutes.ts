import { Router } from "express";
import { getReasons } from "../controllers/ReasonController";

const routes = Router();

routes.get("/", getReasons);

export default routes;
