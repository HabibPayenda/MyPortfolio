import React from 'react';
import styles from '../styles/sideBar.module.css';
import habibPayenda from '../assets/habib_payenda.jpeg';

export default function SideBar() {
  return (
    <div className={styles.container}>
      <div className={styles.details}>
        <img className={styles.profileImg} src={habibPayenda} alt="Habib Payenda" />
        <h3 className={styles.name}>
          Habib Payenda
        </h3>
        <p className={styles.title}>
          Full Stack Developer
        </p>
      </div>
    </div>
  );
}
