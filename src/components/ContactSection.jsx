import React, { useState } from "react";
import SpotlightCard from "./SpotlightCard";
import ProfileCard from "./ProfileCard";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState({ type: null, message: "" });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    // Clear status message when user starts typing
    if (submitStatus.type) {
      setSubmitStatus({ type: null, message: "" });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus({ type: null, message: "" });

    try {
      // Option 1: Using Formspree (Recommended - No backend needed)
      // Get your form endpoint from https://formspree.io
      // Replace 'YOUR_FORM_ID' with your actual Formspree form ID
      const response = await fetch("https://formspree.io/f/meoyklqk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
          _subject: `New Project Inquiry from ${formData.name}`,
        }),
      });

      if (response.ok) {
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent. I'll get back to you soon.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }

      // Option 2: Using your own backend API
      // Uncomment this and replace with your API endpoint
      /*
      const response = await fetch("YOUR_API_ENDPOINT", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        const data = await response.json();
        setSubmitStatus({
          type: "success",
          message: "Thank you! Your message has been sent.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Form submission failed");
      }
      */

      // Option 3: Using EmailJS (for sending emails directly)
      // You'll need to install: npm install @emailjs/browser
      // Uncomment and configure:
      /*
      import emailjs from '@emailjs/browser';
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      };

      await emailjs.send(
        'YOUR_SERVICE_ID',
        'YOUR_TEMPLATE_ID',
        templateParams,
        'YOUR_PUBLIC_KEY'
      );

      setSubmitStatus({
        type: "success",
        message: "Thank you! Your message has been sent.",
      });
      setFormData({ name: "", email: "", message: "" });
      */
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus({
        type: "error",
        message: "Oops! Something went wrong. Please try again or contact me directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
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
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 mb-16">
          {/* Left Side - Profile Card */}
          <div className="w-full order-1 lg:order-1">
            <ProfileCard
              name="Puneet Kumar"
              title="Freelance Software Engineer • Full Stack Developer"
              bio="Available for freelance projects. Specializing in web development, full-stack solutions, and modern tech stacks. Let's collaborate and turn your vision into reality."
            />
          </div>

          {/* Right Side - Contact Form */}
          <div className="w-full order-2 lg:order-2">
            <SpotlightCard
              className="p-6 sm:p-8 md:p-10 w-full"
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

                {/* Status Message */}
                {submitStatus.type && (
                  <div
                    className={`p-4 rounded-xl ${
                      submitStatus.type === "success"
                        ? "bg-green-500/20 border border-green-500/30 text-green-300"
                        : "bg-red-500/20 border border-red-500/30 text-red-300"
                    }`}
                  >
                    <p className="text-sm font-medium">{submitStatus.message}</p>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full px-6 py-4 rounded-xl backdrop-blur-md bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-white font-semibold transition-all duration-300 shadow-lg relative overflow-hidden group ${
                    isSubmitting
                      ? "opacity-50 cursor-not-allowed"
                      : "cursor-pointer hover:from-blue-500/30 hover:to-purple-500/30 hover:border-blue-500/50 hover:shadow-blue-500/20"
                  }`}
                >
                  <span className="relative z-10">
                    {isSubmitting ? "Sending..." : "Send Project Inquiry"}
                  </span>
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

