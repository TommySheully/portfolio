import React from 'react';
import s from "./Contact.module.css"

type propsType = {
    title: string,
    text: string,
}


const Contact = (props: propsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <div className={s.description}>
                <h4 className={s.h4}>{props.title}</h4>
                <p className={s.p}>{props.text} </p>
            </div>

        </div>
    );
};

export default Contact;