import {
  Box,
  createStyles,
  IconButton,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'
import { Router } from 'server/routes'

import classNames from 'classnames'

import FirstPageIcon from '@material-ui/icons/FirstPage'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import LastPageIcon from '@material-ui/icons/LastPage'

const styles = theme =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center'
    },
    button: {
      width: 30
    },
    numButton: {
      width: 46
    }
  })

interface PageProps extends WithStyles<typeof styles> {
  current?: number
  total?: number
  limit?: number
  href?: string
}

class Pagination extends React.Component<PageProps> {
  handlePageClick = pageNum => () => {
    Router.pushRoute(this.props.href + '?page=' + pageNum).then(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    })
  }

  render () {
    const { classes, current, total, limit } = this.props
    const first = 1
    const last = Math.ceil(total / limit)
    const pPrev = current - 2 < 1 ? null : current - 2
    const prev = current - 1 < 1 ? null : current - 1
    const next = current + 1 > last ? null : current + 1
    const nNext = current + 2 > last ? null : current + 2

    return (
      <Box className={classes.root}>
        <Box>
          <IconButton
            size='small'
            disabled={current === first}
            aria-label='First Page'
            onClick={this.handlePageClick(first)}
          >
            <FirstPageIcon />
          </IconButton>
        </Box>
        <Box>
          <IconButton
            size='small'
            disabled={current === first}
            aria-label='Previous Page'
            onClick={this.handlePageClick(Math.max(current - 3, first))}
          >
            <KeyboardArrowLeft />
          </IconButton>
        </Box>
        {pPrev && (
          <IconButton
            onClick={this.handlePageClick(pPrev)}
            className={classes.numButton}
            size='small'
          >
            {pPrev}
          </IconButton>
        )}
        {prev && (
          <IconButton
            onClick={this.handlePageClick(prev)}
            className={classes.numButton}
            size='small'
          >
            {prev}
          </IconButton>
        )}
        {current && (
          <IconButton
            className={classNames(classes.numButton)}
            onClick={this.handlePageClick(current)}
            color='primary'
            size='small'
          >
            {current}
          </IconButton>
        )}
        {next && (
          <IconButton
            onClick={this.handlePageClick(next)}
            className={classes.numButton}
            disabled={current === last}
            size='small'
          >
            {next}
          </IconButton>
        )}
        {nNext && (
          <IconButton
            onClick={this.handlePageClick(nNext)}
            className={classes.numButton}
            disabled={current === last}
            size='small'
          >
            {nNext}
          </IconButton>
        )}
        <Box>
          <IconButton
            disabled={current === last}
            size='small'
            aria-label='Next Page'
            onClick={this.handlePageClick(Math.min(current + 3, last))}
          >
            <KeyboardArrowRight />
          </IconButton>
        </Box>
        <Box>
          <IconButton
            disabled={current === last}
            size='small'
            aria-label='Last Page'
            onClick={this.handlePageClick(last)}
          >
            <LastPageIcon />
          </IconButton>
        </Box>
      </Box>
    )
  }
}

export default withStyles(styles)(Pagination)
