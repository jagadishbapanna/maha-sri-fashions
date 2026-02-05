import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl font-bold text-gray-800">
          Maha Sri Fashions
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-gray-600 hover:text-black">
            Home
          </Link>
          <Link to="/sarees" className="text-gray-600 hover:text-black">
            Sarees
          </Link>
          <Link to="/jewellery" className="text-gray-600 hover:text-black">
            Jewellery
          </Link>
          <Link to="/contact" className="text-gray-600 hover:text-black">
  Contact
</Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white px-4 pb-4 flex flex-col gap-3">
          <Link to="/" className="text-gray-600" onClick={() => setOpen(false)}>
            Home
          </Link>
          <Link
            to="/sarees"
            className="text-gray-600"
            onClick={() => setOpen(false)}
          >
            Sarees
          </Link>
          <Link
            to="/jewellery"
            className="text-gray-600"
            onClick={() => setOpen(false)}
          >
            Jewellery
          </Link>
         <Link to="/contact" className="text-gray-600 hover:text-black">
  Contact
</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
