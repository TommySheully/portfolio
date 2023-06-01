import React from 'react'
import s from './MySkills.module.scss'
import Skill from './skill/Skill'
import { Title } from '../common/Title/Title'

import fondIcon from 'assets/img/IconSkills/fundamentIcon.png'
import devIcon from 'assets/img/IconSkills/devIcon.png'
import designIcon from 'assets/img/IconSkills/designIcon.png'
import testingIcon from 'assets/img/IconSkills/testIcon.png'

const MySkills = () => {
  const mySkill = [
    {
      title: 'DEVELOPMENT',
      text: 'React, Redux, React Toolkit (1 year), NextJS, AXIOS, GitHub, Postman, Vercel, Prettier',
      icon: devIcon
    },
    {
      title: 'FOUNDATION',
      text: 'JavaScript, TypeScript, HTML5, CSS3 (SCSS, module scc, Styled-Components, sass)',
      icon: fondIcon
    },
    {
      title: 'TESTING',
      text: 'Unit Tests, SnapShot, Storybook',
      icon: testingIcon
    },
    {
      title: 'DESIGN',
      text: 'Material UI, Ant-Design etc, Figma',
      icon: designIcon
    }
  ]

  return (
    <div className={s.skillsBlock} id='Skills'>
      <div className={s.container}>
        <Title title={'SKILLS'} />
        <div className={s.skills}>
          {mySkill.map((el) => (
            <Skill title={el.title} text={el.text} icon={el.icon} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MySkills
