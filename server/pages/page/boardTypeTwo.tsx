import {
  Box,
  createStyles,
  Divider,
  Grid,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'
import { Router } from 'server/routes'

import ChatBubbleIcon from '@material-ui/icons/chatBubbleOutline'
import ThumbUpIcon from '@material-ui/icons/ThumbUpAltOutlined'

import { containerBreakpoint } from 'consts/layout'

const styles = theme =>
  createStyles({
    boardRoot: {
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        paddingTop: theme.spacing(2),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
      }
    },
    postContents: {
      marginTop: theme.spacing(1)
    },
    marginBottom: {
      marginBottom: theme.spacing(1)
    },
    marginTop: {
      marginTop: '14px'
    },
    dividerMargin: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2)
    },
    dividerMarginBottom: {
      marginBottom: theme.spacing(1)
    },
    alias: {
      color: '#568',
      fontSize: '95%'
    },
    uploadTime: {
      fontSize: '13px',
      paddingLeft: '15px',
      color: '#CECDCD'
    },
    IconFlexEnd: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end'
    },
    commentsCount: {
      paddingLeft: theme.spacing(2),
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        paddingTop: '2px',
        paddingLeft: '6px'
      }
    },
    loadMoreButtonCenter: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    }
  })

interface BoardTypeThreeProps extends WithStyles<typeof styles> {
  post: Model.Post
}

class Post extends React.Component<BoardTypeThreeProps> {
  handlePostClick = postId => e => {
    e.preventDefault()
    e.stopPropagation()
    Router.pushRoute(`/post/${postId}`)
  }

  render () {
    const { classes, post } = this.props

    return (
      <Grid container>
        <Grid item container className={classes.boardRoot}>
          <Grid item xs={12} className={classes.marginBottom}>
            <Typography
              onClick={this.handlePostClick(post.id)}
              variant='subtitle1'
            >
              [{post.board.name}] {post.subject}
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.marginBottom}>
            <Typography variant='body2'>
              <span className={classes.alias}>{post.user.nickname}</span>
              <b className={classes.uploadTime}>
                {new Date(post.createdAt).toISOString().slice(0, 10)}
              </b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Box
              className={classes.postContents}
              style={{
                overflow: 'hidden',
                width: 'auto',
                display: 'webkit-box',
                maxHeight: '3em',
                textOverflow: 'ellipsis',
                wordWrap: 'break-word'
              }}
              dangerouslySetInnerHTML={{
                __html: post.contentAsHtml
              }}
            />
          </Grid>
          <Grid item container xs={12} className={classes.marginTop}>
            <Grid item xs={9} className={classes.IconFlexEnd}>
              <ThumbUpIcon style={{ fontSize: '18px' }} />
            </Grid>
            <Grid item xs={1} className={classes.commentsCount}>
              <Typography variant='body2'>
                <b>{post.likeCount}</b>
              </Typography>
            </Grid>
            <Grid item xs={1} className={classes.IconFlexEnd}>
              <ChatBubbleIcon style={{ fontSize: '18px' }} />
            </Grid>
            <Grid item xs={1} className={classes.commentsCount}>
              <Typography variant='body2'>
                <b>{post.commentCount}</b>
              </Typography>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Divider className={classes.dividerMargin} />
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Post)
