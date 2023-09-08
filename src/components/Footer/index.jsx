'use client'
import React,{useState, useRef, useContext, useEffect}  from 'react'
import styles from './footer.module.css'
import useWindowSize from "@/hooks/useWindowSize";


const Footer = () => {

    const windowSize = useWindowSize();

    const [sent, setSent] = useState(false)
    const [inputValue, setInputValue] = useState("");
    const [inputValu2, setInputValue2] = useState("");
    const [inputValu3, setInputValue3] = useState("");


    const initialData = [
        { 
            title: 'Biblioteca de recursos del Instituto Nacional de Ecología y Cambio Climático', 
            link: 'http://elcambioclimaticodefrente.inecc.gob.mx/biblioteca_de_recursos#descargables' 
        },
        { 
            title: 'Explorador de cambio climático y biodiversidad (ECCBio)', 
            link: 'https://servicios.conabio.gob.mx/ECCBio/' 
        },
        { 
            title: 'Sistema Nacional de Indicadores Ambientales', 
            link: 'https://apps1.semarnat.gob.mx:8443/dgeia/clave20/index.html' 
        },
        { 
            title: 'Inventario Nacional de Emisiones de Gases y Compuestos de Efecto Invernadero (INEGyCEI)', 
            link: 'https://datos.gob.mx/busca/dataset/inventario-nacional-de-emisiones-de-gases-y-compuestos-de-efecto-invernadero-inegycei' 
        },
        { 
            title: 'Página oficial del Sistema Nacional de Cambio Climático (SINACC)', 
            link: 'https://cambioclimatico.gob.mx/' 
        },
        { 
            title: 'Diccionario de Medio Ambiente', 
            link: 'http://ideinfoteca.semarnat.gob.mx/website/diccionario/v2019/index.html' 
        },
        { 
            title: 'Atlas Nacional de Vulnerabilidad al Cambio Climático', 
            link: 'https://atlasvulnerabilidad.inecc.gob.mx/' 
        },
        { 
            title: 'Página del Sistema Nacional de Información Ambiental y de Recursos Naturales', 
            link: 'https://www.gob.mx/semarnat/acciones-y-programas/sistema-nacional-de-informacion-ambiental-y-de-recursos-naturales' 
        },
        { 
            title: 'Página de la Convención Marco de las Naciones Unidas sobre el Cambio Climático ', 
            link: 'https://unfccc.int/es/process-and-meetings/the-convention/que-es-la-convencion-marco-de-las-naciones-unidas-sobre-el-cambio-climatico'
         },
        { 
            title: 'Catálogo de cursos de Cambio Climático de las Naciones Unidas', 
            link: 'https://unccelearn.org/courses/?language=es'
         },
        { 
            title: 'Biblioteca digital de Cambio Climático', 
            link: 'http://140.84.163.2:8080/xmlui/discover' 
        },
        { 
            title: 'Página del Programa de Investigación en Cambio Climático (PINCC) de la UNAM', 
            link: 'https://www.pincc.unam.mx/' 
        },
        { 
            title: 'Página de Sistema de Comercio de Emisiones de Política y Legislación Ambiental POLEA', 
            link: 'https://www.polea.org.mx/sce/'
         },
         { 
            title: 'Página del programa “CityAdapt” de las Naciones Unidas para incrementar la resiliencia climática de las ciudades mediante SbN', 
            link: 'https://cityadapt.com/'
         },
         { 
            title: 'Página del Panel Intergubernamental de Expertos sobre el Cambio Climático (IPCC)', 
            link: 'http://www.ipcc.ch/home_languages_main_spanish.shtml'
         },
         { 
            title: 'Página del Inventario Homologado Preliminar de Presas de Jales ', 
            link: 'https://geomaticaportal.semarnat.gob.mx/arcgisp/apps/webappviewer/index.html?id=95841aa3b6534cdfbe3f53b3b5d6edfa'
         },
         { 
            title: 'Mapa del Espacio Digital Geográfico ESDIG', 
            link: 'https://gisviewer.semarnat.gob.mx/geointegrador2Beta/index.html'
         },
      ];
    
      const [data, setData] = useState(initialData);
      const [showMore, setShowMore] = useState(false);
    
      const toggleShowMore = () => {
        setShowMore(!showMore);
      };
    
    const mobileStatus = windowSize.width < 460 ? 5 : 10;

  return (
    <div className={styles.Footer}>
        <div className={styles.linksContainer}>
            <div className={styles.linksFather}>
                <div className={styles.fillContainer}>

                </div>
                <div className={styles.ligasContainer}>
                    <div className={styles.titleContainer}>
                        <h2>Ligas de Interés</h2>
                        <p>Infórmate acerca de los aspectos fundamentales, aplicaciones y beneficios 
                            de esta ley dedicada a preservar y mejorar nuestro entorno ambiental.</p>
                    </div>
                    <div className={styles.links}>
                        <ul>
                            {data.slice(0, showMore ? data.length : mobileStatus).map((item, index) => (
                            <li key={index}>
                                <a href={item.link}>{item.title}</a>
                            </li>
                            ))}
                        </ul>
                        <div className={styles.linkButtonContainer}>
                            <button onClick={toggleShowMore}>
                                {showMore ? 'Mostrar menos' : 'Todas las Ligas'}
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
        <div className={styles.contactContainer}>
            <div className={styles.contact}>
                <div className={styles.contactForm}>
                    <form action="https://formsubmit.co/valkjavalkja2@gmail.com" method="POST">
                        <input type="hidden" name="_captcha" value="false"></input>
                            <input type="hidden" name="_next" value="https://personal-page-phi-seven.vercel.app/ThankYou" ></input>
                        <div className={styles.formNames}>
                            <input className={styles.imp1} id='ch' type="text" name="name"  placeholder={"name"} required onChange={(e) => setInputValue(e.target.value)}></input>
                            <input className={styles.imp2}id='ch' type='email' name="email" placeholder={"email"} required  onChange={(e) => setInputValue2(e.target.value)}></input>
                        </div>
                        <div>
                            <textarea className={styles.imp4}  id="message" type="text"  name="message"  placeholder={"message"} required onChange={(e) => setInputValue3(e.target.value)}></textarea>
                        </div>
                        <div className={styles.imp5}>
                            {/* <div className='form_button'> */}
                            <button type='submit' onClick={ () => {setSent(!sent)} }>Enviar</button>
                        </div>
                    </form>   
                </div>
                <div className={styles.contactText}>
                    <h2>Contáctanos</h2>
                    <p>Estamos a tu disposición para atender 
                        cualquier consulta, solicitud o comentario que tengas. 
                        Valoramos profundamente tus aportes, ya que nos ayudan a mejorar.</p>                  
                </div>
            </div>
        </div>
    </div>

  );
};

export default Footer;