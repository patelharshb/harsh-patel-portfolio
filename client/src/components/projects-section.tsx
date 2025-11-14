export default function ProjectsSection() {
  const projects = [
    {
      name: "Bhavsej",
      achievements: [
        "Built a full-stack TypeScript order management system with React and Express.js, using Replit and Cursor to accelerate development and support rapid iteration across 10+ frontend components and 10+ backend routes.",
        "Integrated Google Sheets API and automated HTML email notifications to create a production-ready data pipeline that handled all customer orders, with ChatGPT and Copilot assisting in debugging and edge case handling.",
        "Implemented core business logic covering 5-stage order lifecycle management, multiple pricing rules, time-window delivery scheduling, and full Zod-based validation across 10+ form fields, using Claude, Gemini, and Perplexity to refine logic and ensure consistency."
      ]
    },
    {
      name: "VikesPlace",
      achievements: [
        "Engineered robust backend for a web application that mirrors the functionality of Facebook Marketplace.",
        "Enhanced backend of microservices with unit testing to ensure robust functionality and performance consistency.",
        "Constructed a resilient data layer in the backend to ensure 0% data corruption by requiring all API calls to pass through this layer before interacting with the database."
      ]
    },
    {
      name: "WhatsApp",
      achievements: [
        "Developed a real-time Android messaging application using Firebase to support one-on-one and group chats with instant synchronization, presence tracking, and file sharing, validated with 5 to 10 active test users.",
        "Implemented secure authentication workflows with email and phone verification through Firebase Authentication, improving sign-in consistency and reducing login-related issues identified during early testing.",
        "Designed a scalable messaging architecture using Firebase Realtime Database and Storage with a tabbed interface for chats, contacts, groups, and requests, and optimized RecyclerView adapters to minimize UI stutters on mid-range devices."
      ]
    },
    {
      name: "WeatherApp",
      achievements: [
        "Built a native Android weather app using Retrofit and RxJava to fetch real-time weather and 5-day forecasts from the OpenWeatherMap API, tested across 8 to 12 different cities to verify data accuracy and API response handling.",
        "Implemented GPS-based location detection with Google Play Services to automatically retrieve local weather, reducing the need for manual city searches and improving first-load accuracy during typical user testing.",
        "Designed a multi-fragment interface with ViewPager and TabLayout, integrating city search with autocomplete and Picasso for weather icons, resulting in smoother UI updates and consistent performance on mid-range Android devices."
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
            <div className="mb-6">
              <h3 className="text-xl font-semibold text-foreground" data-testid={`project-name-${index}`}>
                {project.name}
              </h3>
            </div>
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
