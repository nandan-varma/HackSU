import React from 'react';
import {Link} from "react-router-dom"
import'./InterestButton.css';

const InterestButton = () => {
  return (
    <div className="Interest-Button"> 
        <Link to="https://forms.gle/yPpDzWNzKRc7ZtLP6">
            <button className='button-35'>
                Interest Form
            </button>
        </Link>
    </div>
  )
}

export default InterestButton;