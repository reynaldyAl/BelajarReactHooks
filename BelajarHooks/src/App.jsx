// src/App.jsx (Versi Statis / Starter Code)

import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TrackList from "./components/TrackList.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

// CATATAN: RequestForm belum diimpor di awal karena halaman form 
// baru akan dimunculkan saat materi navigasi/conditional rendering.

// const laguData = [
//   { id: 1, cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100", judul: "Midnight City", artis: "M83" },
//   { id: 2, cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=100", judul: "Starboy", artis: "The Weeknd" },
//   { id: 3, cover: "https://plus.unsplash.com/premium_photo-1737355356104-d1579b3eaa3a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", judul: "Yellow", artis: "Coldplay" },
// ];

function App() {
  return (
    <div className="app">
      {/* 1. Navbar statis tanpa props menu & event click */}
      <Navbar />

      {/* 2. Hero statis menampilkan nama default */}
      <Hero />

      {/* 3. TrackList statis menampilkan kartu dummy */}
      <TrackList />

      {/* 4. Footer statis menampilkan player default */}
      <Footer />
    </div>
  );
}

export default App;