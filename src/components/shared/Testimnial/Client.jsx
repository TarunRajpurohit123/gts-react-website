import React from 'react';
import Button from '../Button/Button';
import {ClientWrap,Block1} from './testimonialStyles'

const Client = () => {
  return (
    <>
      <ClientWrap>
        <Block1>
            <img src="./img/test1.jpg" style={{"borderRadius":"50%","width":"7rem"}}/>
            <h1 style={{"color":"var(--pure)"}}>Tarun Raj</h1>
            <h2 style={{"color":"var(--pure)"}}>India</h2>
        </Block1>
        <Button type={true}><span>View All</span> <img src="./icons/forward.svg" style={{"width":"1rem","marginLeft":"1rem"}}/></Button>
      </ClientWrap>
    </>
  )
}


export default Client