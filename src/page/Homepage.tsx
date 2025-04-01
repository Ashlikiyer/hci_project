import { Link } from "react-router-dom";
import Squares from "../../Reactbits/Squares/Squares";
import BlurText from "../../Reactbits/BlurText/BlurText";

const handleAnimationComplete = () => {
  console.log("Animation completed!");
};

const Homepage = () => {
  return (
    <div className="relative min-h-screen bg-black">
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

      {/* Navbar */}
      <nav className="relative z-10 bg-transparent p-4">
        <div className="max-w-screen-xl flex justify-end  mx-auto">
          
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="text-white hover:text-blue-500">Home</Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-blue-500">About</Link>
            </li>
          </ul>
        </div>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center">
        <BlurText
          text="Team kupal"
          delay={150}
          animateBy="words"
          direction="top"
          onAnimationComplete={handleAnimationComplete}
          className="text-8xl text-white -mt-20"
        />
        <p className="mt-6 text-xl text-white max-w-2xl">
          We are a passionate group of innovators building the future, one project at a time.
        </p>
      </div>
    </div>
  );
};

export default Homepage;
