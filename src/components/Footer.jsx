import React from "react";
import { 
  SiGithub, 
  SiLinkedin, 
  SiX, 
  SiYoutube, 
  SiInstagram 
} from "react-icons/si";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: <SiGithub className="text-xl sm:text-xl" />,
      href: "https://github.com/puneetkumarfc",
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: <SiLinkedin className="text-xl sm:text-xl" />,
      href: "https://www.linkedin.com/m/in/puneet-kumar-16a54a202",
      color: "hover:text-blue-400",
    },
    {
      name: "Twitter",
      icon: <SiX className="text-xl sm:text-xl" />,
      href: "https://x.com/puneet__sharmaa",
      color: "hover:text-blue-400",
    },
    {
      name: "YouTube",
      icon: <SiYoutube className="text-xl sm:text-xl" />,
      href: "https://www.youtube.com/@cfc_puneet",
      color: "hover:text-red-500",
    },
    {
      name: "Instagram",
      icon: <SiInstagram className="text-xl sm:text-xl" />,
      href: "https://instagram.com/puneetsharmaaa",
      color: "hover:text-pink-500",
    },
  ];

  return (
    <footer className="relative w-full bg-black">
      <div className="w-full">
        <div className="backdrop-blur-xl bg-white/5 border-t border-white/10 p-4 sm:p-6 md:p-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
            {/* Left - Copyright */}
            <div>
              <p className="text-xs sm:text-sm md:text-base text-gray-400">
                Copyright @ Puneet {new Date().getFullYear()}
              </p>
            </div>

            {/* Right - Connect with me */}
            <div className="flex items-center gap-3 sm:gap-4">
              {/* <p className="text-xs sm:text-sm md:text-base text-gray-400 mr-2">Connect with me:</p> */}
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative backdrop-blur-md bg-white/5 border border-white/10 rounded-full p-2 sm:p-3 text-white transition-all duration-300 hover:bg-white/10 hover:border-white/20 ${social.color}`}
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

