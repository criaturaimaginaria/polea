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
      { texto: 'CITES', url: 'https://drive.google.com/file/d/1gs25eXsIYR77nYyTYBPGZ0sazYIUvu85/view?usp=sharing' },
      { texto: 'CMNUCC', url: 'https://drive.google.com/file/d/1JjXL181fKeQTJYyHM3_SF6Sgi7Gx1Ipv/view?usp=sharing' },
      { texto: 'Infografía ODS 13', url: 'https://drive.google.com/file/d/1GjWr_7RwK2NPI9NiLuRvg5QBg3koj3-W/view?usp=sharing' },
      { texto: 'Informe ODS 2019', url: 'https://drive.google.com/file/d/1i7tPZb06ErKTdIPqhmRl707dKkvKlhlv/view?usp=sharing' },
      { texto: 'IPCC 2022', url: 'https://drive.google.com/file/d/1e9yCsNS5DjDAjBBzyE7cQAvAFrIoqBa4/view?usp=sharing' },
      { texto: 'IPCC AR6 WGII SummaryForPolicymakers', url: 'https://drive.google.com/file/d/1TbkemPUOWq-nclOIJG_-RvGMgzIInyiT/view?usp=sharing' },
    ],
  },
  {
    contenido: "02. Marco Nacional",
    links: [
      { texto: 'Declaración del Sistema Nacional de Cambio Climatico', url: 'https://drive.google.com/file/d/1pAjWNyPeH0JFT7ALxU0d4RV2hHYRTbFH/view?usp=sharing' },
      { texto: 'Ley Federal De Responsabilidad Ambiental', url: 'https://drive.google.com/file/d/1abfhpoqolyczmtmzjb4ag0lydjjfaxee/view?usp=sharing' },
      { texto: 'Ley General De Cambio ClimáTico', url: 'https://drive.google.com/file/d/1qsvsopklxvp64h0upwrb6rtz_36ay3uu/view?usp=sharing' },
      { texto: 'Lineamientos y criterios evaluacion PNCC', url: 'https://drive.google.com/file/d/1cfViOMJqMgkCYeXn0fXPQMO1HHNR4pU-/view?usp=sharing' },
      { texto: 'Reglamento de la Ley General de Cambio Climático en Materia del Registro Nacional de Emisiones', url: 'https://drive.google.com/file/d/1txhdslzwagcacds13zs91ghvkqpsoi0n/view?usp=sharing' },
      { texto: 'Reglamento Sistema Nacional de Cambio Climático', url: 'https://drive.google.com/file/d/15EXIH4MIbsU8hOZyZ8mH-A40U1UoBkeI/view?usp=sharing' },
      { texto: 'Reglamento Interno de la CICC', url: 'https://drive.google.com/file/d/1VCDIYGnbA0LaWz1gfe5N4MG-ZEfTUzfu/view?usp=sharing' },
    ],
  },
  {
    contenido: "03. Contexto actual del cambio climático",
    links: [
      { texto: 'México ante el Cambio Climático', url: 'https://drive.google.com/file/d/1olygujtx7idhzeidld7diicsxn1dskao/view?usp=sharing' },
    ],
  },
  {
    contenido: "04. Experiencia a nivel subnacional",
    links: [
      { texto: 'Resumen Ejecutivo - Yucatatan', url: 'https://drive.google.com/file/d/1M28iWd0rGxiAH2SI0Z_SqoZbICH-4cDv/view?usp=sharing' },
      { texto: 'Resumen Ejecutivo Armonization de la ley de Austeridad- Ciudad de México', url: 'https://drive.google.com/file/d/1RuZD7rWhbMQp4wGV5iyo-IhhB-W2xNfD/view?usp=sharing' },
      { texto: 'Resumen Ejecutivo - Baja California Sur', url: 'https://drive.google.com/file/d/1yqwZ6DtfJyPSM0UJKqZiK2pNK4q0ZsUD/view?usp=sharing' },
      { texto: 'Resumen Ejecutivo - Chiapas', url: 'https://drive.google.com/file/d/1ZodPoEcitR0zD24eREXlfFSCOFmcLDA7/view?usp=sharing' },
      { texto: 'Resumen Ejecutivo - Economia Circular Ciudad de México', url: 'https://drive.google.com/file/d/1vVlalc5yhxUPncKllhB3bY9Tn2SiZfVq/view?usp=sharing' },
      { texto: 'Resumen Ejecutivo - Guanajuato', url: 'https://drive.google.com/file/d/1_KVceNyjqk-kexyEH-Rdl-OvNu68iVxj/view?usp=sharing' },
      { texto: 'Resumen Ejecutivo - Jalisco', url: 'https://drive.google.com/file/d/1cuKkHWV37_8k24KBTSZOAqsM6eaMU_6n/view?usp=sharing' },
      { texto: 'Resumen Ejecutivo - Puebla', url: 'https://drive.google.com/file/d/1Ej4JCvHOeTruBVGkEkiL7lem1IlT0lxI/view?usp=sharing' },
      { texto: 'Resumen Ejecutivo - Quintana Roo', url: 'https://drive.google.com/file/d/11-uvRf6ElyKUnhI0ThOPZzydZUCTw5tR/view?usp=sharing' },
      { texto: 'Resumen Ejecutivo - Zacatecas', url: 'https://drive.google.com/file/d/1JX0QJhbQumZU7X56FJhwiqMK4dlqVGZo/view?usp=sharing' },
    ],
  },
  {
    contenido: "05. Instrumentos de Política Climática",
    links: [
      { texto: 'Acuerdo por el que se expide la Estrategia Nacional de Cambio Climático', url: 'https://drive.google.com/file/d/1VPLdEcBY9uKX0iQh8rG947nSQuEY60Lr/view?usp=sharing' },
      { texto: 'Atlas Nacional de Vulnerabilidad al Cambio Climático', url: 'https://drive.google.com/file/d/1r8HK1SgXMrGMGtJ0K4MERseORKAYGspP/view?usp=sharing' },
      { texto: 'Estrategia Nacional para REDD 2015', url: 'https://drive.google.com/file/d/1LXrPnYhU--58sfu9OEo8xHqECLq5XjhK/view?usp=sharing' },
      { texto: 'Evaluación Estratégica del Avance Subnacional de la Política Nacional de CC', url: 'https://drive.google.com/file/d/1QlFdcyqu48gBmBLd-F_ZjMzFbT8WP77b/view?usp=sharing' },
      { texto: 'Inventario Nacional de Emisiones 2015', url: 'https://drive.google.com/file/d/1qeAusBKA1cEdjwMstSuxENwqir4gW2Di/view?usp=sharing' },
      { texto: 'Contribucion Determinada a Nivel Nacional 2022', url: 'https://drive.google.com/file/d/1D8O5L9XHVrOQzC3OLABvehsDQwNbS8k5/view?usp=sharing' },
      { texto: 'Programa especial de Cambio Climático 2021-2024', url: 'https://drive.google.com/file/d/19D_G0cV73BnpifmvntH355qWY-nOjG1v/view?usp=sharing' },
      { texto: 'Prontuario Normas Oficiales Mexicanas', url: 'https://drive.google.com/file/d/1pwTfKEoT0AQv_Nt7e3DrDYmFQPyspbMc/view?usp=sharing' },
      { texto: 'Sexta Comunicación Nacional y Segundo Informe Bienal CMNUCC', url: 'https://drive.google.com/file/d/1dHi7bxNOcwRswApbeDv6YrzTNuno8IYK/view?usp=sharing' },
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
