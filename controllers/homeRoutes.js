const router = require("express").Router();
const { Activity, Goals, User } = require("../models");
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
    const activityData = await Activity.findAll({
      include: [
        {
          model: User,
          attributes: ["name"],
        },
      ],
    });
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ["password"] },
    });
    const goalsData = await Goals.findAll({
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
    const user = userData.get({ plain: true });
    const goals = goalsData.map((goals) => goals.get({ plain: true }));

    res.render("account", {
      activities,
      logged_in: req.session.logged_in,
      ...user,
      logged_in: true,
      goals,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/search", withAuth, (req, res) => {
  // var sent = [];
  // var friends = [];
  // var received = [];
  //STILL NEED TO BUILD THIS OUT.
  // received = req.user.name;
  // sent = req.user.sentRequest;
  // friends = req.user.friendsList;

  // User.findAll({ id: { $ne: req.session.user_id } }, (err, result) => {
  //   if (err) throw err;

  res.render(
    "search"
    // , {
    //   result: result,
    //   sent: sent,
    //   friends: friends,
    //   received: received,
    // }
  );
});

router.get("/login", (req, res) => {
  if (req.session.logged_in) {
    res.redirect("/account");
    return;
  }

  res.render("login");
});

module.exports = router;
