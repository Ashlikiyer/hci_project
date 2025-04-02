import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from "../Components/Navbar";
import ScrollVelocity from '../../Reactbits/ScrollVelocity/ScrollVelocity';
import '../../Reactbits/ScrollVelocity/ScrollVelocity.css';

// Card data array
const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-stack e-commerce solution with payment integration and inventory management.",
    imageUrl: "/images/ecommerce.jpg",
    tags: ["React", "Node.js", "MongoDB"]
  },
  {
    title: "AI Content Generator",
    description: "Generates creative content using OpenAI's API with user customization options.",
    imageUrl: "/images/ai-content.jpg",
    tags: ["Next.js", "OpenAI", "Tailwind"]
  },
  {
    title: "Health Tracker App",
    description: "Mobile application for tracking fitness metrics and nutrition with data visualization.",
    imageUrl: "/images/health-tracker.jpg",
    tags: ["React Native", "Firebase", "D3.js"]
  },
  {
    title: "Blockchain Explorer",
    description: "Real-time blockchain transaction visualizer with wallet integration.",
    imageUrl: "/images/blockchain.jpg",
    tags: ["Web3.js", "Ethereum", "Solidity"]
  }
];

const Portfolio = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: scrollContainerRef,
    offset: ["start start", "end end"]
  });

  // Animation values based on scroll
  const cardScale = useTransform(scrollYProgress, [0, 0.5], [0.9, 1]);
  const cardOpacity = useTransform(scrollYProgress, [0, 0.3], [0.7, 1]);
  const cardY = useTransform(scrollYProgress, [0, 0.5], [50, 0]);

  return (
    <div>
      <div className="relative min-h-screen bg-black overflow-hidden">
        <Navbar />

        {/* Scroll Text Animation */}
        <main ref={scrollContainerRef} style={{ height: '200vh' }}>
          <ScrollVelocity
            texts={['Portfolio', 'Projects']}
            velocity={100}
            className="custom-scroll-text mt-10"
            scrollContainerRef={scrollContainerRef}
            parallaxStyle={{ background: 'transparent', color: 'white' }}
            scrollerStyle={{ gap: '5rem' }}
          />
        </main>

        {/* Name Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute top-[60vh] left-1/2 transform -translate-x-1/2 text-white text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-2">Adriane Bordamonte</h1>
          <p className="text-xl text-gray-300">Full Stack Developer & Creative Technologist</p>
        </motion.section>

        {/* Projects Grid */}
        <div className="absolute top-[92vh] w-full px-4 md:px-10">
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
            initial="hidden"
            animate="show"
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.2
                }
              }
            }}
          >
            {projects.map((project, index) => (
              <motion.div
                key={index}
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  show: { 
                    opacity: 1, 
                    y: 0,
                    transition: {
                      duration: 0.8,
                      ease: "backOut"
                    }
                  }
                }}
                whileHover={{ 
                  y: -10,
                  transition: { 
                    duration: 0.3,
                    type: "spring",
                    stiffness: 400,
                    damping: 10
                  } 
                }}
                style={{
                  scale: cardScale,
                  opacity: cardOpacity,
                  y: cardY
                }}
                className="group relative overflow-hidden rounded-xl shadow-lg bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700"
              >
                {/* Image with overlay */}
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
                
                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  
                  {/* Tags */}
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
                  
                  {/* Animated button */}
                  <motion.a
                    href="#"
                    className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg"
                    whileHover={{ 
                      backgroundColor: "#3b82f6",
                      scale: 1.05
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    View Project
                    <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </motion.a>
                </div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 rounded-xl pointer-events-none overflow-hidden">
                  <div className="absolute -inset-1 bg-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating elements decoration */}
        <motion.div 
          className="absolute top-1/4 left-1/4 w-32 h-32 rounded-full bg-blue-500/10 blur-xl"
          animate={{
            y: [0, 20, 0],
            x: [0, 10, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-40 h-40 rounded-full bg-purple-500/10 blur-xl"
          animate={{
            y: [0, -20, 0],
            x: [0, -15, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>
    </div>
  );
};

export default Portfolio;