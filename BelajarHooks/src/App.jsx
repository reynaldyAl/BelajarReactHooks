import { useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import TrackList from "./components/TrackList.jsx";
import RequestForm from "./components/RequestForm.jsx"; // Ini ganti Contact Form
import PlayerFooter from "./components/PlayerFooter.jsx";
import "./App.css";

const laguData = [
  { id: 1, cover: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100", judul: "Midnight City", artis: "M83" },
  { id: 2, cover: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=100", judul: "Starboy", artis: "The Weeknd" },
  { id: 3, cover: "https://plus.unsplash.com/premium_photo-1737355356104-d1579b3eaa3a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D", judul: "Yellow", artis: "Coldplay" },
];

function App() {
  // LIFTING STATE UP 1: Untuk navigasi tab
  const [activeMenu, setActiveMenu] = useState("Home");
  
  
  // LIFTING STATE UP 2: Untuk lagu yang sedang diputar di Footer
  const [nowPlaying, setNowPlaying] = useState(laguData[0]); 

  return (
    <div className="app">
      <Navbar activeMenu={activeMenu} onMenuClick={setActiveMenu} />
      
      {activeMenu === "Home" && ( 
        <>
          <Hero nama= "Rey" playlistName="Top Hits Coding"  />
          {/* Kirim setNowPlaying ke TrackList agar lagu bisa diputar */}
          <TrackList daftarLagu={laguData} onPlaySong={setNowPlaying} />
        </>
      )}
      

      {activeMenu === "Request" && <RequestForm />}
      
      {/* Footer selalu menerima lagu yang sedang diputar */}
      <PlayerFooter lagu={nowPlaying} />
    </div>
  );
}
export default App;