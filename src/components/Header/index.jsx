'use client'
import React, { useState } from 'react';
import styles from './header.module.css'
import Link from 'next/link';

const Header = () => {

  const [headerState, setHeaderState] = useState(false);

  const changeState = () => {
    setHeaderState(!headerState); // Cambia el estado al valor opuesto
  };

  console.log(headerState, "state")
  return (
    <div className={styles.headerContainer}>
      <div  className={headerState == true ? "headerMenuActive" : "headerMenu"}>
        <Link href="/#intro">
          <span className={styles.link}>Introducción</span>
        </Link>
        <Link href="/#documentos">
          <span className={styles.link}>Documentos</span>
        </Link>
        <Link href="/#comunicacion">
          <span className={styles.link}>Infórmate</span>
        </Link>
        <Link href="/#eventos">
          <span className={styles.link}>Eventos</span>
        </Link>
        <Link href="/#enlaces">
          <span className={styles.link}>Enlaces</span>
        </Link>
        <Link href="/#contact">
          <span className={styles.link}>Contáctanos</span>
        </Link>
      </div>

      <div className={styles.header}>
        <Link href="/#intro">
          <span className={styles.link}>Introducción</span>
        </Link>
        <Link href="/#documentos">
          <span className={styles.link}>Documentos</span>
        </Link>
        <Link href="/#comunicacion">
          <span className={styles.link}>Infórmate</span>
        </Link>
        <Link href="/#eventos">
          <span className={styles.link}>Eventos</span>
        </Link>
        <Link href="/#enlaces">
          <span className={styles.link}>Enlaces</span>
        </Link>
        <Link href="/#contact">
          <span className={styles.link}>Contáctanos</span>
        </Link>

        <button className={styles.button}>Encuesta</button>
      </div>     
      <div className={styles.mobileHeader}>
         <span>Menú</span>
         <div onClick={changeState} className={styles.hamburguerContainer}>
            <div className={headerState != true ? "hamb1" : "hamb1active"}></div>
            <div className={headerState != true ? "hamb2" : "hamb2active"}></div>
            <div className={headerState != true ? "hamb3" : "hamb3active"}></div>
         </div>
      </div>

    </div>

  );
};

export default Header;