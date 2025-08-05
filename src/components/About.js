function About() {
  return (
    <section id="about" className="about-section">
      <h2>About Me</h2>
      <div className="about-content">
        <img
          src="/Profile.jpg"
          alt="Onkar Shinde"
          className="profile-image"
        />
        <div className="about-text">
          <p>
            I'm <strong>Onkar Shinde</strong>, a passionate and performance-driven Software Developer based in Pune,
            Maharashtra. I specialize in building modern web and mobile applications with a strong foundation in
            <strong> PHP, React, Flutter, Firebase</strong>, and full-stack development.
          </p>
          <p>
            Currently working at <strong>Xbist - Media and Marketing Hub</strong>, I’ve helped enhance web platforms,
            increase user engagement by over 30%, and lead the development of scalable real-time applications like
            <strong> Chacha Cabs</strong>.
          </p>
          <p>
            I'm always eager to learn, explore new technologies, and solve challenging problems with clean and efficient code.
          </p>

          <div className="social-buttons">
            <a
              href="https://www.linkedin.com/in/onkar-shinde-1a2207209/"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn linkedin"
            >
              LinkedIn
            </a>
            <a
              href="https://github.com/onkarshinde21"
              target="_blank"
              rel="noopener noreferrer"
              className="social-btn github"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
