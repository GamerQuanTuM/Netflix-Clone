// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {

    apiKey: "AIzaSyBFxvPV6f_O7ei9ypR2TgTQzx5kWvbYtPk",
    authDomain: "netflix-clone-21643.firebaseapp.com",
    projectId: "netflix-clone-21643",
    storageBucket: "netflix-clone-21643.appspot.com",
    messagingSenderId: "335997696928",
    appId: "1:335997696928:web:49a9799bf7528cbeea42c5"

};



// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }