import React from 'react'
import styles from './CardDetails.module.scss';
import ClockIcon from '../../assets/icons/icon-clock.svg';

export default function CardDetails({icon, price, currency, days}) {
  return (
    <div className={styles.detailsSection}>
      <div className={styles.coinSection}>
        <img src={icon} className={styles.icon} alt='coin icon'/>
        <span className={styles.coinDetails}>{price}</span>
        <span className={styles.coinDetails}>{currency}</span>
      </div>
      <div className={styles.dateSection}>
        <img src={ClockIcon} className={styles.icon} alt='clock icon'/>
        <div><span className={styles.daysLeft}>{days} </span> days left</div>
      </div>
    </div>
  )
}
