export default function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border py-12 mt-16" data-testid="footer">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-lg font-semibold text-foreground mb-4" data-testid="footer-title">
            Let's Connect
          </h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto" data-testid="footer-description">
            I am actively seeking software development opportunities where I can apply my technical skills 
            and contribute to innovative projects. Open to discussing how my experience can benefit your team.
          </p>
          <div className="flex justify-center space-x-6 mb-6">
            <a 
              href="mailto:pharshb1781@gmail.com" 
              className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground rounded-lg hover:bg-primary/90 transition-colors"
              data-testid="button-email"
            >
              <i className="fas fa-envelope mr-2"></i>
              Email Me
            </a>
            <a 
              href="tel:+12044418570" 
              className="inline-flex items-center px-4 py-2 bg-accent text-accent-foreground rounded-lg hover:bg-accent/80 transition-colors"
              data-testid="button-call"
            >
              <i className="fas fa-phone mr-2"></i>
              Call Me
            </a>
          </div>
          <p className="text-sm text-muted-foreground" data-testid="footer-copyright">
            © 2025 Harsh Patel. Built with passion for great user experiences.
          </p>
        </div>
      </div>
    </footer>
  );
}
