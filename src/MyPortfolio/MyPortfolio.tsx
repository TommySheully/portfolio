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
                    <Portfolio title="Todolist" text="TS, Redux, RestAPI, Thunk,Material UI, Unit Tests " img={imgOne}/>
                    <Portfolio title="THE SOCIAL NETWORK" text="TS, Redux, RestAPI, Thunk,ANT Design, Unit Tests" img={imgTwo}/>
                    <Portfolio title="FUTURE PROJECT" text="...in progress" img={imgThree}/>
                    <Portfolio title="FUTURE PROJECT" text="...in progress" img={imgFour}/>
                    <Portfolio title="FUTURE PROJECT" text="...in progress" img={imgFive}/>
                    <Portfolio title="FUTURE PROJECT" text="...in progress" img={imgSix}/>
                    <Portfolio title="FUTURE PROJECT" text="...in progress" img={imgSeven}/>
                    <Portfolio title="FUTURE PROJECT" text="...in progress" img={imgEight}/>
                </div>
            </div>
        </div>
    );
};

export default MyPortfolio;