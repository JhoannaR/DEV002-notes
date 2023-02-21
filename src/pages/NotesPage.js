import React, { useState } from 'react'
import { Link } from 'react-router-dom'

//import { GrLogout } from "react-icons/gr";
import { FaSignOutAlt } from 'react-icons/fa'


import ".//css-pages/notes.css"
import { auth } from '../init';
import { logOut } from '../lib/firabase/methodsAuth';
import { saveNote } from '../lib/methodsFirestore.js';

export default function NotesPage() {

    const handleSubmit =(e)=>{
        e.preventDefault();
       // console.log('onsubmit')
        const promise = saveNote(title, description);
        promise.then((result)=>{
            console.log(result)
            resetForm();
        })
        .catch((error)=>{
            console.log('error', error)
        })

    }
    const resetForm = () =>{
        SetTitle('');
        SetDescription('');
    } 
    
    const [title, SetTitle] =useState('')
    const handleTitleChange = ({target}) =>{
        SetTitle(target.value)
    }
    
    const [description, SetDescription] =useState('')
    const handleDescriptionChange = ({target}) =>{
        SetDescription(target.value)
    }


    return (
        <div>
            <div className='container-header'>
                RemindMe
                <h2>Notes</h2>
                {/* <button className='btn-logout' onClick={logOut(auth)}> Logout</button> */}
                <Link to="/" onClick={logOut(auth)}>
                    <FaSignOutAlt className='logout-icon' size={"2rem"} />
                </Link>
            </div>
            <form className='form-note' name='formulario' onSubmit={(evento)=>{handleSubmit(evento); evento.target.reset()}}>  {/*handle*/}
                <input type='text' name='title' placeholder='Title...' value={title} onChange={handleTitleChange}></input>
                <textarea className='text-note' placeholder='Description...' rows="5" cols="50" name='description' value={description} onChange={handleDescriptionChange}></textarea>
                <button type="submit" className='save-btn' >save</button>

            </form>
             <div className='container-notes'>
                <p>notitas</p>
            </div>
        </div>
    );
}

//---------------------------------------ESCRIBIENDO UNA NOTA----------------------------------------
