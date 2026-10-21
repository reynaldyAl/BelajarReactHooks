import { useState } from "react";

// #2.1 Menerima props: cover, judul, artis, dan fungsi onPlay
function TrackCard({ cover, judul, artis, onPlay }) {
  // #2.2 [STATE LOKAL] State mandiri untuk tombol like tiap kartu lagu
  const [suka, setSuka] = useState(0);

  return (
    <div className="track-card">
      {/* #2.3 Data dibaca dari Props (Read-only) */}
      <img src={cover} alt={judul} />

      <div className="track-info">
        <h4>{judul}</h4>
        <p>{artis}</p>
      </div>

      <div className="track-actions">
        {/* #2.4 Mengubah State lokal menggunakan setSuka */}
        <button className="btn-like" onClick={() => setSuka(suka + 1)}>
          😻 Suka ({suka})
        </button>

        {/* #2.5 Menjalankan fungsi onPlay yang dioper dari induk */}
        <button className="btn-play" onClick={onPlay}>
          ▶ Play
        </button>
      </div>
    </div>
  );
}

export default TrackCard;