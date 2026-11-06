import { User } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="navbar-container">
      <div className="logo">
        <h2>QuickBaas<span>.lk</span></h2>
      </div>

      <nav className="nav-links">
        <a href="#services">Explore Services</a>
        <a href="#how-it-works">How it Works</a>
        <a href="#verified">Verified Pros</a>
      </nav>

      <div className="nav-actions">
        <button className="lang-btn">EN</button>
        <button className="login-btn">Log in</button>
        <button className="join-btn">
          Join as technician <User size={16} />
        </button>
      </div>
    </header>
  );
};

export default Navbar;