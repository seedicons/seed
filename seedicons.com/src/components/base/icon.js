import React from 'react'

function Icon(props) {
  const { size, content } = props
  return (
    <svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      dangerouslySetInnerHTML={{ __html: content }}
    />
  )
}

export default Icon
