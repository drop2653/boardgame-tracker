import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "여기에 복사한 키",
  authDomain: "프로젝트.firebaseapp.com",
  projectId: "프로젝트 ID",
  storageBucket: "프로젝트.appspot.com",
  messagingSenderId: "숫자",
  appId: "앱 ID"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };