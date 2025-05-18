export interface Experience {
  company: string;
  position: string;
  period: string;
  researchField?: string;
  projects?: string[];
  description: string[];
}

export interface Education {
  institution: string;
  degree: string;
  period: string;
  coursework?: string;
  thesis?: string;
}

export interface Publication {
  title: string;
  authors: string;
  venue: string;
  year: string;
  link?: string;
}

export interface Award {
  title: string;
  issuer: string;
  date: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export const profile = {
  name: "Yingchao Li",
  title: "Machine Learning Engineer",
  organization: "Anthropic PBC, Claude Agent Team",
  department: "University of Washington, Department of Applied Mathematics",
  email: "yingcl2@uw.edu",
  phone: "+1 (206) 890-7164",
  
  about: "AI researcher and developer specializing in large language models, multi-agent interaction, and reinforcement learning. Experienced in developing and optimizing AI systems with a focus on model context protocols and agent systems.",
  
  education: [
    {
      institution: "University of Washington",
      degree: "M.S. in Computational Finance and Risk Management",
      period: "09/2022 - 12/2023",
      coursework: "Machine Learning, Quantitative Risk Management, Stochastic Calculus",
      thesis: "Forecasting the direction of price change and magnitude of volatility of crude oil futures the next day based on a hybrid deep learning model."
    },
    {
      institution: "Southwest Jiao Tong University (SWJTU)",
      degree: "B.A. in Financial Mathematics",
      period: "09/2018 - 06/2022",
      thesis: "High-Frequency Trading Optimization for Next-Day Securities Market: A Hybrid Machine Learning Model Approach"
    },
    {
      institution: "University of Cambridge",
      degree: "Visitor Student",
      period: "06/2019 - 09/2019",
      coursework: "High-Frequency Trading Algorithm, Anti Money Laundry AI, FinTech"
    }
  ],
  
  experience: [
    {
      company: "Anthropic PBC",
      position: "Machine Learning Engineer",
      period: "01/2024 - Present",
      researchField: "Large Language Model, Multi-Agent Interaction, Reinforcement Learning",
      projects: ["Claude 3.5", "Claude 3.5"],
      description: [
        "Participated in the development of Anthropic's Model Context Protocol (MCP), which standardizes the integration of AI models with external tools and data sources, enhancing Claude's adaptability and functionality.",
        "Designed and implemented Claude's agent system, enabling the model to autonomously perform open-ended tasks such as code generation and complex problem solving."
      ]
    },
    {
      company: "Alibaba Cloud Qwen-LM Team",
      position: "Research Engineer",
      period: "03/2023 - 09/2023",
      researchField: "Large Language Model, Reinforcement Learning, Knowledge Representation",
      projects: ["Qwen Open-Source Large Language Model"],
      description: [
        "Collaborated with the model architecture team to reduce model training time by 32.6% through the introduction of mixed precision training techniques, supporting larger-scale datasets.",
        "Participated in the open-source work of Qwen model, responsible for performance optimization and documentation writing of the open-source version, promoting widespread application in the community."
      ]
    },
    {
      company: "High-Flyer AI Fire-Flyer II Project (Now DeepSeek)",
      position: "Research Engineer",
      period: "09/2021 - 08/2022",
      researchField: "Software for GPU clusters, GenAI, Node Optimization, Time-shared Scheduling",
      projects: ["OpenCastKit", "DeepSeek Open-Source Large Language Model", "HAI-Platform"],
      description: [
        "Collaborated with the AI Lab to refine and optimize an open-source AI training platform HAI.",
        "Collaborated with the AI Lab to refine and optimize virtual computing resources for Fire-Flyer Supercomputer Cluster, mainly focused on GPU collaboration without NV-Link.",
        "Co-developed and enhanced the AI-based numerical prediction model OpenCastKit, integrating FourCastNet and GraphCast model based on hfai operator and hfreduce parallel communication optimization."
      ]
    },
    {
      company: "SenseTime Technology Research Department in Shanghai",
      position: "Research Intern",
      period: "06/2021 - 09/2021",
      description: [
        "Developed data mining algorithms to accurately identify long-tail scenarios in autonomous driving (such as extreme weather, complex traffic participant behaviors, rare obstacles, etc.).",
        "Built an efficient automated data mining pipeline to improve data labeling quality and reduce annotation costs.",
        "Combined multimodal data such as point clouds, images, and text to design multimodal features that support cross-modal data retrieval."
      ]
    },
    {
      company: "SenseTime Technology Research Department in Chengdu",
      position: "Research Intern",
      period: "06/2020 - 09/2020",
      description: [
        "Focused on large-scale image/video content analysis scenarios for smart cities, participating in research on multimodal algorithms, exploring better solutions for urban visual intelligence, and helping downstream product lines establish a technological edge within the industry."
      ]
    }
  ],
  
  academicResearch: [
    {
      company: "University of Washington Foster School of Business",
      position: "Research Assistant",
      period: "02/2024 - Present",
      researchField: "Large Language Model Optimization, LLM Copilot Construction, AI + Operation Research",
      description: [
        "Primarily focused on financial machine learning, forecasting in complex financial systems, application of corporate finance with large language models (LLMs), climate finance and governance, as well as individual and group rational decision making and behavioral analysis."
      ]
    },
    {
      company: "IDEA Cognitive Computing and Natural Language Research Center",
      position: "Research Assistant",
      period: "07/2020 - 08/2022",
      researchField: "Feature Engineering, Causality Engineering, AGI, AutoML",
      projects: ["EUREKA Intelligent Literature Model", "Fengshenbang-LM"],
      description: [
        "Cofounder of ReadPaper.com, a Chinese-English bilingual intelligent literature management platform. Responsible for development of EUREKA intelligent literature model with Fengshenbang 1.0, which mainly focuses on cognitive computing and natural language processing, natural language input requirements recognition, and intelligent translation of literature.",
        "Participated in development of Fengshenbang-LM, A basic Chinese-driven ecosystem of pre-trained large models, task-specific fine-tuned applications, benchmarks and datasets."
      ]
    }
  ],
  
  publications: [
    {
      title: "Designing a Controllable Transformer Framework for Real-Time Sign Language Point Sequence Generation",
      authors: "Li Y., Zhang Z.",
      venue: "Under review at IASDR 2025: Human-Centered AI",
      year: "2025"
    },
    {
      title: "LLM Reasoning Patterns in Complex Programming and Optimization Challenges",
      authors: "Agrawal, D., Boussioux L., Li Y.*, Wang Y.",
      venue: "Presented at AAAI 2024 - Combining AI and ORMS for better trustworthy Decision Making",
      year: "2024"
    },
    {
      title: "Devote yourself to enjoy daily work: a diary study on flow experience and organizational identification",
      authors: "Mao Y., Guo S., Xie M., Yu J., Deng X., Li Y., Zhai Y. and Kong F.",
      venue: "Journal of Managerial Psychology, Vol. 38 No. 5, pp. 338-351",
      year: "2023",
      link: "https://doi.org/10.1108/JMP-07-2022-0355"
    }
  ],
  
  awards: [
    {
      title: "Provincial Excellent Graduate",
      issuer: "Ministry of National Education, China",
      date: "06/2022"
    },
    {
      title: "National Progress Scholarship",
      issuer: "Ministry of National Education, China",
      date: "09/2021"
    },
    {
      title: "China Undergraduate Mathematical Contest in Modeling National Silver Prize",
      issuer: "CSIAM",
      date: "09/2021"
    },
    {
      title: "Zhu Kezhen Outstanding Student Scholarship",
      issuer: "Southwest Jiao Tong University",
      date: "06/2021"
    },
    {
      title: "Urban Innovation Award of Chengdu",
      issuer: "Chengdu People's Government",
      date: "11/2020"
    },
    {
      title: "First Class Honors Scholarship",
      issuer: "Southwest Jiao Tong University",
      date: "06/2020"
    },
    {
      title: "China Undergraduate Mathematical Contest in Modeling National Silver Prize",
      issuer: "CSIAM",
      date: "09/2020"
    },
    {
      title: "First Class Honors Scholarship",
      issuer: "Southwest Jiao Tong University",
      date: "06/2019"
    }
  ],
  
  skills: [
    {
      category: "Computation/Coding",
      items: ["Python (PyTorch, TensorFlow, Pygurobi)", "R", "SQL", "Spark", "Kafka", "Hadoop", "MATLAB", "C++"]
    },
    {
      category: "Academic",
      items: ["LaTeX", "EndNote 20", "Zotero", "Mendeley"]
    },
    {
      category: "Language",
      items: ["Chinese (Native)", "English (Professional)", "German (Conversational)"]
    }
  ]
};
