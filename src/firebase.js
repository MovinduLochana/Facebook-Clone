import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAVA0bofz1hb0jQ6LogSZrZ7ihItc1dmFQ",
  authDomain: "facebook-clone-3b432.firebaseapp.com",
  projectId: "facebook-clone-3b432",
  storageBucket: "facebook-clone-3b432.appspot.com",
  messagingSenderId: "728888191922",
  appId: "1:728888191922:web:841df1dad80a4f736612ab",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
