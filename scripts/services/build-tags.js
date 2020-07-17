import fs from 'fs'
import path from 'path'
import tags from '../../package/tags.json'

const IN_DIR = path.resolve(__dirname, '../../icons')
const OUT_DIR = path.resolve(__dirname, '../../package/tags.json')

const svgFiles = fs
  .readdirSync(IN_DIR)
  .filter((file) => path.extname(file) === '.svg')
  .map((file) => file.slice(0, -4))

svgFiles.forEach((file) => {
  const i = tags
  i.hasOwnProperty(file) ? null : (tags[file] = [])
})

function fixupTags(obj, arr) {
  for (const key in obj) {
    if (!arr.includes(key)) {
      delete obj[key]
    }
  }
}

function sortKeys(obj) {
  const ordered = {}
  Object.keys(obj)
    .sort()
    .forEach((key) => {
      ordered[key] = obj[key]
    })
  return ordered
}

fixupTags(tags, svgFiles)

const shinyNewTags = sortKeys(tags)

fs.writeFileSync(OUT_DIR, JSON.stringify(shinyNewTags))
