import React from 'react';
import styles from '../styles/Score.module.css';


function showScore(props) {
  return <div className={styles['flex']}>
    <div className={styles['flex--inner']}>
      <span>Start</span>
      <span>{props.scoreData.base.length}</span>
    </div>
    <div className={styles['flex--inner']}>
      <span>Step 1</span>
      <span>{props.scoreData.step1.length}</span>
    </div>
    <div className={styles['flex--inner']}>
      <span>Step 2</span>
      <span>{props.scoreData.step2.length}</span>
    </div>
    <div className={styles['flex--inner']}>
      <span>Finished</span>
      <span>{props.scoreData.finished.length}</span>
    </div>
  </div>
}

export default showScore;