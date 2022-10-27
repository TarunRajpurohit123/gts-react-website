import React from 'react'
import Heading from '../../components/shared/Stroke/Stroke'
import Paragraph from '../../components/shared/Paragraph/Paragraph'
import ContactForm from '../../components/container/ContactForm/ContactForm'
import SubHeading from '../../components/shared/SubHeading/SubHeading'
import TextBlock from './TextBlock'
import styles from './contactpage.module.css'
import {Contact,Top,Bottom} from './contactStyles'

const ContactPage = () => {
  return (
    <Contact>

      <div className={styles.gradientMagic}></div>

      <div style={{ "display": "flex", "justifyContent": "center" }}>
        <Top>
          <Heading css={{ "fontSize": "4.6vw" }}>
            Contact Us
          </Heading>
          <Paragraph css={{ "fontSize": "15px" }}>Contact us for all of your staffing needs and utilise our best services to complete project development inside your projected budget. Long-term business relationships are something we value.</Paragraph>
        </Top>
      </div>

      <div style={{ "display": "flex", "justifyContent": "center" }}>
        <Bottom>
          <ContactForm css={{ "width": "50%" }} />
          <div >
            <div>
              <SubHeading>GET IN TOUCH</SubHeading>
              <div style={{ "display": "flex", "marginTop": "1.5rem" }}>

                <TextBlock head={"Email Address"}>
                  <li><a href="#" style={{ "color": "var(--text)", "fontSize": "0.8rem" }}>tarun22@gmail.com</a></li>
                  <li><a href="#" style={{ "color": "var(--text)", "fontSize": "0.8rem" }}>tarun32@gmail.com</a></li>
                </TextBlock>

                <TextBlock css={{ "marginLeft": "4.6rem" }} head={"Contact No"} ><a href="#" style={{ "color": "var(--text)", "fontSize": "0.8rem" }}>7230842748</a></TextBlock>

              </div>
              <div style={{ "display": "flex", "marginTop": "2.2rem" }}>
                <TextBlock head={"Office Address"}><a href="https://www.google.com/maps/place/Celebrity+Aura,+Chimanlal+Girdharlal+Rd,+Bapu+Nagar,+Navrangpura,+Ahmedabad,+Gujarat+380009/@23.040484,72.5637312,17z/data=!3m1!4b1!4m5!3m4!1s0x395e848aebcd85ff:0x3b1ce3a4347f2ef0!8m2!3d23.0404791!4d72.5659199" target={"_blank"} style={{ "color": "var(--text)", "fontSize": "0.8rem" }}>Celebrity Aura, Chimanlal Girdharlal Rd, Bapu Nagar, Navrangpura, Ahmedabad, Gujarat 380009</a></TextBlock>
              </div>
            </div>
            <div style={{ "marginTop": "7rem" }}>
              <SubHeading>SOCIAL LINKS</SubHeading>
              <div style={{ "marginTop": "1.5rem", "display": "flex", "justifyContent": "space-between" }}>
                <a href="#" className={styles.socials}><img src="./icons/twitter.svg" /></a>
                <a href="#" className={styles.socials}><img src="./icons/fb.svg" /></a>
                <a href="#" className={styles.socials}><img src="./icons/insta.svg" /></a>
                <a href="#" className={styles.socials}><img src="./icons/lin.svg" /></a>
              </div>
            </div>
          </div>
        </Bottom>
      </div>

    </Contact>

  )
}


export default ContactPage