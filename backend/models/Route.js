import mongoose from "mongoose";

const routeSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },
    origin: {
      type: String,
      required: true
    },
    destination: {
      type: String,
      required: true
    },
    distance: Number,
    estimatedTime: Number
  },
  { timestamps: true }
);

const Route = mongoose.model("Route", routeSchema);

export default Route;