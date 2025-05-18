import React from 'react';
import { GeometricBackground } from '../components/ui/GeometricElements';
import { profile } from '../data/profile';

const ResearchPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1A2B4C] to-[#2D3748] text-white">
      <GeometricBackground />
      
      {/* Research Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Research</h1>
            <div className="h-1 w-24 bg-[#3CAEA3] mx-auto mb-12"></div>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
              My academic publications and research contributions in AI, machine learning, and related fields.
            </p>
          </div>
        </div>
      </section>
      
      {/* Publications Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Publications</h2>
          <div className="max-w-4xl mx-auto space-y-8">
            {profile.publications.map((pub, index) => (
              <div 
                key={index} 
                className="bg-[#2D3748]/50 backdrop-blur-sm p-6 rounded-lg hover:transform hover:scale-[1.02] transition-all"
              >
                <h3 className="text-2xl font-bold mb-3 text-white">{pub.title}</h3>
                <p className="text-[#3CAEA3] mb-2">{pub.authors}</p>
                <p className="text-gray-300 mb-2">{pub.venue}</p>
                <p className="text-gray-400 mb-3">{pub.year}</p>
                {pub.link && (
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-[#3CAEA3] hover:underline"
                  >
                    Read Paper
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Research Interests */}
      <section className="py-16 px-4 bg-[#1A2B4C]/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Research Interests</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#2D3748]/50 backdrop-blur-sm p-6 rounded-lg border-l-4 border-[#3CAEA3]">
              <h3 className="text-xl font-bold mb-3 text-[#3CAEA3]">Large Language Models</h3>
              <p className="text-gray-300">
                Exploring techniques to enhance the capabilities, reliability, and efficiency of large language models,
                with a focus on context handling, reasoning abilities, and alignment with human values.
              </p>
            </div>
            
            <div className="bg-[#2D3748]/50 backdrop-blur-sm p-6 rounded-lg border-l-4 border-[#6B46C1]">
              <h3 className="text-xl font-bold mb-3 text-[#6B46C1]">Multi-Agent Systems</h3>
              <p className="text-gray-300">
                Investigating the dynamics of multi-agent AI systems, including collaboration mechanisms,
                emergent behaviors, and applications in complex problem-solving scenarios.
              </p>
            </div>
            
            <div className="bg-[#2D3748]/50 backdrop-blur-sm p-6 rounded-lg border-l-4 border-[#F6E05E]">
              <h3 className="text-xl font-bold mb-3 text-[#F6E05E]">Financial Machine Learning</h3>
              <p className="text-gray-300">
                Applying machine learning techniques to financial forecasting, risk management, and market analysis,
                with a particular interest in hybrid models that combine traditional methods with deep learning.
              </p>
            </div>
            
            <div className="bg-[#2D3748]/50 backdrop-blur-sm p-6 rounded-lg border-l-4 border-[#3CAEA3]">
              <h3 className="text-xl font-bold mb-3 text-[#3CAEA3]">AI + Operations Research</h3>
              <p className="text-gray-300">
                Exploring the intersection of AI and operations research to solve complex optimization problems,
                enhance decision-making processes, and improve resource allocation in various domains.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Academic Affiliations */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Academic Affiliations</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#2D3748]/50 backdrop-blur-sm p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-3 text-white">University of Washington</h3>
              <p className="text-[#3CAEA3] mb-4">Foster School of Business</p>
              <p className="text-gray-300">
                Research in financial machine learning, LLM optimization, and AI applications in business contexts.
              </p>
            </div>
            
            <div className="bg-[#2D3748]/50 backdrop-blur-sm p-6 rounded-lg text-center">
              <h3 className="text-xl font-bold mb-3 text-white">IDEA Research Center</h3>
              <p className="text-[#3CAEA3] mb-4">Cognitive Computing & Natural Language</p>
              <p className="text-gray-300">
                Research in feature engineering, causality engineering, AGI, and AutoML applications.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-16 px-4 bg-[#1A2B4C]/50 backdrop-blur-sm">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Interested in Research Collaboration?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing potential research collaborations and new ideas.
          </p>
          <a 
            href="/contact" 
            className="px-8 py-4 bg-[#3CAEA3] text-white rounded-lg text-lg hover:bg-[#3CAEA3]/80 transition-colors inline-block"
          >
            Contact Me
          </a>
        </div>
      </section>
    </div>
  );
};

export default ResearchPage;
