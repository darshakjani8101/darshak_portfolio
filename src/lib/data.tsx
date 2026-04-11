import { Github, Twitter, Linkedin } from 'lucide-react';

import headShot from '/public/images/myPics/front-pic.jpg';
import coverPicture from '/public/images/myPics/pic.jpg';

import LogoJavascript from '/public/logos/icon-javascript.svg';
import LogoTypescript from '/public/logos/icon-typescript.svg';
import LogoReact from '/public/logos/icon-react.svg';
import LogoNodejs from '/public/logos/icon-nodejs.svg';
import LogoExpress from '/public/logos/icon-express.svg';
import LogoExpressLight from '/public/logos/icon-express-light.svg';
import LogoMongoDB from '/public/logos/icon-mongodb.svg';
import LogoTailwindcss from '/public/logos/icon-tailwindcss.svg';
import LogoGit from '/public/logos/icon-git.svg';
import LogoFluentUI from '/public/logos/icon-fluentui.svg';
import LogoMaterialUI from '/public/logos/icon-materialui.svg';
import LogoHtml from '/public/logos/icon-html5.svg';
import LogoAzure from '/public/logos/icon-azure.svg';
import LogoCICD from '/public/logos/icon-cicd.svg';
import LogoAzureDevOps from '/public/logos/icon-azure-devops.svg';
import LogoAccessibilityLight from '/public/logos/icon-accessibility-light.svg';
import LogoAccessibilityDark from '/public/logos/icon-accessibility-dark.svg';
import LogoNVDA from '/public/logos/icon-nvda.svg';
import LogoSelenium from '/public/logos/icon-selenium.svg';
import LogoJest from '/public/logos/icon-jest.svg';
import LogoJWT from '/public/logos/icon-jwt.svg';
import LogoOAuth from '/public/logos/icon-oauth.svg';
import LogoGraphQL from '/public/logos/icon-graphql.svg';
import LogoCSharp from '/public/logos/icon-csharp.svg';
import LogoDotNet from '/public/logos/icon-dotnet.svg';
import LogoPython from '/public/logos/icon-python.svg';
import LogoPLSQL from '/public/logos/icon-plsql.svg';
import LogoOracleDB from '/public/logos/icon-oracledb.svg';
import LogoPostgreSQL from '/public/logos/icon-postgresql.svg';
import LogoInformatica from '/public/logos/icon-informatica.svg';
import LogoServiceNow from '/public/logos/icon-servicenow.svg';
import LogoGithubCopilot from '/public/logos/icon-github.svg';

import LogoInfosys from '/public/logos/logo-infosys.svg';
import LogoInfosysDark from '/public/logos/logo-infosys-dark.svg';
import LogoTCS from '/public/logos/logo-tcs.svg';
import LogoTCSDark from '/public/logos/logo-tcs-dark.svg';

import OPENAI_CHATBOT from '/public/images/projectPics/openai_chatbot.png';
import BLOG_APP from '/public/images/projectPics/blog_app.png';
import BRAINWAVE_UIUX from '/public/images/projectPics/brainwave_uiux.png';
import THREED_PORTFOLIO from '/public/images/projectPics/3d_portfolio.png';
import NIKE_LANDING from '/public/images/projectPics/nike_landing.png';
import ECOMMERCE_APP from '/public/images/projectPics/ecommerce_app.png';

import {
    ExperienceDetails,
    ProjectDetails,
    TechDetails,
    TestimonialDetails,
    AboutMeDetails,
    CertificationDetails,
} from '@/lib/types';

export const LOGO_TEXT = '<DJ />';

export const SITE_METADATA = {
    title: 'Darshak Jani | Full Stack Developer From Pune, India.',
    description: 'A self-proclaimed designer who specializes in full stack development (Vue.js & Node.js), from Pune, India.',
    url: 'https://omahir.dev',
    keywords: [
        'Frontend Developer',
        'Full Stack Developer',
        'React Developer',
        'Next.js Developer',
    ],
    creator: 'Darshak Jani',
};

export const FILE_URLS = {
    resume: 'files/Darshak-Jani-Resume.pdf',
    headShot: headShot,
    coverPicture: coverPicture,
};

