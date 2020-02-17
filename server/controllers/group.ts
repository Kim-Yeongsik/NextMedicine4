import * as controller from 'lib/controller'

const url = 'api/groups'

async function list (options?: controller.ControllerOptions) {
  return controller.any('get', `${url}`, {}, options)
}

async function retrieve (
  groupId: number,
  query?: { offset: number; limit: number },
  options?: controller.ControllerOptions
) {
  return controller.any('get', `${url}/${groupId}`, query || {}, options)
}

export default {
  list,
  retrieve
}
