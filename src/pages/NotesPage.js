import React from 'react'
import { Link } from 'react-router-dom'

import { auth } from '../init';
import { logOut } from '../lib/firabase/methodsAuth';
import { saveNote } from '../lib/methodsFirestore.js';








const handleSubmit =(e)=>{
    e.preventDefault();
    console.log('onsubmit')
    const promise = saveNote('dirección María','Jr. Ayacucho Nº 400');
    promise.then((result)=>{
        console.log(result)
    })
    .catch((error)=>{
        console.log('error', error)
    })
}



export default function NotesPage() {
    return (
        <div>
            <div className='container-header'>
                RemindMe
                <h2>Notes</h2>
                {/* <button className='btn-logout' onClick={logOut(auth)}> Logout</button> */}
                <Link to="/" onClick={logOut(auth)}>Logout</Link>
            </div>
            <form className='form-note'  onSubmit={(evento)=>{handleSubmit(evento)}}>  {/*handle*/}
                <div>title</div>
                <textarea className='text-note'>
                </textarea>
                <button type="submit" className='save-btn'>save</button>
            </form>
             <div className='container-notes'>

            </div>
        </div>
    );
}

//---------------------------------------ESCRIBIENDO UNA NOTA----------------------------------------
