import React from 'react';
import Header from "./Header/Header";
import Main from "./Main/Main";
import MySkills from "./MySkills/MySkills";
import {ResumeBlock} from "./ResumeBlock/ResumeBlock";
import MyPortfolio from "./MyPortfolio/MyPortfolio";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import s from 'App.module.scss'


function App() {
    return (
        <div className={s.app}>
            <Header/>
            <Main/>
            <MySkills/>
            <MyPortfolio/>
            <ResumeBlock/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
