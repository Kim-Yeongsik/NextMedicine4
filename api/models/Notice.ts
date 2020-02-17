import { Association, DataTypes, literal, Model } from 'sequelize'

import { fixModelProperties, sequelize } from 'db'
import Board from './Board'

@fixModelProperties
class Notice extends Model {
  public id!: number
  public startAt!: Date
  public endAt!: Date

  public boardId!: number

  public readonly board?: Board

  public static associations: {
    board: Association<Notice, Board>
  }
}

export default Notice
