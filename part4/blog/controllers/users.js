const bcrypt = require('bcrypt')
const usersRouter = require('express').Router()
const User = require('../models/user')

usersRouter.get('/', (req, res, next) => {
  User.find({})
    .populate('blogs')
    .then((users) => {
      res.json({
        status: 'success',
        data: users,
      })
    })
    .catch((err) => {
      console.log(err)
      next(err)
    })
})

usersRouter.post('/', async (req, res) => {
  const { username, name, password } = req.body
  // validation
  if (username === '' || password === '') {
    res.status(400).json({
      status: 'failed',
      message: 'Username or password cannot be empty',
    })
    return
  }

  if (username.length < 3 || password.length < 3) {
    res.status(400).json({
      status: 'failed',
      message: 'Username or password must be at least 3 characters long',
    })
    return
  }

  // encrypt password
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  // create user
  const user = new User({
    username,
    name,
    passwordHash,
  })

  // save user
  try {
    const savedUser = await user.save()
    res.status(201).json({
      status: 'success',
      data: savedUser,
    })
  } catch (error) {
    res.status(500).json({
      status: 'failed',
      message: error.message,
    })
  }
})

module.exports = usersRouter
