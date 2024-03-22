import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDWSgH78gIMUQMMyQ7oG_AzC0GURu5Aock",
    authDomain: "reactchat-df3f5.firebaseapp.com",
    projectId: "reactchat-df3f5",
    storageBucket: "reactchat-df3f5.appspot.com",
    messagingSenderId: "79630968265",
    appId: "1:79630968265:web:da96e941c83eac9ca97418",
    measurementId: "G-HM7PGFMCCN"
};

const app = firebase.initializeApp(firebaseConfig);
const db = app.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const emailAuthProvider = firebase.auth.EmailAuthProvider;

export { auth, provider, db, emailAuthProvider };
