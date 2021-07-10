// these routes handle all CRUD relating to our hero table

const router = require('express').Router();
const { Hero } = require('../../models');
const withAuth = require('../../utils/auth');
const heroes = require('./heroes');

router.post('/', async (req, res) => {
  try {
    const oneHero = heroes[1];

    heroData = {
      name: oneHero.name,
      alias: oneHero.alias,
      imagesrc: oneHero.image.url,
      intelligence: oneHero.powerstats.intelligence,
      strength: oneHero.powerstats.strength,
      speed: oneHero.powerstats.speed,
    };
    console.log(heroData);
    const strHero = JSON.stringify(heroData);

    const newHero = await Hero.create({
      strHero,
      // user_id: req.session.user_id,
    });
    res.status(200).json(newHero);
  } catch (err) {
    res.status(400).json(err);
  }
});

// router.get('/', async (req, res) => {
//   // find all heroes with user id
//   try {
//     const heroData = await Hero.findByPk({
//       where: {},
//     });
//     res.status(200).json(categoryData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

// router.post('/', withAuth, async (req, res) => {
//   try {
//     const newProject = await Project.create({
//       ...req.body,
//       user_id: req.session.user_id,
//     });

//     res.status(200).json(newProject);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

// router.delete('/:id', withAuth, async (req, res) => {
//   try {
//     const projectData = await Project.destroy({
//       where: {
//         id: req.params.id,
//         user_id: req.session.user_id,
//       },
//     });

//     if (!projectData) {
//       res.status(404).json({ message: 'No project found with this id!' });
//       return;
//     }

//     res.status(200).json(projectData);
//   } catch (err) {
//     res.status(500).json(err);
//   }
// });

module.exports = router;
