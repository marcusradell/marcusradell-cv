const data = {
  summary:
    "Tech leader with a passion for building performing, joyful engineering teams and scalable web solutions. With extensive experience across full-stack development and engineering leadership, I've successfully:",
  achievements: [
    "Built engineering teams from the ground up, establishing effective processes and cultivating collaborative culture.",
    "Led technical education programs that transformed junior developers into industry-ready professionals.",
    "Architected and developed mission-critical systems that drive business value.",
    "Coached technical leaders and engineers to reach their full potential.",
  ],
  approach:
    "My approach combines hands-on technical expertise with people-focused leadership. I believe the best technology solutions emerge when teams are empowered, supported, and aligned around clear objectives.",
};

export function About() {
  return (
    <section id="about">
      <h2>About</h2>
      <p id="about-summary">{data.summary}</p>
      <ul className="achievements" id="achievements-list">
        {data.achievements.map((achievement) => (
          <li>{achievement}</li>
        ))}
      </ul>
      <p className="approach" id="about-approach">
        {data.approach}
      </p>
    </section>
  );
}
