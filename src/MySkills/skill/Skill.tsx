import React from 'react';
import s from "./Skill.module.css"

type propsType = {
    title: string,
    text: string,
}


const Skill = (props: propsType) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}></div>
            <h3>{props.title}</h3>
            <span className={s.description}>{props.text} </span>

        </div>
    );
};

export default Skill;