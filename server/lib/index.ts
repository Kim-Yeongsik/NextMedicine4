import Router from 'next/router'

export function nextReplace (ctx, url: string) {
  const { res } = ctx || { res: undefined }

  if (res) {
    res.writeHead(302, { Location: url })
    res.end()
    res.finished = true
  } else {
    Router.replace(url).catch()
  }
}

export function round (value) {
  return Math.round(value * 1e4) / 1e4
}
