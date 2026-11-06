import { Wrench, Zap, Snowflake, Hammer, Paintbrush, Home, Sparkles, LayoutGrid } from 'lucide-react';

const categoriesData = [
  { icon: Wrench, title: 'Plumber', desc: 'Leaks, pipes & fittings' },
  { icon: Zap, title: 'Electrician', desc: 'Wiring, lights & faults' },
  { icon: Snowflake, title: 'AC Repair', desc: 'Service & gas refilling' },
  { icon: Hammer, title: 'Carpenter', desc: 'Furniture & doors' },
  { icon: Paintbrush, title: 'Painter', desc: 'Interior & exterior' },
  { icon: Home, title: 'Mason', desc: 'Tiling & construction' },
  { icon: Sparkles, title: 'Cleaning', desc: 'Deep home cleaning' },
  { icon: LayoutGrid, title: 'More Services', desc: 'CCTV, Appliances & more' },
];

const Categories = () => {
  return (
    <section className="categories-section" id="services">
      <div className="section-header">
        <div>
          <span className="sub-title">CATEGORIES</span>
          <h2>Explore Professional Services</h2>
        </div>
        <a href="#all" className="view-all">View all categories &gt;</a>
      </div>

      <div className="categories-grid">
        {categoriesData.map((cat, index) => {
          const IconComponent = cat.icon;
          return (
            <div key={index} className="category-card">
              <div className="icon-wrapper">
                <IconComponent size={24} />
              </div>
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Categories;