import React from 'react';
import s from "./Contacts.module.css"
import sCommon from "../common/Common.module.css"
import Contact from "./Contact/Contact";


const Contacts = () => {
    return (
        <div className={s.contactBlock}>
            <div className={`${sCommon.container} ${s.container}`}>
                <h2 className={s.title}>GET IN TOUCH</h2>
                <div className={s.containerMini}>
                    <div className={s.contactContainer}>
                        <Contact title="Phone" text="+375292546933"/>
                        <Contact title="Email" text="dfgthii@gmail.com"/>
                        <Contact title="Location" text="Minsk, Belarus"/>
                    </div>
                    <form className={s.formContainer}>
                        <div className={s.inputContainer}>
                            <input type="text" placeholder="Your Name"/>
                            <input type="email" placeholder="Your Email"/>
                        </div>
                        <textarea placeholder="Your Message"></textarea>
                        <button>SEND ME</button>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Contacts;