import { useState } from "react";

import { motion, AnimatePresence } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { Download, ZoomIn, X } from "lucide-react";

/* =========================
   FILTERS
========================= */

const DOCUMENT_TYPES = [
  "All",
  "Certificates",
  "Awards",
  "Recognition",
  "Official",
];

/* =========================
   DOCUMENTS
========================= */

const DOCUMENTS = [
  {
    id: 1,
    type: "Certificates",
    title: "Business Excellence Certificate",
    issuedBy: "Maharashtra Business Council",
    year: "2022",
    icon: "📜",
    color: "#2e7d32",
    description:
      "Awarded for outstanding contribution to business development in the hospitality sector.",
  },

  {
    id: 2,
    type: "Awards",
    title: "Community Leadership Award",
    issuedBy: "Mumbai Social Welfare Board",
    year: "2021",
    icon: "🏆",
    color: "#d4a843",
    description:
      "Recognized for exceptional leadership in community welfare and social upliftment activities.",
  },

  {
    id: 3,
    type: "Recognition",
    title: "Tamra Patra Family Legacy",
    issuedBy: "Government of India",
    year: "Heritage",
    icon: "🇮🇳",
    color: "#f57c00",
    description:
      "Family honored with Tamra Patra — a government recognition of freedom fighters' contributions to the nation.",
  },

  {
    id: 4,
    type: "Official",
    title: "Social Worker Registration",
    issuedBy: "State Social Welfare Dept.",
    year: "2020",
    icon: "🤝",
    color: "#2e7d32",
    description:
      "Officially registered social worker recognised for community development work across Maharashtra.",
  },

  {
    id: 5,
    type: "Certificates",
    title: "Hospitality Industry Recognition",
    issuedBy: "Maharashtra Hospitality Association",
    year: "2019",
    icon: "🏨",
    color: "#1a5c2a",
    description:
      "Recognised for 15+ years of dedicated service and contribution to the hospitality industry.",
  },

  {
    id: 6,
    type: "Awards",
    title: "Spiritual Contribution Award",
    issuedBy: "Swami Samarth Trust, Pune",
    year: "2021",
    icon: "🙏",
    color: "#d4a843",
    description:
      "Recognised for funding and contribution toward construction of Swami Samarth temple, Shaniwar Peth.",
  },
];

/* =========================
   DOCUMENT CARD
========================= */

function DocCard({ doc, onClick }) {
  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{ duration: 0.45 }}
      whileHover={{ y: -5 }}
      onClick={() => onClick(doc)}
      className="
        relative
        overflow-hidden
        rounded-[32px]
        bg-white
        border
        border-gray-100
        p-7
        cursor-pointer
        shadow-[0_10px_30px_rgba(0,0,0,0.04)]
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
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
          w-28
          h-28
          rounded-full
          blur-3xl
          opacity-10
        "
        style={{
          background: doc.color,
        }}
      />

      {/* TOP */}

      <div
        className="
        relative
        z-10
        flex
        items-start
        justify-between
        mb-6
      "
      >
        {/* ICON */}

        <div
          className="
            w-16
            h-16
            rounded-3xl
            flex
            items-center
            justify-center
            text-4xl
          "
          style={{
            background: `${doc.color}12`,
          }}
        >
          {doc.icon}
        </div>

        {/* TYPE */}

        <div className="text-right">
          <div
            className="
              inline-flex
              items-center
              px-3
              h-8
              rounded-full
              text-sm
              font-semibold
              mb-2
            "
            style={{
              background: `${doc.color}15`,
              color: doc.color,
            }}
          >
            {doc.type}
          </div>

          <p
            className="
            text-sm
            text-gray-400
          "
          >
            {doc.year}
          </p>
        </div>
      </div>

      {/* CONTENT */}

      <div className="relative z-10">
        <h3
          className="
          text-2xl
          font-bold
          text-gray-900
          mb-2
          leading-tight
        "
        >
          {doc.title}
        </h3>

        <p
          className="mb-5 text-sm"
          style={{
            color: doc.color,
          }}
        >
          {doc.issuedBy}
        </p>

        <p
          className="
          text-gray-600
          leading-8
          text-[16px]
        "
        >
          {doc.description}
        </p>
      </div>

      {/* FOOTER */}

      <div
        className="
        relative
        z-10
        flex
        items-center
        justify-between
        mt-8
        pt-5
        border-t
        border-gray-100
      "
      >
        <button
          className="
            flex
            items-center
            gap-2
            text-sm
            font-semibold
          "
          style={{
            color: doc.color,
          }}
        >
          <ZoomIn size={15} />
          View Detail
        </button>

        <button
          className="
          flex
          items-center
          gap-2
          text-sm
          font-medium
          text-gray-500
          hover:text-gray-800
          transition-colors
        "
        >
          <Download size={15} />
          Download
        </button>
      </div>
    </motion.div>
  );
}

/* =========================
   MODAL
========================= */

