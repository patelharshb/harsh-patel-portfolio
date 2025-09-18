import resumePdf from "@assets/Harsh Patel Resume_1758227471827.pdf";

export default function HeroSection() {
  return (
    <header id="about" className="pt-24 pb-16 bg-gradient-to-br from-primary/5 via-background to-accent/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-6" data-testid="hero-title">
            Harsh Patel
          </h1>
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto" data-testid="hero-subtitle">
            Software Engineering Graduate | Full-Stack Developer | Finance Enthusiast
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <div className="flex items-center gap-2 text-muted-foreground" data-testid="contact-phone">
              <i className="fas fa-phone text-primary"></i>
              <span>+1 204-441-8570</span>
            </div>
            <div className="flex items-center gap-2 text-muted-foreground" data-testid="contact-email">
              <i className="fas fa-envelope text-primary"></i>
              <span>pharshb1781@gmail.com</span>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-6">
            <a 
              href={resumePdf}
              download="Harsh_Patel_Resume.pdf"
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors font-medium"
              data-testid="button-download-resume"
            >
              <i className="fas fa-download mr-2"></i>
              Download Resume
            </a>
          </div>
          <div className="flex justify-center space-x-6">
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              data-testid="button-github"
            >
              <i className="fab fa-github mr-2"></i>
              GitHub
            </a>
            <a 
              href="#" 
              className="inline-flex items-center px-6 py-3 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors"
              data-testid="button-linkedin"
            >
              <i className="fab fa-linkedin mr-2"></i>
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
