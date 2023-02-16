import React from 'react'
import { Link } from 'react-router-dom'

import { auth } from '../init';
import { logOut } from '../lib/firabase/methodsAuth';





export default function NotesPage() {
    return (<div>RemindMe

        <h2>Notes</h2>
        {/* <button className='btn-logout' onClick={logOut(auth)}> Logout</button> */}
        <Link to="/" onClick={logOut(auth)}>Salir</Link>

    </div>);
}