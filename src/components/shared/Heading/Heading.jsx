import React from 'react';
import styled from './heading.module.css'

const Heading = ({children,css}) => {
  return (
    <h1 className={styled.heading} style={css}>{children}</h1>
  )
}

export default Heading