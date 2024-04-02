import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyASwltSbKT0L7jOMgo_VYsFp1PYy4kj8j4",
  authDomain: "curso-firebase-63ed3.firebaseapp.com",
  projectId: "curso-firebase-63ed3",
  storageBucket: "curso-firebase-63ed3.appspot.com",
  messagingSenderId: "692186952688",
  appId: "1:692186952688:web:db699a682f495520d1e335",
  measurementId: "G-6MWXQ441R8",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };
