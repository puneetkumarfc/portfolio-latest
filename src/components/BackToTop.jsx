import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa';

const BackToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      const scrollY = window.pageYOffset;
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollBottom = documentHeight - (scrollY + windowHeight);
      
      // Show button when page is scrolled down 300px
      if (scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Check if near bottom (within 120px of footer)
      // Footer height is approximately 80-100px, so we add some buffer
      if (scrollBottom < 120) {
        setIsNearBottom(true);
      } else {
        setIsNearBottom(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    // Check on mount
    toggleVisibility();

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed z-50 p-3 sm:p-4 rounded-full 
        backdrop-blur-md bg-white/10 border border-white/20 text-white 
        hover:bg-white/20 hover:border-white/30 transition-all duration-300
        shadow-[0_4px_30px_rgba(0,0,0,0.3)] hover:shadow-[0_6px_40px_rgba(59,130,246,0.4)]
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4 pointer-events-none'}
        ${isNearBottom ? 'bottom-24 right-6' : 'bottom-6 right-6'}
        cursor-pointer group`}
      aria-label="Back to top"
    >
      <FaArrowUp className="text-lg sm:text-xl group-hover:translate-y-[-2px] transition-transform duration-300" />
    </button>
  );
};

export default BackToTop;

