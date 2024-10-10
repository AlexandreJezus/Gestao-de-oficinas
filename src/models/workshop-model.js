import { Schema, model } from "mongoose";

const workshopSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  specialties: {
    type: String,
    enum: ["MOTOR", "BRAKE", "SUSPENSION"],
    required: true,
  },
  maintenances: {
    type: Schema.Types.ObjectId,
    ref: "Maintenance",
    required: true,
  },
});

const Workshop = model("Workshop", workshopSchema);

export default Workshop;
