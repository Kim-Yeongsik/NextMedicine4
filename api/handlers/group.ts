import { Group, Post } from 'models'

async function list (req, res) {
  try {
    const { rows: groups, count: groupCount } = await Group.findAndCountAll()
    return res.status(200).send({ groups, groupCount })
  } catch (err) {
    return res.status(500).send({ message: err.message })
  }
}

async function retrieve (req, res) {
  try {
    const groupId = Number(req.params.groupId)
    const group = await Group.findByPk(groupId)
    if (!group) {
      return res.status(404).send({ message: 'Not Found' })
    }

    const offset = Number(req.query.offset || 0)
    const limit = Number(req.query.limit || 25)

    const posts = await Post.findAll({
      where: {
        isComment: '0',
        groupId
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
          association: Post.associations.group
        },
        {
          association: Post.associations.board
        }
      ],
      offset,
      limit
    })

    const groupPosts = await Post.findAll({
      where: {
        isComment: '0',
        groupId
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
          association: Post.associations.group
        },
        {
          association: Post.associations.board
        }
      ],
      offset,
      limit
    })

    return res.status(200).send({ group, groupPosts, posts })
  } catch (err) {
    return res.status(400).send({ message: err.message })
  }
}

export default {
  list,
  retrieve
}
