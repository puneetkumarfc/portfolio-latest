import React, { useState, useEffect } from "react";
import ChromaGrid from "./ChromaGrid";
import LogoLoop from "./LogoLoop";
import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiPhp,
  SiLaravel,
  SiSymfony,
  SiOpenjdk,
  SiSpringboot,
  SiDotnet,
  SiHtml5,
  SiCss3,
  SiMysql,
  // SiMicrosoftsqlserver,
  SiGraphql,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss
} from "react-icons/si";

const ProjectSection = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const items = [
    {
      image: "/pbot2.png",
      title: "Rag chat assistant: Chatbot",
      subtitle: "Python, Gemini API, Streamlit, FAISS",
      handle: "@puneetkumarfc",
      borderColor: "#b96410ff",
      gradient: "linear-gradient(180deg, #b96410ff, #000)",
    },
    {
      image: "/restro.jpg",
      title: "Pizza ordering Platform",
      subtitle: "JavaScript, React, Springboot",
      handle: "@puneetkumarfc",
      borderColor: "#3B82F6",
      gradient: "linear-gradient(145deg, #3B82F6, #000)",
    },
    {
      image: "/adminpanel.jpg",
      title: "Ordering System: Admin Panel",
      subtitle: "React, Java, Spring Boot, MySQL, Redis",
      handle: "@puneetkumarfc",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
    },
    {
      image: "/doctorpatient.jpeg",
      title: "Doctor Patient System",
      subtitle: "Java, Springboot, React, MySQL",
      handle: "@puneetkumarfc",
      borderColor: "rgb(16, 185, 55)",
      gradient: "linear-gradient(180deg,rgb(197, 48, 48), #000)",
    }
  ];

  const logos = [
    // ✅ MERN stack
    { node: <SiReact />, title: "React", href: "https://react.dev" },
    { node: <SiNodedotjs />, title: "Node.js", href: "https://nodejs.org" },
    { node: <SiExpress />, title: "Express", href: "https://expressjs.com" },
    { node: <SiMongodb />, title: "MongoDB", href: "https://mongodb.com" },

    // ✅ Frontend extras
    { node: <SiNextdotjs />, title: "Next.js", href: "https://nextjs.org" },
    { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
    { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
    { node: <SiHtml5 />, title: "HTML5", href: "https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/HTML5" },
    { node: <SiCss3 />, title: "CSS3", href: "https://developer.mozilla.org/en-US/docs/Web/CSS" },

    // ✅ Backend & frameworks
    { node: <SiPhp />, title: "PHP", href: "https://www.php.net" },
    { node: <SiLaravel />, title: "Laravel", href: "https://laravel.com" },
    { node: <SiSymfony />, title: "Symfony", href: "https://symfony.com" },
    { node: <SiOpenjdk />, title: "Java", href: "https://openjdk.org" },
    { node: <SiSpringboot />, title: "Spring Boot", href: "https://spring.io/projects/spring-boot" },
    { node: <SiDotnet />, title: ".NET", href: "https://dotnet.microsoft.com/" },

    // ✅ Databases & API
    { node: <SiMysql />, title: "MySQL", href: "https://www.mysql.com" },
    // { node: <SiMicrosoftsqlserver />, title: "MSSQL", href: "https://www.microsoft.com/en-us/sql-server" },
    { node: <SiGraphql />, title: "GraphQL", href: "https://graphql.org" },
  ];

  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center py-12 sm:py-16 md:py-20 pb-16 sm:pb-20 md:pb-24 bg-black text-white px-4 sm:px-6 md:px-8"
    >
      <h1
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-10 md:mb-12 text-center text-white 
          drop-shadow-[0_0_8px_rgba(59,130,246,0.3)] animate-fade-up"
      >
        My Recent Work
      </h1>
      <div 
        className="w-full mb-8 sm:mb-10 md:mb-12 lg:mb-16 relative" 
      >
        <div className="w-full relative" style={{ minHeight: '300px' }}>
          <ChromaGrid
            items={items}
            radius={isMobile ? 200 : 300}
            damping={0.45}
            fadeOut={0.6}
            ease="power3.out"
          />
        </div>
      </div>

      {/* Glass-effect Button */}
      <a
        href="https://github.com/puneetkumarfc"
        target="_blank"
        rel="noopener noreferrer"
        className="text-xs sm:text-sm md:text-base font-semibold px-6 sm:px-8 py-2.5 sm:py-3 rounded-full 
          backdrop-blur-md bg-white/10 border border-white/20 text-white 
          hover:bg-white/20 hover:border-white/30 transition-all duration-300
          shadow-[0_4px_30px_rgba(0,0,0,0.1)] mb-6 sm:mb-8 md:mb-16"
      >
        View All Projects
      </a>

      {/* Logo Loop */}
      <div className="w-full max-w-full px-2 sm:px-4 md:px-0 overflow-hidden relative z-10">
        <LogoLoop
          logos={logos}
          speed={120}
          direction="left"
          logoHeight={isMobile ? 28 : 48}
          gap={isMobile ? 20 : 40}
          fadeOut
          scaleOnHover
        />
      </div>
    </section>
  );
};

export default ProjectSection;