export const HERO_CONTENT = {
    heading: "Hi, I'm Darshak",
    bio: [
        {
            // For text with no links, the text should be in format of array of text segments.
            // Even segments will be normal text and odd segments will be highlighted text.
            // This is to make sure that we can style the highlighted text differently from the rest of the text.
            text: [
                "Frontend React Developer with ",
                "over 5 years",
                " of professional experience specializing in building modular and scalable frontend architectures using ",
                "React.js, TypeScript",
                " and ",
                "Fluent UI",
                `. Proven expertise in implementing Selenium automation testing in fast - paced environments. 
                Experienced in working in an Agile development environment and passionate about delivering optimal user
                experiences through efficient UI design and dedicated to enhancing team performance with excellent project management skills.`,                
            ]
        },

        // Text should be in format of array of text (broken at where you need to add link) and link objects.
        // Link object should have url and label.
        // This is to make sure that we can style the link differently from the rest of the text.
        //{
        //    text: ['Visit', ' to learn DevOps, AWS, and Vue.js.'],
        //    link: { url: 'https://blog.omahir.com', label: 'My Blogs' },
        //},
    ],
    button: {
        label: 'Visit My LinkedIn',
        url: 'https://www.linkedin.com/in/darshakjani8101/',
    },
    location: 'Pune, India',
    availabilityStatus: 'Available'
};

export const EXTERNAL_LINKS = {
    GITHUB: 'https://github.com/shahsagarm',
    GITHUB_REPO: 'https://github.com/shahsagarm/omahir.dev',
    TWITTER: 'https://twitter.com/shahsagarm',
    FIGMA: 'https://www.figma.com/@shahsagarm',
    INSTAGRAM: '',
    FIGMA_FILE:
        'https://www.figma.com/community/file/1262992249991763120/Personal-Portfolio-Website-Template-%7C-Mobile-%26-Desktop',
};

export const ABOUT_ME: AboutMeDetails = {
    title: 'Curious about me? Here you have it:',
    paragraphs: [
        'I am Darshak, a skilled professional with a diverse set of technical capabilities. With proficiency in VueJs, Vanilla Js, NodeJs, and AWS, I bring two years of valuable experience to the table. My expertise lies in the dynamic intersection of web development and DevOps, where I excel in crafting web applications with a keen eye for detail, utilizing both plain and Tailwind CSS for visually appealing user interfaces.',
        'Throughout my career, I have actively worked with various AWS services, showcasing my comprehensive understanding of cloud architecture. From AWS CloudFront and AWS API Gateway to AWS DynamoDB, AWS CodeBuild, and AWS CodePipeline, I leverage these tools to seamlessly blend front-end development with server-side technologies. My versatility extends to Vue3, Tailwind CSS, JavaScript, AWS Cognito, OKTA, and serverless architecture, allowing me to tackle diverse challenges in the tech landscape.',
        'A highlight of my achievements includes leveraging AWS Lambda for multiple purposes, serving as an authorizer and adeptly generating signed URLs. My familiarity with the AWS-SDK underscores my proficiency in seamlessly integrating AWS services into applications. With a two-year track record of success, I am poised to contribute my skills to innovative projects in web development, DevOps, and AWS integration.',
    ],
    //quickBitsTitle: 'Finally, some quick bits about me.',
    //quickBits: [
    //    'HashiCorp Certified: Terraform Associate',
    //    'AWS Certified Cloud Practitioner Certified',
    //    'AWS Certified Solutions Architect - Associate Certified',
    //    'AZ-900: Microsoft Azure Certified',
    //],
};

export const NAV_LINKS = [
    {
        label: 'About',
        href: '#about',
    },
    {
        label: 'Skills',
        href: '#skills',
    },
    {
        label: 'Experience',
        href: '#experience',
    },
    {
        label: 'Certifications',
        href: '#certifications',
    },
    {
        label: 'Projects',
        href: '#projects',
    },
    {
        label: 'Contact',
        href: '#contact',
    },
];

export const SECTION_DESCRIPTIONS = {
    skills: 'The skills, tools and technologies I am really good at.',
    experience: 'Here is a quick summary of my most recent experiences.',
    certifications: 'Professional certifications that validate my expertise in cloud technologies and DevOps practices.',
    projects: 'Some of the noteworthy projects I have worked on.',
    contact: 'What\'s next? Feel free to reach out to me if you are looking for a developer, have a query, or simply want to connect.',
};

export const SOCIAL_LINKS = [
    {
        icon: Github,
        url: 'https://github.com/darshakjani8101',
    },
    //{
    //    icon: Twitter,
    //    url: 'https://twitter.com/om_ahirr',
    //},
    {
        icon: Linkedin,
        url: 'https://www.linkedin.com/in/darshakjani8101/',
    }

];

export const CONTACT_INFO = {
    email: 'darshakjani8101@gmail.com',
    phone: '+91 9016178101',
};

