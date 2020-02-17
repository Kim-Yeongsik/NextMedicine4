import * as controller from 'lib/controller'

const url = 'api/posts'

async function create (
  data: Model.Post | FormData,
  options?: controller.ControllerOptions
) {
  return controller.any('post', url, data, options)
}

async function destroy (postId: number, options?: controller.ControllerOptions) {
  return controller.boolean('delete', `${url}/${postId}`, {}, options)
}

async function retrieve (
  postId: number,
  options?: controller.ControllerOptions
) {
  return controller.any('get', `${url}/${postId}`, {}, options)
}

async function update (
  postId: number,
  data: Model.Post | FormData,
  options?: controller.ControllerOptions
) {
  return controller.any('put', `${url}/${postId}`, data, options)
}

async function addImage (
  data: FormData,
  options?: controller.ControllerOptions
) {
  return controller.any('post', `${url}/image`, data, options)
}

export default {
  create,
  destroy,
  retrieve,
  update,
  addImage
}
