import {
  Box,
  createStyles,
  Grid,
  Link,
  List,
  ListItem,
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

import NMAppBar from 'components/nmAppBar'
import NMFooter from 'components/nmfooter'
import SideBar from 'components/SideBar'

import { containerBreakpoint } from 'consts/layout'
import Container from '../../components/Container'

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
    underLine: {
      borderBottom: 'solid 0.05em #ddf',
      paddingBottom: '0.2em'
    },
    table: {
      borderCollapse: 'collapse',
      tableLayout: 'fixed',
      display: 'table',
      borderSpacing: '2px',
      borderColor: 'grey',
      padding: '3px 5px'
    },
    button: {
      margin: theme.spacing(1),
      border: '5px 10px',
      padding: '5px 10px',
      borderRadius: '5px',
      backgroundColor: '#bbf',
      color: '#000',
      lineHeight: 2.5,
      whiteSpace: 'nowrap'
    },
    ul: {
      display: 'block',
      listStyleType: '1em',
      marginBlockStart: '1em',
      marginBlockEnd: '1em'
    },
    underLineRemove: {
      textDecoration: 'none'
    },
    headCell: {
      padding: '3px 5px',
      textAlign: 'center',
      fontWeight: 700,
      backgroundColor: '#ddd',
      width: '25%'
    },
    Row: {
      display: 'table-row',
      verticalAlign: 'inherit',
      borderColor: 'inherit'
    },
    bodyCell: {
      padding: '3px 5px',
      textAlign: 'center',
      width: '25%'
    },
    invisible: {
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        display: 'none'
      }
    }
  })

type PageProps = WithStyles<typeof styles>

