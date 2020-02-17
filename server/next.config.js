const withCSS = require('@zeit/next-css')
const withTypescript = require('@zeit/next-typescript')
const Dotenv = require('dotenv-webpack')
const fs = require('fs')
const path = require('path')

function listPages(parentDir, parentPath = '') {
  const pages = []
  fs.readdirSync(parentDir).forEach(childName => {
    if (['__tests__', 'components', 'containers'].includes(childName)) {
      return
    }
    if (childName.startsWith('_app.') || childName.startsWith('_document.')) {
      return
    }
    const childPath = path.resolve(parentDir, childName)
    if (fs.lstatSync(childPath).isDirectory()) {
      pages.push(...listPages(childPath, parentPath + '/' + childName))
    }
    const childNameOnly = path.parse(childName).name
    if (childNameOnly === 'index') {
      pages.push(parentPath === '' ? '/' : parentPath)
    } else {
      pages.push(parentPath + '/' + childNameOnly)
    }
  })
  return pages
}

let config = {
  exportPathMap: async function(defaultPathMap) {
    const pathsDir = path.resolve(__dirname, 'pages')
    const pages = listPages(pathsDir)
    const pathMap = {}
    for (var i = 0; i < pages.length; i++) {
      const page = pages[i]
      pathMap[page] = { page }
    }

    return pathMap
  },
  pageExtensions: ['js', 'jsx', 'ts', 'tsx'],
  webpack: (config, options) => {
    config.node = config.node || {}
    config.node = {
      ...config.node,
      fs: 'empty'
    }

    config.plugins = config.plugins || []
    config.plugins = [
      ...config.plugins,
      new Dotenv({
        path: path.join(__dirname, '.env'),
        systemvars: true,
        defaults: path.join(__dirname, '.env.defaults')
      })
    ]

    if (!options.dev) {
      // 개발 과정에서 IE11 사용 금지
      // https://github.com/zeit/next.js/tree/canary/examples/with-polyfills
      const originalEntry = config.entry
      config.entry = async () => {
        const entries = await originalEntry()

        if (
          entries['main.js'] &&
          !entries['main.js'].includes('./polyfills.js')
        ) {
          entries['main.js'].unshift('./polyfills.js')
        }

        return entries
      }
    }

    return config
  }
}

config = withCSS(config)
config = withTypescript(config)

module.exports = config
