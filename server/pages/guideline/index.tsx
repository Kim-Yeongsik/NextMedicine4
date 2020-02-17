import {
  createStyles,
  Grid,
  List,
  ListItem,
  WithStyles,
  withStyles
} from '@material-ui/core'
import NextSeo from 'next-seo'
import React from 'react'

import NMAppBar from 'components/nmAppBar'
import NMFooter from 'components/nmfooter'
import SideBar from 'components/SideBar'

import { containerBreakpoint } from 'consts/layout'
import Container from '../../components/Container'

const styles = theme =>
  createStyles({
    root: {
      marginTop: theme.spacing(17),
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        marginTop: theme.spacing(4)
      }
    },
    mobileMargin: {
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1)
      }
    },
    invisible: {
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        display: 'none'
      }
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
              <Grid container className={classes.mobileMargin}>
                <h2>넥메 게시판 이용 지침</h2>
                <Grid item xs={12}>
                  <ListItem>
                    넥스트메디신(이하 넥메) 게시판은 회원 인증을 받은 회원만
                    글을 작성하고 조회할 수 있습니다.
                  </ListItem>
                  <List>
                    <ListItem>
                      회원 인증은 의사 또는 예비의사(의예과, 의학과,
                      의학전문대학원 학생)에 한해서만 가능합니다.
                    </ListItem>
                  </List>
                  <ListItem>
                    넥메 게시판 이용시 필명 또는 가명을 선택해 글을 올릴 수
                    있습니다.
                  </ListItem>
                  <List>
                    <ListItem>
                      필명은 이용자가 지정한 한글, 영어, 숫자로 구성된 이름으로
                      이용자가 설정한 본인의 소개 내용과 연계되며 7일 간격으로
                      변경 가능합니다.
                    </ListItem>
                    <ListItem>
                      가명은 시스템에 의해 자동 생성된 이름으로 이용자의 개인
                      정보와 연계가 되어있지 않고 15일 간격으로 변경 가능합니다.
                    </ListItem>
                    <ListItem>
                      가명으로 작성한 글은 수정/삭제가 불가능합니다. 익명성에
                      따른 책임을 지우기 위한 조치입니다.
                    </ListItem>
                    <ListItem>
                      가명으로 작성한 글이라도 법적 문제 발생시 이용자 정보가
                      수사기관에 제공될 수 있습니다.
                    </ListItem>
                  </List>
                  <ListItem>
                    넥메 게시판의 공공성 및 품위 유지를 위해 글 작성시 다음
                    내용을 지켜주시기 바랍니다.
                  </ListItem>
                  <List>
                    <ListItem>게시판 분류를 준수합니다.</ListItem>
                    <ListItem>
                      욕설, 비방, 반말이 들어간 글을 게시하지 않습니다.
                    </ListItem>
                    <ListItem>**충 등 비하 표현을 사용하지 않습니다.</ListItem>
                    <ListItem>
                      음란물, 반사회적 내용을 담은 글을 게시하지 않습니다.
                    </ListItem>
                    <ListItem>
                      영리목적의 상업성 광고, 저작권을 침해하는 내용을 게시하지
                      않습니다.
                    </ListItem>
                    <ListItem>
                      변경이 불가능한 특징에 기반한 편가르기(의대/의전,
                      남성/여성, 전라도/경상도 등)를 조장하는 글을 게시하지
                      않습니다.
                    </ListItem>
                    <ListItem>
                      개인, 단체, 기관의 실명을 거론하며 근거 없이 명예를
                      훼손하는 내용을 게시하지 않습니다.
                    </ListItem>
                    <ListItem>
                      타 사이트에서 이용되더라도 일반적으로 이해하기 어려운
                      용어, 초성, 비유적인 표현을 사용하지 않습니다.
                    </ListItem>
                    <ListItem>
                      비슷하거나 동일한 내용을 반복해서 게시하지 않습니다.
                    </ListItem>
                  </List>
                  <ListItem>
                    넥메 게시판의 공공성 및 품위 유지에 반하는 글을 작성하거나
                    사이트 운영에 방해가 되는 방식으로 사이트를 이용하는 경우
                    사이트 이용에 제제가 가해질 수 있습니다.
                  </ListItem>
                  <List>
                    <ListItem>
                      부적절한 글은 게시판 분류가 관리자 임의로 변경되거나
                      삭제될 수 있습니다.
                    </ListItem>
                    <ListItem>
                      부적절한 글을 반복 게시하는 경우 글 쓰기, 글 읽기, 로그인
                      등에 제한이 가해질 수 있습니다.
                    </ListItem>
                  </List>
                  <ListItem>
                    게시물에 의해 발생한 분쟁의 경우, 모든 책임은 게시자와 분쟁
                    당사자간에 있으며 당사자간 해결이 원칙입니다.
                  </ListItem>
                  <List>
                    <ListItem>
                      개인 요청으로 사이트 내부 정보를 제공하지 않습니다. 다만,
                      수사기관의 적법한 수사협조 요청이 있을 경우 서버에 기록된
                      정보를 제공할 수 있습니다.
                    </ListItem>
                  </List>
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
