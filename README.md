# SoundVibe — Modul Praktikum React Hooks

Repositori template praktikum Web Programming untuk memahami:

- **Props** sebagai cara mengirim data antar-komponen.
- **State (`useState`)** sebagai memori lokal komponen.
- **Controlled Component** pada form.
- **Lifting State Up** untuk mengelola state di komponen parent.

## ⚙️ Langkah Persiapan

Buka terminal, lalu jalankan perintah berikut secara berurutan:

1. Clone repositori:

   ```bash
   git clone https://github.com/reynaldyAl/BelajarReactHooks.git
   ```

2. Masuk ke folder aplikasi:

   ```bash
   cd BelajarReactHooks/BelajarHooks
   ```

3. Instal seluruh dependency:

   ```bash
   npm install
   ```

4. Jalankan development server:

   ```bash
   npm run dev
   ```

5. Buka URL lokal yang ditampilkan di terminal, biasanya:

   ```text
   http://localhost:5173
   ```

##  Roadmap Pengerjaan

Pengerjaan dilakukan secara bertahap dari komponen anak hingga integrasi di komponen induk:

```text
src/
├── components/
│   ├── Hero.jsx         → Props & Default Props
│   ├── TrackCard.jsx    → Local State vs Props
│   ├── TrackList.jsx    → Iterasi Array (.map) & Prop Passing
│   ├── RequestForm.jsx  → Controlled Component Form
│   ├── Navbar.jsx       → Event Handler via Props
│   └── Footer.jsx       → Receiver Lifting State Up
├── App.jsx              → Single Source of Truth & State Manager
├── App.css              → Styling & Visual State Indicator
└── main.jsx             → Root Mount
```

##  Eksperimen: Mengapa `useState`, Bukan `let`?

Sebelum mengaktifkan `useState` pada `TrackCard.jsx`, lakukan eksperimen berikut untuk memahami mengapa variabel biasa tidak memperbarui tampilan UI di React.

### 1. Uji Coba Menggunakan Variabel `let`

Ubah sementara isi `src/components/TrackCard.jsx` menjadi:

```jsx
function TrackCard({ cover, judul, artis, onPlay }) {
  let suka = 0;

  function handleSuka() {
    suka = suka + 1;
    console.log(`Jumlah suka lagu "${judul}" di memori:`, suka);
  }

  return (
    <div className="track-card">
      <img src={cover} alt={judul} />

      <div className="track-info">
        <h4>{judul}</h4>
        <p>{artis}</p>
      </div>

      <div className="track-actions">
        <button className="btn-like" onClick={handleSuka}>
          😻 Suka ({suka})
        </button>

        <button className="btn-play" onClick={onPlay}>
          ▶ Play
        </button>
      </div>
    </div>
  );
}

export default TrackCard;
```

### 2. Amati Hasilnya di Browser

1. Buka Developer Tools dengan `F12` atau **Inspect**, lalu pilih tab **Console**.
2. Klik tombol **😻 Suka (0)** beberapa kali.
3. Perhatikan hasilnya:
   - Di tab **Console**, angka `suka` bertambah (`1`, `2`, `3`, dan seterusnya).
   - Di layar browser, angka pada tombol tetap `0`.

### 3. Kesimpulan

Variabel biasa (`let`) tidak memberikan sinyal kepada React untuk melakukan **re-render**. Agar perubahan nilai memperbarui tampilan, gunakan hook `useState`:

```jsx
const [suka, setSuka] = useState(0);
```

```jsx
<button onClick={() => setSuka(suka + 1)}>
  😻 Suka ({suka})
</button>
```

##  Referensi Asset

Link berikut dapat disalin dan digunakan sebagai nilai props `src` atau data lagu pada komponen:

### Avatar

```text
https://api.dicebear.com/10.x/lorelei/svg?seed=Milo
```

Contoh penggunaan:

```jsx
<img
  src="https://api.dicebear.com/10.x/lorelei/svg?seed=Milo"
  alt="Profile"
/>
```

### Cover Track

**Midnight City — M83**

```text
https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=100
```

**Starboy — The Weeknd**

```text
https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=100
```

**Yellow — Coldplay**

```text
https://plus.unsplash.com/premium_photo-1737355356104-d1579b3eaa3a?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D
```

Contoh penggunaan pada data lagu:

```jsx
const lagu = {
  id: 1,
  cover: "SALIN_LINK_COVER_DI_SINI",
  judul: "Midnight City",
  artis: "M83",
};
```

> Salin hanya URL di dalam blok kode agar mudah digunakan pada JSX atau object data.
