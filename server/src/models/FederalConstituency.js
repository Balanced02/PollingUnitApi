import mongoose from 'mongoose'

let schema = new mongoose.Schema({
  fed_const_name: {
    type: String,
  },
  name_state: {
    type: String,
  },
  composition: {
    type: String,
  },
  collation_centre: {
    type: String,
  },
});

export default mongoose.model(
  "FederalConstituency",
  schema,
  "FederalConstituency"
);
