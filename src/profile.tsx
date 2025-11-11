const expertiseList = [
  "Engineering Leader",
  "15+ Years Fullstack Development",
  "Technical Team Coaching",
  "Software Architect",
];

export function Profile() {
  return (
    <div className="container">
      <div className="profile-header">
        <div className="profile-info">
          <h1 id="profile-name">Marcus Rådell</h1>
          <div>
            <ul className="expertise-list" id="expertise-list">
              {expertiseList.map((expertise) => (
                <li key={expertise}>{expertise}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
