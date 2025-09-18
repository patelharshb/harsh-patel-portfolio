export default function HobbiesSection() {
  return (
    <section id="hobbies" className="py-16 fade-in stagger-6">
      <h2 className="text-3xl font-bold text-foreground mb-8 text-center" data-testid="hobbies-title">
        Personal Interests & Hobbies
      </h2>
      <div className="bg-card rounded-xl shadow-sm border border-border p-8" data-testid="hobbies-card">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center justify-center" data-testid="hobbies-subtitle">
            <i className="fas fa-heart text-primary mr-2"></i>
            What I Enjoy Outside of Work
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors" data-testid="hobby-finance">
              <i className="fas fa-book-open text-2xl text-primary mb-3"></i>
              <h4 className="font-medium text-foreground mb-2">Reading about Finance</h4>
              <p className="text-sm text-muted-foreground text-center">Staying updated with market trends and investment strategies</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors" data-testid="hobby-volleyball">
              <i className="fas fa-volleyball text-2xl text-primary mb-3"></i>
              <h4 className="font-medium text-foreground mb-2">Volleyball</h4>
              <p className="text-sm text-muted-foreground text-center">Team sport that builds communication and coordination</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors" data-testid="hobby-cricket">
              <i className="fas fa-baseball text-2xl text-primary mb-3"></i>
              <h4 className="font-medium text-foreground mb-2">Cricket</h4>
              <p className="text-sm text-muted-foreground text-center">Strategic sport requiring patience and tactical thinking</p>
            </div>
            <div className="flex flex-col items-center p-4 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors" data-testid="hobby-tennis">
              <i className="fas fa-tennis-ball text-2xl text-primary mb-3"></i>
              <h4 className="font-medium text-foreground mb-2">Tennis</h4>
              <p className="text-sm text-muted-foreground text-center">Individual sport that improves focus and agility</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}