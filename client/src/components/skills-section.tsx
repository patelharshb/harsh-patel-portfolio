export default function SkillsSection() {
  const languages = [
    "Python", "Java", "C", "SQL", "R", "MATLAB", "JavaScript", "HTML", "CSS"
  ];

  const frameworks = [
    "Flask", "Vue.js", "Node.js", "Express.js", "PyQt5", "Matplotlib", 
    "Pandas", "PySpark", "NumPy", "Scikit-learn"
  ];

  const tools = [
    "Git", "Sisense", "Secoda", "Amplitude", "Terraform", "Docker", 
    "Apache Airflow", "Linux", "Selenium", "Gherkin"
  ];

  const databases = [
    "SQLite", "PostgreSQL", "AWS EC2", "ECS", "ECR", "SNS", 
    "S3", "Redshift", "Lambda", "SageMaker"
  ];

  return (
    <section id="skills" className="py-16 fade-in stagger-2">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center" data-testid="skills-title">
        Technical Skills
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-card rounded-xl shadow-sm border border-border p-6" data-testid="skills-languages">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <i className="fas fa-code text-primary mr-2"></i>
            Languages
          </h3>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-primary/10 text-primary rounded text-sm"
                data-testid={`skill-language-${index}`}
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
        
        <div className="bg-card rounded-xl shadow-sm border border-border p-6" data-testid="skills-frameworks">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <i className="fas fa-layer-group text-primary mr-2"></i>
            Frameworks
          </h3>
          <div className="flex flex-wrap gap-2">
            {frameworks.map((framework, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-accent/70 text-accent-foreground rounded text-sm"
                data-testid={`skill-framework-${index}`}
              >
                {framework}
              </span>
            ))}
          </div>
        </div>
        
        <div className="bg-card rounded-xl shadow-sm border border-border p-6" data-testid="skills-tools">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <i className="fas fa-tools text-primary mr-2"></i>
            Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-secondary text-secondary-foreground rounded text-sm"
                data-testid={`skill-tool-${index}`}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
        
        <div className="bg-card rounded-xl shadow-sm border border-border p-6" data-testid="skills-database">
          <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center">
            <i className="fas fa-cloud text-primary mr-2"></i>
            Database & Cloud
          </h3>
          <div className="flex flex-wrap gap-2">
            {databases.map((db, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-muted text-muted-foreground rounded text-sm"
                data-testid={`skill-database-${index}`}
              >
                {db}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
