'use client'
import React, { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styles from './comunication.module.css';
import useWindowSize from "@/hooks/useWindowSize";

const Comunication = () => {
  const windowSize = useWindowSize();

  const handleImageClick = (index) => {
    const images = [
      "./images/comunicacion/INF_TRANSVERSALIDAD_02.jpg",
      "./images/comunicacion/INF_N_CARBONO.jpg",
      "./images/comunicacion/INF_JC.jpg",
      "./images/comunicacion/INF_ADAPTACION.jpg",
    ];

    const imageUrl = images[index];

    // Abre la imagen en una nueva pestaña
    window.open(imageUrl, "_blank");
  };

  return (
    <div id='comunicacion' className={styles.carouselContainer}>
      <div className={styles.materials}>
        <div className={styles.materialsText}>
          <h2>Materiales de Comunicación</h2>
          <p>Los siguientes materiales gráficos son una herramienta esencial para conocer los aspectos clave relacionados con el cambio climático</p>
        </div>
      </div>

      <Carousel
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={windowSize.width < 470 ? 100 : 60}
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        interval={5000}
        showArrows={true}
        emulateTouch={true}
        showIndicators={false}
        onClickItem={handleImageClick}
      >
        <div className="carousel-item" style={{ cursor: 'pointer' }}>
          <img src="./images/comunicacion/INF_TRANSVERSALIDAD_02.jpg" alt="Image 1" />
        </div>
        <div className="carousel-item" style={{ cursor: 'pointer' }}>
          <img src="./images/comunicacion/INF_N_CARBONO.jpg" alt="Image 2" />
        </div>
        <div className="carousel-item" style={{ cursor: 'pointer' }}>
          <img src="./images/comunicacion/INF_JC.jpg" alt="Image 3" />
        </div>
        <div className="carousel-item" style={{ cursor: 'pointer' }}>
          <img src="./images/comunicacion/INF_ADAPTACION.jpg" alt="Image 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default Comunication;