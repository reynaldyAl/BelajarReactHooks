// #3.1 Mengimpor TrackCard yang sudah dibuat di langkah #2
import TrackCard from "./TrackCard.jsx";

// #3.2 Menerima props daftarLagu (array) dan onPlaySong (fungsi)
function TrackList({ daftarLagu, onPlaySong }) {
  return (
    <div className="track-list">
      {/* #3.3 Mengulang data array menjadi komponen TrackCard */}
      {daftarLagu.map((lagu) => (
        <TrackCard
          key={lagu.id}
          cover={lagu.cover}
          judul={lagu.judul}
          artis={lagu.artis}
          // #3.4 Meneruskan lagu yang dipilih ke fungsi induk
          onPlay={() => onPlaySong(lagu)}
        />
      ))}
    </div>
  );
}

export default TrackList;