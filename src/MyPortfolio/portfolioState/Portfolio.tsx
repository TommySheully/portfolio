import React from 'react';
import s from "./Portfolio.module.scss"

type propsType = {
    title: string,
    text: string,
    link?: string,
    img?: any
}


const Portfolio = (props: propsType) => {
    return (
        <div className={s.portfolioBlock} >
            <div className={s.imgBlock} style={{backgroundImage: `url(${props.img})`}}>
                <div className={s.overlay}>
                    <div className={s.description}>
                        <h3 className={s.h2}>{props.title}</h3>
                        <p>{props.text}</p>
                        <a href={props.link} className={s.btn} target="_blank" rel="noreferrer">VIEW PROJECT</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;