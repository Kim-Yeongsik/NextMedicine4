import {
  Avatar,
  Box,
  Button,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  Grid,
  IconButton,
  Slide,
  TextField,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import NextSeo from 'next-seo'
import React from 'react'

import Container from 'components/Container'
import NMAppBar from 'components/nmAppBar'
import NMFooter from 'components/nmfooter'
import SideBar from 'components/SideBar'

import UserInfoAppBar from './userInfoAppBar'

import CameraButton from '@material-ui/icons/cameraAlt'
import ChevronRightIcon from '@material-ui/icons/chevronRight'
import ClearIcon from '@material-ui/icons/clear'
import EditIcon from '@material-ui/icons/edit'
import EmailIcon from '@material-ui/icons/emailOutlined'
import LoopIcon from '@material-ui/icons/loop'
import MentIcon from '@material-ui/icons/modeCommentOutlined'
import PersonAddIcon from '@material-ui/icons/personAddOutlined'
import PersonIcon from '@material-ui/icons/personOutlined'

import classNames from 'classnames'
import { containerBreakpoint } from 'consts/layout'

const styles = theme =>
  createStyles({
    root: {
      marginTop: theme.spacing(7),
      marginBottom: theme.spacing(2),
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        marginTop: theme.spacing(2)
      }
    },
    mobilePadding: {
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
      }
    },
    imgBox: {
      position: 'relative',
      marginLeft: 'auto',
      marginRight: 'auto'
    },
    profileImg: {
      width: '100px',
      height: '100px',
      marginTop: ''
    },
    profilePadding: {
      marginBottom: theme.spacing(2)
    },
    userID: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(1)
    },
    textField: {
      width: '100%',
      alignItems: ''
    },
    input: {
      display: 'none'
    },
    ClearButton: {
      right: theme.spacing(3)
    },
    Folded: {
      [theme.breakpoints.up('sm')]: {
        display: 'none'
      }
    },
    itemIcon: {
      position: 'absolute',
      left: theme.spacing(8),
      bottom: '5px',
      padding: '1px',
      backgroundColor: theme.palette.primary.main,
      borderRadius: '50%',
      textAlign: 'center',
      color: '#ffffff'
    },
    CameraButtonCSS: {
      marginTop: '7px'
    },
    idPadding: {
      paddingTop: '6px',
      paddingLeft: theme.spacing(1)
    },
    idEditIcon: {
      paddingTop: '4px',
      marginLeft: theme.spacing(3)
    },
    justifyContentCenter: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center'
    },
    heightMarginTop: {
      marginTop: theme.spacing(5),
      [theme.breakpoints.down('sm')]: {
        marginTop: theme.spacing(2)
      }
    },
    mobileFontSize: {
      paddingTop: '4px',
      [theme.breakpoints.down('sm')]: {
        paddingTop: theme.spacing(1),
        fontSize: '15px'
      }
    },
    namePadding: {
      paddingTop: '7px'
    },
    mentMargin: {
      marginTop: '10px'
    },
    dialogMarginTop: {
      marginTop: theme.spacing(2)
    },
    passWordMargin: {
      marginTop: theme.spacing(3)
    },
    invisible: {
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        display: 'none'
      }
    }
  })

const StyledIconButton = withStyles({
  root: {
    padding: 0
  }
})(IconButton)

const StyledButton = withStyles({
  root: {
    padding: 0
  }
})(Button)

type PageProps = WithStyles<typeof styles>

const Transition = React.forwardRef(function Transition (props, ref) {
  return <Slide direction='up' ref={ref} {...props} />
})
class Page extends React.Component<PageProps> {
  state = {
    PassWordEditOpen: false,
    NameText: '',
    BirthdayText: '',
    HPNumberText: '',
    EmailText: '',
    PenNameText: '',
    AliasText: '',
    MentText: '',
    PassWordText: '',
    NewPassWordText: '',
    CheckNewPassWordText: '',
    Top: false,
    open: false,
    EditOpen: false,
    PenNameOpen: false,
    MentOpen: false
  }

