import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";




const firebaseConfig = {
  apiKey: "AIzaSyAb-66LwHIV8OXPaEJaUqywA5TSJ_aMROw",
  authDomain: "react-blog-app-ffd64.firebaseapp.com",
  databaseURL: "https://react-blog-app-ffd64-default-rtdb.firebaseio.com",
  projectId: "react-blog-app-ffd64",
  storageBucket: "react-blog-app-ffd64.appspot.com",
  messagingSenderId: "199414763179",
  appId: "1:199414763179:web:f1cc4663974d913e27b1ee"
};

const app = initializeApp(firebaseConfig)


export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

export const signup = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
};

export const login = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const logout = () => {
  signOut(auth);
};

export const loginWithGoogle = () => {
  googleProvider.setCustomParameters({ prompt: "select_account" });
  signInWithPopup(auth, googleProvider)
    .then((result) => {})
    .catch((error) => {
      console.log(error);
    });
};
