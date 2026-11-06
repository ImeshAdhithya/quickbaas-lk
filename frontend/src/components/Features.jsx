import { ShieldCheck, Tag, Headphones } from 'lucide-react';

const featuresData = [
  {
    icon: ShieldCheck,
    title: 'Police Verified Pros',
    description: 'Every technician undergoes rigorous background checks and identity verification for your safety.',
  },
  {
    icon: Tag,
    title: 'Upfront Pricing',
    description: 'No hidden charges or surprise fees. Know exact rates before you confirm any booking.',
  },
  {
    icon: Headphones,
    title: 'Dedicated Support',
    description: 'Our customer care team is available across Sinhala, Tamil, and English to assist you anytime.',
  },
];

const Features = () => {
  return (
    <section className="features-banner" id="verified">
      <div className="features-grid">
        {featuresData.map((item, index) => {
          const IconComp = item.icon;
          return (
            <div key={index} className="feature-item">
              <div className="feature-icon-wrapper">
                <IconComp size={20} />
              </div>
              <div className="feature-content">
                <h4>{item.title}</h4>
                <p>{item.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Features;