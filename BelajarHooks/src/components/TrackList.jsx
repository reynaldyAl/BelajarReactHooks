import TrackCard from "./TrackCard.jsx";

function TrackList({ daftarLagu, onPlaySong }) {
  return (
    <div className="track-list">
      {daftarLagu.map((lagu) => (
        <TrackCard 
          key={lagu.id}
          cover={lagu.cover}
          judul={lagu.judul}
          artis={lagu.artis}
          // Saat diplay, kirim satu objek lagu ke fungsi App
          onPlay={() => onPlaySong(lagu)} 
        />
      ))}
    </div>
  );
}
export default TrackList;