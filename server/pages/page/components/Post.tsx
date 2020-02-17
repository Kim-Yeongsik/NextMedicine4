import {
  Avatar,
  Box,
  createStyles,
  Divider,
  Grid,
  Icon,
  IconButton,
  Menu,
  MenuItem,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'

import Autolinker from 'autolinker'
import { observer } from 'mobx-react'
import moment from 'moment'
import React from 'react'
// import { Router } from 'server/routes'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom'

import ThumbDownIcon from '@material-ui/icons/thumbDownAlt'
import ThumbUpIcon from '@material-ui/icons/thumbUpAlt'

import { containerBreakpoint } from 'consts/layout'

import PaperClipIcon from '@material-ui/icons/Attachment'

import postController from 'controllers/post'

const styles = theme =>
  createStyles({
    boardroot: {
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(3),
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        marginTop: theme.spacing(6),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
      }
    },
    underLinepadding: {
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    postTitle: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2)
    },
    avatar: {
      width: '44px',
      height: '44px',
      position: 'absolute',
      marginTop: '5px',
      textAlign: 'center'
    },
    uploader: {
      fontSize: '15px',
      marginLeft: theme.spacing(8)
    },
    boardTextArea: {
      width: '100%',
      paddingTop: theme.spacing(1),
      paddingBottom: '50px',
      minHeight: theme.spacing(20)
    },
    commentsArea: {
      marginTop: theme.spacing(2)
    },
    postDate: {
      paddingTop: '5px',
      paddingBottom: '7px',
      marginLeft: theme.spacing(8),
      color: '#A4A4A4'
    },
    IconRight: {
      paddingLeft: '40%'
    },
    dividerMarginBottom: {
      marginBottom: theme.spacing(2)
    },
    boardList: {
      marginTop: theme.spacing(1),
      [theme.breakpoints.up(containerBreakpoint(theme))]: {
        paddingLeft: theme.spacing(2),
        paddingRight: theme.spacing(2)
      }
    },
    dividerMargin: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1)
    },
    alias: {
      color: '#568',
      fontSize: '95%'
    },
    ginfo: {
      lineHeight: 0,
      overflow: 'hidden',
      paddingLeft: '15px'
    },
    uploadTime: {
      fontSize: '13px',
      paddingLeft: '15px',
      color: '#CECDCD'
    },
    pale: {
      color: '#777',
      paddingLeft: '2px'
    },
    commentCountColor: {
      color: 'red'
    },
    marginBottom: {
      marginBottom: theme.spacing(2)
    },
    addOnTypo: {
      fontWeight: 500
    },
    content: {
      minHeight: 250,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch'
    },
    actions: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    files: {
      textDecoration: 'none',
      display: 'inline-flex',
      alignItems: 'center',
      '&:hover': {
        filter: 'brightness(1.2)'
      }
    }
  })

interface PageProps extends WithStyles<typeof styles> {
  post: Model.Post
  urlPrefix?: any
  posts: string
  accessPermission?: boolean
}

