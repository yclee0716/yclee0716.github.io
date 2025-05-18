import React from 'react';
import { GeometricBackground } from '../components/ui/GeometricElements';

const ProjectsPage: React.FC = () => {
  // 从简历中提取项目信息
  const projects = [
    {
      name: "Claude Agent System",
      company: "Anthropic PBC",
      description: "Designed and implemented Claude's agent system, enabling the model to autonomously perform open-ended tasks such as code generation and complex problem solving.",
      technologies: ["Large Language Models", "Multi-Agent Systems", "Reinforcement Learning"],
      color: "#3CAEA3"
    },
    {
      name: "Model Context Protocol (MCP)",
      company: "Anthropic PBC",
      description: "Participated in the development of Anthropic's Model Context Protocol (MCP), which standardizes the integration of AI models with external tools and data sources, enhancing Claude's adaptability and functionality.",
      technologies: ["API Design", "Context Management", "Tool Integration"],
      color: "#3CAEA3"
    },
    {
      name: "Qwen Open-Source LLM",
      company: "Alibaba Cloud",
      description: "Collaborated with the model architecture team to reduce model training time by 32.6% through the introduction of mixed precision training techniques, supporting larger-scale datasets.",
      technologies: ["PyTorch", "Mixed Precision Training", "Performance Optimization"],
      color: "#6B46C1"
    },
    {
      name: "HAI-Platform",
      company: "High-Flyer AI",
      description: "Collaborated with the AI Lab to refine and optimize an open-source AI training platform HAI.",
      technologies: ["Distributed Computing", "GPU Optimization", "Training Infrastructure"],
      color: "#F6E05E"
    },
    {
      name: "OpenCastKit",
      company: "High-Flyer AI",
      description: "Co-developed and enhanced the AI-based numerical prediction model OpenCastKit, integrating FourCastNet and GraphCast model based on hfai operator and hfreduce parallel communication optimization.",
      technologies: ["Numerical Prediction", "Parallel Computing", "Model Integration"],
      color: "#F6E05E"
    },
    {
      name: "EUREKA Intelligent Literature Model",
      company: "IDEA Research Center",
      description: "Responsible for development of EUREKA intelligent literature model with Fengshenbang 1.0, which mainly focuses on cognitive computing and natural language processing, natural language input requirements recognition, and intelligent translation of literature.",
      technologies: ["NLP", "Literature Analysis", "Multilingual Translation"],
      color: "#6B46C1"
    }
  ];

  return (
    <div className="relative min-h-screen bg-gradient-to-br from-[#1A2B4C] to-[#2D3748] text-white">
      <GeometricBackground />
      
      {/* Projects Hero Section */}
      <section className="relative pt-32 pb-16 px-4">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">Projects</h1>
            <div className="h-1 w-24 bg-[#3CAEA3] mx-auto mb-12"></div>
            <p className="text-xl text-gray-300 text-center max-w-3xl mx-auto">
              A selection of key projects I've contributed to throughout my career in AI development and research.
            </p>
          </div>
        </div>
      </section>
      
      {/* Projects Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div 
                key={index} 
                className="bg-[#2D3748]/50 backdrop-blur-sm p-6 rounded-lg border-l-4 hover:transform hover:scale-105 transition-all"
                style={{ borderColor: project.color }}
              >
                <h3 className="text-2xl font-bold mb-2" style={{ color: project.color }}>{project.name}</h3>
                <p className="text-gray-400 mb-4">{project.company}</p>
                <p className="text-gray-300 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 rounded-full text-sm"
                      style={{ 
                        backgroundColor: `${project.color}20`, 
                        color: project.color 
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Project Approach */}
      <section className="py-16 px-4 bg-[#1A2B4C]/50 backdrop-blur-sm">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">My Approach to Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#2D3748]/50 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="h-16 w-16 bg-[#3CAEA3]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="h-8 w-8 bg-[#3CAEA3] rotate-45"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#3CAEA3]">Research</h3>
                <p className="text-gray-300">
                  Deep understanding of problem space and existing solutions to identify opportunities for innovation.
                </p>
              </div>
              
              <div className="bg-[#2D3748]/50 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="h-16 w-16 bg-[#6B46C1]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="h-8 w-8 bg-[#6B46C1] rotate-45"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#6B46C1]">Development</h3>
                <p className="text-gray-300">
                  Iterative implementation with continuous testing and refinement to ensure optimal performance.
                </p>
              </div>
              
              <div className="bg-[#2D3748]/50 backdrop-blur-sm p-6 rounded-lg text-center">
                <div className="h-16 w-16 bg-[#F6E05E]/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="h-8 w-8 bg-[#F6E05E] rotate-45"></div>
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#F6E05E]">Optimization</h3>
                <p className="text-gray-300">
                  Rigorous performance analysis and optimization to maximize efficiency and scalability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Research CTA */}
      <section className="py-16 px-4">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Explore My Research</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Interested in my academic publications and research contributions?
          </p>
          <a 
            href="/research" 
            className="px-8 py-4 bg-[#3CAEA3] text-white rounded-lg text-lg hover:bg-[#3CAEA3]/80 transition-colors inline-block"
          >
            View Research
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProjectsPage;
