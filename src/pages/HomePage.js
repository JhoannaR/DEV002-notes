import React from 'react'
//import { Link } from 'react-router-dom'
import ".//css-pages/home.css"



import { auth } from '../init';
import { loginWithGoogle } from '../lib/firabase/methodsAuth';

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
    <div className='fondo-home'>
      <h2>RemindMe</h2>
      <button className='btn-google' onClick={login}> Google</button>
      {/* <Link to="/notes">Ir a mis notas</Link> */}
        </div>

  )
}