const router = require("express").Router();
const userRoutes = require("./userRoutes");
const activityRoutes = require("./activityRoutes");
const accountRoutes = require("./accountRoutes");
const goalsRoutes = require("./goalsRoutes");

router.use("/users", userRoutes);
router.use("/activities", activityRoutes);
router.use("/account", accountRoutes);
router.use("/goals", goalsRoutes);

module.exports = router;
