import { app,
  getFirestore, collection, Timestamp, addDoc,} from "../init.js";
// query, orderBy, onSnapshot, deleteDoc, doc, getDoc, updateDoc, arrayUnion, arrayRemove 
  const db = getFirestore(app);


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