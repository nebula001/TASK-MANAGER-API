const errormiddleware = (err, req, res, next) => {
  return res
    .status(500)
    .json({ success: false, msg: "Something went wrong", err });
};
module.exports = errormiddleware;
