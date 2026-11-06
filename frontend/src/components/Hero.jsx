import { Search, MapPin, ShieldCheck, Tag, ThumbsUp } from 'lucide-react';

const Hero = () => {
  return (
    <section className="hero-container">
      <div className="badge">
        <span>• Sri Lanka's #1 Verified Home Services Platform</span>
      </div>

      <h1 className="hero-title">
        Expert technicians at your doorstep, <span>on demand.</span>
      </h1>

      <p className="hero-subtitle">
        Connect with background-checked plumbers, electricians, carpenters, and professional cleaners across Sri Lanka instantly.
      </p>

      {/* Search Bar Container */}
      <div className="search-box">
        <div className="search-input-group">
          <Search size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="What service do you need? (e.g. Plumber)" 
          />
        </div>

        <div className="search-input-group">
          <MapPin size={18} className="search-icon" />
          <input 
            type="text" 
            placeholder="Location (e.g. Colombo)" 
          />
          <button className="near-me-btn">Near me</button>
        </div>

        <button className="find-baas-btn">
          Find Baas &rarr;
        </button>
      </div>

      {/* Trust Badges */}
      <div className="trust-badges">
        <span><ShieldCheck size={16} /> 100% Background Verified</span>
        <span><Tag size={16} /> Fixed Transparent Pricing</span>
        <span><ThumbsUp size={16} /> Satisfaction Guaranteed</span>
      </div>
    </section>
  );
};

export default Hero;