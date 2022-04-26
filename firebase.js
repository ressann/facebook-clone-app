import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'



const firebaseConfig = {
  apiKey: "AIzaSyCZC8BIgC9M0HWP88iAWxfVgQrC8GqLQ8o",
  authDomain: "lrs-facebook-clone-app.firebaseapp.com",
  projectId: "lrs-facebook-clone-app",
  storageBucket: "lrs-facebook-clone-app.appspot.com",
  messagingSenderId: "843003970476",
  appId: "1:843003970476:web:a74e166e64ce23764e3009"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)


export {db};