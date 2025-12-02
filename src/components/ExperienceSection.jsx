import React from "react";
import { FaBuilding, FaCalendarAlt } from "react-icons/fa";
import SpotlightCard from "./SpotlightCard";
import ElectricBorder from "./ElectricBorder";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Software Engineer",
      company: "Oriental Outsourcing Pvt Ltd",
      duration: "July 2022 - Present",
      description: "Leading end-to-end development across APIs, databases, and cloud deployment to deliver optimized, production-ready solutions.",
    },
    {
      title: "Software Engineer Intern",
      company: "Oriental Outsourcing Pvt Ltd",
      duration: "Sept 2021 - June 2022",
      description: "Led backend development for an internal inventory tracking system, building optimized APIs and efficient data workflows.",
    },
  ];

  return (
    <section
      id="experience"
      className="relative flex flex-col items-center justify-center min-h-screen w-full bg-black text-white snap-start pt-16 sm:pt-20 md:pt-24"
    >
      <div className="w-full max-w-6xl px-4 sm:px-6 md:px-12 py-12 sm:py-16 md:py-20">
        <h1
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-8 sm:mb-12 md:mb-16 text-center text-white 
          drop-shadow-[0_0_8px_rgba(168,85,247,0.3)]"
        >
          My Work Experience
        </h1>

        {/* Timeline Container */}
        <div className="relative w-full">
          {/* Vertical Timeline Line */}
          <div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-white/20 via-white/10 to-white/20"></div>

          {/* Experience Items */}
          <div className="space-y-8 sm:space-y-12 md:space-y-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start gap-4 sm:gap-6 md:gap-8 pl-10 sm:pl-12 md:pl-16">
                {/* Timeline Dot */}
                <div className="absolute left-0 top-2 flex items-center justify-center">
                  <div className="w-4 h-4 rounded-full bg-white/30 border-2 border-white/50"></div>
                  <div className="absolute w-12 h-12 rounded-full bg-white/5"></div>
                </div>

                {/* Content Card with Glass Effect, Spotlight, and Electric Border */}
                <ElectricBorder
                  color="#a855f7"
                  speed={0.4}
                  chaos={0.15}
                  thickness={1.5}
                  style={{ borderRadius: 12 }}
                  className="flex-1"
                >
                  <SpotlightCard
                    className="p-4 sm:p-6 md:p-8"
                    spotlightColor="rgba(255, 255, 255, 0.25)"
                  >
                  {/* Title */}
                  <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-3 text-white">
                    {exp.title}
                  </h2>

                  {/* Company and Duration */}
                  <div className="flex items-center gap-4 flex-wrap mb-4">
                    <div className="flex items-center gap-2 text-gray-300">
                      <FaBuilding className="text-base" />
                      <p className="text-base md:text-lg font-medium">{exp.company}</p>
                    </div>
                    <span className="text-gray-600">•</span>
                    <div className="flex items-center gap-2 text-gray-400">
                      <FaCalendarAlt className="text-sm" />
                      <p className="text-sm md:text-base">{exp.duration}</p>
                    </div>
                  </div>

                  {/* Description */}
                  {exp.description && (
                    <>
                      <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent my-4"></div>
                      <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                        {exp.description}
                      </p>
                    </>
                  )}
                </SpotlightCard>
                </ElectricBorder>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
