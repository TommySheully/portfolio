import React from 'react';
import s from "./header.module.css"

const Header = () => {
    return (
        <div className={s.header}>
            <div className={s.nav}>
                <a href="">Main</a>
                <a href="">Skills</a>
                <a href="">Portfolio</a>
                <a href="">Contacts</a>
            </div>
        </div>
    );
};

export default Header;