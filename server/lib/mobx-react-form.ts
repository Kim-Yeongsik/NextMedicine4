import { Form as OrigForm } from 'mobx-react-form'

import dvr from 'mobx-react-form/lib/validators/DVR'
import validatorjs from './validatorjs'

export class Form extends OrigForm {
  constructor (setup = {}, formOptions = {}) {
    super(setup, formOptions)
  }

  bindings () {
    return {
      TextField: ({ $try, field, props }) => ({
        error: $try(props.error, !!field.error),
        helperText: $try(props.error, field.error),
        label: $try(props.label, field.label),
        name: $try(props.name, field.name),
        onChange: $try(props.onChange, field.onChange),
        value: $try(props.value, field.value)
      }),
      Editor: ({ $try, field, props }) => ({
        error: $try(props.error, !!field.error),
        helperText: $try(props.error, field.error),
        label: $try(props.label, field.label),
        name: $try(props.name, field.name),
        onEditorChange: $try(props.onChange, field.onChange),
        value: $try(props.value, field.value)
      })
    }
  }

  options () {
    return {
      validateOnChange: true
    }
  }

  plugins () {
    return {
      dvr: dvr(validatorjs)
    }
  }
}
