import {
  Avatar,
  Box,
  Button,
  createStyles,
  Divider,
  Grid,
  Link,
  List,
  ListItem,
  Paper,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import * as moment from 'moment'
import NextSeo from 'next-seo'
import React from 'react'
import { Router } from 'server/routes'

import ChatBubbleIcon from '@material-ui/icons/chatBubbleOutline'

import GroupId from 'consts/group'
import groupController from 'controllers/group'

import postController from 'controllers/post'

import HomeId from 'consts/home'
import homeController from 'controllers/home'

import NMAppBar from 'components/nmAppBar'
import NMFooter from 'components/nmfooter'
import SideBar from 'components/SideBar'

// import CommenmtsIcon from '@material-ui/icons/chatBubbleOutline'

import classNames from 'classnames'
import { containerBreakpoint } from 'consts/layout'
import content from 'controllers/content'
import Container from '../components/Container'
import BoardLink from '../components/Link'
import groupIndex from './page/groupIndex'

const styles = theme =>
  createStyles({
    root: {
      marginTop: theme.spacing(16),
      marginBottom: theme.spacing(3),
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(3),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
      }
    },
    variantH5: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down('md')]: {
        marginTop: theme.spacing(15),
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        [theme.breakpoints.down('sm')]: {
          marginTop: theme.spacing(3),
          marginLeft: theme.spacing(1),
          marginRight: theme.spacing(1)
        }
      }
    },
    images: {
      paddingTop: '5px',
      paddingBottom: '5px'
    },
    image: {
      padding: theme.spacing(1)
    },
    underLineRemove: {
      textDecoration: 'none'
    },
    upDataTitle: {
      fontWeight: 700,
      color: '#88c'
    },
    upDataPadding: {
      paddingTop: '2px'
    },
    avatar: {
      width: '44px',
      height: '44px',
      position: 'absolute',
      textAlign: 'center'
    },
    newPosts: {
      paddingTop: theme.spacing(1),
      marginBottom: theme.spacing(6),
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        marginBottom: theme.spacing(3)
      }
    },
    newPost: {
      borderBottom: '1px',
      paddingTop: theme.spacing(2),
      marginBottom: theme.spacing(3),
      wordBreak: 'break-all',
      fontSize: '13px'
    },
    alias: {
      color: '#568'
    },
    paler: {
      color: '#AAA',
      padding: '3px'
    },
    newsParentTitle: {
      fontWeight: 700,
      color: '#0B615E'
    },
    nickname: {
      color: '#45A',
      fontWeight: 700,
      cursor: 'pointer',
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        paddingTop: '4px',
        marginRight: theme.spacing(2)
      }
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
    upLoaderAndDate: {
      textAlign: 'end',
      paddingTop: '5px',
      paddingRight: theme.spacing(2)
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
    invisible: {
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        display: 'none'
      }
    },
    imgInvisible: {
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    show: {
      [theme.breakpoints.up('md')]: {
        display: 'none'
      }
    },
    titleAndContent: {
      [theme.breakpoints.down('sm')]: {
        paddingLeft: '18px'
      }
    },
    webTag: {
      [theme.breakpoints.up('sm')]: {
        fontSize: '13px'
      }
    },
    mobileTag: {
      [theme.breakpoints.down('sm')]: {
        fontSize: '12px'
      }
    },
    nicknamePadding: {
      paddingRight: '3px'
    },
    IconFlexEnd: {
      flex: 1,
      display: 'flex',
      justifyContent: 'flex-end',
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        paddingTop: '2px'
      }
    },
    paddingLeft: {
      paddingLeft: theme.spacing(3)
    }
  })

interface PageProps extends WithStyles<typeof styles> {
  posts?: Array<Model.Post>
  board?: Model.Board
  group?: Model.Group
  post: Model.Post
}

class Page extends React.Component<PageProps> {
  static async getInitialProps (ctx) {
    const groupId = Number(GroupId['GROUP/1'])
    // const groupId =
    const offset = 0
    const limit = 40
    const { group, posts } = await groupController.retrieve(
      // const { group, posts } = await homeController.retrieve(
      groupId,
      { offset, limit },
      { ctx }
    )

    return {
      group,
      posts
    }
  }

  constructor (props) {
    super(props)
    this.state = {
      randomIndex: 0
    }
    this.increment = this.increment.bind(this)
  }

  increment = () => {
    this.setState({
      randomIndex: Math.floor(Math.random() * 6)
    })
  }

  handlePostClick = postId => e => {
    e.preventDefault()
    e.stopPropagation()
    Router.pushRoute(`/post/${postId}`)
  }

