import { Comment, Post } from 'models'

async function create (req, res) {
  try {
    const comment = await Post.create({
      boardId: req.body.boardId,
      groupId: req.body.groupId,
      postId: req.body.postId,
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

    const result = await Comment.findByPk(comment.id, {
      include: [
        {
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

    return res.status(201).send({ comment: result })
  } catch (err) {
    return res.status(400).send({ message: err.message })
  }
}

async function destroy (req, res) {
  try {
    const commentId = Number(req.params.commentId)
    const comment = await Comment.findByPk(commentId, {
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

    // 로그인 된 사용자와 Comment의 작성자가 다를 경우, 응답 오류
    const userId = req.user && req.user.id
    if (!(req.user && req.user.isAdmin) && userId !== comment.userId) {
      return res.status(403).send({ message: 'Permission Denied' })
    }

    if (comment && comment.post) {
      await comment.post.update({
        commentCount: Math.max(0, comment.post.commentCount - 1)
      })
    }

    await comment.destroy()

    return res.status(204).send()
  } catch (err) {
    return res.status(400).send({ message: err.message })
  }
}

export default {
  create,
  destroy
}
