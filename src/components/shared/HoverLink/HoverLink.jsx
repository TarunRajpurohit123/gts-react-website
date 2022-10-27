import React from 'react';
import styled from './hoverlink.module.css'
import { Link } from 'react-router-dom';

const HoverLink = ({children,path,isButton}) => {
  return (
    <Link to={path} className={isButton?styled.contactBtn:styled.hoverlink}>{children}</Link>
  )
}

export default HoverLink