export default function ProjectsSection() {
  const projects = [
    {
      name: "VikesPlace",
      achievements: [
        "Engineered robust backend for a web application that mirrors the functionality of Facebook Marketplace.",
        "Enhanced backend of microservices with unit testing to ensure robust functionality and performance consistency.",
        "Constructed a resilient data layer in the backend to ensure 0% data corruption by requiring all API calls to pass through this layer before interacting with the database."
      ]
    }
  ];

  return (
    <section id="projects" className="py-16 fade-in stagger-4">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center" data-testid="projects-title">
        Projects
      </h2>
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="bg-card rounded-xl shadow-sm border border-border p-8"
            data-testid={`project-card-${index}`}
          >
            <h3 className="text-xl font-semibold text-foreground mb-4" data-testid={`project-name-${index}`}>
              {project.name}
            </h3>
            <ul className="space-y-3 text-muted-foreground">
              {project.achievements.map((achievement, achievementIndex) => (
                <li 
                  key={achievementIndex} 
                  className="flex items-start"
                  data-testid={`project-achievement-${index}-${achievementIndex}`}
                >
                  <i className="fas fa-chevron-right text-primary mt-1 mr-3 flex-shrink-0"></i>
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
