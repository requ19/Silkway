import React, { useState } from 'react';
import styles from './index.module.scss';
import insta from '../../assets/images/icon/instargram.svg'
import whatsapp from '../../assets/images/icon/whatsapp.svg'
import gmail from '../../assets/images/icon/gmail-2.svg'

const Sidebar = ({active}) => {
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
    <div className={active ? styles.sidebar_active : styles.sidebar}>
      {menuItems.map((item, index) => (
        <>
            <div className={styles.cont}><div className={`${activeIndex === index ? styles.quarter_circle : ''}`}></div></div>
            <div 
          key={index} 
          className={`${styles.menuItem} ${activeIndex === index ? styles.active : ''}`} 
          onClick={() => setActiveIndex(index)}
        >
          <span>{item}</span>
        </div>
        <div className={styles.cont}><div className={`${activeIndex === index ? styles.quarter_circle_down : ''}`}></div></div>
        </>
      ))}

      <hr className={styles.sidebar__hr} />
      <div  className={styles.sidebar__footer}>
          <div className={styles.sidebar__adress}>
              <h3>АДРЕС</h3>
              <address className={styles.sidebar__adress_text}>
              <a href="https://2gis.kg/search/Бишкек,%20с.%20Ленинское,%20ул.%20Алма-Атинская,%201/3" target="_blank">
                Кыргызская <br></br> Республика, г. Бишкек, с. Ленинское, ул. Алма-Атинская, 1/3 
              </a>
              </address>
          </div>
          <div className={styles.sidebar__socials}>
          <h3>СОЦСЕТИ</h3>
          <div className={styles.sidebar__socials_list}>
            <a href="https://www.instagram.com"><img src={insta} alt="instagram" /></a>
            <a href="https://wa.me/996123456789"><img src={whatsapp} alt="whatsapp" /></a>
            <a href="https://www.google.com/intl/ru/gmail/about/"><img src={gmail} alt="gmail" /></a>
          </div>
          </div>
      </div>
    </div>
  );
};

export default Sidebar;
