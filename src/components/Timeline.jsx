import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { TIMELINE } from "../data/siteData";

/* =========================
   TIMELINE ITEM
========================= */

function TimelineItem({ item, index, isLeft }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const colors = {
    green: "#2e7d32",
    orange: "#f57c00",
    gold: "#d4a843",
  };

  const color = colors[item.color] || colors.green;

  return (
    <div
      ref={ref}
      className={`
        relative
        flex
        items-start
        mb-5
        ${isLeft ? "md:flex-row-reverse" : ""}
      `}
    >
      {/* EMPTY SIDE */}
      <div className="hidden md:block flex-1" />

      {/* CENTER ICON */}
      <div
        className="
          relative
          z-20
          flex
          flex-col
          items-center
          px-2
        "
      >
        <motion.div
          initial={{
            scale: 0,
            opacity: 0,
          }}
          animate={
            inView
              ? {
                  scale: 1,
                  opacity: 1,
                }
              : {}
          }
          transition={{
            duration: 0.4,
            delay: index * 0.05,
          }}
          className="
            relative
            w-10
            h-10
            rounded-xl
            flex
            items-center
            justify-center
            text-sm
            bg-white/80
            backdrop-blur-xl
            border
            border-white/50
            shadow-[0_8px_20px_rgba(0,0,0,0.05)]
          "
          style={{
            color,
          }}
        >
          <div
            className="absolute inset-0 rounded-xl opacity-10"
            style={{
              background: color,
            }}
          />

          <span className="relative z-10">{item.icon}</span>
        </motion.div>
      </div>

      {/* CARD */}
      <motion.div
        initial={{
          opacity: 0,
          x: isLeft ? -25 : 25,
        }}
        animate={
          inView
            ? {
                opacity: 1,
                x: 0,
              }
            : {}
        }
        transition={{
          duration: 0.5,
          delay: index * 0.05 + 0.08,
        }}
        whileHover={{ y: -2 }}
        className="flex-1"
      >
        <div
          className="
            relative
            overflow-hidden
            bg-white/75
            backdrop-blur-xl
            rounded-[18px]
            border
            border-white/50
            p-4
            lg:p-5
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
              w-16
              h-16
              rounded-full
              blur-3xl
              opacity-10
            "
            style={{
              background: color,
            }}
          />

          {/* YEAR */}
          <div
            className="
              inline-flex
              items-center
              px-3
              h-7
              rounded-full
              text-[13px]
              font-semibold
              mb-3
            "
            style={{
              background: `${color}15`,
              color,
            }}
          >
            {item.year}
          </div>

          {/* TITLE */}
          <h3
            className="
              font-semibold
            text-gray-900
            leading-tight
            mb-3 text-xl
            "
          >
            {item.title}
          </h3>

          {/* DESCRIPTION */}
          <p
            className="
             text-gray-600 leading-8 text-[16px]
            "
          >
            {item.description}
          </p>

          {/* BOTTOM LINE */}
          <div
            className="
              mt-4
              w-10
              h-[3px]
              rounded-full
            "
            style={{
              background: `linear-gradient(to right, ${color}, #f57c00)`,
            }}
          />
        </div>
      </motion.div>
    </div>
  );
}

/* =========================
   TIMELINE SECTION
========================= */

export default function Timeline() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      className="
        py-10
        lg:py-14
        bg-[#f8f7f4]
        relative
        overflow-hidden
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[250px] h-[250px] bg-[#2e7d32]/5 rounded-full blur-[90px]" />

      <div className="absolute bottom-0 right-0 w-[240px] h-[240px] bg-[#f57c00]/5 rounded-full blur-[90px]" />

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
            MILESTONES
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
              Life Timeline
            </span>
            <div className="mx-auto mt-5 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#15803d] via-[#f97316] to-[#b45309] shadow-md" />
          </h2>

          <p
            className="
             text-gray-600 text-lg leading-8 max-w-2xl mx-auto
            "
          >
            Every milestone a lesson, every struggle a stepping stone — the
            journey of a self-made leader.
          </p>
        </motion.div>

        {/* TIMELINE */}
        <div className="relative">
          {/* CENTER LINE */}
          <div
            className="
              absolute
              left-5
              md:left-1/2
              top-0
              bottom-0
              w-[2px]
              bg-gradient-to-b
              from-[#2e7d32]
              via-[#f57c00]
              to-[#d4a843]
              opacity-20
            "
            style={{
              transform: "translateX(-50%)",
            }}
          />

          {/* ITEMS */}
          {TIMELINE.map((item, i) => (
            <TimelineItem key={i} item={item} index={i} isLeft={i % 2 === 0} />
          ))}
        </div>
      </div>
    </section>
  );
}
