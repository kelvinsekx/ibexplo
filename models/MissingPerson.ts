import mongoose from "mongoose";

const MissingSchema = new mongoose.Schema(
  {
    type: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    skinColor: {
      type: String,
      required: true,
    },
    languages: {
      type: String,
    },
    reportedBy: {
      type: String,
      required: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },

    relationshipWithPerson: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

export const MissingPerson =
  mongoose.models.MissingPerson ||
  mongoose.model("MissingPerson", MissingSchema);
