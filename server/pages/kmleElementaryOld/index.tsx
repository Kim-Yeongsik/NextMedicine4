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
    table: {
      borderCollapse: 'collapse',
      tableLayout: 'fixed',
      display: 'table',
      borderColor: 'grey',
      padding: '3px 5px'
    },
    headCellNum: {
      padding: '3px 5px',
      textAlign: 'center',
      fontWeight: 700,
      backgroundColor: '#ddd',
      width: '5%'
    },
    headCellClassification: {
      padding: '3px 5px',
      textAlign: 'center',
      fontWeight: 700,
      backgroundColor: '#ddd',
      width: '23%'
    },
    headCellSmallClassification: {
      padding: '3px 5px',
      textAlign: 'center',
      fontWeight: 700,
      backgroundColor: '#ddd',
      width: 'auto'
      // width: '46%',
      // [theme.breakpoints.down(containerBreakpoint(theme))]: {
      //   width: '44%'
      // }
    },
    headCellVote: {
      padding: '3px 5px',
      textAlign: 'center',
      fontWeight: 700,
      backgroundColor: '#ddd',
      width: '3%',
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        width: '5%'
      }
    },
    headCellVoteNull: {
      padding: '3px 5px',
      textAlign: 'center',
      fontWeight: 700,
      backgroundColor: '#ddd',
      width: '3%',
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        width: '5%'
      }
    },
    textCell: {
      padding: '3px 5px',
      textAlign: 'center'
    },
    darkest: {
      backgroundColor: '#ccc'
    },
    textLeft: {
      textAlign: 'left'
    },
    invisible: {
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        display: 'none'
      }
    },
  })

type PageProps = WithStyles<typeof styles>

