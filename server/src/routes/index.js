import express from "express";
import federalRoutes from './federal.js'
import poolingUnitRoutes from "./pollingunit.js";

const app = express();

app.use("/federal", federalRoutes);
app.use("/polling-unit", poolingUnitRoutes);


export default app;