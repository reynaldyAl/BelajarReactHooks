function Hero() {
  return (
    <section className="hero">
      <img
        src="https://api.dicebear.com/10.x/lorelei/svg?seed=Milo"
        alt="Profile"
      />
      <div className="hero-info">
        {/* Teks statis: nantinya diganti dengan props { nama, jurusan } */}
        <h1>Rey</h1>
        <p>Playlist by Mahasiswa Sistem Informasi</p>
      </div>
    </section>
  );
}

export default Hero;