import React from 'react'
import s from 'app/App.module.scss'
import { Contacts, ErrorSnackbarContainer, Footer, Header, Main, MyPortfolio, MySkills, ResumeBlock } from 'common'

function App() {
  return (
    <div className={s.app}>
      <Header />
      <Main />
      <MySkills />
      <MyPortfolio />
      <ResumeBlock />
      <Contacts />
      <Footer />
      <ErrorSnackbarContainer />
    </div>
  )
}

export default App
