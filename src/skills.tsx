const skills = [
  "Technical Project Leadership",
  "Project Management",
  "Director level",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Flutter",
  "Rust",
  "C#",
  "Java",
  "Team Leadership",
  "Technical Coaching",
  "Agile Methodologies",
  "Test-Driven Development",
  "Pair Programming",
  "Mob Programming",
];

export function Skills() {
  return (
    <section>
      <h2>Skills</h2>
      <div className="skills-container">
        {skills.map((skill) => (
          <div key={skill} className="skill">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
