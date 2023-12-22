import React from 'react'
import s from './Main.module.scss'
import photo from 'assets/img/Main/portpet.jpg'
import Typewriter from 'typewriter-effect'

export const Main = () => {
  const sendHandler = () => {}

  return (
    <div className={s.container} id='Main'>
      <div className={s.main}>
        <div className={s.containerMain}>
          <div className={s.textBlock}>
            <h2>Welcome</h2>
            <h1 className={s.h1}>
              <Typewriter
                options={{
                  strings: ["I'm Rostislav.", "I'm Frontend Developer."],
                  autoStart: true,
                  loop: true
                }}
              />
            </h1>
            <p className={s.p}>
              I have 1.5 years of commercial experience <br />
              and I`m based in Minsk, Belarus.
            </p>
            <p className={s.p}></p>
            <button className={s.btn} onClick={sendHandler}>
              <a className={s.aHref} href={process.env.PUBLIC_URL + '/CV.pdf'} download={'Rostislav Savkin CV'}>
                DOWNLOAD CV
              </a>
            </button>
          </div>
          <div className={s.photoBlock}>
            <img className={s.photo} src={photo} alt='My ava' />
          </div>
        </div>
      </div>
    </div>
  )
}
