import {
  Box,
  createStyles,
  Divider,
  Grid,
  List,
  ListItem,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'

import { observer } from 'mobx-react'
import React from 'react'
import { Router } from 'server/routes'

import { containerBreakpoint } from 'consts/layout'

const styles = theme =>
  createStyles({
    invisible: {
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        display: 'none'
      }
    },
    show: {
      display: 'none',
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        position: 'relative',
        display: 'table',
        width: '100%'
      }
    },
    null: {
      display: 'null'
    },
    mobileBoard: {
      width: '100%'
    },
    mobilePost: {
      width: '92%'
    },
    mobileCommentsCount: {
      width: '8%',
      textAlign: 'center'
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
    table: {
      borderCollapse: 'collapse',
      tableLayout: 'fixed',
      display: 'table',
      borderColor: 'grey',
      marginTop: theme.spacing(1)
    },
    boardTop: {
      textAlign: 'center',
      fontWeight: 700,
      backgroundColor: '#ddd'
    },
    titleTag: {
      paddingBottom: '0.2em',
      width: '60%'
    },
    textCellUserName: {
      textAlign: 'center',
      paddingTop: '4px',
      paddingBottom: '4px',
      width: '20%'
    },
    textCell: {
      textAlign: 'center',
      paddingTop: '4px',
      paddingBottom: '4px',
      width: '10%'
    },
    small: {
      fontSize: '90%'
    },
    mobileSmall: {
      fontSize: '70%'
    },
    nickname: {
      color: '#45a',
      fontWeight: 700,
      cursor: 'pointer'
    },
    pale: {
      color: '#777',
      paddingLeft: '2px'
    },
    commentCount: {
      paddingLeft: theme.spacing(1)
    },
    alias: {
      color: '#568',
      fontSize: '95%'
    }
  })

const StyledList = withStyles({
  root: {
    paddingTop: 0,
    paddingBottom: 0
  }
})(List)

interface PageProps extends WithStyles<typeof styles> {
  post: Model.Post
}

@observer
class Post extends React.Component<PageProps> {
  handlePostClick = postId => e => {
    e.preventDefault()
    e.stopPropagation()
    Router.pushRoute(`/post/${postId}`)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  render () {
    const { classes, post } = this.props

    return (
      <Grid container>
        <Grid item container className={classes.invisible}>
          <Grid item xs={12}>
            <Table className={classes.table} padding='none'>
              <TableBody>
                <TableRow>
                  <TableCell className={classes.titleTag} padding='none'>
                    <Typography
                      onClick={this.handlePostClick(post.id)}
                      variant='subtitle2'
                    >
                      <b className={classes.pale}>[{post.board.name}]</b>{' '}
                      {post.subject}
                      <span className={classes.commentCount}>
                        ({post.commentCount})
                      </span>
                    </Typography>
                  </TableCell>
                  <TableCell className={classes.textCellUserName}>
                    <Typography variant='subtitle2' className={classes.alias}>
                      {post.user.nickname}
                    </Typography>
                  </TableCell>
                  <TableCell className={classes.textCell} padding='none'>
                    <Typography variant='subtitle2'>
                      {post.likeCount}-{post.dislikeCount}
                    </Typography>
                  </TableCell>
                  <TableCell className={classes.textCell} padding='none'>
                    <Typography variant='subtitle2'>
                      {new Date(post.createdAt).toISOString().slice(0, 10)}
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Grid>
        </Grid>
        <Grid item container className={classes.show}>
          <Grid item xs={12}>
            <StyledList className={classes.mobileBoard}>
              <ListItem>
                <span className={classes.mobilePost}>
                  <Grid item xs={12}>
                    <Typography variant='body1'>
                      <b>[{post.board.name}]</b> {post.subject}
                      <span className={classes.pale} />
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography variant='body2'>
                      <span className={classes.alias}>
                        {post.user.nickname}
                      </span>
                      <b className={classes.ginfo}>
                        {post.likeCount}-{post.dislikeCount}
                      </b>
                      <b className={classes.uploadTime}>
                        {new Date(post.createdAt).toISOString().slice(0, 10)}
                      </b>
                    </Typography>
                  </Grid>
                </span>
                <span className={classes.mobileCommentsCount}>
                  <Typography variant='body1'>{post.commentCount}</Typography>
                  <Typography variant='body1' className={classes.mobileSmall}>
                    댓글
                  </Typography>
                </span>
              </ListItem>
              <Divider />
            </StyledList>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default withStyles(styles)(Post)
