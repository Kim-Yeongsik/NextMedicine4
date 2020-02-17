import {
  Avatar,
  Box,
  createStyles,
  Divider,
  Grid,
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

import { containerBreakpoint } from 'consts/layout'

const styles = theme =>
  createStyles({
    root: {
      marginTop: theme.spacing(16),
      marginBottom: theme.spacing(6),
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        marginTop: theme.spacing(6),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
      }
    },
    fullWidth: {
      width: '100%'
    },
    mainTitle: {
      marginLeft: '5px'
    },
    userName: {
      paddingTop: theme.spacing(1),
      marginLeft: theme.spacing(10),
      color: '#ffffff',
      fontSize: '16px',
      fontWeight: 700
    },
    paler: {
      paddingLeft: '12px',
      marginRight: theme.spacing(2),
      color: '#ffffff',
      padding: '3px',
      fontSize: '13px',
      fontWeight: 700
    },
    invisible: {
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        display: 'none'
      }
    },
    avatar: {
      marginTop: theme.spacing(0.2),
      marginLeft: theme.spacing(1.3),
      width: '50px',
      height: '50px',
      position: 'absolute',
      textAlign: 'center'
    },
    postContentCSS: {
      marginTop: theme.spacing(1),
      paddingTop: theme.spacing(0.8),
      marginLeft: theme.spacing(10),
      paddingBottom: theme.spacing(0.8),
      borderRadius: '25px'
    },
    contentPadding: {
      paddingLeft: theme.spacing(0.4),
      paddingRight: theme.spacing(2),
      color: '#ffffff',
      fontWeight: 700
    },
    solid: {
      content: '',
      position: 'relative',
      top: '87%',
      right: 0,
      width: 0,
      height: 0,
      border: '22px solid transparent',
      borderRightColor: '#333',
      borderLeft: 0,
      borderBottom: 0,
      marginTop: '-11px',
      marginLeft: '-20px'
    },
    DividerBottom: {
      marginBottom: theme.spacing(2.5)
    }
  })

const StyledBox = withStyles({
  root: {
    minWidth: 'auto',
    display: 'inline-black',
    position: 'relative',
    marginTop: '8px',
    marginLeft: '30px',
    marginBottom: '8px',
    padding: '8px',
    backgroundColor: '#333',
    borderRadius: '20px'
  }
})(Box)

type PageProps = WithStyles<typeof styles>

