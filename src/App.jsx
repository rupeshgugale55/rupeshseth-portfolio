import { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FaWhatsapp, FaArrowUp } from "react-icons/fa";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import BusinessPage from "./pages/BusinessPage";
import SocialWorkPage from "./pages/SocialWorkPage";
import GalleryPage from "./pages/GalleryPage";
import ContactPage from "./pages/ContactPage";

/* =========================
   PRELOADER
========================= */

function Preloader({ onDone }) {
  useEffect(() => {
    const t = setTimeout(onDone, 2600);
    return () => clearTimeout(t);
  }, [onDone]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed inset-0 z-[999] flex flex-col items-center justify-center"
      style={{
        background: "linear-gradient(135deg, #0d3d1f, #1a5c2a, #1a1a2e)",
      }}
    >
      {/* MANDALA */}
      <div className="absolute inset-0 opacity-5 flex items-center justify-center pointer-events-none">
        <svg width="500" height="500" viewBox="0 0 500 500">
          {[40, 80, 120, 160, 200, 240].map((r, i) => (
            <circle
              key={i}
              cx="250"
              cy="250"
              r={r}
              fill="none"
              stroke="white"
              strokeWidth="0.6"
              strokeDasharray={`${r * 0.4} ${r * 0.15}`}
              className={i % 2 === 0 ? "mandala-spin" : "mandala-spin-reverse"}
            />
          ))}
        </svg>
      </div>

      {/* LOGO */}
      <motion.div
        initial={{ scale: 0, rotate: -180 }}
        animate={{ scale: 1, rotate: 0 }}
        transition={{ duration: 1, type: "spring", stiffness: 120 }}
        className="w-20 h-20 rounded-full flex items-center justify-center mb-6 pulse-glow"
        style={{
          background: "linear-gradient(135deg, #2d8a47, #e86a1a)",
        }}
      >
        <img src="/favicon.png" alt="Logo" />
      </motion.div>

      {/* TITLE */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-2xl font-bold mb-2 text-[#D4AF37]"
        style={{
          fontFamily: "Cinzel, serif",
          letterSpacing: "3px",
        }}
      >
        Rupeshseth
      </motion.h1>

      {/* SUBTITLE */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.9, duration: 0.7 }}
        className="mb-8"
        style={{
          fontFamily: "Montserrat,sans-serif",
          fontSize: "12px",
          letterSpacing: "4px",
          color: "#a0e0b0",
          textTransform: "uppercase",
        }}
      >
        Leadership · Legacy · Service
      </motion.p>

      {/* LOADER BAR */}
      <motion.div
        className="h-0.5 rounded-full"
        initial={{ width: 0 }}
        animate={{ width: "180px" }}
        transition={{ duration: 2, ease: "easeInOut" }}
        style={{
          background: "linear-gradient(90deg, #2d8a47, #e86a1a, #d4a843)",
        }}
      />
    </motion.div>
  );
}

/* =========================
   WHATSAPP BUTTON
========================= */

function WhatsAppFAB() {
  return (
    <motion.a
      href="https://wa.me/919876543210"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: [1, 1.08, 1] }}
      transition={{
        delay: 0.5,
        duration: 1,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      className="
        fixed bottom-11 right-4 z-50
        w-16 h-16 rounded-full
        flex items-center justify-center
        text-white shadow-2xl
        bg-green-500
      "
    >
      <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-40" />
      <FaWhatsapp className="text-4xl relative z-10" />
    </motion.a>
  );
}

/* =========================
   SCROLL TOP
========================= */

function ScrollTop() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const fn = () => setShow(window.scrollY > 600);

    window.addEventListener("scroll", fn);

    return () => window.removeEventListener("scroll", fn);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          onClick={() =>
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            })
          }
          className="
            fixed bottom-11 left-4 z-50
            w-11 h-11 rounded-full
            flex items-center justify-center
            text-white shadow-xl
            border border-white/20
            bg-slate-800
          "
        >
          <FaArrowUp className="text-white text-sm" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}

/* =========================
   APP
========================= */

export default function App() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!loaded && <Preloader key="loader" onDone={() => setLoaded(true)} />}
      </AnimatePresence>

      {loaded && (
        <BrowserRouter>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Navbar />

            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/business" element={<BusinessPage />} />
              <Route path="/social-work" element={<SocialWorkPage />} />
              <Route path="/gallery" element={<GalleryPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>

            <WhatsAppFAB />
            <ScrollTop />
          </motion.div>
        </BrowserRouter>
      )}
    </>
  );
}
