import React from 'react'
import s from './ResumeBlock.module.scss'
import { Title } from '../common/Title/Title'
import { Experience } from './Experience/Experience'

export const ResumeBlock = () => {
  const myResume = [
    {
      date: '2022 - PRESENT',
      position: 'Frontend Developer',
      place: 'LLC IT-StartUp (PART-TIME)',
      text: 'Maintenance and minor maintenance of websites and applications. Creation of landing pages and spa applications, support and review of legacy code, transferring the application from class components to functional ones, working with forms, validation, tests, RESTful, BLL, DAL, Bug fixing, CRUD operation and data processing, deploy, English - A2'
    },
    {
      date: '2022 - 2022',
      position: 'Frontend Developer',
      place: 'IT-Incubator',
      text: 'Study in an IT-Incubator. Learning React, Redux, JS, TS, html, css and so on.'
    },
    {
      date: '2018 - 2022',
      position: 'Project Manager',
      place: 'IE Bychinov E.V',
      text: 'Team management. Maintaining daily / weekly / monthly / annual reports. Communication with wholesale suppliers and buyers. Financial transactions. Solving current issues and difficulties of the company, analysis-research of the market for company positions.'
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
              <Experience
                date={el.date}
                position={el.position}
                place={el.place}
                text={el.text}
              />
            ))}
          </div>
          <div className={s.softSkillsContainer}>
            <h3 className={s.h3}>Soft Skills</h3>
            <Experience
              date={'Communication'}
              position={'Interpersonal Skill'}
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
              date={'Soft skills'}
              position={'Social Intelligence '}
              text={
                'Teamwork, quick adaptation in a team, ability to communicate, empathy, trust, patience.'
              }
            />
            <Experience
              date={'Intellectual Competence'}
              position={'Personal Abilities'}
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
