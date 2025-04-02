import Squares from "../../Reactbits/Squares/Squares";
import BlurText from "../../Reactbits/BlurText/BlurText";
import Navbar from "../Components/Navbar";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const Homepage = () => {
  return (
    <div className="relative min-h-screen bg-black">
      {/* Navbar */}
      <Navbar  /> {/* Increase z-index to ensure it's above everything */}

      {/* Squares Background */}
      <div className="absolute inset-0 z-0">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#fff"
          hoverFillColor="#222"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        <BlurText
          text="Helix"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-8xl text-white"
        />
        <p className="mt-6 text-xl font-mono text-white max-w-4xl">
          Helix Galaxy: A digital journey of growth and innovation. The helix symbolizes evolution, while the galaxy represents limitless possibilities. Our team is building a dynamic portfolio website that showcases creativity, skills, and projects, reflecting our expanding potential and future in the digital world.
        </p>
      </div>
    </div>
  );
};

export default Homepage;