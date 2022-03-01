import React from 'react'

export default function Popup({isOpenPopup, setOpenPopup}) {
  return (
    <div className="popup-container" style={{display: isOpenPopup ? 'flex' : 'none'}} onClick={() => setOpenPopup(false)}>
      <div className='popup'>
          <p className="red">
            <h1 className="red_title">Figyelem!</h1>
            Ha otthon felújítási támogatást szeretne igénybe venni villanyszerelésre, kérem kattintson az alábbi gombra a további információkért.
            <br />
            <button className='link-button' onClick={() => window.open("http://www.allamkincstar.gov.hu/hu/lakossagi-ugyfelek/otthonfelujitasi_tamogatas_altalanos_tajekoztato", "_blank")}>Érdekel</button>
          </p>
      </div>
    </div>
  )
}
