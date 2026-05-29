import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

import {
  Building2,
  Briefcase,
  Factory,
  TrendingUp,
  Landmark,
  ShieldCheck,
} from "lucide-react";

import { BUSINESSES, ACHIEVEMENTS } from "../data/siteData";

/* =========================
   ICONS
========================= */

const businessIcons = [
  Building2,
  Briefcase,
  Factory,
  TrendingUp,
  Landmark,
  ShieldCheck,
];

/* =========================
   BUSINESS CARD
========================= */

function BusinessCard({ biz, index }) {
  const Icon = businessIcons[index % businessIcons.length];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.06,
        duration: 0.45,
      }}
      whileHover={{ y: -3 }}
      className="
        group
        relative
        overflow-hidden
        bg-white/80
        backdrop-blur-xl
        rounded-[20px]
        border
        border-white/50
        p-5
        shadow-[0_8px_25px_rgba(0,0,0,0.04)]
        hover:shadow-[0_15px_35px_rgba(0,0,0,0.07)]
        transition-all
        duration-300
      "
    >
      {/* GLOW */}

      <div
        className="
          absolute
          top-0
          right-0
          w-20
          h-20
          rounded-full
          blur-3xl
          opacity-10
          bg-[#2e7d32]
        "
      />

      {/* ICON */}

      <div
        className="
          relative
          z-10
          w-12
          h-12
          rounded-xl
          bg-gradient-to-br
          from-[#2e7d32]/10
          to-[#f57c00]/10
          text-[#2e7d32]
          flex
          items-center
          justify-center
          mb-4
        "
      >
        <Icon size={22} />
      </div>

      {/* TITLE */}

      <h3
        className="
          text-[20px]
          font-bold
          text-gray-900
          mb-3
        "
      >
        {biz.title}
      </h3>

      {/* DESCRIPTION */}

      <p
        className="
          text-gray-600
          leading-[1.7rem]
          text-[15px]
          mb-4
        "
      >
        {biz.description}
      </p>

      {/* STATS */}

      <div
        className="
          inline-flex
          items-center
          px-3
          h-8
          rounded-full
          bg-[#f57c00]/10
          text-[#f57c00]
          text-[15px]
          font-semibold
        "
      >
        {biz.stats}
      </div>
    </motion.div>
  );
}

/* =========================
   ACHIEVEMENT COUNTER
========================= */

function AchievementCounter({ item, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.4,
  });

  

 
  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={
        inView
          ? {
              opacity: 1,
              y: 0,
            }
          : {}
      }
      transition={{
        delay: index * 0.05,
        duration: 0.45,
      }}
      whileHover={{ y: -2 }}
      className="
        bg-white/80
        backdrop-blur-xl
        rounded-[18px]
        border
        border-white/50
        p-4
        text-center
        shadow-[0_8px_25px_rgba(0,0,0,0.04)]
        hover:shadow-[0_15px_35px_rgba(0,0,0,0.07)]
        transition-all
        duration-300
      "
    >
      {/* NUMBER */}

      <div
        className="
          text-[28px]
          md:text-[34px]
          font-bold
          mb-2  bg-gradient-to-r
  from-[#FFD700]
  via-[#FFC107]
  to-[#B8860B]
  bg-clip-text
  text-transparent
        "
       >
        {inView ? (
          <CountUp
            end={item.number}
            duration={2}
            separator=","
            suffix={item.suffix}
          />
        ) : (
          "0"
        )}
      </div>

      {/* LABEL */}

      <p
        className="
          text-gray-600
          text-[13px]
          leading-[1.5rem]
          font-medium
        "
      >
        {item.label}
      </p>
    </motion.div>
  );
}

/* =========================
   BUSINESS SECTION
========================= */

export function Business() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="business"
      className="
        lg:py-16
        bg-[#f8f7f4]
        relative
        overflow-hidden
       "
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          top-0
          left-0
          w-[260px]
          h-[260px]
          bg-[#2e7d32]/5
          rounded-full
          blur-[100px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          w-[240px]
          h-[240px]
          bg-[#f57c00]/5
          rounded-full
          blur-[100px]
        "
      />

      {/* MAIN CONTAINER */}

      <div
        className="
          max-w-[980px]
          mx-auto
          px-5
          sm:px-7
          lg:px-8
          relative
          z-10
        "
      >
        {/* HEADER */}

        <motion.div
          ref={ref}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{ duration: 0.7 }}
          className="text-center mb-8 lg:mb-10"
        >
          <p
            className="
             text-[#f57c00] font-semibold uppercase tracking-wide text-sm mb-4
            "
          >
            ENTERPRISE & LEADERSHIP
          </p>

          <h2 className="text-center font-black leading-[0.95] tracking-[-1.5px] mb-8">
            <span className="block text-[clamp(2rem,5vw,4rem)] bg-gradient-to-r from-[#14532d] via-[#f97316] to-[#b45309] bg-clip-text text-transparent px-2 py-1">
              Business Verticals
            </span>

            <div className="mx-auto mt-5 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#15803d] via-[#f97316] to-[#b45309] shadow-md" />
          </h2>

          <p
            className="text-gray-600 text-lg leading-8 max-w-2xl mx-auto
            "
          >
            Built from ground level with dedication, discipline, and leadership
            across multiple industries.
          </p>
        </motion.div>

        {/* GRID */}

        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-3
            gap-4
          "
        >
          {BUSINESSES.map((biz, i) => (
            <BusinessCard key={i} biz={biz} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* =========================
   ACHIEVEMENTS SECTION
========================= */

export function Achievements() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="
        py-22       lg:py-16
        bg-[#f8f7f4]
        relative
        overflow-hidden
      "
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          top-0
          right-0
          w-[240px]
          h-[240px]
          bg-[#2e7d32]/5
          rounded-full
          blur-[100px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          w-[240px]
          h-[240px]
          bg-[#f57c00]/5
          rounded-full
          blur-[100px]
        "
      />

      {/* MAIN CONTAINER */}

      <div
        className="
          max-w-[980px]
          mx-auto
          px-5
          sm:px-7
          lg:px-8
          relative
          z-10
        "
      >
        {/* HEADER */}

        <motion.div
          ref={ref}
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{ duration: 0.7 }}
          className="text-center mb-8 lg:mb-10"
        >
          <p
            className="
             text-[#f57c00] font-semibold uppercase tracking-wide text-sm mb-4
            "
          >
            NUMBERS THAT TELL THE STORY
          </p>
          <h2
            className="
  text-center font-black leading-[0.95] tracking-[-1.5px] mb-8
  "
          >
            <span
              className="
    block text-[clamp(2rem,5vw,4rem)] bg-gradient-to-r from-[#14532d] via-[#f97316] to-[#b45309] bg-clip-text text-transparent px-2 py-1
    "
            >
              Achievements In
            </span>
            <span className="block mt-2 text-[clamp(2rem,5vw,4rem)] bg-gradient-to-r from-[#111827] via-[#1e3a8a] to-[#0f172a] bg-clip-text text-transparent px-2 pb-2">
              Numbers
            </span>
            <div className="mx-auto mt-5 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#15803d] via-[#f97316] to-[#b45309] shadow-md" />
          </h2>
        </motion.div>

        {/* GRID */}

        <div
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-6
            gap-3
          "
        >
          {ACHIEVEMENTS.map((item, i) => (
            <AchievementCounter key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
