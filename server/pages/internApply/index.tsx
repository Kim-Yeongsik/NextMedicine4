import {
  Box,
  createStyles,
  Grid,
  Link,
  List,
  ListItem,
  ListItemText,
  Tab,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  Tabs,
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
      marginBottom: theme.spacing(5),
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        marginTop: theme.spacing(5)
      }
    },
    mobilePadding: {
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
      }
    },
    body: {
      fontSize: '14px',
      textAlign: 'center'
    },
    underLine: {
      borderBottom: 'solid 0.05em #ddf',
      paddingBottom: '0.2em',
      textAlign: 'left'
    },
    ul: {
      display: 'block',
      listStyleType: '1em',
      marginBlockStart: '1em',
      marginBlockEnd: '1em',
      textAlign: 'left'
    },
    talbe: {
      borderCollapse: 'collapse',
      tableLayout: 'fixed',
      display: 'table',
      borderColor: 'grey',
      padding: '3px 5px',
      marginLeft: 'auto',
      marginRight: 'auto',
      width: 650
    },
    th: {
      borderTop: 'solid 1px #ccc',
      borderBottom: 'solid 1px #ccc',
      padding: '3px 5px',
      textAlign: 'center',
      fontWeight: 700,
      backgroundColor: '#ddd'
    },
    TableCell: {
      borderBottom: 'solid 1px #ccc',
      padding: '3px 5px',
      textAlign: 'center'
    },
    blue: {
      color: '#349'
    },
    red: {
      color: '#F00'
    },
    invisible: {
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        display: 'none'
      }
    }
  })

type PageProps = WithStyles<typeof styles>

class Page extends React.Component<PageProps> {
  state = {
    value: 3
  }

