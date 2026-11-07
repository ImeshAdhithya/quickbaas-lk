import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Categories from '../components/Categories';
import HowItWorks from '../components/HowItWorks';
import Features from '../components/Features';
import Footer from '../components/Footer';

const Home = ({ onLoginClick }) => {
  return (
    <div className="home-page">
      <Navbar onLoginClick={onLoginClick} />
      <main>
        <Hero />
        <Categories />
        <HowItWorks />
        <Features />
      </main>
      <Footer />
    </div>
  );
};

export default Home;