import { useState } from 'react';

export default function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleLinkClick = () => {
    closeMobileMenu();
  };

  return (
    <nav className="fixed top-0 w-full bg-card/95 backdrop-blur-sm border-b border-border z-50" data-testid="navigation">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-semibold text-lg text-foreground" data-testid="nav-logo">
            HP
          </div>
          
          {/* Desktop Navigation */}
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
            <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors" data-testid="link-contact">
              Contact
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMobileMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-muted-foreground hover:text-primary hover:bg-accent/50 transition-colors"
              aria-expanded="false"
              data-testid="button-mobile-menu"
            >
              <span className="sr-only">Open main menu</span>
              {!isMobileMenuOpen ? (
                <i className="fas fa-bars text-xl"></i>
              ) : (
                <i className="fas fa-times text-xl"></i>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-sm border-t border-border" data-testid="mobile-menu">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a 
              href="#about" 
              className="block px-3 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent/30 transition-colors rounded-md" 
              data-testid="mobile-link-about"
              onClick={handleLinkClick}
            >
              About
            </a>
            <a 
              href="#education" 
              className="block px-3 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent/30 transition-colors rounded-md" 
              data-testid="mobile-link-education"
              onClick={handleLinkClick}
            >
              Education
            </a>
            <a 
              href="#skills" 
              className="block px-3 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent/30 transition-colors rounded-md" 
              data-testid="mobile-link-skills"
              onClick={handleLinkClick}
            >
              Skills
            </a>
            <a 
              href="#experience" 
              className="block px-3 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent/30 transition-colors rounded-md" 
              data-testid="mobile-link-experience"
              onClick={handleLinkClick}
            >
              Experience
            </a>
            <a 
              href="#projects" 
              className="block px-3 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent/30 transition-colors rounded-md" 
              data-testid="mobile-link-projects"
              onClick={handleLinkClick}
            >
              Projects
            </a>
            <a 
              href="#interests" 
              className="block px-3 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent/30 transition-colors rounded-md" 
              data-testid="mobile-link-interests"
              onClick={handleLinkClick}
            >
              Interests
            </a>
            <a 
              href="#contact" 
              className="block px-3 py-3 text-base font-medium text-muted-foreground hover:text-primary hover:bg-accent/30 transition-colors rounded-md" 
              data-testid="mobile-link-contact"
              onClick={handleLinkClick}
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
