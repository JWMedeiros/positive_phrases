const router = require('express').Router();
const { User } = require('../../models');

// The `/api/users` endpoint
// Basic CRUD functionality if needed (no update as of rn)

router.get('/', async (req, res) => {
  // find all users
  try {
    const userData = await User.findAll({});
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', async (req, res) => {
  // find one user by its `id` value
  try {
    const userData = await User.findByPk(req.params.id, {});

    if (!userData) {
      res.status(404).json({ message: 'No user found with that id!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/', async (req, res) => {
  // create a new user
  try {
    await User.create(req.body);
    res.status(200).json({ message: 'User created successfully' });
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  // delete a user by its `id` value
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!userData) {
      res.status(404).json({ message: 'No user found with that id!' });
      return;
    }

    res.status(200).json({ message: 'User deleted successfully.' });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
