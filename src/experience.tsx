const experience = [
  {
    id: "head-of-teaching",
    title: "Head of Teaching",
    company: "School of Applied Technology </salt>",
    period: "April 2023 - April 2025 (2 years 1 month)",
  },
  {
    id: "director-of-engineering-wp-tech",
    title: "Director of Engineering",
    company: "WP Tech AB",
    period: "October 2022 - April 2023 (7 months)",
  },
  {
    id: "director-of-engineering-deversify",
    title: "Director of Engineering",
    company: "Deversify",
    period: "October 2021 - April 2023 (1 year 7 months)",
  },
  {
    id: "director-of-engineering-getgeek",
    title: "Director Of Engineering",
    company: "GetGeek",
    period: "July 2021 - September 2021 (3 months)",
    details: [
      "Upgraded dependencies, including Node.js from v10 to v14, with careful regression testing",
      "Added TypeScript to React Native and backend repositories while maintaining legacy code compatibility",
      "Implemented unit testing for new code with business logic separated from React and Express APIs",
      "Updated documentation for running and managing services and applications",
      "Introduced feature flags for internal testing in production",
      "Implemented reliable time tracking for technicians that worked even during client crashes",
      "Collaborated with technicians and support to resolve urgent bugs",
    ],
  },
  {
    id: "director-of-engineering-vembla",
    title: "Director Of Engineering",
    company: "Vembla",
    period: "April 2021 - July 2021 (4 months)",
    location: "Stockholm, Stockholm County, Sweden",
  },
  {
    id: "fullstack-engineering-manager",
    title: "Fullstack Engineering Manager",
    company: "Svea Solar",
    period: "January 2020 - April 2021 (1 year 4 months)",
    location: "Stockholm, Stockholm County, Sweden",
  },
  {
    id: "chief-technology-officer",
    title: "Chief Technology Officer",
    company: "WeTal",
    period: "October 2019 - December 2019 (3 months)",
    location: "Stockholm, Sweden",
  },
  {
    id: "programmer",
    title: "Programmer",
    company: "Karma",
    period: "September 2017 - October 2019 (2 years 2 months)",
    location: "Stockholm, Sweden",
  },
  {
    id: "frontend-developer",
    title: "Frontend developer",
    company: "Linas Matkasse",
    period: "November 2016 - August 2017 (10 months)",
    location: "Stockholm, Sweden",
  },
  {
    id: "web-application-developer",
    title: "Web Application Developer",
    company: "Omnivy @ Dinbox",
    period: "June 2016 - November 2016 (6 months)",
  },
  {
    id: "developer-qvalia",
    title: "Developer",
    company: "Qvalia",
    period: "May 2015 - May 2016 (1 year 1 month)",
  },
  {
    id: "it-consultant-utvecklarbolaget",
    title: "IT Consultant",
    company: "Utvecklarbolaget",
    period: "August 2014 - May 2015 (10 months)",
    location: "Östersund/Stockholm",
  },
  {
    id: "it-consultant-r2m",
    title: "IT Consultant",
    company: "R2M",
    period: "August 2013 - June 2014 (11 months)",
    location: "Kista",
  },
  {
    id: "it-consultant-dq-consulting",
    title: "IT Consultant",
    company: "DQ Consulting AB",
    period: "March 2011 - August 2013 (2 years 6 months)",
  },
  {
    id: "it-consultant-iptor",
    title: "IT Consultant",
    company: "IPTOR",
    period: "2010 - 2011 (1 year)",
  },
  {
    id: "it-consultant-cag-malardalen",
    title: "IT Consultant",
    company: "CAG Mälardalen",
    period: "2008 - 2008 (less than a year)",
  },
  {
    id: "company-host",
    title: "Company Host",
    company: "Mälardalen University",
    period: "2004 - 2005 (1 year)",
  },
] as const;

