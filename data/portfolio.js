// ---------------------------------------------------------------------------
// All portfolio content lives in this one file.
// Edit the text here; the components in /components only handle layout.
// Content is taken from the resume and LinkedIn profile only.
// ---------------------------------------------------------------------------

export const profile = {
  name: "Vyasan K S",
  title: "Full Stack MERN Developer",
  headline:
    "I build and deploy full-stack MERN apps with secure auth, online payments and AI features.",
  status: "Open to entry-level full-stack roles",
  metaDescription:
    "Portfolio of Vyasan K S, a Full Stack MERN Developer with three live projects covering JWT and Google OAuth, Razorpay payments, AWS deployment and AI features.",
  location: "Alappuzha, Kerala, India",
  email: "vyasanksparasakthy@gmail.com",
  phone: "+91 8921216621",
  phoneHref: "tel:+918921216621",
  linkedin: "https://www.linkedin.com/in/vyasanks",
  github: "https://github.com/vyasan-6-6",
  resume: "/Vyasan_K_S_Resume.pdf",
};

export const nav = [
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

// Hero side-panel: how ShopEase, the flagship project, fits together.
export const architecture = {
  label: "ShopEase / architecture",
  layers: [
    {
      name: "Client",
      detail: "React.js · Redux Toolkit · Customer + Admin portals",
    },
    {
      name: "API",
      detail: "Node.js · Express.js · JWT · Google OAuth · Joi · RBAC",
    },
    {
      name: "Data",
      detail: "MongoDB · Mongoose · 20+ schemas · aggregation pipelines",
    },
    {
      name: "Integrations",
      detail: "Razorpay · OpenRouter AI assistant",
    },
    {
      name: "Deploy",
      detail: "AWS EC2 · Nginx · PM2 · S3 · Winston logging",
    },
  ],
};

export const about = {
  paragraphs: [
    "I'm a full-stack developer with over a year of hands-on experience building and deploying web applications with React, Node.js, Express and MongoDB.",
    "My projects go beyond basic CRUD. They include role-based access control, Google OAuth, Razorpay payments with webhook verification, AI features built on the Gemini and OpenRouter APIs, and backends deployed to AWS with Nginx and PM2.",
    "At Mentor Bro I work in a supervised, project-based team setting, using Git feature branches, code reviews, testing and debugging. I am looking for an entry-level full-stack role where I can contribute to real product work and keep learning good engineering practice.",
  ],
  highlights: [
    "3 live, deployed projects",
    "JWT and Google OAuth authentication",
    "Razorpay payments with HMAC SHA-256 webhook verification",
    "AI features with Gemini and OpenRouter",
    "AWS EC2, S3, Nginx and PM2 deployment",
  ],
};

export const projects = [
  {
    name: "ShopEase",
    kind: "Full Stack E-Commerce Platform",
    featured: true,
    summary:
      "A MERN e-commerce platform with separate Customer and Admin portals, online payments, and an AI shopping assistant.",
    built: [
      "Customer and Admin portals with JWT authentication, role-based authorization, cart, wishlist and order management.",
      "Admin dashboard with PDF sales reports, plus coupon, banner and inventory management.",
      "20+ MongoDB schemas with Mongoose and Joi validation, using indexing and aggregation pipelines ($lookup, $group, $match, $unwind) for reporting.",
      "Razorpay and Cash on Delivery checkout with HMAC SHA-256 webhook verification, automated refunds and an in-app wallet.",
      "AI shopping assistant built on the OpenRouter API for product recommendations, order tracking, cancellations and returns.",
      "Security with Google OAuth, Bcrypt, Helmet, rate limiting and Joi validation.",
    ],
    outcome:
      "Live on AWS: backend on EC2 behind Nginx and PM2, static frontend on S3, with Winston logging.",
    stack: [
      "React.js",
      "Redux Toolkit",
      "Node.js",
      "Express.js",
      "MongoDB",
      "AWS",
      "Razorpay",
      "OpenRouter",
      "JWT",
      "Google OAuth",
    ],
    live: "http://shopease-frontend-vyasan.s3-website-us-east-1.amazonaws.com",
    github: "https://github.com/vyasan-6-6/ShopEase-Ecom",
  },
  {
    name: "Shortcut Pro",
    kind: "AI-Powered URL Shortener & Click Analytics",
    featured: false,
    summary:
      "A URL shortener with click analytics and Gemini-powered link insights.",
    built: [
      "JWT authentication, custom aliases, click tracking, API rate limiting and centralized async error handling.",
      "Google Gemini API integration for URL safety analysis, alias suggestions and traffic insights, with fallback handling.",
      "Analytics dashboard showing visitor activity, browser, referrer and anonymized IP data.",
      "Frontend performance work using React.lazy, Suspense and TanStack React Query caching; logic organized into custom hooks and a service layer.",
    ],
    outcome: "Live on Vercel.",
    stack: [
      "React.js",
      "TanStack React Query",
      "React Router",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Gemini API",
    ],
    live: "https://url-shortener-pro-eta.vercel.app",
    github: "https://github.com/vyasan-6-6/Url-shortener-pro",
  },
  {
    name: "Mini E-Commerce Platform",
    kind: "Responsive MERN Storefront",
    featured: false,
    summary:
      "A responsive e-commerce app focused on product browsing, with cloud image uploads.",
    built: [
      "Responsive storefront built with React.js and Tailwind CSS v4.",
      "Product search, category filtering and pagination managed with React Context API and useReducer.",
      "Cloudinary image uploads, removing reliance on local server storage.",
      "MongoDB Atlas schemas with case-insensitive unique indexes.",
    ],
    outcome: "Live with the frontend on Vercel and the backend on Render.",
    stack: [
      "React.js",
      "Context API",
      "Tailwind CSS",
      "Node.js",
      "Express.js",
      "MongoDB Atlas",
      "Cloudinary",
      "Vercel",
      "Render",
    ],
    live: "https://mini-mern-ecommerce-app.vercel.app",
    github: "https://github.com/vyasan-6-6/MINI-MERN-ECOMMERCE-APP",
  },
];

export const experience = [
  {
    role: "Full Stack Developer Trainee",
    company: "Mentor Bro",
    period: "Aug 2025 – Present",
    location: "Malappuram, Kerala, India",
    note: "Started as a Full Stack Developer Intern (Aug–Sep 2025), then continued as a project-based trainee.",
    bullets: [
      "Built and deployed full-stack web applications using the MERN stack (MongoDB, Express.js, React.js, Node.js).",
      "Backend developer on the SpokeUp project: designed and implemented RESTful APIs with Node.js and Express in a supervised, project-based environment.",
      "Implemented JWT authentication and role-based access control using custom middleware.",
      "Built responsive React interfaces and managed application state with Redux and Redux Toolkit.",
      "Integrated third-party services, including payment gateways and cloud storage.",
      "Worked with Git and GitHub feature branches, plus testing, debugging, deployment and code reviews.",
    ],
  },
];

export const skills = [
  {
    group: "Frontend",
    items: [
      "React.js",
      "Redux Toolkit",
      "Context API",
      "React Router",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    group: "Backend",
    items: [
      "JavaScript",
      "Node.js",
      "Express.js",
      "REST APIs",
      "Joi validation",
      "Winston",
    ],
  },
  {
    group: "Databases",
    items: ["MongoDB", "Mongoose", "MongoDB Atlas", "Redis"],
  },
  {
    group: "Auth & Security",
    items: [
      "JWT",
      "Google OAuth",
      "Bcrypt",
      "Helmet",
      "Rate limiting",
      "Role-based access control",
    ],
  },
  {
    group: "Cloud & Deployment",
    items: [
      "AWS (EC2, S3)",
      "Nginx",
      "PM2",
      "Vercel",
      "Render",
      "Cloudinary",
    ],
  },
  {
    group: "Integrations & AI",
    items: [
      "Razorpay",
      "Google Gemini API",
      "OpenRouter API",
      "Groq",
      "Supabase",
      "RAG concepts",
      "Prompt engineering",
    ],
  },
  {
    group: "Tools",
    items: ["Git", "GitHub", "Postman"],
  },
];

export const education = [
  {
    title: "Higher Secondary (Bio Science)",
    school: "S N Trust HSS, Cherthala",
    period: "2023 – 2025",
  },
];

export const training = {
  title: "Project-based Full Stack training",
  org: "Mentor Bro",
  period: "Aug 2025 – Present",
};
