import * as controller from 'lib/controller'

const url = 'api/comments'

async function create (
  postId: number,
  data: Model.Comment,
  options?: controller.ControllerOptions
) {
  return controller.any('post', url, { postId, ...data }, options)
}

async function destroy (
  commentId: number,
  options?: controller.ControllerOptions
) {
  return controller.boolean('delete', `${url}/${commentId}`, {}, options)
}

export default {
  create,
  destroy
}
