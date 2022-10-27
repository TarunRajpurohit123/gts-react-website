import React from 'react';
import styled from './button.module.css';

const Button = ({type,children,css}) => {
  return (
    <button style={css} className={type?(styled.button2):(styled.button)}>{children}</button>
  )
}

export default Button