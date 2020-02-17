import { createStyles, Grid, WithStyles, withStyles } from '@material-ui/core'
import React from 'react'

import { inject, observer } from 'mobx-react'
import { Store } from 'stores'

import { withLayout } from './layout'

import BoardId from 'consts/board'
import boardController from 'controllers/board'

import BoardPostList from './components/boardPostList'
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
  board: Model.Board
  limit: number
  page: number
  boardPosts: Array<Model.Post>
  isAdmin: boolean
}

@inject((allStores: any) => ({
  store: allStores.store as Store
}))
@observer
class Page extends React.Component<PageProps & { store?: Store }> {
  static async getInitialProps (ctx) {
    // const boardId = 1
    // const boardId = Number(ctx.query.boardId || 1)
    // const boardId = Number(ctx.query.boardId || BoardId.map.length)
    // const boardId = Number(ctx.query.boardId || BoardId.map || Number)
    // const boardId = ctx.query.boardId || BoardIndex.length
    // const boardId = BoardIndex.length
    // const boardId = Number(ctx.query.boardId || BoardId[Map.length] || 1)

    // const boardId = Number(
    //   BoardId.map(function (id) {
    //     return id
    //   })
    // )

    // const boardId =
    //   ctx.query.boardId ||
    //   Number(
    //     BoardId.map(function (id) {
    //       return id
    //     })
    //   )

    // const boardId = Number(ctx.query.boardId || BoardId[Map.length])

    const boardId = Number(ctx.query.boardId || 1)

    const page = Number(ctx.query.page || 1)
    const limit = 20
    const offset = (page - 1) * limit

    const { board, boardPosts } = await boardController.retrieve(
      boardId,
      { offset, limit },
      { ctx }
    )

    return {
      board,
      limit,
      page,
      boardPosts
    }
  }

  render () {
    const { board, boardPosts, page, limit } = this.props

    return (
      <>
        <Grid container>
          <BoardPostList
            board={board}
            boardPosts={boardPosts}
            page={page}
            limit={limit}
            urlPrefix={'/board/' + board.id}
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

const BoardIndex = layout => withLayout(layout)(withStyles(styles)(Page))

export const getBoard = layout => ({
  BoardIndex: BoardIndex(layout),
  Edit: Edit(layout),
  New: New(layout),
  Read: Read(layout)
})

export default {
  BoardIndex,
  Edit,
  New,
  Read,
  getBoard
}
