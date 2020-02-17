import * as controller from 'lib/controller'

const listUrl = 'api/contents'

async function list (options?: controller.ControllerOptions) {
  return controller.any('get', listUrl, {}, options)
}

async function retrieve (
  contentId: number,
  options?: controller.ControllerOptions
) {
  return controller.any('get', `${listUrl}/${contentId}`, {}, options)
}

export default {
  list,
  retrieve
}
