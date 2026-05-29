import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { SOCIAL_WORK } from "../data/siteData";
import { Quote } from "lucide-react";

export default function SocialWork() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="social"
      className="
        py-33
        bg-[#f8f7f4]
        relative
        overflow-hidden  lg:py-28
      "
    >
      {/* SOFT GLOW */}

      <div
        className="
        absolute
        top-0
        right-0
        w-[450px]
        h-[450px]
        bg-[#f57c00]/5
        rounded-full
        blur-[120px]
      "
      />

      <div
        className="
        absolute
        bottom-0
        left-0
        w-[400px]
        h-[400px]
        bg-[#2e7d32]/5
        rounded-full
        blur-[120px]
      "
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative z-10">
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
          className="text-center mb-20"
        >
          <p
            className="
       text-[#f57c00] font-semibold uppercase tracking-wide text-md mb-4
            "
          >
            सेवा — मानवता की पूजा
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
              Social Work &
            </span>
            <span className="block mt-2 text-[clamp(2rem,5vw,4rem)] bg-gradient-to-r from-[#111827] via-[#1e3a8a] to-[#0f172a] bg-clip-text text-transparent px-2 pb-2">
              Community
            </span>
            <div className="mx-auto mt-5 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#15803d] via-[#f97316] to-[#b45309] shadow-md" />
          </h2>

          <p
            className="
              text-gray-600
              text-lg
              leading-8
              max-w-3xl
              mx-auto
              text-center
            "
          >
            True success is measured not by wealth accumulated but by the number
            of lives touched, supported, and transformed.
          </p>
        </motion.div>

        {/* IMPACT CARDS */}

        <div
          className="
            grid
            sm:grid-cols-2
            lg:grid-cols-4
            gap-6
            mb-20
          "
        >
          {SOCIAL_WORK.map((item, i) => (
            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 30,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                delay: i * 0.08,
                duration: 0.5,
              }}
              whileHover={{ y: -6 }}
              className="
                bg-white
                rounded-[30px]
                border
                border-gray-100
                p-8
                text-center
                hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)]
                transition-all
                duration-300
              "
            >
              {/* COUNT */}

              <div
                className="
                  text-5xl
                  font-bold
                  mb-2
                  bg-gradient-to-r
                  from-[#2e7d32]
                  to-[#f57c00]
                  bg-clip-text
                  text-transparent
                "
              >
                {item.count}
              </div>

              {/* UNIT */}

              <p
                className="
                  text-[#f57c00]
                  text-sm
                  font-semibold
                  uppercase
                  tracking-wide
                  mb-5
                "
              >
                {item.unit}
              </p>

              {/* TITLE */}

              <h4
                className="
                  text-xl
                  font-semibold
                  text-gray-900
                  mb-4
                "
              >
                {item.title}
              </h4>

              {/* DESCRIPTION */}

              <p
                className="
                text-gray-600 leading-9 text-[16px]
                "
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* QUOTE SECTION */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            bg-white
            rounded-[40px]
            border
            border-gray-100
            p-10
            md:p-16
            text-center
            shadow-[0_20px_60px_rgba(0,0,0,0.05)]
            relative
            overflow-hidden
          "
        >
          {/* ORANGE GLOW */}

          <div
            className="
            absolute
            top-0
            right-0
            w-[250px]
            h-[250px]
            bg-[#f57c00]/5
            rounded-full
            blur-[90px]
          "
          />

          {/* CONTENT */}

          <div className="relative z-10 text-center flex flex-col items-center">
            {/* QUOTE ICON */}
            <div
              className="
      relative
      w-11
      h-11
      rounded-xl
      bg-black/10
      border
      border-black/40
      backdrop-blur-md
      flex
      items-center
      justify-center
      mb-5
    "
            >
              <Quote size={18} className="text-black" />
            </div>

            {/* HINDI QUOTE */}
            <p
              className="
      text-2xl
      sm:text-3xl
      md:text-4xl
      font-bold
      text-gray-900
      leading-[1.7]
      max-w-3xl
      mx-auto
      mb-5
      text-center
    "
            >
              सेवा ही सबसे बड़ी पूजा है
            </p>

            {/* ENGLISH */}
            <p
              className="
      text-[#f57c00]
      text-[15px]
      sm:text-lg
      italic
      mb-6
      text-center
    "
            >
              "Service is the greatest form of worship."
            </p>

            {/* LINE */}
            <div
              className="
      w-14
      h-[2px]
      rounded-full
      bg-gradient-to-r
      from-[#2e7d32]
      to-[#f57c00]
      mb-5
    "
            />

            {/* AUTHOR */}
            <p
              className="
      text-gray-600
      text-[11px]
      font-semibold
      uppercase
      tracking-[2px]
      text-center
    "
            >
              — Rupeshseth Hemantji Gugale
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
