import { asyncHandler } from "../helpers/utils.js";

export const getAllFederalConstituency = asyncHandler(async (req, res) => {
  res.status(200).json(res.advanceFilter);
});
