import { useState } from "react";

function RequestForm() {
  const [judulLagu, setJudulLagu] = useState("");
  const [terkirim, setTerkirim] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setTerkirim(true);
    setJudulLagu(""); // Reset input setelah kirim
  }

  return (
    <div className="contact-form">
      <h2 style={{ marginBottom: "15px" }}>Request Lagu</h2>
      <form onSubmit={handleSubmit}>
        <input 
          type="text" 
          placeholder="Ketik judul lagu & artis..." 
          value={judulLagu}
          onChange={(e) => setJudulLagu(e.target.value)}
        />
        <button type="submit">Kirim Request</button>
      </form>

      {terkirim && <p style={{ color: "#1db954", marginTop: "15px" }}>Request berhasil dikirim!</p>}
    </div>
  );
}
export default RequestForm;