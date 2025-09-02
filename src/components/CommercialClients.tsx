import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CommercialClients: React.FC = () => {
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
      logo: "/images/3_Client Logos/Conde Nast-2.png"
    },
    {
      id: 8,
      name: "White Castle",
      logo: "/images/3_Client Logos/White Castle.svg.png"
    },
    {
      id: 9,
      name: "Crayola",
      logo: "/images/3_Client Logos/Crayola-2.jpg"
    },
    {
      id: 10,
      name: "Nerf",
      logo: "/images/3_Client Logos/Nerf.svg.png"
    },
    {
      id: 11,
      name: "CDW",
      logo: "/images/3_Client Logos/CDW-2.png.jpeg"
    },
    {
      id: 12,
      name: "Ziploc",
      logo: "/images/3_Client Logos/Ziploc-2.jpg"
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

  // Split clients into two groups
  const firstHalf = clients.slice(0, Math.ceil(clients.length / 2));
  const secondHalf = clients.slice(Math.ceil(clients.length / 2));
  
  // Create duplicated clients for seamless loop
  const duplicatedFirstHalf = [...firstHalf, ...firstHalf, ...firstHalf];
  const duplicatedSecondHalf = [...secondHalf, ...secondHalf, ...secondHalf];

  return (
    <section id="commercial-clients" className="section-padding bg-gray-200">
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
        
        <div className="bg-gradient-to-br from-open-set-tertiary to-open-set-secondary rounded-lg p-8">
          <div className="container-max">
            {/* First Carousel - Right to Left */}
            <div className="relative overflow-hidden mb-6">
              <motion.div
                className="flex gap-6"
                animate={{
                  x: [0, -firstHalf.length * 200] // Move by one full set of clients
                }}
                transition={{
                  duration: firstHalf.length * 4, // 4 seconds per client (slower)
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ width: `${duplicatedFirstHalf.length * 200}px` }}
              >
                {duplicatedFirstHalf.map((client, index) => (
                  <motion.div
                    key={`first-${client.id}-${index}`}
                    className="flex-shrink-0 w-44 h-44"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                  >
                    <div className="bg-gray-200 rounded-lg p-6 shadow-lg w-full h-full">
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
            </div>
            
            {/* Second Carousel - Left to Right */}
            <div className="relative overflow-hidden">
              <motion.div
                className="flex gap-6"
                animate={{
                  x: [-secondHalf.length * 200, 0] // Move from left to right
                }}
                transition={{
                  duration: secondHalf.length * 4, // 4 seconds per client (slower)
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{ width: `${duplicatedSecondHalf.length * 200}px` }}
              >
                {duplicatedSecondHalf.map((client, index) => (
                  <motion.div
                    key={`second-${client.id}-${index}`}
                    className="flex-shrink-0 w-44 h-44"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: index * 0.05 }}
                  >
                    <div className="bg-gray-200 rounded-lg p-6 shadow-lg w-full h-full">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommercialClients;
