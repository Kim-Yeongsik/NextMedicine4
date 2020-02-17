import { inject, observer } from 'mobx-react'
import React from 'react'
import { Store } from 'stores'

import {
  Button,
  createStyles,
  Grid,
  InputAdornment,
  Link,
  TextField,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'

import { Form } from 'lib/mobx-react-form'

const styles = theme =>
  createStyles({
    root: {
      marginTop: theme.spacing(3),
      marginLeft: theme.spacing(1),
      marginRight: theme.spacing(1)
    },
    check: {
      paddingTop: '6px'
    },
    guideLineMargin: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(4)
    },
    guideLine: {
      fontWeight: 600
    }
  })

interface PageProps extends WithStyles<typeof styles> {
  onSubmit?: Function
  post?: Model.Post
  accessPermission?: boolean
}

@inject((allStores: any) => ({
  store: allStores.store as Store
}))
@observer
class Page extends React.Component<PageProps & { store?: Store }> {
  form

  constructor (props) {
    super(props)
    const fields = [
      {
        name: 'comment',
        label: '댓글 작성',
        rules: 'string|min:1',
        bindings: 'TextField'
      }
    ]

    const hooks = {
      async onSuccess (form) {
        props.onSubmit(form)
        form.clear()
      }
    }
    this.form = new Form({ fields }, { hooks })
  }

  render () {
    const { classes, accessPermission } = this.props
    const form = this.form

    return (
      <>
        <Grid item className={classes.root}>
          <form onSubmit={form.onSubmit}>
            <TextField
              // disabled={!accessPermission}
              multiline={true}
              rows='2'
              rowsMax='4'
              fullWidth
              margin='normal'
              variant='outlined'
              onKeyPress={e =>
                e.ctrlKey && e.key === 'Enter' && form.onSubmit(e)
              }
              {...form.$('comment').bind()}
              // label={
              //   !accessPermission ? '로그인 후 작성할 수 있어요' : '댓글 작성'
              // }
              InputProps={{
                endAdornment: (
                  <InputAdornment position='end'>
                    <Button
                      // disabled={!accessPermission}
                      color='primary'
                      variant='contained'
                      onClick={form.onSubmit}
                    >
                      작성
                    </Button>
                  </InputAdornment>
                )
              }}
            />
            <Grid item>
              <Grid item xs={9}>
                <Typography variant='subtitle2' className={classes.check}>
                  <input
                    type='checkbox'
                    name='isAlias'
                    value='1'
                    id='isAlias'
                  />
                  익명글 (글 수정 및 삭제 불가)
                </Typography>
              </Grid>
            </Grid>
            <Typography variant='subtitle2' className={classes.guideLineMargin}>
              <span>
                <Link
                  href='/guideline'
                  target='blank'
                  className={classes.guideLine}
                >
                  게시판 이용 지침
                </Link>
              </span>
              <span>의 내용을 준수해 주세요.</span>
            </Typography>
          </form>
        </Grid>
      </>
    )
  }
}

export default withStyles(styles)(Page)
