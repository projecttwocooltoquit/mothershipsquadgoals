const router = require('express').Router();
const { Hero, User } = require('../models');
const withAuth = require('../utils/auth');
const { json } = require('body-parser');
const fs = require('fs');
const { builtinModules } = require('module');
const heroes = require('../public/js/heroes.js');

router.get('/', (req, res) => {
  res.render('homepage');
});

// teampage/:id (user login id, which you'll get after the user logs in)
router.get('/teampage/:id', async (req, res) => {
  try {
    // // Get all projects and JOIN with user data
    const heroData = await Hero.findAll({
      where: { user_id: req.params.id },
      include: [
        {
          model: User,
          attributes: ['name'],
        },
      ],
    });

    // // Serialize data so the template can read it
    const heroes = heroData.map((hero) => hero.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('teampage', {
      heroes,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/teambuilder', (req, res) => {
  try {
    res.render('teambuilder', {
      heroes,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/newuser', (req, res) => {
  res.render('newuser');
});

module.exports = router;

// router.get('/project/:id', async (req, res) => {
//   try {
//     const projectData = await Project.findByPk(req.params.id, {
//       include: [
//         {
//           model: User,
//           attributes: ['name'],
//         },
//       ],
//     });

//     const project = projectData.get({ plain: true });

//     res.render('project', {
//       ...project,
//       logged_in: req.session.logged_in,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// // Use withAuth middleware to prevent access to route
// router.get('/profile', withAuth, async (req, res) => {
//   try {
//     // Find the logged in user based on the session ID
//     const userData = await User.findByPk(req.session.user_id, {
//       attributes: { exclude: ['password'] },
//       include: [{ model: Project }],
//     });

//     const user = userData.get({ plain: true });

//     res.render('profile', {
//       ...user,
//       logged_in: true,
//     });
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.get('/login', (req, res) => {
//   // If the user is already logged in, redirect the request to another route
//   if (req.session.logged_in) {
//     res.redirect('/profile');
//     return;
//   }

//   res.render('login');
// });
