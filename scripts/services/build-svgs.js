import fs from 'fs'
import path from 'path'
import icons from '../../package/icons'

const OUT_DIR = path.resolve(__dirname, '../../dist/icons')

Object.keys(icons).forEach((name) => {
  const svg = icons[name].toSvg()

  fs.writeFileSync(path.join(OUT_DIR, `${name}.svg`), svg)
})
