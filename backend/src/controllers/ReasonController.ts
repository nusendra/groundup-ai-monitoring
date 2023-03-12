import { Request, Response } from "express";
import { findAll } from "../services/ReasonServices";

export const getReasons = async (req: Request, res: Response) => {
  const reasons = await findAll();

  return res.json(reasons);
};
