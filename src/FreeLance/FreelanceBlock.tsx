import React from 'react';
import s from "./FreelanceBlock.module.css"
import sCommon from "../common/Common.module.css"
import {Title} from "../common/Title/Title";

const FreelanceBlock = () => {
    return (
        <div className={s.freeLanceBlock}>
            <div className={`${sCommon.container} ${s.container}`}>
                <Title title={"I AM AVAILABLE FOR FREELANCE"}/>
                <div className={s.button}>
                    <button>HIRE ME</button>
                </div>

            </div>
        </div>
    );
};

export default FreelanceBlock;