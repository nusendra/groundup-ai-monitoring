import { IReasonDocument, Reason } from "../schemas/Reason";

export const findAll = async (): Promise<IReasonDocument[] | null> => {
  const reasons = await Reason.find();

  return reasons ?? null;
};
