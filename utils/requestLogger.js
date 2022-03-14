module.exports = (req, res, next) => {
  console.log("\n" + req.method + " - " + req.originalUrl);
  console.log("-------------------------------");
  console.log("BODY :");
  console.log(req.body);
  console.log("-------------------------------");

  next();
};
