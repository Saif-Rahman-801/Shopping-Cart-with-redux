import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        {/* Home Link */}
        <Link to="/" className="text-white text-lg font-bold">
          Home
        </Link>

        {/* Cart Link */}
        <Link to="/cart" className="text-white text-lg">
          Cart
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
