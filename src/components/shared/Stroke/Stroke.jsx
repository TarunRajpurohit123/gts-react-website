import React from 'react';
import styled from './stroke.module.css';

const Stroke = ({children,css}) => {
  return (
    <h1 className={styled.stroke} style={css}>{children}</h1>
  )
}

export default Stroke