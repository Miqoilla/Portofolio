import { mobile, backend, creator, web, javascript, html, css, tailwind, nodejs, git, figma, python, php,  suraloka, dev, steamlit, Google, MojadiApp, Amikom, cs50, linkedin, Suraloka, ci, photoshop, laravel, ionic } from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "education",
    title: "Education",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Artificial Intelligence",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "UIUX",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "php",
    icon: php,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "python",
    icon: python,
  },
  {
    name: "ionic",
    icon: ionic,
  },
  {
    name: "laravel",
    icon: laravel,
  },
  {
    name: "codeigniter",
    icon: ci,
  },
  {
    name: "photoshop",
    icon: photoshop,
  },
];

const experiences = [
  {
    title: "Laravel Developer",
    company_name: "Suraloka Interactive Zoo (internship)",
    icon: Suraloka,
    iconBg: "#383E56",
    date: "February 2024 - June 2024",
    points: [
      "Developing and maintaining web applications using Laravel and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality web applications.",
      "Designing and implementing backend services and APIs to support various web functionalities.",
      "Ensuring the performance, quality, and responsiveness of applications.",
      "Writing clean, maintainable, and efficient code following best practices and standards.",
      "Participating in code reviews and providing constructive feedback to other developers.",
      "Troubleshooting and debugging issues, and optimizing applications for maximum speed and scalability.",
      "Implementing security and data protection measures."
    ],
  },
  
];

const education = [
  {
    course: "Associate Degree in Information Technology",
    institution: "University of Amikom Yogyakarta (2022-2025)",
    image: Amikom,
    description: ["Comprehensive study of information technology fundamentals", "Includes software development, networking, and data management", "Focuses on practical skills and theoretical knowledge"],
  },
  {
    course: "Artificial Intelligence",
    institution: "Mojadi Aplikasi Indonesia (2024)",
    image: MojadiApp,
    description: ["Study of AI concepts including machine learning and deep learning.", "Hands-on experience with AI tools and frameworks.", "Focus on practical applications in real-world scenarios."],
  },
  {
    course: "Cyber Security",
    institution: "Mojadi Aplikasi Indonesia (2024)",
    image: MojadiApp,
    description: ["Comprehensive understanding of cybersecurity principles and practices.", "Techniques for protecting systems from cyber threats and attacks.", "Practical skills in implementing security measures and protocols."],
  },

  {
    course: "AI-Powered Performance Ads Certification",
    institution: "Google (2024)",
    image: Google,
    description: ["In-depth understanding of AI-driven advertising strategies and techniques.", "Hands-on experience with AI tools for optimizing ad performance.", "Knowledge of analytics and metrics to measure ad effectiveness."],
  },
  {
    course: "Web Programming with Python and JavaScript",
    institution: "CS50's-edX (2023-2024)",
    image: cs50,
    description: ["Fundamentals of web development using Python and JavaScript.", "Hands-on projects involving both server-side and client-side scripting.", "Experience with web frameworks and libraries for building dynamic websites."],
  },
  {
    course: "Career Essentials in Generative AI",
    institution: "Microsoft & LinkedIn (2023)",
    image: linkedin, // Ganti dengan path gambar logo Microsoft dan LinkedIn Anda
    description: [
      "Fundamental concepts of generative AI and its applications in various industries.",
      "Practical skills in using generative AI tools and platforms.",
      "Insights into career opportunities and industry trends related to generative AI."
    ],
  }
  ];
  

const projects = [
  {
    name: "Suraloka Interactive Zoo",
    description:
      "Suraloka Interactive Zoo is a tourist destination that focuses on conservation and education. This website is a primary means of providing information to visitors about the animal and plant collections and to purchase merchandise.",
    tags: [
      {
        name: "php",
        color: "blue-text-gradient",
      },
      {
        name: "laravel",
        color: "green-text-gradient",
      },
      {
        name: "RestAPI",
        color: "pink-text-gradient",
      },
    ],
    image: suraloka,
    source_code_link: "https://github.com/Miqoilla/Suraloka-Apps",
  },
  {
    name: "DevNews",
    description: "DevNews is a hybrid news app built with Ionic Framework and newsapi.org, offering the latest news across various categories and a favorites feature with a responsive design.",
    tags: [
      {
        name: "Ionic",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: dev,
    source_code_link: "https://github.com/Miqoilla/News-Apps-Ionic-API",
  },
  {
    name: "Co2 Emissions Forecast in Canada ",
    description: "This app predicts CO2 emissions in Canada using current data, helping users monitor trends and analyze environmental impacts.",
    tags: [
      {
        name: "python",
        color: "blue-text-gradient",
      },
      {
        name: "random forest",
        color: "green-text-gradient",
      },
      {
        name: "streamlit",
        color: "pink-text-gradient",
      },
    ],
    image: steamlit,
    source_code_link: "https://github.com/Miqoilla/Streamlit_Emissions-CO2",
  },
];

export { services, technologies, education, experiences, projects };
