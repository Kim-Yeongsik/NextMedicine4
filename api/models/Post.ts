import { Association, DataTypes, literal, Model } from 'sequelize'

import { fixModelProperties, sequelize } from 'db'

import Board from './Board'
// import Comment from './Comment'
import Group from './Group'
import User from './User'

import { int, timestamp } from 'aws-sdk/clients/datapipeline'

@fixModelProperties
class Post extends Model {
  public id!: number
  public parentId!: string
  public subject!: string
  public content!: string
  public contentAsHtml!: string
  public contentAsText!: string
  public writer!: string
  public isNotice!: boolean
  public isComment!: int
  public readCount!: number
  public commentCount!: number
  public likeCount!: int
  public dislikeCount!: int

  public limitGender!: string
  public isAlias!: int
  public userAlias!: string
  public isLocked!: int
  public hasPoll!: int
  public reportCount!: int
  public isConsulTable!: int

  public pale!: string
  public readonly createdAt!: timestamp
  public readonly updatedAt!: timestamp
  public addOn?: object
  public files!: Array<{
    fieldname?: string
    originalname?: string
    encoding?: string
    mimetype?: string
    destination?: string
    filename?: string
    path?: string
    size?: number
  }>
  public images?: Array<{
    fieldname?: string
    originalname?: string
    encoding?: string
    mimetype?: string
    destination?: string
    filename?: string
    path?: string
    size?: number
  }>

  public postId!: number
  public boardId!: number
  public groupId!: number
  public userId!: number

  public readonly post?: Post
  public readonly board?: Board
  public readonly group?: Group
  // public readonly comments?: Comment[]
  public readonly user?: User

  public static associations: {
    board: Association<Post, Board>
    group: Association<Post, Group>
    comments: Association<Post, Post>
    user: Association<Post, User>
  }
}

Post.init(
  {
    parentId: DataTypes.STRING,
    subject: DataTypes.STRING,
    content: DataTypes.TEXT,
    contentAsHtml: DataTypes.TEXT,
    contentAsText: DataTypes.TEXT,
    writer: DataTypes.STRING,
    isNotice: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    isComment: DataTypes.INTEGER,
    readCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    commentCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    likeCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    dislikeCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    files: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: [],
      comment: `[{
        userId
        originalName
        mimeType: image/png
        name: uuid4
        size: bytes
      }]`
    },
    images: {
      type: DataTypes.JSONB,
      allowNull: true,
      defaultValue: []
    },
    addOn: {
      type: DataTypes.JSONB,
      allowNull: true,
      defaultValue: null
    }
  },
  {
    tableName: 'posts',
    modelName: 'post',
    indexes: [
      {
        fields: [
          'boardId',
          { attribute: 'isNotice', order: 'DESC' } as any,
          { attribute: 'id', order: 'DESC' } as any
        ]
      }
    ],
    sequelize
  }
)

Post.belongsTo(Board)
Post.belongsTo(Group)
Post.belongsTo(User)

Post.afterCreate(async post => {
  const board = await Board.findByPk(post.boardId)
  board.increment('postCount', { by: 1 })
})
Post.afterDestroy(async post => {
  const board = await Board.findByPk(post.boardId)
  board.decrement('postCount', { by: 1 })
})
Post.afterCreate(async post => {
  const group = await Group.findByPk(post.groupId)
  group.increment('postCount', { by: 1 })
})
Post.afterDestroy(async post => {
  const group = await Group.findByPk(post.groupId)
  group.decrement('postCount', { by: 1 })
})

export default Post
