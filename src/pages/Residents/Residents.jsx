import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styles from './residents.module.scss';
import Header from '../../components/Header';
import Footer from '../../components/Footer'

import Images from '../Images';

const Residents = () => {
      {/* Настройки слайдера*/}
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };

  return (
    <>
      {/*{Xэдер с заголовком} */}
      {/* <Header /> */}
      <div className={styles.content}>
          <p className={styles.title}>РЕЗИДЕНТЫ ИНДУСТРИАЛЬНОГО ПАРКА “SILK WAY”</p>
        {/* Лого резидентов*/}
        <Slider className={styles.logo_container} {...settings}>
        <div className={styles.imgBox}>
            <img src={Images.resident1} alt="Resident" />
        </div>
        <div className={styles.imgBox}>
            <img src={Images.resident2} alt="Resident" />
        </div>
        <div className={styles.imgBox}>
            <img src={Images.resident3} alt="Resident" />
        </div>
        </Slider>
      </div>
        {/* Футер*/}
      <Footer/>
    </>
  );
};

export default Residents;
