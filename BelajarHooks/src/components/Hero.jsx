// #1.1 Menerima props nama dan jurusan melalui destructuring
// jurusan memiliki nilai default "Sistem Informasi" (Membuktikan Kuis No. 3)
function Hero({ nama = "User", jurusan = "Sistem Informasi" }) {
  return (
    <section className="hero">
      <img
        src="https://api.dicebear.com/10.x/lorelei/svg?seed=Milo"
        alt="Profile"
      />
      <div className="hero-info">
        {/* #1.2 Menampilkan isi data yang diterima dari Props */}
        <h1>{nama}</h1>
        <p>Playlist by Mahasiswa {jurusan}</p>
      </div>
    </section>
  );
}

// #1.3 Export agar siap dipanggil oleh App.jsx
export default Hero;