import { Notice } from 'models'

async function list (req, res) {
  try {
    const notices = await Notice.findAll()
    return res.status(200).send({ notices })
  } catch (err) {
    return res.status(500).send({ message: err.message })
  }
}

export default {
  list
}
