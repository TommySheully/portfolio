import React from 'react';
import s from "./FreelanceBlock.module.css"
import sCommon from "../common/Common.module.css"

const FreelanceBlock = () => {
    return (
        <div className={s.freeLanceBlock}>
            <div className={`${sCommon.container} ${s.container}`}>
                <div><h2 className={s.title}>I AM AVAILABLE FOR FREELANCE</h2></div>
                <div className={s.button}>
                    <button>HIRE ME</button>
                </div>

            </div>
        </div>
    );
};

export default FreelanceBlock;