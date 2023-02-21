import React from 'react';
import s from './Contacts.module.scss';
import Contact from './Contact/Contact';
import {Title} from '../common/Title/Title';

import callIcon from 'assets/img/Contacts/callIcon.png'
import emailIcon from 'assets/img/Contacts/emailIcon.png'
import localIcon from 'assets/img/Contacts/localIcon.png'


const Contacts = () => {
    return (
        <div className={s.contactBlock} id="Contacts">
            <div className={s.container}>
                <Title title={"GET IN TOUCH"}/>

                <div className={s.containerMini}>
                    <div className={s.contactContainer}>
                        <Contact title="Phone" text="+375292546933" icon={callIcon}/>
                        <Contact title="Email" text="dfgthii@gmail.com" icon={emailIcon}/>
                        <Contact title="Location" text="Minsk, Belarus" icon={localIcon}/>
                    </div>

                    <form className={s.formContainer}>
                        <div className={s.inputContainer}>
                            <input type="text" placeholder="Your Name"/>
                        </div>
                        <div className={s.inputContainer}>
                            <input type="email" placeholder="Your Email"/>
                        </div>
                        <div className={s.textareaContainer}>
                            <textarea placeholder="Your Message"></textarea>
                        </div>
                        <div className={s.buttonContainer}>
                            <button className={s.btn}>SEND ME</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;