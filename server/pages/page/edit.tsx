import { inject, observer } from 'mobx-react'
import React from 'react'
import { Router } from 'server/routes'
import { Store } from 'stores'

import { createStyles, WithStyles, withStyles } from '@material-ui/core'

import postController from 'controllers/post'
import MyPostForm from './components/PostForm'
import { withLayout } from './layout'

const styles = theme =>
  createStyles({
    root: {}
  })

interface PageProps extends WithStyles<typeof styles> {
  post?: Model.Post
  board?: Model.Board
}

@inject((allStores: any) => ({
  store: allStores.store as Store
}))
@observer
class Page extends React.Component<PageProps & { store?: Store }> {
  static async getInitialProps (ctx) {
    const postId = parseInt(ctx.query.postId, 10)
    const { post } = await postController.retrieve(postId, { ctx })

    return {
      post
    }
  }

  // componentDidMount () {
  //   if (
  //     this.props.post &&
  //     !this.props.store.checkPermission({ userId: this.props.post.user.id })
  //   ) {
  //     Router.back()
  //     this.props.store.snackOpen('권한이 없습니다.', 'error')
  //   }
  // }

  handleOnSubmit = async (form, files, images) => {
    const { board, post } = this.props
    const { authors, journal, published } = form.values()
    if (!post) {
      alert('존재하지 않는 게시물입니다.')
      return
    }

    const boardId = board ? board.id : post.board.id
    const data = {
      ...form.values(),
      images: JSON.stringify(images),
      boardId,
      addOn: JSON.stringify({ authors, journal, published })
    }

    const formData = new FormData()
    for (const key in data) formData.append(key, data[key])
    if (files) {
      for (const file of files) {
        formData.append('file', file)
        formData.append('files', file.name || file.filename)
      }
    }

    if (await postController.update(post.id, formData, { useAlert: true })) {
      Router.pushRoute(`/${post.board.name}/${post.id}`)
    }
  }

  render () {
    const { post, store } = this.props
    const isAdmin = store.viewer && store.viewer.isAdmin

    return (
      <>
        <MyPostForm
          post={post}
          onSubmit={this.handleOnSubmit}
          isAdmin={isAdmin}
          // hasAddOn={['paper', 'research'].includes(post.board.name)}
          // showIsNotice={['notice', 'feedback'].includes(post.board.name)}
        />
      </>
    )
  }
}

export const Edit = layout => withLayout(layout)(withStyles(styles)(Page))
