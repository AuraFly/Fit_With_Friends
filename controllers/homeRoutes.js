const router = require("express").Router();
const { Activity, User } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", async (req, res) => {
  try {
    const activityData = await Activity.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const activities = activityData.map((activity) =>
      activity.get({ plain: true })
    );

    res.render("homepage", {
      activities,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/account", withAuth, async (req, res) => {
  try {
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
      include: [{ model: Activity }],
    });

    const user = userData.get({ plain: true });

    res.render("account", {
      ...user,
      logged_in: true,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/activities", withAuth, async (req, res) => {
  try {
    const activityData = await Activity.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });

    const activities = activityData.map((activity) =>
      activity.get({ plain: true })
    );

    res.render("activities", {
      activities,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/account");
    return;
  }

  res.render("login");
});

router.get("/about", (req, res) => {
  res.render("about");
});


module.exports = router;
