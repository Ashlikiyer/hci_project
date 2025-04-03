import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Navbar from "../Components/Navbar";
import ScrollVelocity from "../../Reactbits/ScrollVelocity/ScrollVelocity";
import "../../Reactbits/ScrollVelocity/ScrollVelocity.css";

// Team members data (unchanged)
const teamMembers = [
  {
    name: "Adriane Bordamonte",
    role: "Full Stack Developer & Creative Technologist",
    projects: [
      {
        title: "E-commerce Platform",
        description:
          "A full-stack e-commerce solution with payment integration and inventory management.",
        imageUrl: "/images/ecommerce.jpg",
        tags: ["React", "Node.js", "MongoDB"],
      },
      {
        title: "AI Content Generator",
        description:
          "Generates creative content using OpenAI's API with user customization options.",
        imageUrl: "/images/ai-content.jpg",
        tags: ["Next.js", "OpenAI", "Tailwind"],
      },
      {
        title: "Health Tracker App",
        description:
          "Mobile application for tracking fitness metrics and nutrition with data visualization.",
        imageUrl: "/images/health-tracker.jpg",
        tags: ["React Native", "Firebase", "D3.js"],
      },
      {
        title: "Blockchain Explorer",
        description:
          "Real-time blockchain transaction visualizer with wallet integration.",
        imageUrl: "/images/blockchain.jpg",
        tags: ["Web3.js", "Ethereum", "Solidity"],
      },
    ],
  },
  {
    name: "Michael Chen",
    role: "Frontend Engineer & UI Specialist",
    projects: [
      {
        title: "Interactive Dashboard",
        description:
          "Real-time data visualization dashboard with customizable widgets.",
        imageUrl: "/images/dashboard.jpg",
        tags: ["React", "D3.js", "TypeScript"],
      },
      {
        title: "Design System",
        description:
          "Comprehensive UI component library for enterprise applications.",
        imageUrl: "/images/design-system.jpg",
        tags: ["Storybook", "Styled Components", "Figma"],
      },
      {
        title: "Animation Library",
        description: "Collection of reusable animations for web applications.",
        imageUrl: "/images/animation.jpg",
        tags: ["Framer Motion", "GSAP", "CSS"],
      },
      {
        title: "Accessibility Toolkit",
        description: "Tools and components to improve web accessibility.",
        imageUrl: "/images/accessibility.jpg",
        tags: ["WCAG", "ARIA", "Jest"],
      },
    ],
  },
  {
    name: "Sarah Johnson",
    role: "Backend Developer & Database Architect",
    projects: [
      {
        title: "API Gateway",
        description:
          "Scalable microservices gateway with rate limiting and authentication.",
        imageUrl: "/images/api-gateway.jpg",
        tags: ["Node.js", "Kong", "JWT"],
      },
      {
        title: "Data Pipeline",
        description: "ETL pipeline for processing large datasets in real-time.",
        imageUrl: "/images/data-pipeline.jpg",
        tags: ["Python", "Kafka", "Spark"],
      },
      {
        title: "Database Optimization",
        description: "Performance tuning for high-traffic SQL databases.",
        imageUrl: "/images/database.jpg",
        tags: ["PostgreSQL", "Redis", "Indexing"],
      },
      {
        title: "Serverless Functions",
        description:
          "Cloud-native serverless architecture for event-driven apps.",
        imageUrl: "/images/serverless.jpg",
        tags: ["AWS Lambda", "Azure Functions", "Terraform"],
      },
    ],
  },
  {
    name: "David Kim",
    role: "Mobile Developer & AR Expert",
    projects: [
      {
        title: "AR Shopping App",
        description:
          "Augmented reality application for virtual product try-ons.",
        imageUrl: "/images/ar-shopping.jpg",
        tags: ["ARKit", "Swift", "SceneKit"],
      },
      {
        title: "Cross-platform App",
        description:
          "Unified codebase for iOS and Android with native performance.",
        imageUrl: "/images/cross-platform.jpg",
        tags: ["Flutter", "Dart", "Firebase"],
      },
      {
        title: "Fitness Tracker",
        description:
          "Mobile app with health data integration and workout plans.",
        imageUrl: "/images/fitness-app.jpg",
        tags: ["React Native", "HealthKit", "MongoDB"],
      },
      {
        title: "Geolocation Game",
        description: "Location-based multiplayer game with real-time updates.",
        imageUrl: "/images/geolocation.jpg",
        tags: ["Unity", "Mapbox", "WebSockets"],
      },
    ],
  },
  {
    name: "Emma Rodriguez",
    role: "DevOps Engineer & Cloud Specialist",
    projects: [
      {
        title: "CI/CD Pipeline",
        description: "Automated deployment pipeline with testing and rollback.",
        imageUrl: "/images/cicd.jpg",
        tags: ["GitHub Actions", "Docker", "Kubernetes"],
      },
      {
        title: "Infrastructure as Code",
        description: "Cloud infrastructure management using declarative code.",
        imageUrl: "/images/iac.jpg",
        tags: ["Terraform", "AWS", "Ansible"],
      },
      {
        title: "Monitoring System",
        description:
          "Comprehensive observability platform for distributed systems.",
        imageUrl: "/images/monitoring.jpg",
        tags: ["Prometheus", "Grafana", "ELK"],
      },
      {
        title: "Security Audit",
        description:
          "Automated security scanning and vulnerability assessment.",
        imageUrl: "/images/security.jpg",
        tags: ["OWASP", "SonarQube", "Pen Testing"],
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
      },
      {
        title: "Recommendation Engine",
        description:
          "Personalized content recommendations using collaborative filtering.",
        imageUrl: "/images/recommendation.jpg",
        tags: ["TensorFlow", "Keras", "NLP"],
      },
      {
        title: "Computer Vision",
        description:
          "Image recognition system for quality control in manufacturing.",
        imageUrl: "/images/vision.jpg",
        tags: ["OpenCV", "PyTorch", "CNN"],
      },
      {
        title: "Data Visualization",
        description: "Interactive dashboards for complex data analysis.",
        imageUrl: "/images/viz.jpg",
        tags: ["Plotly", "Dash", "Matplotlib"],
      },
    ],
  },
];

const Portfolio = () => {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
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
                        href="#"
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
