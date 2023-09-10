import React from "react";
import styles from './gracias.module.css'

const ThankYou = () => {
  return (
    <div className={styles.thanks}>
        <div className={styles.messageContainer}>
          <div className={styles.message}>
            <h2>Gracias por escribirnos!</h2>
            <div className={styles.lineContainer}>
                
            </div>
            <p>En cuanto recibamos su mensaje, le brindaremos atención lo antes posible.</p>
          </div>
        </div>
    </div>
  );
};

export default ThankYou;