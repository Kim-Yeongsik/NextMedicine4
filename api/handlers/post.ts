import { Comment, Post } from 'models'

import fs from 'fs'

async function create (req, res) {
  // 공지사항 작성 시 관리자 권한 확인하기
  if (req.body.isNotice === 'true' && (req.user && !req.user.isAdmin)) {
    return res
      .status(403)
      .send({ message: '관리자가 아닌 사용자는 접근할 수 없습니다!' })
  }

  try {
    const post = await Post.create({
      postId: req.body.postId,
      boardId: req.body.boardId,
      groupId: req.body.groupId,
      userId: req.user.id,
      parentId: req.user.parentId,
      subject: req.body.subject,
      content: req.body.content,
      contentAsHtml: req.body.contentAsHtml,
      contentAsText: req.body.contentAsText,
      wirter: req.body.wirter,
      isNotice: req.body.isNotice,
      isComment: req.body.isComment,
      addOn: JSON.parse(req.body.addOn),
      files: req.files || [],
      images: req.body.images && JSON.parse(req.body.images)
    })

    // =============================================================

    const result = await Comment.findByPk(post.isComment && post.parentId, {
      include: [
        {
          where: {
            id: post.parentId
          },
          association: Comment.associations.post,
          attributes: {
            exclude: ['content']
          }
        }
      ]
    })
    if (result && result.post) {
      await result.post.update({
        commentCount: result.post.commentCount + 1
      })
    }

    // =============================================================

    return res.status(201).send({ post })
  } catch (err) {
    return res.status(400).send({ message: err.message })
  }
}

async function destroy (req, res) {
  try {
    const postId = Number(req.params.postId)
    const post = await Post.findByPk(postId)

    if (!post) {
      return res.status(404).send({ message: 'Not Found' })
    }

    // 공지사항 삭제 시 관리자 권한 확인하기
    if (
      (post.isNotice || req.body.isNotice === 'true') &&
      req.user &&
      !req.user.isAdmin
    ) {
      return res
        .status(403)
        .send({ message: '관리자가 아닌 사용자는 접근할 수 없습니다.' })
    }

    // =============================================================

    const comment = await Comment.findByPk(postId, {
      attributes: ['id', 'parentId'],
      include: [
        {
          association: Comment.associations.post,
          attributes: {
            exclude: ['content']
          }
        }
      ]
    })

    if (!comment) {
      return res.status(404).send({ message: 'Not Found' })
    }

    // =============================================================

    // 로그인 된 사용자와 Post의 작성자가 다를 경우, 응답 오류
    const userId = req.user && req.user.id
    if (
      (!(req.user && req.user.isAdmin) && userId !== post.userId) ||
      userId !== comment.userId
    ) {
      return res.status(403).send({ message: 'Permission Denied' })
    }

    // post의 files 실제 파일 삭제
    post.files.forEach(
      file =>
        fs.existsSync('../server/uploads/posts/image/' + file.filename) &&
        fs.unlink('../server/uploads/posts/' + file.filename, err => {
          console.log(err)
        })
    )

    // post의 images 실제 파일 삭제
    post.images.forEach(
      file =>
        fs.existsSync('../server/uploads/posts/image/' + file.filename) &&
        fs.unlink('../server/uploads/posts/image/' + file.filename, err => {
          console.log(err)
        })
    )

    // =============================================================

    if (comment && comment.post) {
      await comment.post.update({
        commentCount: Math.max(0, comment.post.commentCount - 1)
      })
    }

    await comment.destroy()

    // =============================================================

    await post.destroy()

    return res.status(204).send()
  } catch (err) {
    return res.status(400).send({ message: err.message })
  }
}

async function retrieve (req, res) {
  try {
    const postId = Number(req.params.postId)
    const post = await Post.findByPk(postId, {
      include: [
        Post.associations.group,
        {
          association: Post.associations.comments,
          separate: true,
          order: ['id'],
          include: [
            {
              association: Comment.associations.user,
              attributes: {
                exclude: ['password']
              }
            }
          ]
        },
        Post.associations.board,
        {
          association: Post.associations.comments,
          separate: true,
          order: ['id'],
          include: [
            {
              association: Comment.associations.user,
              attributes: {
                exclude: ['password']
              }
            }
          ]
        },
        {
          association: Post.associations.user,
          attributes: {
            exclude: ['password']
          }
        }
      ]
    })
    if (!post) {
      return res.status(404).send({ message: 'Not Found' })
    }

    const result = await post.update({
      readCount: post.readCount + 1
    })
    return res.status(200).send({ post: result })
  } catch (err) {
    return res.status(400).send({ message: err.message })
  }
}

async function update (req, res) {
  try {
    const postId = Number(req.params.postId)
    const post = await Post.findByPk(postId)

    if (!post) {
      return res.status(404).send({ message: 'Not Found' })
    }

    // 공지사항 수정 시 관리자 권한 확인하기
    if (
      (post.isNotice || req.body.isNotice === 'true') &&
      req.user &&
      !req.user.isAdmin
    ) {
      return res
        .status(403)
        .send({ message: '관리자가 아닌 사용자는 접근할 수 없습니다.' })
    }

    // 로그인 된 사용자와 Post의 작성자가 다를 경우, 응답 오류
    const userId = req.user && req.user.id
    if (!(req.user && req.user.isAdmin) && userId !== post.userId) {
      return res
        .status(403)
        .send({ message: '해당 사용자는 접근할 수 없습니다.' })
    }

    // 기존 post의 files에서 삭제된 항목을 지우고, 추가된 항목을 더함
    const removedFiles = []
    post.files = post.files
      .filter((file, index) => {
        if (req.body.files && req.body.files.includes(file.filename)) {
          return true
        }
        removedFiles.push(file)
        return false
      })
      .concat(req.files)
    // 기존 post의 files 에서 요청의 files에 없는 항목을 삭제
    removedFiles.forEach(file =>
      fs.unlink('../server/uploads/posts/' + file.filename, err => {
        console.log(err)
      })
    )

    await post.update({
      subject: req.body.subject || post.subject,
      content: req.body.content || post.content,
      contentAsHtml: req.body.contentAsHtml || post.contentAsHtml,
      contentAsText: req.body.contentAsText || post.contentAsText,
      isNotice:
        req.body.isNotice === 'true' || req.body.isNotice || post.isNotice,
      addOn: req.body.addOn ? JSON.parse(req.body.addOn) : [],
      files: post.files,
      images: req.body.images && JSON.parse(req.body.images),
      updatedAt: Date.now()
    })

    return res.status(201).send({ post })
  } catch (err) {
    return res.status(400).send({ message: err.message })
  }
}

async function addImage (req, res) {
  try {
    if (!req.file) throw new Error('잘못된 이미지입니다.')
    res.status(201).send({ image: req.file })
  } catch (err) {
    return res.status(400).send({ message: err.message })
  }
}

export default {
  create,
  destroy,
  retrieve,
  update,
  addImage
}
