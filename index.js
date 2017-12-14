import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const IconBase = ({ children, color, size, style, large, small, className, ...props }, { reactIconBase = {} }) => {
  var computedSize = size || reactIconBase.size || large ? '2em' : small ? '1em' : '1.3em'
  return (
    <Svg
      className={`icon ${className || ''}`}
      children={children}
      fill='currentColor'
      preserveAspectRatio='xMidYMid meet'
      height={computedSize}
      width={computedSize}
      {...reactIconBase}
      {...props}
      style={{
        verticalAlign: 'middle',
        color: color || reactIconBase.color,
        ...(reactIconBase.style || {}),
        ...style
      }}
    />
  )
}

const Svg = styled.svg`
  cursor: ${p => p.button ? 'pointer' : 'inherit'};
  color: ${p => p.gray ? '#c6cbd1' : 'inherit'};
  &:hover {
    color: ${p => p.gray ? '#959da5' : 'inherit'};
  }
`

IconBase.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ]),
  style: PropTypes.object
}

IconBase.contextTypes = {
  reactIconBase: PropTypes.shape(IconBase.propTypes)
}

export default IconBase