function DocModal({ doc, onClose }) {
  if (!doc) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="
        fixed
        inset-0
        z-[200]
        bg-black/60
        backdrop-blur-md
        flex
        items-center
        justify-center
        p-6
      "
    >
      <motion.div
        initial={{
          opacity: 0,
          scale: 0.92,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          scale: 0.92,
        }}
        transition={{ duration: 0.25 }}
        onClick={(e) => e.stopPropagation()}
        className="
          relative
          bg-white
          rounded-[40px]
          overflow-hidden
          max-w-xl
          w-full
          shadow-[0_40px_100px_rgba(0,0,0,0.2)]
        "
      >
        {/* TOP */}

        <div
          className="
            relative
            p-10
            text-center
          "
          style={{
            background: `${doc.color}10`,
          }}
        >
          <button
            onClick={onClose}
            className="
              absolute
              top-5
              right-5
              w-11
              h-11
              rounded-full
              bg-white
              flex
              items-center
              justify-center
              shadow-sm
            "
          >
            <X size={18} />
          </button>

          <div className="text-7xl mb-5">{doc.icon}</div>

          <div
            className="
              inline-flex
              px-4
              py-1.5
              rounded-full
              text-xs
              font-semibold
              mb-5
            "
            style={{
              background: `${doc.color}15`,
              color: doc.color,
            }}
          >
            {doc.type} • {doc.year}
          </div>

          <h3
            className="
            text-3xl
            font-bold
            text-gray-900
            mb-3
          "
          >
            {doc.title}
          </h3>

          <p
            className="text-lg"
            style={{
              color: doc.color,
            }}
          >
            {doc.issuedBy}
          </p>
        </div>

        {/* BODY */}

        <div className="p-10">
          <p
            className="
            text-gray-600
            text-[15px]
            leading-8
            mb-8
          "
          >
            {doc.description}
          </p>

          {/* NOTICE */}

          

          {/* ACTIONS */}

          <div
            className="
            flex
            gap-4
          "
          >
            <button
              className="
                flex-1
                h-14
                rounded-2xl
                text-white
                font-semibold
                flex
                items-center
                justify-center
                gap-2
              "
              style={{
                background: doc.color,
              }}
            >
              <Download size={16} />
              Download
            </button>

             
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* =========================
   MAIN SECTION
========================= */

export default function Documents() {
  const [filter, setFilter] = useState("All");

  const [selected, setSelected] = useState(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filtered =
    filter === "All" ? DOCUMENTS : DOCUMENTS.filter((d) => d.type === filter);

  return (
    <section
      id="documents"
      className="
        py-15
        bg-[#f8f7f4]
        relative
        overflow-hidden
      "
    >
      {/* BACKGROUND */}

      <div
        className="
        absolute
        top-0
        left-0
        w-[400px]
        h-[400px]
        bg-[#2e7d32]/5
        rounded-full
        blur-[120px]
      "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        w-[350px]
        h-[350px]
        bg-[#f57c00]/5
        rounded-full
        blur-[120px]
      "
      />

      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        lg:px-10
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
          className="text-center mb-16"
        >
          <p
            className="
            text-[#f57c00] font-semibold uppercase tracking-wide text-sm mb-4
          "
          >
            Recognition & Legacy
          </p>

          <h2
            className="
           text-center font-black leading-[0.95] tracking-[-1.5px] mb-8
          "
          >
            {" "}
            <span
              className="
    whitespace-nowrap
    text-[clamp(2rem,5vw,4rem)]
    bg-gradient-to-r
    from-[#14532d]
    via-[#f97316]
    to-[#b45309]
    bg-clip-text
    text-transparent
    px-2
    py-1
    inline-block
  "
            >
              Documents & Certificates
            </span>
            <div className="mx-auto mt-5 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#15803d] via-[#f97316] to-[#b45309] shadow-md" />
          </h2>

          <p
            className="
           text-gray-600 text-lg leading-8 max-w-2xl mx-auto
          "
          >
            Proof of a life lived with purpose — every certificate a testament
            to service, leadership, and legacy.
          </p>
        </motion.div>

        {/* FILTERS */}

        <div
          className="
          flex
          flex-wrap
          justify-center
          gap-3
          mb-14
        "
        >
          {DOCUMENT_TYPES.map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`
                px-5
                h-11
                rounded-full
                text-sm
                font-semibold
                transition-all
                duration-300

                ${
                  filter === type
                    ? "bg-[#2e7d32] text-white shadow-lg"
                    : "bg-white border border-gray-200 text-gray-700 hover:border-[#2e7d32] hover:text-[#2e7d32]"
                }
              `}
            >
              {type}
            </button>
          ))}
        </div>

        {/* GRID */}

        <div
          className="
          grid
          sm:grid-cols-2
          lg:grid-cols-3
          gap-7
        "
        >
          <AnimatePresence>
            {filtered.map((doc) => (
              <DocCard key={doc.id} doc={doc} onClick={setSelected} />
            ))}
          </AnimatePresence>
        </div>

        {/* NOTICE */}

         
      </div>

      {/* MODAL */}

      <AnimatePresence>
        {selected && (
          <DocModal doc={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
