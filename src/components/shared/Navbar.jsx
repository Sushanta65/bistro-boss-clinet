import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className="navbar fixed z-50 text-white opacity-50 bg-black shadow-md">
      {/* Left Side - Logo */}
      <div className="navbar-start ">
        <Link to="/" className="btn btn-ghost normal-case text-xl">
          Bistro Boss
        </Link>
      </div>

      {/* Middle - Menu Items */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/menu">Our Menu</Link></li>
          <li><Link to="/shop">Our Shop</Link></li>
        </ul>
      </div>

      {/* Right Side - Cart & Sign In */}
      <div className="navbar-end">
        <button className="btn btn-ghost">
          <FaShoppingCart className="text-lg" />
        </button>
        <Link to="/signin" className="btn btn-primary ml-2">
          Sign In
        </Link>
      </div>

      {/* Responsive Menu Button */}
      <div className="dropdown dropdown-end lg:hidden">
        <label tabIndex={0} className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </label>
        <ul
          tabIndex={0}
          className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li><Link to="/">Home</Link></li>
          <li><Link to="/contact">Contact Us</Link></li>
          <li><Link to="/dashboard">Dashboard</Link></li>
          <li><Link to="/menu">Our Menu</Link></li>
          <li><Link to="/shop">Our Shop</Link></li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
