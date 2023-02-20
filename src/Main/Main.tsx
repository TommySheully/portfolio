import React from 'react';
import s from "./Main.module.scss"


const Main = () => {
    return (
        <div className={s.main}>
            <div className={s.containerMain}>
                <div className={s.textBlock}>
                    <span>Hi There</span>
                    <h1>I am Rostislav</h1>
                    <p>I'm Frontend Developer</p>
                </div>
                <div className={s.photoBlock}>
                    <img src="/src/Main/Me.jpg"/>
                </div>
            </div>
        </div>
    );
};

export default Main;