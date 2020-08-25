import { asyncHandler } from "../helpers/utils.js";
import fs from "fs";

export const getAllPoolingUnit = asyncHandler(async (req, res) => {
  res.status(200).json(res.advanceFilter);
});
