import express from "express";
import PoolingUnit from "../models/PoolingUnit.js";
import advancedResults from "../helpers/advancedFilter.js";
import { getAllPoolingUnit } from "../controllers/PoolingUnitController.js";
import { asyncHandler } from "../helpers/utils.js";

const router = express.Router();

router.get("/", advancedResults(PoolingUnit), getAllPoolingUnit);

router.get(
  "/state",
  asyncHandler(async (req, res) => {
    const data = await PoolingUnit.find().distinct("stName");
    res.json(data);
  })
);

router.get(
  "/lga",
  asyncHandler(async (req, res) => {
    if (!Object.keys(req.query).length || !req.query.state) {
      return res.status(400).json({
        title: "Bad Request",
        message: "Pass query of state \n eg. /lga?state=ABIA",
      });
    }
    const data = await PoolingUnit.find({ stName: req.query.state }).distinct(
      "lgaName"
    );
    res.json(data);
  })
);

router.get(
  "/ward",
  asyncHandler(async (req, res) => {
    if (!Object.keys(req.query).length || !req.query.state || !req.query.lga) {
      return res.status(400).json({
        title: "Bad Request",
        message: "Wrong query passed \n eg. /lga?state=ABIA&lga=ABA%20NORTH",
      });
    }
    const data = await PoolingUnit.find({
      stName: req.query.state,
      lgaName: req.query.lga,
    }).distinct("wardName");
    res.json(data);
  })
);

router.get(
  "/unit",
  asyncHandler(async (req, res) => {
    if (
      !Object.keys(req.query).length ||
      !req.query.state ||
      !req.query.lga ||
      !req.query.ward
    ) {
      return res.status(400).json({
        title: "Bad Request",
        message:
          "Wrong query passed \n eg. /lga?state=ABIA&lga=ABA%20NORTH&ward=EZIAMA",
      });
    }
    const data = await PoolingUnit.find({
      stName: req.query.state,
      lgaName: req.query.lga,
      wardName: req.query.ward,
    }).distinct("psName");
    res.json(data);
  })
);

export default router;
