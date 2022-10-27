import React from 'react';
import style from './contact.module.css';
import './code'
import { useState } from 'react';
import COUNTRIES from './code';
import Button from '../../shared/Button/Button';
import AOS from 'aos';
import {Wrapper,InnerWrap} from './contactStyles';

AOS.init();
const ContactForm = ({ css }) => {
    const [code, setCode] = useState(COUNTRIES);
    return (
        <Wrapper data-aos="fade-up-right" style={css} >
            <InnerWrap>
                <h1 className={style.h1}>Say "hi!" by filling out the form below.</h1>
                <form className={style.form}>
                    <input type="text" name="name" placeholder='Name' required className={style.input1} />
                    <input type="text" name="email" placeholder='Email Address' required className={style.input2} />
                    <div className={style.row3}>
                        <select name="mobilecode" id="moco" className={style.select}>
                            {
                                code.map((moco) => {
                                    return <option name="mcop">{moco.mobileCode}</option>
                                })
                            }
                        </select>
                        <input type="text" name="phone" placeholder='Phone Number' required className={style.input3} />
                    </div>
                    <select name="mobilecode" id="moco" className={style.select2}>
                        {
                            code.map((moco) => {
                                return <option name="mcop">{moco.name}</option>
                            })
                        }
                    </select>
                    <textarea name="desc" id="desc" className={style.textarea}></textarea>
                    <Button cls={"mt"}>Send</Button>
                </form>
            </InnerWrap>
        </Wrapper>
    )
}



export default ContactForm