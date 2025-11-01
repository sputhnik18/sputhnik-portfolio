import './Skills.css';

function Skills() {
  const skillCategories = [
    {
      title: 'Frontend',
      icon: '💻',
      skills: [
        { name: 'React.js', level: 95 },
        { name: 'TypeScript', level: 90 },
        { name: 'JavaScript', level: 95 },
        { name: 'HTML5/CSS3', level: 90 },
        { name: 'Redux', level: 85 },
        { name: 'Webpack', level: 80 }
      ]
    },
    {
      title: 'Backend',
      icon: '⚙️',
      skills: [
        { name: 'Java', level: 85 },
        { name: 'Spring Boot', level: 80 },
        { name: 'Node.js', level: 75 },
        { name: 'RESTful APIs', level: 90 },
        { name: 'Microservices', level: 80 }
      ]
    },
    {
      title: 'Testing & Quality',
      icon: '🧪',
      skills: [
        { name: 'Jest', level: 90 },
        { name: 'React Testing Library', level: 85 },
        { name: 'Cypress', level: 75 },
        { name: 'Unit Testing', level: 90 }
      ]
    },
    {
      title: 'Cloud & DevOps',
      icon: '☁️',
      skills: [
        { name: 'AWS', level: 80 },
        { name: 'Docker', level: 75 },
        { name: 'Jenkins', level: 75 },
        { name: 'CI/CD', level: 85 },
        { name: 'Git', level: 90 }
      ]
    },
    {
      title: 'Architecture',
      icon: '🏗️',
      skills: [
        { name: 'Micro Frontends', level: 90 },
        { name: 'Design Systems', level: 85 },
        { name: 'Component Architecture', level: 90 },
        { name: 'Performance Optimization', level: 85 }
      ]
    },
    {
      title: 'Tools & Others',
      icon: '🛠️',
      skills: [
        { name: 'Storybook', level: 85 },
        { name: 'Grafana', level: 75 },
        { name: 'MongoDB', level: 70 },
        { name: 'PostgreSQL', level: 75 }
      ]
    }
  ];

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2>Technical Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="skill-category"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="category-header">
                <span className="category-icon">{category.icon}</span>
                <h3>{category.title}</h3>
              </div>
              <div className="skills-list">
                {category.skills.map((skill, idx) => (
                  <div key={idx} className="skill-item">
                    <div className="skill-info">
                      <span className="skill-name">{skill.name}</span>
                      <span className="skill-level">{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${(index * 0.1) + (idx * 0.05)}s`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
