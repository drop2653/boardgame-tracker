const PlayerStats = ({ players, setPlayers }) => {
  const winRate = (wins, losses, draws) => {
    const total = wins + losses + draws;
    if (total === 0) return '0%';
    return `${Math.round((wins / total) * 100)}%`;
  };

  const handleDeleteLastRecord = (name) => {
    const updated = players.map((p) => {
      if (p.name !== name) return p;

      const history = [...p.history];
      const last = history.pop(); // 마지막 기록 제거

      let wins = p.wins;
      let losses = p.losses;
      let draws = p.draws;

      if (last) {
        if (last.result === 'win') wins--;
        else if (last.result === 'lose') losses--;
        else if (last.result === 'draw') draws--;
      }

      return { ...p, history, wins, losses, draws };
    });

    setPlayers(updated);
  };

  return (
    <div>
      <h2>전적 보기</h2>
      {players.map(p => (
        <div key={p.name} style={{ borderBottom: '1px solid #ccc', marginBottom: '1em' }}>
          <strong>{p.name}</strong>
          <p>
            승: {p.wins}, 패: {p.losses}, 무: {p.draws}, 승률: {winRate(p.wins, p.losses, p.draws)}
          </p>
          <button onClick={() => handleDeleteLastRecord(p.name)}>마지막 기록 삭제</button>
        </div>
      ))}
    </div>
  );
};

export default PlayerStats;
