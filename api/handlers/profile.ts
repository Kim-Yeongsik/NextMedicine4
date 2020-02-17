import bcrypt from 'bcryptjs'
import passport from 'passport'

import { getUserProps } from 'lib'
import { User } from 'models'

async function login (req, res) {
  return passport.authenticate('default', async (err, user) => {
    // 이미 getProps(user)를 거친 user가 넘어옴
    if (err) {
      return res
        .status(500)
        .send({ message: 'Authentication failed, try again.' })
    }
    if (!user) {
      return res
        .status(404)
        .send({ message: '404: Incorrect email address or password.' })
    }
    req.login(user, err => {
      if (!err) {
        res.status(200).send({ profile: user })
      }
    })
  })(req, res)
}

async function logout (req, res) {
  req.logout()
  return res.status(200).send({ message: 'You are successfully logged out' })
}

async function retrieve (req, res) {
  if (req.user) {
    const user = req.user
    return res.status(200).send({
      profile: user
    })
  } else {
    return res.status(403).send({ message: 'Forbidden' })
  }
}

async function update (req, res) {
  try {
    const user = await User.findByPk(req.user.id)

    if (!user) {
      return res.status(404).send({ message: 'Not Found' })
    }

    await user.update({
      name: req.body.name || user.name,
      email: req.body.email || user.email,
      password: req.body.password
        ? bcrypt.hashSync(req.body.password, 10)
        : user.password,
      updatedAt: Date.now()
    })

    const userProps = getUserProps(user)
    req.login(userProps, async err => {
      if (!err) {
        return res.status(200).send({ profile: userProps })
      } else {
        return res.status(400).send(err)
      }
    })
  } catch (err) {
    return res.status(400).send({ message: err.message })
  }
}

export default {
  login,
  logout,
  retrieve,
  update
}
