import React from 'react';
import { GeometricBackground } from '../components/ui/GeometricElements';
import { profile } from '../data/profile';

const ExperiencePage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1A2B4C] to-[#2D3748] text-white">
      <GeometricBackground />
      
      {/* Experience Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Professional Experience</h1>
            <div className="h-1 w-24 bg-[#3CAEA3] mx-auto mb-12"></div>
          </div>
        </div>
      </section>
      
      {/* Industry Experience Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Industry Experience</h2>
          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative border-l-2 border-[#3CAEA3]/30 ml-4 md:ml-8 space-y-16">
              {profile.experience.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-0 h-4 w-4 bg-[#3CAEA3] rotate-45"></div>
                  
                  {/* Content */}
                  <div className="ml-8 md:ml-12">
                    <h3 className="text-2xl font-bold text-white">{exp.company}</h3>
                    <p className="text-[#3CAEA3] mb-2">{exp.position} | {exp.period}</p>
                    {exp.researchField && (
                      <p className="text-gray-300 mb-4">
                        <span className="font-semibold">Research Field:</span> {exp.researchField}
                      </p>
                    )}
                    
                    {exp.projects && exp.projects.length > 0 && (
                      <div className="mb-4">
                        <p className="font-semibold text-gray-300">Projects:</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {exp.projects.map((project, idx) => (
                            <span 
                              key={idx} 
                              className="bg-[#3CAEA3]/20 text-[#3CAEA3] px-3 py-1 rounded-full text-sm"
                            >
                              {project}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <ul className="space-y-2 mt-4">
                      {exp.description.map((item, idx) => (
                        <li key={idx} className="text-gray-300 flex">
                          <span className="text-[#3CAEA3] mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Academic Research Section */}
      <section className="py-16 px-4 bg-[#1A2B4C]/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Academic Research</h2>
          <div className="max-w-4xl mx-auto">
            {/* Timeline */}
            <div className="relative border-l-2 border-[#6B46C1]/30 ml-4 md:ml-8 space-y-16">
              {profile.academicResearch.map((research, index) => (
                <div key={index} className="relative">
                  {/* Timeline dot */}
                  <div className="absolute -left-[9px] top-0 h-4 w-4 bg-[#6B46C1] rotate-45"></div>
                  
                  {/* Content */}
                  <div className="ml-8 md:ml-12">
                    <h3 className="text-2xl font-bold text-white">{research.company}</h3>
                    <p className="text-[#6B46C1] mb-2">{research.position} | {research.period}</p>
                    {research.researchField && (
                      <p className="text-gray-300 mb-4">
                        <span className="font-semibold">Research Field:</span> {research.researchField}
                      </p>
                    )}
                    
                    {research.projects && research.projects.length > 0 && (
                      <div className="mb-4">
                        <p className="font-semibold text-gray-300">Projects:</p>
                        <div className="flex flex-wrap gap-2 mt-1">
                          {research.projects.map((project, idx) => (
                            <span 
                              key={idx} 
                              className="bg-[#6B46C1]/20 text-[#6B46C1] px-3 py-1 rounded-full text-sm"
                            >
                              {project}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
                    
                    <ul className="space-y-2 mt-4">
                      {research.description.map((item, idx) => (
                        <li key={idx} className="text-gray-300 flex">
                          <span className="text-[#6B46C1] mr-2">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      
      {/* Skills Highlight */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Key Skills & Technologies</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Python', 'PyTorch', 'TensorFlow', 'LLMs', 'Reinforcement Learning', 'GPU Optimization', 'Multi-Agent Systems', 'Data Mining'].map((skill, index) => (
              <div 
                key={index} 
                className="bg-[#2D3748]/50 backdrop-blur-sm p-4 rounded-lg text-center border-b-2 border-[#3CAEA3] hover:transform hover:scale-105 transition-all"
              >
                <span className="text-gray-200">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Projects CTA */}
      <section className="py-16 px-4 bg-[#1A2B4C]/50 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in My Projects?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Check out some of the key projects I've worked on throughout my career.
          </p>
          <a 
            href="/projects" 
            className="px-8 py-4 bg-[#3CAEA3] text-white rounded-lg text-lg hover:bg-[#3CAEA3]/80 transition-colors inline-block"
          >
            View Projects
          </a>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
