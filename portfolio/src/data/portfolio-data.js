export const profile = {
  name: "Lakshay Verma",
  title: "MERN Stack Developer",
  location: "Bhiwani, Haryana",
  phone: "+91 7015364306",
  email: "vermalakshay773@gmail.com",
  linkedin: "linkedin.com/in/lakshay-verma-1141b9305",
  github: "github.com/lakshay18lv",
  summary:
    "Final-year Computer Science undergraduate and MERN Stack Developer with hands-on experience building full-stack web applications using React.js, Node.js, Express.js, and MongoDB. Experienced in authentication, authorization, REST APIs, responsive dashboards, Docker, AWS EC2, and CI/CD workflows.",
};

export const projects = [
  {
    name: "NextStep AI – AI-Based Interview Preparation Web App",
    tech: "React.js, Node.js, Express.js, MongoDB, OpenAI API, JWT",
    summary:
      "A MERN-stack interview preparation platform with personalized, resume-based practice.",
    bullets: [
      "Built secure JWT authentication, email verification, and protected routes.",
      "Integrated resume-based question generation with OpenAI and difficulty customization with fallback logic.",
      "Created feedback and skill-tracking modules backed by MongoDB interview history.",
    ],

    repo: "https://github.com/lakshay18lv/NextStep-AI",
  },
  {
    name: "Complaint Tracker System",
    tech: "React.js, Node.js, Express.js, MongoDB, JWT, Multer",
    summary:
      "A full-stack application for submitting complaints and tracking their status.",
    bullets: [
      "Built user complaint submission and status tracking with updates.",
      "Implemented secure JWT authentication and role-based access control.",
      "Containerized and deployed the application using Docker on AWS EC2, gaining hands-on experience in cloud deployment and application hosting."
    ],
    live: "http://ec2-13-49-222-141.eu-north-1.compute.amazonaws.com/login/",
    repo: "https://github.com/lakshay18lv/FixFlow",
  },
  {
    name: "TripKey – Hotel / Listing Web App",
    tech: "Node.js, Express.js, MongoDB, EJS, Bootstrap",
    summary:
      "A hotel listing app with authentication, listing management, and map-based discovery.",
    bullets: [
      "Implemented user authentication, authorization, and CRUD operations for hotel listings.",
      "Added map integration to display hotel locations and improve user interaction.",
    ],
    live: "https://tripkey.onrender.com/listings",
    repo: "https://tripkey.onrender.com/listings"
  },
];

export const skills = [
  ["Frontend", ["HTML", "CSS", "Tailwind CSS", "Bootstrap", "React.js"]],
  ["Backend", ["Node.js", "Express.js", "REST APIs"]],
  ["Databases", ["MongoDB", "MySQL"]],
  ["Authentication", ["JWT"]],
  ["Languages", ["Java", "JavaScript", "Python"]],
  ["DevOps & Deployment", ["Docker", "AWS EC2", "CI/CD", "GitHub Actions"]],
  ["Tools", ["Git", "GitHub", "VS Code", "Postman", "Nodemailer", "Multer", "Render", "Netlify"]],
];

export const experience = {
  company: "Railbit Engineers Pvt. Ltd.",
  role: "Web Development Intern",
  date: "July 2026 – August 2026",
  location: "Noida, India",
  bullets: [
    "Developed web applications involving user authentication, registration, login, logout, and session handling.",
    "Implemented authorization using protected routes and role-based access control to manage user permissions.",
    "Built a responsive dashboard with 10+ reusable UI components to support application functionality.",
  ],
};

export const education = [
  {
    school: "The Technological Institute of Textile and Sciences",
    place: "Bhiwani, Haryana",
    degree: "Bachelor of Technology in Computer Science",
    detail: "CGPA: 7.35/10.0 (through 6th semester)",
    year: "2023 – 2027",
  },
  {
    school: "K.C.M. Army Sr. Sec. School",
    place: "Bhiwani, Haryana",
    degree: "Senior Secondary (12th), Non-Medical",
    detail: "",
    year: "2022 – 2023",
  },
];

export const certifications = [
  "Secured 1st place among 13 teams in the internal Smart India Hackathon (SIH) with the TrustID project.",
  "Successfully completed Full Stack Web Development certification from GeeksforGeeks Skill Up.",
  "Attended the National Workshop on DSA and Front-End Development (ALGOUI), TIT&S, Bhiwani.",
];
