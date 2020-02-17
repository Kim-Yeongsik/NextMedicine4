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
      borderColor: 'grey'
    },
    headCellNum: {
      padding: '3px 5px',
      textAlign: 'center',
      fontWeight: 700,
      backgroundColor: '#ddd',
      width: '4%'
    },
    headCellName: {
      padding: '3px 5px',
      textAlign: 'center',
      fontWeight: 700,
      backgroundColor: '#ddd',
      width: '15%'
    },
    headCellNecessity: {
      padding: '3px 5px',
      textAlign: 'center',
      fontWeight: 700,
      backgroundColor: '#ddd',
      width: '58%'
    },
    headCellVote: {
      padding: '3px 5px',
      textAlign: 'center',
      fontWeight: 700,
      backgroundColor: '#ddd',
      width: '4%'
    },
    headCellVoteNull: {
      padding: '3px 5px',
      textAlign: 'center',
      fontWeight: 700,
      backgroundColor: '#ddd',
      width: '4%'
    },
    bodyCell: {
      padding: '3px 5px',
      textAlign: 'center',
      overflowWrap: 'break-word'
    },
    darkest: {
      backgroundColor: '#ccc',
      textAlign: 'center'
    },
    dark: {
      backgroundColor: '#eee',
      textAlign: 'center'
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
    value: 1
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

          <Box id='body' className={classes.mobilePadding}>
            <h1 className={classes.underLine}>국시 평가항목 체크</h1>
            <List className={classes.ul}>
              <ListItem>국시 첫 날에 출제된 항목을 선택해주세요!</ListItem>
              <ListItem>
                첫 날 시험 후 아직 출제되지 않은 항목을 공부함으로써 시간을
                효율적으로 활용할 수 있습니다.
              </ListItem>
            </List>
            <p className={classes.textLeft}>
              <Link href='/kmleElementaryReset_post' color='inherit'>
                <b>관리자: [리셋하기]</b>
              </Link>
            </p>
            <Table className={classes.table}>
              <TableHead>
                <TableRow>
                  <TableCell className={classes.headCellNum}>번호</TableCell>
                  <TableCell className={classes.headCellName}>
                    한글증상
                  </TableCell>
                  <TableCell className={classes.headCellName}>
                    영어증상
                  </TableCell>
                  <TableCell className={classes.headCellNecessity}>
                    필요성
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
                  <TableCell className={classes.bodyCell}>1</TableCell>
                  <TableCell className={classes.bodyCell}>가려움증</TableCell>
                  <TableCell className={classes.bodyCell}>pruritus</TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    가려움증은 가장 흔한 피부 증상이며 대개 피부 질환이
                    원인이다. 피부 병변을 동반하지 않는 전신 가려움증은
                    전신질환이나 정신적 원인에 의해 나타날 수 있다.
                  </TableCell>
                  <TableCell id='votes1' className={classes.bodyCell}>
                    71
                  </TableCell>
                  <TableCell id='nays1' className={classes.bodyCell}>
                    7
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>2</TableCell>
                  <TableCell className={classes.bodyCell}>
                    가슴통증/가슴불쾌감
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    chest pain/chest discomfort/tightness
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    가슴통증/가슴불쾌감이 심혈관질환 또는 호흡기질환에 의해
                    발생하는 경우에는 치명적인 결과를 초래할 수 있으므로 신속한
                    진단과 치료가 필요하다.
                  </TableCell>
                  <TableCell id='votes2' className={classes.bodyCell}>
                    21
                  </TableCell>
                  <TableCell id='nays2' className={classes.bodyCell}>
                    4
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>3</TableCell>
                  <TableCell className={classes.bodyCell}>
                    가정폭력/학대
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    family violence/child, spouse &amp; elder abuse
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    가정폭력과 학대는 피해자에게 영구적인 정서적 후유증과 심각한
                    신체손상을 유발할 수 있는 사회적 문제이다. 피해자는
                    가정폭력과 학대를 직접 표현하기 어려운 경우가 있어 이에대한
                    의학적 소견과 법적 고려사항을 숙지하고 대처 방법을 제시하는
                    것이 필요하다.
                  </TableCell>
                  <TableCell id='votes3' className={classes.bodyCell}>
                    40
                  </TableCell>
                  <TableCell id='nays3' className={classes.bodyCell}>
                    2
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>4</TableCell>
                  <TableCell className={classes.bodyCell}>객혈</TableCell>
                  <TableCell className={classes.bodyCell}>hemoptysis</TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    객혈은 심각한 증상이며 출혈량이 많을 때에는 치명적인 결과를
                    초래할 수 있어 즉각적인조치가 필요하다.
                  </TableCell>
                  <TableCell id='votes4' className={classes.bodyCell}>
                    21
                  </TableCell>
                  <TableCell id='nays4' className={classes.bodyCell}>
                    1
                  </TableCell>
                </TableRow>
                <TableRow className={classes.dark}>
                  <TableCell className={classes.bodyCell}>5</TableCell>
                  <TableCell className={classes.bodyCell}>거품 소변</TableCell>
                  <TableCell className={classes.bodyCell}>
                    foamy urine
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    거품 소변은 임상적으로는 단백뇨를 의심하는 간접적인 현상이고
                    해부학적으로는 사구체의지속적 손상을 의미하므로 사구체질환
                    진단에 중요한 소견이다.
                  </TableCell>
                  <TableCell id='votes5' className={classes.bodyCell}>
                    8
                  </TableCell>
                  <TableCell id='nays5' className={classes.bodyCell}>
                    2
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>6</TableCell>
                  <TableCell className={classes.bodyCell}>고혈압</TableCell>
                  <TableCell className={classes.bodyCell}>
                    hypertension
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    고혈압은 심혈관질환과 콩팥질환의 주요한 위험인자이다.
                    고혈압을 갖고 있는 사람은 생명을 위협하는 응급상황에
                    처하기도 한다. 고혈압에 대한 적절한 평가와 치료는 고혈압을
                    갖고 있는 사람의 건강 상태를 개선시킨다.
                  </TableCell>
                  <TableCell id='votes6' className={classes.bodyCell}>
                    18
                  </TableCell>
                  <TableCell id='nays6' className={classes.bodyCell}>
                    2
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>7</TableCell>
                  <TableCell className={classes.bodyCell}>골절/탈구</TableCell>
                  <TableCell className={classes.bodyCell}>
                    fracture/dislocation
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    골절/탈구는 모든 연령에서 발생할 수 있는 손상으로 근골격계
                    통증과 기능장애의 주된 원인이다. 혈관 및 신경 손상을 동반할
                    수 있어 합병증을 예방하기 위한 기본적인 응급처치가필요하다.
                  </TableCell>
                  <TableCell id='votes7' className={classes.bodyCell}>
                    4
                  </TableCell>
                  <TableCell id='nays7' className={classes.bodyCell}>
                    7
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>8</TableCell>
                  <TableCell className={classes.bodyCell}>
                    관절통/관절부기
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    joint pain/swelling
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    관절통이나 관절부기는 원인이 다양하며 저절로 좋아지는 경우도
                    있지만 관절 손상을 초래하여 장애를 일으키거나 치명적인
                    결과를 초래하기도 한다.
                  </TableCell>
                  <TableCell id='votes8' className={classes.bodyCell}>
                    11
                  </TableCell>
                  <TableCell id='nays8' className={classes.bodyCell}>
                    2
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>9</TableCell>
                  <TableCell className={classes.bodyCell}>구역/구토</TableCell>
                  <TableCell className={classes.bodyCell}>
                    nausea/vomiting
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    구역/구토는 소화불량과 같은 단순한 위장관질환에서부터 수술
                    후 합병증 및 전신질환에 의해서도 생길 수 있어 정확한
                    감별진단과 원인에 따른 적합한 치료가 필요하다.
                  </TableCell>
                  <TableCell id='votes9' className={classes.bodyCell}>
                    8
                  </TableCell>
                  <TableCell id='nays9' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.dark}>
                  <TableCell className={classes.bodyCell}>10</TableCell>
                  <TableCell className={classes.bodyCell}>급성복통</TableCell>
                  <TableCell className={classes.bodyCell}>
                    acute abdominal pain
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    급성복통은 흔히 접하는 증상으로 복강 내 장기 및 복강 이외의
                    질환에서도 나타날 수 있다. 응급 상황에서 수술적 치료를
                    요하는 경우도 많아 이에 대한 감별이 매우 중요하다.
                  </TableCell>
                  <TableCell id='votes10' className={classes.bodyCell}>
                    7
                  </TableCell>
                  <TableCell id='nays10' className={classes.bodyCell}>
                    1
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>11</TableCell>
                  <TableCell className={classes.bodyCell}>기분장애</TableCell>
                  <TableCell className={classes.bodyCell}>
                    mood disorder
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    애도반응과 같이 정상적인 기분변화도 있지만 일상생활에 지장을
                    주는 비정상적인 기분장애도 흔하다.
                  </TableCell>
                  <TableCell id='votes11' className={classes.bodyCell}>
                    13
                  </TableCell>
                  <TableCell id='nays11' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>12</TableCell>
                  <TableCell className={classes.bodyCell}>
                    기억력 저하
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    memory loss
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    기억력 저하는 노인에게서 흔히 관찰되는 증상이며 노령화에
                    따라 점차 유병률이 증가하고있다. 치매는 지속적인 인지장애를
                    보이는 질병으로 알츠하이머 치매와 혈관치매가 흔하다.
                  </TableCell>
                  <TableCell id='votes12' className={classes.bodyCell}>
                    13
                  </TableCell>
                  <TableCell id='nays12' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>13</TableCell>
                  <TableCell className={classes.bodyCell}>기침</TableCell>
                  <TableCell className={classes.bodyCell}>cough</TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    기침은 흔한 증상이다. 저절로 낫는 가벼운 질환부터 생명을
                    위협하는 심각한 질환까지 그원인이 매우 다양하므로 적절한
                    진단과 치료가 필요하다.
                  </TableCell>
                  <TableCell id='votes13' className={classes.bodyCell}>
                    11
                  </TableCell>
                  <TableCell id='nays13' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>14</TableCell>
                  <TableCell className={classes.bodyCell}>난청</TableCell>
                  <TableCell className={classes.bodyCell}>
                    hearing loss/deafness
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    난청의 조기진단과 회복 가능한 전음성 난청의 원인 감별이
                    필요하다.
                  </TableCell>
                  <TableCell id='votes14' className={classes.bodyCell}>
                    0
                  </TableCell>
                  <TableCell id='nays14' className={classes.bodyCell}>
                    14
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>15</TableCell>
                  <TableCell className={classes.bodyCell}>다뇨증</TableCell>
                  <TableCell className={classes.bodyCell}>polyuria</TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    다뇨증은 흔하지는 않지만 심각한 질환의 증상일 수도 있다.
                    이는 흔한 증상인 빈뇨증과 감별이 필요하다.
                  </TableCell>
                  <TableCell id='votes15' className={classes.bodyCell}>
                    3
                  </TableCell>
                  <TableCell id='nays15' className={classes.bodyCell}>
                    1
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>16</TableCell>
                  <TableCell className={classes.bodyCell}>두근거림</TableCell>
                  <TableCell className={classes.bodyCell}>
                    palpitation
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    두근거림은 다양한 원인에 의해 발생하며 정확한 병력청취와
                    적절한 검사가 필요하다.
                  </TableCell>
                  <TableCell id='votes16' className={classes.bodyCell}>
                    9
                  </TableCell>
                  <TableCell id='nays16' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>17</TableCell>
                  <TableCell className={classes.bodyCell}>
                    두드러기/혈관부종
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    urticaria/angioedema
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    두드러기는 흔하고 만성일 경우 심각한 장애를 유발할 수 있다.
                    기도 혈관부종을 동반하는경우 호흡곤란이 나타나 치명적일 수
                    있다.
                  </TableCell>
                  <TableCell id='votes17' className={classes.bodyCell}>
                    3
                  </TableCell>
                  <TableCell id='nays17' className={classes.bodyCell}>
                    1
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>18</TableCell>
                  <TableCell className={classes.bodyCell}>두통</TableCell>
                  <TableCell className={classes.bodyCell}>headache</TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    두통은 원발두통부터 두개강 내 병변까지 매우 다양한 원인이
                    있어서 적절한 감별진단이 필요하다.
                  </TableCell>
                  <TableCell id='votes18' className={classes.bodyCell}>
                    4
                  </TableCell>
                  <TableCell id='nays18' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.dark}>
                  <TableCell className={classes.bodyCell}>19</TableCell>
                  <TableCell className={classes.bodyCell}>
                    만성복통/소화불량/속쓰림
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    chronic abdominal pain/dyspepsia/ heartburn
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    만성복통/소화불량/속쓰림은 다양한 원인에 의해 발생한다. 원인
                    감별을 위해서는 병력청취와 신체진찰이 매우 중요하다.
                  </TableCell>
                  <TableCell id='votes19' className={classes.bodyCell}>
                    6
                  </TableCell>
                  <TableCell id='nays19' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>20</TableCell>
                  <TableCell className={classes.bodyCell}>목덩이</TableCell>
                  <TableCell className={classes.bodyCell}>
                    neck mass/swelling
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    목덩이는 쉽게 발견할 수 있고 흔하다. 대부분 양성덩이이지만
                    간혹 악성종양에 의한 경우가 있기 때문에 감별진단이 중요하다.
                  </TableCell>
                  <TableCell id='votes20' className={classes.bodyCell}>
                    14
                  </TableCell>
                  <TableCell id='nays20' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>21</TableCell>
                  <TableCell className={classes.bodyCell}>
                    무뇨증/핍뇨증
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    anuria/oliguria
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    요로폐쇄와 콩팥기능상실을 감별진단하고 콩팥손상을 예방하기
                    위한 신속한 치료가 필요하다.
                  </TableCell>
                  <TableCell id='votes21' className={classes.bodyCell}>
                    3
                  </TableCell>
                  <TableCell id='nays21' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>22</TableCell>
                  <TableCell className={classes.bodyCell}>무월경</TableCell>
                  <TableCell className={classes.bodyCell}>amenorrhea</TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    무월경은 비교적 흔한 증상으로 심각한 기저질환에 의해 발생할
                    수도 있다.
                  </TableCell>
                  <TableCell id='votes22' className={classes.bodyCell}>
                    14
                  </TableCell>
                  <TableCell id='nays22' className={classes.bodyCell}>
                    1
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>23</TableCell>
                  <TableCell className={classes.bodyCell}>물질남용</TableCell>
                  <TableCell className={classes.bodyCell}>
                    substance abuse
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    물질남용은 개인의 건강을 해치고 사회문제를 일으키는 흔한
                    문제이다. 남용물질을 확인하고 이에 따라 금단증상 유무와
                    합병증의 가능성을 평가하고 중독 정도에 따른 적합한
                    치료방법을 결정해야 한다.
                  </TableCell>
                  <TableCell id='votes23' className={classes.bodyCell}>
                    12
                  </TableCell>
                  <TableCell id='nays23' className={classes.bodyCell}>
                    1
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>24</TableCell>
                  <TableCell className={classes.bodyCell}>
                    미숙아/저체중 출생아
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    prematurity/low birth weight infant
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    미숙아와 저체중 출생아는 주산기질환으로 인한 신경학적 장애
                    및 사망이 증가하므로 이에대한 적절한 관리가 중요하다.
                  </TableCell>
                  <TableCell id='votes24' className={classes.bodyCell}>
                    9
                  </TableCell>
                  <TableCell id='nays24' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.dark}>
                  <TableCell className={classes.bodyCell}>25</TableCell>
                  <TableCell className={classes.bodyCell}>발달지연</TableCell>
                  <TableCell className={classes.bodyCell}>
                    developmental delay
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    소아의 정상 발달을 평가하여 발달지연을 조기에 발견하는 것이
                    중요하다. 발달단계의 체계적인 감시를 통해 조기 발견 및 조기
                    치료가 가능하다.
                  </TableCell>
                  <TableCell id='votes25' className={classes.bodyCell}>
                    6
                  </TableCell>
                  <TableCell id='nays25' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>26</TableCell>
                  <TableCell className={classes.bodyCell}>
                    발열/불명열
                  </TableCell>
                  <TableCell className={classes.bodyCell}>fever</TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    발열은 다양한 원인에 의해 나타나며 적절한 진단과 치료에 따라
                    예후가 달라진다.
                  </TableCell>
                  <TableCell id='votes26' className={classes.bodyCell}>
                    5
                  </TableCell>
                  <TableCell id='nays26' className={classes.bodyCell}>
                    1
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>27</TableCell>
                  <TableCell className={classes.bodyCell}>발작/간질</TableCell>
                  <TableCell className={classes.bodyCell}>
                    seizure/epilepsy
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    발작은 흔하며 많은 원인이 있고 다양한 환경에서 나타난다.
                    발작은 손상을 초래하며 생명을 위협하는 응급 상황에 처하기도
                    한다.
                  </TableCell>
                  <TableCell id='votes27' className={classes.bodyCell}>
                    10
                  </TableCell>
                  <TableCell id='nays27' className={classes.bodyCell}>
                    1
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>28</TableCell>
                  <TableCell className={classes.bodyCell}>
                    배뇨곤란/배뇨통
                  </TableCell>
                  <TableCell className={classes.bodyCell}>dysuria</TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    배뇨 시 불편감, 통증, 빈뇨 등은 요로감염, 요도폐쇄 등 주로
                    하부요로질환에 의해 발생하며 적절한 감별진단과 치료가
                    필요하다.
                  </TableCell>
                  <TableCell id='votes28' className={classes.bodyCell}>
                    9
                  </TableCell>
                  <TableCell id='nays28' className={classes.bodyCell}>
                    1
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>29</TableCell>
                  <TableCell className={classes.bodyCell}>
                    배벽과 서혜부 덩이/탈장
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    abdominal wall and groin mass/hernia
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    배벽과 서혜부에는 덩이 또는 탈장이 흔하게 발생한다. 배벽과
                    서혜부에 덩이 또는 탈장이발생한 사람에게 응급 수술이
                    필요한지를 감별하는 것이 매우 중요하다.
                  </TableCell>
                  <TableCell id='votes29' className={classes.bodyCell}>
                    8
                  </TableCell>
                  <TableCell id='nays29' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>30</TableCell>
                  <TableCell className={classes.bodyCell}>변비</TableCell>
                  <TableCell className={classes.bodyCell}>
                    constipation
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    변비는 매우 흔한 증상으로 다양한 기능적 또는 기질적 원인에
                    의해 발생한다.
                  </TableCell>
                  <TableCell id='votes30' className={classes.bodyCell}>
                    4
                  </TableCell>
                  <TableCell id='nays30' className={classes.bodyCell}>
                    1
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>31</TableCell>
                  <TableCell className={classes.bodyCell}>
                    보행이상/운동실조
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    gait disturbance/ataxia
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    보행이상/운동실조는 감각계 또는 신경계의 다양한 이상으로
                    발생하는 증상으로 감별진단이중요하다.
                  </TableCell>
                  <TableCell id='votes31' className={classes.bodyCell}>
                    1
                  </TableCell>
                  <TableCell id='nays31' className={classes.bodyCell}>
                    8
                  </TableCell>
                </TableRow>
                <TableRow className={classes.dark}>
                  <TableCell className={classes.bodyCell}>32</TableCell>
                  <TableCell className={classes.bodyCell}>
                    복부덩이/골반덩이
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    abdominal mass/pelvic mass
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    복부덩이/골반덩이는 주로 증상이 생겨 발견되지만 영상
                    검사에서 우연히 발견되는 경우도흔하다. 정확한 원인을
                    파악하는 것이 치료 및 경과 관찰의 여부를 결정하는데 매우
                    중요하다.
                  </TableCell>
                  <TableCell id='votes32' className={classes.bodyCell}>
                    6
                  </TableCell>
                  <TableCell id='nays32' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>33</TableCell>
                  <TableCell className={classes.bodyCell}>
                    복부팽만/복수
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    abdominal distension/ascites
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    복부팽만/복수는 소화기질환의 흔한 증상이나 심각한 복강내
                    질환 및 전신질환에 의해서도생길 수 있어 이에 대한 감별이
                    매우 중요하다.
                  </TableCell>
                  <TableCell id='votes33' className={classes.bodyCell}>
                    9
                  </TableCell>
                  <TableCell id='nays33' className={classes.bodyCell}>
                    1
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>34</TableCell>
                  <TableCell className={classes.bodyCell}>부종</TableCell>
                  <TableCell className={classes.bodyCell}>edema</TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    부종은 사이질체액이 비정상적으로 증가하여 나타나며 대부분이
                    가벼운 임상양상을 보인다.그러나 종종 심각한 기저질환에 의해
                    발생할 수 있다.
                  </TableCell>
                  <TableCell id='votes34' className={classes.bodyCell}>
                    8
                  </TableCell>
                  <TableCell id='nays34' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>35</TableCell>
                  <TableCell className={classes.bodyCell}>
                    분만/산후 관리
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    parturition/postpartum care
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    분만/산후 관리는 임신부와 태아 및 신생아의 건강을 위해 매우
                    중요하다. 조산, 비정상분만,산과 출혈 및 산욕기질환은
                    임신부와 태아의 건강을 심각하게 해칠 수 있으므로 적절한
                    평가와 치료가 필수적이다.
                  </TableCell>
                  <TableCell id='votes35' className={classes.bodyCell}>
                    3
                  </TableCell>
                  <TableCell id='nays35' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>36</TableCell>
                  <TableCell className={classes.bodyCell}>불안</TableCell>
                  <TableCell className={classes.bodyCell}>anxiety</TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    불안은 각종 스트레스에 대한 정상적 반응으로 나타날 수 있지만
                    정도나 빈도가 심할 경우일상생활에 지장을 초래 할 수 있다.
                    불안 증상은 심리적 불균형 및 신체질환에서도 발생할수 있고
                    기존 질병을 악화시킬 수도 있다.
                  </TableCell>
                  <TableCell id='votes36' className={classes.bodyCell}>
                    8
                  </TableCell>
                  <TableCell id='nays36' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.dark}>
                  <TableCell className={classes.bodyCell}>37</TableCell>
                  <TableCell className={classes.bodyCell}>불임</TableCell>
                  <TableCell className={classes.bodyCell}>
                    infertility
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    피임을 하지 않는데 1년 이내에 임신이 되지 않는 불임은 비교적
                    흔하며, 원인을 파악하기위해서는 부부 모두를 검사해야 한다.
                  </TableCell>
                  <TableCell id='votes37' className={classes.bodyCell}>
                    5
                  </TableCell>
                  <TableCell id='nays37' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>38</TableCell>
                  <TableCell className={classes.bodyCell}>
                    비루/비출혈
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    nasal discharge/epistaxis
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    비루는 감기를 포함하여 다양한 질환에서 발생하는 흔한
                    증상이다. 비출혈은 대개 원인미상으로 발생하며 자가 치료로
                    멎지만 전신질환에 의한 경우 생명에 위협을 줄 수 있다.
                  </TableCell>
                  <TableCell id='votes38' className={classes.bodyCell}>
                    0
                  </TableCell>
                  <TableCell id='nays38' className={classes.bodyCell}>
                    9
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>39</TableCell>
                  <TableCell className={classes.bodyCell}>
                    사춘기 발달이상
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    abnormal pubertal development
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    사춘기 발달이상은 단순한 정상 발달의 변이에서부터 성조숙증,
                    사춘기지연까지 다양한 원인에 의해 발생한다.
                  </TableCell>
                  <TableCell id='votes39' className={classes.bodyCell}>
                    8
                  </TableCell>
                  <TableCell id='nays39' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>40</TableCell>
                  <TableCell className={classes.bodyCell}>산전관리</TableCell>
                  <TableCell className={classes.bodyCell}>
                    prenatal care
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    출산 전 산모와 태아의 건강상태를 파악하여 건강한 임신을
                    유지하도록 한다.
                  </TableCell>
                  <TableCell id='votes40' className={classes.bodyCell}>
                    8
                  </TableCell>
                  <TableCell id='nays40' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>41</TableCell>
                  <TableCell className={classes.bodyCell}>삼킴곤란</TableCell>
                  <TableCell className={classes.bodyCell}>dysphagia</TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    삼킴곤란은 식도나 인두 또는 근육신경계 이상으로 발생하며
                    심각한 질환과 관련이 있는 증상일 수도 있다.
                  </TableCell>
                  <TableCell id='votes41' className={classes.bodyCell}>
                    8
                  </TableCell>
                  <TableCell id='nays41' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>42</TableCell>
                  <TableCell className={classes.bodyCell}>상하지통증</TableCell>
                  <TableCell className={classes.bodyCell}>
                    upper and lower exTableRowemities pain
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    상하지통증은 다양한 원인에 의해 발생한다. 특히 상하지 주요
                    혈관의 폐색은 괴사를 유발할 수 있다.
                  </TableCell>
                  <TableCell id='votes42' className={classes.bodyCell}>
                    2
                  </TableCell>
                  <TableCell id='nays42' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>43</TableCell>
                  <TableCell className={classes.bodyCell}>설사</TableCell>
                  <TableCell className={classes.bodyCell}>diarrhea</TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    설사는 흔한 증상으로 정확한 진단과 적절한 치료가 필요하다.
                  </TableCell>
                  <TableCell id='votes43' className={classes.bodyCell}>
                    9
                  </TableCell>
                  <TableCell id='nays43' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>44</TableCell>
                  <TableCell className={classes.bodyCell}>성매개감염</TableCell>
                  <TableCell className={classes.bodyCell}>
                    sexually TableRowansmitted disease
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    성매개감염은 다른 사람에게 전파되며 요도협착이나 골반내
                    염증, 불임 등의 후유증이 남을수 있으므로 적절한 치료가
                    필요하다.
                  </TableCell>
                  <TableCell id='votes44' className={classes.bodyCell}>
                    10
                  </TableCell>
                  <TableCell id='nays44' className={classes.bodyCell}>
                    1
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>45</TableCell>
                  <TableCell className={classes.bodyCell}>성폭력</TableCell>
                  <TableCell className={classes.bodyCell}>
                    sexual violence
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    성폭력은 신체손상뿐만 아니라 정신적, 사회적 장애를 가져올 수
                    있는 응급상황으로 초기에적합한 조치가 이루어져야 한다. 또한
                    법적인 문제와 연관되는 경우가 많으므로 객관적인증거를
                    수집하는 것이 매우 중요하다.
                  </TableCell>
                  <TableCell id='votes45' className={classes.bodyCell}>
                    13
                  </TableCell>
                  <TableCell id='nays45' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>46</TableCell>
                  <TableCell className={classes.bodyCell}>
                    소아열성경련
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    febrile convulsion
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    열성경련은 비교적 흔한 질환으로 다른 원인에 의한 비열성
                    경련질환과 감별이 필요하다.
                  </TableCell>
                  <TableCell id='votes46' className={classes.bodyCell}>
                    8
                  </TableCell>
                  <TableCell id='nays46' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>47</TableCell>
                  <TableCell className={classes.bodyCell}>수면장애</TableCell>
                  <TableCell className={classes.bodyCell}>
                    sleep disorder
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    대부분 불면증으로 나타나는 수면장애는 매우 흔하지만 원인도
                    다양하다. 수면장애는 일시적일 수도 있고 지속적으로 발생할 수
                    있으며, 일상생활에 부정적인 영향을 미치고 동반된신체질환을
                    악화시킬 수 있다.
                  </TableCell>
                  <TableCell id='votes47' className={classes.bodyCell}>
                    11
                  </TableCell>
                  <TableCell id='nays47' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.dark}>
                  <TableCell className={classes.bodyCell}>48</TableCell>
                  <TableCell className={classes.bodyCell}>
                    수술 전후 환자 관리
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    perioperative management
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    수술 전후 환자 관리는 수술 후 빠른 회복과 매우 밀접한 관계가
                    있다. 수술 전 및 수술 중관리를 통해 합병증을 예방하고 수술
                    후 관리로 합병증을 최소화하는 것이 매우 중요하다.
                  </TableCell>
                  <TableCell id='votes48' className={classes.bodyCell}>
                    5
                  </TableCell>
                  <TableCell id='nays48' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>49</TableCell>
                  <TableCell className={classes.bodyCell}>
                    수혈/수혈부작용
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    TableRowansfusion/TableRowansfusion side effect
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    수혈은 급성 출혈 시 활력징후를 유지하기 위해 주로 사용한다.
                    적합한 혈액 성분 제제 선택, 부작용 예방 및 부작용 발생 시
                    신속한 조치는 환자의 안전을 위하여 매우 중요하다.
                  </TableCell>
                  <TableCell id='votes49' className={classes.bodyCell}>
                    13
                  </TableCell>
                  <TableCell id='nays49' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>50</TableCell>
                  <TableCell className={classes.bodyCell}>시력장애</TableCell>
                  <TableCell className={classes.bodyCell}>
                    visual disturbance
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    급성 시력장애는 응급 치료에 따라 예후가 달라질 수 있으므로
                    빠른 진단이 필요하다. 만성시력장애는 노인과 고위험군에서
                    흔히 발생하는 건강문제로 예방이 중요하다.
                  </TableCell>
                  <TableCell id='votes50' className={classes.bodyCell}>
                    8
                  </TableCell>
                  <TableCell id='nays50' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.dark}>
                  <TableCell className={classes.bodyCell}>51</TableCell>
                  <TableCell className={classes.bodyCell}>
                    신생아 진찰
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    newborn assessment
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    신생아 진찰은 신생아 질환을 조기 진단하고 적절한 치료가
                    필요한지를 파악하는데 중요하다.
                  </TableCell>
                  <TableCell id='votes51' className={classes.bodyCell}>
                    6
                  </TableCell>
                  <TableCell id='nays51' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>52</TableCell>
                  <TableCell className={classes.bodyCell}>
                    신생아 황달
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    neonatal jaundice
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    신생아 황달은 대부분 일시적이며 합병증 없이 호전된다. 그러나
                    심각한 원인질환에 의해발생하는 경우가 있으므로 조기에 원인
                    감별과 치료가 필요하다.
                  </TableCell>
                  <TableCell id='votes52' className={classes.bodyCell}>
                    8
                  </TableCell>
                  <TableCell id='nays52' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>53</TableCell>
                  <TableCell className={classes.bodyCell}>
                    신생아/소아 발열
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    neonatal/childhood fever
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    발열은 신생아와 소아에게서 흔히 나타나는 증상으로 다양한
                    원인에 의해서 발생한다. 발열의 원인을 파악하기 위해서는
                    연령과 감염 여부를 반드시 고려해야 한다.
                  </TableCell>
                  <TableCell id='votes53' className={classes.bodyCell}>
                    5
                  </TableCell>
                  <TableCell id='nays53' className={classes.bodyCell}>
                    1
                  </TableCell>
                </TableRow>
                <TableRow className={classes.dark}>
                  <TableCell className={classes.bodyCell}>54</TableCell>
                  <TableCell className={classes.bodyCell}>실신</TableCell>
                  <TableCell className={classes.bodyCell}>syncope</TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    실신은 모든 연령에서 나타나는 흔한 증상으로 원인에 따라
                    심각한 이상을 초래할 수 있다.초기 병력청취와 정확한 진단,
                    적절한 치료로 재발과 치명적인 결과를 예방할 수 있다.
                  </TableCell>
                  <TableCell id='votes54' className={classes.bodyCell}>
                    6
                  </TableCell>
                  <TableCell id='nays54' className={classes.bodyCell}>
                    1
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>55</TableCell>
                  <TableCell className={classes.bodyCell}>심박이상</TableCell>
                  <TableCell className={classes.bodyCell}>
                    disorders of cardiac rhythm
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    심박이상은 심전도검사에서 흔하게 나타나며 임상적인 중증도가
                    다양하기 때문에 적절한 검사와 치료가 필요하다.
                  </TableCell>
                  <TableCell id='votes55' className={classes.bodyCell}>
                    5
                  </TableCell>
                  <TableCell id='nays55' className={classes.bodyCell}>
                    1
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>56</TableCell>
                  <TableCell className={classes.bodyCell}>심잡음</TableCell>
                  <TableCell className={classes.bodyCell}>
                    murmur/abnormal heart sound
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    심잡음은 심장질환의 중요한 청진소견으로 다양한 원인에 의해
                    발생하며 적절한 치료로 심각한 결과를 예방할 수 있다.
                  </TableCell>
                  <TableCell id='votes56' className={classes.bodyCell}>
                    4
                  </TableCell>
                  <TableCell id='nays56' className={classes.bodyCell}>
                    1
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>57</TableCell>
                  <TableCell className={classes.bodyCell}>심정지</TableCell>
                  <TableCell className={classes.bodyCell}>
                    cardiac arrest
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    심정지는 심폐소생술을 즉시 시행해야 하는 치명적인 상황이다.
                    회복 후 원인에 대한 적절한 치료로 재발을 예방할 수 있다.
                  </TableCell>
                  <TableCell id='votes57' className={classes.bodyCell}>
                    2
                  </TableCell>
                  <TableCell id='nays57' className={classes.bodyCell}>
                    1
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>58</TableCell>
                  <TableCell className={classes.bodyCell}>
                    알레르기반응
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    allergic reaction
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    알레르기반응은 다양한 질환, 약물 및 외부요인에 의하여
                    발생한다. 국소적인 가벼운 증상에서 치명적인 전신
                    중증반응까지 나타날 수 있다.
                  </TableCell>
                  <TableCell id='votes58' className={classes.bodyCell}>
                    4
                  </TableCell>
                  <TableCell id='nays58' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>59</TableCell>
                  <TableCell className={classes.bodyCell}>
                    어지럼/현기증
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    dizziness/vertigo
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    어지럼/현기증은 다양하고 애매한 의미로 표현하는 흔한
                    증상이다. 전정기관질환으로 인한현기증과 뇌허혈로 인한
                    실신전조, 비특이적인 어지럼을 구별해야 한다.
                  </TableCell>
                  <TableCell id='votes59' className={classes.bodyCell}>
                    4
                  </TableCell>
                  <TableCell id='nays59' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.dark}>
                  <TableCell className={classes.bodyCell}>60</TableCell>
                  <TableCell className={classes.bodyCell}>영양결핍</TableCell>
                  <TableCell className={classes.bodyCell}>
                    nuTableRowitional deficiencies
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    영양결핍은 질병을 일으키고 질병의 회복을 늦추므로 그 정도를
                    평가하고 교정하는 것이 중요하다.
                  </TableCell>
                  <TableCell id='votes60' className={classes.bodyCell}>
                    5
                  </TableCell>
                  <TableCell id='nays60' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>61</TableCell>
                  <TableCell className={classes.bodyCell}>예방접종</TableCell>
                  <TableCell className={classes.bodyCell}>
                    immunization
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    감염질환 예방을 위해서는 적절한 예방접종이 필요하다.
                    예방접종의 종류에 따라 접종대상,접종 시기, 금기증을 알아야
                    하며, 예방접종 후 발생하는 이상반응에 대해 적합한 조치를
                    할수 있는 능력이 필요하다.
                  </TableCell>
                  <TableCell id='votes61' className={classes.bodyCell}>
                    12
                  </TableCell>
                  <TableCell id='nays61' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.dark}>
                  <TableCell className={classes.bodyCell}>62</TableCell>
                  <TableCell className={classes.bodyCell}>외상</TableCell>
                  <TableCell className={classes.bodyCell}>
                    TableRowauma
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    외상은 응급상황으로 손상에 따른 적절한 응급처치와 체계적
                    치료 계획이 매우 중요하다.
                  </TableCell>
                  <TableCell id='votes62' className={classes.bodyCell}>
                    5
                  </TableCell>
                  <TableCell id='nays62' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>63</TableCell>
                  <TableCell className={classes.bodyCell}>외음부덩이</TableCell>
                  <TableCell className={classes.bodyCell}>vulva mass</TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    외음부덩이는 흔한 증상으로 원인 감별과 적합한 치료가
                    필요하다.
                  </TableCell>
                  <TableCell id='votes63' className={classes.bodyCell}>
                    14
                  </TableCell>
                  <TableCell id='nays63' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>64</TableCell>
                  <TableCell className={classes.bodyCell}>요실금</TableCell>
                  <TableCell className={classes.bodyCell}>
                    urinary incontinence
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    요실금은 원인질환 감별이 중요하며 삶의 질에 미치는 영향이
                    매우 크므로 적극적인 치료가필요하다.
                  </TableCell>
                  <TableCell id='votes64' className={classes.bodyCell}>
                    1
                  </TableCell>
                  <TableCell id='nays64' className={classes.bodyCell}>
                    6
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>65</TableCell>
                  <TableCell className={classes.bodyCell}>월경통</TableCell>
                  <TableCell className={classes.bodyCell}>
                    dysmenorrhea
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    월경통은 매우 흔하며 종종 골반내질환에 의하여 유발될 수
                    있다.
                  </TableCell>
                  <TableCell id='votes65' className={classes.bodyCell}>
                    2
                  </TableCell>
                  <TableCell id='nays65' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>66</TableCell>
                  <TableCell className={classes.bodyCell}>
                    유방덩이/통증
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    breast mass/mastalgia
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    유방덩이와 통증은 흔한 증상으로 원인 감별이 필요하다. 특히
                    중년 여성뿐만 아니라 젊은여성의 유방암 빈도가 증가하고 있어
                    유방암에 대한 선별검사가 중요하다.
                  </TableCell>
                  <TableCell id='votes66' className={classes.bodyCell}>
                    10
                  </TableCell>
                  <TableCell id='nays66' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.dark}>
                  <TableCell className={classes.bodyCell}>67</TableCell>
                  <TableCell className={classes.bodyCell}>
                    의무기록 및 진단서 작성
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    medical record and medical certificate
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    의료행위에는 의료진 사이의 의사소통과 자료 보관을 위해
                    객관적이고 효율적인 의무기록이필요하다. 여러 가지 사회적
                    필요에 의해 증명서가 요구되는데, 특히 사망진단서는
                    법률적또는 인구통계적 필요에 의해 정확하고 표준화된 방법으로
                    기술하는 것이 필수적이다.
                  </TableCell>
                  <TableCell id='votes67' className={classes.bodyCell}>
                    5
                  </TableCell>
                  <TableCell id='nays67' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>68</TableCell>
                  <TableCell className={classes.bodyCell}>
                    의식변화/혼수
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    change of consciousness/coma
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    의식변화/혼수는 중대한 결과를 초래할 수 있는 응급상황으로
                    정확한 진단과 신속한 처치가동시에 이루어져야 한다.
                  </TableCell>
                  <TableCell id='votes68' className={classes.bodyCell}>
                    3
                  </TableCell>
                  <TableCell id='nays68' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>69</TableCell>
                  <TableCell className={classes.bodyCell}>
                    임종과 애도
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    dying patient &amp; bereavement
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    의사는 불치병 또는 치료를 할 수 없는 질환으로 사망하는
                    경우와 직면한다. 이러한 상황에서 의사는 환자의 고통과 불편한
                    증상을 조절해주고, 환자 및 가족과 공감하면서 편안함을주어야
                    한다. 또한 임종 후 가족의 애도반응에 대처할 수 있어야 한다.
                  </TableCell>
                  <TableCell id='votes69' className={classes.bodyCell}>
                    2
                  </TableCell>
                  <TableCell id='nays69' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>70</TableCell>
                  <TableCell className={classes.bodyCell}>
                    자살행동/시도
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    suicidal behavior/attempt
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    우리나라 자살률은 OECD국가 중 수년간 1위를 계속 유지할
                    정도로 사회적으로 큰 문제가되고 있다. 자살행동/시도는 심각한
                    정신과적 응급 상황 중 하나로 자살위험 평가 및 적절한
                    치료개입이 필수적이다.
                  </TableCell>
                  <TableCell id='votes70' className={classes.bodyCell}>
                    3
                  </TableCell>
                  <TableCell id='nays70' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>71</TableCell>
                  <TableCell className={classes.bodyCell}>
                    저혈압/쇼크
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    hypotension/shock
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    저혈압/쇼크는 응급실에서 자주 경험하는 위중한 상황이다.
                    적절한 응급처치는 치명적인 결과를 예방할 수 있다.
                  </TableCell>
                  <TableCell id='votes71' className={classes.bodyCell}>
                    2
                  </TableCell>
                  <TableCell id='nays71' className={classes.bodyCell}>
                    1
                  </TableCell>
                </TableRow>
                <TableRow className={classes.dark}>
                  <TableCell className={classes.bodyCell}>72</TableCell>
                  <TableCell className={classes.bodyCell}>
                    전신염증반응증후군/패혈증
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    systemic inflammatory response syndrome/sepsis
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    전신염증반응증후군은 감염 혹은 비감염 원인에 의한
                    전신염증질환으로, 패혈쇼크로 진행하면 치사율이 높으므로 조기
                    발견 및 적극적 치료가 매우 중요하다.
                  </TableCell>
                  <TableCell id='votes72' className={classes.bodyCell}>
                    7
                  </TableCell>
                  <TableCell id='nays72' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.dark}>
                  <TableCell className={classes.bodyCell}>73</TableCell>
                  <TableCell className={classes.bodyCell}>정신증</TableCell>
                  <TableCell className={classes.bodyCell}>psychosis</TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    정신증은 매우 심각하며 많은 장애를 초래할 수 있는 정신
                    증상으로, 여러 질환에서 나타날수 있지만 정신분열병에서 가장
                    많다. 정신증이 지속되면 정상적인 사회생활을 하는데 어려움을
                    겪게 되며, 때로는 생명의 위협을 초래할 수 있다.
                  </TableCell>
                  <TableCell id='votes73' className={classes.bodyCell}>
                    5
                  </TableCell>
                  <TableCell id='nays73' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>74</TableCell>
                  <TableCell className={classes.bodyCell}>젖흐름증</TableCell>
                  <TableCell className={classes.bodyCell}>
                    galactorrhea
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    젖흐름증은 젖을 먹이는 여성에게는 생리적인 현상이지만, 수유
                    여성이 아닌 경우에는 병적인 원인에 의해 발생한다.
                  </TableCell>
                  <TableCell id='votes74' className={classes.bodyCell}>
                    13
                  </TableCell>
                  <TableCell id='nays74' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.dark}>
                  <TableCell className={classes.bodyCell}>75</TableCell>
                  <TableCell className={classes.bodyCell}>
                    주의력결핍과다활동장애/학습장애
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    attention deficit hyperactivity disorder (ADHD
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    주의력결핍과다활동장애와 학습장애는 조기 개입을 통하여 증상
                    개선이 가능하나 방치할 경우 인지 발달이나 학습 능력이 저하될
                    수 있고 청소년·성인기에도 증상이 지속되거나 다른정신 질환과
                    행동 증상을 유발할 수 있다.
                  </TableCell>
                  <TableCell id='votes75' className={classes.bodyCell}>
                    6
                  </TableCell>
                  <TableCell id='nays75' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>76</TableCell>
                  <TableCell className={classes.bodyCell}>중독</TableCell>
                  <TableCell className={classes.bodyCell}>poisoning</TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    약물중독은 흔할 뿐 아니라 치명적일 수도 있다. 사고로 생긴
                    약물중독은 특히 어린이에게흔하다.
                  </TableCell>
                  <TableCell id='votes76' className={classes.bodyCell}>
                    5
                  </TableCell>
                  <TableCell id='nays76' className={classes.bodyCell}>
                    2
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>77</TableCell>
                  <TableCell className={classes.bodyCell}>질분비물</TableCell>
                  <TableCell className={classes.bodyCell}>
                    vaginal discharge
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    질분비물은 여성에게 흔한 증상이며 원인 감별과 적합한 치료가
                    필요하다.
                  </TableCell>
                  <TableCell id='votes77' className={classes.bodyCell}>
                    10
                  </TableCell>
                  <TableCell id='nays77' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>78</TableCell>
                  <TableCell className={classes.bodyCell}>질출혈</TableCell>
                  <TableCell className={classes.bodyCell}>
                    vaginal bleeding
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    비정상적 질출혈은 초경 전 또는 폐경 후에 질출혈이 있거나,
                    월경량과 양상이 정상이 아닌경우를 의미하며 정상 월경과의
                    구별이 중요하다.
                  </TableCell>
                  <TableCell id='votes78' className={classes.bodyCell}>
                    9
                  </TableCell>
                  <TableCell id='nays78' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.dark}>
                  <TableCell className={classes.bodyCell}>79</TableCell>
                  <TableCell className={classes.bodyCell}>청색증</TableCell>
                  <TableCell className={classes.bodyCell}>cyanosis</TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    청색증은 혈색소 이상과 저산소혈증에 의해 피부와 점막이
                    푸르게 나타나는 증상이다. 청색증은 심각한 기저질환에 의해
                    발생할 수 있어 감별진단과 그에 따른 긴급한 치료가 필요할수
                    있다.
                  </TableCell>
                  <TableCell id='votes79' className={classes.bodyCell}>
                    7
                  </TableCell>
                  <TableCell id='nays79' className={classes.bodyCell}>
                    1
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>80</TableCell>
                  <TableCell className={classes.bodyCell}>
                    체중감소/식욕부진
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    weight loss/anorexia
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    체중감소/식욕부진은 심각한 기저질환의 증상일 수 있다.
                    기저질환 감별에는 정신의학적인문제를 함께 고려해야 한다.
                  </TableCell>
                  <TableCell id='votes80' className={classes.bodyCell}>
                    4
                  </TableCell>
                  <TableCell id='nays80' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>81</TableCell>
                  <TableCell className={classes.bodyCell}>
                    체중증가/비만
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    weight gain/obesity
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    비만은 복잡한 여러 가지 요인에 의해 발생하는 만성질환이며,
                    많은 심각한 질병의 위험인자이다.
                  </TableCell>
                  <TableCell id='votes81' className={classes.bodyCell}>
                    3
                  </TableCell>
                  <TableCell id='nays81' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>82</TableCell>
                  <TableCell className={classes.bodyCell}>출혈경향</TableCell>
                  <TableCell className={classes.bodyCell}>
                    bleeding tendency
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    출혈경향은 출혈부위와 출혈량에 따라 치명적이므로 원인질환의
                    감별진단과 그에 따른 치료가 필요하다.
                  </TableCell>
                  <TableCell id='votes82' className={classes.bodyCell}>
                    8
                  </TableCell>
                  <TableCell id='nays82' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.dark}>
                  <TableCell className={classes.bodyCell}>83</TableCell>
                  <TableCell className={classes.bodyCell}>충혈눈</TableCell>
                  <TableCell className={classes.bodyCell}>red eye</TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    충혈눈은 대부분 경과가 양호하다. 심각한 시력손상을 초래하는
                    질환은 미리 감별하여 즉각적인 조치가 필요하다.
                  </TableCell>
                  <TableCell id='votes83' className={classes.bodyCell}>
                    7
                  </TableCell>
                  <TableCell id='nays83' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>84</TableCell>
                  <TableCell className={classes.bodyCell}>토혈</TableCell>
                  <TableCell className={classes.bodyCell}>
                    hematemesis
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    토혈은 심각한 합병증을 유발할 수 있으며 사망에 이르게 할 수
                    있다. 실혈량 평가, 출혈 원인 감별, 적절한 응급 처치 및
                    치료는 매우 중요하다.
                  </TableCell>
                  <TableCell id='votes84' className={classes.bodyCell}>
                    2
                  </TableCell>
                  <TableCell id='nays84' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>85</TableCell>
                  <TableCell className={classes.bodyCell}>
                    팔다리 근력약화/마비
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    weakness/paralysis/palsy/paresis
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    팔다리 근력약화/마비는 다양한 원인에 의해 나타나는 증상으로
                    세심한 병력청취, 신체진찰과 신경학적 검사를 이용한 원인
                    감별이 중요하다.
                  </TableCell>
                  <TableCell id='votes85' className={classes.bodyCell}>
                    3
                  </TableCell>
                  <TableCell id='nays85' className={classes.bodyCell}>
                    5
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>86</TableCell>
                  <TableCell className={classes.bodyCell}>폐경</TableCell>
                  <TableCell className={classes.bodyCell}>menopause</TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    폐경은 대부분 자연 폐경이지만 다른 원인에 의해서도 발생할 수
                    있다. 평균 수명 증가에따라 여성의 삶의 질을 향상시키기
                    위하여 폐경기 관리는 중요하다.
                  </TableCell>
                  <TableCell id='votes86' className={classes.bodyCell}>
                    9
                  </TableCell>
                  <TableCell id='nays86' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>87</TableCell>
                  <TableCell className={classes.bodyCell}>피로</TableCell>
                  <TableCell className={classes.bodyCell}>fatigue</TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    피로는 흔한 증상이며 만성피로는 삶의 질을 저하시키기 때문에
                    적절한 조치가 필요하다.피로를 호소하는 사람에게 적절한
                    병력청취와 진찰을 통해 전신질환에 의한 경우를 감별할필요가
                    있다.
                  </TableCell>
                  <TableCell id='votes87' className={classes.bodyCell}>
                    4
                  </TableCell>
                  <TableCell id='nays87' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>88</TableCell>
                  <TableCell className={classes.bodyCell}>피부발진</TableCell>
                  <TableCell className={classes.bodyCell}>skin rash</TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    피부발진은 흔한 증상으로 전신질환에 의해서도 발생할 수 있다.
                  </TableCell>
                  <TableCell id='votes88' className={classes.bodyCell}>
                    2
                  </TableCell>
                  <TableCell id='nays88' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>89</TableCell>
                  <TableCell className={classes.bodyCell}>
                    피부창상관리
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    skin wound care
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    피부창상관리는 감염과 심부조직의 손상 여부를 확인하여야
                    한다. 특히 물린 상처는 세심한주의가 필요하다.
                  </TableCell>
                  <TableCell id='votes89' className={classes.bodyCell}>
                    1
                  </TableCell>
                  <TableCell id='nays89' className={classes.bodyCell}>
                    4
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>90</TableCell>
                  <TableCell className={classes.bodyCell}>피임</TableCell>
                  <TableCell className={classes.bodyCell}>
                    conTableRowaception
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    피임의 종류와 사용방법을 상담할 수 있다.
                  </TableCell>
                  <TableCell id='votes90' className={classes.bodyCell}>
                    14
                  </TableCell>
                  <TableCell id='nays90' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>91</TableCell>
                  <TableCell className={classes.bodyCell}>항문통증</TableCell>
                  <TableCell className={classes.bodyCell}>
                    anorectal pain
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    항문통증의 원인은 대부분 치료가 가능하며 조기 발견과 치료는
                    이환을 감소시킨다.
                  </TableCell>
                  <TableCell id='votes91' className={classes.bodyCell}>
                    3
                  </TableCell>
                  <TableCell id='nays91' className={classes.bodyCell}>
                    5
                  </TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className={classes.bodyCell}>92</TableCell>
                  <TableCell className={classes.bodyCell}>허리통증</TableCell>
                  <TableCell className={classes.bodyCell}>
                    low back pain
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    허리통증은 흔한 증상으로 대부분 저절로 호전되나 신경증상을
                    보이는 경우에는 정확한 진단과 치료가 필요하다.
                  </TableCell>
                  <TableCell id='votes92' className={classes.bodyCell}>
                    1
                  </TableCell>
                  <TableCell id='nays92'>5</TableCell>
                </TableRow>
                <TableRow className={classes.dark}>
                  <TableCell className={classes.bodyCell}>93</TableCell>
                  <TableCell className={classes.bodyCell}>혈뇨</TableCell>
                  <TableCell className={classes.bodyCell}>hematuria</TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    혈뇨는 사구체질환과 비사구체질환에 의하여 발생할 수 있으며
                    적절한 감별진단이 필요하다.
                  </TableCell>
                  <TableCell id='votes93' className={classes.bodyCell}>
                    6
                  </TableCell>
                  <TableCell id='nays93' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>94</TableCell>
                  <TableCell className={classes.bodyCell}>
                    혈변/흑색변
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    hematochezia/melena
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    혈변/흑색변은 위장관의 다양한 질환에 의해 발생하며 출혈량이
                    많은 경우 생명을 위협하는응급상황에 처하게 된다.
                    혈변/흑색변의 원인질환과 출혈 부위를 파악하여 적시 적절한
                    치료 방침을 세우는 것이 필요하다.
                  </TableCell>
                  <TableCell id='votes94' className={classes.bodyCell}>
                    10
                  </TableCell>
                  <TableCell id='nays94' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.dark}>
                  <TableCell className={classes.bodyCell}>95</TableCell>
                  <TableCell className={classes.bodyCell}>호흡곤란</TableCell>
                  <TableCell className={classes.bodyCell}>dyspnea</TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    호흡곤란은 숨쉬기가 힘든 주관적인 표현으로 흔하게 호소하는
                    증상이다. 급성 호흡곤란은때로 위중한 상황이므로 신속한
                    진단과 치료가 필요하다.
                  </TableCell>
                  <TableCell id='votes95' className={classes.bodyCell}>
                    7
                  </TableCell>
                  <TableCell id='nays95' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>96</TableCell>
                  <TableCell className={classes.bodyCell}>
                    화상/한랭손상
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    burn/cold injury
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    화상, 장시간의 고온 또는 추위 노출은 심할 경우 생명에 위협을
                    초래하거나 심각한 합병증을 일으킨다.
                  </TableCell>
                  <TableCell id='votes96' className={classes.bodyCell}>
                    15
                  </TableCell>
                  <TableCell id='nays96' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>97</TableCell>
                  <TableCell className={classes.bodyCell}>황달</TableCell>
                  <TableCell className={classes.bodyCell}>jaundice</TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    황달은 여러 가지 원인에 의해 나타나는 증상으로 조기 진단 및
                    치료는 환자의 예후에 큰영향을 미친다. 특히 심각한 간기능
                    장애를 동반할 수 있어 원인에 대한 감별은 매우 중요하다.
                  </TableCell>
                  <TableCell id='votes97' className={classes.bodyCell}>
                    9
                  </TableCell>
                  <TableCell id='nays97' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.dark}>
                  <TableCell className={classes.bodyCell}>98</TableCell>
                  <TableCell className={classes.bodyCell}>
                    감염병 유행과 관리
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    outbreak management
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    의사는 감염병 유행 발견과 관리에 중요한 역할을 수행한다.
                    의사는 감염병을 확인, 감염병유행을 조기에 인지하여
                    보건당국에 신고하고, 유행확산 방지를 위해 보건당국과 긴밀히
                    협조한다.
                  </TableCell>
                  <TableCell id='votes98' className={classes.bodyCell}>
                    6
                  </TableCell>
                  <TableCell id='nays98' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.dark}>
                  <TableCell className={classes.bodyCell}>99</TableCell>
                  <TableCell className={classes.bodyCell}>
                    건강과 건강결정인자
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    health and its determinants
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    건강 및 질병에 대한 정의와 개념은 환자에 대한 의료서비스
                    제공뿐 아니라 지역사회 건강수준을 이해하는데 기본이 된다.
                    사람들의 건강에 대한 요구는 계속 확대되고 있으며, 생의학적
                    요인 이외의 건강결정인자도 중요하다.
                  </TableCell>
                  <TableCell id='votes99' className={classes.bodyCell}>
                    7
                  </TableCell>
                  <TableCell id='nays99' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.dark}>
                  <TableCell className={classes.bodyCell}>100</TableCell>
                  <TableCell className={classes.bodyCell}>
                    인구집단의 질병예방과 건강증진
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    disease prevention and health promotion
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    질병예방은 지역사회 수준의 예방과 중재에 의해서 영향을
                    받는다. 의사는 지역사회 중재를촉진하고, 각 개인에게 필요한
                    질병예방 및 건강증진 방법을 지도한다.
                  </TableCell>
                  <TableCell id='votes100' className={classes.bodyCell}>
                    7
                  </TableCell>
                  <TableCell id='nays100' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>101</TableCell>
                  <TableCell className={classes.bodyCell}>
                    인구집단 보건관리
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    healthcare management
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    의사는 국민건강을 효과적으로 관리하기 위해서 양질의
                    보건의료가 가져야 하는 특성과 우리나라 보건의료체계를
                    이해하는 것이 중요하다.
                  </TableCell>
                  <TableCell id='votes101' className={classes.bodyCell}>
                    8
                  </TableCell>
                  <TableCell id='nays101' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>102</TableCell>
                  <TableCell className={classes.bodyCell}>
                    인구집단의 건강상태 측정과 평가
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    assessing and measuring health status at the population
                    level
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    지역사회 건강수준은 그 지역사회에서 공중보건사업을 계획하고
                    평가하는데 필요하며, 개인과 지역사회 건강요구에 맞는
                    프로그램을 선택하고 수행하는데 사용한다. 의사는 국가
                    공중보건체계에서 질병감시의 핵심적 역할을 수행하며, 지역사회
                    의료수요와 요구를 평가하고해결하는데 주도적 역할을 한다.
                  </TableCell>
                  <TableCell id='votes102' className={classes.bodyCell}>
                    9
                  </TableCell>
                  <TableCell id='nays102' className={classes.bodyCell}>
                    1
                  </TableCell>
                </TableRow>
                <TableRow className={classes.dark}>
                  <TableCell className={classes.bodyCell}>103</TableCell>
                  <TableCell className={classes.bodyCell}>
                    업무관련 건강문제
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    work-related health issues
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    업무로 인해 질병 및 손상이 발생하고 장애나 사망으로 이어질
                    수 있다. 의사는 업무와 관련한 질병이나 손상을 예방, 진단 및
                    관리한다.
                  </TableCell>
                  <TableCell id='votes103' className={classes.bodyCell}>
                    7
                  </TableCell>
                  <TableCell id='nays103' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.dark}>
                  <TableCell className={classes.bodyCell}>104</TableCell>
                  <TableCell className={classes.bodyCell}>
                    환경과 건강
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    environment and health
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    환경오염은 임상 증상 및 질병의 원인이 될 수 있다. 의사는
                    환경오염이 개인 및 인구집단의 건강에 미치는 영향을 평가하고
                    적절한 예방 및 관리 조치를 취한다.
                  </TableCell>
                  <TableCell id='votes104' className={classes.bodyCell}>
                    7
                  </TableCell>
                  <TableCell id='nays104' className={classes.bodyCell}>
                    0
                  </TableCell>
                </TableRow>
                <TableRow className={classes.darkest}>
                  <TableCell className={classes.bodyCell}>105</TableCell>
                  <TableCell className={classes.bodyCell}>
                    의료 법규와 윤리
                  </TableCell>
                  <TableCell className={classes.bodyCell}>
                    medical law and ethics
                  </TableCell>
                  <TableCell className={classes.textLeft} padding='checkbox'>
                    의사는 적법하고 윤리적인 의료행위를 하기 위하여 의료인이
                    알아야 할 법규와 윤리 원칙을이해하고 이를 준수한다.
                  </TableCell>
                  <TableCell id='votes105' className={classes.bodyCell}>
                    13
                  </TableCell>
                  <TableCell id='nays105' className={classes.bodyCell}>
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