  handleChange = (event, value) => {
    this.setState({ value })
  }

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
              <Grid item container className={classes.mobilePadding}>
                <Grid item>
                  <Tabs
                    value={this.state.value}
                    onChange={this.handleChange}
                    indicatorColor='primary'
                    textColor='primary'
                    centered
                  >
                    <Tab href='/tscore' label='T점수변환' />
                    <Tab href='/kmleElementary' label='국시평가항목' />
                    <Tab href='/kmleElementaryOld' label='이전기본항목' />
                    <Tab href='/internApply' label='인턴지원경쟁률' />
                  </Tabs>
                </Grid>
                <Box id='body' className={classes.body}>
                  <h1 className={classes.underLine}>
                    2019 인턴 병원별 지원 현황
                  </h1>
                  <List className={classes.ul}>
                    <ListItem>
                      <ListItemText>
                        이 정보는 각 병원별 홈페이지에 공개된 자료를 넥메에서
                        자동수집해 종합한 정보로,{' '}
                        <u>자동인식 과정에 오류가 있을 수</u> 있습니다.
                      </ListItemText>
                    </ListItem>
                    <ListItem>
                      최종 업데이트 시각은 실제 원서 집계 시각이 아닌 넥메에서
                      지원자수 변화가 감지된 시각을 말합니다.
                    </ListItem>
                  </List>
                  <Box>
                    <Table className={classes.talbe}>
                      <TableHead>
                        <TableRow>
                          <TableCell className={classes.th}>병원</TableCell>
                          <TableCell className={classes.th}>지원자</TableCell>
                          <TableCell className={classes.th}>정원</TableCell>
                          <TableCell className={classes.th}>넘침</TableCell>
                          <TableCell className={classes.th}>경쟁률</TableCell>
                          <TableCell className={classes.th}>
                            최종업데이트
                          </TableCell>
                          <TableCell className={classes.th} padding='checkbox'>
                            추세
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow>
                          <TableCell className={classes.TableCell}>
                            <Link
                              href='https://ir.cmc.or.kr/recruit/info/sub5_5'
                              target='_blank'
                              className={classes.blue}
                            >
                              가톨릭
                            </Link>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            281
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            250
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            <span className={classes.red}> 31</span>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            <span className={classes.red}> 112.4% </span>{' '}
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            1/25 17:44
                          </TableCell>
                          <TableCell
                            className={classes.TableCell}
                            padding='checkbox'
                          >
                            <Link href='/internApplyTableRowend/64'>📈</Link>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className={classes.TableCell}>
                            <Link
                              href='http://irdoctor.com/m_04_3.asp'
                              target='_blank'
                              className={classes.blue}
                            >
                              강남성심
                            </Link>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            31
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            26
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            <span className={classes.red}> 5</span>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            <span className={classes.red}> 119.2% </span>{' '}
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            1/25 17:28
                          </TableCell>
                          <TableCell
                            className={classes.TableCell}
                            padding='checkbox'
                          >
                            <Link href='/internApplyTableRowend/69'>📈</Link>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className={classes.TableCell}>
                            <Link
                              href='http://sev.iseverance.com/guidance/news/news/view.asp?con_no=108284'
                              target='_blank'
                              className={classes.blue}
                            >
                              강남세브란스
                            </Link>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            48
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            33
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            <span className={classes.red}> 15</span>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            <span className={classes.red}> 145.5% </span>{' '}
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            1/25 17:24
                          </TableCell>
                          <TableCell
                            className={classes.TableCell}
                            padding='checkbox'
                          >
                            <Link href='/internApplyTableRowend/62'>📈</Link>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className={classes.TableCell}>
                            <Link
                              href='https://www.kdh.or.kr:446/hallymuniv_sub.asp?left_menu=left_news&amp;screen=ptm201&amp;news_no=5940'
                              target='_blank'
                              className={classes.blue}
                            >
                              강동성심
                            </Link>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            34
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            24
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            <span className={classes.red}> 10</span>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            <span className={classes.red}> 141.7% </span>{' '}
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            1/25 17:16
                          </TableCell>
                          <TableCell
                            className={classes.TableCell}
                            padding='checkbox'
                          >
                            <Link href='/internApplyTableRowend/65'>📈</Link>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className={classes.TableCell}>
                            <Link
                              href='https://www.kbsmc.co.kr/about/popup.jsp'
                              target='_blank'
                              className={classes.blue}
                            >
                              강북삼성
                            </Link>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            39
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            28
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            <span className={classes.red}> 11</span>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            <span className={classes.red}> 139.3% </span>{' '}
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            1/25 16:32
                          </TableCell>
                          <TableCell
                            className={classes.TableCell}
                            padding='checkbox'
                          >
                            <Link href='/internApplyTableRowend/66'>📈</Link>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className={classes.TableCell}>
                            <Link
                              href='https://www.kuh.ac.kr/recruit/center/noticeView.do?bbs_no=160'
                              target='_blank'
                              className={classes.blue}
                            >
                              건국대
                            </Link>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            47
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            37
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            <span className={classes.red}> 10</span>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            <span className={classes.red}> 127.0% </span>{' '}
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            1/25 17:00
                          </TableCell>
                          <TableCell
                            className={classes.TableCell}
                            padding='checkbox'
                          >
                            <Link href='/internApplyTableRowend/67'>📈</Link>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className={classes.TableCell}>
                            <Link
                              href='http://knuhedu.kr/bbs/board.html?code=bbs_news&amp;page=view&amp;num=85'
                              target='_blank'
                              className={classes.blue}
                            >
                              경북대
                            </Link>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            77
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            77
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            {' '}
                            0
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            {' '}
                            100.0%{' '}
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            1/25 16:52
                          </TableCell>
                          <TableCell
                            className={classes.TableCell}
                            padding='checkbox'
                          >
                            <Link href='/internApplyTableRowend/73'>📈</Link>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className={classes.TableCell}>
                            <Link
                              href='http://anam.kumc.or.kr/dept/main/index.do?DP_CODE=ETETableCell&amp;MENU_ID=005007005'
                              target='_blank'
                              className={classes.blue}
                            >
                              고려대
                            </Link>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            118
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            100
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            <span className={classes.red}> 18</span>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            <span className={classes.red}> 118.0% </span>{' '}
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            1/25 17:16
                          </TableCell>
                          <TableCell
                            className={classes.TableCell}
                            padding='checkbox'
                          >
                            <Link href='/internApplyTableRowend/59'>📈</Link>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className={classes.TableCell}>
                            <Link
                              href='http://irdoctor.com/m_04_3.asp'
                              target='_blank'
                              className={classes.blue}
                            >
                              동탄성심
                            </Link>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            30
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            27
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            <span className={classes.red}> 3</span>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            <span className={classes.red}> 111.1% </span>{' '}
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            1/25 17:28
                          </TableCell>
                          <TableCell
                            className={classes.TableCell}
                            padding='checkbox'
                          >
                            <Link href='/internApplyTableRowend/71'>📈</Link>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className={classes.TableCell}>
                            <Link
                              href='http://www.samsunghospital.com/dept/main/bbsView.do?DP_CODE=ED&amp;MENU_ID=006020&amp;CID=29792'
                              target='_blank'
                              className={classes.blue}
                            >
                              삼성서울
                            </Link>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            94
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            88
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            <span className={classes.red}> 6</span>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            <span className={classes.red}> 106.8% </span>{' '}
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            1/25 16:04
                          </TableCell>
                          <TableCell
                            className={classes.TableCell}
                            padding='checkbox'
                          >
                            <Link href='/internApplyTableRowend/72'>📈</Link>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className={classes.TableCell}>
                            <Link
                              href='https://recruit.snuh.org/joining/recruit/view.do?notice_type=I&amp;recruit_id=19021'
                              target='_blank'
                              className={classes.blue}
                            >
                              서울대
                            </Link>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            182
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            182
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            {' '}
                            0
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            {' '}
                            100.0%{' '}
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            1/25 17:04
                          </TableCell>
                          <TableCell
                            className={classes.TableCell}
                            padding='checkbox'
                          >
                            <Link href='/internApplyTableRowend/74'>📈</Link>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className={classes.TableCell}>
                            <Link
                              href='http://edTableRow.amc.seoul.kr/education/service/notice/view.do?seq=638'
                              target='_blank'
                              className={classes.blue}
                            >
                              서울아산
                            </Link>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            144
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            132
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            <span className={classes.red}> 12</span>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            <span className={classes.red}> 109.1% </span>{' '}
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            1/25 16:12
                          </TableCell>
                          <TableCell
                            className={classes.TableCell}
                            padding='checkbox'
                          >
                            <Link href='/internApplyTableRowend/63'>📈</Link>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className={classes.TableCell}>
                            <Link
                              href='http://sev.iseverance.com/guidance/news/news/view.asp?con_no=108284'
                              target='_blank'
                              className={classes.blue}
                            >
                              세브란스
                            </Link>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            203
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            165
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            <span className={classes.red}> 38</span>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            <span className={classes.red}> 123.0% </span>{' '}
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            1/25 17:24
                          </TableCell>
                          <TableCell
                            className={classes.TableCell}
                            padding='checkbox'
                          >
                            <Link href='/internApplyTableRowend/61'>📈</Link>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className={classes.TableCell}>
                            <Link
                              href='http://ts.ajoumc.or.kr/board/EduRecruiTableRoweTableRowieve.aspx?smpc=SA00010026&amp;ssc=0001&amp;ssgc=SA&amp;mc=SA00010031'
                              target='_blank'
                              className={classes.blue}
                            >
                              아주대
                            </Link>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            68
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            56
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            <span className={classes.red}> 12</span>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            <span className={classes.red}> 121.4% </span>{' '}
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            1/25 17:00
                          </TableCell>
                          <TableCell
                            className={classes.TableCell}
                            padding='checkbox'
                          >
                            <Link href='/internApplyTableRowend/58'>📈</Link>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className={classes.TableCell}>
                            <Link
                              href='https://seoul.bohun.or.kr/010inTableRowo/05_body_view.php?postidx=36020'
                              target='_blank'
                              className={classes.blue}
                            >
                              중앙보훈
                            </Link>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            34
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            30
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            <span className={classes.red}> 4</span>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            <span className={classes.red}> 113.3% </span>{' '}
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            1/25 17:08
                          </TableCell>
                          <TableCell
                            className={classes.TableCell}
                            padding='checkbox'
                          >
                            <Link href='/internApplyTableRowend/60'>📈</Link>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className={classes.TableCell}>
                            <Link
                              href='http://irdoctor.com/m_04_3.asp'
                              target='_blank'
                              className={classes.blue}
                            >
                              춘천성심
                            </Link>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            13
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            11
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            <span className={classes.red}> 2</span>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            <span className={classes.red}> 118.2% </span>{' '}
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            1/25 17:28
                          </TableCell>
                          <TableCell
                            className={classes.TableCell}
                            padding='checkbox'
                          >
                            <Link href='/internApplyTableRowend/70'>📈</Link>
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className={classes.TableCell}>
                            <Link
                              href='http://irdoctor.com/m_04_3.asp'
                              target='_blank'
                              className={classes.blue}
                            >
                              한림성심
                            </Link>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            40
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            35
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            <span className={classes.red}> 5</span>
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            <span className={classes.red}> 114.3% </span>{' '}
                          </TableCell>
                          <TableCell className={classes.TableCell}>
                            1/25 17:28
                          </TableCell>
                          <TableCell
                            className={classes.TableCell}
                            padding='checkbox'
                          >
                            <Link href='/internApplyTableRowend/68'>📈</Link>
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </Box>
                </Box>
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
