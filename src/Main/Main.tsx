import React from 'react';
import s from './Main.module.scss'
import photo from 'assets/img/Main/portpet.jpg'
import Typewriter from "typewriter-effect";
const pdfUrl = '/CV.pdf';


const Main = () => {

    const sendHandler = () => {

    }

    return (
        <div className={s.container} id='Main'>
            <div className={s.main}>
                <div className={s.containerMain}>
                    <div className={s.textBlock}>
                        <h2>Welcome</h2>
                        <h1 className={s.h1}>
                            <Typewriter
                                options={{
                                    strings: [
                                        "I'm Rostislav.",
                                        "I'm Frontend Developer.",
                                    ],
                                    autoStart: true,
                                    loop: true,
                                }}
                            />
                        </h1>
                        <p className={s.p}>Based in Minsk, Belarus.</p>
                        <button className={s.btn} onClick={sendHandler}>
                            <a className={s.aHref} href={pdfUrl} download>DOWNLOAD CV</a></button>
                    </div>
                    <div className={s.photoBlock}>
                        <img className={s.photo} src={photo} alt="My ava"/>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Main;