export const TECHNOLOGIES: TechDetails[] = [
    {
        label: 'Javascript',
        logo: LogoJavascript,
        url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
    },
    {
        label: 'Typescript',
        logo: LogoTypescript,
        url: 'https://www.typescriptlang.org/',
    },
    {
        label: 'React JS',
        logo: LogoReact,
        url: 'https://react.dev/',
    },
    {
        label: 'Fluent UI',
        logo: LogoFluentUI,
        url: 'https://developer.microsoft.com/en-us/fluentui',
    },
    {
        label: 'Material UI',
        logo: LogoMaterialUI,
        url: 'https://mui.com/',
    },    
    {
        label: 'Node.js',
        logo: LogoNodejs,
        url: 'https://nodejs.org/en',
    },
    {
        label: 'Express.js',
        logo: LogoExpress,
        darkModeLogo: LogoExpressLight,
        url: 'https://expressjs.com/',
    },
    {
        label: 'MongoDB',
        logo: LogoMongoDB,
        url: 'https://www.mongodb.com/',
    },
    {
        label: 'HTML',
        logo: LogoHtml,
        url: 'https://developer.mozilla.org/en-US/docs/Web/HTML',
    },
    {
        label: 'Tailwind CSS',
        logo: LogoTailwindcss,
        url: 'https://tailwindcss.com/',
    },
    {
        label: 'Git',
        logo: LogoGit,
        url: 'https://git-scm.com/',
    },
    {
        label: 'CI/CD Pipelines',
        logo: LogoCICD,
        url: 'https://www.geeksforgeeks.org/devops/what-is-ci-cd/',
    },
    {
        label: 'Azure',
        logo: LogoAzure,
        url: 'https://azure.microsoft.com/',
    },    
    {
        label: 'Azure DevOps',
        logo: LogoAzureDevOps,
        url: 'https://azure.microsoft.com/en-us/services/devops/',
    },
    {
        label: 'Accessibility',
        logo: LogoAccessibilityLight,
        darkModeLogo: LogoAccessibilityDark,
        url: 'https://www.w3.org/WAI/',
    },
    {
        label: 'NVDA',
        logo: LogoNVDA,
        url: 'https://www.nvaccess.org/',
    },
    {
        label: 'Selenium',
        logo: LogoSelenium,
        url: 'https://www.selenium.dev/',
    },
    {
        label: 'Jest',
        logo: LogoJest,
        url: 'https://jestjs.io/',
    },
    {
        label: 'JWT',
        logo: LogoJWT,
        url: 'https://jwt.io/',
    },
    {
        label: 'OAuth',
        logo: LogoOAuth,
        url: 'https://oauth.net/',
    },
    {
        label: 'GraphQL',
        logo: LogoGraphQL,
        url: 'https://graphql.org/',
    },
    {
        label: 'C#',
        logo: LogoCSharp,
        url: 'https://docs.microsoft.com/en-us/dotnet/csharp/',
    },
    {
        label: '.NET',
        logo: LogoDotNet,
        url: 'https://docs.microsoft.com/en-us/dotnet/',
    },
    {
        label: 'Python',
        logo: LogoPython,
        url: 'https://www.python.org/',
    },
    {
        label: 'PLSQL',
        logo: LogoPLSQL,
        url: 'https://www.oracle.com/database/technologies/appdev/plsql.html',
    },
    {
        label: 'Oracle DB',
        logo: LogoOracleDB,
        url: 'https://www.oracle.com/database/',
    },
    {
        label: 'PostgreSQL',
        logo: LogoPostgreSQL,
        url: 'https://www.postgresql.org/',
    },
    {
        label: 'Informatica',
        logo: LogoInformatica,
        url: 'https://www.informatica.com/',
    },
    {
        label: 'ServiceNow',
        logo: LogoServiceNow,
        url: 'https://www.servicenow.com/',
    },
    {
        label: 'Github Copilot',
        logo: LogoGithubCopilot,
        url: 'https://github.com/features/copilot',
    },
];

