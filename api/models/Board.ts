import { Association, DataTypes, literal, Model } from 'sequelize'

import { int } from 'aws-sdk/clients/datapipeline'
import { fixModelProperties, sequelize } from 'db'

@fixModelProperties
class Board extends Model {
  public id!: number
  public name!: string
  public notice!: string
  public order!: int
  public gender!: string

  public postCount!: number
  public readonly addedAt!: Date

  public groupId!: number
  public postId!: number
}

Board.init(
  {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    notice: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    gender: {
      type: DataTypes.STRING(20),
      allowNull: false
    },
    postCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    tableName: 'boards',
    modelName: 'board',
    sequelize
  }
)

export default Board
