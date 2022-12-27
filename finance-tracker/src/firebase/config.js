import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyDD5WB6IqsCp8O1AJ7gxG3sbpqUjndFwS8",
    authDomain: "pesa-6c0a2.firebaseapp.com",
    projectId: "pesa-6c0a2",
    storageBucket: "pesa-6c0a2.appspot.com",
    messagingSenderId: "1027976879462",
    appId: "1:1027976879462:web:0a2a57c5c42d2d0088bca7"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, timestamp }

