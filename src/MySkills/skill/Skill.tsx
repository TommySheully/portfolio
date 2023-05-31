import React from 'react'
import s from './Skill.module.scss'

type propsType = {
  title: string
  text: string
  icon: any
}

const Skill = (props: propsType) => {
  return (
    <div className={s.skill}>
      <div className={s.icon}>
        <img src={props.icon} alt={'icon'} />
      </div>
      <h3 className={s.title}>{props.title}</h3>
      <span className={s.description}>{props.text} </span>
    </div>
  )
}

export default Skill
