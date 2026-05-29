import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";

import { ExternalLink, X, Globe, Play, Star } from "lucide-react";

import {
  NEWS_ARTICLES,
  TESTIMONIALS,
  VISION,
  ACTIVITIES,
} from "../data/siteData";

/* =========================
   NEWS SECTION
========================= */

export function News() {
  const [selected, setSelected] = useState(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="media" className="py-15 bg-[#f8f7f4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* HEADER */}

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-[#f57c00] font-semibold uppercase tracking-wide text-sm mb-4">
            Media Coverage
          </p>

          <h2 className="text-center font-black leading-[0.95] tracking-[-1.5px] mb-8">
            <span className="block text-[clamp(2rem,5vw,4rem)] bg-gradient-to-r from-[#14532d] via-[#f97316] to-[#b45309] bg-clip-text text-transparent px-2 py-1">
              In The Media
            </span>
            <div className="mx-auto mt-5 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#15803d] via-[#f97316] to-[#b45309] shadow-md" />
          </h2>
        </motion.div>

        {/* GRID */}

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {NEWS_ARTICLES.map((article, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
              }}
              whileHover={{ y: -6 }}
              onClick={() => window.open(article.link, "_blank")}
              className="
                bg-white
                rounded-[28px]
                overflow-hidden
                cursor-pointer
                border
                border-gray-100
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                transition-all
                duration-300
              "
            >
              <div className="h-1 bg-[#2e7d32]" />
              {article.image && (
                <div className="w-full h-56 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              )}
              <div className="p-7">
                <div className="flex items-center gap-3 mb-4">
                  <span
                    className="
                    px-3
                    py-1
                    rounded-full
                    text-sm
                    font-semibold
                    bg-[#2e7d32]/10
                    text-[#2e7d32]
                  "
                  >
                    {article.category}
                  </span>

                  <span className="text-md text-gray-400">{article.date}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-tight">
                  {article.title}
                </h3>

                <p className="text-gray-600 leading-6 text-[16px] mb-5">
                  {article.excerpt}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-400">
                    {article.source}
                  </span>

                  <ExternalLink size={18} className="text-[#2e7d32]" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* NOTICE */}
      </div>

      {/* MODAL */}

      <AnimatePresence>
        {selected && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
            className="
              fixed
              inset-0
              z-[200]
              flex
              items-center
              justify-center
              p-6
              bg-black/50
              backdrop-blur-sm
            "
          >
            <motion.div
              initial={{
                scale: 0.92,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.92,
                opacity: 0,
              }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="
                bg-white
                rounded-[36px]
                overflow-hidden
                max-w-2xl
                w-full
                shadow-[0_30px_100px_rgba(0,0,0,0.15)]
              "
            >
              <div className="h-1 bg-[#2e7d32]" />

              <div className="p-10">
                <div className="flex justify-between items-start mb-6">
                  <span
                    className="
                    px-3
                    py-1
                    rounded-full
                    text-xs
                    font-semibold
                    bg-[#2e7d32]/10
                    text-[#2e7d32]
                  "
                  >
                    {selected.category}
                  </span>

                  <button onClick={() => setSelected(null)}>
                    <X size={20} className="text-gray-400" />
                  </button>
                </div>

                {selected.image && (
                  <div className="w-full h-[300px] overflow-hidden rounded-2xl mb-6">
                    <img
                      src={selected.image}
                      alt={selected.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
                <h3 className="text-3xl font-bold text-gray-900 mb-6">
                  {selected.title}
                </h3>

                <p className="text-gray-600 leading-9 text-[16px] mb-6">
                  {selected.excerpt}
                </p>

                <p className="text-sm text-gray-400">
                  {selected.source} • {selected.date}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

/* =========================
   ACTIVITIES SECTION
========================= */

export function Activities() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="activities"
      className="py-15 bg-[#f8f7f4] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* HEADER */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-[#f57c00] font-semibold uppercase tracking-[3px] text-sm mb-4">
            Actions & Contributions
          </p>

          <h2 className="text-center font-black leading-[0.95] tracking-[-1.5px] mb-8">
            <span className="block text-[clamp(2rem,5vw,4rem)] bg-gradient-to-r from-[#14532d] via-[#f97316] to-[#b45309] bg-clip-text text-transparent px-2 py-1">
              Activities & Events
            </span>

            <div className="mx-auto mt-5 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#15803d] via-[#f97316] to-[#b45309] shadow-md" />
          </h2>
        </motion.div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {ACTIVITIES.map((act, i) => {
            const Icon = act.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                whileHover={{ y: -8 }}
                className="
                  group
                  relative
                  bg-white/90
                  backdrop-blur-xl
                  rounded-[30px]
                  p-7
                  border
                  border-[#e8e6df]
                  overflow-hidden
                  transition-all
                  duration-500
                  hover:shadow-[0_25px_60px_rgba(0,0,0,0.08)]
                  hover:border-[#f57c00]/20
                "
              >
                {/* TOP GLOW */}
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-[#14532d] via-[#f57c00] to-[#b45309]" />

                <div className="flex items-start gap-5">
                  {/* ICON */}
                  <div
                    className="
                      w-15
                      h-15
                      rounded-2xl
                      bg-gradient-to-br
                      from-[#14532d]/10
                      via-[#f57c00]/10
                      to-[#b45309]/10
                      flex
                      items-center
                      justify-center
                      text-[#f57c00]
                      flex-shrink-0
                      transition-all
                      duration-300
                      group-hover:scale-110
                    "
                  >
                    <Icon className="w-7 h-7 stroke-[2.2]" />
                  </div>

                  {/* CONTENT */}
                  <div className="flex-1">
                    <span className="inline-flex items-center rounded-full bg-[#f57c00]/10 px-3 py-1 text-xs font-semibold tracking-wide text-[#f57c00] mb-4">
                      {act.category} • {act.date}
                    </span>

                    <h4 className="text-xl font-extrabold text-gray-900 mb-4 leading-snug">
                      {act.title}
                    </h4>

                    <p className="text-gray-600 leading-7 text-[15.5px]">
                      {act.description}
                    </p>
                  </div>
                </div>

                {/* HOVER EFFECT */}
                <div className="absolute inset-0 rounded-[30px] border border-transparent group-hover:border-[#f57c00]/10 pointer-events-none transition-all duration-500" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* =========================
   VISION SECTION
========================= */

export function Vision() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="vision"
      className="py-15 bg-[#f8f7f4] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* HEADER */}

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-[#f57c00] font-semibold uppercase tracking-wide text-sm mb-4">
            Tomorrow's Legacy
          </p>

          <h2 className="text-center font-black leading-[0.95] tracking-[-1.5px] mb-8">
            <span
              className="
    block text-[clamp(2rem,5vw,4rem)] 
    bg-gradient-to-r from-[#14532d] via-[#f97316] to-[#b45309] 
    bg-clip-text text-transparent px-2 py-1
  "
            >
              {VISION.title.split("Boundaries")[0]}
            </span>
            <span className="block mt-2 text-[clamp(2rem,5vw,4rem)] bg-gradient-to-r from-[#111827] via-[#1e3a8a] to-[#0f172a] bg-clip-text text-transparent px-2 pb-2">
              Boundaries
            </span>
            <div className="mx-auto mt-5 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#15803d] via-[#f97316] to-[#b45309] shadow-md" />
          </h2>
        </motion.div>

        {/* CONTENT */}

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}

          <div className="space-y-5">
            {VISION.points.map((point, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{
                  delay: i * 0.08,
                  duration: 0.5,
                }}
                className="
                  bg-white
                  flex
                  items-start
                  gap-4
                  p-6
                  rounded-[28px]
                  border
                  border-gray-100
                  hover:-translate-y-1
                  hover:shadow-[0_20px_50px_rgba(0,0,0,0.05)]
                  transition-all
                  duration-300
                "
              >
                <div
                  className="
                  w-9
                  h-9
                  rounded-full
                  bg-[#2e7d32]
                  flex mt-1
                  items-center
                  justify-center
                  text-white
                  text-sm
                  font-semibold
                  flex-shrink-0
                "
                >
                  {i + 1}
                </div>

                <p className="text-gray-600 leading-8 text-[16px]">{point}</p>
              </motion.div>
            ))}
          </div>

          {/* RIGHT */}

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            whileInView={{
              opacity: 1,
              scale: 1,
            }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="
              bg-white
              rounded-[36px]
              p-10
              md:p-14
              text-center
              border
              border-gray-100
              shadow-[0_10px_40px_rgba(0,0,0,0.05)]
            "
          >
            <div
              className="
              w-24
              h-24
              rounded-full
              bg-[#2e7d32]/10
              text-[#2e7d32]
              flex
              items-center
              justify-center
              mx-auto
              mb-8
            "
            >
              <Globe size={46} />
            </div>

            <p
              className="
              text-gray-700
              text-lg
              leading-9
              mb-10
            "
            >
              {VISION.quote}
            </p>

            <div className="w-20 h-[2px] bg-[#f57c00] mx-auto mb-6 rounded-full" />

            <p className="text-[#f57c00] font-semibold uppercase tracking-wide text-sm">
              — Rupeshseth Hemantji Gugale
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
