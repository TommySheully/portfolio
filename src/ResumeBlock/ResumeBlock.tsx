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
      place: 'LLC ApSoft',
      text:
        'Development of react and react native applications on TS, cross-platform development, team work on commercial projects.\n' +
        'Work projects:\n' +
        '• learning platform for online school, stack: react, Redux(RTK), react hook form, axios, mui, styled-components.\n' +
        '• cross-platform application for reminders and application for measuring blood pressure, stack: react native, async storage, styled-components, native modules (java, ruby, objective-c and c++), xcod. Implemented and used gesture-handler, localization, animation, charts.',
      id: v1()
    },
    {
      date: '2018 - 2022',
      titleH2: 'Project Manager',
      place: 'LLC Belconsole',
      text: 'Team leadership and supervision. Implementing and optimizing business processes to enhance productivity and streamline operations within the organization. Communication with wholesale suppliers and buyers. Financial transactions. Successfully resolving critical issues and challenges.',
      id: v1()
    },
    {
      date: '2022',
      titleH2: 'Frontend Developer',
      place: 'IT-Incubator',
      text: 'Study in an IT-Incubator. Learning React, Redux, JS, TS, html, css and so on.',
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
      text:
        '✔ Teamwork\n' +
        '✔ quick adaptation in a team\n' +
        '✔ ability to communicate\n' +
        '✔ empathy\n' +
        '✔ trust\n' +
        '✔ patience\n'
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
