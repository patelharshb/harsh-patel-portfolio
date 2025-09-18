import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import EducationSection from "@/components/education-section";
import SkillsSection from "@/components/skills-section";
import ExperienceSection from "@/components/experience-section";
import ProjectsSection from "@/components/projects-section";
import FinanceSection from "@/components/finance-section";
import HobbiesSection from "@/components/hobbies-section";
import Footer from "@/components/footer";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    // Smooth scrolling for navigation links
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLAnchorElement;
      if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('#')) {
        e.preventDefault();
        const targetElement = document.querySelector(target.getAttribute('href')!);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    };

    document.addEventListener('click', handleClick);

    // Add fade-in animation on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in');
        }
      });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
      observer.observe(section);
    });

    return () => {
      document.removeEventListener('click', handleClick);
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-background font-sans leading-relaxed">
      <Navigation />
      <HeroSection />
      <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <EducationSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <FinanceSection />
        <HobbiesSection />
      </main>
      <Footer />
    </div>
  );
}
