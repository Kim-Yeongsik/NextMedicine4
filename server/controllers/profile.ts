import * as controller from 'lib/controller'

const url = 'api/common/profile'

async function checkLockUrl (options?: controller.ControllerOptions) {
  return controller.boolean('post', 'api/check-lock-url', {}, options)
}

async function login (data: any, options?: controller.ControllerOptions) {
  return controller.any('post', 'api/login', data, options)
}

async function logout (options?: controller.ControllerOptions) {
  return controller.boolean('post', 'api/logout', {}, options)
}

async function retrieve (options?: controller.ControllerOptions) {
  return controller.any('get', url, {}, options)
}

async function unlockUrl (data: any, options?: controller.ControllerOptions) {
  return controller.any('post', 'api/unlock-url', data, options)
}

async function update (data: any, options?: controller.ControllerOptions) {
  return controller.any('put', url, data, options)
}

export default {
  checkLockUrl,
  login,
  logout,
  retrieve,
  unlockUrl,
  update
}
