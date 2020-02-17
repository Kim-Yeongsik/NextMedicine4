import { Association, DataTypes, literal, Model } from 'sequelize'

import { fixModelProperties, sequelize } from 'db'
import Board from './Board'
import Group from './Group'
import Post from './Post'
import User from './User'

import { int } from 'aws-sdk/clients/datapipeline'

@fixModelProperties
class Comment extends Model {
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
  public pale!: string
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
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

  public groupId!: number
  public boardId!: number
  public postId!: number
  public userId!: number

  public readonly group?: Group
  public readonly board?: Board
  public readonly post?: Post
  public readonly user?: User

  public static associations: {
    group: Association<Post, Group>
    board: Association<Post, Board>
    post: Association<Post, Post>
    user: Association<Post, User>
  }
}

Comment.init(
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
    tableName: 'comments',
    modelName: 'comment',
    indexes: [
      {
        fields: ['postId', 'id']
      }
    ],
    sequelize
  }
)

Comment.belongsTo(Group)
Comment.belongsTo(Board)
Comment.belongsTo(Post)
Post.hasMany(Comment)
Comment.belongsTo(User)

export default Comment
