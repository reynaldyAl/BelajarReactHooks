function TrackCard() {
  return (
    <div className="track-card">
      {/* Gambar dan teks statis: nantinya diganti dari Props */}
      <img
        src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100"
        alt="Midnight City"
      />

      <div className="track-info">
        <h4>Midnight City</h4>
        <p>M83</p>
      </div>

      <div className="track-actions">
        {/* Angka statis: nantinya dihubungkan ke useState */}
        <button className="btn-like">
          😻 Suka (0)
        </button>

        {/* Tombol belum memiliki aksi */}
        <button className="btn-play">
          ▶ Play
        </button>
      </div>
    </div>
  );
}

export default TrackCard;