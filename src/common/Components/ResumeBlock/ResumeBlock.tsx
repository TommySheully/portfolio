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
        'Responsibilities:\n' +
        'Developed React and React Native applications in TypeScript, focusing on a cross-platform approach. Creation of a learning platform for an online school with a focus on authentication, authorization, notification and lesson components. Implementation of key components such as notification systems, navigation, localization, graphs and diagrams, animations, authentication and session management.\n' +
        '\n' +
        'Stack: React, TypeScript, Redux/RTK, React Hook Form, Axios, Material-UI, SCSS, PHP, Vite.\n' +
        '\n' +
        'Achievements:\n' +
        '• Implemented a responsive interface for an online store using React and Styled Components, focusing on convenience and attractiveness.\n' +
        '• Optimized the performance of the web application by applying new technologies such as React Hooks and migrating the project to TypeScript, improving loading and interaction speed.\n' +
        '• Designed and implemented a state management system using Redux (RTK) for a complex administrative interface, ensuring data stability and consistency.\n' +
        '• Implemented a component library (Material-UI), promoting code reuse and standardization of interface design, improving development efficiency.\n' +
        '• Actively participated in the implementation of Progressive Web Application (PWA) and Jest testing, increasing offline engagement and ensuring high levels of code quality.',
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
      text:
        '• Managed the business team, ensuring coordination and achievement of goals.\n' +
        '• Implemented business process optimization to improve operational efficiency.\n' +
        '• Communicated with wholesale partners, maintaining strategic relationships.\n' +
        '• Managed financial operations, including budgeting and cost analysis.\n' +
        '• Resolved critical difficulties of the company, ensuring smooth operations.',
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
