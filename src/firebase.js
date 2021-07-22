import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyCNiRTqMHkVXde4y_o04Q6AsasrQvSapF4",
    authDomain: "evyatar-haim-weather-app.firebaseapp.com",
    projectId: "evyatar-haim-weather-app",
    storageBucket: "evyatar-haim-weather-app.appspot.com",
    messagingSenderId: "469349562615",
    appId: "1:469349562615:web:465ea4bf9ccf40eafdbbf2",
    measurementId: "G-MBS5H96YFC"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };