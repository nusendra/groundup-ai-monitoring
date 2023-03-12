import { Router } from "express";
import ReasonRoutes from "./ReasonRoutes";

const routes = Router();

routes.use("/api/v1/reasons", ReasonRoutes);

export default routes;
