import firebase from "firebase/app";
import "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDwHhL4FGZSO_r4qz5SNUxtxZaVaL23STM",
    authDomain: "vroom-7e518.firebaseapp.com",
    projectId: "vroom-7e518",
    storageBucket: "vroom-7e518.appspot.com",
    messagingSenderId: "681054236558",
    appId: "1:681054236558:web:8dce9525d36fdd2c543edf"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();