  PassWordEditClose = () => {
    this.setState({ PassWordEditOpen: false })
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    })
  }

  NameClear = () => {
    this.setState({
      NameText: ''
    })
  }

  BirthdayClear = () => {
    this.setState({
      BirthdayText: ''
    })
  }

  HPNumberClear = () => {
    this.setState({
      HPNumberText: ''
    })
  }

  EmailClear = () => {
    this.setState({
      EmailText: ''
    })
  }

  PenNameClear = () => {
    this.setState({
      PenNameText: ''
    })
  }

  AliasClear = () => {
    this.setState({
      AliasText: ''
    })
  }

  MentClear = () => {
    this.setState({
      MentText: ''
    })
  }

  PassWordClear = () => {
    this.setState({
      PassWordText: ''
    })
  }
  NewPassWordClear = () => {
    this.setState({
      NewPassWordText: ''
    })
  }

  CheckNewPassWordClear = () => {
    this.setState({
      CheckNewPassWordText: ''
    })
  }

  handleClickOpen = open => {
    this.setState({ open: true })
  }

  handleClose = open => {
    this.setState({ open: false })
  }

  handleClickEditOpen = EditOpen => {
    this.setState({ EditOpen: true })
  }

  handleEditClose = EditOpen => {
    this.setState({ EditOpen: false })
  }

  handleClickPenNameOpen = PenNameOpen => {
    this.setState({ PenNameOpen: true })
  }

  handlePenNameClose = PenNameOpen => {
    this.setState({ PenNameOpen: false })
  }

  handleClickMentOpen = MentOpen => {
    this.setState({ MentOpen: true })
  }

  handleMentClose = MentOpen => {
    this.setState({ MentOpen: false })
  }

  render () {
    const { classes } = this.props
    const title = `Next Medicine 4`

    const toggleDrawer = (side, open) => event => {
      if (
        event.type === 'keydown' &&
        (event.key === 'Tab' || event.key === 'Shift')
      ) {
        return
      }
      this.setState({ ...this.state, [side]: open })
    }

    return (
      <>
        <NextSeo
          config={{
            title
          }}
        />
        <NMAppBar />
        <Container id='body' className={classes.root} width='large'>
          <Grid container>
            <Grid item xs={2} className={classes.invisible}>
              <SideBar />
            </Grid>
            <Grid item xs={1} className={classes.invisible} />
            <Grid item xs={12} md={9}>
              <UserInfoAppBar />
              <Grid container className={classes.mobilePadding}>
                <Grid item container xs={12} className={classes.profilePadding}>
                  <Box className={classes.imgBox}>
                    <Avatar
                      id='profileImage'
                      src='static/nm/unknown.jpg'
                      className={classes.profileImg}
                    />
                    <Fab
                      size='small'
                      aria-label='Upload picture'
                      component='span'
                      className={classes.itemIcon}
                    >
                      <input
                        accept='image/*'
                        className={classes.input}
                        id='icon-button-file'
                        type='file'
                      />
                      <label htmlFor='icon-button-file'>
                        <CameraButton className={classes.CameraButtonCSS} />
                      </label>
                    </Fab>
                  </Box>
                </Grid>

                <Grid item xs={12} className={classes.userID}>
                  <span>
                    <Typography variant='h5' className={classes.idPadding}>
                      넥메4 페이지 만드는 중{/* userId */}
                    </Typography>
                  </span>
                  <span className={classes.idEditIcon}>
                    <StyledIconButton onClick={this.handleClickPenNameOpen}>
                      <EditIcon style={{ fontSize: 35 }} />
                    </StyledIconButton>
                  </span>
                </Grid>

                <Grid item xs={12} />

                <Grid item xs={12} className={classes.userID}>
                  <span>
                    <Typography variant='h6' className={classes.idPadding}>
                      멀티 확장하는 해철의
                      {/* alias */}
                    </Typography>
                  </span>
                  <span className={classes.idEditIcon}>
                    <StyledIconButton onClick={this.handleClickOpen}>
                      <LoopIcon style={{ fontSize: 35 }} />
                    </StyledIconButton>
                  </span>
                </Grid>

                <Grid item xs={12} className={classes.heightMarginTop} />

                <Grid item container xs={12} className={classes.userID}>
                  <Grid
                    item
                    xs={2}
                    sm={4}
                    className={classes.justifyContentCenter}
                  >
                    <PersonIcon style={{ fontSize: 45 }} />
                  </Grid>
                  <Grid item container xs={10} sm={8}>
                    <Grid
                      item
                      xs={10}
                      sm={6}
                      className={classes.justifyContentCenter}
                    >
                      <Typography variant='h6' className={classes.namePadding}>
                        이름
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} className={classes.heightMarginTop} />

                <Grid item container xs={12} className={classes.userID}>
                  <Grid
                    item
                    xs={2}
                    sm={4}
                    className={classes.justifyContentCenter}
                  >
                    <EmailIcon style={{ fontSize: 45 }} />
                  </Grid>
                  <Grid item container xs={10} sm={8}>
                    <Grid
                      item
                      xs={10}
                      sm={6}
                      className={classes.justifyContentCenter}
                    >
                      <Typography
                        variant='h6'
                        className={classes.mobileFontSize}
                      >
                        ooooooo@limesociety.com
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>

                <Grid item xs={12} className={classes.heightMarginTop} />

                <Grid item container xs={12} className={classes.userID}>
                  <Grid
                    item
                    xs={2}
                    sm={4}
                    className={classes.justifyContentCenter}
                  >
                    <MentIcon style={{ fontSize: 45 }} />
                  </Grid>
                  <Grid item container xs={10} sm={8}>
                    <Grid item container xs={10} sm={6}>
                      <StyledButton
                        className={classes.justifyContentCenter}
                        onClick={this.handleClickMentOpen}
                      >
                        <Grid item xs={12}>
                          <Typography variant='h6'>소개글 수정</Typography>
                        </Grid>
                        <ChevronRightIcon />
                      </StyledButton>
                    </Grid>
                    <Grid item xs={2} />
                  </Grid>
                </Grid>

                <Grid item xs={12} />

                <Grid item xs={12} className={classes.justifyContentCenter}>
                  <Typography
                    variant='subtitle1'
                    className={classes.mentMargin}
                  >
                    본인 소개 글입니다.
                  </Typography>
                </Grid>

                <Grid item xs={12} className={classes.heightMarginTop} />

                <Grid item container xs={12} className={classes.userID}>
                  <Grid
                    item
                    xs={2}
                    sm={4}
                    className={classes.justifyContentCenter}
                  >
                    <PersonAddIcon style={{ fontSize: 45 }} />
                  </Grid>
                  <Grid item container xs={10} sm={8}>
                    <Grid item container xs={10} sm={6}>
                      <StyledButton
                        className={classes.justifyContentCenter}
                        onClick={this.handleClickEditOpen}
                        // onClick={toggleDrawer('Top', true)}
                      >
                        <Grid item xs={12}>
                          <Typography variant='h6'>회원정보 수정</Typography>
                        </Grid>
                        <ChevronRightIcon />
                      </StyledButton>
                    </Grid>
                    <Grid item xs={2} />
                  </Grid>
                </Grid>
              </Grid>

              <Dialog
                open={this.state.EditOpen}
                TransitionComponent={Transition}
              >
                <DialogTitle>{'회원정보 수정'}</DialogTitle>
                <DialogContent>
                  <Grid container>
                    <Grid
                      item
                      container
                      xs={12}
                      className={classes.dialogMarginTop}
                    >
                      <Grid item xs={12}>
                        <Typography variant='subtitle1'>이메일</Typography>
                      </Grid>

                      <Grid item xs={11} sm={12}>
                        <TextField
                          value={this.state.EmailText}
                          onChange={e => {
                            this.setState({ EmailText: e.target.value })
                          }}
                          id='standard-dense'
                          className={classes.textField}
                          margin='dense'
                          inputProps={{
                            style: { fontSize: '14px' }
                          }}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={1}
                        className={classNames(
                          classes.ClearButton,
                          classes.Folded
                        )}
                      >
                        <StyledIconButton onClick={this.EmailClear}>
                          <ClearIcon />
                        </StyledIconButton>
                      </Grid>
                    </Grid>

                    <Grid
                      item
                      container
                      xs={12}
                      className={classes.dialogMarginTop}
                    >
                      <Grid item xs={12}>
                        <Typography variant='subtitle1'>전화번호</Typography>
                      </Grid>

                      <Grid item xs={11} sm={12}>
                        <TextField
                          value={this.state.HPNumberText}
                          onChange={e => {
                            this.setState({ HPNumberText: e.target.value })
                          }}
                          id='standard-dense'
                          className={classes.textField}
                          margin='dense'
                          inputProps={{
                            style: { fontSize: '14px' }
                          }}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={1}
                        className={classNames(
                          classes.ClearButton,
                          classes.Folded
                        )}
                      >
                        <StyledIconButton onClick={this.HPNumberClear}>
                          <ClearIcon />
                        </StyledIconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </DialogContent>

                <DialogTitle className={classes.passWordMargin}>
                  {'비밀번호 수정'}
                </DialogTitle>
                <DialogContent>
                  <Grid container>
                    <Grid
                      item
                      container
                      xs={12}
                      className={classes.dialogMarginTop}
                    >
                      <Grid item xs={12}>
                        <Typography variant='subtitle1'>
                          현재 비밀번호
                        </Typography>
                      </Grid>

                      <Grid item xs={11} sm={12}>
                        <TextField
                          value={this.state.PassWordText}
                          onChange={e => {
                            this.setState({ PassWordText: e.target.value })
                          }}
                          id='standard-dense'
                          className={classes.textField}
                          margin='dense'
                          inputProps={{
                            style: { fontSize: '14px' }
                          }}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={1}
                        className={classNames(
                          classes.ClearButton,
                          classes.Folded
                        )}
                      >
                        <StyledIconButton onClick={this.PassWordClear}>
                          <ClearIcon />
                        </StyledIconButton>
                      </Grid>
                    </Grid>

                    <Grid
                      item
                      container
                      xs={12}
                      className={classes.dialogMarginTop}
                    >
                      <Grid item xs={12}>
                        <Typography variant='subtitle1'>새 비밀번호</Typography>
                      </Grid>

                      <Grid item xs={11} sm={12}>
                        <TextField
                          value={this.state.NewPassWordText}
                          onChange={e => {
                            this.setState({ NewPassWordText: e.target.value })
                          }}
                          id='standard-dense'
                          className={classes.textField}
                          margin='dense'
                          inputProps={{
                            style: { fontSize: '14px' }
                          }}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={1}
                        className={classNames(
                          classes.ClearButton,
                          classes.Folded
                        )}
                      >
                        <StyledIconButton onClick={this.NewPassWordClear}>
                          <ClearIcon />
                        </StyledIconButton>
                      </Grid>
                    </Grid>

                    <Grid
                      item
                      container
                      xs={12}
                      className={classes.dialogMarginTop}
                    >
                      <Grid item xs={12}>
                        <Typography variant='subtitle1'>
                          새 비밀번호 확인
                        </Typography>
                      </Grid>

                      <Grid item xs={11} sm={12}>
                        <TextField
                          value={this.state.CheckNewPassWordText}
                          onChange={e => {
                            this.setState({
                              CheckNewPassWordText: e.target.value
                            })
                          }}
                          id='standard-dense'
                          className={classes.textField}
                          margin='dense'
                          inputProps={{
                            style: { fontSize: '14px' }
                          }}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={1}
                        className={classNames(
                          classes.ClearButton,
                          classes.Folded
                        )}
                      >
                        <StyledIconButton onClick={this.CheckNewPassWordClear}>
                          <ClearIcon />
                        </StyledIconButton>
                      </Grid>
                    </Grid>
                  </Grid>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleEditClose} color='secondary'>
                    <Typography variant='body1'>취소</Typography>
                  </Button>
                  <Button onClick={this.handleEditClose}>
                    <Typography variant='subtitle1'>저장</Typography>
                  </Button>
                </DialogActions>
              </Dialog>

              <Dialog open={this.state.PenNameOpen}>
                <DialogTitle>{'필명 변경'}</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    <Grid
                      item
                      container
                      xs={12}
                      className={classes.dialogMarginTop}
                    >
                      <Grid item xs={12}>
                        <Typography variant='subtitle1'>필명</Typography>
                      </Grid>

                      <Grid item xs={11} sm={12}>
                        <TextField
                          value={this.state.PenNameText}
                          onChange={e => {
                            this.setState({ PenNameText: e.target.value })
                          }}
                          id='standard-dense'
                          className={classes.textField}
                          margin='dense'
                          inputProps={{
                            style: { fontSize: '14px' }
                          }}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={1}
                        className={classNames(
                          classes.ClearButton,
                          classes.Folded
                        )}
                      >
                        <StyledIconButton onClick={this.PenNameClear}>
                          <ClearIcon />
                        </StyledIconButton>
                      </Grid>
                    </Grid>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handlePenNameClose} color='secondary'>
                    <Typography variant='body1'>변경취소</Typography>
                  </Button>
                  <Button onClick={this.handlePenNameClose}>
                    <Typography variant='subtitle1'>변경확인</Typography>
                  </Button>
                </DialogActions>
              </Dialog>

              <Dialog open={this.state.open}>
                <DialogTitle>{'가명은 랜덤으로 바뀝니다.'}</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    <Typography>
                      변경 시 15일간 변경이 불가능 합니다.
                    </Typography>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleClose} color='secondary'>
                    <Typography variant='body1'>변경취소</Typography>
                  </Button>
                  <Button onClick={this.handleClose}>
                    <Typography variant='subtitle1'>변경확인</Typography>
                  </Button>
                </DialogActions>
              </Dialog>

              <Dialog
                open={this.state.MentOpen}
                fullWidth={true}
                maxWidth={'sm'}
              >
                <DialogTitle>{'소개글 변경'}</DialogTitle>
                <DialogContent>
                  <DialogContentText>
                    <Grid
                      item
                      container
                      xs={12}
                      className={classes.dialogMarginTop}
                    >
                      <Grid item xs={11} sm={12}>
                        <TextField
                          value={this.state.MentText}
                          onChange={e => {
                            this.setState({ MentText: e.target.value })
                          }}
                          id='standard-dense'
                          className={classes.textField}
                          margin='dense'
                          inputProps={{
                            style: { fontSize: '14px' }
                          }}
                        />
                      </Grid>
                      <Grid
                        item
                        xs={1}
                        className={classNames(
                          classes.ClearButton,
                          classes.Folded
                        )}
                      >
                        <StyledIconButton onClick={this.MentClear}>
                          <ClearIcon />
                        </StyledIconButton>
                      </Grid>
                    </Grid>
                  </DialogContentText>
                </DialogContent>
                <DialogActions>
                  <Button onClick={this.handleMentClose} color='secondary'>
                    <Typography variant='body1'>변경취소</Typography>
                  </Button>
                  <Button onClick={this.handleMentClose}>
                    <Typography variant='subtitle1'>변경확인</Typography>
                  </Button>
                </DialogActions>
              </Dialog>
            </Grid>
          </Grid>
        </Container>
        <NMFooter />
      </>
    )
  }
}

export default withStyles(styles)(Page)