  render () {
    //   if (!this.props.post || !this.props.posts) {
    //     return null
    //   }

    const { classes, board, group, posts, post } = this.props
    const title = `Next Medicine 4`

    const NMBattle = [
      { id: 1, tag: '수련과정', question: `"수련 과정이 더 편한 과는?"` },
      {
        id: 2,
        tag: '전문성',
        question: `"타 과의 침범을 받지 않는 전문성이 더 있는 과는?"`
      },
      { id: 3, tag: '수입', question: `"더 높은 수입을 기대할 수 있는 과는?"` },
      { id: 4, tag: '삶의질', question: `"수련 후 QOL이 더 좋은 과는?"` },
      {
        id: 5,
        tag: '취직용이',
        question: `"수련 후 자리를 잡기 더 유리한 과는?"`
      },
      {
        id: 6,
        tag: '인기도',
        question: `"자유롭게 선택할 기회가 있다면 선호하는 과는?"`
      }
    ]

    const NMB = NMBattle[this.state.randomIndex]

    return (
      <>
        <NextSeo
          config={{
            title
          }}
        />
        <NMAppBar />
        <Container className={classes.root} width='large'>
          <Grid container>
            <Grid item xs={2} className={classes.invisible}>
              <SideBar />
            </Grid>
            <Grid item xs={1} className={classes.invisible} />
            <Grid item xs={12} md={9}>
              <Grid
                item
                container
                component='main'
                className={classes.marginBottom}
              >
                <Grid item xs={12} key={NMB.id}>
                  <Typography variant='h5' className={classes.variantH5}>
                    넥메 과 배틀!
                    <Divider />
                  </Typography>
                </Grid>
                <Grid container className={classes.paddingLeft}>
                  <Grid item xs={12}>
                    <Typography variant='body2'>
                      {/* <b>[취직용이]</b>" 수련 후 자리를 잡기 더 유리한 과는?" */}
                      <b>[{NMB.tag}]</b> {NMB.question}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} className={classes.images}>
                    <img
                      src='static/nm/NMBattle/피부과.gif'
                      ait='피부과'
                      className={classes.image}
                    />
                    <img
                      src='static/nm/NMBattle/가정의학과.gif'
                      ait='가정의학과'
                      className={classes.image}
                    />
                  </Grid>
                  <Typography variant='body2'>배틀 결과 보기</Typography>
                </Grid>
              </Grid>

              <Grid container className={classes.marginBottom}>
                <Grid item xs={12}>
                  <Typography variant='h5' className={classes.variantH5}>
                    최근 업데이트
                    <Divider />
                  </Typography>
                </Grid>
                <Divider />
                <Grid container className={classes.paddingLeft}>
                  <Grid item xs={12}>
                    <Grid
                      item
                      container
                      xs={12}
                      className={classes.marginBottom}
                    >
                      <Link
                        href='/post'
                        className={classes.underLineRemove}
                        color='inherit'
                      >
                        <Typography className={classes.upDataTitle}>
                          비공감 기능 추가
                        </Typography>
                      </Link>
                      <Typography
                        variant='body2'
                        className={classes.upDataPadding}
                      >
                        비공감은 나와 생각이 다른 글, 신고는 표현이 틀린 글!
                      </Typography>
                    </Grid>
                    <Grid item container xs={12}>
                      <Link
                        href='/post'
                        className={classes.underLineRemove}
                        color='inherit'
                      >
                        <Typography className={classes.upDataTitle}>
                          설문 기능 추가
                        </Typography>
                      </Link>
                      <Typography
                        variant='body2'
                        className={classes.upDataPadding}
                      >
                        댓글을 달지 않는 분들의 의견을 수렴해보아요
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>

              <Grid container className={classes.marginBottom}>
                <Grid item xs={12}>
                  <Typography variant='h5' className={classes.variantH5}>
                    넥메 최신글
                    <Divider />
                  </Typography>
                </Grid>

                {posts.map((post, index) => (
                  <Grid
                    item
                    container
                    xs={12}
                    className={classes.newPosts}
                    key={index}
                  >
                    <Grid item container xs={12} md={9}>
                      <Grid item xs={2} md={2} className={classes.paperPadding}>
                        <Box className={classes.boxInTag}>
                          <Typography
                            variant='subtitle1'
                            className={classNames(
                              classes.webTag,
                              classes.mobileTag
                            )}
                          >
                            <Link
                              href='/board/:boradId'
                              color='inherit'
                              underline='none'
                            >
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
                            <BoardLink
                              underline='none'
                              href={`/${group.id}/${post.id}`}
                            >
                              <Typography
                                onClick={this.handlePostClick(post.id)}
                                variant='subtitle1'
                                className={classNames(
                                  classes.newsParentTitle,
                                  classes.postSubject
                                )}
                              >
                                {post.subject}
                              </Typography>
                            </BoardLink>
                          </Grid>
                          <Grid item xs={1} className={classes.IconFlexEnd}>
                            <ChatBubbleIcon />
                          </Grid>
                          <Grid item xs={1} className={classes.commentsCount}>
                            <Typography variant='body2'>
                              {post.commentCount}
                            </Typography>
                          </Grid>
                        </Grid>
                        <Grid item xs={12} className={classes.invisible}>
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
                        </Grid>
                        <Grid item container xs={12} className={classes.show}>
                          <span className={classes.nicknamePadding}>
                            <Typography
                              variant='body2'
                              className={classNames(
                                classes.alias,
                                classes.nickname
                              )}
                            >
                              {post.user.nickname}
                            </Typography>
                          </span>
                          <span>
                            <Typography
                              variant='body2'
                              className={classes.paler}
                            >
                              {moment(post.createdAt)
                                .locale('ko')
                                .format('YYYY. MM. DD.')}
                            </Typography>
                          </span>
                        </Grid>
                      </Grid>
                    </Grid>
                    <Grid
                      item
                      container
                      xs={3}
                      className={classNames(
                        classes.imgInvisible,
                        classes.upLoaderInfo
                      )}
                    >
                      <Grid item xs={10} className={classes.upLoaderAndDate}>
                        <Typography
                          variant='body2'
                          className={classNames(
                            classes.alias,
                            classes.nickname
                          )}
                        >
                          {post.user.nickname}
                        </Typography>
                        <Typography variant='body2' className={classes.paler}>
                          {moment(post.createdAt)
                            .locale('ko')
                            .format('YYYY. MM. DD.')}
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
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <NMFooter />
      </>
    )
  }
}

export default withStyles(styles)(Page)

console.log(content)
