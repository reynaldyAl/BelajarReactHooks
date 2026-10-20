import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TrackList from "./components/TrackList.jsx";
import RequestForm from "./components/RequestForm.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

const laguData = [
  { id: 1, cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100", judul: "Midnight City", artis: "M83" },
  { id: 2, cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=100", judul: "Starboy", artis: "The Weeknd" },
  { id: 3, cover: "https://plus.unsplash.com/premium_photo-1737355356104-d1579b3eaa3a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", judul: "Yellow", artis: "Coldplay" },
];


function App() {
  return (
    <div className="app">
      {/* Komponen navigasi */}
      <Navbar />

      {/* Komponen hero menerima props sederhana */}
      <Hero nama="Rey" jurusan="Sistem Informasi" />

      {/* Data lagu disiapkan untuk latihan props */}
      <TrackList daftarLagu={laguData} />

      {/* Komponen form untuk latihan Controlled Component */}
      <RequestForm />

      {/* Footer belum menerima props pada tahap ini */}
      <Footer />
    </div>
  );
}

export default App;