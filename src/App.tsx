import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import VisionMissionSection from './components/VisionMission/VisionMissionSection';
import ProjectSlider from './components/Projects/ProjectSlider';
import WorkSection from './components/Work/WorkSection';
import PartnersSection from './components/Partners/PartnersSection';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <Navbar />
        </header>
        <main>
          <div className="section-wrapper">
            <section className="sticky-section">
              <Hero />
            </section>
            <section className="next-section">
              <VisionMissionSection />
            </section>
          </div>
          <div className="section-container">
            <WorkSection />
          </div>
          <div className="section-container">
            <ProjectSlider />
          </div>
          <div className="section-container">
            <PartnersSection />
          </div>
          {/* Other sections will be added here */}
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
