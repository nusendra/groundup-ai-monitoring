import { Request, Response } from "express";
import { findAll } from "../services/AnomalyServices";

export const getAnomalies = async (req: Request, res: Response) => {
  const anomalies = await findAll();

  return res.json(anomalies);
};
