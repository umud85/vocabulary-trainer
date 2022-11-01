import React from 'react';
import styles from '../styles/Source.module.css';
import germanFlag from '../images/DE.svg';
import englishFlag from '../images/GB.svg';

function Source(props) {
  return <div className={styles['container']}>
    {props.language !== "" && props.language === "german" && 
      <img src={germanFlag} alt="German flag" />}
    {props.language !== "" && props.language === "english" &&
     <img src={englishFlag} alt="Great Britain flag" /> }
    <p>{props.vocabulary}</p>
  </div>
}

export default Source;