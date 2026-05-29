 import { motion } from "framer-motion";
import {
  Sparkles,
  Quote,
  HeartHandshake,
} from "lucide-react";

const pillars = [
  "Mrs. Urmila",
  "Rakeshji Acharya",
  "Ramji Yadav",
  "Namdevrao Jadhav",
  "Vargis Popatji Bedarkar",
  "Bandu Shresth",
  "Buntyseth",
  "Purohitji Lord",
  "Rajji",
  "Amitji Kadam",
  "Intekab",
  "Rehmanji",
  "Sanjayji Pardeshi",
  "Vinodji",
  "Dr. Pramodji",
  "Nageshji Pujari",
];

export default function Backbone() {
  return (
    <section
      id="backbone"
      className="
        relative
        overflow-hidden
        bg-[#f8f7f4]
        py-5
       "
    >
      {/* BACKGROUND GLOWS */}
      <div className="absolute top-0 left-0 w-[320px] h-[320px] bg-[#2e7d32]/5 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-[#f57c00]/5 rounded-full blur-[120px]" />

      {/* CONTAINER */}
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
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          {/* TOP LABEL */}
          <p
            className="
             text-[#f57c00] font-semibold uppercase tracking-wide text-sm mb-4
            "
          >
            GRATITUDE • SUPPORT • STRENGTH
          </p>

          {/* TITLE */}
          <h2
            className="
              text-center
              font-black
              leading-[1]
              tracking-[-1.5px]
              mb-6
            "
          >
            <span
              className="
                block
                text-[clamp(2.2rem,5vw,4.5rem)]
                bg-gradient-to-r
                from-[#14532d]
                via-[#f97316]
                to-[#b45309]
                bg-clip-text
                text-transparent
                p-1
              "
            >
              The Hands That
            </span>

            <span
              className="
                block
                mt-1
                text-[clamp(2.2rem,5vw,4.5rem)]
                bg-gradient-to-r
                from-[#111827]
                via-[#1e3a8a]
                to-[#0f172a]
                bg-clip-text
                text-transparent
              "
            >
              Never Let Go
            </span>

            {/* UNDERLINE */}
            <div
              className="
                mx-auto
                mt-6
                h-1.5
                w-36
                rounded-full
                bg-gradient-to-r
                from-[#15803d]
                via-[#f97316]
                to-[#b45309]
              "
            />
          </h2>

          {/* INTRO */}
          <p
            className="
              text-gray-600
              text-lg
              leading-8
              max-w-5xl
              mx-auto
            "
          >
            In every phase of life — whether moments of growth, struggle,
            learning, or difficult times — these individuals stood strongly
            beside him as a source of unwavering support, guidance, trust, and
            emotional strength.
          </p>
        </motion.div>

        {/* MAIN GLASS CARD */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
            rounded-[32px]
            border
            border-white/60
            bg-white/75
            backdrop-blur-xl
            p-6
            sm:p-8
            lg:p-12
            overflow-hidden
            shadow-[0_10px_50px_rgba(0,0,0,0.05)]
          "
        >
          {/* INNER GLOW */}
          <div className="absolute top-0 right-0 w-[260px] h-[260px] bg-[#2e7d32]/5 rounded-full blur-[100px]" />

          {/* TOP ICON */}
          <div
            className="
              relative
              w-16
              h-16
              mx-auto
              rounded-3xl
              bg-gradient-to-br
              from-[#2e7d32]/10
              to-[#f57c00]/10
              text-[#2e7d32]
              flex
              items-center
              justify-center
              mb-10
              shadow-sm
            "
          >
            <HeartHandshake size={30} />
          </div>

          {/* GRID */}
          <div
            className="
              grid
              grid-cols-2
              lg:grid-cols-4
              gap-4
              lg:gap-5
            "
          >
            {pillars.map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.45,
                  delay: i * 0.03,
                }}
                className="
                  relative
                  min-h-[95px]
                  rounded-3xl
                  border
                  border-white/60
                  bg-white/60
                  backdrop-blur-xl
                  px-3
                  flex
                  items-center
                  justify-center
                  text-center
                  shadow-[0_4px_15px_rgba(0,0,0,0.03)]
                  hover:-translate-y-1
                  hover:shadow-[0_10px_25px_rgba(0,0,0,0.06)]
                  transition-all
                  duration-300
                  overflow-hidden
                "
              >
                {/* MINI GLOW */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2e7d32]/5 to-[#f57c00]/5 opacity-0 hover:opacity-100 transition-opacity duration-300" />

                <p
                  className="
                    relative
                    z-10
                    text-[13px]
                    sm:text-[15px]
                    font-semibold
                    text-[#1f2937]
                    leading-6
                  "
                >
                  {person}
                </p>
              </motion.div>
            ))}
          </div>

          {/* QUOTE BLOCK */}
          <div className="text-center mt-10">
            {/* ICON */}
            <div
              className="
                relative
                w-14
                h-14
                mx-auto
                mb-6
                rounded-2xl
                bg-white/80
                border
                border-black 
                shadow-[0_8px_25px_rgba(0,0,0,0.06)]
                flex
                items-center
                justify-center
                overflow-hidden
              "
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#2e7d32]/10 to-[#f57c00]/10" />

              <Quote size={20} className="relative z-10 text-black" />
            </div>

            {/* MESSAGE */}
            <p
              className="
                text-[17px]
                sm:text-[20px]
                lg:text-[24px]
                text-[#08122f]
                leading-[1.9]
                max-w-5xl
                mx-auto
                font-semibold
              "
            >
              “Their trust, prayers, care, and presence gave strength during
              every situation in life. Along with the divine blessings of Swami
              Samarth and Mastan Baba, their support became the true backbone
              behind every step forward.”
            </p>

            {/* FOOTER */}
            {/* DIVIDER */}
            <div
              className="
              w-24
              h-[3px]
              rounded-full
              bg-gradient-to-r
              from-[#2e7d32]
              to-[#f57c00]
              mx-auto
               my-5
            "
            />
            {/* NAME */}
            <p className="text-[#f57c00] font-semibold uppercase tracking-wide text-sm">
              — Rupeshseth Hemantji Gugale
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
 