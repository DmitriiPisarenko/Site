import React from 'react';
import styles from './banner.module.css';
import ArrowRight from '../arrow-right';


export default function Banner () {
  return ( 
    <section className={styles.Banner}>

      <p className={styles.Intellectual_Property}>Intellectual Property has the Shelf Life</p>
      <p className={styles.Banana}>of a Banana.</p>

      <button  className={styles.Become_a_Member}>Become a Member</button>

      <div className={styles.Arrows}>
        <ArrowRight className={styles.Arrow_left} />
        <ArrowRight />
      </div>
           
    </section>
  );
}
