import React, { useState } from 'react';
import styless from './index.module.scss';
import Burger from '../Burger';
import Sidebar from '../Sidebar';

const Header = () => {
  const [menuActive, setMenuActive] = useState(false)
  return (
    <header className={styless.header}>
      <nav className={styless.nav}>
        <a href="/"><img src="logo.svg" alt="" /></a>
        <Burger active={menuActive} setActive={setMenuActive}/>
      </nav>
      <Sidebar active={menuActive} setActive={setMenuActive} />
    </header>
  );
};

export default Header;
