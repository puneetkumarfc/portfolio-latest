import React, { useState } from "react";
import SpotlightCard from "./SpotlightCard";
import ProfileCard from "./ProfileCard";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section
      id="contact"
      className="relative flex flex-col items-center justify-center min-h-screen w-full bg-black text-white snap-start"
    >
      <div className="w-full max-w-7xl px-6 md:px-12 py-20">
        <h1
          className="text-5xl md:text-6xl font-bold mb-4 text-center text-white 
          drop-shadow-[0_0_8px_rgba(59,130,246,0.3)]"
        >
          Let's Work Together
        </h1>
        <p className="text-xl md:text-2xl text-gray-400 text-center mb-16">
          Available for freelance projects • Let's bring your ideas to life
        </p>

        {/* Main Content: Profile Card + Contact Form */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mb-16">
          {/* Left Side - Profile Card */}
          <div>
            <ProfileCard
              name="Puneet Kumar"
              title="Freelance Software Engineer • Full Stack Developer"
              bio="Available for freelance projects. Specializing in web development, full-stack solutions, and modern tech stacks. Let's collaborate and turn your vision into reality."
            />
          </div>

          {/* Right Side - Contact Form */}
          <div>
            <SpotlightCard
              className="p-8 md:p-10 h-full"
              spotlightColor="rgba(255, 255, 255, 0.25)"
            >
              <div className="mb-8">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                  Start Your Project
                </h2>
                <p className="text-gray-400 text-sm md:text-base">
                  Tell me about your project and let's discuss how I can help
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-300"
                  >
                    Your Name / Company
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="Your name or company name"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-300"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-5 py-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-300"
                  >
                    Project Details
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-5 py-4 rounded-xl backdrop-blur-md bg-white/5 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500/50 focus:bg-white/10 focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 resize-none"
                    placeholder="Describe your project, timeline, budget, and any specific requirements..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-6 py-4 rounded-xl backdrop-blur-md bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-white font-semibold hover:from-blue-500/30 hover:to-purple-500/30 hover:border-blue-500/50 transition-all duration-300 shadow-lg hover:shadow-blue-500/20 relative overflow-hidden group"
                >
                  <span className="relative z-10">Send Project Inquiry</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-300"></div>
                </button>
              </form>
            </SpotlightCard>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

