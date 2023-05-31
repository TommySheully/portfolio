import React from 'react'
import s from './MyPortfolio.module.scss'
import Portfolio from './portfolioState/Portfolio'
import { Title } from '../common/Title/Title'

import imgOne from 'assets/img/PortfolioImg/photo-1.jpg'
import imgTwo from 'assets/img/PortfolioImg/photo-2.png'
import imgThree from 'assets/img/PortfolioImg/photo-3.png'
import imgFour from 'assets/img/PortfolioImg/photo-4.png'
import imgFive from 'assets/img/PortfolioImg/photo-5.png'
import imgSix from 'assets/img/PortfolioImg/photo-6.png'
import imgSeven from 'assets/img/PortfolioImg/photo-7.jpg'
import imgEight from 'assets/img/PortfolioImg/photo-8.png'

const MyPortfolio = () => {
  const myPortfolio = [
    {
      title: 'Team Project',
      text: 'TS, React, Redux Toolkit, Axios, Material UI, Formik, Prettier',
      img: imgOne,
      link: 'https://igor-tech.github.io/friday-project-cards/',
      linkGit: 'https://github.com/igor-tech/friday-project-cards'
    },
    {
      title: 'Todolist',
      text: 'TS, React, Redux Toolkit, RestAPI, Thunk, Material UI, Unit Tests, Formik',
      img: imgThree,
      link: 'https://tommysheully.github.io/to-do-list',
      linkGit: 'https://github.com/TommySheully/to-do-list'
    },
    {
      title: 'Rick and Morty - Encyclopedia',
      text: 'NextJS, TS, React, Axios, Vercel, Styled-Components, NProgress',
      img: imgTwo,
      link: 'https://rick-and-morty-lake-phi.vercel.app',
      linkGit: 'https://github.com/TommySheully/nextJS-Rick-and-Morti'
    },
    {
      title: 'Portfolio',
      text: 'TS, HTML, SCSS, Formik, Typewriter-effect',
      img: imgFour,
      link: 'https://tommysheully.github.io/Portfolio/',
      linkGit: 'https://github.com/TommySheully/portfolio'
    },
    {
      title: 'THE SOCIAL NETWORK',
      text: 'TS, Redux, RestAPI, Thunk,ANT Design, Unit Tests, Formik',
      img: imgFive,
      link: 'https://tommysheully.github.io/social-network/',
      linkGit: 'https://github.com/TommySheully/social-network'
    },
    {
      title: 'Counter',
      text: 'TS, Redux, React',
      img: imgSix,
      link: 'https://tommysheully.github.io/TestTasksFor1MothStydy/',
      linkGit: 'https://github.com/TommySheully/TestTasksFor1MothStydy'
    },
    {
      title: 'FUTURE PROJECT',
      text: '...in progress',
      img: imgSeven
    },
    {
      title: 'FUTURE PROJECT',
      text: '...in progress',
      img: imgEight
    }
  ]

  return (
    <div className={s.portfolioBlock} id='Portfolio'>
      <div className={s.container}>
        <Title title={'MY PORTFOLIO'} />
        <div className={s.portfolio}>
          {myPortfolio.map((el) => (
            <Portfolio
              title={el.title}
              text={el.text}
              img={el.img}
              link={el.link}
              linkGit={el.linkGit}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default MyPortfolio
