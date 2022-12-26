import React from 'react';
import s from "./Portfolio.module.css"

type propsType = {
    title: string,
    text: string,
}


const Portfolio = (props: propsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>
                <h3>{props.title}</h3>
                <span className={s.description}>{props.text}</span>
                <button> VIEW PROJECT</button>
            </div>
        </div>
    );
};

export default Portfolio;