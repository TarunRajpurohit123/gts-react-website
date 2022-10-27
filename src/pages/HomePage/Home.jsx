import React from 'react';
import Hero from '../../components/container/Hero/Heroo';
import Who from '../../components/container/Who/Who';
import Footer from '../../components/layouts/Footer/Footer';
import { Wrapper } from './homestyles'



const Home = () => {
  return (
    <>
      <Wrapper>
        <Hero />
        <Who/>
        <Footer/>
      </Wrapper>
    </>
  )
}

export default Home