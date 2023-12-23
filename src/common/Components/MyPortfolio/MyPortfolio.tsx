import React from 'react'
import s from './MyPortfolio.module.scss'
import { Title, Portfolio } from 'common'

import { v1 } from 'uuid'
import { imgEight, imgFive, imgFour, imgOne, imgSeven, imgSix, imgThree, imgTwo } from 'assets'

export const MyPortfolio = () => {
  const myPortfolio = [
    {
      title: 'Lunch Calculation',
      text: 'TS, React, Redux Toolkit, Redux Persist, Material UI, React Hook Form, Styled-Components, pdf',
      img: imgOne,
      link: 'https://lunch-calculation.vercel.app/',
      linkGit: 'https://github.com/TommySheully/lunch-calculation',
      id: v1()
    },

    {
      title: 'Task Scheduler',
      text: 'TS, React, Redux Toolkit, RestAPI, Thunk, Material UI, Unit Tests, Formik',
      img: imgThree,
      link: 'https://tommysheully.github.io/to-do-list',
      linkGit: 'https://github.com/TommySheully/to-do-list',
      id: v1()
    },
    {
      title: 'Team Project',
      text: 'TS, React, Redux Toolkit, Axios, Material UI, Formik, Prettier',
      img: imgTwo,
      link: 'https://igor-tech.github.io/friday-project-cards/',
      linkGit: 'https://github.com/igor-tech/friday-project-cards',
      id: v1()
    },
    {
      title: 'Portfolio',
      text: 'TS, HTML, SCSS, Formik, Typewriter-effect',
      img: imgFour,
      link: 'https://tommysheully.github.io/Portfolio/',
      linkGit: 'https://github.com/TommySheully/portfolio',
      id: v1()
    },
    {
      title: 'Rick and Morty - Encyclopedia',
      text: 'NextJS, TS, React, Axios, Vercel, Styled-Components, NProgress',
      img: imgFive,
      link: 'https://rick-and-morty-lake-phi.vercel.app',
      linkGit: 'https://github.com/TommySheully/nextJS-Rick-and-Morti',
      id: v1()
    },
    {
      title: 'THE SOCIAL NETWORK',
      text: 'TS, Redux, RestAPI, Thunk,ANT Design, Unit Tests, Formik',
      img: imgSix,
      link: 'https://tommysheully.github.io/social-network/',
      linkGit: 'https://github.com/TommySheully/social-network',
      id: v1()
    },
    {
      title: 'FUTURE PROJECT',
      text: '...in progress',
      img: imgSeven,
      id: v1()
    },
    {
      title: 'FUTURE PROJECT',
      text: '...in progress',
      img: imgEight,
      id: v1()
    }
  ]

  return (
    <div className={s.portfolioBlock} id='Portfolio'>
      <div className={s.container}>
        <Title title={'MY PORTFOLIO'} />
        <div className={s.portfolio}>
          {myPortfolio.map((el) => (
            <Portfolio title={el.title} text={el.text} img={el.img} link={el.link} linkGit={el.linkGit} key={el.id} />
          ))}
        </div>
      </div>
    </div>
  )
}
