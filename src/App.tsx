import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { 
  Navbar,
  Hero,
  VisionMissionSection,
  ProjectSlider,
  WorkSection,
  PartnersSection,
  Footer,
  ProfileSection,
  SecretaryMessageSection,
  ApproachSection,
  PartnersInGrowthSection,
  GeographicalOutreachSection,
  OngoingActivitiesSection,
  LegalDocumentSection,
  BoardMemberSection,
  ManagementTeamSection,
  TeamProfilesSection
} from './components';
import TestDropdown from './components/TestDropdown';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
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
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <VisionMissionSection />
              <ProjectSlider />
              <WorkSection />
              <PartnersSection />
            </>
          } />
          
          {/* About Us Routes */}
          <Route path="/about-us/profile" element={<ProfileSection />} />
          <Route path="/about-us/secretary-message" element={<SecretaryMessageSection />} />
          <Route path="/about-us/approach" element={<ApproachSection />} />
          <Route path="/about-us/partners" element={<PartnersInGrowthSection />} />
          <Route path="/about-us/geographical-outreach" element={<GeographicalOutreachSection />} />
          <Route path="/about-us/ongoing-activities" element={<OngoingActivitiesSection />} />
          <Route path="/about-us/legal-documents" element={<LegalDocumentSection />} />
          
          {/* Human Resources Routes */}
          <Route path="/human-resources/board-members" element={<BoardMemberSection />} />
          <Route path="/human-resources/management-team" element={<ManagementTeamSection />} />
          <Route path="/human-resources/team-profiles" element={<TeamProfilesSection />} />
          
          {/* Contact Route */}
          <Route path="/contact" element={<Contact />} />
          
          {/* Gallery Route */}
          <Route path="/gallery" element={<Gallery />} />
          
          {/* Test Route */}
          <Route path="/test-dropdown" element={<TestDropdown />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
