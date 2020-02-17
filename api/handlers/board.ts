import { Board, Post } from 'models'

async function list (req, res) {
  try {
    const { rows: boards, count: boardCount } = await Board.findAndCountAll()
    return res.status(200).send({ boards, boardCount })
  } catch (err) {
    return res.status(500).send({ message: err.message })
  }
}

async function retrieve (req, res) {
  try {
    const boardId = Number(req.params.boardId)
    const board = await Board.findByPk(boardId)
    if (!board) {
      return res.status(404).send({ message: 'Not Found' })
    }

    const offset = Number(req.query.offset || 0)
    const limit = Number(req.query.limit || 25)

    const posts = await Post.findAll({
      where: {
        isComment: '0',
        boardId
      },
      attributes: {
        exclude: ['content']
      },
      order: [['isNotice', 'DESC'], ['id', 'DESC']],
      include: [
        {
          association: Post.associations.user,
          attributes: {
            exclude: ['password']
          }
        },
        {
          association: Post.associations.board
        },
        {
          association: Post.associations.group
        }
      ],
      offset,
      limit
    })
    console.log(posts)

    const boardPosts = await Post.findAll({
      where: {
        isComment: '0',
        boardId
        // boardId: { in: [`${Number}`] }
      },
      attributes: {
        exclude: ['content']
      },
      order: [['isNotice', 'DESC'], ['id', 'DESC']],
      include: [
        {
          association: Post.associations.user,
          attributes: {
            exclude: ['password']
          }
        },
        {
          association: Post.associations.board
        },
        {
          association: Post.associations.group
        }
      ],
      offset,
      limit
    })

    return res.status(200).send({ board, boardPosts, posts })
  } catch (err) {
    return res.status(400).send({ message: err.message })
  }
}

export default {
  list,
  retrieve
}
