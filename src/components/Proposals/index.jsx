'use client'
import React, { useState } from 'react';
import styles from './proposals.module.css'

// Array de objetos con contenido para los elementos "Ver Más"
const elementos = [
  {
    contenido: "01. Marco Internacional",
    links: [
      { texto: 'Acuerdo de Escazú ING y ESP', url: 'https://drive.google.com/file/d/1i4Jgp6LvnPMHYz1zamve924MxLeqQZ2u/view?usp=sharing' },
      { texto: 'Acuerdo de París', url: 'https://drive.google.com/file/d/1Rt9LlnPYNQImkuVGxepshEhM7LR3xh0g/view?usp=sharing' },
      { texto: 'CITIES', url: 'https://drive.google.com/file/d/1gs25eXsIYR77nYyTYBPGZ0sazYIUvu85/view?usp=sharing' },
      { texto: 'CMNUCC', url: 'https://drive.google.com/file/d/1JjXL181fKeQTJYyHM3_SF6Sgi7Gx1Ipv/view?usp=sharing' },
      { texto: 'Infografía ODS 13', url: 'https://drive.google.com/file/d/1GjWr_7RwK2NPI9NiLuRvg5QBg3koj3-W/view?usp=sharing' },
      { texto: 'Informe ODS 2019', url: 'https://drive.google.com/file/d/1i7tPZb06ErKTdIPqhmRl707dKkvKlhlv/view?usp=sharing' },
      { texto: 'IPCC_2022', url: 'https://drive.google.com/file/d/1e9yCsNS5DjDAjBBzyE7cQAvAFrIoqBa4/view?usp=sharing' },
      { texto: 'IPCC_AR6_WGII_SummaryForPolicymakers', url: 'https://drive.google.com/file/d/1TbkemPUOWq-nclOIJG_-RvGMgzIInyiT/view?usp=sharing' },
    ],
  },
  {
    contenido: "02. Marco Nacional",
    links: [
      { texto: 'Enlace 1', url: 'https://www.ejemplo1.com' },
      { texto: 'Enlace 2---', url: 'https://www.ejemplo2.com' },
      { texto: 'Enlace 3---', url: 'https://www.ejemplo3.com' },
      { texto: 'Enlace 4', url: 'https://www.ejemplo4.com' },
      { texto: 'Enlace 5', url: 'https://www.ejemplo5.com' },
      { texto: 'Enlace 6', url: 'https://www.ejemplo6.com' },
      { texto: 'Enlace 7', url: 'https://www.ejemplo7.com' },
      { texto: 'Enlace 8', url: 'https://www.ejemplo8.com' },
    ],
  },
  {
    contenido: "03. Contexto actual del cambio climático",
    links: [
      { texto: 'Enlace 1', url: 'https://www.ejemplo1.com' },
      { texto: 'Enlace 2---', url: 'https://www.ejemplo2.com' },
      { texto: 'Enlace 3---', url: 'https://www.ejemplo3.com' },
      { texto: 'Enlace 4', url: 'https://www.ejemplo4.com' },
      { texto: 'Enlace 5', url: 'https://www.ejemplo5.com' },
      { texto: 'Enlace 6', url: 'https://www.ejemplo6.com' },
      { texto: 'Enlace 7', url: 'https://www.ejemplo7.com' },
      { texto: 'Enlace 8', url: 'https://www.ejemplo8.com' },
    ],
  },
  {
    contenido: "04. Experiencia a nivel subnacional",
    links: [
      { texto: 'Enlace 1', url: 'https://www.ejemplo1.com' },
      { texto: 'Enlace 2---', url: 'https://www.ejemplo2.com' },
      { texto: 'Enlace 3---', url: 'https://www.ejemplo3.com' },
      { texto: 'Enlace 4', url: 'https://www.ejemplo4.com' },
      { texto: 'Enlace 5', url: 'https://www.ejemplo5.com' },
      { texto: 'Enlace 6', url: 'https://www.ejemplo6.com' },
      { texto: 'Enlace 7', url: 'https://www.ejemplo7.com' },
      { texto: 'Enlace 8', url: 'https://www.ejemplo8.com' },
    ],
  },
  {
    contenido: "05. Instrumentos de Política Climática",
    links: [
      { texto: 'Enlace 1', url: 'https://www.ejemplo1.com' },
      { texto: 'Enlace 2---', url: 'https://www.ejemplo2.com' },
      { texto: 'Enlace 3---', url: 'https://www.ejemplo3.com' },
      { texto: 'Enlace 4', url: 'https://www.ejemplo4.com' },
      { texto: 'Enlace 5', url: 'https://www.ejemplo5.com' },
      { texto: 'Enlace 6', url: 'https://www.ejemplo6.com' },
      { texto: 'Enlace 7', url: 'https://www.ejemplo7.com' },
      { texto: 'Enlace 8', url: 'https://www.ejemplo8.com' },
    ],
  },
];

function Proposals() {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleContent = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  const closePopup = () => {
    setExpandedIndex(null);
  };

  // Determinar si el popup debe mostrarse
  const isPopupVisible = expandedIndex !== null;

  return (
    <div id='documentos' className={styles.container}>
      <div className={styles.wrapContainer}>
          <div className={styles.docElement}>
            <p>Documentos</p>
            <span>Panorama del cambio climático</span>
          </div>
        {elementos.map((elemento, index) => (
          <div  key={index} className={styles.element} onClick={() => toggleContent(index)}>
            <div className={styles.elementChild}>
              <p>{elemento.contenido}</p>
              <img src="./images/arrow.svg"></img>
              {index >= 0 && (
                <button className={styles.moreButton} onClick={() => toggleContent(index)}>
                  {expandedIndex === index ? "Ver Menos" : "Ver Más"}
                </button>
              )}              
            </div>

          </div>
        ))}
      </div>


      {/* Mostrar el popup si es visible */}
      {isPopupVisible && (
        <div className={styles.popUp}>
          <div className={styles.popUpCard}>
            <div className={styles.buttonContainer}>
              <div className={styles.closeButton} onClick={closePopup}>
                  <img src="./images/closeButton.svg"></img>
              </div>
            </div>
            <div className={styles.linkscontainer}>
              <p>{elementos[expandedIndex].contenido.substring(3)}</p>
              
                {elementos[expandedIndex].links.map((link, i) => (
                  <div className={styles.popUpLinks} key={i}>
                    <img className={styles.linksImg} src="./images/clip.svg"></img>
                    <a href={link.url} target="_blank" rel="noopener noreferrer">
                     <span>{link.texto}</span> 
                    </a>
                  </div>

                ))}
            </div>

          </div>

        </div>
      )}
    </div>
  );
}

export default Proposals;