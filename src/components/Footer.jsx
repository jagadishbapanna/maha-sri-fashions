const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Brand */}
        <div>
          <h3 className="text-xl font-bold text-white mb-3">
            Maha Sri Fashions
          </h3>
          <p className="text-sm">
            Elegant sarees & jewellery collections.  
            Order easily through WhatsApp.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Quick Links
          </h4>
          <ul className="space-y-2">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/sarees" className="hover:text-white">Sarees</a></li>
            <li><a href="/jewellery" className="hover:text-white">Jewellery</a></li>
            <li><a href="/contact" className="hover:text-white">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-3">
            Contact
          </h4>
          <p className="text-sm">📞 WhatsApp: 9701469944</p>
          <p className="text-sm mt-1">📍 India</p>
          <p className="text-sm mt-1">⏰ 10 AM - 8 PM</p>

          <a
            href="https://wa.me/919701469944"
            target="_blank"
            rel="noreferrer"
            className="inline-block mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Chat on WhatsApp
          </a>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="text-center text-sm text-gray-400 border-t border-gray-700 py-4">
        © {new Date().getFullYear()} Maha Sri Fashions. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
