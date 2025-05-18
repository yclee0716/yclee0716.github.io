import React from 'react';
import { GeometricBackground } from '../components/ui/GeometricElements';
import { profile } from '../data/profile';

const AboutPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1A2B4C] to-[#2D3748] text-white">
      <GeometricBackground />
      
      {/* About Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">About Me</h1>
            <div className="h-1 w-24 bg-[#3CAEA3] mx-auto mb-12"></div>
            
            <div className="bg-[#2D3748]/50 backdrop-blur-sm p-8 rounded-lg border-l-4 border-[#3CAEA3]">
              <p className="text-lg text-gray-200 mb-6">
                {profile.about}
              </p>
              <p className="text-lg text-gray-200">
                With experience at organizations like Anthropic, Alibaba Cloud, and High-Flyer AI, 
                I've developed expertise in large language models, multi-agent systems, and AI infrastructure optimization.
                My research spans from financial machine learning to natural language processing, with a focus on 
                building more capable and reliable AI systems.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Education Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Education</h2>
          <div className="max-w-4xl mx-auto space-y-12">
            {profile.education.map((edu, index) => (
              <div key={index} className="relative">
                <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#3CAEA3] to-transparent"></div>
                <div className="ml-6">
                  <h3 className="text-2xl font-bold text-white">{edu.institution}</h3>
                  <p className="text-[#3CAEA3] mb-2">{edu.degree} | {edu.period}</p>
                  {edu.coursework && (
                    <p className="text-gray-300 mb-2">
                      <span className="font-semibold">Coursework:</span> {edu.coursework}
                    </p>
                  )}
                  {edu.thesis && (
                    <p className="text-gray-300">
                      <span className="font-semibold">Thesis:</span> {edu.thesis}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="py-16 px-4 bg-[#1A2B4C]/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Skills</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {profile.skills.map((skillGroup, index) => (
              <div 
                key={index} 
                className="bg-[#2D3748]/50 backdrop-blur-sm p-6 rounded-lg border-t-4 border-[#3CAEA3]"
              >
                <h3 className="text-xl font-bold mb-4 text-[#3CAEA3]">{skillGroup.category}</h3>
                <ul className="space-y-2">
                  {skillGroup.items.map((skill, idx) => (
                    <li key={idx} className="text-gray-300 flex items-center">
                      <div className="w-2 h-2 bg-[#3CAEA3] rotate-45 mr-3"></div>
                      <span>{skill}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Personal Approach Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto bg-[#2D3748]/50 backdrop-blur-sm p-8 rounded-lg">
            <h2 className="text-3xl font-bold mb-6 text-center">My Approach</h2>
            <div className="h-1 w-24 bg-[#3CAEA3] mx-auto mb-8"></div>
            
            <div className="space-y-6 text-gray-200">
              <p>
                I believe in building AI systems that are not only powerful but also reliable, interpretable, and aligned with human values. 
                My work focuses on pushing the boundaries of what's possible while ensuring that AI technologies are developed responsibly.
              </p>
              <p>
                As an AI developer and researcher, I'm particularly interested in the intersection of large language models, 
                multi-agent systems, and their applications in solving complex real-world problems. I'm passionate about 
                creating AI tools that augment human capabilities and make specialized knowledge more accessible.
              </p>
              <p>
                My background in both computational finance and AI development gives me a unique perspective on 
                how these technologies can transform industries and create new opportunities for innovation.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-20 px-4 relative">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Want to Know More?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Feel free to reach out if you'd like to discuss my background, research interests, or potential collaborations.
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

export default AboutPage;
