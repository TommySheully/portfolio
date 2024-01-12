import React from 'react'
import s from './MySkills.module.scss'
import { Title, Skill } from 'common'
import { v1 } from 'uuid'
import { designIcon, devIcon, fondIcon, testingIcon } from 'assets'

export const MySkills = () => {
  const mySkill = [
    {
      title: 'DEVELOPMENT',
      text: 'React, Redux/RTK, React Native, Next.JS, Redux-saga, Zustand, AXIOS, GitHub, React-Hook-Form, Postman, Prettier, ESLint, Vite, Webpack',
      icon: devIcon,
      id: v1()
    },
    {
      title: 'FOUNDATION',
      text: 'JavaScript, TypeScript, HTML, CSS3 (SCSS, module, Styled-Components, sass)',
      icon: fondIcon,
      id: v1()
    },
    {
      title: 'TESTING',
      text: 'Unit Test/Jest, SnapShot, Storybook',
      icon: testingIcon,
      id: v1()
    },
    {
      title: 'DESIGN',
      text: 'Material UI, Ant-Design etc, Tailwind',
      icon: designIcon,
      id: v1()
    }
  ]

  return (
    <div className={s.skillsBlock} id='Skills'>
      <div className={s.container}>
        <Title title={'SKILLS'} />
        <div className={s.skills}>
          {mySkill.map((el) => (
            <Skill title={el.title} text={el.text} icon={el.icon} key={el.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
