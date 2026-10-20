function Hero({ nama = "User", jurusan = "Sistem Informasi" }) {
  return (
    <section className="hero">
      <img src="https://api.dicebear.com/10.x/lorelei/svg?seed=Milo" alt="Profile" />
      <div className="hero-info">
        <h1>{nama}</h1>
        <p>Playlist by Mahasiswa {jurusan}</p>
      </div>
    </section>
  );
}

export default Hero; 