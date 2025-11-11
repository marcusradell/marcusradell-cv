const data = {
  location: "Stockholm, Sweden",
  email: "marcus@radell.net",
  linkedin: {
    url: "https://www.linkedin.com/in/marcusradell",
    display: "www.linkedin.com/in/marcusradell",
  },
  github: {
    url: "https://github.com/marcusradell",
    display: "github.com/marcusradell",
  },
};
export function Contact() {
  return (
    <section>
      <h2>Contact</h2>
      <div>
        <p>{data.location}</p>
        <p>
          <a href={`mailto:${data.email}`}>{data.email}</a>
        </p>
        <p>
          <a href={data.linkedin.url} target="_blank">
            {data.linkedin.display}
          </a>
        </p>
        <p>
          <a href={data.github.url} target="_blank">
            {data.github.display}
          </a>
        </p>
      </div>
    </section>
  );
}
