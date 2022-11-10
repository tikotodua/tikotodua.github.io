import React from 'react'
import styles from './CardUser.module.scss';


export default function CardUser({avatar, name}) {
  return (
    <div className={styles.userSection}>
      <div className={styles.userDetails}>
        <img className={styles.avatarPhoto} src={avatar} alt='avatar'/>
        <span>Creation of</span>
        <span className={styles.userName}>{name}</span>
      </div>

    </div>
  )
}
