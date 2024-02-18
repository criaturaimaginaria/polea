'use client'
import React, { useState } from 'react';
import styles from './events.module.css';
import useWindowSize from "@/hooks/useWindowSize";

const Eventos = () => {
  const windowSize = useWindowSize();

const cards = [
  {
    title: 'Foro Agroforestal',
    text: 'El miércoles 14 de junio de 2023, a partir de las 9:30 horas, en la Sala Mural del H. Congreso del Estado de Chiapas, ....',
    img: './images/climatico.jpg',
    enlace: 'https://drive.google.com/file/d/1LnBkm6jC83ChDA6_5UrAqpli784Tq9Jv/view?usp=sharing',
  },
  {
    title: 'Foro LGCC rumbo a la COP 28',
    text: 'El martes 21 de noviembre de 2023, a partir de las 9:30 a.m., se llevó a cabo en las instalaciones del Palacio Legislativo de San Lázaro, en el Auditorio Aurora Jiménez...',
    img: './images/Foro LGCC_.jpeg',
    enlace: 'https://drive.google.com/file/d/1m8YUBSsgpAL_-cGqDzq5mCPH1v509hcN/view?usp=sharing',
    
  },
  {
    title: 'Foro Retos del MVC',
    text: 'El martes 14 de noviembre de 2023 a partir de las 9:30 horas, se llevó a cabo, en las instalaciones del Colegio de Ingenieros Civiles de Chiapas, ...',
    img: './images/Foro MVC.jpeg',
    enlace: 'https://drive.google.com/file/d/1NiLNFzL3RuCL-gmoo6wcnKcWGcadYKVA/view?usp=sharing',
  },
  {
    title: 'Foro Justicia Climática',
    text: 'El lunes 27 de noviembre de 2023, a partir de las 12:00, en el Salón Charo, en Casa Michoacán, ubicada en Periférico P...',
    img: './images/Foro_Justicia Climática.jpeg',
    enlace: 'https://drive.google.com/file/d/19rLZwZHWthVZO7cQ7tisElLr071LAYAy/view?usp=sharing',
  },
  // {
  //   title: 'Nuevos eventos próximamente...',
  //   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //   img: './images/plants.png',
  //   enlace: 'enlace.comm',
  // },
  // {
  //   title: 'Nuevos eventos próximamente...',
  //   text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  //   img: './images/pen.png',
  //   enlace: 'enlace.comm',
  // },

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
