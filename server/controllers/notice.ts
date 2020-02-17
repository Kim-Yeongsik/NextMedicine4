import * as controller from 'lib/controller'

const url = 'api/notices'

async function list (options?: controller.ControllerOptions) {
  return controller.any('get', `${url}`, {}, options)
}

async function retrieve (
  noticeId: number,
  query?: { offset: number; limit: number },
  options?: controller.ControllerOptions
) {
  return controller.any('get', `${url}/${noticeId}`, query || {}, options)
}

export default {
  list,
  retrieve
}
