import React from 'react'
import s from './Experience.module.scss'

type PropsType = {
  date: string
  position: string
  place?: string
  text: string
}

export const Experience = (props: PropsType) => {
  return (
    <div className={s.educationContainer}>
      <p className={s.dataBlock}>{props.date}</p>
      <h2 className={s.h2}>{props.position}</h2>
      <h3 className={s.h3}>{props.place}</h3>
      <p className={s.p}>{props.text}</p>
    </div>
  )
}
