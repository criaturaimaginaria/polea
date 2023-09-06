import React from "react";
import styles from './main.module.css'
import Link from 'next/link';

const Main = () => {
  return (
    <div className={styles.main}>
        <div className={styles.layout1}>
            <div className={styles.lineContainer}>

            </div>
        </div>
        <div className={styles.layout2}>
            <div className={styles.lineContainer2}>

            </div>
        </div>
    </div>
  );
};

export default Main;