class Page extends React.Component<PageProps> {
  state = {
    value: 2
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

          <Box id='body' container className={classes.mobilePadding}>
            <h1 className={classes.underLine}>Old 국시 기본항목 체크</h1>
            <List className={classes.ul}>
              <ListItem>2015년까지 사용되던 기본항목입니다.</ListItem>
              <ListItem>
                <ListItemText
                  primaryTypographyProps={{ variant: 'body2' }}
                >
                  2016년 국시부터&nbsp;
                  <a href='/kmleElementary'>평가항목</a>이라는 이름으로
                  재정의되었습니다.
                </ListItemText>
              </ListItem>
              <ListItem>국시 첫 날에 출제된 항목을 선택해주세요!</ListItem>
              <ListItem>
                첫 날 시험 후 아직 출제되지 않은 항목을 공부함으로써 시간을
                효율적으로 활용할 수 있습니다.
              </ListItem>
            </List>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.headCellNum}>번호</TableCell>
                  <TableCell className={classes.headCellClassification}>
                    대분류
                  </TableCell>
                  <TableCell className={classes.headCellClassification}>
                    중분류
                  </TableCell>
                  <TableCell className={classes.headCellSmallClassification}>
                    소분류
                  </TableCell>
                  <TableCell className={classes.headCellVote}>
                    나옴투표
                  </TableCell>
                  <TableCell className={classes.headCellVoteNull}>
                    없음투표
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.textCell}>1</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    몸의 정상구조와 기능
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    영양소 및 대사
                  </TableCell>
                  <TableCell id='votes1' className={classes.textCell}>
                    5
                  </TableCell>
                  <TableCell id='nays1' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.textCell}>2</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    몸의 정상구조와 기능
                  </TableCell>
                  <TableCell className={classes.textLeft}>생식주기</TableCell>
                  <TableCell id='votes2' className={classes.textCell}>
                    1
                  </TableCell>
                  <TableCell id='nays2' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.textCell}>3</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    정상발생·성장 및 노화
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    진통,분만,산욕
                  </TableCell>
                  <TableCell id='votes3' className={classes.textCell}>
                    1
                  </TableCell>
                  <TableCell id='nays3' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.textCell}>4</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    정상발생·성장 및 노화
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    소아의 발달(체격,장기,인지 및 언어,운동기능,사회성,대인관계)
                  </TableCell>
                  <TableCell id='votes4' className={classes.textCell}>
                    2
                  </TableCell>
                  <TableCell id='nays4' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>5</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    질병의 발생과 죽음
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    환경오염과 질병
                  </TableCell>
                  <TableCell id='votes5' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays5' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>6</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    질병의 발생과 죽음
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    죽음(장기,개체,뇌사)
                  </TableCell>
                  <TableCell id='votes6' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays6' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>7</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    질병의 발생과 죽음
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    진단서(상해,사망,시체검안)작성원칙
                  </TableCell>
                  <TableCell id='votes7' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays7' className={classes.textCell}>
                    1
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>8</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    주요증상과 병태생리
                  </TableCell>
                  <TableCell className={classes.textLeft}>발열</TableCell>
                  <TableCell id='votes8' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays8' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>9</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    주요증상과 병태생리
                  </TableCell>
                  <TableCell className={classes.textLeft}>수면장애</TableCell>
                  <TableCell id='votes9' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays9' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>10</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    주요증상과 병태생리
                  </TableCell>
                  <TableCell className={classes.textLeft}>복통</TableCell>
                  <TableCell id='votes10' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays10' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>11</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    주요증상과 병태생리
                  </TableCell>
                  <TableCell className={classes.textLeft}>월경이상</TableCell>
                  <TableCell id='votes11' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays11' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>12</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    주요증상과 병태생리
                  </TableCell>
                  <TableCell className={classes.textLeft}>약물남용</TableCell>
                  <TableCell id='votes12' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays12' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>13</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    진찰 및 진단
                  </TableCell>
                  <TableCell className={classes.textLeft}>병력청취</TableCell>
                  <TableCell id='votes13' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays13' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>14</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    진찰 및 진단
                  </TableCell>
                  <TableCell className={classes.textLeft}>신체진찰</TableCell>
                  <TableCell id='votes14' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays14' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>15</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    진찰 및 진단
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    임신부 진찰
                  </TableCell>
                  <TableCell id='votes15' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays15' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>16</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>검사</TableCell>
                  <TableCell className={classes.textLeft}>혈액검사</TableCell>
                  <TableCell id='votes16' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays16' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>17</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>검사</TableCell>
                  <TableCell className={classes.textLeft}>생화학검사</TableCell>
                  <TableCell id='votes17' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays17' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.textCell}>18</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    치료와 합병증
                  </TableCell>
                  <TableCell className={classes.textLeft}>심폐소생술</TableCell>
                  <TableCell id='votes18' className={classes.textCell}>
                    1
                  </TableCell>
                  <TableCell id='nays18' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.textCell}>19</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    치료와 합병증
                  </TableCell>
                  <TableCell className={classes.textLeft}>수혈</TableCell>
                  <TableCell id='votes19' className={classes.textCell}>
                    1
                  </TableCell>
                  <TableCell id='nays19' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>20</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    치료와 합병증
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    수술에 대한 반응
                  </TableCell>
                  <TableCell id='votes20' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays20' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.textCell}>21</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    치료와 합병증
                  </TableCell>
                  <TableCell className={classes.textLeft}>예방접종</TableCell>
                  <TableCell id='votes21' className={classes.textCell}>
                    1
                  </TableCell>
                  <TableCell id='nays21' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>22</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    건강증진·질병예방
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    환자-대조군 연구
                  </TableCell>
                  <TableCell id='votes22' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays22' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>23</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    건강증진·질병예방
                  </TableCell>
                  <TableCell className={classes.textLeft}>비교위험도</TableCell>
                  <TableCell id='votes23' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays23' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>24</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    건강증진·질병예방
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    우리나라 질병양상의 변천 내용
                  </TableCell>
                  <TableCell id='votes24' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays24' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>25</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    건강증진·질병예방
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    최근의 우리나라 주요사인 5가지
                  </TableCell>
                  <TableCell id='votes25' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays25' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>26</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    건강증진·질병예방
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    전염성 질병관리의 3대원칙
                  </TableCell>
                  <TableCell id='votes26' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays26' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>27</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    건강증진·질병예방
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    세균성 식중독
                  </TableCell>
                  <TableCell id='votes27' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays27' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>28</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    건강증진·질병예방
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    소음성 난청의 임상적 특징 및 판정기준
                  </TableCell>
                  <TableCell id='votes28' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays28' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>29</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    건강증진·질병예방
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    대기오염물질
                  </TableCell>
                  <TableCell id='votes29' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays29' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>30</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    건강증진·질병예방
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    진폐증의 분류
                  </TableCell>
                  <TableCell id='votes30' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays30' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>31</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    건강증진·질병예방
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    우리나라 재해질병의 현황
                  </TableCell>
                  <TableCell id='votes31' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays31' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>32</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    보건의료관리
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    국민의료비 증가에 대한 대책
                  </TableCell>
                  <TableCell id='votes32' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays32' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>33</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    보건의료관리
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    진료비 지불방법
                  </TableCell>
                  <TableCell id='votes33' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays33' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>34</TableCell>
                  <TableCell className={classes.textCell}>의학총론</TableCell>
                  <TableCell className={classes.textCell}>
                    보건의료관리
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    모성보건의 사업내용
                  </TableCell>
                  <TableCell id='votes34' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays34' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>35</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    영양, 소화기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    역류성식도염(reflux esophagitis)
                  </TableCell>
                  <TableCell id='votes35' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays35' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>36</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    영양, 소화기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    (영아)비후성유문협착(증)
                  </TableCell>
                  <TableCell id='votes36' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays36' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>37</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    영양, 소화기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    소화성궤양질환
                  </TableCell>
                  <TableCell id='votes37' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays37' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.textCell}>38</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    영양, 소화기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    위암(stomach cancer)
                  </TableCell>
                  <TableCell id='votes38' className={classes.textCell}>
                    1
                  </TableCell>
                  <TableCell id='nays38' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>39</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    영양, 소화기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    영아설사(diarrhea in infancy)
                  </TableCell>
                  <TableCell id='votes39' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays39' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>40</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    영양, 소화기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    기계적 장폐색
                  </TableCell>
                  <TableCell id='votes40' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays40' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>41</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    영양, 소화기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    상부,하부위장관 출혈
                  </TableCell>
                  <TableCell id='votes41' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays41' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>42</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    영양, 소화기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    장중첩증(intussusception)
                  </TableCell>
                  <TableCell id='votes42' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays42' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>43</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    영양, 소화기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    충수염(appendicitis)
                  </TableCell>
                  <TableCell id='votes43' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays43' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>44</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    영양, 소화기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    바이러스간염(viral hepatitis)
                  </TableCell>
                  <TableCell id='votes44' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays44' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>45</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    영양, 소화기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    간경변(liver cirrhosis)
                  </TableCell>
                  <TableCell id='votes45' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays45' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>46</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    영양, 소화기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>간종양</TableCell>
                  <TableCell id='votes46' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays46' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>47</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    영양, 소화기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    담석증(cholelithiasis)
                  </TableCell>
                  <TableCell id='votes47' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays47' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>48</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    영양, 소화기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    췌장염(pancreatitis)
                  </TableCell>
                  <TableCell id='votes48' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays48' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>49</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    영양, 소화기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    복부외상(abdominal TableRowauma)
                  </TableCell>
                  <TableCell id='votes49' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays49' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>50</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    영양, 소화기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    탈장(hernia)
                  </TableCell>
                  <TableCell id='votes50' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays50' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>51</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>손상·중독</TableCell>
                  <TableCell className={classes.textLeft}>
                    화상(burns)
                  </TableCell>
                  <TableCell id='votes51' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays51' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>52</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>손상·중독</TableCell>
                  <TableCell className={classes.textLeft}>
                    교상 및 자창(bites and stings)
                  </TableCell>
                  <TableCell id='votes52' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays52' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>53</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>손상·중독</TableCell>
                  <TableCell className={classes.textLeft}>
                    저온,고온환경에 의한질환
                  </TableCell>
                  <TableCell id='votes53' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays53' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>54</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>손상·중독</TableCell>
                  <TableCell className={classes.textLeft}>농약중독</TableCell>
                  <TableCell id='votes54' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays54' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>55</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>신생물</TableCell>
                  <TableCell className={classes.textLeft}>
                    유방암(breast cancer)
                  </TableCell>
                  <TableCell id='votes55' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays55' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>56</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    혈액·조혈기관질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    철분결핍성빈혈
                  </TableCell>
                  <TableCell id='votes56' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays56' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>57</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    혈액·조혈기관질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    원발성혈소판감소성자반증
                  </TableCell>
                  <TableCell id='votes57' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays57' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>58</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    혈액·조혈기관질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    급성백혈병(acute leukemia)
                  </TableCell>
                  <TableCell id='votes58' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays58' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.textCell}>59</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>심혈관질환</TableCell>
                  <TableCell className={classes.textLeft}>심부전</TableCell>
                  <TableCell id='votes59' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays59' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>60</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>심혈관질환</TableCell>
                  <TableCell className={classes.textLeft}>
                    고혈압(hypertension)
                  </TableCell>
                  <TableCell id='votes60' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays60' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>61</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>심혈관질환</TableCell>
                  <TableCell className={classes.textLeft}>
                    심실중격결손
                  </TableCell>
                  <TableCell id='votes61' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays61' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>62</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>심혈관질환</TableCell>
                  <TableCell className={classes.textLeft}>
                    협심증(angina pectoris)
                  </TableCell>
                  <TableCell id='votes62' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays62' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>63</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>심혈관질환</TableCell>
                  <TableCell className={classes.textLeft}>심근경색</TableCell>
                  <TableCell id='votes63' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays63' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>64</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>심혈관질환</TableCell>
                  <TableCell className={classes.textLeft}>
                    감염성심내막염
                  </TableCell>
                  <TableCell id='votes64' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays64' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>65</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>심혈관질환</TableCell>
                  <TableCell className={classes.textLeft}>
                    심부정맥혈전증
                  </TableCell>
                  <TableCell id='votes65' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays65' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>66</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>심혈관질환</TableCell>
                  <TableCell className={classes.textLeft}>
                    심인성 쇼크
                  </TableCell>
                  <TableCell id='votes66' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays66' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>67</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    근골격계·결합조직질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    골절(fracture)
                  </TableCell>
                  <TableCell id='votes67' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays67' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.textCell}>68</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    근골격계·결합조직질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    전신성홍반성낭창
                  </TableCell>
                  <TableCell id='votes68' className={classes.textCell}>
                    1
                  </TableCell>
                  <TableCell id='nays68' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>69</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    근골격계·결합조직질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>가와사끼병</TableCell>
                  <TableCell id='votes69' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays69' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>70</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>신경계질환</TableCell>
                  <TableCell className={classes.textLeft}>
                    급성뇌졸증(acute sTableRowoke)
                  </TableCell>
                  <TableCell id='votes70' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays70' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>71</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>신경계질환</TableCell>
                  <TableCell className={classes.textLeft}>
                    간질(epilepsy)
                  </TableCell>
                  <TableCell id='votes71' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays71' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>72</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    알레르기 및 면역질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    알레르기성비염
                  </TableCell>
                  <TableCell id='votes72' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays72' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.textCell}>73</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    알레르기 및 면역질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    천식(asthma)
                  </TableCell>
                  <TableCell id='votes73' className={classes.textCell}>
                    1
                  </TableCell>
                  <TableCell id='nays73' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>74</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    알레르기 및 면역질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>과민성폐염</TableCell>
                  <TableCell id='votes74' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays74' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>75</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    알레르기 및 면역질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    아토피성피부염
                  </TableCell>
                  <TableCell id='votes75' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays75' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>76</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    알레르기 및 면역질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    전신성아나필락시스
                  </TableCell>
                  <TableCell id='votes76' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays76' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>77</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>호흡기질환</TableCell>
                  <TableCell className={classes.textLeft}>
                    폐염(pneumonia)
                  </TableCell>
                  <TableCell id='votes77' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays77' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>78</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>호흡기질환</TableCell>
                  <TableCell className={classes.textLeft}>
                    결핵(tuberculosis)
                  </TableCell>
                  <TableCell id='votes78' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays78' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>79</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>호흡기질환</TableCell>
                  <TableCell className={classes.textLeft}>
                    폐암(lung cancer)
                  </TableCell>
                  <TableCell id='votes79' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays79' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>80</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>호흡기질환</TableCell>
                  <TableCell className={classes.textLeft}>
                    급성세기관지염
                  </TableCell>
                  <TableCell id='votes80' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays80' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>81</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>호흡기질환</TableCell>
                  <TableCell className={classes.textLeft}>
                    만성폐쇄성폐질환
                  </TableCell>
                  <TableCell id='votes81' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays81' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>82</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>호흡기질환</TableCell>
                  <TableCell className={classes.textLeft}>
                    호흡부전(respiratory failure)
                  </TableCell>
                  <TableCell id='votes82' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays82' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>83</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>호흡기질환</TableCell>
                  <TableCell className={classes.textLeft}>
                    기흉(pneumothorax)
                  </TableCell>
                  <TableCell id='votes83' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays83' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>84</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    감염 및 기생충질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    홍역(rubeola)
                  </TableCell>
                  <TableCell id='votes84' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays84' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>85</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    감염 및 기생충질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    풍진(rubella)
                  </TableCell>
                  <TableCell id='votes85' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays85' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>86</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    감염 및 기생충질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    바이러스성출혈열
                  </TableCell>
                  <TableCell id='votes86' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays86' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>87</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    감염 및 기생충질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    AIDS바이러스질환
                  </TableCell>
                  <TableCell id='votes87' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays87' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>88</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    감염 및 기생충질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    파상풍(tetanus)
                  </TableCell>
                  <TableCell id='votes88' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays88' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>89</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    감염 및 기생충질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    원내감염(nosocomial infection)
                  </TableCell>
                  <TableCell id='votes89' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays89' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>90</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    내분비·대사성질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    당뇨병(diabetes millitus)
                  </TableCell>
                  <TableCell id='votes90' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays90' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>91</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    내분비·대사성질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    갑상선중독증(thyrotoxicosis)
                  </TableCell>
                  <TableCell id='votes91' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays91' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>92</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    내분비·대사성질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    선천성갑상선기능저하증
                  </TableCell>
                  <TableCell id='votes92' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays92' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>93</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    내분비·대사성질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    갑상선암(thyroid cancer)
                  </TableCell>
                  <TableCell id='votes93' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays93' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>94</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    내분비·대사성질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    쿠싱증후군(Cushing's syndrome)
                  </TableCell>
                  <TableCell id='votes94' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays94' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>95</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    내분비·대사성질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    뇌하수체종양
                  </TableCell>
                  <TableCell id='votes95' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays95' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>96</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    신장·요로 및 남성생식기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    급성신부전(acute renal failure)
                  </TableCell>
                  <TableCell id='votes96' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays96' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>97</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    신장·요로 및 남성생식기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    만성신부전(chronic renal failure)
                  </TableCell>
                  <TableCell id='votes97' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays97' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>98</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    신장·요로 및 남성생식기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    신증후군(nephrotic syndrome)
                  </TableCell>
                  <TableCell id='votes98' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays98' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>99</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    신장·요로 및 남성생식기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    혈뇨(hematuria)
                  </TableCell>
                  <TableCell id='votes99' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays99' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>100</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    신장·요로 및 남성생식기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    단백뇨(proteinuria)
                  </TableCell>
                  <TableCell id='votes100' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays100' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>101</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    신장·요로 및 남성생식기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    신우신염(pyelonephritis)
                  </TableCell>
                  <TableCell id='votes101' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays101' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>102</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    신장·요로 및 남성생식기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    신아세포종(윌름종양,Wilms' tumor)
                  </TableCell>
                  <TableCell id='votes102' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays102' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>103</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    유전질환 및 선천성기형
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    선천성 거대결장,장관신경절증
                  </TableCell>
                  <TableCell id='votes103' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays103' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>104</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    유전질환 및 선천성기형
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    폐쇄항문,쇄항
                  </TableCell>
                  <TableCell id='votes104' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays104' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>105</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    주산기 및 신생아질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    저출생체중아,미숙아
                  </TableCell>
                  <TableCell id='votes105' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays105' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>106</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    주산기 및 신생아질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    호흡곤란증후군
                  </TableCell>
                  <TableCell id='votes106' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays106' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>107</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    주산기 및 신생아질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    신생아황달(neonatal jaundice)
                  </TableCell>
                  <TableCell id='votes107' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays107' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>108</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    눈 및 눈부속기 질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    결막염(conjuctivitis)
                  </TableCell>
                  <TableCell id='votes108' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays108' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>109</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    귀 및 유양돌기 질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    급성중이염(acute otitis media)
                  </TableCell>
                  <TableCell id='votes109' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays109' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>110</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>피부질환</TableCell>
                  <TableCell className={classes.textLeft}>
                    접촉피부염(contact dermatitis)
                  </TableCell>
                  <TableCell id='votes110' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays110' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>111</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    여성생식기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    성폭행(sexual violence)
                  </TableCell>
                  <TableCell id='votes111' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays111' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>112</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    여성생식기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    폐경후 질환
                  </TableCell>
                  <TableCell id='votes112' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays112' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>113</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    여성생식기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    기능성자궁출혈
                  </TableCell>
                  <TableCell id='votes113' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays113' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>114</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    여성생식기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>여성불임증</TableCell>
                  <TableCell id='votes114' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays114' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>115</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    여성생식기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    양성난소종양
                  </TableCell>
                  <TableCell id='votes115' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays115' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>116</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    여성생식기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>자궁근종</TableCell>
                  <TableCell id='votes116' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays116' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>117</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    여성생식기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>자궁경부암</TableCell>
                  <TableCell id='votes117' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays117' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>118</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    여성생식기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    골반염증성질환
                  </TableCell>
                  <TableCell id='votes118' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays118' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>119</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    여성생식기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    가족계획 및 불임
                  </TableCell>
                  <TableCell id='votes119' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays119' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>120</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    임신·출산 및 산욕기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>임신중독증</TableCell>
                  <TableCell id='votes120' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays120' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>121</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    임신·출산 및 산욕기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    지연임신(postterm pregnancy)
                  </TableCell>
                  <TableCell id='votes121' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays121' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>122</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    임신·출산 및 산욕기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    태반조기박리
                  </TableCell>
                  <TableCell id='votes122' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays122' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>123</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    임신·출산 및 산욕기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    전치태반(placenta previa)
                  </TableCell>
                  <TableCell id='votes123' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays123' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>124</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    임신·출산 및 산욕기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    분만시 이상출혈
                  </TableCell>
                  <TableCell id='votes124' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays124' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>125</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    임신·출산 및 산욕기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    조기진통(preterm labor)
                  </TableCell>
                  <TableCell id='votes125' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays125' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>126</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    임신·출산 및 산욕기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    산욕열(puerperal fever)
                  </TableCell>
                  <TableCell id='votes126' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays126' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>127</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>
                    임신·출산 및 산욕기질환
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    유산(abortion)
                  </TableCell>
                  <TableCell id='votes127' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays127' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>128</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>정신질환</TableCell>
                  <TableCell className={classes.textLeft}>
                    알쯔하이머병의 치매
                  </TableCell>
                  <TableCell id='votes128' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays128' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>129</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>정신질환</TableCell>
                  <TableCell className={classes.textLeft}>
                    망상형정신분열병
                  </TableCell>
                  <TableCell id='votes129' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays129' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.textCell}>130</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>정신질환</TableCell>
                  <TableCell className={classes.textLeft}>
                    양극성정감장애
                  </TableCell>
                  <TableCell id='votes130' className={classes.textCell}>
                    1
                  </TableCell>
                  <TableCell id='nays130' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>131</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>정신질환</TableCell>
                  <TableCell className={classes.textLeft}>
                    우울증에피소드
                  </TableCell>
                  <TableCell id='votes131' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays131' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>132</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>정신질환</TableCell>
                  <TableCell className={classes.textLeft}>
                    심한 스트레스에 대한 반응 및 적응장애
                  </TableCell>
                  <TableCell id='votes132' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays132' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>133</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>정신질환</TableCell>
                  <TableCell className={classes.textLeft}>
                    해리(전환)성 장애
                  </TableCell>
                  <TableCell id='votes133' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays133' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>134</TableCell>
                  <TableCell className={classes.textCell}>의학각론</TableCell>
                  <TableCell className={classes.textCell}>정신질환</TableCell>
                  <TableCell className={classes.textLeft}>
                    운동과다성장애
                  </TableCell>
                  <TableCell id='votes134' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays134' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>135</TableCell>
                  <TableCell className={classes.textCell}>
                    보건의약관계법규
                  </TableCell>
                  <TableCell className={classes.textCell}>
                    보건의약관계법규
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    의료인의 결격사유
                  </TableCell>
                  <TableCell id='votes135' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays135' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>136</TableCell>
                  <TableCell className={classes.textCell}>
                    보건의약관계법규
                  </TableCell>
                  <TableCell className={classes.textCell}>
                    보건의약관계법규
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    감염병 종류
                  </TableCell>
                  <TableCell id='votes136' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays136' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>137</TableCell>
                  <TableCell className={classes.textCell}>
                    보건의약관계법규
                  </TableCell>
                  <TableCell className={classes.textCell}>
                    보건의약관계법규
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    감염병에 대한 의사의 신고와 보고
                  </TableCell>
                  <TableCell id='votes137' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays137' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>138</TableCell>
                  <TableCell className={classes.textCell}>
                    보건의약관계법규
                  </TableCell>
                  <TableCell className={classes.textCell}>
                    보건의약관계법규
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    마약의 관리
                  </TableCell>
                  <TableCell id='votes138' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays138' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>139</TableCell>
                  <TableCell className={classes.textCell}>
                    보건의약관계법규
                  </TableCell>
                  <TableCell className={classes.textCell}>
                    보건의약관계법규
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    향정신성의약품 취급자의 의무사항
                  </TableCell>
                  <TableCell id='votes139' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays139' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>140</TableCell>
                  <TableCell className={classes.textCell}>
                    보건의약관계법규
                  </TableCell>
                  <TableCell className={classes.textCell}>
                    보건의약관계법규
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    응급환자의 진료에 관한 사항
                  </TableCell>
                  <TableCell id='votes140' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays140' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.textCell}>141</TableCell>
                  <TableCell className={classes.textCell}>
                    보건의약관계법규
                  </TableCell>
                  <TableCell className={classes.textCell}>
                    보건의약관계법규
                  </TableCell>
                  <TableCell className={classes.textLeft}>
                    의료보험 급여
                  </TableCell>
                  <TableCell id='votes141' className={classes.textCell}>
                    0
                  </TableCell>
                  <TableCell id='nays141' className={classes.textCell}>
                    0
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
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
