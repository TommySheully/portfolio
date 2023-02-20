import React from 'react';
import s from "./MySkills.module.scss"
import Skill from "./skill/Skill";
import {Title} from "../common/Title/Title";

import fondIcon from "assets/img/IconSkills/fundamentIcon.png";
import devIcon from "assets/img/IconSkills/devIcon.png";
import designIcon from "assets/img/IconSkills/designIcon.png";
import testingIcon from "assets/img/IconSkills/testIcon.png";


const MySkills = () => {
    return (
        <div className={s.skillsBlock}>
            <div className={s.container}>
                <Title title={"Skills"}/>
                <div className={s.skills}>
                    <Skill title="DEVELOPMENT"
                           text="React, Redux, AXIOS, React Toolkit, GitHub, Postman"
                           icon={devIcon}/>
                    <Skill title="FOUNDATION"
                           text="JavaScript, TypeScript, HTML5, CSS3"
                           icon={fondIcon}/>
                    <Skill title="TESTING"
                           text="Unit Tests, SnapShot, Storybook"
                           icon={testingIcon}/>
                    <Skill title="DESIGN" text="Material UI, Ant-Design etc, Figma"
                           icon={designIcon}/>
                </div>
            </div>
        </div>
    );
};

export default MySkills;