import * as controller from 'lib/controller'

const url = 'api/boards'

async function list (options?: controller.ControllerOptions) {
  return controller.any('get', `${url}`, {}, options)
}

async function retrieve (
  boardId: number,
  query?: { offset: number; limit: number },
  options?: controller.ControllerOptions
) {
  return controller.any('get', `${url}/${boardId}`, query || {}, options)
}

export default {
  list,
  retrieve
}
