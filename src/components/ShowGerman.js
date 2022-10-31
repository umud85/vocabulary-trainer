import React from 'react';
import styles from '../styles/German.module.css';

function ShowGerman(props) {
  console.log(props)
  return <div className={styles['container']}>
    <p>{props.vocabulary}</p>
  </div>
}

export default ShowGerman;