class Page extends React.Component<PageProps> {
  constructor (props) {
    super(props)
    this.state = {
      value: false
    }
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
        <NMAppBar current='kmle' />
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
              </Grid>

              <Box className={classes.mobilePadding}>
                <h3 className={classes.underLine}>기본항목 체크</h3>
                <List disablePadding={true} className={classes.ul}>
                  <ListItem>
                    <Link
                      href='/kmleElementary'
                      className={classes.underLineRemove}
                      color='inherit'
                    >
                      기본항목 체크 기능
                    </Link>
                    이 운영중입니다.
                  </ListItem>
                  <ListItem>
                    <Link
                      href='/kmleElementaryOld'
                      className={classes.underLineRemove}
                      color='inherit'
                    >
                      예전 기본항목
                    </Link>
                    도 체크 가능합니다.
                  </ListItem>
                  <ListItem>
                    첫 날 출제된 문제를 체크한 후 아직 출제되지 않은 부분을
                    공부할 수 있습니다.
                  </ListItem>
                </List>

                <h3 className={classes.underLine}>T점수 변환기</h3>
                <List className={classes.ul}>
                  <ListItem>시험 가채점 후 원점수를 입력하면</ListItem>
                  <ListItem>
                    <Link
                      href='/tscore'
                      className={classes.underLineRemove}
                      color='inherit'
                    >
                      자료를 종합해 T점수를 산출
                    </Link>
                    해드립니다.
                  </ListItem>
                  <ListItem>
                    많은 자료가 모일수록 결과가 더 정확해집니다. 시험 본
                    동기들에게 알려주세요!
                  </ListItem>
                </List>

                <h3 className={classes.underLine}>지난 의사국가시험 합격률</h3>
                <Grid container>
                  <Grid item xs={12} md={5}>
                    <Table className={classes.table}>
                      <TableHead>
                        <TableRow className={classes.Row}>
                          <TableCell className={classes.headCell}>
                            연도(회)
                          </TableCell>
                          <TableCell className={classes.headCell}>
                            응시자
                          </TableCell>
                          <TableCell className={classes.headCell}>
                            합격자
                          </TableCell>
                          <TableCell
                            className={classes.headCell}
                            // padding='checkbox'
                          >
                            합격률
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow className={classes.Row}>
                          <TableCell className={classes.bodyCell}>
                            2019 (83회)
                          </TableCell>
                          <TableCell className={classes.bodyCell}>
                            3307
                          </TableCell>
                          <TableCell className={classes.bodyCell}>
                            3115
                          </TableCell>
                          <TableCell
                            className={classes.bodyCell}
                            padding='checkbox'
                          >
                            94.2%
                          </TableCell>
                        </TableRow>
                        <TableRow className={classes.Row}>
                          <TableCell className={classes.bodyCell}>
                            2018 (82회)
                          </TableCell>
                          <TableCell className={classes.bodyCell}>
                            3373
                          </TableCell>
                          <TableCell className={classes.bodyCell}>
                            3204
                          </TableCell>
                          <TableCell
                            className={classes.bodyCell}
                            padding='checkbox'
                          >
                            95.0%
                          </TableCell>
                        </TableRow>
                        <TableRow className={classes.Row}>
                          <TableCell className={classes.bodyCell}>
                            2017 (81회)
                          </TableCell>
                          <TableCell className={classes.bodyCell}>
                            3336
                          </TableCell>
                          <TableCell className={classes.bodyCell}>
                            3095
                          </TableCell>
                          <TableCell
                            className={classes.bodyCell}
                            padding='checkbox'
                          >
                            92.8%
                          </TableCell>
                        </TableRow>
                        <TableRow className={classes.Row}>
                          <TableCell className={classes.bodyCell}>
                            2016 (80회)
                          </TableCell>
                          <TableCell className={classes.bodyCell}>
                            3323
                          </TableCell>
                          <TableCell className={classes.bodyCell}>
                            3106
                          </TableCell>
                          <TableCell
                            className={classes.bodyCell}
                            padding='checkbox'
                          >
                            93.5%
                          </TableCell>
                        </TableRow>
                        <TableRow className={classes.Row}>
                          <TableCell className={classes.bodyCell}>
                            2015 (79회)
                          </TableCell>
                          <TableCell className={classes.bodyCell}>
                            3302
                          </TableCell>
                          <TableCell className={classes.bodyCell}>
                            3125
                          </TableCell>
                          <TableCell
                            className={classes.bodyCell}
                            padding='checkbox'
                          >
                            94.6%
                          </TableCell>
                        </TableRow>
                        <TableRow className={classes.Row}>
                          <TableCell className={classes.bodyCell}>
                            2014 (78회)
                          </TableCell>
                          <TableCell className={classes.bodyCell}>
                            3412
                          </TableCell>
                          <TableCell className={classes.bodyCell}>
                            3200
                          </TableCell>
                          <TableCell
                            className={classes.bodyCell}
                            padding='checkbox'
                          >
                            93.8%
                          </TableCell>
                        </TableRow>
                        <TableRow className={classes.Row}>
                          <TableCell className={classes.bodyCell}>
                            2013 (77회)
                          </TableCell>
                          <TableCell className={classes.bodyCell}>
                            3287
                          </TableCell>
                          <TableCell className={classes.bodyCell}>
                            3032
                          </TableCell>
                          <TableCell
                            className={classes.bodyCell}
                            padding='checkbox'
                          >
                            92.2%
                          </TableCell>
                        </TableRow>
                        <TableRow className={classes.Row}>
                          <TableCell className={classes.bodyCell}>
                            2012 (76회)
                          </TableCell>
                          <TableCell className={classes.bodyCell}>
                            3446
                          </TableCell>
                          <TableCell className={classes.bodyCell}>
                            3208
                          </TableCell>
                          <TableCell
                            className={classes.bodyCell}
                            padding='checkbox'
                          >
                            93.1%
                          </TableCell>
                        </TableRow>
                        <TableRow className={classes.Row}>
                          <TableCell className={classes.bodyCell}>
                            2011 (75회)
                          </TableCell>
                          <TableCell className={classes.bodyCell}>
                            3376
                          </TableCell>
                          <TableCell className={classes.bodyCell}>
                            3095
                          </TableCell>
                          <TableCell
                            className={classes.bodyCell}
                            padding='checkbox'
                          >
                            91.7%
                          </TableCell>
                        </TableRow>
                        <TableRow className={classes.Row}>
                          <TableCell className={classes.bodyCell}>
                            2010 (74회)
                          </TableCell>
                          <TableCell className={classes.bodyCell}>
                            3469
                          </TableCell>
                          <TableCell className={classes.bodyCell}>
                            3224
                          </TableCell>
                          <TableCell
                            className={classes.bodyCell}
                            padding='checkbox'
                          >
                            92.9%
                          </TableCell>
                        </TableRow>
                        <TableRow className={classes.Row}>
                          <TableCell className={classes.bodyCell}>
                            2009 (73회)
                          </TableCell>
                          <TableCell className={classes.bodyCell}>
                            3750
                          </TableCell>
                          <TableCell className={classes.bodyCell}>
                            3510
                          </TableCell>
                          <TableCell
                            className={classes.bodyCell}
                            padding='checkbox'
                          >
                            93.6%
                          </TableCell>
                        </TableRow>
                        <TableRow>
                          <TableCell className={classes.bodyCell}>
                            2008 (72회)
                          </TableCell>
                          <TableCell className={classes.bodyCell}>
                            4028
                          </TableCell>
                          <TableCell className={classes.bodyCell}>
                            3887
                          </TableCell>
                          <TableCell
                            className={classes.bodyCell}
                            padding='checkbox'
                          >
                            96.5%
                          </TableCell>
                        </TableRow>
                        <TableRow className={classes.Row}>
                          <TableCell className={classes.bodyCell}>
                            2007 (71회)
                          </TableCell>
                          <TableCell className={classes.bodyCell}>
                            3735
                          </TableCell>
                          <TableCell className={classes.bodyCell}>
                            3305
                          </TableCell>
                          <TableCell
                            className={classes.bodyCell}
                            padding='checkbox'
                          >
                            88.5%
                          </TableCell>
                        </TableRow>
                        <TableRow className={classes.Row}>
                          <TableCell className={classes.bodyCell}>
                            2006 (70회)
                          </TableCell>
                          <TableCell className={classes.bodyCell}>
                            3743
                          </TableCell>
                          <TableCell className={classes.bodyCell}>
                            3489
                          </TableCell>
                          <TableCell
                            className={classes.bodyCell}
                            padding='checkbox'
                          >
                            93.2%
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </Grid>

                  <Grid item xs={12}>
                    <h3 className={classes.underLine}>
                      지난 의사국가시험 합격률 상세정보
                    </h3>
                  </Grid>

                  <Grid item xs={12} md={4}>
                    <Table className={classes.table}>
                      <TableHead>
                        <TableRow className={classes.Row}>
                          <TableCell className={classes.headCell}>
                            연도
                          </TableCell>
                          <TableCell className={classes.headCell}>
                            필기합격률
                          </TableCell>
                          <TableCell
                            className={classes.headCell}
                            padding='checkbox'
                          >
                            실기합격률
                          </TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        <TableRow className={classes.Row}>
                          <TableCell className={classes.bodyCell}>
                            2018
                          </TableCell>
                          <TableCell className={classes.bodyCell}>
                            98.78%
                          </TableCell>
                          <TableCell
                            className={classes.bodyCell}
                            padding='checkbox'
                          >
                            95.79%
                          </TableCell>
                        </TableRow>
                        <TableRow className={classes.Row}>
                          <TableCell className={classes.bodyCell}>
                            2017
                          </TableCell>
                          <TableCell className={classes.bodyCell}>
                            95.16%
                          </TableCell>
                          <TableCell
                            className={classes.bodyCell}
                            padding='checkbox'
                          >
                            96.38%
                          </TableCell>
                        </TableRow>
                      </TableBody>
                    </Table>
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>
        </Container>
        <NMFooter />
      </>
    )
  }
}

export default withStyles(styles)(Page)
