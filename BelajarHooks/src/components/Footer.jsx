// Menerima dua Props dari App: lagu dan activeMenu
function Footer({ lagu, activeMenu }) {
  return (
    <footer className="player-footer">
      
      {/* BAGIAN 1: Pemutar Musik (Memakai Props lagu) */}
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

      {/* BAGIAN 2: Bukti Kuis No. 4 (Memakai Props activeMenu) */}
      <div style={{ fontSize: "0.75rem", color: "#b3b3b3", textAlign: "right" }}>
        <p>Menu aktif saat ini:</p>
        <p style={{ color: "#1db954", fontWeight: "bold", fontSize: "0.9rem" }}>
          {activeMenu}
        </p>
      </div>

    </footer>
  );
}

export default Footer;