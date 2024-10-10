import { Schema, model } from "mongoose";
import db from "src/db.js";

const maintenanceSchema = new Schema({
  workshop: {
    type: Schema.Types.ObjectId,
    ref: "Workshop",
    required: true,
  },
  vehicle: {
    type: Schema.Types.ObjectId,
    ref: "Vehicle",
    required: true,
  },
  services: {
    type: String,
    required: true,
  },
  date: {
    type: db.Schema.Types.Date,
    required: true,
  },
  totalCost: {
    type: Schema.Types.ObjectId,
    ref: "Service",
    required: true,
  },
});

const Maintenance = model("Maintenance", maintenanceSchema);

const serviceSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  maintenance: maintenanceSchema,
});
const Service = model("Service", serviceSchema);

export default Maintenance;
