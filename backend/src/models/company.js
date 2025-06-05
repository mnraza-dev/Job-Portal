import mongoose from "mongoose";

const companySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    location: {
      type: String,
    },
    website: {
      type: String,
    },
    logo: {
      type: String,
    },
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    jobs: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Job",
    },
  },
  {
    timestamps: true,
  }
);

const Company = mongoose.model("Company", companySchema);
export default Company;