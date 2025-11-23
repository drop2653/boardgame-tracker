import { db } from './firebase';
import { doc, setDoc, getDoc } from 'firebase/firestore';

export const savePlayersToFirestore = async (uid, players) => {
  const ref = doc(db, 'users', uid);
  await setDoc(ref, { players });
};

export const loadPlayersFromFirestore = async (uid) => {
  const ref = doc(db, 'users', uid);
  const snap = await getDoc(ref);
  if (snap.exists()) {
    return snap.data().players;
  }
  return [];
};
