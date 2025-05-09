import BlurText from "../../Reactbits/BlurText/BlurText";
import { useEffect, useState } from "react";
import {
  FaPaintBrush,
  FaCode,
  FaInstagram,
  FaPenNib,
  FaLaptopCode,
  FaChartLine,
  FaPalette,
  FaDatabase,
  FaVideo,
  FaDraft2Digital,
} from "react-icons/fa";
import Particles from "../../Reactbits/Particles/Particles";
import Navbar from "../Components/Navbar";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const About = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

  useEffect(() => {
    const handleScroll = () => {
      const sections = {
        "about-section-1": document.getElementById("about-section-1"),
        "skills-section-1": document.getElementById("skills-section-1"),
        "about-section-2": document.getElementById("about-section-2"),
        "skills-section-2": document.getElementById("skills-section-2"),
        "about-section-3": document.getElementById("about-section-3"),
        "skills-section-3": document.getElementById("skills-section-3"),
        "about-section-4": document.getElementById("about-section-4"),
        "skills-section-4": document.getElementById("skills-section-4"),
        "about-section-5": document.getElementById("about-section-5"),
        "skills-section-5": document.getElementById("skills-section-5"),
        "about-section-6": document.getElementById("about-section-6"),
        "skills-section-6": document.getElementById("skills-section-6"),
      };

      const newVisibility: { [key: string]: boolean } = {};
      Object.entries(sections).forEach(([key, section]) => {
        if (section) {
          const rect = section.getBoundingClientRect();
          newVisibility[key] = rect.top < window.innerHeight * 0.75;
        }
      });

      setIsVisible(newVisibility);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const team = [
    {
      name: "Adriane D. Bordamonte",
      titleColor: "text-orange-400",
      bgGradient: "bg-gradient-to-br from-gray-900 to-orange-900/20",
      description1:
        "My name is Adriane. I've worked as a graphic designer for 2 years. My working experience has helped me to develop my skills, creativity, and attention to detail. Practicing has also made me better in this field. I have learned that graphic designers create visual content to communicate messages. My clients have always been satisfied with the novelty of my work. Message now so I can make your project successful too.",
      image: "public/assets/Adriane.png", 
      skills: [
        {
          icon: <FaPaintBrush size={40} />,
          title: "Graphic Designing",
          description: "Creating stunning visual designs.",
        },
        {
          icon: <FaVideo size={40} />,
          title: "Video Editor",
          description: "Making a good quality video",
        },
        {
          icon: <FaDraft2Digital size={40} />,
          title: "2D/3D Animator",
          description: "Creating a variety of animations",
        },
      ],
    },
    {
      name: "Hans Vincent Mathew, Osuna Escoto",
      titleColor: "text-blue-400",
      bgGradient: "bg-gradient-to-br from-gray-900 to-blue-900/20",
      description1:
        "Stuff about me: I have a deep appreciation for dinosaurs, cryptids, and monsters mostly because of their lore and designs, I also have a love for coffee (which I very much enjoy often), a sweet spot for caramel, and a passion for indie and horror related media whether it be stories or video game",
      image: "/images/hans.jpg", // Replace with actual image path
      skills: [
        {
          icon: <FaPenNib size={40} />,
          title: "UI Design",
          description: "Crafting intuitive interfaces.",
        },
        {
          icon: <FaPaintBrush size={40} />,
          title: "UX Research",
          description: "Understanding user needs.",
        },
        {
          icon: <FaLaptopCode size={40} />,
          title: "Prototyping",
          description: "Building interactive mockups.",
        },
      ],
    },
    {
      name: "Angelo F. Gopez",
      titleColor: "text-purple-400",
      bgGradient: "bg-gradient-to-br from-gray-900 to-purple-900/20",
      description1:
        "I am type of person whose into all sorts of stuff as such my passion for Digital Art, And has a love for specific games that really sparks me that keeps my dopamine pumpin! Such as specific VN, Interactive story and gacha games such as wuthering waves as my comfort game, and oh! Other games like Elsword, etc.",
      description2:
        "I like watching animes that really fascinates me such as frieren, spy family, 7DS, etc. I have a liking on food that savory stuff and oh! Sweets! Maybe a touch of spice! I am also chronically online as well as an ambivert with social prob but have to get use to it. Not the best at communicating to people due to have social issues sometimes but do please bare with me!",
      image: "/images/angelo.jpg", // Replace with actual image path
      skills: [
        {
          icon: <FaCode size={40} />,
          title: "Frontend Dev",
          description: "Building sleek UIs.",
        },
        {
          icon: <FaLaptopCode size={40} />,
          title: "Backend Dev",
          description: "Managing server logic.",
        },
        {
          icon: <FaDatabase size={40} />,
          title: "Databases",
          description: "Optimizing data storage.",
        },
      ],
    },
    {
      name: "Van Kerschanbel P. Angay",
      titleColor: "text-green-400",
      bgGradient: "bg-gradient-to-br from-gray-900 to-green-900/20",
      description1:
        "Hi, I'm Vk, and I'm passionate about drawing anime characters in my free time. I also reads Manga, Manhua, Manhwa.",
      image: "/images/van.jpg", // Replace with actual image path
      skills: [
        {
          icon: <FaInstagram size={40} />,
          title: "SEO",
          description: "Boosting search rankings.",
        },
        {
          icon: <FaChartLine size={40} />,
          title: "Analytics",
          description: "Tracking performance.",
        },
        {
          icon: <FaPenNib size={40} />,
          title: "Content Strategy",
          description: "Crafting engaging content.",
        },
      ],
    },
    {
      name: "Liam Patel",
      titleColor: "text-yellow-400",
      bgGradient: "bg-gradient-to-br from-gray-900 to-yellow-900/20",
      description1:
        "Creative illustrator and animator. Brings ideas to life with stunning visuals and dynamic motion graphics.",
      description2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/liam.jpg", // Replace with actual image path
      skills: [
        {
          icon: <FaPalette size={40} />,
          title: "Illustration",
          description: "Creating unique artwork.",
        },
        {
          icon: <FaPaintBrush size={40} />,
          title: "Animation",
          description: "Designing motion graphics.",
        },
        {
          icon: <FaLaptopCode size={40} />,
          title: "Digital Art",
          description: "Mastering design tools.",
        },
      ],
    },
    {
      name: "Olivia Grant",
      titleColor: "text-pink-400",
      bgGradient: "bg-gradient-to-br from-gray-900 to-pink-900/20",
      description1:
        "Data analyst with expertise in turning numbers into actionable insights. Passionate about data-driven decision making.",
      description2:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      image: "/images/olivia.jpg", // Replace with actual image path
      skills: [
        {
          icon: <FaDatabase size={40} />,
          title: "Data Analysis",
          description: "Interpreting complex data.",
        },
        {
          icon: <FaChartLine size={40} />,
          title: "Visualization",
          description: "Creating clear charts.",
        },
        {
          icon: <FaCode size={40} />,
          title: "Programming",
          description: "Writing analytical scripts.",
        },
      ],
    },
  ];

  return (
    <div className="relative min-h-screen bg-black text-white pb-20">
      {/* Particles Background */}
      <div
        style={{
          width: "100%",
          height: "100%",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 0, // Behind all content
        }}
      >
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={200}
          particleSpread={10}
          speed={0.1}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={false}
          disableRotation={false}
        />
      </div>

      {/* Content Container */}
      <div className="relative z-10">
        {/* Navbar */}
        <Navbar />
        {/* Meet the Team Section */}
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
          <BlurText
            text="Meet the Team"
            delay={150}
            animateBy="words"
            direction="top"
            onAnimationComplete={handleAnimationComplete}
            className="text-8xl text-white -mt-20"
          />
        </div>
        {/* Team Members with About and Skills */}
        {team.map((member, index) => (
          <div key={index} className="my-16 mx-4">
            {/* About Section */}
            <div
              id={`about-section-${index + 1}`}
              className={`transition-opacity duration-1000 ease-in-out mb-10 ${
                isVisible[`about-section-${index + 1}`]
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div
                className={`max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-center p-10 ${member.bgGradient} rounded-xl shadow-lg`}
              >
                <div className="w-full md:w-1/3 p-4">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full max-w-[250px] mx-auto rounded-lg shadow-lg object-cover"
                  />
                </div>
                <div className="w-full md:w-2/3 p-6">
                  <h2
                    className={`text-4xl font-bold ${member.titleColor} mb-4`}
                  >
                    {member.name}
                  </h2>
                  <p className="text-gray-300 text-lg">{member.description1}</p>
                  {member.description2 && (
                    <p className="text-gray-300 text-lg mt-4">
                      {member.description2}
                    </p>
                  )}
                </div>
              </div>
            </div>

            {/* Skills Section */}
            <div
              className={`${member.bgGradient} text-white py-16 rounded-xl shadow-lg`}
            >
              <h2
                className={`text-4xl font-bold text-center ${member.titleColor} mb-6`}
              >
                Skills
              </h2>
              <div
                className={`w-20 h-1 ${member.titleColor.replace(
                  "text-",
                  "bg-"
                )} mx-auto mb-10`}
              ></div>

              <div
                id={`skills-section-${index + 1}`}
                className={`max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 p-6 transition-opacity duration-1000 ease-in-out ${
                  isVisible[`skills-section-${index + 1}`]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-10"
                }`}
              >
                {member.skills.map((skill, skillIndex) => (
                  <div
                    key={skillIndex}
                    className={`border ${member.titleColor.replace(
                      "text-",
                      "border-"
                    )} p-8 rounded-lg text-center hover:text-orange-500 hover:border-green-500 transition duration-300`}
                  >
                    <div className={`${member.titleColor} text-5xl mb-4`}>
                      {skill.icon}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      {skill.title}
                    </h3>
                    <p className="text-gray-300">{skill.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;