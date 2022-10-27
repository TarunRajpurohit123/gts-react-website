import React from 'react'
import SubHeading from '../../shared/SubHeading/SubHeading';
import Heading from '../../shared/Heading/Heading';
import Button from '../../shared/Button/Button';
import Paragraph from '../../shared/Paragraph/Paragraph';
import {WhoC,Section,Left,Right} from './whoStyles';
const Who = () => {
    return (
        <WhoC style={{ "marginTop": "var(--sTop)","marginBottom": "var(--sBottom)" }}>
            <SubHeading>WHO WE ARE
            </SubHeading>
            <Section>
                <Left>
                    <Heading css={{ "fontSize": "2rem", "marginTop": "1rem", "textAlign": "justify" }}>Your go-to digital partner for innovative design and solid solutions for Web, Mobile, and Cloud.</Heading>
                </Left>
                <Right><Button type={true}>About Us</Button></Right>
            </Section>
            <Section>
                <Left>
                    <Paragraph css={{ "lineHeight": "2.4rem" }}>The world's best and most renowned Web and Mobile App Development Company, Grab, is an Indian company with a global presence in the United States. We are deeply committed to creating extremely captivating apps that carefully adhere to the business needs and serving a wide range of projects with the utmost client satisfaction in mind.</Paragraph>
                </Left>
                <Right></Right>
            </Section>
            <video src="./video/video1.mp4" controls style={{"width":"100%"}} autoPlay loop></video>
        </WhoC>
    )
}



export default Who