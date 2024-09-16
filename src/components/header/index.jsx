import React from 'react';
import styles from './header.module.css';

export default function Header () {
  return (
    <header className={styles.Header}>
      <div className={styles.Container}>
        <div className={styles.Logo}>
          <div className={styles.Logo_rounded}>
            <div>
              <div className={styles.Ellipse} />
              <div className={styles.Rounded12} />
            </div>
            <div className={styles.Rounded2} />
            <div className={styles.Rounded3} />
          </div>

          <div className={styles.Crowdme}>
            CROWD<span className={styles.Me}>ME</span>
          </div>
        </div>

        <ul className={styles.Nav_list}>
          <li>HOME</li>
          <li>HOW IT WORKS</li>
          <li>DISCOVER A PROJECT</li>
          <li>BLOG</li>
          <li>FIND OUT MORE</li>
        </ul>

        <button className={styles.Login_case}>
          LOGIN
        </button>
      </div>
    </header>
  );
  
}
