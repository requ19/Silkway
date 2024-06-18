import React from 'react'
import styless from './index.module.scss'
import Burger from '../Burger'
import Sidebar from '../Sidebar'

const Header = () => {
  return (
    <header className={styless.container}>
        <nav className={styless.nav}>
            <img src="logo.svg" alt="" />
            <Burger/>
        </nav>
        <Sidebar/>
    </header>
  )
}

export default Header
