import React from 'react';
import s from "./Footer.module.css"
import sCommon from "../common/Common.module.css"

const Footer = () => {
    return (
        <div className={s.FooterBlock}>
            <div className={`${sCommon.container} ${s.container}`}>
                <div className={s.rights}>
                    © 2023, All Rights Reserved.
                </div>
                <div className={s.contacts}>
                    <a>LINKEDIN  </a>
                    <a>EMAIL  </a>
                    <a>INSTAGRAM  </a>
                </div>

            </div>
        </div>
    );
};

export default Footer;