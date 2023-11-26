// firebase.js
import {initializeApp ,getApps,firebase} from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";

import firebaseConfig from './firebaseConfig';

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const fireStore = getFirestore(firebaseApp);

export { auth,fireStore, onAuthStateChanged };
