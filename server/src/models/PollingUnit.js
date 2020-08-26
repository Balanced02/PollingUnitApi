import mongoose from "mongoose";

let schema = new mongoose.Schema({
  stName: {
    type: String,
  },
  stCode: {
    type: String,
  },
  lgaCode: {
    type: Number,
  },
  lgaName: {
    type: String,
  },
  wardName: {
    type: String,
  },
  wardCode: {
    type: Number,
  },
  psName: {
    type: String,
  },
  psCode: {
    type: Number
  },
});

export default mongoose.model("PollingUnits", schema, "PollingUnits");
