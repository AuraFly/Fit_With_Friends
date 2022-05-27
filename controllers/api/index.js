const router = require("express").Router();
const userRoutes = require("./userRoutes");
const activityRoutes = require("./projectRoutes");

router.use("/users", userRoutes);
router.use("/activities", activityRoutes);

module.exports = router;
