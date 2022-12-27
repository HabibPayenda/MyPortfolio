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
        <div className={styles.iconContainer}>
          <a href="www.google.com">
            <i className={`fa-brands fa-github ${styles.socialIcon}`} />
          </a>
          <a href="www.google.com">
            <i className={`fa-brands fa-angellist ${styles.socialIcon}`} />
          </a>
          <a href="www.google.com">
            <i className={`fa-brands fa-medium ${styles.socialIcon}`} />
          </a>
          <a href="www.google.com">
            <i className={`fa-brands fa-linkedin ${styles.socialIcon}`} />
          </a>
        </div>
      </div>
      <div className={styles.info}>
        <ul className={styles.infoContainer}>
          <li className={styles.infoContainerItem}>
            <p className={styles.infoItemTitle}>Age:</p>
            <p>27</p>
          </li>
          <li className={styles.infoContainerItem}>
            <p className={styles.infoItemTitle}>Residence:</p>
            <p>Afghanistan</p>
          </li>
          <li className={styles.infoContainerItem}>
            <p className={styles.infoItemTitle}>Address:</p>
            <p>Kabul, 5th PD</p>
          </li>
        </ul>
      </div>
      <div className={styles.languagesContainer}>
        <h4>Languages</h4>
        <ul className={styles.languagesList}>
          <li className={styles.languagesListItem}>
            <div className={styles.languagesItemTop}>
              <p>English</p>
              <p>90%</p>
            </div>
            <div className={styles.languagesItemBottom}>
              <div className={styles.languagesProgressContainer}>
                <div className={styles.languagesProgress} />
              </div>
            </div>
          </li>
          <li className={styles.languagesListItem}>
            <div className={styles.languagesItemTop}>
              <p>Hindi</p>
              <p>90%</p>
            </div>
            <div className={styles.languagesItemBottom}>
              <div className={styles.languagesProgressContainer}>
                <div className={styles.languagesProgress} />
              </div>
            </div>
          </li>
          <li className={styles.languagesListItem}>
            <div className={styles.languagesItemTop}>
              <p>Pashto</p>
              <p>90%</p>
            </div>
            <div className={styles.languagesItemBottom}>
              <div className={styles.languagesProgressContainer}>
                <div className={styles.languagesProgress} />
              </div>
            </div>
          </li>
          <li className={styles.languagesListItem}>
            <div className={styles.languagesItemTop}>
              <p>Dari</p>
              <p>90%</p>
            </div>
            <div className={styles.languagesItemBottom}>
              <div className={styles.languagesProgressContainer}>
                <div className={styles.languagesProgress} />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.skillsContainer}>
        <h4>Skills</h4>
        <ul className={styles.skillsList}>
          <li className={styles.languagesListItem}>
            <div className={styles.languagesItemTop}>
              <p>JavaScript</p>
              <p>90%</p>
            </div>
            <div className={styles.languagesItemBottom}>
              <div className={styles.languagesProgressContainer}>
                <div className={styles.languagesProgress} />
              </div>
            </div>
          </li>
          <li className={styles.languagesListItem}>
            <div className={styles.languagesItemTop}>
              <p>React</p>
              <p>90%</p>
            </div>
            <div className={styles.languagesItemBottom}>
              <div className={styles.languagesProgressContainer}>
                <div className={styles.languagesProgress} />
              </div>
            </div>
          </li>
          <li className={styles.languagesListItem}>
            <div className={styles.languagesItemTop}>
              <p>React Native</p>
              <p>90%</p>
            </div>
            <div className={styles.languagesItemBottom}>
              <div className={styles.languagesProgressContainer}>
                <div className={styles.languagesProgress} />
              </div>
            </div>
          </li>
          <li className={styles.languagesListItem}>
            <div className={styles.languagesItemTop}>
              <p>Ruby on Rails</p>
              <p>90%</p>
            </div>
            <div className={styles.languagesItemBottom}>
              <div className={styles.languagesProgressContainer}>
                <div className={styles.languagesProgress} />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div className={styles.extraSkillsContainer}>
        <h4>Extra Skills</h4>
        <ul className={styles.extraSkillsList}>
          <li className={styles.extraSkillsListItem}>
            <i className={`fa-solid fa-diamond ${styles.extraSkillsIcon}`} />
            <p className={styles.extraSkillsText}>Bootstrap, Materialize</p>
          </li>
          <li className={styles.extraSkillsListItem}>
            <i className={`fa-solid fa-diamond ${styles.extraSkillsIcon}`} />
            <p className={styles.extraSkillsText}>Bootstrap, Materialize</p>
          </li>
          <li className={styles.extraSkillsListItem}>
            <i className={`fa-solid fa-diamond ${styles.extraSkillsIcon}`} />
            <p className={styles.extraSkillsText}>Bootstrap, Materialize</p>
          </li>
          <li className={styles.extraSkillsListItem}>
            <i className={`fa-solid fa-diamond ${styles.extraSkillsIcon}`} />
            <p className={styles.extraSkillsText}>Bootstrap, Materialize</p>
          </li>
        </ul>
      </div>
      <button className={styles.linkBtn} type="submit">
        <p className={styles.linkBtnTitle}>
          Download CV
        </p>
        <i className={`fa-solid fa-download ${styles.linkBtnIcon}`} />
      </button>
    </div>
  );
}
