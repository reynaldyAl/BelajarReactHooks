function RequestForm() {
  return (
    <div className="contact-form">
      <h2 style={{ marginBottom: "15px" }}>Request Lagu</h2>

      <form>
        {/* Input biasa tanpa value atau onChange */}
        <input
          type="text"
          placeholder="Ketik judul lagu & artis..."
        />
        <button type="submit">Kirim Request</button>
      </form>
    </div>
  );
}

export default RequestForm;