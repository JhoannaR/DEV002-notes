import React from 'react'
import { Link } from 'react-router-dom'

import { auth } from '../init';
import { logOut } from '../lib/firabase/methodsAuth';


export default function NotesPage() {
    return (
    <div>
        <div className='container-header'>
            RemindMe
            <h2>Notes</h2>
            {/* <button className='btn-logout' onClick={logOut(auth)}> Logout</button> */}
            <Link to="/" onClick={logOut(auth)}>Logout</Link>
        </div>

        <form className='form-note'>
            <textarea className='text-note'></textarea>
            <button className='save-btn'>save</button>
        </form>

        <div className='container-notes'>

        </div>
    </div>
    );
}