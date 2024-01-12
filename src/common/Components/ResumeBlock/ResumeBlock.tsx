import React from 'react'
import s from './ResumeBlock.module.scss'
import { Title, Experience } from 'common'
import { v1 } from 'uuid'

export const ResumeBlock = () => {
  const myResume = [
    {
      date: 'August 2022 - PRESENT',
      titleH2: 'Frontend Developer',
      place: 'LLC “ApSoft” - Minsk',
      text:
        'I developed React and React Native applications using TypeScript with a cross-platform approach:\n' +
        '• Developed an educational platform for an online school. Implemented authentication and authorization systems, notification system, and worked on lesson components, profiles, task checking, and other features. Integrated a platform for conducting online classes.\n' +
        'Stack: React, Redux (RTK), React Hook Form, Axios, Material-UI (MUI), styled-components.\n' +
        '• Created a cross-platform reminder application and an app for measuring blood pressure. Implemented navigation, set up a notification system, integrated charts and diagrams using gesture-handler, worked on app localization, created animations, and handled authentication and session management.\n' +
        'Stack: React Native, AsyncStorage, styled-components, native modules (Java, Ruby, Objective-C, and C++), Xcode.',
      id: v1()
    },
    {
      date: '2022',
      titleH2: 'Frontend Mentor - React/TS/Redux',
      place: 'LLC “IT-INCUBATOR” - Minsk',
      text:
        'Providing assistance to students on the training program and pedagogical projects. \n' +
        'ESLint · NextJS · REST API · Git · Sass · AXIOS · Storybook · MUI · TS · Redux · React · WebSocket · code review · Jest · React Query · RTK-Query · RTK ',
      id: v1()
    },
    {
      date: 'November 2022 - October 2023',
      titleH2: 'Project Manager',
      place: 'LLC “Belconsole”',
      text: 'Led a team within the business. Implemented and optimized business processes to improve productivity and streamline operations within the organization. Communicated with wholesale suppliers and buyers. Handled financial operations. Provided quick resolutions to critical challenges faced by the company.',
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
