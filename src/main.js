import { data } from "./data.js";
import { developerExperienceDescriptions } from "./developer-experience-descriptions.js";

const experienceWithDescriptions = data.experience.map((job) => ({
  ...job,
  description: developerExperienceDescriptions[job.id],
}));

const experienceList = document.getElementById("experience-list");
experienceWithDescriptions.forEach((job) => {
  const jobDiv = document.createElement("div");
  jobDiv.className = "job";

  const title = document.createElement("h3");
  title.textContent = job.title;
  jobDiv.appendChild(title);

  const company = document.createElement("div");
  company.className = "company";
  company.textContent = job.company;
  jobDiv.appendChild(company);

  const period = document.createElement("div");
  period.className = "period";
  period.textContent = job.period;
  jobDiv.appendChild(period);

  if (job.location) {
    const location = document.createElement("div");
    location.className = "company-location";
    location.textContent = job.location;
    jobDiv.appendChild(location);
  }

  job.description.forEach((desc) => {
    const p = document.createElement("p");
    p.textContent = desc;
    jobDiv.appendChild(p);
  });

  if (job.details) {
    const ul = document.createElement("ul");
    ul.className = "job-details";
    job.details.forEach((detail) => {
      const li = document.createElement("li");
      li.textContent = detail;
      ul.appendChild(li);
    });
    jobDiv.appendChild(ul);
  }

  experienceList.appendChild(jobDiv);
});

const educationList = document.getElementById("education-list");
data.education.forEach((edu) => {
  const eduDiv = document.createElement("div");
  eduDiv.className = "education-item";

  const degree = document.createElement("h3");
  degree.textContent = edu.degree;
  eduDiv.appendChild(degree);

  const institution = document.createElement("div");
  institution.className = "institution";
  institution.textContent = edu.institution;
  eduDiv.appendChild(institution);

  const period = document.createElement("div");
  period.className = "period";
  period.textContent = edu.period;
  eduDiv.appendChild(period);

  educationList.appendChild(eduDiv);
});

const contactInfo = document.getElementById("contact-info");

const locationP = document.createElement("p");
locationP.textContent = `Location: ${data.contact.location}`;
contactInfo.appendChild(locationP);

const emailP = document.createElement("p");
emailP.innerHTML = `Email: <a href="mailto:${data.contact.email}">${data.contact.email}</a>`;
contactInfo.appendChild(emailP);

const linkedinP = document.createElement("p");
linkedinP.innerHTML = `LinkedIn: <a href="${data.contact.linkedin.url}" target="_blank">${data.contact.linkedin.display}</a>`;
contactInfo.appendChild(linkedinP);

const githubP = document.createElement("p");
githubP.innerHTML = `GitHub: <a href="${data.contact.github.url}" target="_blank">${data.contact.github.display}</a>`;
contactInfo.appendChild(githubP);

document.getElementById("footer-text").textContent = data.footer.copyright;
