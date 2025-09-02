import React from 'react';
import { motion } from 'framer-motion';

const SeriesFilms: React.FC = () => {
  // Placeholder data - you'll replace these with your actual film stills
  const projects = [
    {
      id: 18,
      title: "Crime Scene - The Vanishing At The Cecil Hotel",
      category: "True Crime",
      description: "An investigation into the mysterious disappearance at the historic Cecil Hotel, exploring the dark history and urban legends.",
      image: "/images/2_Show Posters/Crime Scene - The Vanishing At The Cecil Hotel.jpg",
      seriesType: "Documentary Series",
      productionCompany: "Radical/Netflix"
    },
    {
      id: 23,
      title: "Harry & Meghan",
      category: "Documentary Series",
      description: "Prince Harry and Meghan Markle share their side of the story, revealing the challenges and triumphs of their royal journey.",
      image: "/images/2_Show Posters/Harry & Meghan.jpg",
      seriesType: "Documentary Series",
      productionCompany: "Story Syndicate/Netflix"
    },
    {
      id: 19,
      title: "Crime Scene - The Times Square Killer",
      category: "True Crime",
      description: "Examines the crimes of a Times Square serial killer, revealing the investigation and impact on New York City.",
      image: "/images/2_Show Posters/Crime Scene - The Times Square Killer.jpg",
      seriesType: "Documentary Series",
      productionCompany: "Radical/Netflix"
    },
    {
      id: 21,
      title: "Superpowered - The DC Story",
      category: "Documentary Series",
      description: "A definitive look at the history and cultural impact of DC Comics, from its creation to its influence on global pop culture.",
      image: "/images/2_Show Posters/Superpowered - The DC Story.jpg",
      seriesType: "Documentary Series",
      productionCompany: "Iwerks and Co./HBO Max"
    },
    {
      id: 22,
      title: "Crime Scene - The Texas Killing Fields",
      category: "True Crime",
      description: "A chilling true-crime series examining unsolved murders in rural Texas, following investigators as they pursue justice.",
      image: "/images/2_Show Posters/Crime Scene - The Texas Killing Fields.jpg",
      seriesType: "Documentary Series",
      productionCompany: "Radical/Netflix"
    },
    {
      id: 14,
      title: "Activate The Global Citizen Movement",
      category: "Documentary Series",
      description: "A docuseries following Global Citizen activists as they work to end extreme poverty and address global challenges.",
      image: "/images/2_Show Posters/Activate The Global Citizen Movement.jpg",
      seriesType: "Documentary Series",
      productionCompany: "Radical/Nat Geo"
    },
    {
      id: 24,
      title: "Deadly Influence - The Social Media Murders",
      category: "True Crime",
      description: "Explores how social media influencers and online culture can lead to real-world violence and criminal behavior.",
      image: "/images/2_Show Posters/Deadly Influence - The Social Media Murders.jpeg",
      seriesType: "Documentary Series",
      productionCompany: "MAX/Talos Films"
    },
    {
      id: 8,
      title: "Here For Us",
      category: "Documentary Series",
      description: "A scripted drama about resilience, love, and community support during life's most challenging moments.",
      image: "/images/2_Show Posters/Here For Us.png",
      seriesType: "Scripted Feature Film",
      productionCompany: "GRUB Productions"
    },
    {
      id: 15,
      title: "Copwatch - America",
      category: "Documentary Series",
      description: "Profiles grassroots groups who film and document police activity, promoting transparency and accountability.",
      image: "/images/2_Show Posters/Copwatch - America.jpg",
      seriesType: "Documentary Series",
      productionCompany: "Critical Content/BET"
    },
    {
      id: 10,
      title: "Macy's Thanksgiving Cake Spectacular With Martha Stewart",
      category: "Special Event",
      description: "An over-the-top holiday special blending celebrity, competition, and spectacular cake creations for Thanksgiving.",
      image: "/images/2_Show Posters/Macy's Thanksgiving Cake Spectacular With Martha Stewart.jpg",
      seriesType: "Documentary Feature Film",
      productionCompany: "Tremendous Ent./Food Network"
    },
    {
      id: 26,
      title: "I Was A Teenage Felon",
      category: "Documentary Series",
      description: "True stories of people who discovered their spouse's criminal past, exploring deception, betrayal, and survival.",
      image: "/images/2_Show Posters/I Was A Teenage Felon.jpeg",
      seriesType: "Documentary Series",
      productionCompany: "OPC/VICE"
    },
    {
      id: 12,
      title: "Out Of Many, One",
      category: "Documentary Series",
      description: "Profiles immigrants to America as they pursue their dreams and contribute to the nation's diverse cultural fabric.",
      image: "/images/2_Show Posters/Out Of Many, One.jpg",
      seriesType: "Documentary Feature Film",
      productionCompany: "Radical/Netflix"
    },
    {
      id: 7,
      title: "Fish My City With Mike Iaconelli",
      category: "Reality Series",
      description: "Host Mike Iaconelli travels the world fishing in urban environments, proving that great catches can be found anywhere.",
      image: "/images/2_Show Posters/Fish My City With Mike Iaconelli.jpg",
      seriesType: "Documentary Series",
      productionCompany: "Nat Geo Studios/Nat Geo"
    },
    {
      id: 16,
      title: "Geno Hill - Frankie II",
      category: "Music Documentary",
      description: "A cinematic music video accompanying Geno Hill's track 'Frankie II', blending narrative storytelling with musical performance.",
      image: "/images/2_Show Posters/Geno Hill - Frankie II.jpg",
      seriesType: "Music Video",
      productionCompany: "GRUB Productions"
    },
    {
      id: 17,
      title: "Harry & Megan - Royal Rebels",
      category: "Documentary Series",
      description: "A documentary detailing Harry and Meghan's journey from royal life to independence, exploring their challenges and choices.",
      image: "/images/2_Show Posters/Harry & Megan - Royal Rebels.jpg",
      seriesType: "Documentary Series",
      productionCompany: "4M Studios/People TV"
    },
    {
      id: 20,
      title: "Kate Rhudy - Ships in The Night",
      category: "Music Documentary",
      description: "A moody, narrative-driven video for indie artist Kate Rhudy, exploring themes of connection and missed opportunities.",
      image: "/images/2_Show Posters/Kate Rhudy - Ships in The Night.jpg",
      seriesType: "Music Video",
      productionCompany: "GRUB Productions"
    },
    {
      id: 9,
      title: "Inside The Internet - 50 Years of Life Online",
      category: "Documentary Series",
      description: "Traces the history and cultural impact of the internet over five decades, from its creation to its current role in society.",
      image: "/images/2_Show Posters/Inside The Internet - 50 Years of Life Online.jpg",
      seriesType: "Documentary Feature Film",
      productionCompany: "Bravo Media Productions"
    },
    {
      id: 11,
      title: "U.S. Secret Service - On The Front Line",
      category: "Documentary Series",
      description: "With unprecedented backstage access, National Geographic captures the high-stakes, round-the-clock efforts of U.S. Secret Service agents as they shield the President on domestic soil and abroad.",
      image: "/images/2_Show Posters/U.S. Secret Service - On The Front Line.jpg",
      seriesType: "Documentary Feature Film",
      productionCompany: "Nat Geo Studios/Nat Geo"
    },
    {
      id: 1,
      title: "Trackers",
      category: "Documentary Series",
      description: "A docuseries following elite tracking dogs and their trainers as they attempt to reunite lost pets with their owners.",
      image: "/images/2_Show Posters/Trackers.jpg",
      seriesType: "Documentary Series",
      productionCompany: "Nat Geo Studios/Nat Geo"
    },
    {
      id: 2,
      title: "Chain of Command",
      category: "Documentary Series", 
      description: "An inside look at the U.S. military chain of command, exploring leadership, decision-making, and the human stories behind the ranks.",
      image: "/images/2_Show Posters/Chain of Command.jpg",
      seriesType: "Documentary Series",
      productionCompany: "Nat Geo Studios/Nat Geo"
    },
    {
      id: 3,
      title: "Startalk With Neil Degrasse Tyson",
      category: "Talk Show",
      description: "Neil deGrasse Tyson and guests bring science, pop culture, and comedy to live audiences in this event-format talk show.",
      image: "/images/2_Show Posters/Startalk With Neil Degrasse Tyson 2.jpg",
      seriesType: "Talk Show",
      productionCompany: "Nat Geo Studios/Nat Geo"
    },
    {
      id: 4,
      title: "Health + Happiness With The Mayo Clinic",
      category: "Health Series",
      description: "Medical experts and real patients share insights on wellness, prevention, and living healthier, happier lives.",
      image: "/images/2_Show Posters/Health + Happiness With The Mayo Clinic.jpeg",
      seriesType: "Documentary Series",
      productionCompany: "Tremendous Ent/NBC"
    },
    {
      id: 5,
      title: "My Next Guest With David Letterman",
      category: "Talk Show",
      description: "David Letterman interviews global icons and influential figures in intimate, revealing conversations about life, work, and legacy.",
      image: "/images/2_Show Posters/My Next Guest With David Letterman.jpg",
      seriesType: "Talk Show",
      productionCompany: "RadicalMedia/Netflix"
    },
    {
      id: 6,
      title: "Reality Cupcakes",
      category: "Reality Series",
      description: "A reality series centered on a family-run cupcake business, following the sweet and sometimes chaotic world of competitive baking.",
      image: "/images/2_Show Posters/Reality Cupcakes.jpg",
      seriesType: "Reality Show",
      productionCompany: "Efran Films/Food Network"
    },
    {
      id: 13,
      title: "Coffee",
      category: "Documentary Series",
      description: "A short film using coffee as a lens to explore culture, connection, and the rituals that bring people together.",
      image: "/images/2_Show Posters/Coffee.png",
      seriesType: "Short Film",
      productionCompany: "GRUB Productions"
    },
    {
      id: 25,
      title: "Sam Zalta - My Prayer",
      category: "Music Documentary",
      description: "A visual accompaniment to Sammy Zalta's spiritual journey, blending music and imagery to explore faith and personal growth.",
      image: "/images/2_Show Posters/Sam Zalta - My Prayer.jpg",
      seriesType: "Music Video",
      productionCompany: "GRUB Productions"
    }
  ];

  return (
    <section id="series-films" className="section-padding bg-gray-400">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-16 px-4"
        >
          <h2 className="heading-secondary mb-6 text-gray-800" style={{fontFamily: 'Logo, serif'}}>
            FILM & SERIES HIGHLIGHTS
          </h2>
        </motion.div>
        
        <div className="bg-gradient-to-bl from-open-set-quaternary to-open-set-tertiary rounded-lg p-8">
                      <div className="max-w-full mx-auto px-4">
              {/* Projects Grid */}
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 xl:grid-cols-6 gap-6 auto-rows-fr">
              {projects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.45, delay: index * 0.075 }}
                  viewport={{ once: true, margin: "-25px" }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-lg shadow-lg group-hover:shadow-2xl transition-all duration-500 cursor-pointer">
                    {/* Project Image */}
                    <div className={`w-full h-96 ${
                      project.title === "Trackers" || project.title === "U.S. Secret Service - On The Front Line"
                        ? ""
                        : "bg-gray-200"
                    }`}
                    style={
                      project.title === "Trackers" || project.title === "U.S. Secret Service - On The Front Line"
                        ? { backgroundColor: '#f1df37' }
                        : project.title === "Activate The Global Citizen Movement"
                        ? { transform: 'scale(1.02)' }
                        : {}
                    }>
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className={`w-full h-full ${
                          project.title === "Trackers" || project.title === "U.S. Secret Service - On The Front Line"
                            ? "object-contain"
                            : "object-cover"
                        }`}
                        style={
                          project.title === "Trackers" || project.title === "U.S. Secret Service - On The Front Line"
                            ? { transform: 'translateX(0px)' }
                            : {}
                        }
                      />
                    </div>
                    
                                                    {/* Overlay */}
                                <div className="absolute inset-0 bg-gradient-to-br from-open-set-primary to-open-set-quaternary opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                                      <div className="absolute bottom-0 left-0 right-0 p-3 text-black text-center">
                        <h3 className="text-sm font-semibold mb-1">{project.title}</h3>
                                                            {project.seriesType && (
                                      <div className="mb-2 flex justify-center">
                                        <span className="inline-block px-2 py-1 bg-open-set-primary text-black text-xs font-medium rounded">
                                          {project.seriesType}
                                        </span>
                                      </div>
                                    )}
                        {project.productionCompany && (
                          <p className="text-xs opacity-75 mb-2">
                            <span className="font-medium">{project.productionCompany}</span>
                          </p>
                        )}
                        <p className="text-xs opacity-90">{project.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SeriesFilms;
