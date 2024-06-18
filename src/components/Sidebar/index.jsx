import React, { useState } from 'react';
import styles from './index.module.scss';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = [
    'Главная',
    'Торговый комплекс',
    'Тканевый комплекс',
    'Промышленный комплекс',
    'Жилой комплекс',
    'Резиденты',
    'Партнеры'
  ];

  return (
    <div className={styles.sidebar}>
      {menuItems.map((item, index) => (
        <div 
          key={index} 
          className={`${styles.menuItem} ${activeIndex === index ? styles.active : ''}`} 
          onClick={() => setActiveIndex(index)}
        >
          <span>{item}</span>
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
