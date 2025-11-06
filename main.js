import data from './data.js';

document.getElementById('profile-name').textContent = data.profile.name;

const expertiseList = document.getElementById('expertise-list');
data.profile.expertise.forEach(item => {
  const li = document.createElement('li');
  li.textContent = item;
  expertiseList.appendChild(li);
});

document.getElementById('about-summary').textContent = data.about.summary;

const achievementsList = document.getElementById('achievements-list');
data.about.achievements.forEach(achievement => {
  const li = document.createElement('li');
  li.textContent = achievement;
  achievementsList.appendChild(li);
});

document.getElementById('about-approach').textContent = data.about.approach;

const skillsContainer = document.getElementById('skills-container');
data.skills.forEach(skill => {
  const div = document.createElement('div');
  div.className = 'skill';
  div.textContent = skill;
  skillsContainer.appendChild(div);
});

const experienceList = document.getElementById('experience-list');
data.experience.forEach(job => {
  const jobDiv = document.createElement('div');
  jobDiv.className = 'job';

  const title = document.createElement('h3');
  title.textContent = job.title;
  jobDiv.appendChild(title);

  const company = document.createElement('div');
  company.className = 'company';
  company.textContent = job.company;
  jobDiv.appendChild(company);

  const period = document.createElement('div');
  period.className = 'period';
  period.textContent = job.period;
  jobDiv.appendChild(period);

  if (job.location) {
    const location = document.createElement('div');
    location.className = 'company-location';
    location.textContent = job.location;
    jobDiv.appendChild(location);
  }

  job.description.forEach(desc => {
    const p = document.createElement('p');
    p.textContent = desc;
    jobDiv.appendChild(p);
  });

  if (job.details) {
    const ul = document.createElement('ul');
    ul.className = 'job-details';
    job.details.forEach(detail => {
      const li = document.createElement('li');
      li.textContent = detail;
      ul.appendChild(li);
    });
    jobDiv.appendChild(ul);
  }

  experienceList.appendChild(jobDiv);
});

const educationList = document.getElementById('education-list');
data.education.forEach(edu => {
  const eduDiv = document.createElement('div');
  eduDiv.className = 'education-item';

  const degree = document.createElement('h3');
  degree.textContent = edu.degree;
  eduDiv.appendChild(degree);

  const institution = document.createElement('div');
  institution.className = 'institution';
  institution.textContent = edu.institution;
  eduDiv.appendChild(institution);

  const period = document.createElement('div');
  period.className = 'period';
  period.textContent = edu.period;
  eduDiv.appendChild(period);

  educationList.appendChild(eduDiv);
});

const contactInfo = document.getElementById('contact-info');

const locationP = document.createElement('p');
locationP.textContent = `Location: ${data.contact.location}`;
contactInfo.appendChild(locationP);

const emailP = document.createElement('p');
emailP.innerHTML = `Email: <a href="mailto:${data.contact.email}">${data.contact.email}</a>`;
contactInfo.appendChild(emailP);

const linkedinP = document.createElement('p');
linkedinP.innerHTML = `LinkedIn: <a href="${data.contact.linkedin.url}" target="_blank">${data.contact.linkedin.display}</a>`;
contactInfo.appendChild(linkedinP);

const githubP = document.createElement('p');
githubP.innerHTML = `GitHub: <a href="${data.contact.github.url}" target="_blank">${data.contact.github.display}</a>`;
contactInfo.appendChild(githubP);

document.getElementById('footer-text').textContent = data.footer.copyright;
