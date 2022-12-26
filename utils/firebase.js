// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth,GoogleAuthProvider,signInWithPopup} from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCKTZxbEYUG-H161kTvZnFuj33idOMBAic",
  authDomain: "twitter-clone-22911.firebaseapp.com",
  projectId: "twitter-clone-22911",
  storageBucket: "twitter-clone-22911.appspot.com",
  messagingSenderId: "674903347206",
  appId: "1:674903347206:web:50f4ede05ae0d5c59a3387"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const provider =new GoogleAuthProvider();
export const auth=getAuth(app);
export const signInWithGoogle=()=>{
    signInWithPopup(auth,provider).then((res)=>console.log(res));
}