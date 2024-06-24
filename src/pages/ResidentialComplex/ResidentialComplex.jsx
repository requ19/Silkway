import { React, useState } from 'react';
import Header from '../../components/Header';
import styles from './residentialComplex.module.scss';
import ContactInfo from '../../components/ContactInfo';
import Footer from '../../components/Footer';

const ResidentialComplex = () => {
    const [sections, setSections] = useState(Array(1).fill(false)); 

    // Функция для переключения состояния конкретного раздела
    const toggleSection = (index) => {
        setSections((prevSections) => {
            const newSections = [...prevSections];
            newSections[index] = !newSections[index];
            return newSections;
        });
    };

    return (
        <>
        <Header/>
            <div className={styles.dropdown_menu}>
                <p className={styles.title}>ЖИЛОЙ КОМПЛЕКС “SILK WAY”</p>
                <div
                    className={`${styles.button} ${sections[0] ? styles.active : ''}`}
                    onClick={() => toggleSection(0)}
                >
                    <span className={`${styles.icon} ${sections[0] ? styles.open : ''}`}></span>
                </div>
            </div>
            {/*Конец дроп меню с заголовком */}

            {/*Контент с текстом */}
            <div className={styles.content}>
                <p className={styles.text}>
                    {sections[0] ? (
                        <>
                            Основная цель строительства жилого комплекса на территории индустриального парка — создание благоприятных условий для сотрудников и резидентов.
                            <br />Проживая неподалеку от своего места работы, они сильно сократят время на дорогу и тем самым увеличат производительность труда.
                            <br />Это повысит привлекательность индустриального парка как места работы, что может привлечь квалифицированных специалистов и уменьшить текучесть кадров.
                            <br />В целом, строительство жилого комплекса в индустриальном парке со своей инфраструктурой может быть выгодным решением для улучшения условий проживания и работы сотрудников, а также для развития района как целостной территории.
                            <br />Под него выделено 150 тысяч квадратных метров. Фактически это будет городок с собственной социальной инфраструктурой.
                            <br />Отметим, что стоимость жилплощади минимальная — от 500 долларов США за квадратный метр.
                            <br />Наш приоритет — создать условия для каждого жильца.
                            <br />Поэтому предусмотрен спортивный комплекс, который включает в себя футбольное и волейбольное поля, теннисный корт и зону для активного отдыха. Также будет разбита аллея длиной до 1 км, любители прогулок по бульвару Эркиндик оценят.
                            <br />
                            <br />Еще одно преимущество на территории жилищного комплекса будет возведена мечеть с медресе. Важное примечание будут еще построены детский сад и гостиница.
                            <br />Для вашего комфорта и удобства ваших гостей предусмотрено 600 парковочных мест. Также неподалеку находится конечная остановка общественного транспорта.
                            <br />Обеспечение разнообразной инфраструктуры в жилом комплексе ощутимо улучшит качество жизни сотрудников и резидентов и их семей.
                            <br />Для получения подробной информации обращайтесь по следующим номерам:
                            <div className={styles.contactInfoWrapper}>
                                <ContactInfo/>
                            </div>
                        </>
                    ) : (
                        <>
                            Основная цель строительства жилого комплекса на территории индустриального парка — создание благоприятных условий для сотрудников и резидентов.
                            <br />Проживая неподалеку от своего места работы, они сильно сократят время на дорогу и тем самым увеличат производительность труда.
                            <br />Это повысит привлекательность индустриального парка как места работы, что может привлечь квалифицированных специалистов и уменьшить текучесть кадров.
                        </>
                    )}
                </p>
            </div>
            <Footer/>
        </>
    );
};

export default ResidentialComplex;