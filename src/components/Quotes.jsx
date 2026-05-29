import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Quote } from "lucide-react";
import { QUOTES } from "../data/siteData";

/* =========================
   COLOR CONFIG
========================= */

const BG_CONFIGS = {
  green: {
    bg: "from-[#2e7d32] to-[#256b2a]",
    glow: "bg-[#2e7d32]/10",
    accent: "#4caf65",
  },

  orange: {
    bg: "from-[#f57c00] to-[#db6d00]",
    glow: "bg-[#f57c00]/10",
    accent: "#ffb366",
  },

  gold: {
    bg: "from-[#d4a843] to-[#b88c2d]",
    glow: "bg-[#d4a843]/10",
    accent: "#f5d77c",
  },
};

/* =========================
   QUOTE CARD
========================= */

function QuoteBlock({ quote, index }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const cfg = BG_CONFIGS[quote.bg] || BG_CONFIGS.green;

  const isHindi = /[\u0900-\u097F]/.test(quote.text);

  return (
    <motion.div
      ref={ref}
      initial={{
        opacity: 0,
        y: 25,
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
        duration: 0.5,
        delay: index * 0.06,
      }}
      whileHover={{ y: -3 }}
      className={`
        relative
        overflow-hidden
        rounded-[24px]
        bg-gradient-to-br
        ${cfg.bg}
        p-5
        sm:p-6
        lg:p-7
        shadow-[0_12px_35px_rgba(0,0,0,0.06)]
      `}
    >
      {/* GLOW */}
      <div
        className={`
          absolute
          top-0
          right-0
          w-[180px]
          h-[180px]
          rounded-full
          blur-[90px]
          ${cfg.glow}
        `}
      />

      {/* QUOTE ICON */}
      <div
        className="
          relative
          z-10
          w-11
          h-11
          rounded-xl
          bg-white/10
          border
          border-white/40
          backdrop-blur-md
          flex
          items-center
          justify-center
          mb-5
        "
      >
        <Quote size={18} className="text-white" />
      </div>

      {/* CONTENT */}
      <div className="relative z-10">
        {/* MAIN QUOTE */}
        <motion.p
          initial={{
            opacity: 0,
            scale: 0.98,
          }}
          animate={
            inView
              ? {
                  opacity: 1,
                  scale: 1,
                }
              : {}
          }
          transition={{
            delay: 0.1,
            duration: 0.45,
          }}
          className={`
            text-white
            ${
              isHindi
                ? "text-[19px] sm:text-[20px] lg:text-[24px] font-semibold"
                : "text-[17px] sm:text-[18px] lg:text-[21px] italic"
            }
            leading-[1.8]
            max-w-3xl
            mb-5
          `}
        >
          {quote.text}
        </motion.p>

        {/* TRANSLATION */}
        {quote.translation && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{
              delay: 0.2,
              duration: 0.4,
            }}
            className="
              text-white/75
              italic
              text-[15px]
              sm:text-[15px]
              mb-5
            "
          >
            "{quote.translation}"
          </motion.p>
        )}

        {/* DIVIDER */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{
            delay: 0.3,
            duration: 0.45,
          }}
          className="
            w-14
            h-[2px]
            rounded-full
            mb-5
          "
          style={{
            background: `linear-gradient(to right, ${cfg.accent}, transparent)`,
          }}
        />

        {/* AUTHOR */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{
            delay: 0.4,
            duration: 0.4,
          }}
          className="
            text-[11px]
            uppercase
            tracking-[2px]
            font-semibold
            text-white/75
          "
        >
          — {quote.author}
        </motion.p>
      </div>
    </motion.div>
  );
}

/* =========================
   QUOTES SECTION
========================= */

export default function Quotes() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="quotes"
      className="
        py-5
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
            WORDS OF WISDOM
          </p>

          <h2
            className="
             text-center font-black leading-[0.95] tracking-[-1.5px] mb-8text-center font-black leading-[0.95] tracking-[-1.5px] mb-8
            "
          >
            <span
              className="
               block text-[clamp(2rem,5vw,4rem)] bg-gradient-to-r from-[#14532d] via-[#f97316] to-[#b45309] bg-clip-text text-transparent px-2 py-1
              "
            >
              Inspirational Quotes
            </span>
            <div className="mx-auto mt-5 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#15803d] via-[#f97316] to-[#b45309] shadow-md" />
          </h2>

          <p
            className="
             text-gray-600 text-lg leading-8 max-w-2xl mx-auto
            "
          >
            Words born from lived experience — every quote a lesson from the
            journey.
          </p>
        </motion.div>

        {/* QUOTES */}
        <div className="space-y-5">
          {QUOTES.map((q, i) => (
            <QuoteBlock key={i} quote={q} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
