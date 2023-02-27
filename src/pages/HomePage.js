import React from 'react'
//import { Link } from 'react-router-dom'
import "./css-pages/home.css"
import background from "../img/Dandelion.jpg";

import { FaArrowAltCircleRight } from "react-icons/fa";

import { auth } from '../init';
import { loginWithGoogle } from '../lib/firebase/methodsAuth';

const login = async (e) => {
  e.preventDefault();

  try {
    await loginWithGoogle(auth);
    
    location.href='/notes'
  }
  catch (error) {
   // console.log(error);
  }
};


export default function HomePage() {
  return (
    <div className='fondo-home' 
    style={{ backgroundImage: `url(${background})`, width:"100%" }}>
      {/* <h2>RemindMe</h2> */}
      <button className='btn-google' onClick={login} > RemindMe 
        <FaArrowAltCircleRight className="logout-icon" size={"2rem"} />
      </button>
      {/* <Link to="/notes">Ir a mis notas</Link> */}
        </div>

  )
}