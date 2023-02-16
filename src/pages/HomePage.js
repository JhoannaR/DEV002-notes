import React from 'react'
//import { Link } from 'react-router-dom'

import { auth } from '../init';
import { loginWithGoogle } from '../lib/firabase/methodsAuth';

const login = async (e) => {
  e.preventDefault();

  alert("Para más información, acuda a recepción.");
  try {
    await loginWithGoogle(auth);
    // if (emailVerified) {
    //  // onNavigate('/feed');
    //   //console.log('Bienvenid@', email);
    // } else {
    //   /*  auth.signOut();*/
    //   //console.log('Por favor realiza la verificación de tu cuenta');
    // }
    location.href='/notes'
  }
  catch (error) {
    console.log(error);
  }
};


//import background from "./img/dienteDeLeon.png";

export default function HomePage() {
  return (
    <div>
      <h2>RemindMe</h2>
      <button className='btn-google' onClick={login}> Google</button>
      {/* <Link to="/notes">Ir a mis notas</Link> */}

    </div>

  )
}