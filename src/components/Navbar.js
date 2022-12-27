import React from 'react';

import styles from '../styles/navbar.module.css';

export default function Navbar() {
  return (
    <div className={styles.container}>
      <button className={styles.linkBtn} type="submit" href="#">
        <p>Habib Payenda</p>
      </button>
      <ul className={styles.navList}>
        <li>
          <button className={styles.linkBtn} type="submit" href="#">
            Home
          </button>
        </li>
        <li>
          <button className={styles.linkBtn} type="submit" href="#">
            Projects
          </button>
        </li>
        <li>
          <button className={styles.linkBtn} type="submit" href="#">
            Education
          </button>
        </li>
        <li>
          <button className={styles.linkBtn} type="submit" href="#">
            Recommentdations
          </button>
        </li>
        <li>
          <button className={styles.linkBtn} type="submit" href="#">
            Contact
          </button>
        </li>
      </ul>
    </div>
  );
}
