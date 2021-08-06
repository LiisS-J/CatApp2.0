module.exports = function (req, res, next) {
  // Status code for 401 is Unauthorized
  if (!req.user) {
    console.log("   &&&   req.user does not exist.");
    return res.status(401).json("Unauthorized");
  }
  next();
};
