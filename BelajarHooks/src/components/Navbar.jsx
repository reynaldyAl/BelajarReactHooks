// #5.1 Menerima state activeMenu dan fungsi setter onMenuClick dari induk
function Navbar({ activeMenu, onMenuClick }) {
  const menu = ["Home", "Request"];

  return (
    <nav className="navbar">
      <h2>SoundVibe</h2>
      <ul>
        {menu.map((item) => (
          <li
            key={item}
            // #5.2 Penanda menu aktif berasal dari props
            className={item === activeMenu ? "active" : ""}
            // #5.3 Memanggil fungsi induk untuk mengganti state
            onClick={() => onMenuClick(item)}
          >
            {item}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;