// pages/index.js
import Navbar from './components/Navbar';
import ImageSection from './components/ImageSection';
import AboutSection from './components/AboutSection';
import CreatorsSection from './components/CreatorsSection';
import Footer from './components/Footer';

export default function Home() {
  return (
    <div>
      <Navbar />
      <ImageSection />
      <AboutSection />
      <CreatorsSection />
      <Footer />
    </div>
  );
}
