import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

//import { GrLogout } from "react-icons/gr";
import { FaSignOutAlt } from 'react-icons/fa'


import ".//css-pages/notes.css"
import { auth } from '../init';
import { logOut } from '../lib/firabase/methodsAuth';
import { deleteNote, getNotes, saveNote } from '../lib/methodsFirestore.js';

export default function NotesPage() {
    //-----------------------------------crear una nota-------------------------------
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log('onsubmit')
        const promise = saveNote(title, description);
        promise.then((result) => {
            console.log(result)
            resetForm();
            // setActualizar(true)
        })
            .catch((error) => {
                console.log('error', error)
            })

    }
    const resetForm = () => {
        SetTitle('');
        SetDescription('');
    }

    const [title, SetTitle] = useState('')
    const handleTitleChange = ({ target }) => {
        SetTitle(target.value)
    }

    const [description, SetDescription] = useState('')
    const handleDescriptionChange = ({ target }) => {
        SetDescription(target.value)
    }
    //-----------------------------------renderizar notas existentes-------------------------------
    //variables de estado
    const [lista, setLista] = useState([])

    const getLista = () => {
        return getNotes(notesCollection => {
            //console.log(notesCollection)
            const docs = []
            notesCollection.forEach((item) => { /*para traer los posts de mi colección */

                let notes = item.data()
                //console.log(item.id);
                notes = { ...notes, time: new Date(notes.date.seconds * 1000) }
                //console.log(notes);
                //  const dateTime = getFecha(notes.time);
                //  console.log(dateTime)
                docs.push({ ...notes, id: item.id })
            })
            console.log(docs)
            setLista(docs)
        })
    }
    //const [actualizar, setActualizar] = useState(false)
    //callbac, cuando pasará
    useEffect(() => { //Solo quiero hacerlo 1 vez.establecer cosas que quiero que pase en los distintos estados(monta(aparece en el DOM(1vez)),
        // actualiza(con la actualización de estados(puede hacerse muchas veces)) y desmonta(se quita del DOM(1vez)) )
        // setActualizar(false)
        const unsubscribe = getLista()
        // react:^esta función se ejecuta cuando el componente se desmonta, al desmontar un componente react ejecuta todas las funciones que retornen los useEffect del componente
        // frebase: cerrando la comunicacion en tiempo real con firestore (websocket)
        const handleUnmount = () => unsubscribe
        return handleUnmount
    }, []) //array de dependencia //el corchete(cuando quiero que pase) //react renderiza siempre
    //actualizar
    //-----------------------------------eliminar nota existente-------------------------------









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
            <form className='form-note' name='formulario' onSubmit={(evento) => { handleSubmit(evento); evento.target.reset() }}>  {/*handle*/}
                <input type='text' name='title' placeholder='Title...' value={title} onChange={handleTitleChange}></input>
                <textarea className='text-note' placeholder='Description...' rows="5" cols="50" name='description' value={description} onChange={handleDescriptionChange}></textarea>
                <button type="submit" className='save-btn'>save</button>

            </form>
            <div className='container-notes'>
                {
                    lista.map(list => (
                        <div key={list.id} className='note'>
                            <div>
                                <button onClick={() => deleteNote(list.id)}>Delete</button>
                                <button>Update</button>

                            </div>
                            <h3> {list.title}</h3>
                            <p> {list.description}</p>
                            <br></br>



                        </div>
                    ))
                }
            </div>
        </div>
    );
}

//---------------------------------------ESCRIBIENDO UNA NOTA----------------------------------------


// const getFecha = (dateTime) => {
//     const year = dateTime.getFullYear();
//     const month = dateTime.getMonth() + 1 < 10 ? `0${dateTime.getMonth() + 1}` : dateTime.getMonth() + 1;
//     const day = dateTime.getDate() < 10 ? `0${dateTime.getDate()}` : dateTime.getDate();
//     const hour = dateTime.getHours();
//     const minutes = dateTime.getMinutes() < 10 ? `0${dateTime.getMinutes()}` : dateTime.getMinutes();

//     return `${day}/${month}/${year} ${hour}:${minutes}`;

// };
