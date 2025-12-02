import HeroSection from "../components/HeroSection";
import ProjectSection from "../components/ProjectSection";
import ExperienceSection from "../components/ExperienceSection";
import ContactSection from "../components/ContactSection";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";
import StaggeredMenu from "../components/StaggeredMenu";

function HomePage() {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Go to home page', link: '#home' },
    { label: 'Projects', ariaLabel: 'View my projects', link: '#projects' },
    { label: 'Experience', ariaLabel: 'View my experience', link: '#experience' },
    { label: 'Contact', ariaLabel: 'Get in touch', link: '#contact' }
  ];

  const socialItems = [
    { label: 'GitHub', link: 'https://github.com/puneetkumarfc' },
    { label: 'LinkedIn', link: 'https://www.linkedin.com/m/in/puneet-kumar-16a54a202' },
    { label: 'Twitter', link: 'https://x.com/puneet__sharmaa' },
    { label: 'YouTube', link: 'https://www.youtube.com/@cfc_puneet' },
    { label: 'Instagram', link: 'https://instagram.com/puneetsharmaaa' }
  ];

  return (
    <div>
      <StaggeredMenu
        position="right"
        items={menuItems}
        socialItems={socialItems}
        displaySocials={true}
        displayItemNumbering={true}
        menuButtonColor="#fff"
        openMenuButtonColor="#fff"
        changeMenuColorOnOpen={true}
        colors={['rgba(139, 92, 246, 0.15)', 'rgba(168, 85, 247, 0.1)', 'rgba(147, 51, 234, 0.12)']}
        isFixed={true}
        accentColor="#a855f7"
        closeOnClickAway={true}
        onMenuOpen={() => console.log('Menu opened')}
        onMenuClose={() => console.log('Menu closed')}
      />
      <HeroSection />
      <ProjectSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </div>
  );
}

export default HomePage;
