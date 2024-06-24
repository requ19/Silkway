import React from 'react'
import styles from './contactInfo.module.scss'
import images from '../Images' 

const ContactInfo = () => {
  return (
    <>
    <div className={styles.content}>
    <a href='tel:+996559225588'><div><img src={images.phone_icon} alt="phone"/><p>0 559 22 55 88</p></div></a>
    <a href='tel:+996709225588'><div><img src={images.phone_icon} alt="phone"/><p>0 709 22 55 88</p></div></a>
    <a href='tel:+996779225588'><div><img src={images.phone_icon} alt="phone"/><p>0 779 22 55 88</p></div></a>
    <a href='tel:+996221115111'><div><img src={images.phone_icon} alt="phone"/><p>0 221 11 51 11</p></div></a>
    </div>
    </>
  )
}

export default ContactInfo