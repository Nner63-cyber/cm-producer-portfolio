import React, { useState } from 'react';
import { Link } from 'react-scroll';
import About from './components/About';
import SeriesFilms from './components/SeriesFilms';
import CommercialClients from './components/CommercialClients';
import SkillsServices from './components/SkillsServices';
import Contact from './components/Contact';

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-open-set-primary shadow-lg">
        <nav className="container-max px-4 py-4">
                                  <div className="flex items-center justify-between w-full">
              <div className="flex items-center space-x-4">
                        <img 
          src="/images/CM Logo.png" 
          alt="CM Logo" 
          className="w-16 h-16 object-contain mt-1"
        />
                <div className="text-2xl font-bold text-black whitespace-nowrap" style={{fontFamily: 'Logo, serif'}}>
                  Connor McCann
                </div>
              </div>
              
              <div className="hidden lg:flex space-x-6 items-center">
                <Link to="about" smooth={true} duration={500} offset={-100} className="text-black hover:text-black/80 transition-colors cursor-pointer font-medium whitespace-nowrap" style={{fontFamily: 'Logo, serif'}}>
                  ABOUT
                </Link>
                <Link to="series-films" smooth={true} duration={500} className="text-black hover:text-black/80 transition-colors cursor-pointer font-medium whitespace-nowrap" style={{fontFamily: 'Logo, serif'}}>
                  FILMS & SERIES
                </Link>
                <Link to="commercial-clients" smooth={true} duration={500} className="text-black hover:text-black/80 transition-colors cursor-pointer font-medium whitespace-nowrap" style={{fontFamily: 'Logo, serif'}}>
                  CLIENTS
                </Link>
                <Link to="skills-services" smooth={true} duration={500} className="text-black hover:text-black/80 transition-colors cursor-pointer font-medium whitespace-nowrap" style={{fontFamily: 'Logo, serif'}}>
                  SKILLS & SERVICES
                </Link>
                <Link to="contact" smooth={true} duration={500} className="text-black hover:text-black/80 transition-colors cursor-pointer font-medium" style={{fontFamily: 'Logo, serif'}}>
                  CONTACT
                </Link>
              </div>
              
              <div className="hidden lg:flex flex-col text-sm text-black/80 font-bold" style={{fontFamily: 'Logo, serif'}}>
                <span>203-610-1017</span>
                <span>connormccann63@gmail.com</span>
              </div>
            
            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-black hover:text-black/80"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
          
          {/* Mobile Menu Dropdown */}
          {isMobileMenuOpen && (
            <div className="lg:hidden bg-open-set-primary border-t border-black/20">
              <div className="px-4 py-4 space-y-4">
                <Link 
                  to="about" 
                  smooth={true} 
                  duration={500} 
                  offset={-100}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-black hover:text-black/80 transition-colors cursor-pointer font-medium" 
                  style={{fontFamily: 'Logo, serif'}}
                >
                  ABOUT
                </Link>
                <Link 
                  to="series-films" 
                  smooth={true} 
                  duration={500}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-black hover:text-black/80 transition-colors cursor-pointer font-medium" 
                  style={{fontFamily: 'Logo, serif'}}
                >
                  FILMS & SERIES
                </Link>
                <Link 
                  to="commercial-clients" 
                  smooth={true} 
                  duration={500}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-black hover:text-black/80 transition-colors cursor-pointer font-medium" 
                  style={{fontFamily: 'Logo, serif'}}
                >
                  CLIENTS
                </Link>
                <Link 
                  to="skills-services" 
                  smooth={true} 
                  duration={500}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-black hover:text-black/80 transition-colors cursor-pointer font-medium" 
                  style={{fontFamily: 'Logo, serif'}}
                >
                  SKILLS & SERVICES
                </Link>
                <Link 
                  to="contact" 
                  smooth={true} 
                  duration={500}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-black hover:text-black/80 transition-colors cursor-pointer font-medium" 
                  style={{fontFamily: 'Logo, serif'}}
                >
                  CONTACT
                </Link>
                <div className="pt-4 border-t border-black/20">
                  <div className="text-sm text-black/80 font-bold" style={{fontFamily: 'Logo, serif'}}>
                    <div>203-610-1017</div>
                    <div>connormccann63@gmail.com</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </nav>
      </header>

      {/* Main Content */}
      <main className="pt-24 bg-gray-400">
        <About />
        <SeriesFilms />
        <CommercialClients />
        <SkillsServices />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="bg-open-set-black text-white py-8">
        <div className="container-max px-4 text-center">
                      <p>&copy; 2025 McCann Productions LLC. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
