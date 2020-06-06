import path from 'path'
import cheerio from 'cheerio'
import { minify } from 'html-minifier'

function getSvgContents(svg) {
  const $ = cheerio.load(svg)
  return minify($('svg').html(), {
    collapseWhitespace: true,
    caseSensitive: true,
  })
}

function buildIconsObject(svgFiles, getSvg) {
  return svgFiles
    .map((svgFile) => {
      const name = path.basename(svgFile, '.svg')
      const svg = getSvg(svgFile)
      const contents = getSvgContents(svg)
      return { name, contents }
    })
    .reduce((icons, icon) => {
      icons[icon.name] = icon.contents
      return icons
    }, {})
}

export default buildIconsObject
