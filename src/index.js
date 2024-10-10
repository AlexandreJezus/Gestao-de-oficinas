import e from "express";
import "dotenv/config";
import "./db.js";
import workshop_router from "./routes/workshop-route.js";
import vehicle_router from "./routes/vehicle-route.js";
import maintenance_router from "./routes/maintenance-route.js";

const app = e();

app.use(e.json());

app.use("/workshop", workshop_router);
app.use("/vehicle", vehicle_router);
app.use("/maintenance", maintenance_router);

app.listen(process.env.API_PORT, () => console.log("Server is runnning"));
