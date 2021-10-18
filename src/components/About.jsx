import React from 'react';
import { AboutContainer } from './style';
import './styles.css';

export default function About() {
    return (
        <div style={{height: '100vh'}} id="about">
        <div className="about" style={{width: '80vw', position: 'relative', left: '10vw'}}>
            <div>
                <h1 style={{marginTop: '85px'}}>Rólunk</h1><br/>
                <AboutContainer>
                    {/*<img src="./images/electricity.svg" alt="aboutImage" style={{width: '400px', height: 'auto' }}/>*/}
                    
                    <div className="text-profile">
                        <p style={{width: '70%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates nam velit ducimus libero eveniet doloribus id eligendi architecto, aperiam suscipit ea sequi molestiae quam doloremque, repellat nobis quibusdam accusantium quis?</p>
                        <img src="./images/logo_official.png" alt="profile_picture" style={{width: '300px', height: '300px', borderRadius: '50%', border: '4px solid #88D136'}}/>
                    </div>
                </AboutContainer>
            </div>
        </div>
        <div style={{width: '80vw', position: 'relative', left: '7vw', display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <div style={{width: '300px', height: 'auto', paddingTop: '5%' }} id="svg">
                            <svg width="322" height="282" viewBox="0 0 322 282" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="electricity 1" clip-path="url(#clip0_2:13)">
                            <g id="surface1">
                            <path id="feher-hatter" d="M145.316 9.1628C151.296 0.924515 159.515 -2.82549 168.488 2.42061C171.476 4.67061 172.968 6.9167 174.464 9.1628L317.968 255.671C320.21 260.167 320.96 263.913 320.21 268.409C317.222 276.651 310.495 279.647 303.019 279.647H19.7494C7.79234 279.647 -1.9264 272.155 1.81188 259.417L2.55797 257.171L3.30797 254.921L145.316 9.1628Z" fill="white"/>
                            <g id="fekete-korvonal">
                            <path id="Vector" d="M145.316 9.1628C151.296 0.924516 159.515 -2.82548 168.488 2.42061C171.476 4.67061 172.968 6.9167 174.464 9.1628L317.968 255.671C320.21 260.167 320.96 263.913 320.21 268.409C317.222 276.651 310.495 279.647 303.019 279.647H19.7494C7.79235 279.647 -1.9264 272.155 1.81188 259.417L2.55797 257.171L3.30797 254.921L145.316 9.1628Z" stroke="#353833" stroke-width="2" stroke-miterlimit="10" stroke-linecap="square"/>
                            </g>
                            <path id="fekete-hatter" d="M8.53845 257.921L150.546 12.1628C152.788 7.66669 156.527 5.41669 160.265 5.41669C163.999 5.41669 167.738 7.66669 169.98 12.1628L312.738 258.667C317.968 266.909 312.738 274.405 302.273 274.405H19.7494C8.53845 274.405 3.30798 266.909 8.53845 257.921Z" fill="#353833"/>
                            <path id="sarga-hatter" d="M299.285 260.167L161.011 24.8972L21.9916 260.167H299.285Z" fill="#FAC824"/>
                            <g id="villam">
                            <path d="M148.304 70.6042L118.777 174.885L162.8 161.69L154.285 209.217L143.074 207.721L153.538 247.428L176.706 212.964L165.495 211.467L187.917 132.042L143.699 148.335L166.437 70.6042H148.304Z" fill="url(#paint0_linear_2:13)"/>
                            <path d="M148.304 70.6042L118.777 174.885L162.8 161.69L154.285 209.217L143.074 207.721L153.538 247.428L176.706 212.964L165.495 211.467L187.917 132.042L143.699 148.335L166.437 70.6042H148.304Z" fill="url(#paint1_linear_2:13)" fill-opacity="0.23"/>
                            </g>
                            </g>
                            </g>
                            <defs>
                            <linearGradient id="paint0_linear_2:13" x1="153.347" y1="70.6042" x2="153.347" y2="247.428" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#000103"/>
                            <stop offset="1" stop-color="#C8831C"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_2:13" x1="153.347" y1="70.6042" x2="153.347" y2="247.428" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#1F86FF"/>
                            <stop offset="1" stop-color="#000AFF" stop-opacity="0"/>
                            </linearGradient>
                            <clipPath id="clip0_2:13">
                            <rect width="321.19" height="281.54" fill="white"/>
                            </clipPath>
                            </defs>
                            </svg>
            </div>
            <div className="aboutText" style={{width: '60vw', position: 'relative', left: '5vw', marginTop: '105px'}}>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos eius odit quam quaerat, explicabo sapiente repellendus perspiciatis repudiandae, quisquam doloribus eum sint. Qui voluptatem iusto iste porro rem, temporibus sunt.
                Necessitatibus voluptatibus repudiandae ab qui est harum accusamus voluptate quae placeat iure officia suscipit corporis laboriosam aliquid quas vitae illo, excepturi in optio odio asperiores. Voluptatibus atque officiis maxime beatae!
                Beatae, soluta tempore. Necessitatibus repellendus aperiam nesciunt error non? Illo adipisci possimus veniam quasi, culpa dignissimos impedit voluptas cum vitae sunt neque dolor deserunt, non velit sed quis obcaecati sapiente!
                Quisquam dolore veniam asperiores harum, eos tempora beatae voluptatem nulla. Maiores consequuntur molestias molestiae nisi voluptates. Aliquam in odit doloribus, voluptates illo asperiores. Adipisci, asperiores. Consequuntur, deserunt? Sapiente, fugit dicta?
                Iusto et rem deserunt debitis distinctio aperiam nisi ipsa vel fugit temporibus nesciunt nam magni ab ad, architecto, animi cum a minima incidunt libero! Omnis eum voluptatem illo sint nisi?</p>
            </div>
        </div>
        </div>
    )
}
