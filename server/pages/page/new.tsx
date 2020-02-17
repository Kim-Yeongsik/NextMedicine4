import { inject, observer } from 'mobx-react'
import React from 'react'
import { Router } from 'server/routes'
import { Store } from 'stores'

import { createStyles, WithStyles, withStyles } from '@material-ui/core'

import BoardId from 'consts/board'
import boardController from 'controllers/board'
import postController from 'controllers/post'
import PostForm from './components/PostForm'
import { withLayout } from './layout'

const styles = theme =>
  createStyles({
    root: {
      //
    }
  })

interface PageProps extends WithStyles<typeof styles> {
  board: Model.Board
}

@inject((allStores: any) => ({
  store: allStores.store as Store
}))
@observer
class Page extends React.Component<PageProps & { store?: Store }> {
  static async getInitialProps (ctx) {
    const boardName = ctx.asPath
      .split('/')[1]
      .split('?')[0]
      .toUpperCase()

    // const boardId = parseInt(BoardId[boardName], 10)
    const boardId = parseInt(ctx.query.boardId, 10)
    const { board } = await boardController.retrieve(boardId, null, { ctx })

    return {
      board
    }
  }
  // componentDidMount () {
  //   if (!this.props.store.checkPermission()) {
  //     Router.pushRoute('/')
  //     this.props.store.snackOpen('로그인 후 시도해주세요.', 'error')
  //   }
  // }

  handleOnSubmit = async (form, files, images) => {
    const { board } = this.props
    // const { authors, journal, published } = form.values()

    const data = {
      ...form.values(),
      images: JSON.stringify(images),
      boardId: board && board.id
      // addOn: JSON.stringify({ authors, journal, published })
    }

    const formData = new FormData()
    for (const key in data) formData.append(key, data[key])
    if (files) for (const file of files) formData.append('file', file)

    const { post } = (await postController.create(formData, {
      useAlert: true
    })) || { post: null }
    if (post) {
      Router.pushRoute(`/${board.id}`)
    }
  }

  render () {
    const { board, store } = this.props
    const isAdmin = store.viewer && store.viewer.isAdmin

    return (
      <>
        <PostForm
          board={board}
          onSubmit={this.handleOnSubmit}
          isAdmin={isAdmin}
          // showIsNotice={['notice', 'feedback'].includes(board.name)}
        />
      </>
    )
  }
}

export const New = layout => withLayout(layout)(withStyles(styles)(Page))
