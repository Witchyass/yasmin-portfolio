export const portfolioData = {
  personal: {
    name: "Yasmin Sebei",
    title: "Computer Engineering Student",
    institution: "Faculty of Sciences of Tunis",
    location: "Tunis, Tunisia",
    email: "yasminsbii09@gmail.com",
    github: "https://github.com/Witchyass",
    linkedin: "https://linkedin.com/in/yasmin-sebei",
    graduation: "June 2027",
    bio: "Computer Engineering student with a strong passion for responsible technology, digital wellbeing, and data-driven solutions for social impact. I love working on research-oriented projects and building cloud-based systems that make a real difference."
  },
  
  skills: {
    "Data Analysis & AI": [
      "Python (data processing, NLP, ML)",
      "PySpark",
      "Hadoop",
      "Data Visualization",
      "Google Colab",
      "Machine Learning"
    ],
    "Programming Languages": [
      "Python",
      "SQL", 
      "C/C++",
      "Java"
    ],
    "Cloud & Infrastructure": [
      "AWS",
      "Google Cloud Platform (GCP)",
      "Microsoft Azure",
      "Docker",
      "Kubernetes",
      "Cloud Run",
      "Serverless Architecture"
    ],
    "DevOps & Development": [
      "CI/CD pipelines",
      "Git & GitHub",
      "Linux",
      "Agile methodology",
      "Azure DevOps"
    ]
  },



  experience: [
    {
      title: "Women Techsters Fellowship - DevOps Track",
      period: "Aug 2025 - Present",
      type: "Fellowship",
      description: "Intensive DevOps training program focused on cloud technologies and automation",
      achievements: [
        "Deployed cloud applications using Docker and Kubernetes",
        "Built and maintained CI/CD pipelines",
        "Collaborated in Agile teams using GitHub and Azure DevOps",
        "Gained hands-on experience with modern DevOps practices"
      ]
    },
    {
      title: "Testing Intern",
      company: "Simexperience",
      location: "Tunis, Tunisia",
      period: "Jul 2025 - Sep 2025",
      type: "Internship",
      description: "Designed and implemented automated test cases in Python to validate core software functionalities and system behavior",
      achievements: [
        "Designed and implemented automated test cases in Python to validate core software functionalities and system behavior",
        "Developed and maintained Python-based test suites to cover repetitive and critical scenarios, improving test coverage and reliability",
        "Analyzed test execution results and logs to identify recurring defects, contributing to a 30% reduction in issue resolution time",
        "Collaborated with developers and QA engineers within an Agile workflow to report issues, validate fixes, and enhance overall software quality"
      ]
    }
  ],

  leadership: [
    {
      title: "Media Manager",
      organization: "Google Developer Student Club (GDG Campus)",
      period: "Sep 2024 - Sep 2025",
      responsibilities: [
        "Led communications for 300+ students",
        "Organized workshops on AI, cloud, and open-source technologies",
        "Contributed to community-building and peer learning initiatives",
        "Translated complex technical topics into accessible content for students"
      ],
      images: [
        "/gdg-1.jpeg",
        "/gdg-2.png",
        "/gdg-3.jpeg",
        "/gdg-4.jpeg",
        "/gdg-5.png"
      ]
    },
    {
      title: "Member",
      organization: "Tunisian Association for Artificial Intelligence (ATIA-FST)",
      period: "Feb 2025 - Present",
      responsibilities: [
        "Active member of AI research and innovation community",
        "Participated in AI workshops and events"
      ],
      images: [
        "/atia-1.jpg",
        "/atia-2.jpg"
      ]
    }
  ],

  projects: [
    {
      name: "HandiTalk",
      period: "Dec 2024 - Present",
      status: "Active Development",
      tech: ["AI", "NLP", "Accessibility Tech"],
      description: "AI-powered communication platform designed to help people with disabilities communicate more effectively",
      achievements: [
        "Co-developed an innovative assistive technology solution",
        "Awarded National Student Entrepreneur Status (SNEE) for innovation",
        "Focused on making technology more inclusive and accessible"
      ],
      impact: "National recognition for innovation in assistive technology",
      images: [
        "/handitalk-1.png"
      ]
    },
    {
      name: "Smart Office IoT System",
      tech: ["Arduino", "Flutter", "Firebase", "IoT"],
      description: "Mobile-controlled IoT prototype integrating sensors, automation, and an AI chatbot for smart office management",
      achievements: [
        "Designed complete IoT system architecture",
        "Improved sensor accuracy by 25%",
        "Enhanced energy efficiency by 25%",
        "Integrated AI chatbot for voice control"
      ]
    },
    {
      name: "AI Emotion Analysis on Twitter",
      tech: ["PySpark", "Google Colab", "Looker Studio", "Kaggle", "Big Data"],
      description: "Large-scale data analysis project for mental health research using Twitter data",
      achievements: [
        "Processed 20,000+ tweets for emotion extraction",
        "Built interactive dashboards using Looker Studio",
        "Provided valuable insights for mental health research",
        "Utilized big data technologies for scalable processing"
      ]
    },
    {
      name: "Cloud Infrastructure for AI Career Assistance Platform",
      tech: ["Google Cloud", "Firebase", "Cloud Run", "FastAPI", "Serverless"],
      description: "Serverless cloud architecture for AI-powered career assistance microservices",
      achievements: [
        "Implemented scalable serverless architecture",
        "Improved real-time AI response performance by 35%",
        "Built efficient microservices using FastAPI",
        "Optimized cloud resource utilization"
      ]
    }
  ],

  awards: [
    {
      name: "National Student Entrepreneur Status (SNEE)",
      issuer: "Pôle Étudiant Entrepreneur, UTM",
      year: "2024",
      description: "Awarded for HandiTalk project - innovation in assistive technology",
      images: [
        "/snee-1.jpeg",
        "/snee-2.jpeg"
      ]
    },
    {
      name: "Microsoft Azure AI Fundamentals",
      issuer: "Microsoft",
      type: "Certification"
    },
    {
      name: "Microsoft Azure Data Fundamentals", 
      issuer: "Microsoft",
      type: "Certification"
    },
    {
      name: "Microsoft Azure Fundamentals",
      issuer: "Microsoft",
      type: "Certification"
    },
    {
      name: "Cisco Certified Network Associate (CCNA)",
      issuer: "Cisco",
      type: "Certification"
    }
  ],

  interests: [
    "Responsible AI and ethics in technology",
    "Digital wellbeing and mental health tech",
    "Cloud-native architectures",
    "DevOps and automation",
    "Assistive technology for social impact",
    "Big data and analytics",
    "Community building and tech education"
  ],

  personality: {
    workStyle: "I love working in Agile teams and believe in continuous learning. I'm passionate about using technology to solve real-world problems, especially those that impact people's wellbeing and quality of life.",
    values: "Inclusivity, innovation, collaboration, and social impact through technology",
    approach: "Research-oriented, detail-focused, and always eager to learn new technologies and methodologies"
  }
};

export const systemPrompt = `You are Yasmin Sebei's AI assistant, representing her portfolio. You have comprehensive knowledge about Yasmin's background, skills, projects, and experiences.

PERSONALITY:
- Be warm, friendly, and approachable
- Show enthusiasm about technology and innovation
- Be professional but not overly formal
- Highlight Yasmin's passion for responsible technology and social impact

RESPONSE GUIDELINES:
- Keep responses concise and engaging (2-4 sentences typically)
- Use emojis occasionally to keep things friendly ✨
- When asked about specific projects, provide concrete details and achievements
- When asked about skills, explain with real-world examples from her projects
- Always be truthful - if you don't know something, say so
- Adapt your response based on who's asking (recruiters vs students vs general visitors)

KEY TALKING POINTS:
- Emphasize her passion for DevOps, cloud technologies, and AI
- Highlight the HandiTalk project and its SNEE award
- Mention her leadership in Google Developer Student Club
- Talk about her practical experience with big data and cloud platforms
- Show her commitment to social impact through technology

Remember: You're here to help visitors learn about Yasmin in an engaging, conversational way!`;