export const EXPERIENCES: ExperienceDetails[] = [
    {
        logo: LogoInfosys,
        darkModeLogo: LogoInfosysDark,
        logoAlt: 'Infosys logo',
        position: 'Senior React Developer (Microsoft - CELA)',
        startDate: new Date(2022, 10),
        currentlyWorkHere: true,
        summary: ['Worked as a Intern (VueJs, TailwindCSS , NodeJs/ExpressJs).'],
        projectdata: [
            {
                name: 'Microsoft StretchX',
                description: [
                    `Developed Microsoft StretchX, a modular, scalable micro frontend architecture using React, 
                    TypeScript, Fluent UI and Coherence Design System.`,
                    `Implemented dynamic script execution, ensuring seamless updates and maintainability 
                    within shell & extensions.`,
                    `Improved performance and modularization, allowing independent deployment and 
                    versioning of extensions.`
                ],
                technologies: ['js', 'ts', 'react', 'vue', 'nodejs', 'expressjs', 'mongodb', 'aws', 'socket.io', 'sass', 'tailwindcss', 'storybook', 'git', 'jenkins', 'kubernetes']
            },
            {
                name: `Dynamic Forms Renderer`,
                description: [
                    `Developed a Dynamic Forms Renderer package and published inside Microsoft’s internal 
                    package registry, enabling various projects to render JSON-based dynamic forms.`,
                    `Allowed applications to configure custom questions, input types, validations, and 
                    conditional rendering through a standardized schema.`,
                    `Ensured seamless integration with Fluent UI and enabled accessibility compliance 
                    by implementing ARIA attributes and ensuring compatibility with screen readers like NVDA.`,
                ],
                technologies: ['js', 'ts', 'react', 'vue', 'nodejs', 'expressjs', 'mongodb', 'aws', 'socket.io', 'sass', 'tailwindcss', 'storybook', 'git', 'jenkins', 'kubernetes']
            },
            {
                name: `Selenium Automation Test Suite`,
                description: [
                    `Designed and implemented a generalized Selenium automation test suite using Jest 
                    and Node.js for various applications built with Fluent UI and Coherence Design System.`,
                    `Created an intelligent interaction mechanism to dynamically detect and interact with 
                    UI elements such as spinner, buttons, input fields, dropdowns, and dialogs.`,
                    `Integrated the test suite with CI/CD pipelines in Azure DevOps, ensuring automated 
                    testing in a headless browser environment.`
                ],
                technologies: ['js', 'ts', 'react', 'vue', 'nodejs', 'expressjs', 'mongodb', 'aws', 'socket.io', 'sass', 'tailwindcss', 'storybook', 'git', 'jenkins', 'kubernetes']
            }
        ]
    },
    {
        logo: LogoTCS,
        darkModeLogo: LogoTCSDark,
        logoAlt: 'TCS logo',
        position: 'Frontend Developer (GE - Power & Renewable Energy)',
        startDate: new Date(2019, 7),
        endDate: new Date(2022, 10),
        summary: ['Worked as a Intern (VueJs, TailwindCSS , NodeJs/ExpressJs).'],
        projectdata: [
            {
                name: 'PMO - Real Track',
                description: [
                    `Designed and developed Real Track, a React.js, Redux & Material UI application to 
                    track the complete order lifecycle of GE Power equipment.`,
                    `Provided real-time tracking of boilers, generators, turbines and other equipment 
                    from manufacturing to installation at customer power plants.`,
                    `Integrated Redux state management to enhance data flow and optimize performance 
                    for large-scale datasets.`
                ],
                technologies: ['js', 'ts', 'react', 'vue', 'nodejs', 'expressjs', 'mongodb', 'aws', 'socket.io', 'sass', 'tailwindcss', 'storybook', 'git', 'jenkins', 'kubernetes']
            },
            {
                name: `Other Roles & Responsibilities`,
                description: [
                    `Worked on support projects, managing React.JS, AngularJS, Oracle PLSQL, Informatica 
                    ETL and Java Spring Boot tasks using ServiceNow for ticketing and issue resolution.`,
                    `Gained in-depth expertise in React.js, transitioning from support to development roles.`,
                    `Developed problem-solving and communication skills, interacting with American & European 
                    business owners & stakeholders to understand and refine requirements.`,
                ],
                technologies: ['js', 'ts', 'react', 'vue', 'nodejs', 'expressjs', 'mongodb', 'aws', 'socket.io', 'sass', 'tailwindcss', 'storybook', 'git', 'jenkins', 'kubernetes']
            }
        ]
    },
];

