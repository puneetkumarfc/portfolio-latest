import React from "react";
import SpotlightCard from "./SpotlightCard";
import Stepper from "./Stepper";
import { FaUserCircle, FaClock } from "react-icons/fa";

const ProfileCard = ({ name, title, image, bio }) => {
  const steps = [
    // Step 1: Profile with Icon
    <div key="step1" className="w-full h-full flex flex-col">
      <div className="flex-1 flex flex-col justify-center py-4">
        {/* Profile Icon */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <FaUserCircle className="text-5xl sm:text-6xl md:text-7xl text-white/80" />
        </div>
        
        {/* Name */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 sm:mb-6 text-white text-center leading-tight">
          {name || "Your Name"}
        </h2>
        
        {/* Title */}
        <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-4 sm:mb-6 text-center font-light px-2">
          {title || "Software Engineer • Full Stack Developer"}
        </p>
        
        {/* Bio */}
        {bio && (
          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center text-gray-300 px-2">
            {bio}
          </p>
        )}
      </div>
    </div>,

    // Step 2: Availability with Time Icon
    <div key="step2" className="w-full h-full flex flex-col">
      <div className="flex-1 flex flex-col justify-center py-4">
        {/* Time Icon */}
        <div className="flex justify-center mb-4 sm:mb-6">
          <FaClock className="text-5xl sm:text-6xl md:text-7xl text-white/80" />
        </div>
        
        {/* Availability Text */}
        <div className="text-center mb-4 sm:mb-6 px-2">
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight">
            24x7 Available
          </p>
          <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white leading-tight mt-2">
            365 days across all timezones
          </p>
        </div>
        
        {/* Content */}
        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-center text-gray-300 px-2">
          I am available all the time to work on your projects and bring your ideas to life. No matter your timezone, I'm here to help.
        </p>
      </div>
    </div>,
  ];

  return (
    <div className="relative h-full">
      <SpotlightCard
        className="p-8 md:p-10 h-full flex flex-col"
        spotlightColor="rgba(255, 255, 255, 0.25)"
      >
        <Stepper steps={steps} interval={8000} />
      </SpotlightCard>
    </div>
  );
};

export default ProfileCard;

