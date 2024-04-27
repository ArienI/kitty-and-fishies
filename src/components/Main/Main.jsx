import React, { useState } from 'react';
import styles from './Main.module.css';
import cat1 from '../../images/1.png';
import cat2 from '../../images/2.png';
import cat3 from '../../images/3.png';
import yum from '../../images/yum.png';

import meow from '../../images/meow.png';


const cats = [
  cat1, cat2, cat3
];


const texts = [
  yum, yum, meow
];

export default function Main() {
  const [catIndex, setCatIndex] = useState(0);
  const [textIndex, setTextIndex] = useState(0);
  const [showText, setShowText] = useState(false);

  const handleClick = () => {
    const nextCatIndex = (catIndex + 1) % cats.length;
    setCatIndex(nextCatIndex);

    // Обновляем текст в зависимости от индекса котика
    if (nextCatIndex < 2) {
      setTextIndex(nextCatIndex);
    } else {
      // Мяу для последнего котика
      setTextIndex(2);
    }
    setShowText(true);

    // Скрываем текст через короткий промежуток времени
    setTimeout(() => {
      setShowText(false);
      // 1500 мс = 1,5 секунды
    }, 1500);
  };

  return (
    <div className={styles.main}>
      <div className={styles.img}>
        <img src={cats[catIndex]} className={styles.cat} alt='Cat' onClick={handleClick} />
        {showText && <img src={texts[textIndex]} className={styles.text} alt='Text' />}
      </div>
      <pre style={{ margin: 'auto', fontSize: '1.5rem' }}>
        ...=^._.^=❤meow❤=^._.^=...
      </pre>
    </div>
  );
}
