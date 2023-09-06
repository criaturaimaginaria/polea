import React from "react";
import styles from './header.module.css'
import Link from 'next/link';

const Header = () => {
  return (
    <div className={styles.header}>
      {/* Palabras para hacer clic con enlaces */}
      <Link href="/">
        <span className={styles.link}>Introducción</span>
      </Link>
      <Link href="/servicios">
        <span className={styles.link}>Documentos</span>
      </Link>
      <Link href="/productos">
        <span className={styles.link}>Infórmate</span>
      </Link>
      <Link href="/acerca">
        <span className={styles.link}>Eventos</span>
      </Link>
      <Link href="/contacto">
        <span className={styles.link}>Enlaces</span>
      </Link>
      <Link href="/thank">
        <span className={styles.link}>Contáctanos</span>
      </Link>

      {/* Botón */}
      <button className={styles.button}>Encuesta</button>
    </div>
  );
};

export default Header;