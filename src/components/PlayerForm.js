// components/PlayerForm.js
import { useState } from 'react';

const PlayerForm = ({ players, setPlayers }) => {
  const [name, setName] = useState('');

  const handleAdd = () => {
    if (players.length >= 50) {
      alert("최대 50명까지만 등록 가능합니다.");
      return;
    }
    if (!name.trim()) return;
    if (players.find(p => p.name === name)) {
      alert("이미 등록된 이름입니다.");
      return;
    }
    setPlayers([...players, { name, wins: 0, losses: 0, draws: 0, history: [] }]);
    setName('');
  };

  return (
    <div>
      <input
        value={name}
        onChange={e => setName(e.target.value)}
        placeholder="이름 입력"
      />
      <button onClick={handleAdd}>플레이어 추가</button>
    </div>
  );
};

export default PlayerForm;
