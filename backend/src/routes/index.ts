import { Router } from "express";
import ReasonRoutes from "./ReasonRoutes";
import AnomalyRoutes from "./AnomalyRoutes";

const routes = Router();

routes.use("/api/v1/reasons", ReasonRoutes);
routes.use("/api/v1/anomalies", AnomalyRoutes);

export default routes;
