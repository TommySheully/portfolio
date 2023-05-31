import React from 'react'
import s from './ResumeBlock.module.scss'
import { Title } from '../common/Title/Title'
import { Experience } from './Experience/Experience'

export const ResumeBlock = () => {
  return (
    <div className={s.resumeBlock} id='Resume'>
      <div className={s.resumeContainer}>
        <Title title={'RESUME'} />
        <div className={s.doubleContainer}>
          <div className={s.educationContainer}>
            <h3 className={s.h3}>My Experience</h3>
            <Experience
              dataP={'2022 - PRESENT'}
              titleH2={'Frontend Developer'}
              titleH3={'PART-TIME'}
              text={
                'Maintenance and minor maintenance of websites and applications. Creation of landing pages and spa applications, support and review of legacy code, transferring the application from class components to functional ones, working with forms, validation, tests, RESTful, BLL, DAL, Bug fixing, CRUD operation and data processing, deploy.'
              }
            />
            <Experience
              dataP={'2022 - 2022'}
              titleH2={'Frontend Developer'}
              titleH3={'IT-Incubator'}
              text={
                'Study in an IT-Incubator. Learning React, Redux, JS, TS, html, css and so on.'
              }
            />
            <Experience
              dataP={'2018 - 2022'}
              titleH2={'Project Manager'}
              titleH3={'IE Bychinov E.V'}
              text={
                'Team management. Maintaining daily / weekly / monthly / annual reports. Communication with wholesale suppliers and buyers. Financial transactions. Solving current issues and difficulties of the company, analysis-research of the market for company positions.'
              }
            />
          </div>
          <div className={s.softSkillsContainer}>
            <h3 className={s.h3}>Soft Skills</h3>
            <Experience
              dataP={'Communication'}
              titleH2={'Interpersonal Skill'}
              text={
                '✔ The ability to communicate in a team\n' +
                '✔ Ask questions\n' +
                '✔ Hear others\n' +
                '✔ Resilience\n' +
                '✔ Sense of humor\n' +
                '✔ Adaptability\n'
              }
            />
            <Experience
              dataP={'Soft skills'}
              titleH2={'Social Intelligence '}
              text={
                'Teamwork, quick adaptation in a team, ability to communicate, empathy, trust, patience.'
              }
            />
            <Experience
              dataP={'Intellectual Competence'}
              titleH2={'Personal Abilities'}
              text={
                '✔ Analytical mindset\n' +
                '✔ Ability to see and solve problems\n' +
                '✔ Learning\n' +
                '✔ Time management\n' +
                '✔ Responsibility'
              }
            />
          </div>
        </div>
      </div>
    </div>
  )
}
