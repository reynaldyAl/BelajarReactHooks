function Footer() {
  return (
    <footer className="player-footer">
      <div style={{ display: "flex", alignItems: "center", flex: 1 }}>
        <img
          src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100"
          alt="Midnight City"
        />
        <div className="player-info">
          <h4>Midnight City</h4>
          <p>Sedang diputar • M83</p>
        </div>
      </div>

      <div style={{ fontSize: "0.75rem", color: "#b3b3b3", textAlign: "right" }}>
        <p>Menu aktif saat ini:</p>
        <p style={{ color: "#1db954", fontWeight: "bold", fontSize: "0.9rem" }}>
          Home
        </p>
      </div>
    </footer>
  );
}

export default Footer;