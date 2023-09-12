'use client'
import React, { useState } from 'react';
import styles from './events.module.css';
import useWindowSize from "@/hooks/useWindowSize";

const Eventos = () => {
  const windowSize = useWindowSize();

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
    title: 'Evento 3',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: './images/plants.png',
    enlace: 'enlace.comm',
  },
  {
    title: 'Evento 4',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: './images/pen.png',
    enlace: 'enlace.comm',
  },
  {
    title: 'Evento 5',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: './images/plants.png',
    enlace: 'enlace.comm',
  },
  {
    title: 'Evento 6',
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    img: './images/pen.png',
    enlace: 'enlace.comm',
  },

];

const [currentCardIndex, setCurrentCardIndex] = useState(0);
const [animateCards, setAnimateCards] = useState(Array(cards.length).fill(false));

const showNextCard = () => {

  const nextIndex = (currentCardIndex + 1) % cards.length;
  setCurrentCardIndex(nextIndex);

  const updatedAnimateCards = Array(cards.length).fill(true);
  setAnimateCards(updatedAnimateCards);

  setTimeout(() => {
    const resetAnimateCards = Array(cards.length).fill(false);
    setAnimateCards(resetAnimateCards);
  }, 300); 
};

const visibleCards = [];

if (windowSize.width >= 768) {
  for (let i = 0; i < 3; i++) {
    const index = (currentCardIndex + i) % cards.length;
    visibleCards.push(cards[index]);
  }
} else {
  visibleCards.push(cards[currentCardIndex]);
}


  return (
    <div id='eventos' className={styles.EventsContainer}>
      <div className={styles.Envents}>
        <div className={styles.EventsTitle}>
          <p>Eventos</p>
        </div>
        <div className={styles.eventsCardContainer}>
          {visibleCards.map((card, index) => (
            <div
              key={index}
              className={`${styles.card} ${animateCards[index] ? styles.enterAnimation : ''}`}
            >
              <div 
              // className={styles.cardImgContainer}
              className={`${styles.cardImgContainer} ${animateCards[index] ? styles.cardImgContainerAnimation : ''}`}
              >
                <img src={card.img} alt={card.title} />
              </div>
              <div 
              // className={styles.cardContent}
              className={`${styles.cardContent} ${animateCards[index] ? styles.cardContentAnimation : ''}`}
              >

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
        <div className={styles.buttonContainer}>
          <button onClick={showNextCard}>Siguiente evento</button>
        </div>
      </div>
    </div>
  );
};

export default Eventos;