import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RotateCcw, Download, QrCode } from "lucide-react";

const CARDS = [
  {
    id: 1,
    type: "Business",

    // FRONT IMAGE
    frontImage: "/images/visiting_card/social_card.jpeg",

    // BACK CONTENT
    back: {
      bg: "linear-gradient(135deg, #0f172a, #1e293b, #111827)",
      title: "Entrepreneur & Business Leader",
      // email: "contact@rupeshsethGugale.com",
      phone: "+91 98765 43210",
      address: "juhu, Mumbai, Maharashtra, India",
    },
  },

  {
    id: 2,
    type: "Political",

    // FRONT IMAGE
    frontImage: "/images/visiting_card/political_card.png",

    // BACK CONTENT
    back: {
      bg: "linear-gradient(135deg, #14532d, #166534, #052e16)",
      title: "Political & Public Leader",
      email: "contact@rupeshsethGugale.com",
      phone: "+91 98765 43210",
      address: "Mumbai, Maharashtra, India",
    },
  },
];

function VisitingCard({ card }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="flex flex-col items-center gap-5"
    >
      {/* CARD TYPE */}

      <div
        className="
        px-4
        py-1.5
        rounded-full
        bg-[#2e7d32]/10
        text-[#2e7d32]
        text-sm
        font-semibold
      "
      >
        {card.type} Card
      </div>

      {/* CARD */}

      <div
        className="cursor-pointer"
        style={{
          perspective: "1200px",
          width: "340px",
          height: "210px",
        }}
        onClick={() => setFlipped((f) => !f)}
      >
        <motion.div
          animate={{
            rotateY: flipped ? 180 : 0,
          }}
          transition={{
            duration: 0.6,
          }}
          style={{
            transformStyle: "preserve-3d",
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        >
          {/* FRONT */}

          <div
            className="
      absolute
      inset-0
      rounded-[32px]
      overflow-hidden
      border
      border-white/10
    "
            style={{
              backfaceVisibility: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
            }}
          >
            <img
              src={card.frontImage}
              alt={card.type}
              className={`
    w-full
    h-full
    ${card.id === 3 ? "object-cover scale-125" : "object-cover"}
  `}
            />
          </div>

          {/* BACK */}

          <div
            className="
      absolute
      inset-0
      rounded-[32px]
      p-7
      text-white
      overflow-hidden
      border
      border-white/10
    "
            style={{
              background: card.back.bg,
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
            }}
          >
            {/* SHINING EFFECT */}

            <div
              className="
        absolute
        top-[-30%]
        left-[-10%]
        w-[140%]
        h-[220px]
        bg-white/10
        rotate-12
        blur-3xl
      "
            />

            {/* CONTENT */}

            <div className="relative z-10 h-full flex flex-col justify-between">
              {/* TOP */}

              <div>
                <p className="text-white/40 uppercase tracking-[3px] text-xs mb-3">
                  Rupeshseth Hemantji Gugale
                </p>

                <h3 className="text-[22px] font-bold leading-snug">
                  {card.back.title}
                </h3>
              </div>

              {/* BOTTOM */}

              <div className="space-y-3">
                <p className="text-sm text-white/85">  {card.back.email}</p>

                <p className="text-sm text-white/85">  {card.back.phone}</p>

                <div className="w-16 h-[2px] bg-white/20 rounded-full" />

                <p className="text-sm text-white/60">📍 {card.back.address}</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
export default function VisitingCards() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="cards" className="pt-7 pb-10 bg-[#f8f7f4] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* HEADER */}

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className=" text-[#f57c00] font-semibold uppercase tracking-wide text-sm mb-4">
            Identity
          </p>

          <h2 className="text-center font-black leading-[0.95] tracking-[-1.5px] mb-8">
            <span className="block text-[clamp(2rem,5vw,4rem)] bg-gradient-to-r from-[#14532d] via-[#f97316] to-[#b45309] bg-clip-text text-transparent px-2 py-1">
              Visiting Cards
            </span>
            <div className="mx-auto mt-5 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#15803d] via-[#f97316] to-[#b45309] shadow-md" />
          </h2>

          
        </motion.div>

        {/* CARDS */}

        <div className="flex flex-wrap justify-center gap-12">
          {CARDS.map((card) => (
            <VisitingCard key={card.id} card={card} />
          ))}
        </div>
      </div>
    </section>
  );
}