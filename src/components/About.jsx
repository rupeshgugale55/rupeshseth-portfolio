import { motion } from "framer-motion";
import { Sprout, Building2, HeartHandshake, Rocket } from "lucide-react";
import { useInView } from "react-intersection-observer";
import { ABOUT } from "../data/siteData";
import { Quote } from "lucide-react";

/* =========================
   STORY CARD
========================= */

function StoryBlock({ icon, title, text, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
      }}
      whileHover={{ y: -4 }}
      className="
        group
        relative
        h-full
        rounded-[24px]
        border
        border-white/50
        bg-white/70
        backdrop-blur-xl
        p-5
        lg:p-6
        overflow-hidden
        shadow-[0_10px_30px_rgba(0,0,0,0.04)]
        hover:shadow-[0_18px_40px_rgba(0,0,0,0.08)]
        transition-all
        duration-300
      "
    >
      {/* TOP GLOW */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#2e7d32]/5 rounded-full blur-3xl" />

      {/* TOP ROW */}
      <div className="flex items-center gap-4 mb-5 relative z-10">
        {/* ICON */}
        <div
          className="
            w-12
            h-12
            rounded-2xl
            bg-gradient-to-br
            from-[#2e7d32]/10
            to-[#f57c00]/10
            text-[#2e7d32]
            flex
            items-center
            justify-center
            shadow-sm
            group-hover:scale-110
            transition-all
            duration-300
          "
        >
          {icon}
        </div>

        {/* TITLE */}
        <h3
          className="
             font-semibold
            text-gray-900
            leading-tight
            mb-1 text-xl
          "
        >
          {title}
        </h3>
      </div>

      {/* TEXT */}
      <p
        className="
         text-gray-600 leading-8 text-[16px]
        "
      >
        {text}
      </p>

      {/* BOTTOM LINE */}
      <div
        className="
          mt-5
          w-14
          h-[3px]
          rounded-full
          bg-gradient-to-r
          from-[#2e7d32]
          to-[#f57c00]
        "
      />
    </motion.div>
  );
}

/* =========================
   ABOUT SECTION
========================= */

export default function About() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stories = [
    {
      icon: <Sprout size={24} strokeWidth={2} />,
      title: "Humble Beginnings",
      text: ABOUT.earlyLife,
    },
    {
      icon: <Building2 size={24} strokeWidth={2} />,
      title: "The Pune Years",
      text: ABOUT.puneYears,
    },
    {
      icon: <HeartHandshake size={24} strokeWidth={2} />,
      title: "The Turning Point — 2013",
      text: ABOUT.turningPoint,
    },
    {
      icon: <Rocket size={24} strokeWidth={2} />,
      title: "Mumbai: A New Chapter",
      text: ABOUT.mumbaiJourney,
    },
  ];

  return (
    <section
      id="journey"
      className="
        relative
        overflow-hidden
        bg-[#f8f7f4]
        py-15
        lg:py-28
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#2e7d32]/5 rounded-full blur-[100px]" />

      <div className="absolute bottom-0 right-0 w-[280px] h-[280px] bg-[#f57c00]/5 rounded-full blur-[100px]" />

      {/* MAIN CONTAINER */}
      <div
        className="
          max-w-[1450px]
          mx-auto
          px-5
          sm:px-8
          lg:px-12
          xl:px-16
          relative
          z-10
        "
      >
        {/* HEADER */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-12 lg:mb-16"
        >
          {/* TOP LABEL */}
          <p
            className="
     text-[#f57c00] font-semibold uppercase tracking-wide text-sm mb-4
    "
          >
            LIFE JOURNEY
          </p>

          {/* MAIN TITLE */}
          <h2
            className="
    text-center
    font-black
    leading-[1]
    tracking-[-1.5px]
    mb-6
  "
          >
            {/* SAME SIZE HEADINGS */}
            <span
              className="
      block
     text-[clamp(2rem,5vw,4rem)]
      bg-gradient-to-r
      from-[#14532d]
      via-[#f97316]
      to-[#b45309]
      bg-clip-text
      text-transparent p-1
    "
            >
              From Struggle
            </span>

            <span
              className="
      block
      mt-1
     text-[clamp(2rem,5vw,4rem)]
      bg-gradient-to-r
      from-[#111827]
      via-[#1e3a8a]
      to-[#0f172a]
      bg-clip-text
      text-transparent pb-2
    "
            >
              To Legacy
            </span>

            {/* Premium underline */}
            <div
              className="
      mx-auto
      mt-5
      h-1.5
      w-32
      rounded-full
      bg-gradient-to-r
      from-[#15803d]
      via-[#f97316]
      to-[#b45309]
    "
            />
          </h2>
          {/* DESCRIPTION */}
          <p
            className="
     text-gray-600 text-lg leading-8 max-w-2xl mx-auto
    "
          >
            {ABOUT.intro}
          </p>
        </motion.div>
        {/* STORY GRID */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
            lg:gap-8
            items-stretch
          "
        >
          {stories.map((s, i) => (
            <StoryBlock key={i} {...s} index={i} />
          ))}
        </div>

        {/* PHILOSOPHY CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
  mt-10
  lg:mt-12F
  max-w-5xl
  mx-auto bg-white/80
  backdrop-blur-xl
  rounded-[24px]
  border
  border-white/50
  p-5
  sm:p-6
  lg:p-7
  text-center
  overflow-hidden
  shadow-[0_10px_40px_rgba(0,0,0,0.04)]
          "
        >
          {/* GLOW */}
          <div className="absolute top-0 right-0 w-[220px] h-[220px] bg-[#f57c00]/5 rounded-full blur-[90px]" />

          <div className="relative z-10">
            {/* QUOTE ICON */}
            <div
              className="
    relative
    w-12
    h-12
    mx-auto
    mb-5
    rounded-2xl
    bg-white/70
    backdrop-blur-xl
    border
    border-white/60
    shadow-[0_8px_25px_rgba(0,0,0,0.06)]
    flex
    items-center
    justify-center
    overflow-hidden
  "
            >
              {/* GLOW */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#2e7d32]/10 to-[#f57c00]/10" />

              {/* QUOTE */}
              <div
                className="
          relative
          z-10
          w-11
          h-11
          rounded-xl
          bg-white/10
          border
          border-black/40
          backdrop-blur-md
          flex
          items-center
          justify-center
         "
              >
                <Quote size={18} className="text-black" />
              </div>
            </div>

            {/* QUOTE */}
            <p
              className="
  text-[16px]
  sm:text-[18px]
  lg:text-[22px]
  text-[#08122f]
  leading-[1.7]
  max-w-3xl
  mx-auto
  font-semibold
"
            >
              {ABOUT.philosophy}
            </p>

            {/* LINE */}
            <div
              className="
      w-16
      h-[3px]
      bg-gradient-to-r
      from-[#2e7d32]
      to-[#f57c00]
      mx-auto
      my-6
      rounded-full
    "
            />

            {/* AUTHOR */}
            <p
              className="
      text-[#f57c00]
      font-semibold
      uppercase
      tracking-[2px]
      text-[11px]
      sm:text-xs
    "
            >
              Philosophy of Rupeshseth Gugale
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
