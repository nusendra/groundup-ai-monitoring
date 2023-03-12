import { Router } from "express";
import { getAnomalies } from "../controllers/AnomalyController";

const routes = Router();

routes.get("/", getAnomalies);

export default routes;
