
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../Components/Navbar";
import ScrollVelocity from "../../Reactbits/ScrollVelocity/ScrollVelocity";
import "../../Reactbits/ScrollVelocity/ScrollVelocity.css";

// Team members data with unique project links
const teamMembers = [
  {
    name: "Adriane Bordamonte",
    role: " Creative Technologist",
    projects: [
      {
        title: "Vector Art",
        description:
          "Vector Art Using Adobe Illustrator that I call it 'The Boss Fight'.",
        imageUrl: "/assets/adri1.jpg",
        tags: ["Adobe Illustrator"],
        link: "https://www.behance.net/gallery/223025939/Illustrations?tracking_source=project_owner_other_projects",
      },
      {
        title: "Sabrina",
        description:
          "Horror Animated 2.5D Film Poster using Adobe Photoshop and Blender.",
        imageUrl: "/assets/adri2.jpg",
        tags: ["Adobe Photoshop", "Blender"],
        link: "https://www.behance.net/gallery/223025939/Illustrations?tracking_source=project_owner_other_projects",
      },
      {
        title: "Photo Manipulation",
        description:
          "Photo Manipulation Using Adobe Photoshop for a Car Wrap Company.",
        imageUrl: "/assets/adri3.jpg",
        tags: ["Adobe Photoshop"],
        link: "https://www.behance.net/gallery/223022673/Social-Media-Ads-and-Graphics",
      },
      {
        title: "Supplement Media",
        description: "Supplement Media Ad using Adobe Photoshop.",
        imageUrl: "/assets/adri4.jpg",
        tags: ["Adobe Photoshop"],
        link: "https://www.behance.net/gallery/223022673/Social-Media-Ads-and-Graphics",
      },
    ],
  },
  {
    name: "Hans Vincent Mathew",
    role: "Graphic Designer/Illustrator",
    projects: [
      {
        title: "EMC Introduction Project",
        description:
          "This Artwork was used in my Intro to EMC class for a quick introduction about me.",
        imageUrl: "/assets/hansproj2.png",
        tags: ["Firealpaca"],
        link: "https://docs.google.com/document/d/1sFqM7lPZRB2pobgPuQLMRhzZhirezdIZ/edit?tab=t.0",
      },
      {
        title: "Roleplay",
        description:
          "This is a character sheet for another activity in Intro to EMC where our teacher assigned us to do a roleplay, the sheet is mostly just proof of concept on how the character is supposed to look like.",
        imageUrl: "/assets/hansproj3.png",
        tags: ["Firealpaca"],
        link: "https://docs.google.com/document/d/1sFqM7lPZRB2pobgPuQLMRhzZhirezdIZ/edit?tab=t.0",
      },
      {
        title: "Five Nights at Freddy’s",
        description:
          "This artwork is from one of those days where I randomly sketch, this is very inspired by the horror game 'Five Nights at Freddy’s'.",
        imageUrl: "/assets/hansproj4.png",
        tags: ["Firealpaca"],
        link: "https://docs.google.com/document/d/1sFqM7lPZRB2pobgPuQLMRhzZhirezdIZ/edit?tab=t.0",
      },
      {
        title: "Dinosaurs",
        description:
          "Another random sketch day, I sketched this out because I just like drawing dinosaurs but only rarely because I’m not very good at it, in my opinion.",
        imageUrl: "/assets/hansproj5.png",
        tags: ["IbisPaint"],
        link: "https://example.com/hans/dinosaurs",
      },
    ],
  },
  {
    name: "John Carlo Vinarao",
    role: "Graphics Designer/digital artist",
    projects: [
      {
        title: "Entrepreneur Business",
        description:
          "Some creations were created during my Senior High School days and were a total help",
        imageUrl: "/assets/Menu Entrepreneur Business.jpg",
        tags: ["Canva", "Digital",],
        link: "https://drive.google.com/drive/folders/1tJ7cx3s0DJI_hKJGmD0RWKluiM77pDXH?usp=sharing",
      },
      {
        title: "Skill Builders Club",
        description: "This is also of one of my creations were created during my Senior High School days and were a total help",
        imageUrl: "/assets/The Skill Builders Club Logo.jpg",
        tags: ["Canva", "Digital"],
        link: "https://drive.google.com/drive/folders/1tJ7cx3s0DJI_hKJGmD0RWKluiM77pDXH?usp=sharing",
      },
      {
        title: "Synthiam Gonfalon",
        description: " I only created these works for school purposes and only one creation was done for commission purposes.",
        imageUrl: "/assets/Synthiam Gonfalon.jpg",
        tags: ["Canva", "Digital"],
        link: "https://drive.google.com/drive/folders/1tJ7cx3s0DJI_hKJGmD0RWKluiM77pDXH?usp=sharing",
      },
      {
        title: "Commissioned Brochure",
        description:
          " I only created these works for school purposes and only one creation was done for commission purposes.",
        imageUrl: "/assets/Commissioned Brochure.jpg",
        tags: ["Canva", "Digital"],
        link: "https://drive.google.com/drive/folders/1tJ7cx3s0DJI_hKJGmD0RWKluiM77pDXH?usp=sharing",
      },
    ],
  },
  {
    name: "Angelo F. Gopez",
    role: "Graphic Designer & Illustrator",
    projects: [
      {
        title: "Man",
        description:
          "This Art example i use on CLIP STUDIO PAINT(the cracked version)",
        imageUrl: "/assets/angelo1.png",
        tags: ["CLIP STUDIO PAINT"],
        link: "https://docs.google.com/document/d/1CsMSuzZv9f1GsHbevOCLNDWZHGQ36MFE/edit?tab=t.0",
      },
      {
        title: "Improved Version",
        description:
          "This Art example i use on CLIP STUDIO PAINT(the cracked version).",
        imageUrl: "/assets/angelo2.png",
        tags: ["CLIP STUDIO PAINT"],
        link: "https://docs.google.com/document/d/1CsMSuzZv9f1GsHbevOCLNDWZHGQ36MFE/edit?tab=t.0",
      },
      {
        title: "3 Art",
        description:
          "This 3 Art examples i use on CLIP STUDIO PAINT(the cracked version)",
        imageUrl: "/assets/angelo3.png",
        tags: ["CLIP STUDIO PAINT"],
        link: "https://docs.google.com/document/d/1CsMSuzZv9f1GsHbevOCLNDWZHGQ36MFE/edit?tab=t.0",
      },
      {
        title: "Godfrey",
        description: "This art example that i use is Ibis Paint.",
        imageUrl: "/assets/angelo4.png",
        tags: ["Ibis Paint"],
        link: "https://docs.google.com/document/d/1CsMSuzZv9f1GsHbevOCLNDWZHGQ36MFE/edit?tab=t.0",
      },
    ],
  },
  {
    name: "Maria Julyanna Silvestre",
    role: "Graphic Designer",
    projects: [
      {
        title: "Bonnie",
        description: "Status: Unfinished, An original character of a girl in a bodysuit. She was meant to be holding a gun, but it wasn’t fully drawn. The original idea was to make her a half-human, half-bunny character, but due to lack of motivation, I couldn't finish it.",
        imageUrl: "/assets/julyanna4.png",
        tags: ["Ibis Paint"],
        link: "https://drive.google.com/drive/folders/1sHVDGlg2ynHlT-OELvCySqHElzVZFjVn?usp=sharing",
      },
      {
        title: "Vagabond",
        description: "A character inspired by Arcane, with a dark and damaged look. Part of their face is ruined and the other part is made of metal, giving a strong and tough vibe.",
        imageUrl: "/assets/julyanna3.png",
        tags: ["Ibis Paint"],
        link: "https://drive.google.com/drive/folders/1sHVDGlg2ynHlT-OELvCySqHElzVZFjVn?usp=sharing",
      },
      {
        title: "Ragdoll",
        description:
          "Made during a sudden creative moment.",
        imageUrl: "/assets/julyanna2.png",
        tags: ["Ibis Paint"],
        link: "https://drive.google.com/drive/folders/1sHVDGlg2ynHlT-OELvCySqHElzVZFjVn?usp=sharing",
      },
      {
        title: "Unknown",
        description:
          "A character with a mysterious and dark vibe.",
        imageUrl: "/assets/julyanna1.png",
        tags: ["Ibis Paint"],
        link: "https://drive.google.com/drive/folders/1sHVDGlg2ynHlT-OELvCySqHElzVZFjVn?usp=sharing",
      },
    ],
  },
  {
    name: "James Wilson",
    role: "Data Scientist & ML Engineer",
    projects: [
      {
        title: "Predictive Model",
        description: "Machine learning model for forecasting sales trends.",
        imageUrl: "/images/predictive.jpg",
        tags: ["Python", "Scikit-learn", "Pandas"],
        link: "https://example.com/james/predictive-model",
      },
      {
        title: "Recommendation Engine",
        description:
          "Personalized content recommendations using collaborative filtering.",
        imageUrl: "/images/recommendation.jpg",
        tags: ["TensorFlow", "Keras", "NLP"],
        link: "https://example.com/james/recommendation-engine",
      },
      {
        title: "Computer Vision",
        description:
          "Image recognition system for quality control in manufacturing.",
        imageUrl: "/images/vision.jpg",
        tags: ["OpenCV", "PyTorch", "CNN"],
        link: "https://example.com/james/computer-vision",
      },
      {
        title: "Data Visualization",
        description: "Interactive dashboards for complex data analysis.",
        imageUrl: "/images/viz.jpg",
        tags: ["Plotly", "Dash", "Matplotlib"],
        link: "https://example.com/james/data-visualization",
      },
    ],
  },
];

