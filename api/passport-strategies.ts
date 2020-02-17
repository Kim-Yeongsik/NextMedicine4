/**
 * 사용자 인증 및 req.user 오브젝트 생성
 * https://github.com/jaredhanson/passport 참고
 */

import bcrypt from 'bcryptjs'
import passport from 'passport'
import passportLocal from 'passport-local'

import { getUserProps } from 'lib'
import { User } from 'models'

function config ({ server }) {
  // define serializers

  passport.serializeUser((user, next) => {
    return next(null, user)
  })

  passport.deserializeUser(async (user, next) => {
    try {
      return next(null, user)
    } catch (err) {
      return next(null, false)
    }
  })

  // define strategies

  passport.use(
    'default',
    new passportLocal.Strategy(
      {
        usernameField: 'email',
        passwordField: 'password',
        session: true
      },
      async (email, password, next) => {
        try {
          const user = await User.findOne({
            where: { email }
          })
          if (!user) {
            return next(null, false, {
              message: 'Incorrect credentials.'
            })
          }

          if (bcrypt.compareSync(password, user.password)) {
            const userProps = getUserProps(user)
            return next(null, userProps)
          }

          return next(null, false, {
            message: 'Incorrect credentials.'
          })
        } catch (err) {
          next(null, false, {
            message: 'Failed'
          })
        }
      }
    )
  )

  // initialize passport

  server.use(passport.initialize())
  server.use(passport.session())

  // add routes

  return passport
}

export default {
  config
}
