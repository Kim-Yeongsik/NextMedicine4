import { createMuiTheme } from '@material-ui/core'
import * as colors from '@material-ui/core/colors'

// A theme with custom primary and secondary color.
// It's optional.
const theme = createMuiTheme({
  overrides: {
    MuiButton: {
      containedPrimary: {
        color: 'white'
      }
    },
    MuiTypography: {
      h5: {
        fontSize: 22,
        fontWeight: 700
      },
      subtitle1: {
        fontSize: 15,
        fontWeight: 600
      }
    }
  },
  palette: {
    primary: colors.blueGrey
  },
  typography: {
    fontFamily: 'sans-serif',
    fontSize: 14
  }
})

export default theme
