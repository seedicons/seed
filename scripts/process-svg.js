import Svgo from 'svgo'
import cheerio from 'cheerio'
import { format } from 'prettier'

import DEFAULT_ATTRS from '../package/default-attrs.json'

function processSvg(svg) {
  return optimize(svg)
    .then(setAttrs)
    .then(result => format(result, { parser: 'babel' }))
    .then(svg => svg.replace(/;/g, ''))
}

function optimize(svg) {
  const svgo = new Svgo({
    plugins: [
      { convertShapeToPath: false },
      { mergePaths: false },
      { inlineStyles: { onlyMatchedOnce: false } },
      { removeAttrs: { attrs: '(fill|stroke.*)' } },
      { removeTitle: true }
    ]
  })

  return svgo.optimize(svg).then(({ data }) => data)
}

function setAttrs(svg) {
  const $ = cheerio.load(svg)

  Object.keys(DEFAULT_ATTRS).forEach(key =>
    $('svg').attr(key, DEFAULT_ATTRS[key])
  )

  return $('body').html()
}

export default processSvg