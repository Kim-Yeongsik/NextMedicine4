import {
  Avatar,
  Box,
  Button,
  createStyles,
  Grid,
  Link,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'
import { Router } from 'server/routes'

import ChatBubbleIcon from '@material-ui/icons/chatBubbleOutline'

import classNames from 'classnames'
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
    invisible: {
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    show: {
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    },
    pale: {
      color: '#777',
      paddingLeft: '2px'
    },
    alias: {
      color: '#568',
      fontSize: '95%'
    },
    newPosts: {
      paddingTop: theme.spacing(1),
      marginBottom: theme.spacing(5),
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        marginBottom: theme.spacing(2)
      }
    },
    newPost: {
      borderBottom: '1px',
      paddingTop: theme.spacing(2),
      marginBottom: theme.spacing(3),
      wordBreak: 'break-all',
      fontSize: '13px'
    },
    titleAndContent: {
      [theme.breakpoints.down('sm')]: {
        paddingLeft: '18px'
      }
    },
    nickname: {
      color: '#45A',
      fontWeight: 700,
      cursor: 'pointer'
    },
    nicknamePadding: {
      paddingTop: '3px'
    },
    posts: {
      paddingTop: theme.spacing(1),
      marginBottom: theme.spacing(6)
    },
    mobileTag: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '12px'
      }
    },
    newsParentTitle: {
      fontWeight: 700,
      color: '#0B615E'
    },
    paler: {
      color: '#AAA',
      padding: '3px'
    },
    avatar: {
      width: '44px',
      height: '44px',
      position: 'absolute',
      textAlign: 'center'
    },
    marginBottom: {
      marginBottom: theme.spacing(3),
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        marginBottom: theme.spacing(1)
      }
    },
    paperPadding: {
      paddingLeft: theme.spacing(2),
      paddingRight: theme.spacing(2),
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        paddingTop: '2px',
        paddingLeft: theme.spacing(0),
        paddingRight: theme.spacing(0)
      }
    },
    IconFlexEnd: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        paddingTop: '2px'
      }
    },
    commentsCount: {
      paddingLeft: theme.spacing(2),
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        paddingTop: '2px',
        paddingLeft: '6px'
      }
    },
    upLoaderInfo: {
      paddingRight: theme.spacing(4)
    },
    upLoaderAndDate: {
      textAlign: 'end',
      paddingRight: theme.spacing(1)
    },
    postSubject: {
      display: 'block',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      width: 'auto',
      whiteSpace: 'nowrap'
    },
    postContents: {
      marginTop: theme.spacing(1)
    },
    boxInTag: {
      textAlign: 'center',
      color: '#ffffff',
      backgroundColor: 'darkgray',
      padding: '2px',
      margin: 'auto',
      width: '65px',
      height: '25px',
      borderRadius: '5px'
    },
    webTag: {
      [theme.breakpoints.up('sm')]: {
        fontSize: '13px'
      }
    },
    loadMoreButtonCenter: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2)
    }
  })

interface BoardTypeTwoProps extends WithStyles<typeof styles> {
  post: Model.Post
}

class Post extends React.Component<BoardTypeTwoProps> {
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
          <Grid item container xs={12} className={classes.newPosts}>
            <Grid
              item
              container
              xs={12}
              md={9}
              onClick={this.handlePostClick(post.id)}
            >
              <Grid item xs={2} md={2} className={classes.paperPadding}>
                <Box className={classes.boxInTag}>
                  <Typography
                    variant='subtitle1'
                    className={classNames(classes.webTag, classes.mobileTag)}
                  >
                    <Link href='/' color='inherit' underline='none'>
                      {post.board.name}
                    </Link>
                  </Typography>
                </Box>
              </Grid>
              <Grid
                item
                container
                xs={10}
                sm={10}
                className={classes.titleAndContent}
              >
                <Grid item container xs={12}>
                  <Grid item xs={10}>
                    <Link underline='none' href='/post'>
                      <Typography
                        variant='subtitle1'
                        className={classNames(
                          classes.newsParentTitle,
                          classes.postSubject
                        )}
                      >
                        {post.subject}
                      </Typography>
                    </Link>
                  </Grid>
                  <Grid item xs={1} className={classes.IconFlexEnd}>
                    <ChatBubbleIcon style={{ fontSize: '22px' }} />
                  </Grid>
                  <Grid item xs={1} className={classes.commentsCount}>
                    <Typography variant='body2'>{post.commentCount}</Typography>
                  </Grid>
                </Grid>
                <Grid item xs={12} className={classes.invisible}>
                  {/* <Typography variant='body2' className={classes.postContents}> */}
                  <Box
                    className={classes.postContents}
                    style={{
                      overflow: 'hidden',
                      width: 'auto',
                      display: 'webkit-box',
                      maxHeight: '3em',
                      textOverflow: 'ellipsis',
                      wordWrap: 'break-word'
                      // whiteSpace: 'nowrap'
                    }}
                    dangerouslySetInnerHTML={{
                      __html: post.contentAsHtml
                    }}
                  />
                  {/* </Typography> */}
                </Grid>
                <Grid item container xs={12} className={classes.show}>
                  <span className={classes.nicknamePadding}>
                    <Typography
                      variant='body2'
                      className={classNames(classes.alias, classes.nickname)}
                    >
                      {post.user.nickname}
                    </Typography>
                  </span>
                  <span>
                    <Typography variant='body2' className={classes.paler}>
                      {new Date(post.createdAt).toISOString().slice(0, 10)}
                    </Typography>
                  </span>
                </Grid>
              </Grid>
            </Grid>
            <Grid
              item
              container
              xs={3}
              className={classNames(classes.invisible, classes.upLoaderInfo)}
            >
              <Grid item xs={10} className={classes.upLoaderAndDate}>
                <Typography
                  variant='body2'
                  className={classNames(classes.alias, classes.nickname)}
                >
                  {post.user.nickname}
                </Typography>
                <Typography variant='body2' className={classes.paler}>
                  {new Date(post.createdAt).toISOString().slice(0, 10)}
                </Typography>
              </Grid>
              <Grid item xs={2}>
                <Avatar
                  className={classes.avatar}
                  src='../../static/nm/unknown.jpg'
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Post)
