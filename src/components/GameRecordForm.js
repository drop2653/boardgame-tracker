// components/GameRecordForm.js
import { useState } from 'react';
import { GAME_LIST } from '../data/games';

const GameRecordForm = ({ players, setPlayers }) => {
  const [playerName, setPlayerName] = useState('');
  const [game, setGame] = useState(GAME_LIST[0]);
  const [result, setResult] = useState('win');

  const handleRecord = () => {
    if (!playerName || !game || !result) return;

    const updated = players.map(p => {
      if (p.name !== playerName) return p;

      const newHistory = [...p.history, {
        game,
        result,
        date: new Date().toISOString()
      }];

      let wins = p.wins;
      let losses = p.losses;
      let draws = p.draws;

      if (result === 'win') wins++;
      else if (result === 'lose') losses++;
      else draws++;

      return { ...p, history: newHistory, wins, losses, draws };
    });

    setPlayers(updated);
  };

  return (
    <div>
      <select onChange={e => setPlayerName(e.target.value)} value={playerName}>
        <option value="">플레이어 선택</option>
        {players.map(p => <option key={p.name} value={p.name}>{p.name}</option>)}
      </select>

      <select onChange={e => setGame(e.target.value)} value={game}>
        {GAME_LIST.map(g => <option key={g} value={g}>{g}</option>)}
      </select>

      <select onChange={e => setResult(e.target.value)} value={result}>
        <option value="win">승</option>
        <option value="lose">패</option>
        <option value="draw">무</option>
      </select>

      <button onClick={handleRecord}>기록 저장</button>
    </div>
  );
};

export default GameRecordForm;
