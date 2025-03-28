const { customAPIError } = require("../errors/custom-errors");

const errormiddleware = (err, req, res, next) => {
  if (err instanceof customAPIError) {
    return res.status(err.statusCode).json({ success: true, msg: err.message });
  }

  return res
    .status(500)
    .json({ success: false, msg: "Something went wrong", err });
};
module.exports = errormiddleware;
