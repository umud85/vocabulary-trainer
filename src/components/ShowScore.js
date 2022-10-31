import React from 'react';
import styles from '../styles/Score.module.css';

function ShowScore(props) { 
  return <div className={styles['flex']}>
    <div className={styles['flex--inner']}>
      <span>Start</span>
      <span>{props.scoreData.filter(el => el.score === 0).length}</span>
    </div>
    <div className={styles['flex--inner']}>
      <span>Step 1</span>
      <span>{props.scoreData.filter(el => el.score === 1).length}</span>
    </div>
    <div className={styles['flex--inner']}>
      <span>Step 2</span>
      <span>{props.scoreData.filter(el => el.score === 2).length}</span>
    </div>
    <div className={styles['flex--inner']}>
      <span>Finished</span>
      <span>{props.scoreData.filter(el => el.score === 3).length}</span>
    </div>
  </div>
}

export default ShowScore;