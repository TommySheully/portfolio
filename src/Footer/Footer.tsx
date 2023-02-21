import React from 'react';
import s from "./Footer.module.scss"

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.footerContainer}>
                <div className={s.rightsContainer}>
                    © 2023, All Rights Reserved.
                </div>
                <div className={s.contactsContainer}>
                    <a className={s.aHref} href="https://www.linkedin.com/in/tommysheully"> LINKEDIN </a>
                    <a className={s.aHref} href="https://github.com/TommySheully"> GITHUB </a>
                    <a className={s.aHref} href="https://t.me/tommysheully"> TELEGRAM </a>
                </div>

            </div>
        </div>
    );
};

export default Footer;