 import { motion } from "framer-motion";
import {
  BriefcaseBusiness,
  Building2,
  MapPin,
  Sparkles,
  Quote,
} from "lucide-react";

export default function Experience() {
  return (
    <section
      id="experience"
      className="
        relative
        overflow-hidden
        bg-[#f8f7f4]
        py-20
       "
    >
      {/* BACKGROUND GLOW */}
      <div className="absolute top-0 left-0 w-[320px] h-[320px] bg-[#2e7d32]/5 rounded-full blur-[120px]" />

      <div className="absolute bottom-0 right-0 w-[280px] h-[280px] bg-[#f57c00]/5 rounded-full blur-[120px]" />

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
          {/* LABEL */}
          <p
            className="
              text-[#f57c00] font-semibold uppercase tracking-wide text-sm mb-4
            "
          >
            EXPERIENCE • LEADERSHIP • MANAGEMENT
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
              Three Decades
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
              Of Ground Reality
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

          {/* DESCRIPTION */}
          <p
            className="
              text-gray-600
              text-lg
              leading-8
              max-w-5xl
              mx-auto
            "
          >
            Built through practical knowledge, hard work, and real-life
            experience, this journey reflects decades of understanding people,
            businesses, operations, leadership, and responsibilities from the
            ground level upward.
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
            rounded-[32px]
            border
            border-white/60
            bg-white/75
            backdrop-blur-xl
            overflow-hidden
            shadow-[0_10px_50px_rgba(0,0,0,0.05)]
          "
        >
          {/* TOP STRIP */}
          <div
            className="
              h-2
              w-full
              bg-gradient-to-r
              from-[#15803d]
              via-[#f97316]
              to-[#b45309]
            "
          />

          <div className="p-6 sm:p-8 lg:p-12">
            {/* TOP ROW */}
            <div
              className="
                flex
                flex-col
                lg:flex-row
                gap-8
                lg:gap-12
                items-center
              "
            >
              {/* LEFT */}
              <div className="flex-1">
                {/* ICON */}
                <div
                  className="
                    w-16
                    h-16
                    rounded-3xl
                    bg-gradient-to-br
                    from-[#2e7d32]/10
                    to-[#f57c00]/10
                    text-[#2e7d32]
                    flex
                    items-center
                    justify-center
                    mb-6
                  "
                >
                  <BriefcaseBusiness size={30} />
                </div>

                {/* MAIN TEXT */}
                <p
                  className="
                    text-[17px]
                    sm:text-[19px]
                    lg:text-[22px]
                    leading-[1.9]
                    text-[#08122f]
                    font-semibold
                  "
                >
                  At the age of 43, with nearly three decades of ground-level
                  experience, work across multiple sectors and responsibilities
                  is managed efficiently from one place in Juhu, Mumbai — built
                  through practical knowledge, real-world learning, strong
                  relationships, and years of dedication.
                </p>
              </div>

              {/* RIGHT STATS */}
              <div
                className="
                  w-full
                  lg:w-[360px]
                  grid
                  grid-cols-2
                  gap-4
                "
              >
                {/* CARD */}
                <div
                  className="
                    rounded-3xl
                    bg-[#2e7d32]/5
                    border
                    border-[#2e7d32]/10
                    p-5
                    text-center
                  "
                >
                  <h3 className="text-3xl font-black text-[#14532d]">43</h3>

                  <p className="text-sm text-gray-600 mt-2">
                    Years Of Life Experience
                  </p>
                </div>

                {/* CARD */}
                <div
                  className="
                    rounded-3xl
                    bg-[#f57c00]/5
                    border
                    border-[#f57c00]/10
                    p-5
                    text-center
                  "
                >
                  <h3 className="text-3xl font-black text-[#f57c00]">30+</h3>

                  <p className="text-sm text-gray-600 mt-2">
                    Years Ground Experience
                  </p>
                </div>

                {/* CARD */}
                <div
                  className="
                    rounded-3xl
                    bg-[#1e3a8a]/5
                    border
                    border-[#1e3a8a]/10
                    p-5
                    text-center
                  "
                >
                  <h3 className="text-3xl font-black text-[#1e3a8a]">Multi</h3>

                  <p className="text-sm text-gray-600 mt-2">
                    Industry Experience
                  </p>
                </div>

                {/* CARD */}
                <div
                  className="
                    rounded-3xl
                    bg-[#111827]/5
                    border
                    border-[#111827]/10
                    p-5
                    text-center
                  "
                >
                  <h3 className="text-3xl font-black text-[#111827]">One</h3>

                  <p className="text-sm text-gray-600 mt-2">Roof Management</p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
 