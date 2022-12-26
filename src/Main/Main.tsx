import React from 'react';
import s from "./Main.module.css"

const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.text}>
                <span>Hi There</span>
                <h1>I am Rostislav</h1>
                <p>I'm Frontend Developer</p>
            </div>
            <div className={s.photo}>

            </div>
        </div>
    );
};

export default Main;