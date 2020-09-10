import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyDS14edfVBhCRV-_qSU-C5JJ2mg2OJ3CcY",
  authDomain: "facebook-clone-b151d.firebaseapp.com",
  databaseURL: "https://facebook-clone-b151d.firebaseio.com",
  projectId: "facebook-clone-b151d",
  storageBucket: "facebook-clone-b151d.appspot.com",
  messagingSenderId: "55373935739",
  appId: "1:55373935739:web:1c26ad6b87c7f098421ede",
  measurementId: "G-9KP6K32WQ5",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
