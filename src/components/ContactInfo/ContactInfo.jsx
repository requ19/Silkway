import React from 'react'
import styles from './contactInfo.module.scss'
import images from '../Images' 

const ContactInfo = () => {
  return (
    <>
    <div className={styles.content}>
      <div><img src={images.phone_icon}/> <p>0 559 22 55 88 </p></div>
      <div><img src={images.phone_icon}/> <p>0 709 22 55 88</p></div>
      <div><img src={images.phone_icon}/> <p>0 779 22 55 88</p></div>
      <div><img src={images.phone_icon}/> <p>0 221 11 51 11</p></div>
    </div>
    </>
  )
}

export default ContactInfo