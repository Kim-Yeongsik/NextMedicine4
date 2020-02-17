import {
  Avatar,
  Box,
  Chip,
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
    mainTitle: {
      marginLeft: '5px'
    },
    messageCSS: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2)
    },
    userName: {
      paddingTop: theme.spacing(2),
      marginLeft: theme.spacing(10),
      fontSize: '16px',
      fontWeight: 700
    },
    paler: {
      paddingLeft: '12px',
      padding: '3px',
      color: '#A4A4A4',
      fontSize: '13px',
      fontWeight: 700
    },
    invisible: {
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        display: 'none'
      }
    },
    avatar: {
      marginTop: theme.spacing(0.4),
      marginLeft: theme.spacing(1.5),
      width: '50px',
      height: '50px',
      position: 'absolute',
      textAlign: 'center'
    },
    chip: {
      margin: theme.spacing(1)
    },
    contentPadding: {
      paddingTop: theme.spacing(2),
      paddingLeft: theme.spacing(10),
      fontWeight: 700
    }
  })

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
              <h2 className={classes.mainTitle}>넥메 쪽지</h2>
              <Divider />
              <Grid container>
                <Grid item container xs={12}>
                  <Grid item xs={12} className={classes.messageCSS}>
                    <Avatar
                      className={classes.avatar}
                      src='../../static/nm/unknown.jpg'
                    />
                    <span className={classes.userName}>블랙티</span>
                    <span className={classes.paler}>2018-12-23 21:28</span>
                    <Box>
                      <Box
                        sytle={{
                          overflow: 'hidden',
                          width: 'auto',
                          display: 'webkit-box',
                          textOverflow: 'ellipsis',
                          wordWrap: 'break-word'
                        }}
                        dangerouslySetInnerHTML={{
                          __html: `혹시 운영자 맞으신가요? 말러님은 쪽지가 안되네요.. 최근에 신고 누적으로 댓글....`
                        }}
                        className={classes.contentPadding}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} className={classes.messageCSS}>
                    <Avatar
                      className={classes.avatar}
                      src='../../static/nm/unknown.jpg'
                    />
                    <span className={classes.userName}>Abslim</span>
                    <span className={classes.paler}>2018-05-06 22:45</span>
                    <Box>
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
                          __html: `여기 홍어드립 라도 요거 언론이랑 온라인에 공개해도
                        되는거죠? 관리를 아예....`
                        }}
                        className={classes.contentPadding}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} className={classes.messageCSS}>
                    <Avatar
                      className={classes.avatar}
                      src='../../static/nm/unknown.jpg'
                    />
                    <span className={classes.userName}>말러님</span>
                    <span className={classes.paler}>2017-12-26 23:37</span>
                    <Box>
                      <Box
                        sytle={{
                          overflow: 'hidden',
                          width: 'auto',
                          display: 'webkit-box',
                          textOverflow: 'ellipsis',
                          wordWrap: 'break-word'
                        }}
                        dangerouslySetInnerHTML={{
                          __html: `자려고 누워있어서... 내일 확인할게요. 그러고보니
                        브릿지파트너스 아직도 답장....`
                        }}
                        className={classes.contentPadding}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} className={classes.messageCSS}>
                    <Avatar
                      className={classes.avatar}
                      src='../../static/nm/unknown.jpg'
                    />
                    <span className={classes.userName}>엄청단단한몽둥의</span>
                    <span className={classes.paler}>2017-12-26 20:34</span>
                    <Box>
                      <Box
                        sytle={{
                          overflow: 'hidden',
                          width: 'auto',
                          display: 'webkit-box',
                          textOverflow: 'ellipsis',
                          wordWrap: 'break-word'
                        }}
                        dangerouslySetInnerHTML={{
                          __html: `안녕하세요 불편을 끼쳐드려 죄송합니다 관련 내용을 운영
                        관리자에게 확인 부탁....`
                        }}
                        className={classes.contentPadding}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} className={classes.messageCSS}>
                    <Avatar
                      className={classes.avatar}
                      src='../../static/nm/unknown.jpg'
                    />
                    <span className={classes.userName}>나여</span>
                    <span className={classes.paler}>2017-12-05 14:42</span>
                    <Box>
                      <Box
                        sytle={{
                          overflow: 'hidden',
                          width: 'auto',
                          display: 'webkit-box',
                          textOverflow: 'ellipsis',
                          wordWrap: 'break-word'
                        }}
                        dangerouslySetInnerHTML={{
                          __html: `나여 님 안녕하세요. 쪽지 잘 받았습니다. 제가 최초 사이트
                        설립 및 운영자였....`
                        }}
                        className={classes.contentPadding}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} className={classes.messageCSS}>
                    <Avatar
                      className={classes.avatar}
                      src='../../static/nm/unknown.jpg'
                    />
                    <span className={classes.userName}>SHWA</span>
                    <span className={classes.paler}>2017-11-20 19:17</span>
                    <Box>
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
                  </Grid>

                  <Grid item xs={12} className={classes.messageCSS}>
                    <Avatar
                      className={classes.avatar}
                      src='../../static/nm/unknown.jpg'
                    />
                    <span className={classes.userName}>털님</span>
                    <span className={classes.paler}>2017-01-18 16:18</span>
                    <Box>
                      <Box
                        sytle={{
                          overflow: 'hidden',
                          width: 'auto',
                          display: 'webkit-box',
                          textOverflow: 'ellipsis',
                          wordWrap: 'break-word'
                        }}
                        dangerouslySetInnerHTML={{
                          __html: `수고많으십니다 다름 아니라 검색은 되는데 글은 볼수 없는
                        옛날글이 있어 문의드....`
                        }}
                        className={classes.contentPadding}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} className={classes.messageCSS}>
                    <Avatar
                      className={classes.avatar}
                      src='../../static/nm/unknown.jpg'
                    />
                    <span className={classes.userName}>rkskerhdn</span>
                    <span className={classes.paler}>2016-08-07 19:24</span>
                    <Box>
                      <Box
                        sytle={{
                          overflow: 'hidden',
                          width: 'auto',
                          display: 'webkit-box',
                          textOverflow: 'ellipsis',
                          wordWrap: 'break-word'
                        }}
                        dangerouslySetInnerHTML={{
                          __html: `안녕하세요. 관리자 분이신가요? 제 아이디로 올린 모집공고들 및 여러 글을 다....`
                        }}
                        className={classes.contentPadding}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} className={classes.messageCSS}>
                    <Avatar
                      className={classes.avatar}
                      src='../../static/nm/unknown.jpg'
                    />
                    <span className={classes.userName}>가아악구아악</span>
                    <span className={classes.paler}>2016-05-15 20:22</span>
                    <Box>
                      <Box
                        sytle={{
                          overflow: 'hidden',
                          width: 'auto',
                          display: 'webkit-box',
                          textOverflow: 'ellipsis',
                          wordWrap: 'break-word'
                        }}
                        dangerouslySetInnerHTML={{
                          __html: `http://nextmedicine.com/post/538699 제가 작성환 글입니다.
                        해당글에 대한....`
                        }}
                        className={classes.contentPadding}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} className={classes.messageCSS}>
                    <Avatar
                      className={classes.avatar}
                      src='../../static/nm/unknown.jpg'
                    />
                    <span className={classes.userName}>멋진인생</span>
                    <span className={classes.paler}>2016-01-30 10:54</span>
                    <Box>
                      <Box
                        sytle={{
                          overflow: 'hidden',
                          width: 'auto',
                          display: 'webkit-box',
                          textOverflow: 'ellipsis',
                          wordWrap: 'break-word'
                        }}
                        dangerouslySetInnerHTML={{
                          __html: `안녕하세요.. 익명으로 글을 달았는데 병원 관계자에세 연락이 왔네요... 신변보....`
                        }}
                        className={classes.contentPadding}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} className={classes.messageCSS}>
                    <Avatar
                      className={classes.avatar}
                      src='../../static/nm/unknown.jpg'
                    />
                    <span className={classes.userName}>아주즐거운은근의</span>
                    <span className={classes.paler}>2015-01-30 10:54</span>
                    <Box>
                      <Box
                        sytle={{
                          overflow: 'hidden',
                          width: 'auto',
                          display: 'webkit-box',
                          textOverflow: 'ellipsis',
                          wordWrap: 'break-word'
                        }}
                        dangerouslySetInnerHTML={{
                          __html: `저 국시점수를 잘못 입력했는데 수정할수없나요?ㅠㅠ
                        345개인데 355로 잘못입력했....`
                        }}
                        className={classes.contentPadding}
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} className={classes.messageCSS}>
                    <Avatar
                      className={classes.avatar}
                      src='../../static/nm/unknown.jpg'
                    />
                    <span className={classes.userName}>도녀</span>
                    <span className={classes.paler}>2014-12-11 22:37</span>
                    <Box>
                      <Box
                        sytle={{
                          overflow: 'hidden',
                          width: 'auto',
                          display: 'webkit-box',
                          textOverflow: 'ellipsis',
                          wordWrap: 'break-word'
                        }}
                        dangerouslySetInnerHTML={{
                          __html: `안녕하세요.. 익명글은 삭제가 안되는줄 모르고 진로게시판에 글을 썼....`
                        }}
                        className={classes.contentPadding}
                      />
                    </Box>
                  </Grid>
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
