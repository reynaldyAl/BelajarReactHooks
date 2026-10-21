import TrackCard from "./TrackCard.jsx";

function TrackList() {
  return (
    <div className="track-list">
      {/* Nantinya deretan ini diganti dengan daftarLagu.map(...) */}
      <TrackCard />
      <TrackCard />
      <TrackCard />
    </div>
  );
}

export default TrackList;