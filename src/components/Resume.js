function Resume() {
  return (
    <section id="resume" className="resume-section">
      <h2>Resume</h2>
      <div className="resume-container">
        <img
          src="/Profile.jpg"
          alt="Onkar Shinde"
          className="resume-image"
        />
        <div className="resume-info">
          <h3>Onkar Shinde</h3>
          <p>1 Year Experience | PHP, Flutter, Firebase</p>
          <div className="resume-buttons">
            <a
              href="/OnkarShinde.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="resume-btn"
            >
              View Resume
            </a>
            <a
              href="/resume.pdf"
              download
              className="resume-btn secondary"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
