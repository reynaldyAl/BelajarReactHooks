// Menerima activeMenu dan onMenuClick sebagai Props
function Navbar({ activeMenu, onMenuClick }) {
  const menu = ["Home", "Request"];

  return (
    <nav className="navbar">
      <h2>SoundVibe</h2>
      <ul>
        {menu.map((item) => (
          <li
            key={item}
            className={item === activeMenu ? "active" : ""}
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