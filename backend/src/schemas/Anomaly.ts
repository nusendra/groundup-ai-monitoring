import { Schema, model, Document } from "mongoose";

export interface IAnomaly {
  timestamp: Date;
  machine: string;
  anomaly: string;
  sensor: string;
  soundclip: string;
}

export interface IAnomalyDocument extends IAnomaly, Document {}

const anomalySchema = new Schema<IAnomalyDocument>(
  {
    timestamp: { type: Date, default: Date.now },
    machine: { type: String },
    anomaly: { type: String },
    sensor: { type: String },
    soundclip: { type: String },
  },
  { timestamps: true }
);

export const Anomaly = model<IAnomaly>("Anomaly", anomalySchema);
