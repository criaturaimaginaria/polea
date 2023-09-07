'use client'
import React, { useState } from 'react';
import styles from './events.module.css'


const Eventos = () => {

    const cards = [
        {
          title: 'Evento 1',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          img: './images/pen.png',
          enlace: 'enlace.comm',
        },
        {
          title: 'Evento 2',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          img: './images/pen.png',
          enlace: 'enlace.comm',
        },
        {
          title: 'Evento 2',
          text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
          img: './images/pen.png',
          enlace: 'enlace.comm',
        },

      ];

  return (
    <div className={styles.EventsContainer}>
        <div className={styles.Envents}>
            <div className={styles.EventsTitle}>
                <p>Eventos</p>
            </div>
            <div className={styles.eventsCardContainer}>
                {cards.map((card, index) => (
                  <div key={index} className={styles.card}>
                    <div className={styles.cardImgContainer}>
                       <img src={card.img} alt={card.title} />
                    </div>
                    <div className={styles.cardContent}>
                        <h2>{card.title}</h2>
                        <p>{card.text}</p>
                        <div className={styles.cardLink}>
                          <img src="./images/blueArrow.svg" alt={card.title} />
                            <a href={card.enlace} target="_blank" rel="noopener noreferrer">
                                Ver más
                            </a>     
                        </div>
                  
                    </div>
                  </div>
                ))}
            </div>
        </div>
    </div>

  );
};

export default Eventos;