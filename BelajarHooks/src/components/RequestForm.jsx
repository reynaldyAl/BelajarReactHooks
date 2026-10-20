import { useState } from "react";

function RequestForm() {
  // #4.1 [STATE] Menyimpan teks input dan status pengiriman form
  const [judulLagu, setJudulLagu] = useState("");
  const [terkirim, setTerkirim] = useState(false);

  // #4.2 Handler submit form
  function handleSubmit(e) {
    e.preventDefault();
    if (judulLagu.trim() === "") return;

    setTerkirim(true);
    setJudulLagu(""); // Mengosongkan form input
  }

  return (
    <div className="contact-form">
      <h2 style={{ marginBottom: "15px" }}>Request Lagu</h2>

      <form onSubmit={handleSubmit}>
        {/* #4.3 Controlled Input: value membaca state, onChange memperbarui state */}
        <input
          type="text"
          placeholder="Ketik judul lagu & artis..."
          value={judulLagu}
          onChange={(e) => setJudulLagu(e.target.value)}
        />
        <button type="submit">Kirim Request</button>
      </form>

      {/* #4.4 Notifikasi kondisional */}
      {terkirim && (
        <p style={{ color: "#1db954", marginTop: "15px" }}>
          Request berhasil dikirim!
        </p>
      )}
    </div>
  );
}

export default RequestForm;