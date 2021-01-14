import React from 'react';

import Header from './shared/Header';
import Footer from './shared/Footer';
import img2 from '../img/2.jpg';
import img3 from '../img/3.jpg';
import img4 from '../img/4.jpg';
import img5 from '../img/5.jpg';
import img6 from '../img/6.jpg';
import img7 from '../img/7.jpg';
import img8 from '../img/8.jpg';
import img9 from '../img/9.jpg';
import air from '../img/air.png';
import earth from '../img/earth.png';
import fire from '../img/fire.png';
import water from '../img/water.png';
import user1 from '../img/user-1.jpg';
import user2 from '../img/user-2.jpg';
import user3 from '../img/user-3.jpg';



export default function Home() {
    return (
        <div>
            <Header />

                <section className="section-features">
                    <div className="row">
                            <h2>Nuestros Servicios &mdash; Círculos de crecimiento</h2>
                            <p className="long-copy">In at felis vel lacus condimentum pellentesque. Phasellus commodo finibus ante eu facilisis. Etiam quis magna nec purus aliquet fermentum. Tincidunt est mauris eget turpis facilisis!</p>
                    </div>
                    <div className="row">
                            <div className="col span-1-of-4 box">

                                <h3>Iniciación</h3>
                                <p>Con la guía del Taita de la comunidad Inga, se abren las puertas del conocimiento ancestral. Llegamos al conocimiento propio, reconociendo nuestra naturaleza,  entorno físico y emocional.</p>
                            </div>
                            <div className="col span-1-of-4 box">

                                <h3>Sanación</h3>
                                <p>La medicina que se encuentra en la naturaleza provee la solución a muchas incógnitas de nuestras generaciones recientes, dolores, angustias, preocupaciones, culpas, expectativas, entre otras.</p>
                            </div>
                            <div className="col span-1-of-4 box">

                                <h3>Formación</h3>
                                <p>El círculo de formación está encabezado por el programa de Reconexión Femenina, el cual hace una invitación a tu autoconocimiento, para establecer un vínculo amoroso, honesto, compasivo e íntimo contigo.</p>
                                </div>
                            <div className="col span-1-of-4 box">

                                <h3>Consulta con Mamo</h3>
                                <p>El Mamo Senchina de la comunidad Kogui nos guía, desde la Sierra Nevada de Santa Marta con los conocimientos de abuelos, nos enseña cómo es el buen vivir y las prácticas espirituales para llegar a la armonía.</p>
                            </div>
                        </div>
                </section>


                <section className="section-images">
                        <ul className="images-showcase clearfix">
                                <li>
                                    <figure className="animal-photo">
                                        <img src={img2} alt="" width="800px" height="600px" sizes="(max-width: 500px) 100px" />
                                    </figure>
                                </li>
                                <li>
                                    <figure className="animal-photo">
                                        <img src={img3}  alt="" width="800px" height="600px" sizes="(max-width: 500px) 100px" />
                                    </figure>
                                </li>
                                <li>
                                    <figure className="animal-photo">
                                        <img src={img4}  alt="" width="800px" height="600px" sizes="(max-width: 500px) 100px" />
                                    </figure>
                                </li>
                                <li>
                                    <figure className="animal-photo">
                                        <img src={img5}  alt="" width="800px" height="600px" sizes="(max-width: 500px) 100px" />
                                    </figure>
                                </li>
                        </ul>
                        <ul className="images-showcase clearfix">
                                <li>
                                    <figure className="animal-photo">
                                        <img src={img6} alt="" width="800px" height="600px" sizes="(max-width: 500px) 100px" />
                                    </figure>
                                </li>
                                <li>
                                    <figure className="animal-photo">
                                        <img src={img7} alt="" width="800px" height="600px" sizes="(max-width: 500px) 100px" />
                                    </figure>
                                </li>
                                <li>
                                    <figure className="animal-photo">
                                        <img src={img8}  alt="" width="800px" height="600px" sizes="(max-width: 500px) 100px" />
                                    </figure>
                                </li>
                                <li>
                                    <figure className="animal-photo">
                                        <img src={img9} alt="" width="800px" height="600px" sizes="(max-width: 500px) 100px"/>
                                    </figure>
                                </li>
                        </ul>
                </section>

                <section className="section-elements">
                        <div className="row">
                            <h2>¿Cómo funciona? &mdash; Los Elementos: el Equilibrio</h2>
                            <p className="long-copy">La madre tierra está constituida por una sinergia entre los cuatro elementos. Esa armonía elemental abarca todos los planos y las esferas de nuestra vida y nos envuelve su esencia, la mente, el cuerpo, el alma y nuestro alrededor.</p>
                        </div>
                        <div className="row">
                            <div className="col span-1-of-4 box">
                                <img src={air} alt="air" width="28px" height="23px" sizes="(max-width: 125px) 30px" />
                                <h3>Aire</h3>
                                <p>Es la conexión entre el mundo de afuera y el mundo de adentro, es la voz del espíritu, por ello la respiración es el canal de comunicación y el regulador de las energías.</p>
                            </div>
                            <div className="col span-1-of-4 box">
                                <img src={earth} alt="earth" width="28px" height="23px" sizes="(max-width: 125px) 30px" />
                                <h3>Tierra</h3>
                                <p>Representa la forma, los órganos músculos, el sistema óseo, la materia de la existencia. Es nuestra raíz y conexión con la naturaleza y su energía.</p>
                            </div>
                            <div className="col span-1-of-4 box">
                                <img src={fire} alt="air" width="28px" height="23px" sizes="(max-width: 125px) 30px" />
                                <h3>Fuego</h3>
                                <p>Es el alquimista de la materia, todo lo transforma. Representa nuestro cuerpo espiritual, es un pequeño carbón del sol, es el fuego del cielo y el sol de la tierra.</p>
                            </div>
                            <div className="col span-1-of-4 box">
                                <img src={water} alt="air" width="28px" height="23px" sizes="(max-width: 125px) 30px" />
                                <h3>Agua</h3>
                                <p>Es la cuota de nuestra vida, el cuerpo sutil del ser, la sangre por donde se mueve la vida, purifica emociones, limpia pensamientos y palabra. </p>
                            </div>
                        </div>
                </section>

                <section className="section-how-we-are">
                    <div className="row">
                        <h2>Nuestro Equipo</h2>
                    </div>
                </section>


                <section className="section-testimonials">
                        <div className="row">
                            <h2>Lo que dicen de Nosotros</h2>
                        </div>
                        <div className="row">
                            <div className="col span-1-of-3">
                                <blockquote>
                                    In in pharetra neque. Cras ultricies, odio et accumsan lacinia, massa urna dignissim elit, eu dapibus nunc lorem ac felis. Quisque commodo tincidunt vehicula. Aliquam maximus facilisis sapien in gravida!.
                                    <cite>  <img src={user1} alt="user" width="100px" height="100px"/> Alberto Duncan</cite>
                                </blockquote>
                            </div>
                            <div className="col span-1-of-3">
                                <blockquote>
                                    In in pharetra neque. Cras ultricies, odio et accumsan lacinia, massa urna dignissim elit, eu dapibus nunc lorem ac felis. Quisque commodo tincidunt vehicula. Aliquam maximus facilisis sapien in gravida!.
                                    <cite>  <img src={user2} alt="user" width="100px" height="100px"/> Johana Silva</cite>
                                </blockquote>
                            </div>
                            <div className="col span-1-of-3">
                                <blockquote>
                                    In in pharetra neque. Cras ultricies, odio et accumsan lacinia, massa urna dignissim elit, eu dapibus nunc lorem ac felis. Quisque commodo tincidunt vehicula. Aliquam maximus facilisis sapien in gravida!.
                                    <cite>  <img src={user3} alt="user" width="100px" height="100px"/> Milton Chapman</cite>
                                </blockquote>
                            </div>
                        </div>
                </section>


                <section className="section-plans">
                        <div className="row">
                            <h2>Empieza tu descubrimiento hoy!</h2>
                        </div>
                        <div className="row">
                        <div className="col span-1-of-3">
                            <div className="plan-box">
                                <div>
                                    <h3>Free</h3>
                                    <p className="plan-price">$0.00 <span>/ mes</span></p>
                                    <p className="plan-price-service">Cuatro sesiones</p>
                                </div>
                                <div>
                                    <ul>
                                    <li>Cras ultricies</li>
                                    <li>Cras ultricies</li>
                                    <li>Cras ultricies</li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="/" className="btn btn-ghost">Regístrate</a>
                                </div>
                            </div>
                        </div>
                        <div className="col span-1-of-3">
                            <div className="plan-box">
                                <div>
                                    <h3>Avanzado</h3>
                                    <p className="plan-price">$100 <span>/ mes</span></p>
                                    <p className="plan-price-service">Cuatro sesiones</p>
                                </div>
                                <div>
                                    <ul>
                                    <li>Cras ultricies</li>
                                    <li>Cras ultricies</li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="/" className="btn btn-full">Regístrate</a>
                                </div>
                            </div>
                        </div>
                        <div className="col span-1-of-3">
                            <div className="plan-box">
                                <div>
                                    <h3>Premiun</h3>
                                    <p className="plan-price">$180  <span>/ mes</span></p>
                                    <p className="plan-price-service">Cuatro sesiones</p>
                                </div>
                                <div>
                                    <ul>
                                    <li>Cras ultricies</li>
                                    <li>Cras ultricies</li>
                                    <li>Cras ultricies</li>
                                    </ul>
                                </div>
                                <div>
                                    <a href="/" className="btn btn-ghost">Regístrate</a>
                                </div>
                            </div>
                        </div>
                        </div>
                </section>

            <Footer />
        </div>
    )
}
