import './Experience.css';

function Experience() {
  const experiences = [
    {
      company: 'AT&T',
      role: 'Software Developer',
      period: 'Aug 2025 - Present',
      location: 'Richardson, Texas',
      type: 'Contract',
      highlights: [
        'Building full stack React application with Java Spring Boot backend for agile teams to track features and feature links across AT&T projects',
        'Developed RESTful APIs and GraphQL endpoints using Spring Boot for real-time project tracking and feature management',
        'Integrated dashboard with Jira REST API for seamless data synchronization and automated workflows',
        'Developing internal component library with 50+ reusable React components for cross-team adoption',
        'Implementing comprehensive unit tests achieving 80% coverage using Jest, React Testing Library, and JUnit',
        'Collaborating with multiple agile teams to gather requirements and deliver tailored full stack solutions'
      ],
      tags: ['React', 'TypeScript', 'Java Spring Boot', 'REST APIs', 'GraphQL', 'Jira Integration', 'Component Library', 'Agile']
    },
    {
      company: 'The Hartford',
      role: 'Senior Software Developer',
      period: 'Dec 2021 - Dec 2023',
      location: 'Bengaluru, India',
      highlights: [
        'Architected full stack micro frontend system using Webpack Module Federation with Spring Boot microservices for 500K users',
        'Designed and implemented RESTful APIs using Java Spring Boot for insurance policy management and claims processing',
        'Reduced main bundle size by 40% and improved page load time from 4.2s to 2.5s through optimization and API response caching',
        'Built comprehensive testing framework achieving 85% code coverage across frontend and backend services',
        'Implemented Spring Security with JWT authentication for secure API endpoints',
        'Mentored 2 junior developers on React, TypeScript, and Spring Boot best practices'
      ],
      tags: ['React', 'TypeScript', 'Java Spring Boot', 'Microservices', 'REST APIs', 'Webpack Module Federation', 'JWT', 'Jest', 'JUnit', 'Mentorship']
    },
    {
      company: 'Scaler',
      role: 'Software Engineer - Full Stack',
      period: 'Jan 2020 - Dec 2021',
      location: 'Bengaluru, India',
      featured: true,
      description: '🚀 Startup Experience: Contributed to building an EdTech platform from early stages',
      highlights: [
        'Developed full stack interactive analytics dashboards for 50K+ daily users in a fast-paced startup environment',
        'Built RESTful APIs using Java Spring Boot for student progress tracking, course management, and assessments',
        'Implemented GraphQL endpoints for efficient data fetching and real-time updates using WebSocket connections',
        'Created reusable component library and design system documented in Storybook',
        'Designed database schemas and optimized SQL queries for PostgreSQL, improving query performance by 40%',
        'Improved user engagement metrics by 30% through enhanced UI/UX patterns and backend optimizations',
        'Implemented monitoring infrastructure using Grafana and Elasticsearch for application health tracking',
        'Worked cross-functionally with product managers in an agile startup culture',
        'Delivered features iteratively across 20+ sprints with consistent velocity'
      ],
      tags: ['React', 'TypeScript', 'Java Spring Boot', 'REST APIs', 'GraphQL', 'PostgreSQL', 'WebSocket', 'Storybook', 'Grafana', 'Startup', 'Agile']
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Professional Experience</h2>
        <div className="experience-timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className={`experience-card ${exp.featured ? 'featured' : ''}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {exp.featured && (
                <div className="featured-badge">
                  <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                  Startup Experience
                </div>
              )}
              <div className="experience-header">
                <div>
                  <h3>{exp.role}</h3>
                  <p className="company">
                    {exp.company}
                    {exp.type && <span className="company-type"> ({exp.type})</span>}
                  </p>
                </div>
                <div className="experience-meta">
                  <p className="period">{exp.period}</p>
                  <p className="location">{exp.location}</p>
                </div>
              </div>
              {exp.description && (
                <p className="experience-description">{exp.description}</p>
              )}
              <ul className="experience-highlights">
                {exp.highlights.map((highlight, idx) => (
                  <li key={idx}>{highlight}</li>
                ))}
              </ul>
              <div className="experience-tags">
                {exp.tags.map((tag, idx) => (
                  <span key={idx} className="tag">{tag}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
