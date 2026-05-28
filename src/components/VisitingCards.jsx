import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { RotateCcw, Download, QrCode } from "lucide-react";

const CARDS = [
  {
    id: 1,
    type: "Business",
    front: {
      bg: "linear-gradient(135deg, #1a5c2a, #2d8a47)",
      name: "Rupeshseth Hemantji Gugale",
      title: "Entrepreneur & Business Leader",
      email: "contact@rupeshsethGugale.com",
      phone: "+91 98765 43210",
      accent: "#d4a843",
    },
    back: {
      bg: "linear-gradient(135deg, #2d3748, #1a1a2e)",
      tagline: "Hospitality • Finance • Investments",
      address: "Mumbai, Maharashtra, India",
    },
  },
  {
    id: 2,
    type: "Social & Community",
    front: {
      bg: "linear-gradient(135deg, #e86a1a, #c45200)",
      name: "Rupeshseth Hemantji Gugale",
      title: "Social Leader & Community Builder",
      email: "contact@rupeshsethGugale.com",
      phone: "+91 98765 43210",
      accent: "#f0c96a",
    },
    back: {
      bg: "linear-gradient(135deg, #c45200, #6b2d00)",
      tagline: "Service • Impact • Leadership",
      address: "Mumbai, Maharashtra, India",
    },
  },
  {
    id: 3,
    type: "Political",
    front: {
      bg: "linear-gradient(135deg, #e86a1a, #c45200)",
      name: "Rupeshseth Hemantji Gugale",
      title: "Social Leader & Community Builder",
      email: "contact@rupeshsethGugale.com",
      phone: "+91 98765 43210",
      accent: "#f0c96a",
    },
    back: {
      bg: "linear-gradient(135deg, #c45200, #6b2d00)",
      tagline: "Service • Impact • Leadership",
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
              p-7
              text-white
              overflow-hidden
              border
              border-white/10
            "
            style={{
              background:
                card.id === 1
                  ? "linear-gradient(135deg, #2e7d32, #256c2b)"
                  : "linear-gradient(135deg, #f57c00, #d97706)",
              backfaceVisibility: "hidden",
              boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
            }}
          >
            {/* TOP */}

            <div className="flex justify-between items-start mb-10">
              <div>
                <p className="text-white/70 text-xs mb-2 uppercase tracking-[2px]">
                  Rupeshseth
                </p>

                <h3 className="text-2xl font-bold leading-tight">
                  {card.front.name}
                </h3>
              </div>

              <div
                className="
                w-12
                h-12
                rounded-2xl
                bg-white/10
                backdrop-blur-sm
                flex
                items-center
                justify-center
                text-xl
                font-bold
              "
              >
                RG
              </div>
            </div>

            {/* CENTER */}

            <p className="text-white/80 text-md mb-10 leading-7 max-w-[220px]">
              {card.front.title}
            </p>

            {/* BOTTOM */}

            <div className="space-y-1 text-sm text-white/70">
              <p>{card.front.phone}</p>

              <p>{card.front.email}</p>
            </div>
          </div>

          {/* BACK */}

          <div
            className="
              absolute
              inset-0
              rounded-[32px]
              p-7
              text-white
              flex
              flex-col
              items-center
              justify-center
              text-center
              overflow-hidden
              border
              border-white/10
            "
            style={{
              background:
                card.id === 1
                  ? "linear-gradient(135deg, #1f2937, #111827)"
                  : "linear-gradient(135deg, #7c2d12, #431407)",
              backfaceVisibility: "hidden",
              transform: "rotateY(180deg)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.12)",
            }}
          >
            <div
              className="
              w-20
              h-20
              rounded-full
              bg-white/10
              backdrop-blur-sm
              flex
              items-center
              justify-center
              text-2xl
              font-bold
              mb-6
            "
            >
              RHG
            </div>

            <p className="text-xl font-semibold mb-4">{card.back.tagline}</p>

            <div className="w-14 h-[2px] bg-white/20 rounded-full mb-4" />

            <p className="text-white/60 text-sm">{card.back.address}</p>
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
    <section id="cards" className="py-15 bg-[#f8f7f4] relative overflow-hidden">
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