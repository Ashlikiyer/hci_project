import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="absolute top-0 left-0 w-full z-50 bg-transparent p-4 ">
      <div className="max-w-screen-xl flex justify-end mx-auto">
        <ul className="flex space-x-6">
          <li>
            <Link to="/" className="text-white hover:text-blue-500">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-white hover:text-blue-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/portfolio" className="text-white hover:text-blue-500">
              Portfolio
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;