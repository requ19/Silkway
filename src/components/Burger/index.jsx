import React, { useState } from 'react';
import styles from './index.module.scss';

const Burger = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleActive = () => {
    setIsActive(!isActive);
  };

  return (
    <div
      className={`${styles.button} ${isActive ? styles.active : ''}`} 
      onClick={toggleActive}
    >
      <div className={styles.icon}>
        <span></span>
      </div>
      
    </div>
  );
};

export default Burger;
