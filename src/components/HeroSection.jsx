import { Suspense, lazy } from "react";

// Lazy load Prism component (heavy WebGL component)
const Prism = lazy(() => import("../components/Prism"));

function HeroSection() {
  return (
    <section
      id="home"
      className="relative w-screen h-screen overflow-hidden bg-black"
      style={{ overscrollBehavior: "none" }}
    >
      {/* Full-screen Prism animation */}
      <Suspense fallback={<div className="absolute inset-0 bg-black" />}>
        <Prism
          animationType="rotate"
          timeScale={0.45}
          height={3}
          baseWidth={5}
          scale={2.8}
          hueShift={0.2}
          colorFrequency={0.8}
          noise={0.1}
          glow={1}
          bloom={1.2}
        />
      </Suspense>

      {/* Overlay text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center z-10 select-none">
        <h1 className="text-6xl font-bold mb-4 tracking-wide">Puneet Kumar</h1>
        <p className="text-lg md:text-2xl text-gray-300 font-light mb-8">
          Software Engineer • Full Stack Developer
        </p>

        {/* Smooth scroll link */}
        <a
          href="#projects"
          className="mt-2 text-sm md:text-base font-semibold px-8 py-3 rounded-full 
            backdrop-blur-md bg-white/10 border border-white/20 text-white 
            hover:bg-white/20 hover:border-white/30 transition-all duration-300
            shadow-[0_4px_30px_rgba(0,0,0,0.1)]"
        >
          View My Work
        </a>
      </div>
    </section>
  );
}

export default HeroSection;
