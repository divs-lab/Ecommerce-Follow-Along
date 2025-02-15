import { useState } from "react";
import { Menu, X, ShoppingCart, User } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto flex justify-between items-center p-4">
        
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-blue-600">EduSound</Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 text-gray-700 font-medium">
          <li><Link to="/" className="hover:text-blue-500">Home</Link></li>
          <li><Link to="/shop" className="hover:text-blue-500">Shop</Link></li>
          <li><Link to="/about" className="hover:text-blue-500">About</Link></li>
          <li><Link to="/contact" className="hover:text-blue-500">Contact</Link></li>
        </ul>

        {/* Icons (Cart & User) */}
        <div className="hidden md:flex items-center space-x-4">
          <Link to="/cart">
            <ShoppingCart className="text-gray-700 hover:text-blue-500" size={24} />
          </Link>
          <Link to="/profile">
            <User className="text-gray-700 hover:text-blue-500" size={24} />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-gray-700">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="md:hidden bg-white shadow-md text-center space-y-3 py-3">
          <li><Link to="/" className="block py-2 hover:bg-gray-100">Home</Link></li>
          <li><Link to="/shop" className="block py-2 hover:bg-gray-100">Shop</Link></li>
          <li><Link to="/about" className="block py-2 hover:bg-gray-100">About</Link></li>
          <li><Link to="/contact" className="block py-2 hover:bg-gray-100">Contact</Link></li>
          <li><Link to="/cart" className="block py-2 hover:bg-gray-100">Cart</Link></li>
          <li><Link to="/profile" className="block py-2 hover:bg-gray-100">Profile</Link></li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