const developerExperienceDescriptions = {
  "head-of-teaching": [
    "Led and developed a team of instructors delivering fullstack web development education in JavaScript/TypeScript, C#, and Java, simultaneously increasing program quality while optimizing team structure for improved profitability.",
    "Designed and implemented multiple mission-critical internal systems, including Salt's talent management application, digital ID verification system, and certification management tools.",
    "Served as head instructor for the full-stack JavaScript/TypeScript curriculum, demonstrating technical expertise and educational leadership.",
    "Fostered cross-functional collaboration between education, sales, and marketing teams through strategic communication with Salt's board, creating alignment on organizational goals.",
    "Mentored 50-90 developers annually through personalized coaching sessions, providing guidance on agile methodologies and technical problem-solving that enhanced career readiness.",
  ],
  "director-of-engineering-wp-tech": [
    "Built an engineering organization from the ground up, establishing hiring practices, technical assessment criteria, and onboarding that resulted in a high-performing team.",
    "Architected the company's technical foundation by evaluating, selecting, and implementing a simple and efficient technology stack aligned with business objectives.",
    "Developed project planning and agile methodologies that streamlined development processes and improved delivery predictability.",
    "Provided strategic technical coaching to C-level executives and hands-on mentorship to engineering team members, elevating technical decision-making in the organization.",
    "Maintained technical expertise through direct code contributions in critical system components while on-boarding developers through pair programming.",
  ],
  "director-of-engineering-deversify": [
    "Led the strategic overhaul of Acetrack v1's technical architecture, implementing systematic debt reduction while maintaining product stability for existing users.",
    "Onboarded a cross-functional development team to architect Acetrack v2, leveraging Flutter for mobile development and Rust for stable backend systems.",
    "Established comprehensive project governance through detailed road-mapping and user story mapping methodologies, enabling clear prioritization and alignment with business objectives.",
    "Championed engineering excellence by implementing test-driven development (TDD) and pair programming practices, ensuring consistent sensor data capture between legacy and new systems.",
    "Collaborated across departments by assisting the marketing team in launching the company's web site.",
  ],
  "director-of-engineering-getgeek": [
    "Worked independently to plan and execute responsive development, sharing detailed daily logs with the CEO.",
    "Made GetGeek's code and infrastructure future-proof and scalable through systematic improvements:",
  ],
  "director-of-engineering-vembla": [
    "Worked closely with the CTO to ensure that our platform kept up and running while replacing the first-generation of outsourced code to be converted to high quality code.",
  ],
  "fullstack-engineering-manager": [
    "Worked with the frontend team to teach them how to refactor React components to avoid bugs. Led the backend-for-frontend team that integrated with different backends. Developed our own mini-framework that allowed multiple teams to develop their features faster and with less bugs. Taught mob programming to multiple teams.",
  ],
  "chief-technology-officer": [
    "Improved web site performance and stability. Helped open up the platform and onboard developers.",
  ],
  programmer: ["Fullstack development."],
  "frontend-developer": [
    'Worked with JavaScript and React, developing my-pages and the next generation back office "Composer".',
  ],
  "web-application-developer": [
    "Developed web applications with React, WebSockets, and RxJS for a containerized cloud application managing building data and real-time communication with users and IoT products.",
    "The frontend utilized RxJS with redux-style reducers and redux-observable style side-effects, with components combined by merging streams upwards.",
    "The developer experience relied on docker-compose for single command execution, docker cloud with CI and CD, and TypeScript for type inference.",
  ],
  "developer-qvalia": [
    "Developed Qvalia's web service platform with JavaScript, focusing on Node.js backend APIs and React frontend (with some legacy AngularJS).",
    "Worked with technologies including AWS, PostgreSQL, RxJS, TDD, ES6/2015 via Babel and Webpack, using GitHub feature branches with pair programming and code reviews.",
  ],
  "it-consultant-utvecklarbolaget": [
    "Consultancy with focus on AngularJS and modern frontend development with fewer bugs and faster feedback using Browserify to modularize code, enable live reload, and writing frontend components (Angular directives). These concepts were rare at the time.",
  ],
  "it-consultant-r2m": ["Web development."],
  "it-consultant-dq-consulting": ["Web development."],
  "it-consultant-iptor": ["Web development."],
  "it-consultant-cag-malardalen": ["Web development."],
  "company-host": [],
} as const;

const experienceWithDescriptions = experience.map((job) => ({
  ...job,
  description: developerExperienceDescriptions[job.id],
}));

export function Experience() {
  return (
    <section>
      <h2>Experience</h2>
      <div>
        {experienceWithDescriptions.map((job) => (
          <div key={job.id} className="job">
            <h3>{job.title}</h3>

            <div className="company">{job.company}</div>

            <div className="period">{job.period}</div>

            <div className="company-location">{(job as any).location}</div>

            {job.description.map((description) => (
              <p key={description}>{description}</p>
            ))}

            <ul className="job-details">
              {(job as any).details?.map((detail: string) => (
                <li key={detail}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
