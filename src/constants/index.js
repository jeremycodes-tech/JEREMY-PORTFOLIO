const navLinks = [
  {
    name: "Work",
    link: "#work",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Testimonials",
    link: "#testimonials",
  },
];

const words = [
  { text: "Vision", imgPath: "/images/ideas.svg" },
  { text: "Plans", imgPath: "/images/concepts.svg" },
  { text: "Blueprints", imgPath: "/images/designs.svg" },
  { text: "Solutions", imgPath: "/images/code.svg" },
  { text: "Vision", imgPath: "/images/ideas.svg" },
  { text: "Plans", imgPath: "/images/concepts.svg" },
  { text: "Blueprints", imgPath: "/images/designs.svg" },
  { text: "Solutions", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 2, suffix: "+", label: "Years of Experience" },
  { value: 40, suffix: "+", label: "Satisfied Clients" },
  { value: 60, suffix: "+", label: "Completed Projects" },
  { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
  { imgPath: "/images/logos/company-logo-1.png" },
  { imgPath: "/images/logos/company-logo-2.png" },
  { imgPath: "/images/logos/company-logo-3.png" },
  { imgPath: "/images/logos/company-logo-4.png" },
  { imgPath: "/images/logos/company-logo-5.png" },
  { imgPath: "/images/logos/company-logo-6.png" },
  { imgPath: "/images/logos/company-logo-7.png" },
  { imgPath: "/images/logos/company-logo-8.png" },
  { imgPath: "/images/logos/company-logo-9.png" },
  { imgPath: "/images/logos/company-logo-10.png" },
  { imgPath: "/images/logos/company-logo-11.png" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Work perfection",
    desc: "Delivering  results not just results high quality results while showing every detail at its prime.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Direct  Communication",
    desc: "He keeps you updated at every step to ensure transparency and clarity in order to deliver the best results.",
  },
  {
    imgPath: "/images/time.png",
    title: "Timely  Delivery",
    desc: "He makes  sure projects are completed on schedule and at its best quality and keen to every detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React Developer",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "Python Developer",
    modelPath: "/models/python-transformed.glb",
    scale: 0.8,
    rotation: [0, 0, 0],
  },
  {
    name: "Backend Developer",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "Artificial Inteligence Developer",
    modelPath: "/models/AI-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
  {
    name: "UI/UX Designer",
    modelPath: "/models/git-svg-transformed.glb",
    scale: 0.05,
    rotation: [0, -Math.PI / 4, 0],
  },
];

const expCards = [
  {
    review:
      "I'm fascinated by AGI and its impact on the future. I explore intelligent systems using tools from OpenAI and study the architecture of general intelligence.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "AI Researcher (OpenAI)",
    date: "2024 - Present",
    responsibilities: [
      "Experimented with GPT APIs and built intelligent tools using OpenAI.",
      "Studied AGI theory, alignment, and safety in artificial superintelligence.",
      "Created personal projects that merge web interfaces with AI behavior.",
    ],
  },
  {
    review:
      "From frontend to backend, I craft scalable, modern web apps using Next.js and React. I love performance and clean architecture.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full-Stack Developer (Next.js)",
    date: "2022 - Present",
    responsibilities: [
      "Built production-ready apps using React, Next.js, Node, and Express.",
      "Integrated dynamic API routes and handled full-stack architecture.",
      "Focused on performance, accessibility, and SEO in modern web projects.",
    ],
  },
  {
    review:
      "Design is where tech meets emotion. I bring ideas to life with thoughtful UI/UX using Figma and modern design systems.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "UI/UX Designer (Figma)",
    date: "2021 - Present",
    responsibilities: [
      "Created wireframes, flows, and high-fidelity mockups using Figma.",
      "Collaborated with dev teams to implement pixel-perfect UIs.",
      "Designed mobile-first layouts and scalable design systems.",
    ],
  },
];

const expLogos = [
  { name: "logo1", imgPath: "/images/logo1.png" },
  { name: "logo2", imgPath: "/images/logo2.png" },
  { name: "logo3", imgPath: "/images/logo3.png" },
];

const testimonials = [
  {
    name: "Daniella Hawa",
    mentions: "@hawadaniella",
    review:
      "Jeremy exceeded all expectations. He took time to truly understand our goals and built a website that feels both elegant and intuitive. His communication was clear and consistent throughout. Highly recommended!",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Jeremy was a top-tier experience. He transformed our legacy system into a sleek, modern platform. His eye for detail and strong technical chops really brought everything together.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Grace Woods",
    mentions: "@graceabuzuwela",
    review:
      "Jeremy is an absolute gem! He made our project feel effortless, even though it had so many moving parts. His dedication, creativity, and responsiveness made the whole process enjoyable. I wouldn’t work with anyone else.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Jeremy brought our outdated website back to life. He’s got a great eye for design and an even better grip on the tech side. Smooth process from start to finish.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Harrison Mwaura",
    mentions: "@harrisonmwaura",
    review:
      "Jeremy delivered a powerful e-commerce platform that not only looks great but performs even better. Since launching, we’ve seen real growth in engagement and sales. Can’t recommend him enough.",
    imgPath: "/images/client4.png",
  },
  {
    name: "Tom Njuguna",
    mentions: "@tomnjuguna",
    review:
      "From our first call, Jeremy just got it. He knew exactly how to translate our ideas into a digital experience that feels fresh and seamless. A true full-stack wizard.",
    imgPath: "/images/client6.png",
  },
];

const socialImgs = [
{
  imgPath: "/images/insta.png",
  link: "https://github.com/jeremycodes-tech",
},
{
  imgPath: "/images/linkedin.png",
  link: "https://www.linkedin.com/in/jeremy-baraka-10b277383?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
},
{
  imgPath: "/images/x.png",
  link: "https://twitter.com/yourusername", // replace with your real X/Twitter handle if you have one
},
 
];

export {
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
  navLinks,
};
