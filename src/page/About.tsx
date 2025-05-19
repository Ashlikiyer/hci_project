import BlurText from "../../Reactbits/BlurText/BlurText";
import { useEffect, useState } from "react";
import {
  FaPaintBrush,
  FaPenNib,
  FaVideo,
  FaDraft2Digital,
  FaLanguage,
  FaSketch,
  FaDigitalTachograph,
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
      image: "/assets/Adriane.png", 
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
        "- Howdy, I'm Hans! I’m into drawing, editing videos, and diving into indie and video games. Some facts about me: I love coffee (probably too much), dinosaurs are awesome, and I’m a big fan of indie and video games such as Undertale, Five Nights at Freddy’s, Fallout. I speak pretty fluent English and enjoy mixing fun with creativity in whatever I do",
      image: "assets/hanss.png", 
      skills: [
        {
          icon: <FaVideo size={40} />,
          title: "Video Editor",
          description: "Crafting intuitive interfaces.",
        },
        {
          icon: <FaPaintBrush size={40} />,
          title: "Artist",
          description: "Creating stunning visuals.",
        },
        {
          icon: <FaLanguage size={40} />,
          title: "Fluent other language",
          description: "I can speak english",
        },
      ],
    },
    {
      name: "John Carlo Vinarao",
      titleColor: "text-purple-400",
      bgGradient: "bg-gradient-to-br from-gray-900 to-purple-900/20",
      description1:
        "Hello, my name is John Carlo Vinarao, and I have the privilege of playing games for a living, specializing in genres like FPS, Adventure, Survival, and Puzzle. In addition to my passion for gaming, I have a deep affection for raccoons and ferrets. I consider myself a really good swimmer, and while I don't draw frequently, I enjoy it when I'm bored or when there's a specific activity, assignment, or project that involves drawing.",
      image: "/assets/John.png", 
      skills: [
        {
          icon: <FaDraft2Digital size={40} />,
          title: "Basic Drawing",
          description: "Creating basic sketches.",
        },
        {
          icon: <FaSketch size={40} />,
          title: "Sketching",
          description: "Creating detailed sketches.",
        },
        {
          icon: <FaDigitalTachograph size={40} />,
          title: "Technical Drafting (Manual and a little bit of Digital)",
          description: "Creating technical drawings.",
        },
      ],
    },
    {
      name: "Angelo F. Gopez",
      titleColor: "text-green-400",
      bgGradient: "bg-gradient-to-br from-gray-900 to-green-900/20",
      description1:
        "Introduction: Hi! I’m Angelo F. Gopez, a person who’s into all sorts of creative interests, especially digital art. I have a strong passion for drawing (even if I haven’t made much recently due to burnout and personal stuff), and I find joy and inspiration in games like visual novels, interactive stories, and gacha games—Wuthering Waves is my comfort game! I also play other games like Elsword. I enjoy watching anime that fascinates me, such as Frieren, Spy x Family, and The Seven Deadly Sins. When it comes to food, I love anything savory, sweet, and even with a little spice! I'm chronically online, an ambivert with social challenges, and not always the best at communicating. But I try my best, so please bear with me!",
      image: "/assets/angelo.png", 
      skills: [
        {
          icon: <FaDigitalTachograph size={40} />,
          title: "Digital Drawing",
          description: "Creating digital illustrations.",
        },
        {
          icon: <FaSketch size={40} />,
          title: "Original Character Design",
          description: "Creating unique characters.",
        },
        {
          icon: <FaPenNib size={40} />,
          title: "Basic Use of Ibis Paint & Clip Studio.",
          description: "Creating digital illustrations.",
        },
      ],
    },
    {
      name: "Maria Julyanna Silvestre",
      titleColor: "text-pink-400",
      bgGradient: "bg-gradient-to-br from-gray-900 to-pink-900/20",
      description1:
        "Hi everyone! My name is Maria Julyanna Silvestre, and I'm a huge fan of first-person shooter games like Valorant, Overwatch 2, Apex Legends, Call of Duty, and many more! I absolutely love animals and hope to become an animal advocate someday. I consider myself a good (but not great) singer. While I’m still new to digital art and not very skilled at it yet, I’m pretty good at traditional art. I also enjoy watching true crime documentaries, horror, thrillers, and—of course—romance.",
    
      image: "/assets/julyanna.png", 
      skills: [
        {
          icon: <FaDraft2Digital size={40} />,
          title: "Digital Art",
          description: "Creating digital illustrations.",
        },
        {
          icon: <FaPaintBrush size={40} />,
          title: "Traditional Art",
          description: "Creating traditional illustrations.",
        },
        {
          icon: <FaSketch size={40} />,
          title: "Graphic Design",
          description: "Creating stunning visuals.",
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