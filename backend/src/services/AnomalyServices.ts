import { IAnomalyDocument, Anomaly } from "../schemas/Anomaly";

export const findAll = async (): Promise<IAnomalyDocument[] | null> => {
  const anomalies = await Anomaly.find();
  return anomalies ?? null;
};
