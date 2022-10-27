const router = require("express").Router();

const postroutes = require("./postroutes");
const loginroutes = require("./login");
const dashboardroutes = require("./dashboard");

router.use("/posts", postroutes);
router.use("/login", loginroutes);
router.use("/dashboard", dashboardroutes);
router.get("/");

module.exports = router;
