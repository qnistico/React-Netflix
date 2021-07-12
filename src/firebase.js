import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBdnUj5ZfLDnpK_TQov-JLHSsZiaB9QXPE",
    authDomain: "netflix-7913c.firebaseapp.com",
    projectId: "netflix-7913c",
    storageBucket: "netflix-7913c.appspot.com",
    messagingSenderId: "21114531812",
    appId: "1:21114531812:web:aba72b48364e08867821f1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { auth };
  export default db;