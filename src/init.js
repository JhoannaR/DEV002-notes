import { initializeApp } from "firebase/app"
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut} from "firebase/auth";
import { getFirestore, collection, getDocs, Timestamp, addDoc, query, orderBy, onSnapshot, deleteDoc, doc, getDoc, updateDoc } from "firebase/firestore";

import  {conect}  from "./lib/firebase/config.js";

const app = initializeApp(conect);
 const auth = getAuth();
 //console.log('auth', auth);

 export {initializeApp, app, auth,
    signInWithPopup, GoogleAuthProvider, signOut,
    getFirestore, collection, getDocs, Timestamp, addDoc, query, orderBy, onSnapshot, deleteDoc, doc, getDoc, updateDoc};

