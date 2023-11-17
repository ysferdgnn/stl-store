// firebase.js
import {initializeApp ,getApps,firebase} from 'firebase/app';
import { getAuth, onAuthStateChanged } from 'firebase/auth';

import firebaseConfig from './firebaseConfig';

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);


export { auth, onAuthStateChanged };
