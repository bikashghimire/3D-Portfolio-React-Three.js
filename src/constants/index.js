export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Tuomas Oksanen',
    position: 'Agile Coach at Metso Finland Oy',
    img: 'assets/linkedinavatar.jpg',
    review:
      'I have had the priviledge to work with Bikash in both the same team and in the same organization during the past years. He is a talented young developer who has already demonstrated that he has the needed skillset to be a great developer. He possesses a growth mindset and is always looking for places to improve himself and the team he works in. On top of his technical expertise he has the understanding and appreciation of design and design systems to make digital development better.He is a strong team player and not afraid to step in to take responsibility when that is needed.I can honestly recommend Bikash as team member and a developer for any organization looking for a skilled, motivated and collaborative developer and would be more than happy to work with him again in the future!',
  },
  {
    id: 2,
    name: 'Piia Alavesa',
    position: 'Manager, Design megasystem at Metso Finland Oy',
    img: 'assets/linkedinavatar.jpg',
    review:
      'I have had the pleasure of working with Bikash, and I can say he is a good software developer. His expertise in developing our Design System and supporting all the other product teams has been great. He delivers quality code but also ensures the work is on time and meets the requirements. He is also innovative and willing to try out new things, technology and ways of working. Bikash is a good team player. He can explain technical concepts in a way that is easy to understand benefiting cross-functional collaboration. His attitude and willingness to support and work with colleagues makes him a joy to work with.I highly recommend Bikash for any software development role. He possesses a combination of technical skill, creativity, and teamwork and I would be happy to work with Bikash any time again!',
  },
  {
    id: 3,
    name: 'Aziz Alzayed',
    position: 'Senior Software Engineer at Metso Finland Oy',
    img: 'assets/linkedinavatar.jpg',
    review:
      'I had the pleasure of meeting Bikash while working at Metso.Bikash is incredibly eager to develop himself and always demonstrates a proactive attitude in both learning and contributing.He is highly active and collaborative, always willing to help his colleagues while never hesitating to seek knowledge or ask questions when tackling new challenges. His commitment to personal growth and his positive attitude make him a valuable asset to any team.I’m certain Bikash will excel in his future endeavors, and I wholeheartedly recommend him to any organization looking for a dedicated and talented individual.',
  },
  {
    id: 4,
    name: 'Pawan Singh',
    position: 'Data Analyst at Technotree Corporation',
    img: 'assets/linkedinavatar.jpg',
    review:
      'I have had the privilege of working with Bikash on a group project and as a study partner. His skills as a software developer are exceptional, and I am grateful for his mentorship in my early programming days. Bikash communication skills and helpfulness make him a valuable team member, always pushing for optimal results.What sets Bikash apart is his ability to create an engaging work environment while maintaining high productivity. His extensive technical knowledge, combined with his approachable nature, makes him an excellent resource for any team.I strongly recommend Bikash for any software development role. His technical expertise and interpersonal skills would be an asset to any organization fortunate enough to have him.',
  },
];

export const myProjects = [
  {
    title: 'Podcastr - AI Podcast Platform',
    desc: 'Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.',
    subdesc:
      'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.',
    href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'LiveDoc - Real-Time Google Docs Clone',
    desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
    subdesc:
      'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
    href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'CarePulse - Health Management System',
    desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
    subdesc:
      'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
    href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Horizon - Online Banking Platform',
    desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
    subdesc:
      'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
    href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
  {
    title: 'Imaginify - AI Photo Manipulation App',
    desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
    subdesc:
      'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
    href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      {
        id: 1,
        name: 'React.js',
        path: '/assets/react.svg',
      },
      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      },
      {
        id: 3,
        name: 'TypeScript',
        path: '/assets/typescript.png',
      },
      {
        id: 4,
        name: 'Framer Motion',
        path: '/assets/framer.png',
      },
    ],
  },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: 'Metso Finland Oy',
    pos: 'Software Engineer',
    duration: 'MAY 2023 - Present',
    title:
      'Metso, headquartered in Helsinki, Finland, is a global leader in sustainable technologies for aggregates, minerals processing, and metals refining, with sales of EUR 5.3 billion in 2022. The role involves developing scalable design systems, ensuring quality through automated testing, and collaborating with cross-functional teams. Proficiency in front-end technologies (React, TypeScript, Figma, Git) and frameworks (React, Vue, Angular) is essential. Key responsibilities span product development from inception to post-launch, focusing on reusable UI components and system refinement.',
    icon: '/assets/metso_logo.jpeg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Funky Salsa Oy',
    pos: 'Web Developer',
    duration: 'AUG 2022 - MAR 2023',
    title:
      'Funky Salsa Oy, based in Helsinki, specializes in the bar and beverage industry. As a freelance developer, I contribute by creating innovative solutions like an order-handling website and sales dashboards, optimizing scalability and cross-browser compatibility, and enhancing backend systems with Express.js. My expertise in PHP, JavaScript, and TypeScript supports Funky Salsa digital and operational needs.',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'Integrify Oy',
    pos: 'Full Stack Developer Training Program',
    duration: 'JAN 2022 - JUN 2022',
    title:
      'I completed a six-month intensive full-stack development program at Integrify in 2022, focusing on modern web development technologies like React, TypeScript, NodeJS, and MongoDB. My role involved designing client-server architecture, developing dynamic applications, testing for efficiency, and ensuring cross-platform optimization. I gained expertise in tools and frameworks such as Redux, Firebase, Material UI, and NestJS, along with skills in security principles, DevOps, and Python.',
    icon: '/assets/integify_logo.jpeg',
    animation: 'salute',
  },
  {
    id: 3,
    name: 'Centria R & D Oy',
    pos: 'Intern Software Developer',
    duration: '2019 - 2020',
    title:
      'During my six-month internship at Centria University of Applied Sciences, I contributed to Game Development and Web Development projects. In Game Development, I collaborated on two Arduino-based games for a university event, gaining skills in JIRA, Agile, and C++. For Web Development, I built user interfaces and web applications using HTML, CSS, PHP, and APIs, culminating in a work management tool delivered to a company in Kokkola. This experience deepened my expertise in team collaboration, Agile methodologies, and secure web development practices.',
    icon: '/assets/centrialogo.png',
    animation: 'salute',
  },
];
