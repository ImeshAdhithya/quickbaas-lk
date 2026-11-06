import { Search, ShieldCheck, CheckCircle2 } from 'lucide-react';

const stepsData = [
  {
    number: '01',
    icon: Search,
    title: 'Search & Book',
    description: 'Select the service you need, choose your preferred time slot, and provide your location details.',
  },
  {
    number: '02',
    icon: ShieldCheck,
    title: 'Get Verified Baas',
    description: 'We match you with the highest-rated background-checked professional nearest to your location.',
  },
  {
    number: '03',
    icon: CheckCircle2,
    title: 'Job Done & Pay',
    description: 'Relax while the work gets done professionally. Pay securely online or cash upon completion.',
  },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="section-title-wrapper">
        <span className="sub-title">SEAMLESS PROCESS</span>
        <h2>How QuickBaas Works</h2>
        <p>Get your home repairs sorted in three simple steps without the hassle.</p>
      </div>

      <div className="steps-grid">
        {stepsData.map((step, index) => {
          const IconComp = step.icon;
          return (
            <div key={index} className="step-card">
              <div className="step-header">
                <span className="step-number">{step.number}</span>
                <div className="step-icon-wrapper">
                  <IconComp size={22} />
                </div>
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;