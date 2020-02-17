import {
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
      paddingBottom: '0.2em'
    },
    ul: {
      display: 'block',
      listStyleType: '1em',
      marginBlockStart: '1em',
      marginBlockEnd: '1em'
    },
    li: {
      display: 'list-item',
      lineHeight: 1.6,
      fontSize: '14px'
    },
    liRed: {
      display: 'list-item',
      lineHeight: 1.6,
      fontSize: '14px',
      color: '#f00'
    },
    DistributionNum: {
      width: '20%'
    },
    DistributionIMG: {
      width: '80%'
    },
    input: {
      width: '300px',
      boarder: 'solid 1px #999',
      borderRadius: '3px'
    },
    table: {
      borderCollapse: 'collapse',
      tableLayout: 'fixed',
      display: 'table',
      borderSpacing: '2px',
      borderColor: 'grey',
      padding: '3px 5px'
    },
    headCell: {
      padding: '3px 5px',
      textAlign: 'center',
      fontWeight: 700,
      backgroundColor: '#ddd',
      width: '33%'
    },
    Row: {
      display: 'table-row',
      verticalAlign: 'inherit',
      borderColor: 'inherit'
    },
    bodyCell: {
      padding: '3px 5px',
      textAlign: 'center'
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
    value: 0
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
          </Grid>

          <div id='body' className={classes.mobilePadding}>
            <h2 className={classes.underLine}>T점수 변환기</h2>
            <List className={classes.ul}>
              <ListItem className={classes.li}>
                회원 여러분이 입력해주신 내용을 바탕으로 T점수를 계산해드립니다.
              </ListItem>
            </List>

            <h2 className={classes.underLine}>2019 넥메 국시 통계</h2>
            <List className={classes.ul}>
              <ListItem className={classes.li}>참가자: 1156</ListItem>
              <ListItem className={classes.li}>
                평균점수: 284.8 ± 21.0 / 360 <span>(79.12 ± 5.83 / 100)</span>
              </ListItem>
              <ListItem className={classes.li}>
                Bias 보정: 283.0 ± 25.9 / 360 <span>(78.61 ± 7.21 / 100)</span>
              </ListItem>
            </List>

            <h2 className={classes.underLine}>내 가채점 결과</h2>
            <List className={classes.ul}>
              <ListItem className={classes.liRed}>
                실제 국시 응시 여부를 선택해주세요.
              </ListItem>
              <ListItem className={classes.li}>
                <input type='radio' name='isTest' value='0' id='isTest' />
                <label>응시</label>
                <input type='radio' name='isTest' value='1' id='isTest' />
                <label>응시안함</label>
              </ListItem>
              <ListItem className={classes.liRed}>
                한번 입력하면 수정 불가능합니다! 360점 만점 가채점 결과 입력.
              </ListItem>
              <ListItem className={classes.li}>
                맞춘 문항 수: 360개 중에 <input type='number' name='raw' />개
              </ListItem>
              <ListItem className={classes.liRed}>
                수험번호는 비공개되며 허위정보 감별용으로만 이용됩니다.
                허위입력시 사이트 이용에 제한을 받을 수 있습니다.
              </ListItem>
              <ListItem className={classes.li}>
                수험번호:{' '}
                <input type='text' name='number' className={classes.input} />
              </ListItem>
              <ListItem className={classes.li}>
                <input type='submit' value='제출하기(제출후수정불가)' />
              </ListItem>
            </List>

            <h2 className={classes.underLine}>넥메 분포도</h2>
            <Grid item xs={12} md={5}>
              <Table>
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.DistributionNum}>
                      350-354
                    </TableCell>
                    <TableCell>
                      <img height='10' width='2' />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.DistributionNum}>
                      345-349
                    </TableCell>
                    <TableCell>
                      <img height='10' width='0' />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.DistributionNum}>
                      340-344
                    </TableCell>
                    <TableCell>
                      <img height='10' width='2' />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.DistributionNum}>
                      335-339
                    </TableCell>
                    <TableCell>
                      <img height='10' width='0' />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.DistributionNum}>
                      330-334
                    </TableCell>
                    <TableCell>
                      <img height='10' width='7' />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.DistributionNum}>
                      325-329
                    </TableCell>
                    <TableCell>
                      <img height='10' width='25' />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.DistributionNum}>
                      320-324
                    </TableCell>
                    <TableCell>
                      <img height='10' width='40' />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.DistributionNum}>
                      315-319
                    </TableCell>
                    <TableCell>
                      <img height='10' width='74' />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.DistributionNum}>
                      310-314
                    </TableCell>
                    <TableCell>
                      <img height='10' width='86' />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.DistributionNum}>
                      305-309
                    </TableCell>
                    <TableCell>
                      <img height='10' width='109' />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.DistributionNum}>
                      300-304
                    </TableCell>
                    <TableCell>
                      <img height='10' width='150' />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.DistributionNum}>
                      295-299
                    </TableCell>
                    <TableCell>
                      <img height='10' width='144' />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.DistributionNum}>
                      290-294
                    </TableCell>
                    <TableCell>
                      <img height='10' width='200' />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.DistributionNum}>
                      285-289
                    </TableCell>
                    <TableCell>
                      <img height='10' width='144' />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.DistributionNum}>
                      280-284
                    </TableCell>
                    <TableCell>
                      <img height='10' width='175' />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.DistributionNum}>
                      275-279
                    </TableCell>
                    <TableCell>
                      <img height='10' width='155' />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.DistributionNum}>
                      270-274
                    </TableCell>
                    <TableCell>
                      <img height='10' width='152' />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.DistributionNum}>
                      265-269
                    </TableCell>
                    <TableCell>
                      <img height='10' width='109' />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.DistributionNum}>
                      260-264
                    </TableCell>
                    <TableCell>
                      <img height='10' width='112' />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.DistributionNum}>
                      255-259
                    </TableCell>
                    <TableCell>
                      <img height='10' width='66' />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.DistributionNum}>
                      250-254
                    </TableCell>
                    <TableCell>
                      <img height='10' width='68' />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.DistributionNum}>
                      245-249
                    </TableCell>
                    <TableCell>
                      <img height='10' width='30' />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.DistributionNum}>
                      240-244
                    </TableCell>
                    <TableCell>
                      <img height='10' width='21' />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.DistributionNum}>
                      235-239
                    </TableCell>
                    <TableCell>
                      <img height='10' width='25' />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.DistributionNum}>
                      230-234
                    </TableCell>
                    <TableCell>
                      <img height='10' width='8' />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.DistributionNum}>
                      225-229
                    </TableCell>
                    <TableCell>
                      <img height='10' width='3' />
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.DistributionNum}>
                      220-224
                    </TableCell>
                    <TableCell>
                      <img height='10' width='3' />
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>

            <h2 className={classes.underLine}>넥메 등급컷</h2>
            <Grid item xs={12} md={5}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.headCell}>등급</TableCell>
                    <TableCell className={classes.headCell}>점수</TableCell>
                    <TableCell className={classes.headCell} padding='checkbox'>
                      Bias 보정
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.bodyCell}>1등급</TableCell>
                    <TableCell className={classes.bodyCell}>
                      312점 이상
                    </TableCell>
                    <TableCell className={classes.bodyCell} padding='checkbox'>
                      316.3점 이상
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.bodyCell}>2등급</TableCell>
                    <TableCell className={classes.bodyCell}>
                      303점 이상
                    </TableCell>
                    <TableCell className={classes.bodyCell} padding='checkbox'>
                      304.8점 이상
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.bodyCell}>3등급</TableCell>
                    <TableCell className={classes.bodyCell}>
                      297점 이상
                    </TableCell>
                    <TableCell className={classes.bodyCell} padding='checkbox'>
                      296.6점 이상
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.bodyCell}>4등급</TableCell>
                    <TableCell className={classes.bodyCell}>
                      291점 이상
                    </TableCell>
                    <TableCell className={classes.bodyCell} padding='checkbox'>
                      289.6점 이상
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.bodyCell}>5등급</TableCell>
                    <TableCell className={classes.bodyCell}>
                      285점 이상
                    </TableCell>
                    <TableCell className={classes.bodyCell} padding='checkbox'>
                      283.0점 이상
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.bodyCell}>6등급</TableCell>
                    <TableCell className={classes.bodyCell}>
                      280점 이상
                    </TableCell>
                    <TableCell className={classes.bodyCell} padding='checkbox'>
                      276.4점 이상
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.bodyCell}>7등급</TableCell>
                    <TableCell className={classes.bodyCell}>
                      273점 이상
                    </TableCell>
                    <TableCell className={classes.bodyCell} padding='checkbox'>
                      269.4점 이상
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.bodyCell}>8등급</TableCell>
                    <TableCell className={classes.bodyCell}>
                      266점 이상
                    </TableCell>
                    <TableCell className={classes.bodyCell} padding='checkbox'>
                      261.2점 이상
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.bodyCell}>9등급</TableCell>
                    <TableCell className={classes.bodyCell}>
                      257점 이상
                    </TableCell>
                    <TableCell className={classes.bodyCell} padding='checkbox'>
                      249.8점 이상
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>

            <h2 className={classes.underLine}>T점수와 백분위</h2>
            <List>
              <ListItem className={classes.li}>
                T점수는 평균=160, 표준편차=10으로 표준화시킨 점수를 말합니다.
              </ListItem>
              <ListItem className={classes.li}>
                [내 T점수] = 160 + 10 * ([내 원점수] - [전체 평균]) / [전체
                표준편차]
              </ListItem>
              <ListItem className={classes.li}>
                응시자의 점수가 정규분포를 이룬다고 가정하면 아래와 같이 T점수로
                백분위를 추정할 수 있습니다.
              </ListItem>
            </List>
            <Grid item xs={12} md={6}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.headCell}>T</TableCell>
                    <TableCell className={classes.headCell}>%</TableCell>
                    <TableCell className={classes.headCell}>T</TableCell>
                    <TableCell className={classes.headCell}>%</TableCell>
                    <TableCell className={classes.headCell}>T</TableCell>
                    <TableCell className={classes.headCell}>%</TableCell>
                    <TableCell className={classes.headCell}>T</TableCell>
                    <TableCell className={classes.headCell}>%</TableCell>
                    <TableCell className={classes.headCell}>T</TableCell>
                    <TableCell className={classes.headCell} padding='checkbox'>
                      %
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell className={classes.bodyCell}>184</TableCell>
                    <TableCell className={classes.bodyCell}>0.82</TableCell>
                    <TableCell className={classes.bodyCell}>174</TableCell>
                    <TableCell className={classes.bodyCell}>8.08</TableCell>
                    <TableCell className={classes.bodyCell}>164</TableCell>
                    <TableCell className={classes.bodyCell}>34.46</TableCell>
                    <TableCell className={classes.bodyCell}>154</TableCell>
                    <TableCell className={classes.bodyCell}>72.57</TableCell>
                    <TableCell className={classes.bodyCell}>144</TableCell>
                    <TableCell className={classes.bodyCell} padding='checkbox'>
                      94.52
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.bodyCell}>183</TableCell>
                    <TableCell className={classes.bodyCell}>1.07</TableCell>
                    <TableCell className={classes.bodyCell}>173</TableCell>
                    <TableCell className={classes.bodyCell}>9.68</TableCell>
                    <TableCell className={classes.bodyCell}>163</TableCell>
                    <TableCell className={classes.bodyCell}>38.21</TableCell>
                    <TableCell className={classes.bodyCell}>153</TableCell>
                    <TableCell className={classes.bodyCell}>75.8</TableCell>
                    <TableCell className={classes.bodyCell}>143</TableCell>
                    <TableCell className={classes.bodyCell} padding='checkbox'>
                      95.54
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.bodyCell}>182</TableCell>
                    <TableCell className={classes.bodyCell}>1.39</TableCell>
                    <TableCell className={classes.bodyCell}>172</TableCell>
                    <TableCell className={classes.bodyCell}>11.51</TableCell>
                    <TableCell className={classes.bodyCell}>162</TableCell>
                    <TableCell className={classes.bodyCell}>42.07</TableCell>
                    <TableCell className={classes.bodyCell}>152</TableCell>
                    <TableCell className={classes.bodyCell}>78.81</TableCell>
                    <TableCell className={classes.bodyCell}>142</TableCell>
                    <TableCell className={classes.bodyCell} padding='checkbox'>
                      96.41
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.bodyCell}>181</TableCell>
                    <TableCell className={classes.bodyCell}>1.79</TableCell>
                    <TableCell className={classes.bodyCell}>171</TableCell>
                    <TableCell className={classes.bodyCell}>13.57</TableCell>
                    <TableCell className={classes.bodyCell}>161</TableCell>
                    <TableCell className={classes.bodyCell}>46.02</TableCell>
                    <TableCell className={classes.bodyCell}>151</TableCell>
                    <TableCell className={classes.bodyCell}>81.59</TableCell>
                    <TableCell className={classes.bodyCell}>141</TableCell>
                    <TableCell className={classes.bodyCell} padding='checkbox'>
                      97.13
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.bodyCell}>180</TableCell>
                    <TableCell className={classes.bodyCell}>2.28</TableCell>
                    <TableCell className={classes.bodyCell}>170</TableCell>
                    <TableCell className={classes.bodyCell}>15.87</TableCell>
                    <TableCell className={classes.bodyCell}>160</TableCell>
                    <TableCell className={classes.bodyCell}>50</TableCell>
                    <TableCell className={classes.bodyCell}>150</TableCell>
                    <TableCell className={classes.bodyCell}>84.13</TableCell>
                    <TableCell className={classes.bodyCell}>140</TableCell>
                    <TableCell className={classes.bodyCell} padding='checkbox'>
                      97.72
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.bodyCell}>179</TableCell>
                    <TableCell className={classes.bodyCell}>2.87</TableCell>
                    <TableCell className={classes.bodyCell}>169</TableCell>
                    <TableCell className={classes.bodyCell}>18.41</TableCell>
                    <TableCell className={classes.bodyCell}>159</TableCell>
                    <TableCell className={classes.bodyCell}>53.98</TableCell>
                    <TableCell className={classes.bodyCell}>149</TableCell>
                    <TableCell className={classes.bodyCell}>86.43</TableCell>
                    <TableCell className={classes.bodyCell}>139</TableCell>
                    <TableCell className={classes.bodyCell} padding='checkbox'>
                      98.21
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.bodyCell}>178</TableCell>
                    <TableCell className={classes.bodyCell}>3.59</TableCell>
                    <TableCell className={classes.bodyCell}>168</TableCell>
                    <TableCell className={classes.bodyCell}>21.19</TableCell>
                    <TableCell className={classes.bodyCell}>158</TableCell>
                    <TableCell className={classes.bodyCell}>57.93</TableCell>
                    <TableCell className={classes.bodyCell}>148</TableCell>
                    <TableCell className={classes.bodyCell}>88.49</TableCell>
                    <TableCell className={classes.bodyCell}>138</TableCell>
                    <TableCell className={classes.bodyCell} padding='checkbox'>
                      98.61
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.bodyCell}>177</TableCell>
                    <TableCell className={classes.bodyCell}>4.46</TableCell>
                    <TableCell className={classes.bodyCell}>167</TableCell>
                    <TableCell className={classes.bodyCell}>24.2</TableCell>
                    <TableCell className={classes.bodyCell}>157</TableCell>
                    <TableCell className={classes.bodyCell}>61.79</TableCell>
                    <TableCell className={classes.bodyCell}>147</TableCell>
                    <TableCell className={classes.bodyCell}>90.32</TableCell>
                    <TableCell className={classes.bodyCell}>137</TableCell>
                    <TableCell className={classes.bodyCell} padding='checkbox'>
                      98.93
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.bodyCell}>176</TableCell>
                    <TableCell className={classes.bodyCell}>5.48</TableCell>
                    <TableCell className={classes.bodyCell}>166</TableCell>
                    <TableCell className={classes.bodyCell}>27.43</TableCell>
                    <TableCell className={classes.bodyCell}>156</TableCell>
                    <TableCell className={classes.bodyCell}>65.54</TableCell>
                    <TableCell className={classes.bodyCell}>146</TableCell>
                    <TableCell className={classes.bodyCell}>91.92</TableCell>
                    <TableCell className={classes.bodyCell}>136</TableCell>
                    <TableCell className={classes.bodyCell} padding='checkbox'>
                      99.18
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className={classes.bodyCell}>175</TableCell>
                    <TableCell className={classes.bodyCell}>6.68</TableCell>
                    <TableCell className={classes.bodyCell}>165</TableCell>
                    <TableCell className={classes.bodyCell}>30.85</TableCell>
                    <TableCell className={classes.bodyCell}>155</TableCell>
                    <TableCell className={classes.bodyCell}>69.15</TableCell>
                    <TableCell className={classes.bodyCell}>145</TableCell>
                    <TableCell className={classes.bodyCell}>93.32</TableCell>
                    <TableCell className={classes.bodyCell} />
                    <TableCell
                      className={classes.bodyCell}
                      padding='checkbox'
                    />
                  </TableRow>
                </TableBody>
              </Table>
            </Grid>
          </div>
</Grid>
          </Grid>
        </Container>
        <NMFooter />
      </>
    )
  }
}

export default withStyles(styles)(Page)
