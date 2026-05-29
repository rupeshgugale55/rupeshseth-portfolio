 import { motion } from "framer-motion";
import { HeartHandshake, Quote } from "lucide-react";

const supporters = [
  "Sujit Dhanak",
  "Krishna Rathod",
  "Abhijeet Kamble",
  "Dhivad Saheb",
  "Shailesh Jagtap",
  "Raju Bhau More",
  "Anup Wani",
  "Jatin Pardeshi",
  "Pavan Khandagle",
  "Vikram Thakur",
  "Akbar Husen",
  "Dhruva Karunakar",
  "Adv. Lalit Bindal",
  "Adv. Shabana Sothe",
  "Gyandev Kori",
  "Dr. Sandesh Kamble",
  "Alam Bhai",
];

export default function Gratitude() {
  return (
    <section
      id="gratitude"
      className="
        relative
        overflow-hidden
        bg-[#f8f7f4]
        py-12
      "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#2e7d32]/5 rounded-full blur-[100px]" />

      <div className="absolute bottom-0 right-0 w-[280px] h-[280px] bg-[#f57c00]/5 rounded-full blur-[100px]" />

      {/* CONTAINER */}
      <div
        className="
          max-w-[1400px]
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
          className="text-center mb-14"
        >
          {/* LABEL */}
          <p
            className="
              text-[#f57c00]
              font-semibold
              uppercase
              tracking-wide
              text-sm
              mb-4
            "
          >
            GRATITUDE & STRENGTH
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
                text-[clamp(2rem,5vw,4rem)]
                bg-gradient-to-r
                from-[#14532d]
                via-[#f97316]
                to-[#b45309]
                bg-clip-text
                text-transparent
                p-1
              "
            >
              The People Who
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
                text-transparent
                pb-2
              "
            >
              Stood By Me
            </span>

            {/* LINE */}
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

          {/* TEXT */}
          <p
            className="
              text-gray-600
              text-lg
              leading-8
              max-w-4xl
              mx-auto
            "
          >
            During one of the most difficult phases of life, when health
            challenges made even daily life difficult, these individuals stood
            firmly with unwavering support, faith, prayers, and encouragement.
            Their presence became a source of strength, hope, and motivation
            throughout the journey.
          </p>
        </motion.div>

        {/* MAIN CARD */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="
            relative
            rounded-[28px]
            border
            border-white/50
            bg-white/70
            backdrop-blur-xl
            p-6
            sm:p-8
            lg:p-10
            overflow-hidden
            shadow-[0_10px_40px_rgba(0,0,0,0.05)]
          "
        >
          {/* GLOW */}
          <div className="absolute top-0 right-0 w-[220px] h-[220px] bg-[#2e7d32]/5 rounded-full blur-[90px]" />

          {/* ICON */}
          <div
            className="
              relative
              w-14
              h-14
              rounded-2xl
              bg-gradient-to-br
              from-[#2e7d32]/10
              to-[#f57c00]/10
              text-[#2e7d32]
              flex
              items-center
              justify-center
              mb-8
              mx-auto
            "
          >
            <HeartHandshake size={26} />
          </div>

          {/* SUPPORTERS GRID */}
          <div
            className="
              grid
              grid-cols-2
lg:grid-cols-3
              gap-4
            "
          >
            {supporters.map((person, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.4,
                  delay: i * 0.03,
                }}
                className="
                  rounded-2xl
                  border
                  border-[#2e7d32]/10
                  bg-[#2e7d32]/5
                  px-2
min-h-[88px]
flex
items-center
justify-center                  text-center
                  text-gray-800
                  font-medium
                  text-md
                  hover:bg-[#f57c00]/5
                  transition-all
                  duration-300  
                  
                "
              >
                {person}
              </motion.div>
            ))}
          </div>

          {/* QUOTE */}
          <div className="mt-12 text-center">
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
              <div className="absolute inset-0 bg-gradient-to-br from-[#2e7d32]/10 to-[#f57c00]/10" />

              <div
                className="
                  relative
                  z-10
                  w-10
                  h-10
                  rounded-xl
                  bg-white/10
                  border
                  border-black/20
                  flex
                  items-center
                  justify-center
                "
              >
                <Quote size={18} className="text-black" />
              </div>
            </div>

            {/* MESSAGE */}
            <p
              className="
                text-[16px]
                sm:text-[18px]
                lg:text-[22px]
                text-[#08122f]
                leading-[1.8]
                max-w-4xl
                mx-auto
                font-semibold
              "
            >
              “Your support, trust, prayers, and encouragement gave me the
              strength to keep fighting. I will always remain grateful to each
              one of you from the bottom of my heart.”
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
            <p className="text-[#f57c00] font-semibold uppercase tracking-wide text-sm">
              — Rupeshseth Hemantji Gugale
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
 