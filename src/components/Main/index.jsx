import React from "react";
import styles from './main.module.css'
import Link from 'next/link';

const Main = () => {
  return (
    <div className={styles.main}>
        <div className={styles.layout1}>
            <div className={styles.lineContainer}>
                <div className={styles.layout1title}>
                    <div className={styles.layout1Title}>
                        <h1>Fortalecimiento al Marco Jurídico en Materia
                            de Cambio Climático a Nivel Federal</h1>
                        <button>Encuesta</button>
                    </div>

                </div>
                <div className={styles.layout1line}>
                    <div className={styles.lineimg1}>
                        <img src="./images/banner1.jpg"></img>
                    </div>
                </div>
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