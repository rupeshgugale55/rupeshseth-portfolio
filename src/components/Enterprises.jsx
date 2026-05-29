 
import { useState } from "react";
import {
  Building2,
  ChevronDown,
  MapPin,
  Landmark,
  Hotel,
  BriefcaseBusiness,
  Film,
  ShieldCheck,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

function BusinessCard({
  icon,
  title,
  subtitle,
  details,
  locations,
  index,
  open,
  setOpen,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.06,
      }}
      onClick={() => setOpen(open ? null : index)}
      className="
        group
        relative
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
        cursor-pointer
      "
    >
      {/* Glow */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-[#2e7d32]/5 rounded-full blur-3xl" />

      {/* Header */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-4">
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
            "
          >
            {icon}
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 text-xl">{title}</h3>

            <p className="text-sm text-[#f57c00] mt-1">{subtitle}</p>
          </div>
        </div>

        <ChevronDown
          className={`transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </div>

      {/* Content */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="overflow-hidden"
          >
            <p className="text-gray-600 leading-8 text-[16px] mt-5">
              {details}
            </p>

            {/* Locations */}
            <div className="mt-6 space-y-3">
              {locations.map((loc, i) => (
                <div
                  key={i}
                  className="
                    flex
                    items-start
                    gap-3
                    rounded-2xl
                    border
                    border-[#2e7d32]/10
                    bg-[#2e7d32]/5
                    p-4
                  "
                >
                  <MapPin
                    size={20}
                    className="
    text-[#2e7d32]
    mt-1
    flex-shrink-0
    min-w-[20px]
    min-h-[20px]
  "
                  />

                  <p className="text-sm leading-7 text-gray-700">{loc}</p>
                </div>
              ))}
            </div>

            {/* Bottom Line */}
            <div
              className="
                mt-6
                w-14
                h-[3px]
                rounded-full
                bg-gradient-to-r
                from-[#2e7d32]
                to-[#f57c00]
              "
            />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function Enterprises() {
  const [openCard, setOpenCard] = useState(null);

  const businesses = [
    {
      icon: <Hotel size={24} />,
      title: "Sinhassan Dormitory Hostel",
      subtitle: "Hospitality & Accommodation",
      details:
        "A respected hospitality venture focused on providing quality accommodation and service with professionalism, comfort, and trust.",
      locations: [
        "Juhu Church Road, Next To Fresco Bakery, Vile Parle West, Juhu, Mumbai, Maharashtra - 49",
      ],
    },

    {
      icon: <Building2 size={24} />,
      title: "Namo Nest Dormitory ",
      subtitle: "Modern Stay Solutions",
      details:
        "Affordable and modern dormitory accommodation venture serving travelers, professionals, and working individuals in Mumbai.",
      locations: ["Goregaon West, Mumbai"],
    },

    {
      icon: <Landmark size={24} />,
      title: "Navrup Licensing",
      subtitle: "Licensing & Liaison Services",
      details:
        "Professional licensing, liaisoning, and approval assistance across hospitality, commercial, and business sectors.",
      locations: [
        "Mumbai - Juhu, Andheri, Nariman Point",
        "384 Shaniwar Peth, Shankar Chaya Society, Ground Floor, Paper Galli, Pune - 411030",
      ],
    },

    {
      icon: <BriefcaseBusiness size={24} />,
      title: "Navrup Realty",
      subtitle: "Real Estate & Investments",
      details:
        "Real estate consultancy and investment-related services focused on strategic growth, development opportunities, and client trust.",
      locations: [
        "Mumbai - Juhu, Andheri, Nariman Point",
        "Pune - Shaniwar Peth",
      ],
    },

    {
      icon: <Film size={24} />,
      title: "Navrup Entertainment",
      subtitle: "Film & Entertainment",
      details:
        "Entertainment and film-related venture focused on meaningful storytelling, cultural identity, and impactful productions.",
      locations: ["Mumbai, Maharashtra"],
    },

    {
      icon: <ShieldCheck size={24} />,
      title: "JK Printers",
      subtitle: "Printing & Media Services",
      details:
        "Professional printing and branding services supporting business identity, public communication, and promotional solutions.",
      locations: ["Mumbai & Pune"],
    },

    {
      icon: <Landmark size={24} />,
      title: "Political & Social Leadership",
      subtitle: "Public Leadership",
      details:
        "Actively involved in political and social initiatives with leadership responsibilities and public engagement focused on development and community service.",
      locations: ["Maharashtra"],
    },

    {
      icon: <Building2 size={24} />,
      title: "Nrusimha Bhan Saraswati",
      subtitle: "Spiritual & Cultural Association",
      details:
        "Deeply connected with spiritual and cultural values inspired through guidance, devotion, and service-oriented philosophy.",
      locations: ["India"],
    },
  ];

  return (
    <section
      id="enterprises"
      className="
        relative
        overflow-hidden
        bg-[#f8f7f4]
        py-33
      "
    >
      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-[#2e7d32]/5 rounded-full blur-[100px]" />

      <div className="absolute bottom-0 right-0 w-[280px] h-[280px] bg-[#f57c00]/5 rounded-full blur-[100px]" />

      {/* Container */}
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
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-[#f57c00] font-semibold uppercase tracking-wide text-sm mb-4">
            BUSINESS & LEADERSHIP
          </p>

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
              Enterprises &
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
              Leadership
            </span>

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

          <p className="text-gray-600 text-lg leading-8 max-w-3xl mx-auto">
            A diversified presence across hospitality, entertainment,
            licensing, real estate, printing, politics, and public
            leadership — built through years of vision, hard work,
            relationships, and trust.
          </p>
        </div>

        {/* Grid */}
        <div
          className="
            grid
            grid-cols-1
            md:grid-cols-2
            gap-6
            lg:gap-8
            items-start
          "
        >
          {businesses.map((item, i) => (
            <BusinessCard
              key={i}
              {...item}
              index={i}
              open={openCard === i}
              setOpen={setOpenCard}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
 