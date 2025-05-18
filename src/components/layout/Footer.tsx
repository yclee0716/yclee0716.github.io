import React from 'react';

interface FooterProps {}

const Footer: React.FC<FooterProps> = () => {
  return (
    <footer className="bg-[#1A2B4C] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <div className="flex items-center">
              <div className="h-8 w-8 bg-[#3CAEA3] rotate-45 mr-2 flex items-center justify-center">
                <span className="text-white font-bold text-lg -rotate-45">YL</span>
              </div>
              <span className="font-bold text-xl">Yingchao Li</span>
            </div>
            <p className="text-gray-300 mt-2">AI Developer & Researcher</p>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-gray-300">yingcl2@uw.edu</p>
            <p className="text-gray-300">+1 (206) 890-7164</p>
            <div className="mt-2 flex space-x-4">
              {/* Social icons would go here */}
              <div className="h-8 w-8 border border-[#3CAEA3] rounded-full flex items-center justify-center">
                <span className="text-[#3CAEA3]">in</span>
              </div>
              <div className="h-8 w-8 border border-[#3CAEA3] rounded-full flex items-center justify-center">
                <span className="text-[#3CAEA3]">gh</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-4 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Yingchao Li. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
