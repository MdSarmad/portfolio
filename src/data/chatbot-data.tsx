export interface ChatMessage {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

export interface ChatResponse {
  triggers: string[];
  response: string;
  followUp?: string[];
}

export const chatbotResponses: ChatResponse[] = [
  {
    triggers: ['hello', 'hi', 'hey', 'good morning', 'good afternoon', 'good evening'],
    response: "Hello! 👋 I'm MD Sarmad's AI assistant. I'm here to help you learn more about his skills, experience, and availability. What would you like to know?",
    followUp: ['Tell me about his skills', 'What projects has he worked on?', 'Is he available for new opportunities?']
  },
  {
    triggers: ['skills', 'technologies', 'tech stack', 'what can he do', 'expertise'],
    response: "MD Sarmad is a Full Stack Developer with expertise in:\n\n🔹 Frontend: React/Next.js, TypeScript, Tailwind CSS, JavaScript\n🔹 Backend: Node.js, Python, Express.js, REST APIs\n🔹 Database: PostgreSQL, MongoDB, Redis, Supabase\n🔹 Tools: Figma, Git/GitHub, Docker, AWS\n\nHe's particularly strong in modern web development and has 95% proficiency in React/Next.js!",
    followUp: ['Show me his projects', 'What about his experience?', 'Is he available for hire?']
  },
  {
    triggers: ['projects', 'portfolio', 'work samples', 'what has he built'],
    response: "Here are some of MD Sarmad's notable projects:\n\n🚀 **E-Commerce Platform** - Full-stack solution with payment integration\n📊 **Task Management App** - Collaborative tool with real-time updates\n🤖 **AI Content Generator** - AI-powered content creation platform\n🏠 **Real Estate Platform** - Modern platform with virtual tours\n\nEach project showcases his full-stack capabilities and modern development practices.",
    followUp: ['Tell me about his experience', 'What are his rates?', 'Can I see his resume?']
  },
  {
    triggers: ['experience', 'background', 'work history', 'career'],
    response: "MD Sarmad has progressive experience in web development:\n\n👨‍💼 **Senior Full Stack Developer** at Tech Innovators Inc. (2022 - Present)\n- Leading development of scalable web applications\n- Mentoring junior developers\n\n💻 **Frontend Developer** at Digital Solutions Ltd. (2020 - 2022)\n- Built responsive web applications\n- Improved performance by 40%\n\n🌱 **Junior Developer** at StartUp Ventures (2019 - 2020)\n- Built and maintained web applications",
    followUp: ['What technologies does he prefer?', 'Is he open to remote work?', 'Can I schedule an interview?']
  },
  {
    triggers: ['available', 'hire', 'opportunity', 'job', 'work', 'freelance', 'contract'],
    response: "Yes! MD Sarmad is currently open to new opportunities. He's interested in:\n\n✅ Full-time positions\n✅ Contract/Freelance work\n✅ Remote or hybrid arrangements\n✅ Challenging projects with modern tech stacks\n\nHe's looking for roles where he can make a meaningful impact and continue growing his expertise.",
    followUp: ['What are his salary expectations?', 'Can I get his resume?', 'How can I contact him directly?']
  },
  {
    triggers: ['resume', 'cv', 'download', 'portfolio'],
    response: "You can get MD Sarmad's resume right now! Just click the 'Get Resume' button in the hero section, or I can trigger the download popup for you. His resume includes detailed information about his experience, projects, and technical skills.",
    followUp: ['Show me more projects', 'What about references?', 'Schedule an interview']
  },
  {
    triggers: ['contact', 'reach', 'email', 'phone', 'schedule', 'interview', 'meet'],
    response: "Great! Here are the best ways to reach MD Sarmad:\n\n📧 **Email**: Use the contact form on this website\n💼 **LinkedIn**: Connect with him on LinkedIn\n📱 **Direct Contact**: Fill out the contact form below and he'll get back to you within 24 hours\n\nHe's very responsive and loves discussing new opportunities!",
    followUp: ['Get his resume', 'Tell me about his rates', 'What projects interest him most?']
  },
  {
    triggers: ['rates', 'salary', 'cost', 'budget', 'price', 'compensation'],
    response: "MD Sarmad's rates are competitive and depend on the project scope and requirements. He offers:\n\n💰 **Hourly Rate**: For short-term projects\n📋 **Project-based**: Fixed pricing for defined scope\n💼 **Full-time**: Open to salary discussions\n\nFor specific rates, please contact him directly through the contact form. He's always willing to discuss terms that work for both parties!",
    followUp: ['Get his resume', 'Contact him directly', 'Tell me about his availability']
  },
  {
    triggers: ['remote', 'location', 'where', 'timezone', 'office'],
    response: "MD Sarmad is flexible with work arrangements:\n\n🌍 **Remote Work**: Fully comfortable with remote collaboration\n🏢 **Hybrid**: Open to hybrid arrangements\n🕐 **Timezone**: Can adapt to different timezones for meetings\n📍 **Location**: Based in [Location] but works globally\n\nHe has extensive experience working with distributed teams and uses modern collaboration tools.",
    followUp: ['What tools does he use?', 'Schedule a call', 'Get his contact info']
  },
  {
    triggers: ['team', 'collaboration', 'leadership', 'mentor'],
    response: "MD Sarmad is an excellent team player and leader:\n\n👥 **Team Leadership**: Currently mentoring junior developers\n🤝 **Collaboration**: Experience with cross-functional teams\n📋 **Project Management**: Familiar with Agile/Scrum methodologies\n🎯 **Communication**: Strong communicator with stakeholders\n\nHe believes in knowledge sharing and creating positive team environments.",
    followUp: ['Tell me about his technical skills', 'Is he available for team lead roles?', 'Get his resume']
  }
];

export const defaultResponse = "I'm here to help you learn more about MD Sarmad! You can ask me about:\n\n• His technical skills and expertise\n• Projects he's worked on\n• His professional experience\n• Availability for new opportunities\n• How to contact him\n• Getting his resume\n\nWhat would you like to know?";

export const welcomeMessage = "👋 Hi! I'm MD Sarmad's AI assistant. I'm here to help answer any questions you might have about his skills, experience, and availability. How can I help you today?";

export function findBestResponse(userMessage: string): string {
  const message = userMessage.toLowerCase();
  
  for (const responseData of chatbotResponses) {
    for (const trigger of responseData.triggers) {
      if (message.includes(trigger.toLowerCase())) {
        return responseData.response;
      }
    }
  }
  
  return defaultResponse;
}

export function getFollowUpSuggestions(userMessage: string): string[] {
  const message = userMessage.toLowerCase();
  
  for (const responseData of chatbotResponses) {
    for (const trigger of responseData.triggers) {
      if (message.includes(trigger.toLowerCase()) && responseData.followUp) {
        return responseData.followUp;
      }
    }
  }
  
  return ['Tell me about his skills', 'Show me his projects', 'Is he available for hire?'];
}