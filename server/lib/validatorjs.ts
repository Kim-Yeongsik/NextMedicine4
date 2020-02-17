import validatorjs from 'validatorjs'
import ko from 'validatorjs/src/lang/ko'

validatorjs.useLang('ko')
validatorjs.setMessages('ko', {
  ...ko,

  // bug fix
  required_with: ':field이(가) 있는 경우 :attribute 필드는 필수입니다.',
  same: ':attribute와(과) :same은(는) 일치해야 합니다.'
})

export default validatorjs
