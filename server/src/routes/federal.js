import express from "express";
import Federal from "../models/FederalConstituency.js";
import advancedResults from "../helpers/advancedFilter.js";
import { getAllFederalConstituency } from "../controllers/FederalController.js";

const router = express.Router();

router.get("/", advancedResults(Federal), getAllFederalConstituency);

export default router;
