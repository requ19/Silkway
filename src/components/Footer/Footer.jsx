import React, {useState} from 'react'
import styles from './footer.module.scss'
import Images from '../Images'

const Footer = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handlePageClick = (index) => {
    setActiveIndex(index);
  };

  const pages = [
    "Главная",
    "Торговый комплекс",
    "Тканевый комплекс",
    "Промышленный комплекс",
    "Жилой комплекс",
    "Резиденты",
    "Партнеры"
  ];

  return (
    <div className={styles.footer_container}>
    
      <div className={styles.logo_container}>
        <img src={Images.silkWay_logo} alt='Logo' />
      </div>

      <div className={styles.pages_container}>
        <h2 className={styles.info_title}>МЕНЮ</h2>
        {pages.map((page, index) => (
          <p
            key={index}
            className={index === activeIndex ? styles.active : ''}
            onClick={() => handlePageClick(index)}
          >
            {page}
          </p>
        ))}

      <div className={styles.contacts_container}>
        <h2 className={styles.info_title}>КОНТАКТЫ</h2>
        <div className={styles.numbers_container}>
          <a href='tel:+996221115111'><p>0 221 11 51 11</p></a>
          <a href='tel:+996709225588'><p>0 709 22 55 88</p></a>
          <a href='tel:+996559225588'><p>0 559 22 55 88</p></a>
          <a href='tel:+996779225588'><p>0 779 22 55 88</p></a>
        </div>

      <div className={styles.sidebar__socials}>
        <h2 className={styles.info_title}>СОЦСЕТИ</h2>
        <div className={styles.sidebar__socials_list}>
          <a href="https://www.google.com/intl/ru/gmail/about/" target="_blank" rel="noopener noreferrer"><img src={Images.gmail_logo} alt="gmail" /></a>
          <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><img src={Images.insta_logo} alt="instagram" /></a>
          <a href="https://wa.me/996123456789" target="_blank" rel="noopener noreferrer"><img src={Images.whatsapp_logo} alt="whatsapp" /></a>
        </div>
      </div>

      </div>

      <div className={styles.sidebar__address}>
          <h2 className={styles.info_title}>АДРЕС</h2>
          <address className={styles.sidebar__address_text}>
            <a href="https://2gis.ru/search/Бишкек,%20с.%20Ленинское,%20ул.%20Алма-Атинская,%201/3" target="_blank" rel="noopener noreferrer">
            с. Ленинское, ул. <br/>Алма-Атинская, 1/3 
            </a>
          </address>
        <h2>2022 ©️ ОсОО "Silk Way". Юридический адрес:<br />с. Ленинское, ул. Алма-Атинская, 1/3 </h2>
      </div>

      </div>
    </div>
  );
};

export default Footer;