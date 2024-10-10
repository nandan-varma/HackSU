import React from 'react'
import './Theme.css'

const Theme = () => {
  return (
    <div className='Theme'>
      <h1 className='Theme-title'>We are <b>Better Together!</b></h1>
      <div className='Theme-blocks'>
        <div className='Theme-section'>
          <h2 className='Theme-subtitle'>Human Connectivity</h2>
          <div className='Theme-content'>
            <ul className='Theme-list'>
              <li className='Theme-listItem'>Applications surrounded on the basis of community and social opportunities</li>
              <li className='Theme-listItem'>Fostering communication, interpersonal relationships, and respect for others</li>
              <li className='Theme-listItem'>Encouraging social interactions, care for one another, etc.</li>
              <li className='Theme-listItem'>Mentors from SEAC, MOSAIC, and other companies fostering connection!</li>
            </ul>
          </div>
        </div>
        <div className='Theme-section'>
          <h2 className='Theme-subtitle'>Applied Science & HealthCare</h2>
          <div className='Theme-content'>
            <ul className='Theme-list'>
              <li className='Theme-listItem'>Applications based on personal or communal health</li>
              <li className='Theme-listItem'>Applications solving issues within respective fields of healthcare and the sciences</li>
              <li className='Theme-listItem'>Innovative solutions to unique and pressing issues</li>
              <li className='Theme-listItem'>Mentors from Biology Club, Psi Chi, and other specialties!</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Theme