class Page extends React.Component<PageProps> {
  render () {
    const { classes } = this.props
    const title = `Next Medicine 4`

    return (
      <>
        <NextSeo
          config={{
            title
          }}
        />
        <NMAppBar />
        <Container className={classes.root} width='large'>
          <Grid container>
            <Grid item xs={2} className={classes.invisible}>
              <SideBar />
            </Grid>
            <Grid item xs={1} className={classes.invisible} />
            <Grid item xs={12} md={9}>
              <h2 className={classes.mainTitle}>넥메 알림</h2>
              <Divider className={classes.DividerBottom} />
              <Grid container>
                <Grid item container xs={12} className={classes.fullWidth}>
                  <StyledBox>
                    <Box className={classes.solid} />
                    <Box>
                      <Avatar
                        className={classes.avatar}
                        src='../../static/nm/unknown.jpg'
                      />
                    </Box>
                    <span className={classes.userName}>엄청 착한 소낙의</span>
                    <span className={classes.paler}>14분전</span>
                    <Box className={classes.postContentCSS}>
                      <Box
                        sytle={{
                          overflow: 'hidden',
                          width: 'auto',
                          display: 'webkit-box',
                          textOverflow: 'ellipsis',
                          wordWrap: 'break-word'
                        }}
                        dangerouslySetInnerHTML={{
                          __html: `곧 10년이 다되가네요 ㄷㄷㄷ`
                        }}
                        className={classes.contentPadding}
                      />
                    </Box>
                  </StyledBox>
                  <Grid item xs={12} />
                  <StyledBox>
                    <Box className={classes.solid} />
                    <Avatar
                      className={classes.avatar}
                      src='../../static/nm/unknown.jpg'
                    />
                    <span className={classes.userName}>user1</span>
                    <span className={classes.paler}>34분</span>
                    <Box className={classes.postContentCSS}>
                      <Box
                        sytle={{
                          marginLeft: '5px',
                          overflow: 'hidden',
                          width: 'auto',
                          display: 'webkit-box',
                          textOverflow: 'ellipsis',
                          wordWrap: 'break-word'
                        }}
                        dangerouslySetInnerHTML={{
                          __html: `박제해도 되나요?`
                        }}
                        className={classes.contentPadding}
                      />
                    </Box>
                  </StyledBox>
                  <Grid item xs={12} />
                  <StyledBox>
                    <Box className={classes.solid} />
                    <Avatar
                      className={classes.avatar}
                      src='../../static/nm/unknown.jpg'
                    />
                    <span className={classes.userName}>user2</span>
                    <span className={classes.paler}>56분전</span>
                    <Box className={classes.postContentCSS}>
                      <Box
                        sytle={{
                          overflow: 'hidden',
                          width: 'auto',
                          display: 'webkit-box',
                          textOverflow: 'ellipsis',
                          wordWrap: 'break-word'
                        }}
                        dangerouslySetInnerHTML={{
                          __html: `삼년이 지났네요, 혹시 파일 아직도 가능한가요?`
                        }}
                        className={classes.contentPadding}
                      />
                    </Box>
                  </StyledBox>
                  <Grid item xs={12} />
                  <StyledBox>
                    <Box className={classes.solid} />
                    <Avatar
                      className={classes.avatar}
                      src='../../static/nm/unknown.jpg'
                    />
                    <span className={classes.userName}>user3</span>
                    <span className={classes.paler}>1시간</span>
                    <Box className={classes.postContentCSS}>
                      <Box
                        sytle={{
                          overflow: 'hidden',
                          width: 'auto',
                          display: 'webkit-box',
                          textOverflow: 'ellipsis',
                          wordWrap: 'break-word'
                        }}
                        dangerouslySetInnerHTML={{
                          __html: `감사합니다 ^^`
                        }}
                        className={classes.contentPadding}
                      />
                    </Box>
                  </StyledBox>
                  <Grid item xs={12} />
                  <StyledBox>
                    <Box className={classes.solid} />
                    <Avatar
                      className={classes.avatar}
                      src='../../static/nm/unknown.jpg'
                    />
                    <span className={classes.userName}>user4</span>
                    <span className={classes.paler}>1시간전</span>
                    <Box className={classes.postContentCSS}>
                      <Box
                        sytle={{
                          overflow: 'hidden',
                          width: 'auto',
                          display: 'webkit-box',
                          textOverflow: 'ellipsis',
                          wordWrap: 'break-word'
                        }}
                        dangerouslySetInnerHTML={{
                          __html: `감사합니다`
                        }}
                        className={classes.contentPadding}
                      />
                    </Box>
                  </StyledBox>
                  <Grid item xs={12} />
                  <StyledBox>
                    <Box className={classes.solid} />
                    <Avatar
                      className={classes.avatar}
                      src='../../static/nm/unknown.jpg'
                    />
                    <span className={classes.userName}>user5</span>
                    <span className={classes.paler}>2시간전</span>
                    <Box className={classes.postContentCSS}>
                      <Box
                        sytle={{
                          overflow: 'hidden',
                          width: 'auto',
                          display: 'webkit-box',
                          textOverflow: 'ellipsis',
                          wordWrap: 'break-word'
                        }}
                        dangerouslySetInnerHTML={{
                          __html: `선생님 감사합니다!`
                        }}
                        className={classes.contentPadding}
                      />
                    </Box>
                  </StyledBox>
                  <Grid item xs={12} />
                  <StyledBox>
                    <Box className={classes.solid} />
                    <Avatar
                      className={classes.avatar}
                      src='../../static/nm/unknown.jpg'
                    />
                    <span className={classes.userName}>user6</span>
                    <span className={classes.paler}>3시간전</span>
                    <Box className={classes.postContentCSS}>
                      <Box
                        sytle={{
                          overflow: 'hidden',
                          width: 'auto',
                          display: 'webkit-box',
                          textOverflow: 'ellipsis',
                          wordWrap: 'break-word'
                        }}
                        dangerouslySetInnerHTML={{
                          __html: `뒤늦게 후기 감사합니다 ㅎㅎ`
                        }}
                        className={classes.contentPadding}
                      />
                    </Box>
                  </StyledBox>
                  <Grid item xs={12} />
                  <StyledBox>
                    <Box className={classes.solid} />
                    <Avatar
                      className={classes.avatar}
                      src='../../static/nm/unknown.jpg'
                    />
                    <span className={classes.userName}>user7</span>
                    <span className={classes.paler}>5시간전</span>
                    <Box className={classes.postContentCSS}>
                      <Box
                        sytle={{
                          overflow: 'hidden',
                          width: 'auto',
                          display: 'webkit-box',
                          textOverflow: 'ellipsis',
                          wordWrap: 'break-word'
                        }}
                        dangerouslySetInnerHTML={{
                          __html: `잠금글 풀렸네요 ㅎ`
                        }}
                        className={classes.contentPadding}
                      />
                    </Box>
                  </StyledBox>
                  <Grid item xs={12} />
                  <StyledBox>
                    <Box className={classes.solid} />
                    <Avatar
                      className={classes.avatar}
                      src='../../static/nm/unknown.jpg'
                    />
                    <span className={classes.userName}>user8</span>
                    <span className={classes.paler}>7시간전</span>
                    <Box className={classes.postContentCSS}>
                      <Box
                        sytle={{
                          overflow: 'hidden',
                          width: 'auto',
                          display: 'webkit-box',
                          textOverflow: 'ellipsis',
                          wordWrap: 'break-word'
                        }}
                        dangerouslySetInnerHTML={{
                          __html: `진짜인듯`
                        }}
                        className={classes.contentPadding}
                      />
                    </Box>
                  </StyledBox>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Container>
        <NMFooter />
      </>
    )
  }
}

export default withStyles(styles)(Page)
