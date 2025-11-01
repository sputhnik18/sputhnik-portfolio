import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
      </div>
      <div className="container hero-container">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-header">
              <div className="profile-image-container">
                <img src="sputhnik_DP.jpg" alt="Sputhnik Gundu" className="profile-image" />
                <div className="profile-ring"></div>
              </div>
              <div className="hero-intro">
                <p className="hero-greeting">Hi, I'm</p>
                <h1 className="hero-name">Sputhnik</h1>
                <h2 className="hero-title">
                  <span className="gradient-text">Software Engineer</span>
                </h2>
              </div>
            </div>
            <p className="hero-description">
              Specializing in <strong>React.js</strong>, <strong>TypeScript</strong>, and{' '}
              <strong>Micro Frontend Architecture</strong> with around 5 years of experience.
              My vision is to develop <strong>scalable and modular frontend applications</strong> by
              deeply understanding product requirements and end user needs, creating solutions that
              bridge business goals with exceptional user experiences.
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">~5</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">500K+</span>
                <span className="stat-label">Users Served</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">Components Built</span>
              </div>
            </div>
            <div className="hero-cta">
              <a href="Sputhnik_React.pdf" download className="btn btn-primary">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-window">
              <div className="window-header">
                <span className="dot dot-red"></span>
                <span className="dot dot-yellow"></span>
                <span className="dot dot-green"></span>
              </div>
              <div className="window-content">
                <pre><code><span className="code-keyword">const</span> developer = {'{'}
  <span className="code-property">name:</span> <span className="code-string">"Sputhnik Gundu"</span>,
  <span className="code-property">role:</span> <span className="code-string">"Software Engineer"</span>,
  <span className="code-property">experience:</span> <span className="code-number">5</span>,
  <span className="code-property">skills:</span> [
    <span className="code-string">"React"</span>,
    <span className="code-string">"TypeScript"</span>,
    <span className="code-string">"Micro Frontends"</span>
  ],
  <span className="code-property">passion:</span> <span className="code-string">"Building scalable apps"</span>
{'}'};

<span className="code-keyword">export default</span> developer;</code></pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
