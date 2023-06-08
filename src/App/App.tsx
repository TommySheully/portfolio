import React from 'react'
import { Header } from '../Header/Header'
import { Main } from '../Main/Main'
import { MySkills } from '../MySkills/MySkills'
import { ResumeBlock } from '../ResumeBlock/ResumeBlock'
import { MyPortfolio } from '../MyPortfolio/MyPortfolio'
import { Contacts } from '../Contacts/Contacts'
import { Footer } from '../Footer/Footer'
import s from 'App/App.module.scss'
import { ErrorSnackbarContainer } from '../ErrorSnackbar/ErrorSnackbar'

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
