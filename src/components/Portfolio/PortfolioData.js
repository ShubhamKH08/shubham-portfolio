const CATEGORIES = [
  'DEVELOPMENT',
  'WEB DESIGN',
  'APPLICATION',
  'DESIGN',
  'MOBILE',
  'COLABORATION',
];

const data = [
  {
    id: 4,
    year: '2022',
    date: '21/3/2022',
    category: 'DEVELOPMENT',
    title: 'AlgoScan: Smart Ai Evaluator ',
    image: 'carsLandingPage.webp',
    technologies: [
      'React.Js',
      'Flask',
      'AIML',
      'RestAPI',
      'MongoDB',
      'Render',
      'Tailwind.CSS',
    ],
    desc: `"AlgoScan" is an AI-powered assessment platform automating grading for efficiency and fairness. Teachers can create tests from
PDFs or online quizzes, while students can submit answers digitally or verbally. AI algorithms ensure consistent grading, and
accessibility features cater to visually impaired students, enhancing inclusivity.
`,
    links: {
      code: 'https://github.com/Tono2007/CarsLandingPage',
      page: 'https://tono2007.github.io/CarsLandingPage/',
    },
  },
  {
    id: 3,
    year: '2023',
    date: '09/05/2023',
    category: 'WEB DEVELOPMENT',
    title: 'Agrimax- Empowering Formers Digitally',
    image: 'movieApp.webp',
    technologies: [
      'React.Js',
      'Flask',
      'Python',
      'RestAPI',
      'MySQL',
      'AWS',
      'Twilio',
      'Netlify',
      'Git',
      'MongoDB',
    ],
    desc: `Agrimax is a digital platform designed to empower farmers with tools and information for optimized crop selection and enhanced access to government updates. Using geolocation technology, farmers can make informed decisions on crop selection based on season, soil quality, and location, ultimately maximizing profits
Additionally, Agrimax serves as a digital repository for government officials, allowing them to efficiently manage farmers' records. Farmers receive timely updates on government news, schemes, and crop advisories via email and text messages, ensuring they stay informed and can make decisions to enhance their farming practices
Agrimax aims to revolutionize farming practices by providing farmers with the necessary tools and information to thrive in an ever-evolving agricultural landscape.
    `,
    links: {
      code: '',
      page: 'https://shubham-hagawane.vercel.app/',
    },
  },
  {
    id: 2,
    year: '2024',
    date: '30/04/2024',
    category: 'WEB DESIGN',
    title: 'OpenCV Food Classification',
    image: 'lolApp.webp',
    technologies: [
      'Machine Learning',
      'Image Processing',
      'Deep Learning',
      'Data Preprocessing',
      'Model Evaluation',
      'Project Management',
      'React.js',
      'Flask',
      'MongoDB',
    ],
    desc: `OpenCV Food Classification refers to the use of OpenCV, a computer vision library, to classify images of food items. This involves
leveraging OpenCV's image processing capabilities along with machine learning or deep learning techniques to recognize and
categorize different types of food based on visual features. The process typically includes data collection, preprocessing, model
training, evaluation, and deployment to create a system capable of automatically identifying and categorizing food items from images
or video streams.`,
    links: {
      code: null,
      page: 'https://master--lol-app.netlify.app/',
    },
  },
  {
    id: 5,
    year: '2024',
    date: '10/03/2024',
    category: ['Deep Learning '],
    title: 'SecureSight - Knife and Weapon Attack Detection',
    image: 'carsLandingPage.webp',
    technologies: [
      ' React.Js',
      'Flask',
      'Python',
      'AIML',
      'Deep Learning',
      'Behavior Detection Module',
      'YOLOv8',
      'Twilio',
      'Git.',
    ],
    desc: `Our project integrates cutting-edge video streaming capabilities with robust machine learning algorithms to accurately identify and predict knife attacks, as well as other weapon-related threats, within bustling environments like malls. Beyond weapon detection, our system analyzes individuals' behavior patterns to determine suspicious activity and assess potential threats. Moreover, it seamlessly integrates with databases to cross-reference individuals' identities with past criminal records, enabling comprehensive threat assessment. Upon detection of a potential threat, our system promptly alerts both higher authorities and on-site security personnel, providing them with real-time information, risk assessment scores, and pertinent background information. This proactive approach ensures timely intervention, minimizing the risk of harm and enhancing overall security measures within the premises.
    Developed a system to detect knife attacks in high-traffic areas, analyzing behavior and criminal records. Provides instant alerts to authorities, improving security and response times.
`,
    links: {
      code: 'https://github.com/Tono2007/pokedex',
      page: 'https://pokedex-tono2007.vercel.app/',
    },
  },
  {
    id: 7,
    year: '2023',
    date: '20/12/2023',
    category: ['WEB DEVELOPMENT'],
    title: 'Arriva-railway announcement dissemination ',
    image: 'movieApp.webp',
    technologies: [
      'React.Js',
      'Flask',
      'Python',
      'RestAPI',
      'MySQL',
      'AWS',
      'Twilio',
      'Git',
      'MongoDB',
    ],
    desc: `Arriva is railway announcement dissemination platform. Arriva's innovative approach integrates NLP chatbots and AI for predictive maintenance, ensuring a seamless travel experience. With
real-time updates and a focus on passenger satisfaction, it revolutionizes railway travel for all.
`,
    links: {
      code: 'https://github.com/ShubhamKH08/SIH-React-Front-End',
      page: 'https://github.com/ShubhamKH08/SIH-React-Front-End',
    },
  },
  {
    id: 101,
    year: '2022',
    date: '05/11/2022',
    category: 'WEB DESIGN',
    title: 'Medic',
    image: 'pokedex.webp',
    technologies: [
      'Spring MVC',
      'HTML',
      'CSS',
      'Js',
      'MySql',
      'RestAPI',
      'JSP',
      'Tomcat',
    ],
    desc: `Medic is a complete hospital management platform allowing patients to book appointments, doctors to manage schedules, and staff
to oversee hospital operations, including laboratory services.
 `,
    links: {
      code: 'https://github.com/ShubhamKH08/Medic',
      page: 'https://github.com/ShubhamKH08/Medic',
    },
  },
  {
    id: 102,
    year: '2023',
    date: '21/05/2023',
    category: 'APP DEVELOPMENT',
    title: 'Industrio',
    image: 'slimMuiTemplate.webp',
    technologies: [
      'Jetpack Compose',
      'Kotlin ',
      'Firebase',
      'Google Maps',
      'Algolia',
    ],
    desc: `Industrio is an innovative platform that connects users with skilled professionals for machinery maintenance, repair, and calibration services. It offers a centralized solution to streamline finding and hiring technicians, reducing downtime and repair costs. With features like live location tracking and on-demand technician hiring, Industrio ensures timely, efficient service. The platform also provides job opportunities for freelancers and supports the growing demand for on-demand services. Industrio aims to enhance customer satisfaction and improve service delivery in the machinery sector.`,

    links: {
      code: 'https://github.com/ShubhamKH08/Industrio',
      page: 'https://github.com/ShubhamKH08/Industrio',
    },
  },
];

export default data;
