'use client'
import React, { useState } from 'react';
import styles from './proposals.module.css'

// Array de objetos con contenido para los elementos "Ver Más"
const elementos = [
  {
    contenido: "01. Marco Internacional",
    links: [
      { texto: '¿Acuerdo de Escazú ING y ESP', url: 'https://www.ejemplo1.com' },
      { texto: 'Acuerdo de París', url: 'https://www.ejemplo2.com' },
      { texto: 'CITIES', url: 'https://www.ejemplo3.com' },
      { texto: 'CMNUCC', url: 'https://www.ejemplo4.com' },
      { texto: 'Infografía ODS 13', url: 'https://www.ejemplo5.com' },
      { texto: 'Informe ODS 2019', url: 'https://www.ejemplo6.com' },
      { texto: 'IPCC_2022', url: 'https://www.ejemplo7.com' },
      { texto: 'IPCC_AR6_WGII_SummaryForPolicymakers', url: 'https://www.ejemplo8.com' },
      { texto: 'Paris', url: 'https://www.ejemplo8.com' },
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
    <div className={styles.container}>
      <div className={styles.wrapContainer}>
          <div className={styles.docElement}>
            <p>Documentos</p>
            <span>Panorama del cambio climático</span>
          </div>
        {elementos.map((elemento, index) => (
          <div key={index} className={styles.element}>
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
            <button className={styles.closeButton} onClick={closePopup}>Cerrar</button>
            <p>{elementos[expandedIndex].contenido}</p>
            <ul>
              {elementos[expandedIndex].links.map((link, i) => (
                <li key={i}>
                  <a href={link.url} target="_blank" rel="noopener noreferrer">
                    {link.texto}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      )}
    </div>
  );
}

export default Proposals;