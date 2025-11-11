const education = [
  {
    degree: "Master, Computer Science",
    institution: "MDH Västerås",
    period: "2004 - 2008",
  },
];

export function Education() {
  return (
    <section id="education">
      <h2>Education</h2>
      <div id="education-list">
        {education.map((education) => (
          <div key={education.degree} className="education-item">
            <h3>{education.degree}</h3>
            <div className="institution">{education.institution}</div>
            <div className="period">{education.period}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
