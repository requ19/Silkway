import React, { useState } from 'react';
import styles from './index.module.scss';

const Burger = ({ setActive, active }) => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
    setActive(!active);
  };

  return (
    <div
      className={`${styles.button} ${isActive ? styles.active : ''}`}
      onClick={handleClick}
    >
      <div className={styles.icon}>
        <span></span>
      </div>
    </div>
  );
};

export default Burger;
