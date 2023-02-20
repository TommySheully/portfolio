import React from 'react';
import './App.css';
import Header from "./Nav/Header";
import Main from "./Main/Main";
import MySkills from "./MySkills/MySkills";
import FreelanceBlock from "./FreeLance/FreelanceBlock";
import MyPortfolio from "./MyPortfolio/MyPortfolio";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <MySkills/>
            <MyPortfolio/>
            <FreelanceBlock/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;
