import { createStyles, Grid, WithStyles, withStyles } from '@material-ui/core'
import React from 'react'

import { inject, observer } from 'mobx-react'
import { Store } from 'stores'

import { withLayout } from './layout'

import GroupId from 'consts/group'
import groupController from 'controllers/group'

import GroupPostList from './components/groupPostList'
import SearchBar from './searchBar'

import { containerBreakpoint } from 'consts/layout'

const styles = theme =>
  createStyles({
    root: {
      fontSize: '14px',
      marginTop: theme.spacing(13),
      marginBottom: theme.spacing(3),
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        marginTop: '6px',
        fontSize: '15px'
      }
    }
  })

interface PageProps extends WithStyles<typeof styles> {
  group: Model.Group
  post: Model.Post
  limit: number
  page: number
  groupPosts: Array<Model.Post>
  isAdmin: boolean
}

@inject((allStores: any) => ({
  store: allStores.store as Store
}))
@observer
class Page extends React.Component<PageProps & { store?: Store }> {
  static async getInitialProps (ctx) {
    // const groupName = ctx.asPath
    //   .split('/')[1]
    //   .split('?')[0]
    //   .toUpperCase()

    // const groupId = Number(ctx.query.groupId || GroupId[groupName] || 1)
    // const groupId = Number(ctx.query.groupId || 1)
    const groupId = 1

    const page = Number(ctx.query.page || 1)
    const limit = 20
    const offset = (page - 1) * limit
    const { group, groupPosts } = await groupController.retrieve(
      groupId,
      { offset, limit },
      { ctx }
    )

    return {
      group,
      limit,
      page,
      groupPosts
    }
  }

  render () {
    const { group, groupPosts, page, limit } = this.props

    return (
      <>
        <Grid container>
          <GroupPostList
            group={group}
            groupPosts={groupPosts}
            page={page}
            limit={limit}
            urlPrefix={'/group/' + group.id}
          />
          <SearchBar />
        </Grid>
      </>
    )
  }
}

import { Edit } from './edit'
import { New } from './new'
import { Read } from './read'

const GroupIndex = layout => withLayout(layout)(withStyles(styles)(Page))

export const getGroup = layout => ({
  GroupIndex: GroupIndex(layout),
  Edit: Edit(layout),
  New: New(layout),
  Read: Read(layout)
})

export default {
  GroupIndex,
  Edit,
  New,
  Read,
  getGroup
}
