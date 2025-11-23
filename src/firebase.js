import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBOs_Dh8XsMGY7yoOfMVJm_XMPMTiutggg",
  authDomain: "boardgame-tracker-85f0d.firebaseapp.com",
  projectId: "boardgame-tracker-85f0d",
  storageBucket: "boardgame-tracker-85f0d.firebasestorage.app",
  messagingSenderId: "491120692994",
  appId: "1:491120692994:web:e2f74505052192d8283c1b"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


export { auth, db };
