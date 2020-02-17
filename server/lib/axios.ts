import axios from 'axios'

export default function _axios (url: string, init: any) {
  const { ctx, headers, ...options } = init

  const port = parseInt(process.env.PORT, 10) || 3000
  const apiSSRPort = parseInt(process.env.API_SSR_PORT, 10) || 80
  const apiCSRPort = parseInt(process.env.API_CSR_PORT, 10) || 80

  let baseURL: string
  if (!process.browser) {
    baseURL = `http://127.0.0.1:${apiSSRPort}/`
  } else if (port !== apiCSRPort) {
    if (location.protocol === 'https' || apiCSRPort === 443) {
      baseURL = `${location.protocol}//${location.hostname}/`
    } else {
      baseURL = `${location.protocol}//${location.hostname}:${apiCSRPort}/`
    }
  }

  return axios({
    baseURL,
    headers: {
      ...headers,
      ...(ctx && ctx.req && ctx.req.headers)
    },
    url,
    withCredentials: true,
    ...options
  })
}
