import React from 'react'
import Img from 'react-image'

export const Image = ({ children, ...props }) => {
  const imgStyle = {
    width: "100%"
  }
  return <div>
    <Img style={imgStyle} src={props.src} alt={props.alt} />
  </div>
}