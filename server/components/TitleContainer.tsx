import {
  createStyles,
  Grid,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'

import { appMinWidth, containerBreakpoint } from 'consts/layout'

const styles = theme =>
  createStyles({
    titleImage: {
      width: '100%',
      minWidth: appMinWidth,
      height: '400px',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundSize: 'cover',
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        height: '200px'
      }
    },
    maskLayer: {
      width: '100%',
      height: 'inherit',
      margin: 0,
      backgroundColor: 'rgba(255, 255, 255, 0.7)'
    }
  })

interface ContainerOwnProps extends WithStyles<typeof styles> {
  title?: string
  subTitle?: string
  backgroundUrl?: string
  spacing?: 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
}
type ContainerProps = React.HTMLAttributes<HTMLDivElement> & ContainerOwnProps

class Container extends React.Component<ContainerProps> {
  static defaultProps = {
    backgroundUrl: null,
    spacing: 2
  }

  render () {
    const { classes, backgroundUrl, title, subTitle, spacing } = this.props

    return (
      <div
        className={classes.titleImage}
        style={
          backgroundUrl && {
            backgroundImage: `url(${backgroundUrl})`
          }
        }
      >
        <Grid
          className={classes.maskLayer}
          container
          direction='column'
          justify='center'
          spacing={spacing}
        >
          <Grid item>
            <Typography variant='h3' align='center'>
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <Typography variant='h6' align='center'>
              {subTitle}
            </Typography>
          </Grid>
        </Grid>
      </div>
    )
  }
}

export default withStyles(styles)(Container)
