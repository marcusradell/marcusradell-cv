import { data } from "./data.js";
import { developerExperienceDescriptions } from "./developer-experience-descriptions.js";

const experienceWithDescriptions = data.experience.map((job) => ({
  ...job,
  description: developerExperienceDescriptions[job.id],
}));

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
