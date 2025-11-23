// firebaseService.js
import { doc, getDoc, setDoc } from 'firebase/firestore';
import { db } from './firebase';

export const loadPlayersFromFirestore = async (uid) => {
  const ref = doc(db, 'users', uid);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    return snap.data().players || [];
  }
  return [];
};

export const savePlayersToFirestore = async (uid, players) => {
  const ref = doc(db, 'users', uid);
  await setDoc(ref, { players });
};
