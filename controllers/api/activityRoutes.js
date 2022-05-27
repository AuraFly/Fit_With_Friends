const router = require("express").Router();
const { Activity } = require("../../models");
const withAuth = require("../../utils/auth");

router.post("/", withAuth, async (req, res) => {
  try {
    const newActivity = await Activity.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newActivity);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete("/:id", withAuth, async (req, res) => {
  try {
    const activityData = await Activity.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!activityData) {
      res.status(404).json({ message: "No activity found with this id!" });
      return;
    }

    res.status(200).json(activityData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
