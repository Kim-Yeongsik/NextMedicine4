import { sequelize } from 'db'
import * as models from 'models'

async function main () {
  if (!models) {
    return
  }

  await sequelize.drop()
}

;(async () => {
  await main()
})().catch(e => {
  console.log(e)
})
