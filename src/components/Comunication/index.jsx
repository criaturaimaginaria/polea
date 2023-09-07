'use client'
import React, {  useState, useEffect } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';
import styles from './comunication.module.css'

const Comunication = () => {

  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const updateWindowWidth = () => {
      setWindowWidth(window.innerWidth);
    };
    window.addEventListener('resize', updateWindowWidth);
    return () => {
      window.removeEventListener('resize', updateWindowWidth);
    };
  }, []); 

  const isMobile = windowWidth < 768;
  
  return (
    <div className={styles.carouselContainer}>

    <div className={styles.materials}>
        <div className={styles.materialsText}>
          <h2>Materiales de Comunicación</h2>
          <p>Los siguientes materiales gráficos son una herramienta 
            esencial para conocer los aspectos clave relacionados con el 
            cambio climático </p>
        </div>
    </div>

      <Carousel 
        infiniteLoop={true}
        centerMode={true}
        centerSlidePercentage={isMobile ? 100 : 60} // Personaliza el porcentaje de separación
        showStatus={false}
        showThumbs={false}
        autoPlay={true} // Habilita la reproducción automática
        interval={5000}

        showArrows={true} // Oculta las flechas de navegación
        emulateTouch={true} // Habilita la navegación táctil en dispositivos móviles
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