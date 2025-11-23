import { useState, useEffect } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
import LoginForm from './components/LoginForm';
import PlayerForm from './components/PlayerForm';
import GameRecordForm from './components/GameRecordForm';
import PlayerStats from './components/PlayerStats';
import { savePlayersToFirestore, loadPlayersFromFirestore } from './firebaseService';

function App() {
  const [user, setUser] = useState(null);
const [players, setPlayers] = useState([]);
    const saved = localStorage.getItem('players');
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
    });
    return () => unsubscribe();
  }, []);

  useEffect(() => {
  if (user) {
    loadPlayersFromFirestore(user.uid).then((data) => {
      setPlayers(data || []);
    });
  }
}, [user]);

useEffect(() => {
  if (user) {
    savePlayersToFirestore(user.uid, players);
  }
}, [players, user]);

  return (
    <div>
      <h1>보드게임 전적 기록</h1>
      <LoginForm user={user} setUser={setUser} />
{user && Array.isArray(players) && (
  <>
    <PlayerForm players={players} setPlayers={setPlayers} />
    <GameRecordForm players={players} setPlayers={setPlayers} />
    <PlayerStats players={players} />
  </>
      )}
    </div>
  );
}

export default App;
