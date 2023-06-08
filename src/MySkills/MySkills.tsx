import React from 'react'
import s from './MySkills.module.scss'
import { Skill } from './skill/Skill'
import { Title } from '../common/Title/Title'

import fondIcon from 'assets/img/IconSkills/fundamentIcon.png'
import devIcon from 'assets/img/IconSkills/devIcon.png'
import designIcon from 'assets/img/IconSkills/designIcon.png'
import testingIcon from 'assets/img/IconSkills/testIcon.png'
import { v1 } from 'uuid'

export const MySkills = () => {
  const mySkill = [
    {
      title: 'DEVELOPMENT',
      text: 'React, Redux, React Toolkit (1 year), NextJS, AXIOS, GitHub, Postman, Vercel, Prettier',
      icon: devIcon,
      id: v1()
    },
    {
      title: 'FOUNDATION',
      text: 'JavaScript, TypeScript, HTML5, CSS3 (SCSS, module scc, Styled-Components, sass)',
      icon: fondIcon,
      id: v1()
    },
    {
      title: 'TESTING',
      text: 'Unit Tests, SnapShot, Storybook',
      icon: testingIcon,
      id: v1()
    },
    {
      title: 'DESIGN',
      text: 'Material UI, Ant-Design etc, Figma',
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
