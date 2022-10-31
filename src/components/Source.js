import React from 'react';
import styles from '../styles/Source.module.css';

function Source(props) {
  console.log(props)
  return <div className={styles['container']}>
    <p>{props.vocabulary}</p>
  </div>
}

export default Source;