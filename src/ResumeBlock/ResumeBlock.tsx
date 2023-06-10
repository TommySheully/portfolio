import React from 'react'
import s from './ResumeBlock.module.scss'
import { Title } from '../common/Title/Title'
import { Experience } from './Experience/Experience'
import { v1 } from 'uuid'

export const ResumeBlock = () => {
  const myResume = [
    {
      date: '2022 - PRESENT',
      titleH2: 'Frontend Developer',
      place: 'LLC Belconsole (PART-TIME)',
      text: 'Maintenance and minor maintenance of websites and applications. Creation of landing pages and spa applications, support and review of legacy code, transferring the application from class components to functional ones, working with forms, validation, tests, RESTful, BLL, DAL, Bug fixing, CRUD operation and data processing, deploy, English - A2',
      id: v1()
    },
    {
      date: '2022 - 2022',
      titleH2: 'Frontend Developer',
      place: 'IT-Incubator',
      text: 'Study in an IT-Incubator. Learning React, Redux, JS, TS, html, css and so on.',
      id: v1()
    },
    {
      date: '2018 - 2022',
      titleH2: 'Project Manager',
      place: 'IE Bychinov E.V',
      text: 'Team management. Maintaining daily / weekly / monthly / annual reports. Communication with wholesale suppliers and buyers. Financial transactions. Solving current issues and difficulties of the company, analysis-research of the market for company positions.',
      id: v1()
    }
  ]
  const mySoftSkills = [
    {
      date: 'Communication',
      id: v1(),
      titleH2: 'Interpersonal Skill',
      text:
        '✔ The ability to communicate in a team\n' +
        '✔ Ask questions\n' +
        '✔ Hear others\n' +
        '✔ Resilience\n' +
        '✔ Sense of humor\n' +
        '✔ Adaptability\n'
    },
    {
      date: 'Soft skills',
      id: v1(),
      titleH2: 'Social Intelligence ',
      text: 'Teamwork, quick adaptation in a team, ability to communicate, empathy, trust, patience.'
    },
    {
      date: 'Intellectual Competence',
      id: v1(),
      titleH2: 'Personal Abilities',
      text:
        '✔ Analytical mindset\n' +
        '✔ Ability to see and solve problems\n' +
        '✔ Learning\n' +
        '✔ Time management\n' +
        '✔ Responsibility'
    }
  ]

  return (
    <div className={s.resumeBlock} id='Resume'>
      <div className={s.resumeContainer}>
        <Title title={'RESUME'} />
        <div className={s.doubleContainer}>
          <div className={s.educationContainer}>
            <h3 className={s.h3}>My Experience</h3>
            {myResume.map((el) => (
              <Experience date={el.date} titleH2={el.titleH2} place={el.place} text={el.text} key={el.id} />
            ))}
          </div>
          <div className={s.softSkillsContainer}>
            <h3 className={s.h3}>Soft Skills</h3>
            {mySoftSkills.map((el) => (
              <Experience date={el.date} titleH2={el.titleH2} text={el.text} key={el.id} />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
