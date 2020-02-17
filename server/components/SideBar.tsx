import {
  Avatar,
  Box,
  Card,
  CardActionArea,
  CardActions,
  CardHeader,
  createStyles,
  Divider,
  ExpansionPanel,
  ExpansionPanelDetails,
  ExpansionPanelSummary,
  Grid,
  Link,
  ListItem,
  ListItemText,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import React from 'react'

import Badge from '@material-ui/core/Badge'
import classNames from 'classnames'

import MailIcon from '@material-ui/icons/mail'
import NotificationsIcon from '@material-ui/icons/notificationsNone'
import PersonIcon from '@material-ui/icons/person'

import ExpandMoreIcon from '@material-ui/icons/ExpandMore'

const styles = theme =>
  createStyles({
    root: {
      backgroundColor: '#151515',
      flexGrow: 1,
      width: theme.spacing(25),
      position: 'sticky',
      top: '128px',
      borderRadius: '15px',
      paddingBottom: theme.spacing(2),
      [theme.breakpoints.down('sm')]: {
        display: 'none'
      }
    },
    kmlePadding: {
      paddingLeft: theme.spacing(3)
    },
    styledListItemText: {
      fontSize: '11px',
      color: '#ffffff'
    },
    avatarGrid: {
      display: 'flex',
      justifyContent: 'center',
      paddingTop: theme.spacing(2)
    },
    avatar: {
      width: '60px',
      height: '60px',
      marginTop: '3px'
    },
    listItemText: {
      paddingLeft: theme.spacing(3)
      // paddingBottom: theme.spacing(1)
    },
    iconPadding: {
      paddingTop: '5px'
    },
    iconColorWhite: {
      color: theme.palette.common.white
    },
    listItemTextFontSizeCenter: {
      display: 'flex',
      justifyContent: 'center',
      fontSize: '14px'
    },
    listItemTextFontSize: {
      fontSize: '15px'
    },
    colorWhite: {
      color: '#ffffff'
    },
    nicknameCenter: {
      textAlign: 'center',
      paddingTop: theme.spacing(1),
      paddingBottom: theme.spacing(1)
    },
    nickname: {
      // color: '#45A',
      color: '#ffffff',
      fontWeight: 700,
      cursor: 'pointer',
      fontSize: '16px',
      marginTop: theme.spacing(1)
    },
    aliasCenter: {
      textAlign: 'center',
      paddingBottom: theme.spacing(2)
    },
    alias: {
      color: 'gray',
      fontWeight: 700,
      fontSize: '14px',
      marginTop: '4px'
    },
    marginSpacing: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
    },
    IconCenter: {
      display: 'flex',
      justifyContent: 'center'
    },
    listItemMainName: {
      fontWeight: 700
    }
  })

const StyledExpansionPanel = withStyles({
  root: {
    backgroundColor: '#1C1C1C',
    minHeight: 'auto',
    padding: 0,
    marginTop: 0,
    marginBottom: 0,
    '&$expanded': {
      margin: 'auto'
    },
    '&:not(:last-child)': {
      margin: 0,
      padding: 0
    }
  }
})(ExpansionPanel)

const StyledExpansionPanelSummary = withStyles({
  root: {
    paddingTop: 0,
    paddingLeft: '20px',
    paddingRight: '15px',
    paddingBottom: 0,
    '&$expanded': {
      minHeight: '48',
      paddingTop: 0,
      paddingBottom: 0
    }
  }
})(ExpansionPanelSummary)

const StyledExpansionPanelDetails = withStyles({
  root: {
    fontSize: '14px',
    backgroundColor: '#424242',
    minHeight: '48',
    paddingTop: 0,
    paddingLeft: '20px',
    paddingRight: '18px',
    paddingBottom: 0
  }
})(ExpansionPanelDetails)

const StyledListItem = withStyles({
  root: {
    minHeight: 'auto',
    paddingTop: '3px',
    paddingLeft: '10px',
    paddingRight: 0,
    paddingBottom: '3px',
    '&$expanded': {
      minHeight: '48',
      paddingTop: '5px',
      paddingBottom: '6px',
      marginTop: 0,
      marginBottom: '5px'
    }
  }
})(ListItem)

type SideBarProps = WithStyles<typeof styles>

