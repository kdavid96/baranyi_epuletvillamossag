import './styles.css';

import { Carousel } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import React from 'react';

export default function Work() {
    return (
        <div id="work" style={{zIndex: '1000'}}>
            <div className="title-div"><h1 className="green-button">Szolgáltatásaink</h1></div>
            <div className="work">
                <div className="cards-backdrop">
                    <div className="cards">
                        <>
                        <Fade left>
                        <div className="cardContainer">
                            <div className="cardIllustration"><img src="./images/lakossagi.png" alt="lakossagi"/></div>
                            <div className="card">
                                <h1>Lakossági villanyszerelés</h1>
                                <p>
                                Vállaljuk lakossági és ipari létesítmények villanyszerelését illetve riasztó és kamera rendszerek kivitelezését is. Családi házak, panel vagy társasházak teljes körű villanyszerelése. Hibaelhárítás- javítás, régi vezetékek, kábelek, kapcsolók,dugaljak, lámpák, elosztók cseréje, Meglévő elektromos hálózat bővítése, új elektromos hálózat tervezése, kivitelezése. Ingyenes felméréssel és kiszállással, garanciával!
                                Energiatakarékos, LED-es és zöld rendszerek kivitelezése is!
                                </p>
                            </div>
                        </div>
                        </Fade>
                        <Fade delay={400} right>
                        <div className="cardContainer">
                            <div className="card">
                                <h1>Ipari villanyszerelés</h1>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quas alias, accusamus est libero odit dolorem natus ab, nemo vitae officia reprehenderit dolorum voluptatum, molestiae id hic sapiente aliquid suscipit?</p>
                            </div>
                            <div className="cardIllustration"><img src="./images/ipari.png" alt="ipari"/></div>
                        </div>
                        </Fade>
                        <Fade delay={800} left>
                        <div className="cardContainer">
                            <div className="cardIllustration"><img src={process.env.PUBLIC_URL + '/images/drawing.jpeg'} alt="tervezes"/></div>
                            <div className="card">
                                <h1>Tervezés</h1>
                                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quas alias, accusamus est libero odit dolorem natus ab, nemo vitae officia reprehenderit dolorum voluptatum, molestiae id hic sapiente aliquid suscipit?</p>
                            </div>
                        </div>
                        </Fade>
                        </>                    
                    </div>
                </div>
            </div>
            <div className="work-filler" style={{width: '80vw', position: 'relative', left: '10vw'}} id="work-filler">
                <h1 className="green-button" style={{marginBottom: '50px'}}>Korábbi munkáink</h1>
                <div className="work-flex" style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between',width: '75vw'}}>
                    <p style={{width: '35vw', textAlign: 'center', display: 'flex', alignItems: 'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint commodi sed in earum! Voluptates odit maiores eaque libero commodi, excepturi quis provident,
                        quaerat aliquam inventore minus a neque quisquam magni?
                        Magni placeat voluptate eius, corporis libero tempore numquam dolores reprehenderit,
                        amet aut quae laudantium sunt similique neque, aliquid mollitia voluptatem necessitatibus optio?
                        Culpa quisquam, recusandae minus optio iste possimus maxime saepe placeat fuga.</p>
                    <Carousel style={{maxHeight: '55vh', minHeight: '630px'}}>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="./images/slides/5.webp"
                            alt="5"
                            />
                            <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="./images/slides/1.webp"
                            alt="1"
                            />

                            <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="./images/slides/3.webp"
                            alt="3"
                            />

                            <Carousel.Caption>
                            <h3></h3>
                            <p></p>
                            </Carousel.Caption>
                        </Carousel.Item>
                    </Carousel>
                </div>
            </div>
        </div>
    )
}
