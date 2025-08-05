function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2>Projects</h2>
      <div className="projects-grid">
        <div className="project-card">
          <h3>Chacha Cabs</h3>
          <p>
            A real-time cab booking platform with separate Driver and User apps.
          </p>
          <p><strong>Tech Stack:</strong> Flutter, PHP, MySQL, Firebase</p>
        </div>

        <div className="project-card">
          <h3>Fantasy Cricket App</h3>
          <p>
            A fantasy sports app powered by the Entity Sports API for live match data.
          </p>
          <p><strong>Tech Stack:</strong> React, Firebase, PHP, Entity API</p>
        </div>

        <div className="project-card">
          <h3>Xbist Company Website</h3>
          <p>
            Company website for Xbist Media & Marketing Hub with dynamic CMS and SEO optimization.
          </p>
          <p><strong>Tech Stack:</strong> HTML, CSS, JS, PHP, MySQL</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
