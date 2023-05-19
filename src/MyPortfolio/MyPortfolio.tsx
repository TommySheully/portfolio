import React from 'react';
import s from "./MyPortfolio.module.scss"
import Portfolio from "./portfolioState/Portfolio";
import {Title} from "../common/Title/Title";

import imgOne from 'assets/img/PortfolioImg/photo-1.jpg'
import imgTwo from 'assets/img/PortfolioImg/photo-2.png'
import imgThree from 'assets/img/PortfolioImg/photo-3.png'
import imgFour from 'assets/img/PortfolioImg/photo-4.png'
import imgFive from 'assets/img/PortfolioImg/photo-5.png'
import imgSix from 'assets/img/PortfolioImg/photo-6.png'
import imgSeven from 'assets/img/PortfolioImg/photo-7.jpg'
import imgEight from 'assets/img/PortfolioImg/photo-8.png'


const MyPortfolio = () => {

    return (
        <div className={s.portfolioBlock} id='Portfolio'>
            <div className={s.container}>
                <Title title={"MY PORTFOLIO"}/>
                <div className={s.portfolio}>
                    <Portfolio title="Rick and Morty - Encyclopedia" text="NextJS, TS, React, Axios, Vercel, Styled-Components, NProgress" img={imgOne} link={'https://rick-and-morty-lake-phi.vercel.app'}/>
                    <Portfolio title="Todolist" text="TS, React, Redux, RestAPI, Thunk,Material UI, Unit Tests, Formik" img={imgTwo} link={'https://tommysheully.github.io/to-do-list'}/>
                    <Portfolio title="Team Project" text="TS, React, Redux Toolkit, Axios, Material UI, Formik" img={imgThree} link={'https://igor-tech.github.io/friday-project-cards/'}/>
                    <Portfolio title="Portfolio" text="TS, HTML, SCSS, Formik, Typewriter-effect" img={imgFour} link={'https://tommysheully.github.io/Portfolio/'}/>
                    <Portfolio title="THE SOCIAL NETWORK" text="TS, Redux, RestAPI, Thunk,ANT Design, Unit Tests, Formik" img={imgFive} link={'https://tommysheully.github.io/social-network/'}/>
                    <Portfolio title="Counter" text="TS, Redux, React" img={imgSix} link={'https://tommysheully.github.io/TestTasksFor1MothStydy/'}/>
                    <Portfolio title="FUTURE PROJECT" text="...in progress" img={imgSeven}/>
                    <Portfolio title="FUTURE PROJECT" text="...in progress" img={imgEight}/>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;