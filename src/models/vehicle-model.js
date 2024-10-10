import { Schema, model } from "mongoose";

const vehicleSchema = new Schema({
  plate: {
    type: String,
    required: true,
    unique: true,
    maxLenght: 7,
    minLenght: 7,
  },
  model: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  owner: {
    type: String,
    required: true,
  },
  maintenances: {
    type: Schema.Types.ObjectId,
    ref: "Maintenance",
    required: true,
  },
});

const Vehicle = model("Vehicle", vehicleSchema);

export default Vehicle;
