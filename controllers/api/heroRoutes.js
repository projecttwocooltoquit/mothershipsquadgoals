// these routes handle all CRUD relating to our hero table

const router = require('express').Router();
const { Hero } = require('../../models');
const withAuth = require('../../utils/auth');
const heroes = require('../../public/js/heroes');

// creates a new hero from the front end, sourced from teambuilder.js/teambuilder page
router.post('/', async (req, res) => {
  try {
    const newHero = await Hero.create({
      ...req.body,
      user_id: req.session.user_id,
    });
    res.status(200).json(newProject);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/userhero', async (req, res) => {
  try {
    const heroData = await Hero.findAll({
      where: { user_id: req.params.id },
      include: [
        {
          model: User,
        },
      ],
    });

    // // Serialize data so the template can read it
    const heroes = heroData.map((hero) => hero.get({ plain: true }));

    // Pass serialized data and session flag into template
    res.render('teambuilder', {
      heroes,
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

// removes heroes where the user_id matches current logged in user - necessary to limit each user to 5 heroes max
router.delete('/delete', async (req, res) => {
  try {
    const heroData = await Hero.destroy({
      where: {
        user_id: req.session.user_id,
      },
    });
    res.status(200).json(heroData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
