import { inject, observer } from 'mobx-react'
import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'
import { Store } from 'stores'

import {
  createStyles,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'

// import commentController from 'controllers/comment'
import postController from 'controllers/post'
import { withLayout } from './layout'

import MyCommentForm from './components/CommentForm'
import MyCommentList from './components/CommentList'
import MyPost from './components/Post'

const styles = theme =>
  createStyles({
    spacer: {
      height: 50
    }
  })

interface PageProps extends WithStyles<typeof styles> {
  post: Model.Post
}

@inject((allStores: any) => ({
  store: allStores.store as Store
}))
@observer
class Page extends React.Component<PageProps & { store?: Store }> {
  static async getInitialProps (ctx) {
    const postId = parseInt(ctx.query.postId, 10)
    if (isNaN(postId)) {
      return { post: null }
    }
    const { post } = await postController.retrieve(postId, { ctx })

    return {
      post
    }
  }

  handleCommentSubmit = async form => {
    const { post } = this.props
    const { comment } = form.values()
    if (!comment) return

    if (
      await postController.create(
        post.id,
        { content: comment },
        { useAlert: true }
      )
    ) {
      Router.pushRoute(`/${post.board.id}/${post.id}`)
    }
  }

  render () {
    const { classes, post, store } = this.props

    if (!post) {
      return <>존재하지 않는 글입니다.</>
    }

    return (
      <>
        <MyPost
          post={post}
          urlPrefix={'/post'}
          posts={'/' + post.board.name}
          // accessPermission={store.checkPermission({
          //   userId: post.user.id,
          //   isAdmin: post.board.name
          // })}
        />
        <div className={classes.spacer} />
        <MyCommentList
          urlPrefix={'/' + post.board.name}
          comments={post.comments}
          post={post}
          checkPermission={store.checkPermission}
        />
        <MyCommentForm
          post={post}
          onSubmit={this.handleCommentSubmit}
          accessPermission={store.checkPermission()}
        />
        <Typography variant='subtitle1'>다담글</Typography>
        <Typography variant='subtitle1'>다음글</Typography>
        <Typography variant='subtitle1'>이전글</Typography>
        <Typography variant='subtitle1'>전전글</Typography>
      </>
    )
  }
}

export const Read = layout => withLayout(layout)(withStyles(styles)(Page))
