import React from 'react';
import s from "./Main.module.css"
import sCommon from "../common/Common.module.css"


const Main = () => {
    return (
        <div className={s.main}>
            <div className={sCommon.container}>
                <div className={s.text}>
                    <span>Hi There</span>
                    <h1>I am Rostislav</h1>
                    <p>I'm Frontend Developer</p>
                </div>
                <div className={s.photo}>
                    <img src="/src/Main/Me.jpg"/>
                </div>
            </div>
        </div>
    );
};

export default Main;