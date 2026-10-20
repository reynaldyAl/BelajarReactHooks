// Menerima data lagu yang sedang diputar dari App
function PlayerFooter({ lagu }) {
  if (!lagu) return null; // Jika tidak ada lagu, sembunyikan

  return (
    <div className="player-footer">
      <img src={lagu.cover} alt="Cover" />
      <div className="player-info">
        <h4>{lagu.judul}</h4>
        <p>Sedang diputar • {lagu.artis}</p>
      </div>
    </div>
  );
}
export default PlayerFooter;