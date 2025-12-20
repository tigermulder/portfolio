import React, { createContext, useContext, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';

// 언어별 텍스트 데이터
const translations = {
  ko: {
    // Navigation
    home: '홈',
    about: '소개',
    archive: '아카이브',
    skills: '기술',
    chronology: '연혁',
    portfolio: '포트폴리오',
    contact: '연락처',
    
    // Home section
    homeTitle: 'Hyun Sung',
    homeSubtitle: '프론트엔드 개발자',
    homeDescription: '떠다니는 데이터를 사용자에게 잘 연결시켜 flow를 만드는 프론트엔드 개발자입니다.',
    homeButton: 'stable and composed manner',
    homeAlert: '💻 깔끔한 코드와 좋은 에너지로! 함께 멋진 프로젝트를 만들어보시죠! 🚀',
    
    // About section
    aboutTitle: '자기소개',
    aboutSubtitle: '나의 소개',
    aboutDescription: '안녕하세요 프론트엔드 개발자 박현성입니다. 저는 복잡한 데이터와 사용자 사이의 연결고리 역할을 하며, 직관적이고 자연스러운 흐름을 만드는 것을 가장 중요하게 생각합니다. 단순히 기능을 구현하는 것을 넘어, 사용자가 원하는 정보에 쉽게 도달할 수 있도록 데이터의 흐름을 설계하고 최적화하는 것이 저의 핵심 가치입니다. 기술은 도구일 뿐, 진정한 가치는 사용자와 데이터를 매끄럽게 연결하는 경험을 만드는 것입니다.',
    aboutYears: '5년 4개월',
    aboutExperience: '경험',
    aboutProjects: '9+',
    aboutProjectsText: '완료된 프로젝트',
    aboutSupport: '24/7',
    aboutSupportText: '온라인 지원',
    downloadCV: '이력서 다운로드',
    
    // Skills section
    skillsTitle: '기술',
    skillsSubtitle: '나의 기술 수준',
    frontend: '프론트엔드 개발',
    backend: '백엔드 개발',
    communication: '커뮤니케이션',
    
    // Archive section
    archiveTitle: '아카이브',
    archiveSubtitle: '나의 아카이브',
    github: 'GitHub',
    githubDesc: 'GitHub 개인저장소입니다 알고리즘, 프로젝트등 저의 소스코드가있습니다',
    velog: 'Velog',
    velogDesc: '자료구조 및 지식공부후 기록을 남기고있는 Tech blog입니다',
    viewMore: '더 보기',
    
    // Chronology section
    chronologyTitle: '연혁',
    chronologySubtitle: '나의 연혁',
    education: '교육',
    experience: '경험',
    project: '프로젝트',
    
    // Portfolio section
    portfolioTitle: '포트폴리오',
    portfolioSubtitle: '나의 포트폴리오',
    github_: 'GitHub',
    
    // Contact section
    contactTitle: '연락하기',
    contactSubtitle: '연락 방법',
    email: '이메일',
    phone: '전화',
    location: '위치',
    contactMe: '연락하기',
    
    // Common
    name: '이름',
    email_: '이메일',
    message: '메시지',
    send: '보내기',
    copyEmail: '이메일 복사됨!',
    sendSuccess: '메시지가 성공적으로 전송되었습니다!',
    sendError: '메시지 전송에 실패했습니다.',
    
    // Footer section
    footerAbout: '소개',
    footerProject: '프로젝트',
    footerTestimonials: '추천사',
    footerCopyright: '모든 권리 보유',
    
    // Accessibility
    language: '언어',
    fontSize: '폰트 크기',
    toggleTheme: '테마 전환',
    small: '작게',
    medium: '보통',
    large: '크게'
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About',
    archive: 'Archive',
    skills: 'Skills',
    chronology: 'Chronology',
    portfolio: 'Portfolio',
    contact: 'Contact',
    
    // Home section
    homeTitle: 'Hyun Sung',
    homeSubtitle: 'Frontend Developer',
    homeDescription: 'A frontend developer who creates flow by connecting floating data well to users.',
    homeButton: 'stable and composed manner',
    homeAlert: '💻 With clean code and good energy! Let\'s create amazing projects together! 🚀',
    
    // About section
    aboutTitle: 'About Me',
    aboutSubtitle: 'My Introduction',
    aboutDescription: 'Hello, I am Park Hyun Sung, a frontend developer. I serve as a bridge between complex data and users, focusing on creating intuitive and natural flows. Beyond simply implementing features, I design and optimize data flows so users can easily reach the information they want. This is my core value. Technology is just a tool; the true value lies in creating experiences that seamlessly connect users and data.',
    aboutYears: '4Y 9M',
    aboutExperience: 'Experience',
    aboutProjects: '20+',
    aboutProjectsText: 'Completed Projects',
    aboutSupport: '24/7',
    aboutSupportText: 'Online Support',
    downloadCV: 'Download CV',
    
    // Skills section
    skillsTitle: 'Skills',
    skillsSubtitle: 'My Technical Level',
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    communication: 'Communication',
    
    // Archive section
    archiveTitle: 'Archive',
    archiveSubtitle: 'My Archive',
    github: 'GitHub',
    githubDesc: 'My personal GitHub repository containing algorithms, projects and my source code',
    velog: 'Velog',
    velogDesc: 'Tech blog where I record my studies on data structures and knowledge',
    viewMore: 'View More',
    
    // Chronology section
    chronologyTitle: 'Chronology',
    chronologySubtitle: 'My Chronology',
    education: 'Education',
    experience: 'Experience',
    project: 'Project',
    
    // Portfolio section
    portfolioTitle: 'Portfolio',
    portfolioSubtitle: 'My Portfolio',
    github_: 'GitHub',
    
    // Contact section
    contactTitle: 'Contact Me',
    contactSubtitle: 'Get In Touch',
    email: 'Email',
    phone: 'Phone',
    location: 'Location',
    contactMe: 'Contact Me',
    
    // Common
    name: 'Name',
    email_: 'Email',
    message: 'Message',
    send: 'Send',
    copyEmail: 'Email copied!',
    sendSuccess: 'Message sent successfully!',
    sendError: 'Failed to send message.',
    
    // Footer section
    footerAbout: 'About',
    footerProject: 'Project',
    footerTestimonials: 'Testimonials',
    footerCopyright: 'All rights reserved',
    
    // Accessibility
    language: 'Language',
    fontSize: 'Font Size',
    toggleTheme: 'Toggle Theme',
    small: 'Small',
    medium: 'Medium',
    large: 'Large'
  }
};

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useLocalStorage('portfolio-language', 'en');
  
  // 언어 변경 시 body에 data-language 속성 설정
  useEffect(() => {
    document.body.setAttribute('data-language', language);
  }, [language]);
  
  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'ko' ? 'en' : 'ko');
  };
  
  const t = (key) => {
    return translations[language]?.[key] || key;
  };
  
  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t,
    translations
  };
  
  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}; 