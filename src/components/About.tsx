import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-gray-300">
      <div className="w-full">

        
        <div className="bg-gradient-to-br from-open-set-primary to-open-set-quaternary rounded-lg p-8">
          <div className="container-max">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
                                        <h1 className="heading-primary mb-2 text-black" style={{fontFamily: 'Logo, serif'}}>
                            CONNOR MCCANN
                          </h1>
                          <h2 className="heading-secondary mb-6 text-black" style={{fontFamily: 'Logo, serif'}}>
                            END-TO-END PRODUCER
                          </h2>
            </motion.div>

            <div className="flex lg:flex-row flex-col items-center lg:items-start justify-center">
              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex justify-center lg:justify-start mb-8 lg:mb-0"
              >
                <div className="w-80 h-96 bg-gray-200 rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="/images/1_Profile Photos/Connor-1.jpg" 
                    alt="Film Producer"
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              {/* About Text */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="lg:ml-6 space-y-4 max-w-md"
              >
                
                <div className="space-y-4 text-black">
                  <p>
                    Connor is a creative producer and media strategist with a proven track record of delivering compelling content across documentary, scripted, branded, and educational formats. His expertise spans end-to-end production, from development and casting to directing, budgeting, and post.
                  </p>
                  <p>
                    He is adept at managing cross-functional teams, crafting narratives from complex research, and executing high-profile projects for clients like Netflix, HBO, and National Geographic. His skills include project development, visual storytelling, and building AI-enhanced workflows.
                  </p>
                  <p>
                    He is passionate about blending creativity with emerging technology to drive innovation and connect with diverse audiences across platforms.
                  </p>
                </div>
                
                <div className="pt-6">
                  <h3 className="text-xl font-semibold text-black mb-4" style={{fontFamily: 'Logo, serif'}}>EDUCATION</h3>
                  <div className="space-y-3">
                    <div>
                      <p className="font-medium text-black">Catholic University of America - Washington, DC</p>
                      <p className="text-black/80">Bachelor's Degree in Media and Communication Studies</p>
                      <p className="text-black/80">Certificate Degree in Digital Design</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
