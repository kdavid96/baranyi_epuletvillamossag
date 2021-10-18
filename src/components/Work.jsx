import React from 'react';
import { Fade } from 'react-reveal';
import { Carousel } from 'react-bootstrap';
import './styles.css';

export default function Work() {
    return (
        <div id="work">
            <div className="work">
                <h1>Szolgáltatásaink</h1>
                <div className="cards">
                    <Fade top>
                    <div className="card">
                        <h1>Card1</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quas alias, accusamus est libero odit dolorem natus ab, nemo vitae officia reprehenderit dolorum voluptatum, molestiae id hic sapiente aliquid suscipit?</p>
                    </div>
                    </Fade>
                    <Fade delay={400} bottom>
                    <div className="card">
                        <h1>Card2</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quas alias, accusamus est libero odit dolorem natus ab, nemo vitae officia reprehenderit dolorum voluptatum, molestiae id hic sapiente aliquid suscipit?</p>
                    </div>
                    </Fade>
                    <Fade delay={800} top>
                    <div className="card">
                        <h1>Card3</h1><p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius quas alias, accusamus est libero odit dolorem natus ab, nemo vitae officia reprehenderit dolorum voluptatum, molestiae id hic sapiente aliquid suscipit?</p>
                    </div>
                    </Fade>
                </div>
            </div>
            <div className="work-filler" style={{width: '80vw', position: 'relative', left: '10vw'}}>
                <h1 style={{marginBottom: '55px'}}>Korábbi munkáink</h1>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    <p style={{width: '55vw', textAlign: 'center', display: 'flex', alignItems: 'center'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Sint commodi sed in earum! Voluptates odit maiores eaque libero commodi, excepturi quis provident,
                        quaerat aliquam inventore minus a neque quisquam magni?
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Id magni officia minus ullam aspernatur rerum, commodi amet sapiente,
                        odit quos optio sunt delectus rem et perferendis quod unde. Sint, natus.
                        Ea pariatur impedit deleniti numquam, rem explicabo adipisci.
                        Magni placeat voluptate eius, corporis libero tempore numquam dolores reprehenderit,
                        amet aut quae laudantium sunt similique neque, aliquid mollitia voluptatem necessitatibus optio?
                        Culpa quisquam, recusandae minus optio iste possimus maxime saepe placeat fuga,
                        eius voluptate beatae deleniti nostrum consequatur? Culpa omnis iure id adipisci
                        aliquam voluptas tempore dolore consequatur saepe, itaque excepturi.
                        Explicabo aut consequuntur animi veniam quidem voluptate vero.
                        Ducimus magni officiis unde ad veritatis impedit debitis, quis veniam rem officia repellat!
                        Tempore odit, dolor natus corrupti magni sunt necessitatibus et.
                        Iusto, voluptates ipsa! Sit incidunt repudiandae consectetur corporis
                        eaque perferendis accusamus. Debitis quisquam ratione autem distinctio reiciendis
                        ducimus dolorum officiis. Unde suscipit dolore, voluptas nemo ut autem deserunt esse id.</p>
                    <Carousel style={{maxHeight: '55vh', minHeight: '630px'}}>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src="./images/slides/5.jpg"
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
                            src="./images/slides/1.jpg"
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
                            src="./images/slides/3.jpg"
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
