import React, { useState, useEffect } from "react";

const Stepper = ({ steps, interval = 3000, onStepChange }) => {
  const [currentStep, setCurrentStep] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentStep((prev) => {
        const next = (prev + 1) % steps.length;
        if (onStepChange) onStepChange(next);
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, [steps.length, interval, onStepChange]);

  const handleDotClick = (index) => {
    setCurrentStep(index);
    if (onStepChange) onStepChange(index);
  };

  return (
    <div className="relative w-full h-full">
      {/* Content Area - Full height since dots are hidden */}
      <div className="relative w-full h-full" style={{ minHeight: 0 }}>
        {steps.map((step, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentStep ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
            style={{ visibility: index === currentStep ? 'visible' : 'hidden' }}
          >
            {step}
          </div>
        ))}
      </div>
      
      {/* Indicator Dots - Hidden for now */}
      <div className="hidden">
        {steps.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className={`transition-all duration-300 rounded-full cursor-pointer ${
              index === currentStep
                ? "w-2.5 h-2.5 bg-white"
                : "w-2 h-2 bg-white/40 hover:bg-white/60"
            }`}
            aria-label={`Go to step ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Stepper;

