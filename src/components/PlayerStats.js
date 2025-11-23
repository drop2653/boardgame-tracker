// components/PlayerStats.js
const PlayerStats = ({ players }) => {
const winRate = (wins, losses, draws) => {
const total = wins + losses + draws;
if (total === 0) return '0%';
return `${Math.round((wins / total) * 100)}%`;
};


return (
<div>
<h2>전적 보기</h2>
{players.map(p => (
<div key={p.name}>
<strong>{p.name}</strong>
<p>
승: {p.wins}, 패: {p.losses}, 무: {p.draws}, 승률: {winRate(p.wins, p.losses, p.draws)}
</p>
</div>
))}
</div>
);
};


export default PlayerStats;
