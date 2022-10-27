import React from 'react';
import {Para} from './paragraphStyle'

const Paragraph = ({children,css}) => {
  return (
    <Para style={css}>{children}</Para>
  )
}

export default Paragraph