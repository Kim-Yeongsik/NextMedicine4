import { Association, DataTypes, literal, Model } from 'sequelize'

import { int } from 'aws-sdk/clients/datapipeline'
import { fixModelProperties, sequelize } from 'db'

@fixModelProperties
class Group extends Model {
  public id!: number
  public name!: string
  public order!: int
  public postCount!: number
  public readonly addedAt!: Date
}

Group.init(
  {
    name: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    postCount: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    }
  },
  {
    tableName: 'groups',
    modelName: 'group',
    sequelize
  }
)

export default Group
