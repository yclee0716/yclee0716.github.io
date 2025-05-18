import React from 'react';
import { GeometricBackground } from '../components/ui/GeometricElements';
import { profile } from '../data/profile';

const ContactPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1A2B4C] to-[#2D3748] text-white">
      <GeometricBackground />
      
      {/* Contact Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Contact Me</h1>
            <div className="h-1 w-24 bg-[#3CAEA3] mx-auto mb-12"></div>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
              Interested in collaboration, research opportunities, or just want to connect? Feel free to reach out.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Information */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-[#2D3748]/50 backdrop-blur-sm p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 text-[#3CAEA3]">Get In Touch</h2>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="h-10 w-10 bg-[#3CAEA3]/20 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-[#3CAEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <a href={`mailto:${profile.email}`} className="text-white hover:text-[#3CAEA3] transition-colors">
                      {profile.email}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 bg-[#3CAEA3]/20 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-[#3CAEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Phone</p>
                    <a href={`tel:${profile.phone}`} className="text-white hover:text-[#3CAEA3] transition-colors">
                      {profile.phone}
                    </a>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="h-10 w-10 bg-[#3CAEA3]/20 rounded-lg flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-[#3CAEA3]" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 22s8-4 8-10V6l-8-4-8 4v6c0 6 8 10 8 10z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Location</p>
                    <p className="text-white">Seattle, Washington, USA</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h3 className="text-xl font-bold mb-4 text-white">Connect</h3>
                <div className="flex space-x-4">
                  <a href="#" className="h-10 w-10 bg-[#3CAEA3]/20 rounded-lg flex items-center justify-center hover:bg-[#3CAEA3]/40 transition-colors">
                    <span className="text-[#3CAEA3]">in</span>
                  </a>
                  <a href="#" className="h-10 w-10 bg-[#3CAEA3]/20 rounded-lg flex items-center justify-center hover:bg-[#3CAEA3]/40 transition-colors">
                    <span className="text-[#3CAEA3]">gh</span>
                  </a>
                  <a href="#" className="h-10 w-10 bg-[#3CAEA3]/20 rounded-lg flex items-center justify-center hover:bg-[#3CAEA3]/40 transition-colors">
                    <span className="text-[#3CAEA3]">tw</span>
                  </a>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="bg-[#2D3748]/50 backdrop-blur-sm p-8 rounded-lg">
              <h2 className="text-2xl font-bold mb-6 text-[#3CAEA3]">Send a Message</h2>
              
              <form className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-gray-300 mb-2">Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    className="w-full bg-[#1A2B4C]/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#3CAEA3]"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-gray-300 mb-2">Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    className="w-full bg-[#1A2B4C]/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#3CAEA3]"
                    placeholder="Your email"
                  />
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-gray-300 mb-2">Subject</label>
                  <input 
                    type="text" 
                    id="subject" 
                    className="w-full bg-[#1A2B4C]/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#3CAEA3]"
                    placeholder="Subject"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-gray-300 mb-2">Message</label>
                  <textarea 
                    id="message" 
                    rows={5}
                    className="w-full bg-[#1A2B4C]/50 border border-gray-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-[#3CAEA3]"
                    placeholder="Your message"
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-[#3CAEA3] text-white py-3 rounded-lg hover:bg-[#3CAEA3]/80 transition-colors"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      {/* FAQ Section */}
      <section className="py-16 px-4 bg-[#1A2B4C]/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="bg-[#2D3748]/50 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-[#3CAEA3]">What types of projects are you interested in?</h3>
              <p className="text-gray-300">
                I'm particularly interested in projects involving large language models, multi-agent systems, 
                AI infrastructure optimization, and applications of AI in finance and decision-making.
              </p>
            </div>
            
            <div className="bg-[#2D3748]/50 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-[#3CAEA3]">Are you available for consulting work?</h3>
              <p className="text-gray-300">
                Yes, I'm open to consulting opportunities related to AI development, machine learning implementation, 
                and technical strategy. Please reach out with details about your project.
              </p>
            </div>
            
            <div className="bg-[#2D3748]/50 backdrop-blur-sm p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2 text-[#3CAEA3]">Do you speak at conferences or events?</h3>
              <p className="text-gray-300">
                Yes, I occasionally speak at conferences and events on topics related to AI, machine learning, 
                and their applications. Feel free to contact me with speaking opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
