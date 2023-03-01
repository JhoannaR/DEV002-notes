import React, { useState } from 'react'
import { useNavigate  } from 'react-router-dom'
import "./css-pages/home.css"
import background from "../img/Dandelion.jpg";

import { FaArrowAltCircleRight } from "react-icons/fa";

import { auth } from '../init';
import { loginWithGoogle } from '../lib/firebase/methodsAuth';

export default function HomePage() {
  const navigate = useNavigate();
  const [blColor, setBlColor] =useState('blue');

  const login = async (e) => {
    
    e.preventDefault();
    setBlColor(blColor ==='blue'? 'pink':'blue')
  
    try {
     const loguinGoogle= await loginWithGoogle(auth);
     console.log(loguinGoogle)
     navigate("/notes") // lo redireccionamos
  
      
       //location.href='/notes' esto recarga la aplicación desde 0
    }
    catch (error) {
     // console.log(error);
    }
  };


  return (
    <div className='fondo-home' 
    style={{ backgroundImage: `url(${background})`, width:"100%" }}>
      {/* <h2>RemindMe</h2> */}
      <button className='btn-google' onClick={login} >  RemindMe 
        <FaArrowAltCircleRight className="logout-icon" size={"2rem"} />
      </button>
      {/* <Link to="/notes">Ir a mis notas</Link> */}
        </div>

  )
}