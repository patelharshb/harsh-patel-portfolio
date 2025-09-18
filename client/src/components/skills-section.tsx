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
        <div className="bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-xl shadow-lg border border-blue-200 dark:border-blue-700 p-6 hover:shadow-xl transition-all duration-300" data-testid="skills-languages">
          <h3 className="text-lg font-semibold text-blue-900 dark:text-blue-100 mb-4 flex items-center">
            <i className="fas fa-code text-blue-600 dark:text-blue-400 mr-2 text-xl"></i>
            Languages
          </h3>
          <div className="flex flex-wrap gap-2">
            {languages.map((lang, index) => (
              <span 
                key={index} 
                className="px-3 py-1.5 bg-blue-600 text-white rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-200 cursor-default shadow-sm"
                data-testid={`skill-language-${index}`}
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-green-50 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 rounded-xl shadow-lg border border-green-200 dark:border-green-700 p-6 hover:shadow-xl transition-all duration-300" data-testid="skills-frameworks">
          <h3 className="text-lg font-semibold text-green-900 dark:text-green-100 mb-4 flex items-center">
            <i className="fas fa-layer-group text-green-600 dark:text-green-400 mr-2 text-xl"></i>
            Frameworks
          </h3>
          <div className="flex flex-wrap gap-2">
            {frameworks.map((framework, index) => (
              <span 
                key={index} 
                className="px-3 py-1.5 bg-green-600 text-white rounded-lg text-sm font-medium hover:bg-green-700 transition-colors duration-200 cursor-default shadow-sm"
                data-testid={`skill-framework-${index}`}
              >
                {framework}
              </span>
            ))}
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-purple-50 to-violet-100 dark:from-purple-900/30 dark:to-violet-900/30 rounded-xl shadow-lg border border-purple-200 dark:border-purple-700 p-6 hover:shadow-xl transition-all duration-300" data-testid="skills-tools">
          <h3 className="text-lg font-semibold text-purple-900 dark:text-purple-100 mb-4 flex items-center">
            <i className="fas fa-tools text-purple-600 dark:text-purple-400 mr-2 text-xl"></i>
            Tools
          </h3>
          <div className="flex flex-wrap gap-2">
            {tools.map((tool, index) => (
              <span 
                key={index} 
                className="px-3 py-1.5 bg-purple-600 text-white rounded-lg text-sm font-medium hover:bg-purple-700 transition-colors duration-200 cursor-default shadow-sm"
                data-testid={`skill-tool-${index}`}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
        
        <div className="bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-900/30 dark:to-red-900/30 rounded-xl shadow-lg border border-orange-200 dark:border-orange-700 p-6 hover:shadow-xl transition-all duration-300" data-testid="skills-database">
          <h3 className="text-lg font-semibold text-orange-900 dark:text-orange-100 mb-4 flex items-center">
            <i className="fas fa-cloud text-orange-600 dark:text-orange-400 mr-2 text-xl"></i>
            Database & Cloud
          </h3>
          <div className="flex flex-wrap gap-2">
            {databases.map((db, index) => (
              <span 
                key={index} 
                className="px-3 py-1.5 bg-orange-600 text-white rounded-lg text-sm font-medium hover:bg-orange-700 transition-colors duration-200 cursor-default shadow-sm"
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
