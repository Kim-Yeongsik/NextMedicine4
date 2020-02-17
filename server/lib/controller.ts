import { AxiosResponse } from 'axios'

import _axios from './axios'
import { log } from './log'

export interface ControllerOptions {
  ctx?: any
  useAlert?: boolean
}

export function showResponse (response: AxiosResponse<any>, useAlert = true) {
  if (response.status === 413) return alert('용량이 초과하였습니다.')
  try {
    const data = response.data

    if (process.env.NODE_ENV !== 'production') {
      log(data)
    }

    if (useAlert && process.browser) {
      let message = ''
      if (data.errors) {
        message = Array.from(data.errors, (x: any) => x.message).join('\n')
      } else if (data.message) {
        message = data.message
      }
      alert(message)
    }
  } catch (err) {
    if (process.env.NODE_ENV !== 'production') {
      log(err)
    }
  }
}

export async function base (
  method: string,
  url: string,
  data: any = {},
  { ctx = undefined, useAlert = false } = {},
  callback: (response: AxiosResponse<any>) => any
) {
  try {
    const response = await _axios(
      url,
      method.toLowerCase() === 'get'
        ? { ctx, method, params: data }
        : { ctx, method, data }
    )
    return await callback(response)
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      showResponse(error.response, useAlert)
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
      log(error.request)
    } else {
      // Something happened in setting up the request that triggered an Error
      log('Error', error.message)
    }
    return false
  }
}

export async function any (
  method: string,
  url: string,
  data: any = {},
  { ctx = undefined, returnDefault = {}, useAlert = false } = {}
) {
  return base(method, url, data, { ctx, useAlert }, async response => {
    return {
      ...returnDefault,
      ...response.data
    }
  })
}

export async function boolean (
  method: string,
  url: string,
  data: any = {},
  { ctx = undefined, returnDefault = true, useAlert = false } = {}
) {
  return base(method, url, data, { ctx, useAlert }, async () => {
    return returnDefault
  })
}

export async function number (
  method: string,
  url: string,
  data: any = {},
  { ctx = undefined, returnDefault = 0, useAlert = false } = {}
) {
  return base(method, url, data, { ctx, useAlert }, async response => {
    return response.data || returnDefault
  })
}
