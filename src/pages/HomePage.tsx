import React from 'react';
import { GeometricBackground } from '../components/ui/GeometricElements';
import { profile } from '../data/profile';

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1A2B4C] to-[#2D3748] text-white">
      <GeometricBackground />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 md:pt-40 md:pb-32">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              <span className="text-[#3CAEA3]">Yingchao</span> Li
            </h1>
            <h2 className="text-xl md:text-2xl mb-6 text-gray-300">
              {profile.title} at {profile.organization}
            </h2>
            <p className="text-lg md:text-xl mb-8 text-gray-200 max-w-2xl mx-auto">
              {profile.about}
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="/about" 
                className="px-6 py-3 bg-[#3CAEA3] text-white rounded hover:bg-[#3CAEA3]/80 transition-colors"
              >
                About Me
              </a>
              <a 
                href="/contact" 
                className="px-6 py-3 border border-[#3CAEA3] text-[#3CAEA3] rounded hover:bg-[#3CAEA3]/10 transition-colors"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Expertise Areas */}
      <section className="py-16 px-4 bg-[#1A2B4C]/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Areas of Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Expertise Card 1 */}
            <div className="bg-[#2D3748]/50 backdrop-blur-sm p-6 rounded-lg border-l-4 border-[#3CAEA3] hover:transform hover:scale-105 transition-all">
              <h3 className="text-xl font-bold mb-3 text-[#3CAEA3]">Large Language Models</h3>
              <p className="text-gray-300">
                Developing and optimizing large language models with a focus on performance, 
                context handling, and integration with external tools.
              </p>
            </div>
            
            {/* Expertise Card 2 */}
            <div className="bg-[#2D3748]/50 backdrop-blur-sm p-6 rounded-lg border-l-4 border-[#6B46C1] hover:transform hover:scale-105 transition-all">
              <h3 className="text-xl font-bold mb-3 text-[#6B46C1]">Multi-Agent Systems</h3>
              <p className="text-gray-300">
                Designing and implementing AI agent systems capable of autonomous task execution,
                complex problem solving, and collaborative work.
              </p>
            </div>
            
            {/* Expertise Card 3 */}
            <div className="bg-[#2D3748]/50 backdrop-blur-sm p-6 rounded-lg border-l-4 border-[#F6E05E] hover:transform hover:scale-105 transition-all">
              <h3 className="text-xl font-bold mb-3 text-[#F6E05E]">AI Infrastructure</h3>
              <p className="text-gray-300">
                Optimizing GPU clusters, developing training platforms, and enhancing computational
                resources for large-scale AI model training.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Experience */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Featured Experience</h2>
          <div className="max-w-4xl mx-auto">
            {/* Experience Item */}
            <div className="mb-12 relative">
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#3CAEA3] to-transparent"></div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold text-white">{profile.experience[0].company}</h3>
                <p className="text-[#3CAEA3] mb-2">{profile.experience[0].position} | {profile.experience[0].period}</p>
                <p className="text-gray-300 mb-4">{profile.experience[0].researchField}</p>
                <ul className="space-y-2">
                  {profile.experience[0].description.map((item, index) => (
                    <li key={index} className="text-gray-300 flex">
                      <span className="text-[#3CAEA3] mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Experience Item */}
            <div className="mb-12 relative">
              <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-[#6B46C1] to-transparent"></div>
              <div className="ml-6">
                <h3 className="text-2xl font-bold text-white">{profile.experience[1].company}</h3>
                <p className="text-[#6B46C1] mb-2">{profile.experience[1].position} | {profile.experience[1].period}</p>
                <p className="text-gray-300 mb-4">{profile.experience[1].researchField}</p>
                <ul className="space-y-2">
                  {profile.experience[1].description.map((item, index) => (
                    <li key={index} className="text-gray-300 flex">
                      <span className="text-[#6B46C1] mr-2">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <a 
                href="/experience" 
                className="px-6 py-3 border border-[#3CAEA3] text-[#3CAEA3] rounded hover:bg-[#3CAEA3]/10 transition-colors inline-block"
              >
                View All Experience
              </a>
            </div>
          </div>
        </div>
      </section>
      
      {/* Publications Preview */}
      <section className="py-16 px-4 bg-[#1A2B4C]/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Recent Publications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {profile.publications.slice(0, 2).map((pub, index) => (
              <div 
                key={index} 
                className="bg-[#2D3748]/50 backdrop-blur-sm p-6 rounded-lg hover:transform hover:scale-105 transition-all"
              >
                <h3 className="text-xl font-bold mb-3 text-white">{pub.title}</h3>
                <p className="text-[#3CAEA3] mb-2">{pub.authors}</p>
                <p className="text-gray-300 mb-2">{pub.venue}</p>
                <p className="text-gray-400">{pub.year}</p>
                {pub.link && (
                  <a 
                    href={pub.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-[#3CAEA3] hover:underline mt-2 inline-block"
                  >
                    Read Paper
                  </a>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a 
              href="/research" 
              className="px-6 py-3 border border-[#3CAEA3] text-[#3CAEA3] rounded hover:bg-[#3CAEA3]/10 transition-colors inline-block"
            >
              View All Publications
            </a>
          </div>
        </div>
      </section>
      
      {/* Contact CTA */}
      <section className="py-20 px-4 relative">
        <GeometricBackground className="opacity-30" />
        <div className="container mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Interested in Collaboration?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            I'm always open to discussing AI research, development projects, or potential collaborations.
          </p>
          <a 
            href="/contact" 
            className="px-8 py-4 bg-[#3CAEA3] text-white rounded-lg text-lg hover:bg-[#3CAEA3]/80 transition-colors inline-block"
          >
            Get in Touch
          </a>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
