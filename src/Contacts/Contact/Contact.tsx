import React from 'react';
import s from "./Contact.module.scss"

type propsType = {
    title: string,
    text: string,
    icon: any
    link?: string
}


const Contact = (props: propsType) => {
        return (
            <div className={s.skill}>
                <div className={s.icon}>
                    <a href={props.link} className={s.btn} target="_blank" rel="noreferrer">
                        <img src={props.icon}  alt={"icon"}/>
                    </a>

                </div>
                <div className={s.description}>
                    <h4 className={s.h4}>{props.title}</h4>
                    <p className={s.p}>{props.text} </p>
                </div>
            </div>
        );
    }
;

export default Contact;