import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import VisionMissionSection from './components/VisionMission/VisionMissionSection';
import ProjectSlider from './components/Projects/ProjectSlider';
import WorkSection from './components/Work/WorkSection';
import PartnersSection from './components/Partners/PartnersSection';
import ProfileSection from './components/Profile/ProfileSection';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  // Smooth scroll to anchor links
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === 'A') {
        const href = (target as HTMLAnchorElement).getAttribute('href');
        if (href && href.startsWith('#')) {
          e.preventDefault();
          const targetElement = document.querySelector(href);
          if (targetElement) {
            targetElement.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }
        }
      }
    };

    document.addEventListener('click', handleAnchorClick);
    return () => document.removeEventListener('click', handleAnchorClick);
  }, []);

  // Add scroll animations
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('in-view');
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('.section-container').forEach(section => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <Router>
      <div className="app">
        <header>
          <Navbar />
        </header>
        <main>
          <Routes>
            <Route path="/" element={
              <>
                <div className="section-wrapper">
                  <section className="sticky-section">
                    <Hero />
                  </section>
                  <section className="next-section">
                    <VisionMissionSection />
                  </section>
                </div>
                <div className="section-container" id="work">
                  <WorkSection />
                </div>
                <div className="section-container" id="projects">
                  <ProjectSlider />
                </div>
                <div className="section-container" id="partners">
                  <PartnersSection />
                </div>
              </>
            } />
            <Route path="/about-us/profile" element={<ProfileSection />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
