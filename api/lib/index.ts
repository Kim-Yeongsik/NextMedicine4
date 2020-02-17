import nodemailer from 'nodemailer'

export function getUserProps (user) {
  const { password, ...userProps } = user.dataValues
  return userProps
}

export function requireLogin () {
  return async (req, res, next) => {
    const { user } = req

    if (!user) {
      return res.status(403).send({ message: 'Forbidden' })
    }

    return next()
  }
}

export function requireLogout () {
  return async (req, res, next) => {
    const { user } = req

    if (user) {
      return res.status(403).send({ message: 'Forbidden' })
    }

    return next()
  }
}

export function sendMail ({ mailServer, from, to, subject, text }) {
  nodemailer.createTransport(mailServer).sendMail(
    {
      to,
      from,
      subject,
      text
    },
    err => {
      if (err) {
        console.log(err)
      }
    }
  )
}