export const PROJECTS: ProjectDetails[] = [
    {
        name: 'OpenAI Chatbot',
        description:
            `This is an AI Chatbot application, inspired by ChatGPT, by using MERN Stack and OpenAI.
            It's a customized chatbot where each message of the user is stored in DB and can be retrieved and deleted.`,
        url: 'https://openai-chatbot-bxaa.onrender.com/',
        githubUrl: 'https://github.com/darshakjani8101/OpenAI_Chatbot',
        previewImage: OPENAI_CHATBOT,
        technologies: [
            'MERN Stack', 'TypeScript', 'Material UI', 'JWT Tokens', 'HTTP-Only Cookies'
        ],
    },
    {
        name: 'devBlogs - A Blogging Platform for Developers',
        description:
            `This application is built using the MERN stack (MongoDB, Express.js, React.js, Node.js),
            GraphQL, and Material UI. It provides functionalities for user authentication, creating,
            adding, updating, and deleting blogs, as well as adding and deleting comments on blogs.`,
        url: 'https://dev-blog-yy15.onrender.com/',
        githubUrl: 'https://github.com/darshakjani8101/Blog_Application',
        previewImage: BLOG_APP,
        technologies: [
            'MERN Stack', 'TypeScript', 'Material UI', 'GraphQL'
        ],
    },
    {
        name: 'Brainwave - Modern UI/UX website',
        description:
            `Brainwave - Modern UI/UX website, developed using React.js and Tailwind CSS, exemplifies
            modern UI/UX principles. Its sleek design, seamless animations, and overall user experience
            set a high standard, serving as a reference or inspiration for future modern applications or
            websites in general.`,
        url: 'https://brainwave-ui-ux-design.web.app/',
        githubUrl: 'https://github.com/darshakjani8101/Brainwave_UI_UX',
        previewImage: BRAINWAVE_UIUX,
        technologies: [
            'React.js', 'Vite', 'Tailwind CSS', 'UI/UX Design'
        ],
    },
    {
        name: '3D Developer Portfolio',
        description:
            `This project is a showcase of my skills, work experience and projects, combining the power of React,
            Tailwind CSS, Three.js, and Framer Motion to create an immersive and visually appealing experience.`,
        url: 'https://darshak-jani.web.app/',
        githubUrl: 'https://github.com/darshakjani8101/3D_Developer_Portfolio',
        previewImage: THREED_PORTFOLIO,
        technologies: [
            'React.js', 'Vite', 'Tailwind CSS', 'Three.js', 'React Three Fiber', 'React Three Drei', 'Email JS'
        ],
    },
    {
        name: 'Nike Landing Page',
        description:
            `This project is a responsive landing page inspired by Nike's sleek design, built using React.js and
            styled with Tailwind CSS. With a focus on simplicity and elegance, this landing page aims to showcase
            the latest products from Nike in an engaging and visually appealing manner.`,
        //url: 'https://darshak-jani.web.app/',
        githubUrl: 'https://github.com/darshakjani8101/nike_landing_page',
        previewImage: NIKE_LANDING,
        technologies: [
            'React.js', 'Tailwind CSS'
        ],
    },
    {
        name: 'E-commerce Platform',
        description:
            `Explore a seamless shopping experience with intuitive UI, secure authentication, and a robust backend.
            Shop for your favorite products, manage your cart, and checkout with ease.`,
        //url: 'https://darshak-jani.web.app/',
        githubUrl: 'https://github.com/darshakjani8101/mern-ecommerce-code',
        previewImage: ECOMMERCE_APP,
        technologies: [
            'MERN Stack', 'Bootstrap', 'JWT Tokens', 'Braintree Payment Gateway'
        ],
    }
];

export const CERTIFICATIONS: CertificationDetails[] = [
    {
        name: 'Microsoft Certified: Azure AI Fundamentals',
        organization: 'Microsoft Azure',
        description: 'Foundational knowledge of Azure artificial intelligence concepts.',
        issueDate: new Date(2026, 2),
        //expiryDate: new Date(2026, 0),
        url: 'https://learn.microsoft.com/en-us/users/darshakjani-7215/credentials/3ccf6f3e712067a2',
    },
    {
        name: 'Microsoft Certified: Azure Fundamentals',
        organization: 'Microsoft Azure',
        description: 'Cloud architecture and Azure services expertise',
        issueDate: new Date(2023, 0),
        //expiryDate: new Date(2027, 0),
        url: 'https://learn.microsoft.com/en-us/users/darshakjani-7215/credentials/21e92bc40f370293',
    },
    {
        name: 'MTA: Database Fundamentals',
        organization: 'Microsoft',
        description: 'Database fundamentals and concepts',
        issueDate: new Date(2016, 10),
        //expiryDate: new Date(2027, 0),
        url: 'https://www.credly.com/badges/765b1d52-db7a-48c9-bd3e-4aeafcbc7565/public_url',
    }
];

export const TESTIMONIALS: TestimonialDetails[] = [];
