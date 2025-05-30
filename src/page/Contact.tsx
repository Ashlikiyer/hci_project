import { useEffect, useState } from "react";
import { FaFacebook,  FaInstagram, } from "react-icons/fa";
import Navbar from "../Components/Navbar";

const Contact = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = {
        "contact-card-1": document.getElementById("contact-card-1"),
        "contact-card-2": document.getElementById("contact-card-2"),
        "contact-card-3": document.getElementById("contact-card-3"),
        "contact-card-4": document.getElementById("contact-card-4"),
        "contact-card-5": document.getElementById("contact-card-5"),
        "contact-card-6": document.getElementById("contact-card-6"),
      };

      const newVisibility: Record<string, boolean> = {};
      Object.entries(sections).forEach(([key, section]) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          newVisibility[key] = rect.top < window.innerHeight * 0.75;
        }
      });

      setIsVisible(newVisibility);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Trigger on mount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const team = [
    {
      name: "Adriane D. Bordamonte",
      title: "Graphic Designer & Creative Technologist",
      image: "/assets/Adriane.png",
      socials: {
        instagram: "https://www.instagram.com/mr_mc.hottie/",
      },
    },
    {
      name: "Hans Vincent Mathew, Osuna Escoto",
      title: "Graphic Designer & Illustrator",
      image: "public/assets/hanss.png",
      socials: {
        facebook: "https://www.facebook.com/hanna.lulu.1232",
      },
    },
    {
      name: "John Carlo Vinarao",
      title: "Graphics Designer & digital artist",
      image: "/assets/John.png",
      socials: {
        facebook: "https://www.facebook.com/SaddHouse/",
    
      },
    },
    {
      name: "Angelo F. Gopez",
      title: "Graphic Designer & Illustrator",
      image: "/assets/angelo.png",
      socials: {
        facebook: "https://www.facebook.com/share/14zvwLc6P8/",
        
      },
    },
    {
      name: "Maria Julyanna Silvestre",
      title: "Graphic Designer",
      image: "/assets/julyanna.png",
      socials: {
        facebook: "https://www.facebook.com/share/18rfuQ69Eb/",
        instagram: "https://www.instagram.com/ria._.anna?igsh=MXdrNXRmMWlld213bA==",
      },
    },
    
  ];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navbar */}
      <Navbar />

      {/* Contact Section */}
      <div className="py-20 px-4">
        <h1 className="text-5xl font-bold text-center text-white mb-16">
          Contact Us
        </h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              id={`contact-card-${index + 1}`}
              className={`flex flex-col items-center p-6 bg-gray-800 rounded-xl shadow-lg transition-all duration-1000 ease-in-out transform hover:scale-105 hover:shadow-xl ${
                isVisible[`contact-card-${index + 1}`]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              {/* Profile Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full object-cover mb-4 border-4 border-gray-600"
              />

              {/* Name and Title */}
              <h2 className="text-xl font-semibold text-white">{member.name}</h2>
              <p className="text-gray-400 mb-4">{member.title}</p>

              {/* Social Media Links */}
              <div className="flex space-x-4">
                {member.socials.facebook && (
                  <a
                    href={member.socials.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-blue-600 transition-colors duration-300"
                  >
                    <FaFacebook size={24} />
                  </a>
                )}
             
               
                {member.socials.instagram && (
                  <a
                    href={member.socials.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-pink-500 transition-colors duration-300"
                  >
                    <FaInstagram size={24} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;