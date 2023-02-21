import React from 'react';
import s from "./ResumeBlock.module.scss"
import {Title} from "../common/Title/Title";
import {Experience} from "./Experience/Experience";

export const ResumeBlock = () => {
    return (
        <div className={s.resumeBlock} id="Resume">
            <div className={s.resumeContainer}>
                <Title title={"RESUME"}/>
                <div className={s.doubleContainer}>
                    <div className={s.educationContainer}>
                        <h3 className={s.h3}>My Experience</h3>
                        <Experience
                            dataP={'2022 - 2023'}
                            titleH2={'Frontend Developer'}
                            titleH3={'IT-Incubator'}
                            text={'Study in an IT-Incubator. Learning React, Redux, JS, TS, html, css and so on.'}/>
                        <Experience
                            dataP={'2019 - 2023'}
                            titleH2={'Psychology, Psychologist Practitioner '}
                            titleH3={'Belarusian State Pedagogical University M. Tanka, Minsk'}
                            text={'Education at the University of Psychology, Psychologist Practitioner'}/>
                        <Experience
                            dataP={'2019 - 2021'}
                            titleH2={'PM Assistant'}
                            titleH3={'IE Bychinov E.V'}
                            text={'Keeping records of the management team. Maintaining daily / weekly / monthly / annual reports. Сommunication with wholesale suppliers and buyers. Financial transactions. Solving current issues and difficulties of the company, analysis-research of the market for company positions.'}/>

                    </div>
                    <div className={s.softSkillsContainer}>
                        <h3 className={s.h3}>Soft Skills</h3>
                        <Experience
                            dataP={'Communication'}
                            titleH2={'Interpersonal Skill'}
                            text={'The ability to communicate in a team, ask questions, the ability to speak facts, to hear others.'}/>
                        <Experience
                            dataP={'Soft skills'}
                            titleH2={'Social Intelligence '}
                            text={'Teamwork, quick adaptation in a team, ability to communicate, empathy, trust, patience.'}/>
                        <Experience
                            dataP={'Intellectual Competence'}
                            titleH2={'Personal Abilities'}
                            text={'✔ Analytical mindset\n' +
                                '✔ Ability to see and solve problems\n' +
                                '✔ Learning\n' +
                                '✔ Time management\n' +
                                '✔ Responsibility'}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