@observer
class Post extends React.Component<PageProps> {
  state = {
    anchorEl: null,
    likes: 0,
    unLikes: 0,
    likeCount: false,
    dislikeCount: false
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  handleLikeUp = () => {
    if (!this.state.likeCount) {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes + 1,
          likeCount: true
        }
      })
    } else {
      this.setState((prevState, props) => {
        return {
          likes: prevState.likes - 1,
          likeCount: false
        }
      })
    }
  }

  handledislikeCount = () => {
    if (!this.state.dislikeCount) {
      this.setState((prevState, props) => {
        return {
          unLikes: prevState.unLikes + 1,
          dislikeCount: true
        }
      })
    } else {
      this.setState((prevState, props) => {
        return {
          unLikes: prevState.unLikes - 1,
          dislikeCount: false
        }
      })
    }
  }

  handleListClick = e => {
    e.preventDefault()
    e.stopPropagation()
    // Router.pushRoute(`/post/${this.props.post.id}`)
    Router.history.go(-1)
  }

  handleEditClick = e => {
    e.preventDefault()
    e.stopPropagation()
    Router.pushRoute(`/post/${this.props.post.id}/edit`)
  }

  handleDeleteClick = async e => {
    e.preventDefault()
    e.stopPropagation()

    if (!confirm('정말 삭제하시겠습니까? 삭제 후 복구할 수 없습니다.')) return

    if (await postController.destroy(this.props.post.id, { useAlert: true })) {
      Router.pushRoute(`${this.props.urlPrefix}`)
      // Router.pushRoute(`${this.props.posts}`)
    }
  }

  render () {
    const { classes, post, accessPermission } = this.props
    const { anchorEl } = this.state

    return (
      <>
        <Grid item xs={12} className={classes.boardroot}>
          <Typography variant='h5'>넥메인과 나누고 싶은 이야기</Typography>
          <Divider />

          <Grid container className={classes.underLinepadding}>
            <Grid item xs={12} className={classes.postTitle}>
              <Typography variant='h6'>
                <b>[{post.board.name}]</b> {post.subject}
              </Typography>
            </Grid>
            <Grid item xs={10} sm={11} className={classes.underLinepadding}>
              <Avatar
                className={classes.avatar}
                src='../../static/nm/unknown.jpg'
              />
              <Box className={classes.uploader}>
                <Typography variant='subtitle1'>
                  {post.user.nickname}
                </Typography>
              </Box>
              <Box className={classes.postDate}>
                <Typography variant='subtitle2'>
                  {moment(post.createdAt)
                    .locale('ko')
                    .format('YYYY. MM. DD. HH:mm')}
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={2} sm={1}>
              <span className={classes.IconRight}>
                <IconButton
                  aria-owns={anchorEl ? 'simple-menu' : undefined}
                  aria-haspopup='true'
                  onClick={this.handleClick}
                >
                  <Icon fontSize='default'>more_vert</Icon>
                </IconButton>
              </span>
              <Menu
                id='simple-menu'
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={this.handleClose}
              >
                <MenuItem onClick={this.handleClose}>스크랩</MenuItem>
                <MenuItem onClick={this.handleClose}>신고</MenuItem>
                <MenuItem onClick={this.handleListClick}>게시판 목록</MenuItem>
                <MenuItem
                  // disabled={!accessPermission}
                  onClick={this.handleEditClick}
                >
                  수정
                </MenuItem>
                <MenuItem
                  disabled={!accessPermission}
                  onClick={this.handleDeleteClick}
                >
                  삭제
                </MenuItem>
              </Menu>
            </Grid>
            <Grid item className={classes.boardTextArea}>
              <Divider className={classes.dividerMarginBottom} />
              {post.addOn &&
                (post.addOn.authors ||
                  post.addOn.journal ||
                  post.addOn.published) && (
                  <>
                    <Box>
                      {Object.keys(post.addOn).map((key, index) => (
                        <React.Fragment key={index}>
                          <Box display='flex' m={2}>
                            {post.addOn[key] && (
                              <Typography
                                className={classes.addOnTypo}
                                style={{ whiteSpace: 'pre-wrap' }}
                                variant='body2'
                                color='textSecondary'
                                display='inline'
                                component='div'
                              >
                                &middot;
                                {' ' +
                                  key.toUpperCase() +
                                  ': ' +
                                  post.addOn[key]}
                              </Typography>
                            )}
                          </Box>
                        </React.Fragment>
                      ))}
                      <Divider />
                    </Box>
                  </>
                )}
              <Box className={classes.content}>
                <Box
                  style={{
                    whiteSpace: 'pre-wrap',
                    flex: 1
                  }}
                  dangerouslySetInnerHTML={{
                    __html:
                      Autolinker.link(post.contentAsHtml, {
                        stripPrefix: false
                      }) +
                      '<style> img { max-width:100%; height: auto; } </style>'
                  }}
                />

                <Box>
                  {post && post.files.length !== 0 && <Divider />}
                  {post &&
                    post.files.map((file, index) => (
                      <React.Fragment key={index}>
                        <Box
                          className={classes.files}
                          href={'/posts/' + file.fieldname}
                          download={file.originalname}
                        >
                          <PaperClipIcon color='primary' fontSize='small' />
                          <Typography
                            variant='caption'
                            color='primary'
                            component='span'
                            style={{ marginLeft: 3 }}
                          >
                            {file.originalname}
                          </Typography>
                          <Typography
                            variant='caption'
                            color='textSecondary'
                            style={{ marginLeft: 3 }}
                          >
                            ({Math.round(file.size / 1024)} KB)
                          </Typography>
                        </Box>
                        <br />
                      </React.Fragment>
                    ))}
                </Box>
              </Box>
            </Grid>
            <Grid item className={classes.underLinepadding}>
              <Typography variant='body2'>
                <IconButton color='primary' onClick={this.handleLikeUp}>
                  <ThumbUpIcon />
                </IconButton>
                <span>좋아요: </span>
                <span>{post.likeCount + this.state.likes}</span>
                <IconButton onClick={this.handledislikeCount}>
                  <ThumbDownIcon style={{ color: '#610B0B' }} />
                </IconButton>
                <span>비공감: </span>
                <span>{post.dislikeCount + this.state.unLikes}</span>
              </Typography>
            </Grid>
          </Grid>
          <Divider />
        </Grid>
      </>
    )
  }
}

export default withStyles(styles)(Post)
