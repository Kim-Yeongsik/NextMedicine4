import profileController from 'controllers/profile'
import { inject, observer } from 'mobx-react'
import React from 'react'
import { Router } from 'server/routes'
import { Store } from 'stores'

@inject((allStores: any) => ({
  store: allStores.store as Store
}))
@observer
export default class extends React.Component<{ store?: Store }> {
  static async getInitialProps (ctx) {
    const store = ctx.mobxStore
    const name = store.viewer && store.viewer.name
    try {
      const res = await profileController.logout()
      if (!res) throw new Error(res)
      store.logout()
    } catch (error) {
      console.log(error.message)
    } finally {
      if (ctx.res) {
        ctx.res.redirect('/')
      } else {
        Router.pushRoute('/')
      }
      if (name) store.snackOpen(name + '님 안녕히 가세요')
    }
    return {}
  }
}
