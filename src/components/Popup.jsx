import React from 'react';
import bgImage from '../images/promotion_img.jpg';


export default function Popup({isOpenPopup, setOpenPopup}) {
  return (
    <div className="popup-container" style={{display: isOpenPopup ? 'flex' : 'none'}} onClick={() => setOpenPopup(false)}>
      <div className='popup'>
        <div className="bg-image-popup" style={{backgroundImage: `url(${bgImage})`}}>
          <div className="blur"></div>
          <button className='link-button' onClick={() => window.open("http://www.allamkincstar.gov.hu/hu/lakossagi-ugyfelek/otthonfelujitasi_tamogatas_altalanos_tajekoztato", "_blank")}>Érdekel</button>
          <button className='cancel-button'>Tovább az oldalra</button>
        </div>
        <div className="red" onClick={() => setOpenPopup(true)}>
          <h1 className="red-title">Figyelem!</h1>
          Ha otthon felújítási támogatást szeretne igénybe venni villanyszerelésre, kérem kattintson a további információkért.
          <br />
        </div>
      </div>
    </div>
  )
}
