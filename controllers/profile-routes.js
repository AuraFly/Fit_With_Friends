const router = require('express').Router();
const path = require('path');
const Profile = require('../models/Profile');


// This is the 'get' route 
router.get('/', async (req, res) => {
  // Here, index.html is rendered
  res.sendFile(path.join(__dirname, '../views/index.html'));
});

router.get('/profile/:id', async (req, res) => {
  try {
    const profileData = await Profile.findByPk(req.params.id);
    console.log(profileData)
    res.render('dish', profileData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/', async (req, res) => {
  // Add a comment describing the purpose of the render method
  // This method is rendering the 'all' Handlebars.js template. This is how we connect each route to the correct template.
  res.render('all');
});

// get one dish
router.get('/profile/:num', async (req, res) => {
  return res.render('profile', profile[req.params.num - 1]);
});

router.get('/', async (req, res) => {
  try {
    const dbGalleryData = await Gallery.findAll({
      include: [
        {
          model: Painting,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const galleries = dbGalleryData.map((gallery) =>
      gallery.get({ plain: true })
    );
    // Send over the 'loggedIn' session variable to the 'homepage' template
    res.render('homepage', {
      galleries,
      loggedIn: req.session.loggedIn,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});



// Login route
router.get('/login', (req, res) => {
  // If the user is already logged in, redirect to the homepage
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  // Otherwise, render the 'login' template
  res.render('login');
});

module.exports = router;


