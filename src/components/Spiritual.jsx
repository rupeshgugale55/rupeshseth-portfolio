import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  HandCoins,
  ShieldCheck,
  Sparkles,
  Quote,
  HeartHandshake,
  Flame,
  CircleDashed,
} from "lucide-react";

import { SPIRITUALITY } from "../data/siteData";

/* =========================
   ICONS
========================= */

const inspirationIcons = [ShieldCheck, Flame, CircleDashed];

/* =========================
   SPIRITUAL SECTION
========================= */

export default function Spiritual() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="spiritual"
      className="
        py-20
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
              text-[#f57c00] font-semibold uppercase tracking-wide text-md mb-4
            "
          >
            आध्यात्मिक यात्रा
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
              Spirituality & Values
            </span>
            <div className="mx-auto mt-5 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#15803d] via-[#f97316] to-[#b45309] shadow-md" />
          </h2>

          <p
            className="
             text-gray-600 text-lg leading-8 max-w-2xl mx-auto
            "
          >
            Faith is not a ritual — it is the foundation upon which every
            decision is built.
          </p>
        </motion.div>

        {/* PRIMARY CARD */}

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
          transition={{ duration: 0.6 }}
          className="
            relative
            overflow-hidden
            rounded-[24px]
            bg-gradient-to-br
            from-[#2e7d32]
            to-[#256b2a]
            p-5
            sm:p-6
            lg:p-7
            mb-8
            shadow-[0_12px_35px_rgba(0,0,0,0.06)]
          "
        >
          {/* GLOW */}

          <div
            className="
              absolute
              top-0
              right-0
              w-[180px]
              h-[180px]
              bg-white/5
              rounded-full
              blur-[90px]
            "
          />

          {/* CONTENT */}

          <div className="relative z-10 text-center">
            {/* ICON */}

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-white/10
                border
                border-white/10
                backdrop-blur-md
                flex
                items-center
                justify-center
                mx-auto
                mb-5
              "
            >
              <HandCoins size={24} className="text-white" />
            </div>

            {/* TITLE */}

            <h3
              className="
                text-3xl font-bold text-white mb-6
              "
            >
              Swami Samarth
            </h3>

            {/* SUBTITLE */}

            <p
              className="
                text-green-100
                italic
                text-[14px]
                sm:text-[15px]
                mb-5
              "
            >
              {SPIRITUALITY.primary} — Primary Spiritual Guiding Force
            </p>

            {/* TEXT */}

            <p
              className="
                text-white/80
                text-[16px]
                sm:text-[15px]
                leading-[1.8rem]
                max-w-3xl
                mx-auto
              "
            >
              Deeply devoted follower whose faith in Swami Samarth has guided
              every challenge with strength and clarity. Contributed toward
              building a Swami Samarth temple in Shaniwar Peth, Pune — a sacred
              act of devotion.
            </p>
          </div>
        </motion.div>

        {/* INSPIRATIONS */}

        <div
          className="
            grid
            md:grid-cols-3
            gap-4
            mb-8
          "
        >
          {SPIRITUALITY.inspired.map((name, i) => {
            const Icon = inspirationIcons[i];

            return (
              <motion.div
                key={i}
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
                  delay: i * 0.06,
                  duration: 0.45,
                }}
                whileHover={{ y: -3 }}
                className="
                  bg-white/80
                  backdrop-blur-xl
                  rounded-[20px]
                  border
                  border-white/50
                  p-5
                  text-center
                  shadow-[0_8px_25px_rgba(0,0,0,0.04)]
                  hover:shadow-[0_15px_35px_rgba(0,0,0,0.07)]
                  transition-all
                  duration-300
                "
              >
                {/* ICON */}

                <div
                  className="
                    w-12
                    h-12
                    rounded-xl
                    bg-gradient-to-br
                    from-[#2e7d32]/10
                    to-[#f57c00]/10
                    flex
                    items-center
                    justify-center
                    mx-auto
                    mb-4
                  "
                >
                  <Icon size={22} className="text-[#2e7d32]" />
                </div>

                {/* TITLE */}

                <h4
                  className="
                    text-[20px]
                    font-bold
                    text-gray-900
                    mb-3
                  "
                >
                  {name}
                </h4>

                {/* TEXT */}

                <p
                  className="
                    text-gray-600
                    text-[16px]
                    leading-[1.6rem]
                  "
                >
                  {
                    [
                      "Inspired by fearlessness, discipline, and dedication to humanity.",

                      "Guided by the philosophy of strength and awakening of self.",

                      "Inspired by compassion, peace, and service to all.",
                    ][i]
                  }
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* QUOTES */}

        <div
          className="
            grid
            md:grid-cols-2
            gap-4
            mb-8
          "
        >
          {SPIRITUALITY.quotes.map((q, i) => (
            <motion.div
              key={i}
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
                delay: i * 0.06,
                duration: 0.45,
              }}
              whileHover={{ y: -3 }}
              className="
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
              {/* ICON */}

              <div
                className="
                  w-10
                  h-10
                  rounded-xl
                  bg-gradient-to-br
                  from-[#2e7d32]/10
                  to-[#f57c00]/10
                  flex
                  border border-green-800
                  items-center
                  justify-center
                  mb-4
                "
              >
                <Quote size={18} className="text-[#2e7d32]" />
              </div>

              {/* CONTENT */}

              <div className="relative z-10">
                <p
                  className="
                    text-[17px]
                    font-semibold
                    text-gray-900
                    leading-[1.8]
                    mb-4
                  "
                >
                  {q.text}
                </p>

                <p
                  className="
                    text-gray-600
                    italic
                    text-[1px]
                    mb-5
                  "
                >
                  {q.translation}
                </p>

                <div
                  className="
                    w-12
                    h-[2px]
                    bg-[#f57c00]
                    rounded-full
                    mb-4
                  "
                />

                <p
                  className="
                    text-[#f57c00]
                    text-[11px]
                    font-semibold
                    uppercase
                    tracking-[2px]
                  "
                >
                  — {q.author}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VALUES */}

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
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h3
            className="
              text-[22px]
              sm:text-[26px]
              font-bold
              text-gray-900
              mb-6
            "
          >
            Core Life Values
          </h3>

          <div
            className="
              flex
              flex-wrap
              justify-center
              gap-3
            "
          >
            {SPIRITUALITY.values.map((v, i) => (
              <motion.span
                key={i}
                whileHover={{
                  scale: 1.03,
                }}
                className={`
                  px-5
                  h-10
                  rounded-full
                  inline-flex
                  items-center
                  text-[13px]
                  font-semibold
                  text-white
                  shadow-md
                  ${i % 2 === 0 ? "bg-[#2e7d32]" : "bg-[#f57c00]"}
                `}
              >
                {v}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
