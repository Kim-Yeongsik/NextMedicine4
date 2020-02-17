import { Typography } from '@material-ui/core'
import MarkdownJsx from 'markdown-to-jsx'
import React from 'react'

const options = {
  overrides: {
    h1: {
      component: props => (
        <Typography
          paragraph
          style={{ fontWeight: 'bold' }}
          variant='h5'
          {...props}
        />
      )
    },
    h2: {
      component: props => (
        <Typography
          paragraph
          style={{ fontWeight: 'bold' }}
          variant='h6'
          {...props}
        />
      )
    },
    h3: {
      component: props => (
        <Typography
          paragraph
          style={{ fontWeight: 'bold' }}
          variant='subtitle1'
          {...props}
        />
      )
    },
    h4: {
      component: props => (
        <Typography
          paragraph
          style={{ fontWeight: 'bold' }}
          variant='caption'
          {...props}
        />
      )
    },
    p: {
      component: props => <Typography paragraph variant='body1' {...props} />
    },
    li: {
      component: props => (
        <li>
          <Typography component='span' variant='body1' {...props} />
        </li>
      )
    }
  }
}

class Markdown extends React.Component {
  render () {
    return <MarkdownJsx options={options} {...this.props} />
  }
}

export default Markdown
