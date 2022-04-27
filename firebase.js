import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'



/* note : replace this command code by your firebase app */
// const firebaseConfig = {
//   apiKey: "your firebase api key",
//   authDomain: "fb-clone-app-21425.firebaseapp.com",
//   projectId: "fb-clone-app-21425",
//   storageBucket: "fb-clone-app-21425.appspot.com",
//   messagingSenderId: "972140146664",
//   appId: "1:972140146664:web:e68f31698f8a8cafda7e5d"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)


export {db};