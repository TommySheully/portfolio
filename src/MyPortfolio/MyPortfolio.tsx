import React from 'react';
import s from "./MyPortfolio.module.css"
import sCommon from "../common/Common.module.css"
import Portfolio from "./portfolioState/Portfolio";


const MyPortfolio = () => {
    return (
        <div className={s.portfolioBlock}>
            <div className={`${sCommon.container} ${s.container}`}>
                <h2 className={s.title}>MY PORTFOLIO</h2>
                <div className={s.portfolio}>
                    <Portfolio title="Todolist" text="TS, Redux, RestAPI, Thunk,Material UI, Unit Tests "/>
                    <Portfolio title="THE SOCIAL NETWORK" text="TS, Redux, RestAPI, Thunk,ANT Design, Unit Tests"/>
                    <Portfolio title="FUTURE PROJECT" text="...in progress"/>
                    <Portfolio title="FUTURE PROJECT" text="...in progress"/>
                    <Portfolio title="FUTURE PROJECT" text="...in progress"/>
                </div>

            </div>
        </div>
    );
};

export default MyPortfolio;