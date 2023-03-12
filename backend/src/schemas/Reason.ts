import { Schema, model, Document } from "mongoose";

export interface IReason {
  type: string;
  items: Array<string>;
}

export interface IReasonDocument extends IReason, Document {}

const reasonSchema = new Schema<IReasonDocument>(
  {
    type: { type: String, required: true },
    items: [{ type: String }],
  },
  { timestamps: true }
);

export const Reason = model<IReason>("Reason", reasonSchema);
