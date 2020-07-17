import fs from 'fs'
import path from 'path'
import processSvg from './process-svg'

const IN_DIR = path.resolve(__dirname, '../../icons')

fs.readdirSync(IN_DIR)
  .filter((file) => path.extname(file) === '.svg')
  .forEach((svgFile) => {
    const svg = fs.readFileSync(path.join(IN_DIR, svgFile))
    processSvg(svg, svgFile).then((result) =>
      fs.writeFileSync(path.join(IN_DIR, svgFile), result)
    )
  })
