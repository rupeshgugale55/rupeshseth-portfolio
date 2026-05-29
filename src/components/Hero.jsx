import { motion } from "framer-motion";
import { CLIENT } from "../data/siteData";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen overflow-hidden bg-[#f8f7f4] pt-24 pb-15 lg:pt-28"
    >
      {/* BLUR BACKGROUNDS */}
      <div className="absolute top-[-120px] left-[-120px] w-[320px] h-[320px] bg-[#2e7d32]/10 rounded-full blur-3xl" />
      <div className="absolute bottom-[-120px] right-[-120px] w-[320px] h-[320px] bg-[#f57c00]/10 rounded-full blur-3xl" />

      {/* MAIN CONTAINER */}
      <div className="max-w-[1500px] mx-auto px-5 sm:px-8 lg:px-12 xl:px-16 min-h-screen flex items-center">
        {/* GRID */}
        <div className="grid lg:grid-cols-[1fr_0.85fr] gap-10 xl:gap-16 items-center w-full">
          {/* LEFT CONTENT */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="
    relative
    flex justify-center lg:justify-end
    lg:mt-0
  "
          >
            {/* FLOATING RING */}
            <div
              className="
      absolute
      inset-0
      scale-[1.03]
      rounded-[38px]
      border border-white/30
      backdrop-blur-md
    "
            />

            {/* MAIN CONTAINER */}
            <div className="relative group">
              {/* CARD */}
              <div
                className="
        relative
        overflow-hidden
        rounded-[32px]
        border border-white/40
        bg-white/40
        backdrop-blur-2xl
        shadow-[0_20px_80px_rgba(0,0,0,0.18)]
        transition-all duration-500
        group-hover:-translate-y-3
      "
              >
                {/* TOP LIGHT */}
                <div
                  className="
          absolute inset-x-0 top-0
          h-24
          bg-gradient-to-b
          from-white/30
          to-transparent
          z-10
        "
                />

                {/* IMAGE */}
                <img
                  src="/images/profile.png"
                  alt="Rupeshseth Gugale"
                  className="
          w-full
          max-w-[360px]
          sm:max-w-[420px]
          lg:max-w-[470px]

          h-[460px]
          sm:h-[580px]
          lg:h-[520px]

          object-cover
          rounded-[32px]

          transition-transform duration-700
          group-hover:scale-[1.04]
        "
                />

                {/* OVERLAY */}
                <div
                  className="
          absolute inset-0
          bg-gradient-to-t
          from-black/25
          via-transparent
          to-white/10
          pointer-events-none
        "
                />
              </div>

              {/* FLOATING BLUR DOTS */}
              <div className="absolute -top-5 -right-5 w-20 h-20 bg-[#f57c00]/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-5 -left-5 w-24 h-24 bg-[#2e7d32]/20 rounded-full blur-2xl" />
            </div>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="
    relative z-10 w-full
    flex flex-col
    items-center lg:items-start
    text-center lg:text-left
  "
          >
            {/* BADGE */}
            <div
              className="
    inline-flex items-center justify-center gap-2
    px-4 py-2
    rounded-full
    bg-green-900 border border-gray-200 shadow-sm
    mb-6
    mx-auto
  "
            >
              <div className="w-2.5 h-2.5 rounded-full bg-[#f57c00]" />

              <span
                className="
      text-[14px] sm:text-sm
      font-medium
text-white      tracking-wide
      whitespace-nowrap
    "
              >
                स्वावलंबी • आध्यात्मिक • दूरदर्शी
              </span>
              <div className="w-2.5 h-2.5 rounded-full bg-[#f57c00]" />
            </div>

            {/* HEADING */}
            <h1 className="font-black leading-tight">
              {/* FIRST LINE */}
              <span
                className="
    block
text-[clamp(1.7rem,7vw,4rem)] bg-[#b8860b]
    bg-clip-text
    text-transparent
    pt-2  
  "
              >
                श्री. रुपेशसेठ
              </span>

              {/* SECOND LINE */}
              <span
                className="
text-[clamp(1.35rem,5.5vw,3.2rem)]  bg-[#b8860b]
    bg-clip-text
    text-transparent
    
    "
              >
                हेमंतजी गुगळे पाटील (जैन)
              </span>
            </h1>
            <div
              className="
    inline-flex
    items-center
    justify-center
    px-3 mt-2
        rounded-full
text-[#8B1E1E]    text-md
    sm:text-base
    font-bold
    tracking-wide
  "
            >
              सनय छत्रपती शासन पक्ष <br />
               राष्ट्रीय कार्यकारी अध्यक्ष
            </div>
            {/* SUBTITLE */}
            <p
              className="
      mt-4
      text-[16px] sm:text-[15px] lg:text-[1.15rem]
      text-[#f57c00]
      font-semibold
      leading-relaxed
    "
            >
              Entrepreneur • Leader • Social Visionary
            </p>

            {/* DESCRIPTION */}
            <p
              className="
      mt-5
      text-gray-600
      text-[16px] sm:text-[15px] lg:text-[17px]
      leading-7 sm:leading-8
      max-w-[620px]
    "
            >
              From humble beginnings to national leadership — built on faith,
              family, and the vision of meaningful leadership that inspires
              generations.
            </p>

            {/* BUTTONS */}
            <div
              className="
      mt-7
      flex flex-col sm:flex-row
      gap-3 sm:gap-4
      w-full sm:w-auto
    "
            >
              {/* SECONDARY BUTTON */}
              <a
                href="/contact"
                className="
        group
        inline-flex items-center justify-center gap-3
        w-full sm:w-auto
        px-6 sm:px-7
        py-3.5 sm:py-4
        rounded-full
        border border-gray-300
        bg-white
        text-gray-800
        text-sm sm:text-base
        font-semibold
        hover:border-[#f57c00]
        hover:text-[#f57c00]
        hover:scale-[1.03]
        transition-all duration-300
        shadow-sm
      "
              >
                <span>Connect Now</span>

                <svg
                  className="
          w-4 h-4 sm:w-5 sm:h-5
          group-hover:translate-x-1
          transition-all duration-300
        "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
