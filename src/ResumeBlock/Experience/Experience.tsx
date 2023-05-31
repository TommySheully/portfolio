import React from 'react'
import s from './Experience.module.scss'

type PropsType = {
  dataP: string
  titleH2: string
  titleH3?: string
  text: string
}

export const Experience = (props: PropsType) => {
  return (
    <div className={s.educationContainer}>
      <p className={s.dataBlock}>{props.dataP}</p>
      <h2 className={s.h2}>{props.titleH2}</h2>
      <h3 className={s.h3}>{props.titleH3}</h3>
      <p className={s.p}>{props.text}</p>
    </div>
  )
}
