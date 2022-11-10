import React from 'react'
import styles from './CardImage.module.scss';
import eyeIcon from '../../assets/icons/icon-view.svg';

export default function CardImage({src}) {
  return (
    <>
        <div className={styles.imageWrapper}>
            <img  className= {styles.imageWidth} src={src} alt='cover'/>
            <div className={styles.overlay}>
                <img className={styles.viewIcon} src={eyeIcon} alt='view'/>
            </div>
        </div>
    </>
  )
}
