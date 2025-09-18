export default function Navigation() {
  return (
    <nav className="fixed top-0 w-full bg-card/95 backdrop-blur-sm border-b border-border z-50" data-testid="navigation">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-semibold text-lg text-foreground" data-testid="nav-logo">
            Harsh Patel
          </div>
          <div className="hidden md:flex space-x-6">
            <a href="#about" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-about">
              About
            </a>
            <a href="#education" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-education">
              Education
            </a>
            <a href="#skills" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-skills">
              Skills
            </a>
            <a href="#experience" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-experience">
              Experience
            </a>
            <a href="#projects" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-projects">
              Projects
            </a>
            <a href="#interests" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-interests">
              Interests
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
