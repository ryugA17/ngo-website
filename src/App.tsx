import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <Navbar />
        </header>
        <main>
          <Hero />
          {/* Other sections will be added here */}
        </main>
      </div>
    </Router>
  );
}

export default App;
