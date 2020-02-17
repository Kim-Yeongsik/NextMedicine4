import { User } from 'models'

async function list (req, res) {
  try {
    const users = await User.findAll()
    return res.status(200).send({ users })
  } catch (err) {
    return res.status(500).send({ message: err.message })
  }
}

export default {
  list
}
