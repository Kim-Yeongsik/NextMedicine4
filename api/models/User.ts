import { DataTypes, literal, Model } from 'sequelize'

import { fixModelProperties, sequelize } from 'db'

@fixModelProperties
class User extends Model {
  public id!: number
  public loginId!: string
  public name!: string
  public nickname!: string
  public alias: string
  public email!: string
  public level!: number
  public gender!: boolean
  public birthday: Date
  public homepage: string
  public tel: string
  public mobile: string
  public password!: string
  public isAdmin!: boolean
  public readonly createdAt!: Date
  public readonly updatedAt!: Date
}

User.init(
  {
    loginId: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    nickname: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    alias: {
      type: DataTypes.STRING(20),
      allowNull: true
    },
    email: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    birthday: {
      type: DataTypes.DATE(),
      allowNull: true
    },
    homepage: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    tel: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    mobile: {
      type: DataTypes.STRING(50),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    isAdmin: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  },
  {
    tableName: 'users',
    modelName: 'user',
    sequelize
  }
)

export default User