class SideBar extends React.PureComponent<SideBarProps> {
  render () {
    const { classes } = this.props

    return (
      <>
        <Box className={classes.root}>
          <Grid container>
            <Grid item xs={12} className={classes.avatarGrid}>
              <Box
                borderRadius='50%'
                style={{
                  width: '66px',
                  height: '66px',
                  backgroundColor: '#ffffff',
                  display: 'flex',
                  justifyContent: 'center'
                }}
              >
                <Avatar
                  className={classes.avatar}
                  src='../static/nm/unknown.jpg'
                />
              </Box>
            </Grid>
            <Grid item xs={12} className={classes.nicknameCenter}>
              <Typography className={classes.nickname}>UserID</Typography>
            </Grid>
            <Grid item xs={12} className={classes.aliasCenter}>
              <Typography className={classes.alias}>
                멀티 확장한 해철의
              </Typography>
            </Grid>
          </Grid>

          <Divider className={classes.colorWhite} />

          <Grid container className={classes.marginSpacing}>
            <Grid item xs={4}>
              <Link underline='none' color='inherit' href='/notifications'>
                <Box className={classes.IconCenter}>
                  <Badge badgeContent={30} color='secondary'>
                    <NotificationsIcon className={classes.iconColorWhite} />
                  </Badge>
                </Box>
                <Box>
                  <ListItemText
                    className={classes.colorWhite}
                    classes={{ primary: classes.listItemTextFontSizeCenter }}
                    primary='알림'
                  />
                </Box>
              </Link>
            </Grid>

            <Grid item xs={4}>
              <Link underline='none' color='inherit' href='/message'>
                <Box className={classes.IconCenter}>
                  <Badge badgeContent={30} color='secondary'>
                    <MailIcon className={classes.iconColorWhite} />
                  </Badge>
                </Box>
                <Box>
                  <ListItemText
                    className={classes.colorWhite}
                    classes={{ primary: classes.listItemTextFontSizeCenter }}
                    primary='쪽지'
                  />
                </Box>
              </Link>
            </Grid>

            <Grid item xs={4}>
              <Link underline='none' color='inherit' href='/userinfo'>
                <Box className={classes.IconCenter}>
                  <Badge>
                    <PersonIcon className={classes.iconColorWhite} />
                  </Badge>
                </Box>
                <Box>
                  <ListItemText
                    className={classes.colorWhite}
                    classes={{ primary: classes.listItemTextFontSizeCenter }}
                    primary='내정보'
                  />
                </Box>
              </Link>
            </Grid>
          </Grid>

          <Divider />

          <StyledExpansionPanel elevation={0}>
            <StyledExpansionPanelSummary
              expandIcon={<ExpandMoreIcon className={classes.iconColorWhite} />}
            >
              <Grid container>
                <Grid item xs={12}>
                  <Typography
                    className={classNames(
                      classes.listItemMainName,
                      classes.colorWhite
                    )}
                  >
                    친목
                  </Typography>
                </Grid>
              </Grid>
            </StyledExpansionPanelSummary>
            <StyledExpansionPanelDetails>
              <Grid container>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/group/1'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='전체'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/1'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='넥메'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/2'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='알림'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/3'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='학생'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/32'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='인턴'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/4'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='전공의'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/5'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='전문의'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/6'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='머니'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/7'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='연애'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/30'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='남성'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
              </Grid>
            </StyledExpansionPanelDetails>
          </StyledExpansionPanel>

          <Divider />

          <StyledExpansionPanel elevation={0}>
            <StyledExpansionPanelSummary
              expandIcon={<ExpandMoreIcon className={classes.iconColorWhite} />}
            >
              <Grid container>
                <Grid item xs={12}>
                  <Typography
                    className={classNames(
                      classes.listItemMainName,
                      classes.colorWhite
                    )}
                  >
                    진로
                  </Typography>
                </Grid>
              </Grid>
            </StyledExpansionPanelSummary>
            <StyledExpansionPanelDetails>
              <Grid container>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/group/2'>
                    <StyledListItem button>
                      <ListItemText
                        className={classes.styledListItemText}
                        primary='전체'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/9'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='과선택'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/10'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='병원선택'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/12'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='군대'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/13'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='로컬'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/14'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='정보글'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/15'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='기초기타'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/36'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='해외'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/38'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='모셔요'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
              </Grid>
            </StyledExpansionPanelDetails>
          </StyledExpansionPanel>

          <Divider />

          <StyledExpansionPanel elevation={0}>
            <StyledExpansionPanelSummary
              expandIcon={<ExpandMoreIcon className={classes.iconColorWhite} />}
            >
              <Grid container>
                <Grid item xs={12}>
                  <Typography
                    className={classNames(
                      classes.listItemMainName,
                      classes.colorWhite
                    )}
                  >
                    고진선처
                  </Typography>
                </Grid>
              </Grid>
            </StyledExpansionPanelSummary>
            <StyledExpansionPanelDetails>
              <Grid container>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/group/3'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='전체'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/16'>
                    <StyledListItem button>
                      <ListItemText
                        className={classes.styledListItemText}
                        primary='국시'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/17'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='실기'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/18'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='교재'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/19'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='시험후기'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/20'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='인턴'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/21'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='전공의'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/22'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='컨설트'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/23'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='기타질문'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
              </Grid>
            </StyledExpansionPanelDetails>
          </StyledExpansionPanel>

          <Divider />

          <StyledExpansionPanel elevation={0}>
            <StyledExpansionPanelSummary
              expandIcon={<ExpandMoreIcon className={classes.iconColorWhite} />}
            >
              <Grid container>
                <Grid item xs={12}>
                  <Typography
                    className={classNames(
                      classes.listItemMainName,
                      classes.colorWhite
                    )}
                  >
                    자료실
                  </Typography>
                </Grid>
              </Grid>
            </StyledExpansionPanelSummary>
            <StyledExpansionPanelDetails>
              <Grid container>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/group/4'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='전체'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/24'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='문제풀'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/25'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='정리노트'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/26'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='기타자료'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/37'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='자료요청'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
              </Grid>
            </StyledExpansionPanelDetails>
          </StyledExpansionPanel>

          <Divider />

          <StyledExpansionPanel elevation={0}>
            <StyledExpansionPanelSummary
              expandIcon={<ExpandMoreIcon className={classes.iconColorWhite} />}
            >
              <Grid container>
                <Grid item xs={12}>
                  <Typography
                    className={classNames(
                      classes.listItemMainName,
                      classes.colorWhite
                    )}
                  >
                    토론
                  </Typography>
                </Grid>
              </Grid>
            </StyledExpansionPanelSummary>
            <StyledExpansionPanelDetails>
              <Grid container>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/group/5'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='전체'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/27'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='원격의료'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/28'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='전공의유급'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/29'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='기타논의'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
              </Grid>
            </StyledExpansionPanelDetails>
          </StyledExpansionPanel>

          <Divider />

          <StyledExpansionPanel elevation={0}>
            <StyledExpansionPanelSummary
              expandIcon={<ExpandMoreIcon className={classes.iconColorWhite} />}
            >
              <Grid container>
                <Grid item xs={12}>
                  <Typography
                    className={classNames(
                      classes.listItemMainName,
                      classes.colorWhite
                    )}
                  >
                    장터
                  </Typography>
                </Grid>
              </Grid>
            </StyledExpansionPanelSummary>
            <StyledExpansionPanelDetails>
              <Grid container>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/group/6'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='전체'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/33'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='삽니다'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/34'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='팝니다'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/board/35'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='나눔'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
              </Grid>
            </StyledExpansionPanelDetails>
          </StyledExpansionPanel>

          <Divider />

          <StyledExpansionPanel elevation={0}>
            <StyledExpansionPanelSummary
              expandIcon={<ExpandMoreIcon className={classes.iconColorWhite} />}
            >
              <Grid container>
                <Grid item xs={12}>
                  <Typography
                    className={classNames(
                      classes.listItemMainName,
                      classes.colorWhite
                    )}
                  >
                    국시지원
                  </Typography>
                </Grid>
              </Grid>
            </StyledExpansionPanelSummary>
            <StyledExpansionPanelDetails>
              <Grid container>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/kmle'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='전체'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/tscore'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='T점수변환기'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/kmleElementary'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='국시평가항목체크'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link
                    underline='none'
                    color='inherit'
                    href='/kmleElementaryOld'
                  >
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='Old국시평가항목체크'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
                <Grid item xs={12}>
                  <Link underline='none' color='inherit' href='/internApply'>
                    <StyledListItem button>
                      <ListItemText
                        classes={{ primary: classes.listItemTextFontSize }}
                        className={classes.styledListItemText}
                        primary='인턴지원경쟁률'
                      />
                    </StyledListItem>
                  </Link>
                </Grid>
              </Grid>
            </StyledExpansionPanelDetails>
          </StyledExpansionPanel>
          <Divider />
        </Box>
      </>
    )
  }
}

export default withStyles(styles)(SideBar)
