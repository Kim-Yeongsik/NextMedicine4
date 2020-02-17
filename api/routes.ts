import express from 'express'
import multer from 'multer'

import boardHandler from './handlers/board'
import commentHandler from './handlers/comment'
import groupHandler from './handlers/group'
import postHandler from './handlers/post'
import profileHandler from './handlers/profile'
import userHandler from './handlers/user'
import { requireLogin, requireLogout, sendMail } from './lib'

import {
  memberImageUpload,
  postFileUpload,
  postImageUpload
} from './lib/multer'

const uploadsDir = 'uploads'

function config ({ server, mailServer, path = '/api' }) {
  const router = express.Router()

  // const upload = multer({ dest: uploadsDir + '/' })

  router.post('/login', requireLogout(), profileHandler.login)
  router.all('/logout', profileHandler.logout)
  router.get('/profile', requireLogin(), profileHandler.retrieve)
  router.put('/profile', requireLogin(), profileHandler.update)

  router.get('/users', userHandler.list)

  router.get('/groups', groupHandler.list)
  router.get('/groups/:groupId', groupHandler.retrieve)

  router.get('/boards', boardHandler.list)
  router.get('/boards/:boardId', boardHandler.retrieve)

  router.post('/posts', postFileUpload.array('file'), postHandler.create)
  router.post(
    '/posts/image',
    postImageUpload.single('file'),
    postHandler.addImage
  )
  router.delete('/posts/:postId', postHandler.destroy)
  router.get('/posts/:postId', postHandler.retrieve)
  router.put('/posts/:postId', postFileUpload.array('file'), postHandler.update)

  router.post('/comments', commentHandler.create)
  router.delete('/comments/:commentId', commentHandler.destroy)

  router.get('/users', userHandler.list)

  // TEST AREA

  router.get('/test/send-mail', (req, res) => {
    try {
      sendMail({
        mailServer,
        from: 'noreply@limesociety.com', // gmail에선 동작 안한다고 함
        to: 'gnosis05@gmail.com',
        subject: '메일 테스트입니다',
        text: '메일 전송 테스트입니다.\n\n주소: https://limesociety.com'
      })

      return res.status(200).send({
        message: 'ok'
      })
    } catch (err) {
      return res.status(500).send({ message: err.message })
    }
  })

  server.use(path, router)
}

export default {
  config
}
