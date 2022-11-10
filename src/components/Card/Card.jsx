import React from 'react'
import styles from './Card.module.scss';

function Card({children}) {	
	
	return (
		<a href="#" className={styles.cardBody}>
			{children}
		</a>
	);
};

export default Card;