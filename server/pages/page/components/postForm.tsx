import { Editor } from '@tinymce/tinymce-react'
import { action, observable } from 'mobx'
import { observer } from 'mobx-react'
import React from 'react'

import classNames from 'classnames'

import { containerBreakpoint } from 'consts/layout'

import {
  Box,
  Button,
  createStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  FormControl,
  Grid,
  Link,
  NativeSelect,
  TextField,
  Typography,
  WithStyles,
  withStyles
} from '@material-ui/core'
import board from 'controllers/board'

import group from 'consts/group'
import postController from 'controllers/post'
import { Form } from 'lib/mobx-react-form'

const styles = theme =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: theme.spacing(5),
      marginBottom: theme.spacing(3),
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        marginTop: theme.spacing(6),
        paddingLeft: theme.spacing(1),
        paddingRight: theme.spacing(1)
      }
    },
    dividerMargin: {
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(3)
    },
    submitButton: {
      marginTop: theme.spacing(7)
    },
    addOnTextfield: {
      margin: theme.spacing(2, 1)
    },
    addOnInput: {
      fontSize: 12
    },
    boardMarginTop: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(4),
      [theme.breakpoints.down(containerBreakpoint(theme))]: {
        marginTop: theme.spacing(4)
      }
    },
    formControl: {
      marginTop: '4px',
      marginBottom: theme.spacing(4)
    },
    buttons: {
      position: 'relative',
      overflow: 'hidden',
      padding: '12px 12px, 50px 12px'
    },
    EnrollmentBtn: {
      float: 'right'
    },
    guideLineMargin: {
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(4)
    },
    fullWidth: {
      width: '100%'
    },
    guideLine: {
      fontWeight: 600
    }
  })

interface PageProps extends WithStyles<typeof styles> {
  board?: Model.Board
  gruop?: Model.Group
  post?: Model.Post
  onSubmit?: Function
  isAdmin?: boolean
  withFile?: boolean
  // hasAddOn?: boolean
  // showIsNotice?: boolean
}

@observer
class Page extends React.Component<PageProps> {
  form
  fileInput
  @observable files = []
  @observable images = []

  static defaultProps = {
    post: {
      isNotice: false,
      subject: '',
      content: '',
      files: [],
      images: [],
      addOn: null
    },
    isAdmin: false,
    withFile: true
    // hasAddOn: false,
    // showIsNotice: true
  }

  state = {
    bId: '',
    cancel: false,
    save: false
  }

  constructor (props) {
    super(props)
    const { onSubmit, post } = props
    const { subject, content, files, images } = post

    this.files = files
    this.images = images
    this.fileInput = React.createRef()
    this.form = new Form(
      {
        fields: [
          {
            name: 'subject',
            label: '제목',
            rules: 'required|string|min:2',
            bindings: 'TextField',
            value: subject
          },
          {
            name: 'content',
            label: '내용',
            rules: 'required|string|min:2',
            bindings: 'Editor',
            value: content
          }
        ]
      },
      {
        hooks: {
          onSuccess: async form => {
            onSubmit(form, this.files, this.images)
          }
        }
      }
    )
  }

  @action
  selectFile = e => (this.files = this.files.concat(...e.target.files))

  @action
  removeFile = index => () => this.files.splice(index, 1)

