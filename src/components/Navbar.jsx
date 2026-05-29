import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Business", href: "/business" },
  { label: "Social Work", href: "/social-work" },
  { label: "Gallery", href: "/gallery" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
const location = useLocation();

useEffect(() => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-md border-b border-gray-200 py-4 shadow-sm"
            : "bg-transparent py-6"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* LOGO */}
          <Link to="/" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-1">
              <img src="/logo.png" alt="Logo" />
            </div>

            <div>
              <h2 className="text-[15px] font-semibold text-gray-900 leading-none">
                Rupeshseth Gugale
              </h2>

              <p className="text-[12px] text-[#f57c00] mt-1">
                Leadership • Legacy • Service
              </p>
            </div>
          </Link>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                to={item.href}
                className={`text-[14px] font-medium transition-colors duration-300 ${
                  location.pathname === item.href
                    ? "text-[#f57c00]"
                    : "text-gray-700 hover:text-[#f57c00]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            <Link
              to="/contact"
              className="hidden md:flex items-center justify-center px-5 py-3 rounded-2xl bg-[#2e7d32] text-white text-sm font-medium hover:bg-[#256c2b] transition-all duration-300"
            >
              Connect
            </Link>

            <button
              onClick={() => setMenuOpen(true)}
              className="lg:hidden w-11 h-11 rounded-2xl border border-gray-200 flex items-center justify-center bg-white text-gray-900"
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90]"
            />

            {/* MENU */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.35 }}
              className="fixed top-0 right-0 h-screen w-[85%] max-w-sm bg-white z-[100] p-8 flex flex-col"
            >
              {/* TOP */}
              <div className="flex items-center justify-between mb-12">
                <div>
                  <h2 className="text-lg font-semibold text-gray-900">
                    Rupeshseth
                  </h2>

                  <p className="text-sm text-[#f57c00]">Personal Portfolio</p>
                </div>

                <button
                  onClick={() => setMenuOpen(false)}
                  className="w-11 h-11 rounded-2xl border border-gray-200 flex items-center justify-center"
                >
                  <X size={22} />
                </button>
              </div>

              {/* LINKS */}
              <div className="flex flex-col gap-6">
                {NAV_ITEMS.map((item, i) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      to={item.href}
                      onClick={() => setMenuOpen(false)}
                      className={`text-[17px] font-medium transition-colors ${
                        location.pathname === item.href
                          ? "text-[#f57c00]"
                          : "text-gray-800 hover:text-[#f57c00]"
                      }`}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* BUTTON */}
              <div className="mt-auto pt-10">
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="w-full flex items-center justify-center bg-[#2e7d32] text-white py-4 rounded-2xl font-medium hover:bg-[#256c2b] transition-all"
                >
                  Connect Now
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
