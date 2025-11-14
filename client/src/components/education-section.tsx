export default function EducationSection() {
  return (
    <section id="education" className="py-16 fade-in stagger-1">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center" data-testid="education-title">
        Education
      </h2>
      <div className="bg-card rounded-xl shadow-sm border border-border p-8" data-testid="education-card">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
          <div>
            <h3 className="text-xl font-semibold text-foreground" data-testid="degree-title">
              Bachelor of Software Engineering
            </h3>
            <p className="text-muted-foreground" data-testid="university-name">
              University of Victoria
            </p>
          </div>
          <div className="text-right mt-2 md:mt-0">
            <p className="text-muted-foreground" data-testid="education-period">
              Graduated: Nov 2025
            </p>
            <p className="text-sm text-primary font-medium" data-testid="gpa">
              GPA: 3.27 / 4.00
            </p>
          </div>
        </div>
        <div>
          <h4 className="font-medium text-foreground mb-3" data-testid="courses-title">
            Relevant Courses:
          </h4>
          <div className="flex flex-wrap gap-2" data-testid="courses-list">
            <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
              Data Mining
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
              Data Pattern and Recognition
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
              Artificial Intelligence
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
              Massive Datasets
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
              Database Systems
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
              DSA
            </span>
            <span className="px-3 py-1 bg-secondary text-secondary-foreground rounded-full text-sm">
              Operating Systems
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