  addImage = (callback, value, meta) => {
    const input = document.createElement('input')
    input.setAttribute('type', 'file')
    input.setAttribute('accept', 'image/*')
    input.onchange = async e => {
      const formData = new FormData()
      formData.append('file', e.target.files[0])
      const { image } = await postController.addImage(formData, {
        useAlert: true
      })
      if (!image) return
      callback(`/posts/image/` + image.filename, {
        title: image.originalname
      })
      this.images.push(image)
    }
    input.click()
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  handleClickCancel = cancel => {
    this.setState({ cancel: true })
  }

  handleCancelClose = cancel => {
    this.setState({ cancel: false })
  }

  render () {
    const { classes, withFile } = this.props
    const form = this.form

    return (
      <>
        <form className={classes.root} onSubmit={form.onSubmit}>
          <Typography variant='h5'>글 쓰기</Typography>
          <Divider className={classes.dividerMargin} />
          <Grid item xs={12} className={classes.fullWidth}>
            <FormControl
              className={classNames(classes.formControl, classes.fullWidth)}
            >
              <NativeSelect
                value={this.state.bId}
                onChange={this.handleChange}
                name='bId'
                id='bId'
              >
                <option value={-1}>게시판 선택</option>
                <option value={group.GROUP1}>친목 &gt; 넥메</option>
                <option value={group.GROUP1}>친목 &gt; 알림</option>
                <option value={group.GROUP1}>친목 &gt; 학생</option>
                <option value={group.GROUP1}>친목 &gt; 인턴</option>
                <option value={group.GROUP1}>친목 &gt; 전공의</option>
                <option value={group.GROUP1}>친목 &gt; 전문의</option>
                <option value={group.GROUP1}>친목 &gt; 머니</option>
                <option value={group.GROUP1}>친목 &gt; 연애</option>
                <option value={group.GROUP1}>친목 &gt; 남성</option>
                <option value={group.GROUP1}>친목 &gt; 여성</option>
                <option value={group.GROUP2}>진로 &gt; 과선택</option>
                <option value={group.GROUP2}>진로 &gt; 병원선택</option>
                <option value={group.GROUP2}>진로 &gt; 군대</option>
                <option value={group.GROUP2}>진로 &gt; 로컬</option>
                <option value={group.GROUP2}>진로 &gt; 정보글</option>
                <option value={group.GROUP2}>진로 &gt; 기초기타</option>
                <option value={group.GROUP2}>진로 &gt; 해외</option>
                <option value={group.GROUP2}>진로 &gt; 모셔요</option>
                <option value={group.GROUP3}>고진선처 &gt; 국시</option>
                <option value={group.GROUP3}>고진선처 &gt; 실기</option>
                <option value={group.GROUP3}>고진선처 &gt; 교재</option>
                <option value={group.GROUP3}>고진선처 &gt; 시험후기</option>
                <option value={group.GROUP3}>고진선처 &gt; 인턴</option>
                <option value={group.GROUP3}>고진선처 &gt; 전공의</option>
                <option value={group.GROUP3}>고진선처 &gt; 컨설트</option>
                <option value={group.GROUP3}>고진선처 &gt; 기타질문</option>
                <option value={group.GROUP4}>자료실 &gt; 문제풀</option>
                <option value={group.GROUP4}>자료실 &gt; 정리노트</option>
                <option value={group.GROUP4}>자료실 &gt; 기타자료</option>
                <option value={group.GROUP4}>자료실 &gt; 자료요청</option>
                <option value={group.GROUP5}>토론 &gt; 원격의료</option>
                <option value={group.GROUP5}>토론 &gt; 전공의유급</option>
                <option value={group.GROUP5}>토론 &gt; 기타논의</option>
                <option value={group.GROUP6}>장터 &gt; 삽니다</option>
                <option value={group.GROUP6}>장터 &gt; 팝니다</option>
                <option value={group.GROUP6}>장터 &gt; 나눔</option>
              </NativeSelect>
            </FormControl>
          </Grid>

          <TextField
            autoFocus
            margin='dense'
            required
            variant='outlined'
            {...form.$('subject').bind()}
          />

          <Editor
            apiKey='pjzcldptrh97p6d9xirx935zyj1pcmhxp38k23mp0oskpand'
            init={{
              content_css: '/static/editor.css',
              height: 500,
              menubar: false,
              object_resizing: true,
              file_picker_types: 'image',
              toolbar:
                'undo redo | styleselect | bold italic | forecolor backcolor | alignleft aligncenter alignright alignjustify | numlist bullist indent outdent | hr | image editimage',
              plugins: 'lists autolink hr image imagetools',
              quickbars_insert_toolbar: false,
              mobile: { theme: 'silver' },
              // 이미지 업로드
              image_title: true,
              image_description: false,
              automatic_uploads: false,
              relative_urls: false,
              remove_script_host: false,
              file_picker_callback: this.addImage
            }}
            {...form.$('content').bind()}
          />
          <Typography variant='caption' color='error'>
            {form.$('content').error}
          </Typography>
          {withFile && (
            <Box mt={4} maxWidth={'100%'}>
              <Grid container alignItems='flex-start'>
                <input
                  type='file'
                  multiple={true}
                  style={{ display: 'none' }}
                  ref={ref => (this.fileInput = ref)}
                  onChange={this.selectFile}
                />
                <Button
                  variant='outlined'
                  color='primary'
                  size='small'
                  onClick={() => {
                    this.fileInput.click()
                  }}
                >
                  첨부파일 추가
                </Button>
                <Grid item container xs direction='column' alignItems='stretch'>
                  {this.files &&
                    this.files.map((file, index) => (
                      <Box key={index} mx={2}>
                        {index === 0 ? <Divider /> : null}
                        <Grid
                          container
                          justify='space-between'
                          alignItems='center'
                          wrap='nowrap'
                        >
                          <Typography
                            variant='body2'
                            component='span'
                            style={{
                              whiteSpace: 'nowrap',
                              overflow: 'hidden',
                              textOverflow: 'ellipsis'
                            }}
                          >
                            {file.name || file.originalname} (
                            {Math.round(file.size / 1024)} KB)
                          </Typography>
                          <Button
                            color='secondary'
                            onClick={this.removeFile(index)}
                            size='small'
                          >
                            삭제
                          </Button>
                        </Grid>
                        <Divider />
                      </Box>
                    ))}
                </Grid>
              </Grid>
            </Box>
          )}
          <Grid item container xs={12} className={classes.boardMarginTop}>
            <Typography variant='body2'>
              <input type='checkbox' value='1' name='isAlias' id='isAlias' />
              익명글 설정 (수정 및 삭제 불가)
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.guideLineMargin}>
            <Typography variant='body2'>
              <Link
                href='/guideline'
                target='blank'
                color='inherit'
                className={classes.guideLine}
              >
                게시판 이용 지침
              </Link>
              의 내용을 준수해수세요.
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            className={classNames(classes.boardMarginTop, classes.buttons)}
          >
            <Button
              variant='contained'
              size='large'
              color='secondary'
              onClick={this.handleClickCancel}
            >
              취소
            </Button>
            <Box className={classes.EnrollmentBtn}>
              <Button
                variant='contained'
                size='large'
                color='primary'
                onClick={form.onSubmit}
              >
                등록
              </Button>
            </Box>
          </Grid>

          <Dialog open={this.state.cancel}>
            <DialogTitle>{'글쓰기 취소'}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                <Typography>
                  기입했던 정보들은 사라집니다.
                  <br /> 취소하시겠습니까?
                </Typography>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.handleClickCancel} color='secondary'>
                <Typography variant='body1'>예</Typography>
              </Button>
              <Button onClick={this.handleCancelClose}>
                <Typography variant='subtitle1'>계속작성</Typography>
              </Button>
            </DialogActions>
          </Dialog>
        </form>
      </>
    )
  }
}
console.error()

export default withStyles(styles)(Page)
