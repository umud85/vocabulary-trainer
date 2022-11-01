import React from 'react';
import styles from '../styles/Destination.module.css';
import germanFlag from '../images/DE.svg';
import englishFlag from '../images/GB.svg';

function Destination(props) {
  return <div className={styles['container']}>
    {props.language !== "" && props.language === "german" &&
      <img src={englishFlag} alt="Great Britain flag" />}
    {props.language !== "" && props.language === "english" &&
      <img src={germanFlag} alt="German flag" />}
  </div>
}

export default Destination;