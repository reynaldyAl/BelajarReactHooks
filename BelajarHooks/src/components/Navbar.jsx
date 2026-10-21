function Navbar() {
  return (
    <nav className="navbar">
      <h2>SoundVibe</h2>
      <ul>
        {/* Menu statis: kelas active masih ditempel manual */}
        <li className="active">Home</li>
        <li>Request</li>
      </ul>
    </nav>
  );
}

export default Navbar;