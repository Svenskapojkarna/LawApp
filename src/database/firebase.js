import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: " AIzaSyBwtGH20jx9cLC0-50U_V42iBBeZ5Or3qw",
    authDomain: "lawapp-f11cc.firebaseapp.com",
    databaseURL: "https://lawapp-f11cc.firebaseio.com",
    projectId: "lawapp-f11cc",
    storageBucket: "",
    messagingSenderId: "421731918952"
});

const db = firebaseApp.firestore();

export default db;