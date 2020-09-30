import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBgI5UAvfe40QeS7si9AG2xruelSxEBn4c",
    authDomain: "instagram-clone-6be58.firebaseapp.com",
    databaseURL: "https://instagram-clone-6be58.firebaseio.com",
    projectId: "instagram-clone-6be58",
    storageBucket: "instagram-clone-6be58.appspot.com",
    messagingSenderId: "519858253229",
    appId: "1:519858253229:web:93e8182ed993bfd1f3c524",
    measurementId: "G-M74CV79LEL"
});

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const storage = firebaseApp.storage();

export { db, auth, storage };