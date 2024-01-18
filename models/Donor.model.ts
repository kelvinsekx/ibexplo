import mongoose from "mongoose";

/**
 *  donatedAt: z.string(),
  pintOfBlood: z.string(),
  date: z.string(),
  name: z.string().min(2).max(50),
  phone: z.string().min(10).max(14),
 */
const BloodDonorSchema = new mongoose.Schema(
  {
    donatedAt: {
      type: String,
      required: true,
    },
    pintOfBloof: {
      type: String,
    },
    date: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
  },
  { timestamps: true },
);

export const BloodDonor =
  mongoose.models.BloodDonor || mongoose.model("BloodDonor", BloodDonorSchema);
