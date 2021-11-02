import './styles.css';

import drawing from '../images/drawing.jpg';
import lakossagi from '../images/lakossagi.png';
import ipari from '../images/ipari.jpg';
import { Fade } from 'react-reveal';
import React, {useState} from 'react';

export default function Work() {
    const [windowWidth] = useState(window.innerWidth);
    const [imgSrc, setImgSrc] = useState(ipari);
    const imageArray = [
        {
            img: lakossagi,
            text: 'Lakossági villanyszerelés'
        },
        {
            img: ipari,
            text: 'Ipari villanyszerelés'
        },
        {
            img: drawing,
            text: 'Tervezés'
        }];

    const setSelectedLink = (e) => {
        document.getElementById("lakossagivillanyszereles").className = "referenceLink";
        document.getElementById("iparivillanyszereles").className = "referenceLink";
        document.getElementById("tervezes").className = "referenceLink";
        document.getElementById(e.target.id).className = document.getElementById(e.target.id).className + " active";
    }

    const superFunction = (img, e) => {
        setImgSrc(img);
        setSelectedLink(e);
    }
    return (
        <div id="work" style={{zIndex: '1000'}}>
            <div className="title-div"><h1 className="green-button">Szolgáltatásaink</h1></div>
            <div className="work">
                <div className="cards-backdrop">
                    <div className="cards">
                    {
                        windowWidth < 1000 ? (
                            <>
                                <Fade left>
                                <div className="cardContainer">
                                    <div className="card">
                                        <h1>Lakossági villanyszerelés</h1>
                                        <p>
                                        Vállaljuk lakossági és ipari létesítmények villanyszerelését illetve riasztó és kamera rendszerek kivitelezését is. Családi házak, panel vagy társasházak teljes körű villanyszerelése. Hibaelhárítás- javítás, régi vezetékek, kábelek, kapcsolók,dugaljak, lámpák, elosztók cseréje, Meglévő elektromos hálózat bővítése, új elektromos hálózat tervezése, kivitelezése. Ingyenes felméréssel és kiszállással, garanciával!
                                        Energiatakarékos, LED-es és zöld rendszerek kivitelezése is!
                                        </p>
                                    </div>
                                    <div className="cardIllustration"><img src={lakossagi} alt="lakossagi"/></div>
                                </div>
                                </Fade>
                                <Fade delay={400} right>
                                <div className="cardContainer">
                                    <div className="card">
                                        <h1>Ipari villanyszerelés</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quas alias, accusamus est libero odit dolorem natus ab, nemo vitae officia reprehenderit dolorum voluptatum, molestiae id hic sapiente aliquid suscipit?</p>
                                    </div>
                                    <div className="cardIllustration"><img src={ipari} alt="ipari"/></div>
                                </div>
                                </Fade>
                                <Fade delay={800} left>
                                <div className="cardContainer">
                                    <div className="card">
                                        <h1>Tervezés</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quas alias, accusamus est libero odit dolorem natus ab, nemo vitae officia reprehenderit dolorum voluptatum, molestiae id hic sapiente aliquid suscipit?</p>
                                    </div>
                                    <div className="cardIllustration"><img src={drawing} alt="tervezes"/></div>
                                </div>
                                </Fade>
                            </>             
                         ) : (
                            <>
                                <Fade left>
                                <div className="cardContainer">
                                    <div className="cardIllustration"><img src={lakossagi} alt="lakossagi"/></div>
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
                                    <div className="cardIllustration"><img src={ipari} alt="ipari"/></div>
                                </div>
                                </Fade>
                                <Fade delay={800} left>
                                <div className="cardContainer">
                                    <div className="cardIllustration"><img src={drawing} alt="tervezes"/></div>
                                    <div className="card">
                                        <h1>Tervezés</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quas alias, accusamus est libero odit dolorem natus ab, nemo vitae officia reprehenderit dolorum voluptatum, molestiae id hic sapiente aliquid suscipit?</p>
                                    </div>
                                </div>
                                </Fade>
                            </>   
                         )
                               
                    }
                    </div>
                </div>
            </div>
            <div className="work-filler" style={{width: '80vw', position: 'relative', left: '10vw'}} id="work-filler">
                <h1 className="green-button" style={{marginBottom: '50px'}}>Korábbi munkáink</h1>
                <div className="work-flex" style={{display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', width: '85vw'}}>
                    <p style={{width: '80vw', textAlign: 'center', display: 'flex', alignItems: 'center'}}>
                        <ol className="work-list">
                            { imageArray.map(item => item.text.toLowerCase().replace(" ", "").replace("á", "a").replace("é", "e") === "iparivillanyszereles" ? 
                            <li id={item.text.toLowerCase().replace(" ", "").replace("á", "a").replace("é", "e")} class="referenceLink active" onClick={(e)=>superFunction(item.img, e)}>{item.text}</li>
                            :
                            <li id={item.text.toLowerCase().replace(" ", "").replace("á", "a").replace("é", "e")} class="referenceLink" onClick={(e)=>superFunction(item.img, e)}>{item.text}</li>) }
                        </ol>
                    </p>
                    {/*<Carousel style={{maxHeight: '55vh', minHeight: '630px'}}>
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
                </Carousel>*/}
                <img class="referenceImg" src={imgSrc} alt="Our work" />
                </div>
            </div>
        </div>
    )
}
