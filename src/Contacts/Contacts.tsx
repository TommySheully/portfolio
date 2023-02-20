import React from 'react';
import s from "./Contacts.module.css"
import sCommon from "../common/Common.module.css"
import Contact from "./Contact/Contact";
import {Title} from "../common/Title/Title";


const Contacts = () => {
    return (
        <div className={s.contactBlock}>
            <div className={`${sCommon.container} ${s.container}`}>
                <Title title={"GET IN TOUCH"}/>

                <div className={s.containerMini}>
                    <div className={s.contactContainer}>
                        <Contact title="Phone" text="+375292546933"/>
                        <Contact title="Email" text="dfgthii@gmail.com"/>
                        <Contact title="Location" text="Minsk, Belarus"/>
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
                        <div className={s.buttonContainer}> <button>SEND ME</button></div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contacts;