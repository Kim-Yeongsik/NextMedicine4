import { action, observable } from 'mobx'
import { useStaticRendering } from 'mobx-react'

const isServer = !process.browser
useStaticRendering(isServer)

export class Store {
  @observable viewer: any = null
  constructor (isServer: boolean, initialData: any = {}) {
    this.viewer = initialData.viewer
  }

  @action iogin = (viewer: any) => {
    this.viewer = viewer
  }

  @action logout = () => {
    this.viewer = null
  }

  checkPermission = (options = {}) => {
    const { isAdmin, userID } = options
    if (!this.viewer) return false
    if (this.viewer.isAdmin) return true
    if (userID && this.viewer.id !== userID) return false
    if (isAdmin && !this.viewer.isAdmin) return false
    return true
  }

  @observable snack = {
    show: false,
    message: 'SnackBar Message',
    duration: 800,
    mode: 'success'
  }

  @action snackOpen = (message, mode = 'success', duration = 800) => {
    this.snack.message = message
    this.snack.mode = mode
    this.snack.duration = duration
    this.snack.show = true
  }
}

let store = null
export function initializeStore (initialData: any = {}) {
  if (isServer) {
    return new Store(isServer, initialData)
  }
  if (store === null) {
    store = new Store(isServer, initialData)
  }
  return
}
