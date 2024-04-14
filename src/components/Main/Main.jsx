import React from 'react';
import styles from './Main.module.css';
import Cat from '../../images/1.png';
import TextImage from '../../images/yum.png'

export default function Main() {
  return (
    <div className={styles.main}>
      <div className={styles.img}>

        <img src={Cat} id="Cat" className={styles.cat} alt='Cat' />
        <img src={TextImage} id="Text" className={styles.text} alt='text' />
      </div>
      <pre style={{ margin: 'auto', fontSize: '1.5rem' }}>
        ...=^._.^=❤meow❤=^._.^=...
      </pre>
    </div>
  );
};

