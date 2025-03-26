const notFoundMiddleware = (req, res, next) => {
  return res.status(404).send("<h1>Page doesnot exists</h1>");
};
module.exports = notFoundMiddleware;
