'use client'
import React, { useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styles from './comunication.module.css'

const Comunication = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };

    // Agrega un event listener cuando el componente se monta
    window.addEventListener('resize', updateWindowWidth);

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []); // El segundo argumento [] asegura que el efecto solo se ejecute una vez al montar el componente

  const isMobile = windowWidth < 768;

  return (
    <div className={styles.carouselContainer}>
      <div className={styles.materials}>
        <div className={styles.materialsText}>
          <h2>Materiales de Comunicación</h2>
          <p>Los siguientes materiales gráficos son una herramienta esencial para conocer los aspectos clave relacionados con el cambio climático</p>
        </div>
      </div>

      <Carousel
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={isMobile ? 100 : 60}
        showStatus={false}
        showThumbs={false}
        autoPlay={true}
        interval={5000}
        showArrows={true}
        emulateTouch={true}
        showIndicators={true}
      >
        <div className="carousel-item">
          <img src="./images/comunicacion/INF_TRANSVERSALIDAD_02.jpg" alt="Image 1" />
        </div>
        <div className="carousel-item">
          <img src="./images/comunicacion/INF_N_CARBONO.jpg" alt="Image 2" />
        </div>
        <div className="carousel-item">
          <img src="./images/comunicacion/INF_ADAPTACION.jpg" alt="Image 3" />
        </div>
        <div className="carousel-item">
          <img src="./images/comunicacion/INF_TRANSVERSALIDAD_02.jpg" alt="Image 3" />
        </div>
      </Carousel>
    </div>
  );
};

export default Comunication;
