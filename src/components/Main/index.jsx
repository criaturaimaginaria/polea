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
                        <button className={styles.button}>
                            <Link href="https://accionclimaticamexico.budibase.app/app/encuesta#/datos-generales" target="_blank">
                               Encuesta
                            </Link> 
                        </button>
                    </div>

                </div>
                <div className={styles.layout1line}>
                    <div className={styles.lineimg1}>
                        <img src="./images/banner1.jpg"></img>
                    </div>
                </div>
                <div className={styles.button2container}>
                    <button className={styles.button2}>
                        <Link href="https://accionclimaticamexico.budibase.app/app/encuesta#/datos-generales" target="_blank">
                            Encuesta
                        </Link> 
                    </button>
                </div>

            </div>
        </div>
        <div id="intro" className={styles.layout2}>
            <div className={styles.lineContainer2}>
               <div className={styles.layout2Title}>
                    <h2>Fortaleciendo el Futuro Verde de México</h2>
                    <p>A fin de contribuir a evitar el aumento
                         de la temperatura media del planeta
                          y garantizar un México más sostenible 
                          y justo para las generaciones presentes y 
                          futuras, al marco de la colaboración entre 
                          el Programa México-UK PACT, POLEA, SEMARNAT e 
                          INECC, se ha identificado la necesidad de llevar a 
                          cabo un proceso participativo con el objetivo de fortalecer 
                          el marco jurídico en materia de cambio climático a 
                          nivel federal; que no sólo refleje la urgencia de lograr 
                          una acción climática eficaz, sino también contemple una visión 
                          biocentrista, de justicia climática y que garantice la 
                          atención prioritaria hacia ecosistemas y poblaciones en especial 
                          condición de vulnerabilidad.</p>
                </div>
            </div>
        </div>
        <div className={styles.plantImage}>
            <div className={styles.plantImageChild}>
                 <img src="./images/plants.png"></img>
            </div>
        </div>
    </div>
  );
};

export default Main;