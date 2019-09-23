const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const fname = req.body.fname;
  const lname = req.body.lname;
  const username = req.body.username;
  const password = req.body.password;
  const gender = req.body.gender;
  const age = req.body.age;
  const height = req.body.height;
  const weight = req.body.weight;

  const newUser = new User({
    fname,
    lname,
    username,
    password,
    gender,
    age,
    height,
    weight
  });

  newUser.save()
    .then(() => res.json('User added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;