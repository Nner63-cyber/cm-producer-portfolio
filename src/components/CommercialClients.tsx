import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CommercialClients: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Placeholder data - you'll replace these with your actual client logos
  const clients = [
    {
      id: 1,
      name: "SAP",
      logo: "/images/3_Client Logos/SAP.png"
    },
    {
      id: 2,
      name: "American Express",
      logo: "/images/3_Client Logos/American Express.png"
    },
    {
      id: 3,
      name: "Radical Media",
      logo: "/images/3_Client Logos/Radical Media.png"
    },
    {
      id: 4,
      name: "Tri Corporation",
      logo: "/images/3_Client Logos/Tri Corporation.jpeg"
    },
    {
      id: 5,
      name: "Sirens Media",
      logo: "/images/3_Client Logos/Sirens Media.jpeg"
    },
    {
      id: 6,
      name: "Story Syndicate",
      logo: "/images/3_Client Logos/Story Syndicate.png"
    },
    {
      id: 7,
      name: "Conde Nast",
      logo: "/images/3_Client Logos/Conde Nast.png"
    },
    {
      id: 8,
      name: "White Castle",
      logo: "/images/3_Client Logos/White Castle.svg.png"
    },
    {
      id: 9,
      name: "Crayola",
      logo: "/images/3_Client Logos/Crayola.jpg"
    },
    {
      id: 10,
      name: "Nerf",
      logo: "/images/3_Client Logos/Nerf.svg.png"
    },
    {
      id: 11,
      name: "CDW",
      logo: "/images/3_Client Logos/CDW.png"
    },
    {
      id: 12,
      name: "Ziploc",
      logo: "/images/3_Client Logos/Ziploc.png"
    },
    {
      id: 13,
      name: "Sesshin",
      logo: "/images/3_Client Logos/Sesshin.png"
    },
    {
      id: 14,
      name: "The Dinner Table",
      logo: "/images/3_Client Logos/The Dinner Table.jpeg"
    },
    {
      id: 15,
      name: "Under Armour",
      logo: "/images/3_Client Logos/Under Armour 2.png"
    }
  ];

  // Group clients into slides of 6
  const clientsPerSlide = 6;
  const totalSlides = Math.ceil(clients.length / clientsPerSlide);
  const groupedClients = [];
  
  for (let i = 0; i < clients.length; i += clientsPerSlide) {
    groupedClients.push(clients.slice(i, i + clientsPerSlide));
  }

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
    }, 3000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, totalSlides]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <section id="commercial-clients" className="section-padding bg-gray-100">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-4"
        >
                                <h2 className="heading-secondary mb-6 text-gray-800" style={{fontFamily: 'Logo, serif'}}>
                        CLIENT HIGHLIGHTS
                      </h2>
        </motion.div>
        
        <div className="bg-gradient-to-br from-open-set-tertiary to-open-set-primary rounded-lg p-8">
          <div className="container-max">
            {/* Carousel Container */}
            <div className="relative">
              {/* Carousel Slides */}
              <div className="overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6"
                  >
                    {groupedClients[currentIndex]?.map((client, index) => (
                      <motion.div
                        key={client.id}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.1 }}
                        className="group w-full h-44"
                      >
                        <div className="bg-white rounded-lg p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 w-full h-full">
                          <img 
                            src={client.logo} 
                            alt={client.name}
                            className="w-full h-32 object-contain"
                            style={
                              client.name === "Under Armour"
                                ? { transform: 'scale(1.1)' }
                                : {}
                            }
                          />
                        </div>
                      </motion.div>
                    ))}
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={prevSlide}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <button
                onClick={nextSlide}
                onMouseEnter={() => setIsAutoPlaying(false)}
                onMouseLeave={() => setIsAutoPlaying(true)}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 rounded-full p-2 shadow-lg transition-all duration-300 hover:scale-110"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Dots Indicator */}
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: totalSlides }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToSlide(index)}
                    onMouseEnter={() => setIsAutoPlaying(false)}
                    onMouseLeave={() => setIsAutoPlaying(true)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-white scale-125' 
                        : 'bg-white/50 hover:bg-white/75'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialClients;
