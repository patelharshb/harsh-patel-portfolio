export default function ExperienceSection() {
  const experiences = [
    {
      title: "Python Developer Co-op",
      company: "Solaires Entreprises Inc.",
      period: "Jan 2025 - Aug 2025",
      achievements: [
        "Designed and implemented a state machine in a standalone PyQt5 application to dynamically render up to 14 boxplots using Matplotlib, based on any combination of 7 interactive checkboxes.",
        "Updated the local standalone PyQt5 software by adding experiment-specific checkboxes, modifying the database schema, integrating a calendar widget, and enhancing the UI with additional labels, buttons, and functionalities.",
        "Created Flask middleware with 10+ API routes to facilitate seamless communication between the Vue.js frontend and the Node.js backend.",
        "Built a secure Vue.js login page using HTTP-only cookies for session validation, added logout and frontend inactivity timeout features, and created a swimlane diagram illustrating the JWT authentication logic.",
        "Developed a Vue.js page with 2 unique layouts to display database items, featuring responsive resizing, pagination, and adjustable content display that dynamically adapts the layout."
      ]
    },
    {
      title: "Software Engineer Intern",
      company: "Clutch Canada",
      period: "Jan 2022 - Aug 2022",
      achievements: [
        "Developed a docker compatible scraper to gather data from Autotrader for business executives to make decisions on pricing and demand of the vehicle, preventing 80% of errors generated from connection issues.",
        "Executed scraper inside docker container (automated with Airflow DAG) by structuring ECS Fargate cluster and ECR repository, resulting in the reduction of scraper runtime by 30%.",
        "Initiated and designed software, integrated with Airflow, that converts unstructured PDF files to CSV to analyze vehicle data, decreasing 80% of time spent on the evaluation of each PDF file.",
        "Enhanced data protection by encrypting 100% of customer private information stored in the database.",
        "Reconstructed scrapers for Autotrader, Kijiji, and CarGurus and performed automation using Python and Amazon Lambda, improving scraper runtime by 20% compared to previous execution.",
        "Implemented thorough unit testing, achieving over 60% coverage, leading to a more robust and reliable program.",
        "Deployed a lambda function that format alerts from SNS and delivers to the specified Slack channel, ensuring alerts miss rate of 0%."
      ]
    },
    {
      title: "Software Developer Intern",
      company: "Curbie Cars",
      period: "Sept 2021 - Jan 2022",
      achievements: [
        "Redesigned the data gathering process for CBB API using asynchronous and multi-threading algorithms in Python to develop machine learning models for vehicle price prediction, improving script runtime by 300%.",
        "Collected visitor's data from Matomo API using Amazon Lambda for the marketing team to understand customer needs, resulting in 20% higher website traffic and improved customer service.",
        "Presented a comprehensive 50-slide solution to the CTO outlining the process for identifying visitors on the website using Matomo."
      ]
    }
  ];

  return (
    <section id="experience" className="py-16 fade-in stagger-3">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center" data-testid="experience-title">
        Experience
      </h2>
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <div 
            key={index} 
            className="bg-card rounded-xl shadow-sm border border-border p-8"
            data-testid={`experience-card-${index}`}
          >
            <div className="flex flex-col lg:flex-row lg:items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-semibold text-foreground" data-testid={`experience-title-${index}`}>
                  {exp.title}
                </h3>
                <p className="text-primary font-medium" data-testid={`experience-company-${index}`}>
                  {exp.company}
                </p>
              </div>
              <div className="text-foreground mt-2 lg:mt-0">
                <p data-testid={`experience-period-${index}`}>{exp.period}</p>
              </div>
            </div>
            <ul className="space-y-3 text-foreground">
              {exp.achievements.map((achievement, achievementIndex) => (
                <li 
                  key={achievementIndex} 
                  className="flex items-start"
                  data-testid={`experience-achievement-${index}-${achievementIndex}`}
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
