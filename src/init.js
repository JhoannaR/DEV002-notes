import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
import { getFirestore, collection, getDocs, Timestamp, addDoc, query, orderBy, onSnapshot, deleteDoc, doc, getDoc, updateDoc } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js";

import  {conect}  from "./lib/firabase/config.js";

const app = initializeApp(conect);
 const auth = getAuth();
 //console.log('auth', auth);

 export {initializeApp, app, auth,
    signInWithPopup, GoogleAuthProvider, signOut,
    getFirestore, collection, getDocs, Timestamp, addDoc, query, orderBy, onSnapshot, deleteDoc, doc, getDoc, updateDoc};

