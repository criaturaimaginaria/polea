'use client'
import React, { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Importa los estilos del carrousel
import { Carousel } from 'react-responsive-carousel';

const Comunication = () => {

  
  return (
    <div>
    <Carousel 
      infiniteLoop={true}
      centerMode={true}
      centerSlidePercentage={80} // Personaliza el porcentaje de separación
      showStatus={false}
      showThumbs={false}
      autoPlay={true} // Habilita la reproducción automática
      interval={5000}
    >
      <div className="carousel-item">
        <img src="./images/banner1.jpg" alt="Image 1" />
      </div>
      <div className="carousel-item">
        <img src="./images/plants.png" alt="Image 2" />
      </div>
      <div className="carousel-item">
        <img src="./images/mainbackground.png" alt="Image 3" />
      </div>
      {/* Agrega más diapositivas según sea necesario */}
    </Carousel>

    </div>

  );
};

export default Comunication;