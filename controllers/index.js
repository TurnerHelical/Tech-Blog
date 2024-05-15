// Imports
const router = require("express").Router();
const apiRoutes = require("./api");
const dashboardRoutes = require("./dashboardRoutes.js");
const homeRoutes = require("./homeRoutes.js");

// Middleware
router.use("/", homeRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/api", apiRoutes);

// Exports
module.exports = router;