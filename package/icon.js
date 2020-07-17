import classnames from 'classnames/dedupe'
import DEFAULT_ATTRS from './default-attrs.json'

function attrsToString(attrs) {
  return Object.keys(attrs)
    .map((key) => `${key}="${attrs[key]}"`)
    .join(' ')
}

class Icon {
  constructor(name, contents, tags = []) {
    this.name = name
    this.contents = contents
    this.tags = tags
    this.attrs = {
      ...DEFAULT_ATTRS,
      ...{ class: `seed seed-${name}` },
    }
  }

  toSvg(attrs = {}) {
    const combinedAttrs = {
      ...this.attrs,
      ...attrs,
      ...{ class: classnames(this.attrs.class, attrs.class) },
    }

    return `<svg ${attrsToString(combinedAttrs)}>${this.contents}</svg>`
  }

  toString() {
    return this.contents
  }
}

export default Icon
