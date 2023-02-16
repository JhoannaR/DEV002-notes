
import { signInWithPopup, GoogleAuthProvider, signOut  } from '../../init.js'
//const user = auth.currentUser;

export const loginWithGoogle = async (auth) => {
    try{
    const provider = new GoogleAuthProvider();
    const user = await signInWithPopup(auth, provider)
    return user.user;
    }catch(error){
    return error
    }
}

export const logOut =async  (auth) => {
    try {
     await signOut(auth)
     return Promise.resolve(true)
     // Sign-out successful.
   } catch(error)  {
     return Promise.reject(error) 
     // An error happened.
   }
 };
