import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import VisionMissionSection from './components/VisionMission/VisionMissionSection';
import ProjectSlider from './components/Projects/ProjectSlider';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <Navbar />
        </header>
        <main>
          <div className="section-container">
            <Hero />
          </div>
          <div className="section-container">
            <VisionMissionSection />
          </div>
          <div className="section-container">
            <ProjectSlider />
          </div>
          {/* Other sections will be added here */}
        </main>
      </div>
    </Router>
  );
}

export default App;
