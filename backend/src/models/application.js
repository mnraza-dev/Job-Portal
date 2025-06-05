import mongoose from "mongoose";

const applicationSchema = new mongoose.Schema(
  {
    job: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Job",
      required: true,
    },
    user: {
      type: String,
      required: true,
    },
    requirements: {
      type: [String],
      required: true,
    },
    salary: {
      type: Number,
      required: true,
    },
    jobType: {
      type: String,
      enum: ["full-time", "part-time", "contract", "internship"],
      required: true,
    },

    location: {
      type: String,
      required: true,
    },
    position: {
      type: Number,
      required: true,
    },
    company: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true,
    },
    createdBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    applications: {
      type: [mongoose.Schema.Types.ObjectId],
      ref: "Application",
    },
  },
  {
    timestamps: true,
  }
);

const Application = mongoose.model("Application", applicationSchema);
export default Application;