const Portfolio = () => {
  const scrollContainerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"],
  });

  // Animation values based on scroll
  const cardScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.3], [0.7, 1]);
  const cardY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <div className="relative">
      {/* Ensure the black background covers the entire viewport and scrollable area */}
      <div
        className="fixed inset-0 bg-black z-0"
        style={{ minHeight: "100vh" }}
      />

      <div className="relative z-10">
        <Navbar />

        <main
          ref={scrollContainerRef}
          style={{ height: `${teamMembers.length * 100}vh` }}
          className="relative"
        >
          <ScrollVelocity
            texts={["Team", "Portfolios"]}
            className="custom-scroll-text mt-10"
            scrollContainerRef={scrollContainerRef}
            parallaxStyle={{ background: "transparent", color: "white" }}
            scrollerStyle={{ gap: "5rem" }}
          />
        </main>

        {teamMembers.map((member, memberIndex) => (
          <div
            key={memberIndex}
            className="absolute w-full mt-60"
            style={{
              height: "100vh",
              top: `${memberIndex * 100}vh`,
            }}
          >
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="absolute top-[20vh] left-1/2 transform -translate-x-1/2 text-white text-center w-full px-4"
              style={{ zIndex: 10 }}
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-2">
                {member.name}
              </h1>
              <p className="text-xl text-gray-300">{member.role}</p>
            </motion.section>

            <div
              className="absolute top-[40vh] w-full px-4 md:px-10"
              style={{ zIndex: 10 }}
            >
              <motion.div
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: { opacity: 0 },
                  show: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.2,
                    },
                  },
                }}
              >
                {member.projects.map((project, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      show: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          duration: 0.8,
                          ease: "backOut",
                        },
                      },
                    }}
                    whileHover={{
                      y: -10,
                      transition: {
                        duration: 0.3,
                        type: "spring",
                        stiffness: 400,
                        damping: 10,
                      },
                    }}
                    style={{
                      scale: cardScale,
                      opacity: cardOpacity,
                      y: cardY,
                    }}
                    className="group relative overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        className="w-full h-full object-cover"
                        src={project.imageUrl}
                        alt={project.title}
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-bold text-white mb-2">
                        {project.title}
                      </h3>
                      <p className="text-gray-300 mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-gray-700/50 text-gray-200 text-xs rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <motion.a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg"
                        whileHover={{
                          backgroundColor: "#3b82f6",
                          scale: 1.05,
                        }}
                        whileTap={{ scale: 0.95 }}
                      >
                        View Project
                        <svg
                          className="w-4 h-4 ml-2"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M14 5l7 7m0 0l-7 7m7-7H3"
                          />
                        </svg>
                      </motion.a>
                    </div>

                    <div className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden">
                      <div className="absolute -inset-1 bg-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {memberIndex === 0 && (
              <>
                <motion.div
                  className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/10 blur-xl"
                  animate={{
                    y: [0, 20, 0],
                    x: [0, 10, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <motion.div
                  className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-purple-500/10 blur-xl"
                  animate={{
                    y: [0, -20, 0],
                    x: [0, -15, 0],
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
