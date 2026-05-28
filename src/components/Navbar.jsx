import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_ITEMS = [
  { label: "Journey", href: "#journey" },
  { label: "Spiritual", href: "#spiritual" },
  { label: "Family", href: "#family" },
  { label: "Business", href: "#business" },
  { label: "Social Work", href: "#social" },
  { label: "Gallery", href: "#gallery" },
  { label: "Vision", href: "#vision" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
          <a href="#hero" className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl flex items-center justify-center mb-1">
          <img src="/logo.png" alt="" />
             </div>

            <div>
              <h2 className="text-[15px] font-semibold text-gray-900 leading-none">
                Rupeshseth Gugale
              </h2>

              <p className="text-[12px] text-[#f57c00] mt-1">
                Leadership • Legacy • Service
              </p>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <div className="hidden lg:flex items-center gap-8">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-[14px] font-medium text-gray-700 hover:text-[#f57c00] transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:flex items-center justify-center px-5 py-3 rounded-2xl bg-[#2e7d32] text-white text-sm font-medium hover:bg-[#256c2b] transition-all duration-300"
            >
              Connect
            </a>

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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMenuOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90]"
            />

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
                  <motion.a
                    key={item.label}
                    href={item.href}
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    onClick={() => setMenuOpen(false)}
                    className="text-[17px] font-medium text-gray-800 hover:text-[#f57c00] transition-colors"
                  >
                    {item.label}
                  </motion.a>
                ))}
              </div>

              {/* BUTTON */}
              <div className="mt-auto pt-10">
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="w-full flex items-center justify-center bg-[#2e7d32] text-white py-4 rounded-2xl font-medium hover:bg-[#256c2b] transition-all"
                >
                  Connect Now
                </a>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
