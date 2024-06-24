import React, { useState, useMemo } from 'react';
import styles from './index.module.scss';
import insta from '../../assets/images/icon/instargram.svg';
import whatsapp from '../../assets/images/icon/whatsapp.svg';
import gmail from '../../assets/images/icon/gmail-2.svg';

const Sidebar = ({ active }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const menuItems = useMemo(() => [
    'Главная',
    'Торговый комплекс',
    'Тканевый комплекс',
    'Промышленный комплекс',
    'Жилой комплекс',
    'Резиденты',
    'Партнеры'
  ], []);

  const menuElements = useMemo(() => menuItems.map((item, index) => (
    <div key={index} className={styles.menuItemContainer}>
      <div className={styles.cont}>
        <div className={`${activeIndex === index ? styles.quarter_circle : ''}`}></div>
      </div>
      <div 
        className={`${styles.menuItem} ${activeIndex === index ? styles.active : ''}`} 
        onClick={() => setActiveIndex(index)}
      >
        <span>{item}</span>
      </div>
      <div className={styles.cont}>
        <div className={`${activeIndex === index ? styles.quarter_circle_down : ''}`}></div>
      </div>
    </div>
  )), [menuItems, activeIndex]);

  return (
    <div className={active ? styles.sidebar_active : styles.sidebar}>
      {menuElements}
      <hr className={styles.sidebar__hr} />
      <div className={styles.sidebar__footer}>
        <div className={styles.sidebar__address}>
          <h3>АДРЕС</h3>
          <address className={styles.sidebar__address_text}>
            <a href="https://2gis.ru/search/Бишкек,%20с.%20Ленинское,%20ул.%20Алма-Атинская,%201/3" target="_blank" rel="noopener noreferrer">
              Кыргызская Республика, г. Бишкек, с. Ленинское, ул. Алма-Атинская, 1/3
            </a>
          </address>
        </div>
        <div className={styles.sidebar__socials}>
          <h3>СОЦСЕТИ</h3>
          <div className={styles.sidebar__socials_list}>
            <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={insta} alt="instagram" /></a>
            <a href="https://wa.me/996123456789" target="_blank" rel="noopener noreferrer"><img src={whatsapp} alt="whatsapp" /></a>
            <a href="https://www.google.com/intl/ru/gmail/about/" target="_blank" rel="noopener noreferrer"><img src={gmail} alt="gmail" /></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
