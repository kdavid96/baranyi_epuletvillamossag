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
                                <div className="cardContainer">
                                    <div className="card">
                                        <Fade bottom>
                                            <h1>Lakossági villanyszerelés</h1>
                                        </Fade>
                                        <Fade bottom delay={400}><p>• Hibakeresés, hibaelhárítás</p><br/></Fade>
                                        <Fade bottom delay={410}><p>• Meglévő épületek elektromos hálózatának karbantartását, felújítását, lakáselosztó cseréjét</p><br/></Fade>    
                                        <Fade bottom delay={420}><p>• Új lakó ingatlanok villamos hálózatának tervezését</p><br/></Fade>    
                                        <Fade bottom delay={430}><p>• Családiházak teljeskörű villamos hálózatának tervezését és kivitelezését</p><br/></Fade>    
                                        <Fade bottom delay={440}><p>• Villamos fogyasztásmérőhely tervezését, mindennemű ügyintézését és kivitelezését</p><br/></Fade>    
                                        <Fade bottom delay={450}><p>• Világítás korszerűsítést, design világítás azaz LED technológiára való átállást</p><br/></Fade>    
                                        <Fade bottom delay={460}><p>• Infrafilm és fűtőkábeles elektromos fűtés kivitelezését</p><br/></Fade>   
                                        <Fade bottom delay={470}><p>• Nagy háztartási gépek beüzemelését (elektromos főzőlap, sütő stb.)</p><br/></Fade>   
                                        <Fade bottom delay={480}><p>• Kapunyitó motorok beüzemelését</p><br/></Fade>   
                                        <Fade bottom delay={490}><p>• Mérést és jegyzőkönyvezést (pl.: érintésvédelmi felülvizsgálatot)</p><br/></Fade>
                                    </div>
                                    <div className="cardIllustration"><img src={lakossagi} alt="lakossagi"/></div>
                                </div>
                                <div className="cardContainer">
                                    <div className="card">
                                        <Fade bottom>
                                            <h1>Ipari villanyszerelés</h1>
                                        </Fade>
                                        <Fade bottom delay={400}><p>• Hibakeresés, hibaelhárítás</p><br/></Fade>
                                        <Fade bottom delay={410}><p>• Meglévő ipari létesítmény elektromos hálózatának karbantartását, korszerűsítését</p><br/></Fade>    
                                        <Fade bottom delay={420}><p>• Új ipari létesítmények villamos hálózatának tervezését és kivitelezését</p><br/></Fade>    
                                        <Fade bottom delay={460}><p>• Világítás korszerűsítést azaz LED technológiára való átállást</p><br/></Fade>   
                                        <Fade bottom delay={470}><p>• Üzemi gépek beüzemelését</p><br/></Fade>   
                                        <Fade bottom delay={480}><p>• Ipari elosztó szekrényeket</p><br/></Fade>   
                                        <Fade bottom delay={490}><p>• Mérést és jegyzőkönyvezést (pl.: érintésvédelmi felülvizsgálatot)</p><br/></Fade>
                                    </div>
                                    <div className="cardIllustration"><img src={ipari} alt="ipari"/></div>
                                </div>
                                <div className="cardContainer">
                                    <div className="card">
                                        <Fade bottom>
                                            <h1>Tervezés</h1>
                                        </Fade>
                                        <Fade bottom delay={400}><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quas alias, accusamus est libero odit dolorem natus ab, nemo vitae officia reprehenderit dolorum voluptatum, molestiae id hic sapiente aliquid suscipit?</p></Fade>
                                    </div>
                                    <div className="cardIllustration"><img src={drawing} alt="tervezes"/></div>
                                </div>
                            </>             
                         ) : (
                            <>
                                <div className="cardContainer">
                                    <div className="cardIllustration"><img src={lakossagi} alt="lakossagi"/></div>
                                    <div className="card">
                                        <Fade bottom>
                                            <h1>Lakossági villanyszerelés</h1>
                                        </Fade>
                                        <Fade bottom delay={400}><p>• Hibakeresés, hibaelhárítás</p><br/></Fade>
                                        <Fade bottom delay={410}><p>• Meglévő épületek elektromos hálózatának karbantartását, felújítását, lakáselosztó cseréjét</p><br/></Fade>    
                                        <Fade bottom delay={420}><p>• Új lakó ingatlanok villamos hálózatának tervezését</p><br/></Fade>    
                                        <Fade bottom delay={430}><p>• Családiházak teljeskörű villamos hálózatának tervezését és kivitelezését</p><br/></Fade>    
                                        <Fade bottom delay={440}><p>• Villamos fogyasztásmérőhely tervezését, mindennemű ügyintézését és kivitelezését</p><br/></Fade>    
                                        <Fade bottom delay={450}><p>• Világítás korszerűsítést, design világítás azaz LED technológiára való átállást</p><br/></Fade>    
                                        <Fade bottom delay={460}><p>• Infrafilm és fűtőkábeles elektromos fűtés kivitelezését</p><br/></Fade>   
                                        <Fade bottom delay={470}><p>• Nagy háztartási gépek beüzemelését (elektromos főzőlap, sütő stb.)</p><br/></Fade>   
                                        <Fade bottom delay={480}><p>• Kapunyitó motorok beüzemelését</p><br/></Fade>   
                                        <Fade bottom delay={490}><p>• Mérést és jegyzőkönyvezést (pl.: érintésvédelmi felülvizsgálatot)</p><br/></Fade>
                                    </div>
                                </div>
                                <div className="cardContainer">
                                    <div className="card">
                                        <Fade bottom>
                                            <h1>Ipari villanyszerelés</h1>
                                        </Fade>
                                        <Fade bottom delay={400}><p>• Hibakeresés, hibaelhárítás</p><br/></Fade>
                                        <Fade bottom delay={410}><p>• Meglévő ipari létesítmény elektromos hálózatának karbantartását, korszerűsítését</p><br/></Fade>    
                                        <Fade bottom delay={420}><p>• Új ipari létesítmények villamos hálózatának tervezését és kivitelezését</p><br/></Fade>    
                                        <Fade bottom delay={460}><p>• Világítás korszerűsítést azaz LED technológiára való átállást</p><br/></Fade>   
                                        <Fade bottom delay={470}><p>• Üzemi gépek beüzemelését</p><br/></Fade>   
                                        <Fade bottom delay={480}><p>• Ipari elosztó szekrényeket</p><br/></Fade>   
                                        <Fade bottom delay={490}><p>• Mérést és jegyzőkönyvezést (pl.: érintésvédelmi felülvizsgálatot)</p><br/></Fade>
                                    </div>
                                    <div className="cardIllustration"><img src={ipari} alt="ipari"/></div>
                                </div>
                                <div className="cardContainer">
                                    <div className="cardIllustration"><img src={drawing} alt="tervezes"/></div>
                                    <div className="card">
                                        <h1>Tervezés</h1>
                                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quas alias, accusamus est libero odit dolorem natus ab, nemo vitae officia reprehenderit dolorum voluptatum, molestiae id hic sapiente aliquid suscipit?</p>
                                    </div>
                                </div>
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
