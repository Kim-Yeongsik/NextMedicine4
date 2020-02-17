import {
  createStyles,
  Divider,
  Grid,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'
import Comment from './Comment'

const styles = theme =>
  createStyles({
    root: {
      marginBottom: theme.spacing(3),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    dividerMargin: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    }
  })

interface PageProps extends WithStyles<typeof styles> {
  comments: Array<Model.Post>
  post: Model.Post
  urlPrefix?: any
  checkPermission?: Function
}

class Page extends React.Component<PageProps> {
  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render () {
    const { classes, comments, post, urlPrefix, checkPermission } = this.props

    return (
      <>
        <Grid item className={classes.root}>
          <Typography variant='body1' display='inline'>
            댓글
          </Typography>{' '}
          <Typography variant='body1' display='inline' color='primary'>
            {comments.length}
          </Typography>
          <Divider className={classes.dividerMargin} />
          {post && comments.length > 0 ? (
            comments.map(post => (
              <React.Fragment key={post.id}>
                <Grid item container xs={12}>
                  <Comment
                    urlPrefix={urlPrefix}
                    post={post}
                    // accessPermission={checkPermission({
                    //   userId: post.userId
                    // })}
                  />
                </Grid>
              </React.Fragment>
            ))
          ) : (
            <Typography
              variant='body2'
              color='textSecondary'
              style={{ margin: '10px auto' }}
              align='center'
            >
              댓글을 달아주세요
            </Typography>
          )}
        </Grid>
      </>
    )
  }
}

export default withStyles(styles)(Page)
