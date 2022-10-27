import React from 'react'
import Paragraph from '../../shared/Paragraph/Paragraph';
import Heading from '../../shared/Heading/Heading';
import { Hero, Container, Left, Right } from './heroStyles.js';
import ContactForm from '../ContactForm/ContactForm'


const paragrapgStyle = {
    "fontSize": "3rem"
}

const Heroo = () => {
    return (
        <Hero>
            <Container>
                <Left>
                    <Heading css={{ "fontSize": "3.3rem" }}>GrabTheSite</Heading>
                    <Paragraph css={paragrapgStyle}>Your Digital Dream Is Our Next To Do</Paragraph>
                </Left>
                <Right><ContactForm css={{"width":"100%"}}/></Right>
            </Container>
        </Hero>
    )
}

export default Heroo