//add +234 to number
export const convertNumber = (number) => {
  const rawNumber = number.substring(number.length - 10, number.length);
  const convNum = `+234${rawNumber}`;
  return convNum;
};

// try..catch async wrapper
export const asyncHandler = (fn) => (req, res, next) =>
  Promise.resolve(fn(req, res, next)).catch(next);
