/* ==========================================================================
   KOMPONEN #6: src/components/Footer.jsx
   Peran: Komponen Penerima Aliran Lifting State Up dari App.jsx (Kuis No. 4)
   ========================================================================== */

// #6.1 Menerima 2 data PROPS dari App.jsx: 'lagu' dan 'activeMenu'
function Footer({ lagu, activeMenu }) {
  return (
    <footer className="player-footer">
      
      {/* #6.2 [PROPS 1: lagu]
          Menampilkan lagu yang dipilih pengguna di TrackCard.
          Data mengalir dari: TrackCard -> (onPlay) -> App.jsx -> (lagu) -> Footer */}
      <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
        {lagu ? (
          <>
            <img src={lagu.cover} alt={lagu.judul} />
            <div className="player-info">
              <h4>{lagu.judul}</h4>
              <p>Sedang diputar • {lagu.artis}</p>
            </div>
          </>
        ) : (
          <div className="player-info">
            <p style={{ color: "#b3b3b3" }}>Pilih lagu untuk memutar</p>
          </div>
        )}
      </div>

      {/* #6.3 [PROPS 2: activeMenu]
          Menampilkan menu navigasi yang sedang aktif di Navbar.
          Ini adalah pembuktian langsung materi Bab 7.10 dan Kuis No. 4 */}
      <div style={{ fontSize: "0.75rem", color: "#b3b3b3", textAlign: "right" }}>
        <p>Menu aktif saat ini:</p>
        <p style={{ color: "#1db954", fontWeight: "bold", fontSize: "0.9rem" }}>
          {activeMenu}
        </p>
      </div>

    </footer>
  );
}

// #6.4 Export komponen agar siap dipanggil pada tahap #7 (src/App.jsx)
export default Footer;