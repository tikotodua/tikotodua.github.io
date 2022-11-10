import styles from './CardDescription.module.scss';

import React from 'react'

export default function CardDescription({ title, description }) {
  return (
    <>
      <div className={styles.title}>{title}</div>
      <div className={styles.description}>{description}</div>
    </>
  )
}
