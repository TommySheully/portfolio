import React from 'react';
import s from "./MySkills.module.css"
import sCommon from "../common/Common.module.css"
import Skill from "./skill/Skill";


const MySkills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={`${sCommon.container} ${s.container}`}>
                <h2 className={s.title}>Skills</h2>
                <div className={s.skills}>
                    <Skill title="react" text="sdsadasdsdsadasdsdsadasdsdsadasdsdsadasdsdsadasdsdsadasdsdsadasdsdsadasdsdsadasdsdsadasdsdsadasd"/>
                    <Skill title="js" text="sdsadasdsdsadasdsdsadasdsdsadasdsdsadasdsdsadasdsdsadasdsdsadasdsdsadasdsdsadasdsdsadasdsdsadasd"/>
                    <Skill title="css" text="sdsadasdsdsadasdsdsadasdsdsadasdsdsadasdsdsadasdsdsadasdsdsadasdsdsadasdsdsadasdsdsadasdsdsadasd"/>
                    <Skill title="html" text="sdsadasdsdsadasdsdsadasdsdsadasdsdsadasdsdsadasd"/>
                    <Skill title="Redux" text="sdsadasdsdsadasdsdsadasdsdsadasdsdsadasdsdsadasd"/>
                    <Skill title="React-redux" text="sdsadasdsdsadasdsdsadasdsdsadasdsdsadasdsdsadasd"/>
                </div>

            </div>
        </div>
    );
};

export default MySkills;