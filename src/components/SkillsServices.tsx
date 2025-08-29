import React from 'react';
import { motion } from 'framer-motion';

const SkillsServices: React.FC = () => {
  const services = [
    {
      id: 'development',
      title: 'Development',
      color: 'bg-open-set-primary',
      icon: (
        <img 
          src="/images/Development.png" 
          alt="Development" 
          className="w-20 h-20 mx-auto mb-4 opacity-90 object-contain"
          style={{ transform: 'scale(1.4)' }}
        />
      ),
      shortDescription: 'Project inception and creative development',
      longDescription: 'From concept to script, we develop compelling stories that resonate with audiences and attract the right talent and financing.',
      skills: [
        'In-depth research',
        'Story development',
        'Pitch document building',
        'Treatment & script writing',
        'Documentary participant booking',
        'Sizzle reel creation',
        'Project pitching'
      ]
    },
    {
      id: 'pre-production',
      title: 'Pre-Production',
      color: 'bg-open-set-secondary',
      icon: (
        <img 
          src="/images/Pre-Production.png" 
          alt="Pre-Production" 
          className="w-20 h-20 mx-auto mb-4 opacity-90 object-contain"
          style={{ transform: 'scale(1.4)' }}
        />
      ),
      shortDescription: 'Planning and preparation phase',
      longDescription: 'Comprehensive pre-production planning ensures smooth execution and creative excellence throughout the production process.',
      skills: [
        'Budget planning & management',
        'Shot-listing & shoot planning',
        'Crew hiring',
        'Casting',
        'Location scouting & permits',
        'Equipment booking & coordination',
        'Shoot scheduling'
      ]
    },
    {
      id: 'production',
      title: 'Production',
      color: 'bg-open-set-tertiary',
      icon: (
        <img 
          src="/images/Production.png" 
          alt="Production" 
          className="w-20 h-20 mx-auto mb-4 opacity-90 object-contain"
          style={{ transform: 'scale(1.4)' }}
        />
      ),
      shortDescription: 'On-set execution and management',
      longDescription: 'Expert production management ensures your vision is captured with the highest quality while maintaining creative integrity.',
      skills: [
        'On set shoot schedule management – Assistant Directing',
        'Scripted, recre, & vérité Directing',
        'Conducting Interviews',
        'On-set logistics coordination',
        'Have held roles as a DIT & AC',
        'Managing cast & crew',
        'Eagle Scout'
      ]
    },
    {
      id: 'post-production',
      title: 'Post-Production',
      color: 'bg-yellow-500',
      icon: (
        <img 
          src="/images/film-strip.png" 
          alt="Film Strip" 
          className="w-20 h-20 mx-auto mb-4 opacity-90 object-contain"
        />
      ),
      shortDescription: 'Editing, finishing and delivery',
      longDescription: 'Transform raw footage into compelling content with expert editing, sound design, and final delivery preparation.',
      skills: [
        'Story producing',
        'Proficient in Premiere Pro, Avid Media Composer, Illustrator, Photoshop, InDesign, and ShotPut Pro',
        'Experienced with Python and VBA Coding Languages as well as Cursor coding assistant',
        'Post schedule building & supervision',
        'Incorporating AI tools to enhance productivity',
        'Fact-checking & research',
        'Archival research, organization, & licensing'
      ]
    }
  ];

  return (
    <section id="skills-services" className="section-padding bg-gray-100">
      <div className="w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 px-4"
        >
          <h2 className="heading-secondary mb-6 text-gray-800" style={{fontFamily: 'Logo, serif'}}>
            SKILLS & SERVICES
          </h2>
        </motion.div>

        {/* Services Grid - Full Width */}
        <div className="grid grid-cols-1 lg:grid-cols-4 w-full rounded-lg overflow-hidden">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative group min-h-[500px] w-full"
            >
              <div className={`${service.color} h-full p-8 w-full transition-all duration-300 group-hover:scale-105`}>
                {/* Service Icon */}
                <div className="text-center mb-6">
                  {service.icon}
                </div>

                {/* Service Header */}
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-black mb-3" style={{fontFamily: 'Logo, serif'}}>
                    {service.title.toUpperCase()}
                  </h3>
                </div>

                {/* Full Content - No Hover State */}
                <div className="border-t border-black pt-6">
                  <ul className="space-y-3">
                    {service.skills.map((skill, skillIndex) => (
                      <li key={skillIndex} className="text-sm text-black/80 flex items-center">
                        <span className="text-black mr-3 flex-shrink-0">•</span>
                        <span className="leading-relaxed">{skill}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsServices;
