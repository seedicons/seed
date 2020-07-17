import React from 'react'
import copy from 'copy-to-clipboard'
import download from 'downloadjs'
import { Icon } from '../base'
import { IconsGrid, IconCont, Content, Tooltip } from './styled'

function IconGrid({ icons }) {
  const iconArr = Object.values(icons)

  return (
    <Content>
      <IconsGrid>
        {iconArr.map((icon) => (
          <IconCont
            key={icon.name}
            title={`Download ${icon.name}.svg`}
            onClick={(event) => {
              if (event.shiftKey) {
                copy(icon.toSvg())
              } else {
                download(icon.toSvg(), `${icon.name}.svg`, 'image/svg+xml')
              }
            }}
          >
            <Icon content={icon.contents} size={60} />
            <Tooltip>{icon.name}</Tooltip>
          </IconCont>
        ))}
      </IconsGrid>
    </Content>
  )
}

export default IconGrid
