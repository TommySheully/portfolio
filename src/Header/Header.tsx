import React from 'react'
import s from './header.module.scss'

export const Header = () => {
  return (
    <div className={s.header}>
      <nav className={s.nav}>
        <a className={s.aHref} href='#Main'>
          {' '}
          Main{' '}
        </a>
        <a className={s.aHref} href='#Skills'>
          {' '}
          Skills{' '}
        </a>
        <a className={s.aHref} href='#Portfolio'>
          {' '}
          Portfolio{' '}
        </a>
        <a className={s.aHref} href='#Resume'>
          {' '}
          Resume{' '}
        </a>
        <a className={s.aHref} href='#Contacts'>
          {' '}
          Contacts{' '}
        </a>
      </nav>
    </div>
  )
}
