import { app,
  getFirestore, collection, Timestamp, addDoc,query, orderBy, onSnapshot, deleteDoc, doc} from "../init.js";
// , getDoc, updateDoc, arrayUnion, arrayRemove, , querySnapshot 
  const db = getFirestore(app);

//--------------------Generando nueva nota de forma dinámica----------------

  // export const saveNote = async (title, descripcion) => await addDoc(collection(db, 'notesCollection'), {
  //    title, descripcion, date: Timestamp.fromDate(new Date()) }); /*se guarda la info con la hora de firebase */


  export const saveNote =(title, description)=>{
    const collectionRef =collection(db, 'notesCollection')
    const promise = addDoc(collectionRef, {  //el resultado de collection le va a pasr a addDoc. No es callback porque estamos pasando un valor, no una función
      title, description, date: Timestamp.fromDate(new Date()) });
      return promise;
  }


  //    export const saveNote = async(titulo, descripcion) =>{
  //    try {
  //     const docRef = await addDoc(collection(db, "notesCollection"), {
  //       title: titulo,
  //       desdcription: descripcion,
       
  //     });
  //     console.log("Document written with ID: ", docRef.id);
  //   } catch (e) {
  //     console.error("Error adding document: ", e);
  //   }
  // }

  //---------------Obtener notas existentes de forma dinámica(sin recargar)----------------

  export const getNotes = (callback) => {
    const qs = query(collection(db, 'notesCollection'), orderBy('date', 'desc'));
    return onSnapshot(qs, callback)
    //querySnapshot(qs, (callback))

  }


  // const [tasks, setTasks] = useState([])
  //   useEffect(() => {
  //       onSnapshot(collection(db, "notes"), (querySnapshot) => { //ordenarle en fecha tal vez sort(...data)
  //           const data = [];
  //           querySnapshot.forEach((doc) => {
  //               data.push(doc.data());
  //           })
  //           setTasks(data);
  //           console.log(tasks);
  //       })

  //   }, []
  //   )

  //---------------Eliminar nota existente------------------------------------------------
  export const deleteNote = async (id) => await deleteDoc(doc(db, 'notesCollection', id));
