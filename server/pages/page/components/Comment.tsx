import { observer } from 'mobx-react'
import * as moment from 'moment'
import React from 'react'

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
  withStyles,
  WithStyles
} from '@material-ui/core'

import postController from 'controllers/post'
import { Router } from 'server/routes'

const styles = theme =>
  createStyles({
    root: {
      padding: theme.spacing(3, 0)
    },
    user: {
      marginBottom: theme.spacing(2)
    },
    content: {
      whiteSpace: 'pre-wrap',
      flex: 1,
      alignSelf: 'center'
    },
    avatar: {
      width: '44px',
      height: '44px',
      position: 'absolute',
      marginTop: '5px',
      textAlign: 'center'
    },
    comment: {
      marginLeft: theme.spacing(8),
      position: 'relative'
    },
    commentUserName: {
      fontSize: '18px'
    },
    commentPadding: {
      paddingTop: '3px',
      paddingBottom: '3px'
    },
    commentDate: {
      color: '#A4A4A4'
    },
    IconRight: {
      paddingLeft: '40%'
    },
    dividerMargin: {
      marginTop: theme.spacing(1),
      marginBottom: theme.spacing(1)
    }
  })

interface PageProps extends WithStyles<typeof styles> {
  urlPrefix?: any
  post: Model.Post
  accessPermission?: boolean
}

@observer
class Page extends React.Component<PageProps> {
  state = {
    anchorEl: null
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  handleDeleteClick = async e => {
    e.preventDefault()
    e.stopPropagation()
    if (!confirm('정말 삭제하시겠습니까?\n삭제 후 복구할 수 없습니다.')) return

    if (await postController.destroy(this.props.post.id, { useAlert: true })) {
      Router.pushRoute(`${this.props.urlPrefix}/${this.props.post.id}`)
    }
  }

  render () {
    const { classes, post, accessPermission } = this.props
    const { anchorEl } = this.state
    const { content, createdAt, user } = post

    return (
      <Grid container>
        <Grid item xs={10} sm={11} className={classes.commentPadding}>
          <Avatar className={classes.avatar} src='static/nm/unknown.jpg' />
          <Box className={classes.comment}>
            <Box className={classes.commentUserName}>
              <Typography variant='subtitle1'>{user.name}</Typography>
            </Box>
            <Typography variant='subtitle2' className={classes.commentPadding}>
              {content}
            </Typography>
            <Box>
              <span className={classes.commentDate}>
                {moment(createdAt)
                  .locale('ko')
                  .format('YYYY. MM. DD')}
              </span>
            </Box>
          </Box>
        </Grid>
        <Grid item xs={2} sm={1}>
          <span className={classes.IconRight}>
            <IconButton
              aria-owns={anchorEl ? 'simple-menu' : undefined}
              aria-haspopup='true'
              onClick={this.handleClick}
            >
              <Icon fontSize='small'>more_vert</Icon>
            </IconButton>
          </span>
          <Menu
            id='simple-menu'
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={this.handleClose}
          >
            <MenuItem onClick={this.handleClose}>신고</MenuItem>
            <MenuItem
              disabled={!accessPermission}
              onClick={this.handleDeleteClick}
            >
              삭제
            </MenuItem>
          </Menu>
        </Grid>
        <Grid item xs={12}>
          <Divider className={classes.dividerMargin} />
        </Grid>
      </Grid>
    )
  }
}
export default withStyles(styles)(Page)
