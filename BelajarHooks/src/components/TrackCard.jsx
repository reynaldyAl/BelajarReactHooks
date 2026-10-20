import { useState } from "react";

function TrackCard({ cover, judul, artis, onPlay }) {
  // STATE LOKAL: Jumlah like milik card ini saja
  const [suka, setSuka] = useState(0);
  

  return (
    <div className="track-card">
      <img src={cover} alt={judul} />
      <div className="track-info">
        <h4>{judul}</h4>
        <p>{artis}</p>
      </div>
      <div className="track-actions">
        {/* Mengubah state lokal */}
        <button className="btn-like" onClick={() => setSuka(suka + 1)}>
          😻 Suka ({suka})
        </button>
        
        {/* Memanggil fungsi dari App (Lifting State Up) */}
        <button className="btn-play" onClick={onPlay}>
          ▶ Play
        </button>
      </div>
    </div>
  );
}
export default TrackCard;

// function TrackCard({ cover, judul, artis, onPlay }) {
//   let suka = 0;

//   function setSuka() {
//     suka = suka + 1;
//     console.log(`Jumlah suka ${judul}:`, suka);
//   }

//   return (
//     <div className="track-card">
//       <img src={cover} alt={judul} />

//       <div className="track-info">
//         <h4>{judul}</h4>
//         <p>{artis}</p>
//       </div>

//       <div className="track-actions">
//         <button className="btn-like" onClick={setSuka}>
//           😻 Suka ({suka})
//         </button>

//         <button className="btn-play" onClick={onPlay}>
//           ▶ Play
//         </button>
//       </div>
//     </div>
//   );
// }

// export default TrackCard;