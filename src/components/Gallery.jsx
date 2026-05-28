import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X, ZoomIn } from "lucide-react";

import { GALLERY_CATEGORIES } from "../data/siteData";

/* =========================
   GALLERY ITEMS
========================= */

const GALLERY_ITEMS = [
  {
    id: 1,
    category: "Business",
    title: "Business Meeting",
    emoji: "💼",
    color: "#2d8a47",
    aspect: "tall",
  },
  {
    id: 2,
    category: "Social Work",
    title: "Community Service",
    emoji: "🤝",
    color: "#e86a1a",
    aspect: "wide",
  },
  {
    id: 3,
    category: "Spiritual",
    title: "Temple Prayer",
    emoji: "🙏",
    color: "#d4a843",
    aspect: "square",
  },
  {
    id: 4,
    category: "Family",
    title: "Family Gathering",
    emoji: "👨‍👩‍👧‍👦",
    color: "#e86a1a",
    aspect: "wide",
  },
  {
    id: 5,
    category: "Events",
    title: "Leadership Event",
    emoji: "🎤",
    color: "#2d8a47",
    aspect: "square",
  },
  {
    id: 6,
    category: "Politics",
    title: "Political Rally",
    emoji: "📢",
    color: "#1a5c2a",
    aspect: "tall",
  },
  {
    id: 7,
    category: "Hospitality",
    title: "Hospitality Sector",
    emoji: "🏨",
    color: "#c45200",
    aspect: "square",
  },
  {
    id: 8,
    category: "Social Work",
    title: "Charity Event",
    emoji: "❤️",
    color: "#e86a1a",
    aspect: "wide",
  },
  {
    id: 9,
    category: "Spiritual",
    title: "Swami Samarth Jayanti",
    emoji: "🕉️",
    color: "#d4a843",
    aspect: "square",
  },
  {
    id: 10,
    category: "Business",
    title: "Investment Meeting",
    emoji: "📊",
    color: "#2d8a47",
    aspect: "tall",
  },
  {
    id: 11,
    category: "Events",
    title: "Cultural Program",
    emoji: "🎭",
    color: "#1a5c2a",
    aspect: "wide",
  },
  {
    id: 12,
    category: "Family",
    title: "Family Celebration",
    emoji: "🎉",
    color: "#e86a1a",
    aspect: "square",
  },
];

/* =========================
   GALLERY CARD
========================= */

function GalleryCard({ item, onClick }) {
  return (
    <motion.div
      layout
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      exit={{
        opacity: 0,
        scale: 0.95,
      }}
      transition={{ duration: 0.4 }}
      whileHover={{ y: -6 }}
      onClick={() => onClick(item)}
      className={`
        relative
        overflow-hidden
        rounded-[28px]
        cursor-pointer
        group
        bg-white
        border
        border-gray-100
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
        transition-all
        duration-300
        ${item.aspect === "tall" ? "row-span-2" : ""}
        ${item.aspect === "wide" ? "col-span-2" : ""}
      `}
      style={{
        minHeight: item.aspect === "tall" ? "300px" : "140px",
      }}
    >
      {/* BG */}

      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `linear-gradient(135deg, ${item.color}10, ${item.color}20)`,
        }}
      />

      {/* CONTENT */}

      <div
        className="
        relative
        z-10
        h-full
        flex
        flex-col
        items-center
        justify-center
        text-center
        p-6
      "
      >
        <div className="text-5xl mb-4">{item.emoji}</div>

        <h3
          className="
          text-lg
          font-semibold
          text-gray-900
          mb-2
        "
        >
          {item.title}
        </h3>

        <div
          className="
            px-3
            py-1
            rounded-full
            text-xs
            font-medium
          "
          style={{
            background: `${item.color}15`,
            color: item.color,
          }}
        >
          {item.category}
        </div>
      </div>

      {/* HOVER */}

      <div
        className="
        absolute
        inset-0
        bg-black/50
        opacity-0
        group-hover:opacity-100
        transition-all
        duration-300
        flex
        items-center
        justify-center
      "
      >
        <div
          className="
          w-14
          h-14
          rounded-full
          bg-white
          flex
          items-center
          justify-center
        "
        >
          <ZoomIn size={22} className="text-gray-900" />
        </div>
      </div>
    </motion.div>
  );
}

/* =========================
   GALLERY SECTION
========================= */

export default function Gallery() {
  const [filter, setFilter] = useState("All");

  const [lightbox, setLightbox] = useState(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filtered =
    filter === "All"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((i) => i.category === filter);

  return (
    <section
      id="gallery"
      className="
        pt-8 pb-10
        bg-[#f8f7f4]
        relative
        overflow-hidden
      "
    >
      {/* GLOW */}

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
            Visual Story
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
              Photo Gallery
            </span>{" "}
            <div className="mx-auto mt-5 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#15803d] via-[#f97316] to-[#b45309] shadow-md" />
          </h2>
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
          {GALLERY_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`
                px-5
                h-11
                rounded-full
                text-sm
                font-medium
                transition-all
                duration-300
                ${
                  filter === cat
                    ? "bg-[#2e7d32] text-white shadow-lg"
                    : "bg-white text-gray-700 border border-gray-200 hover:border-[#2e7d32] hover:text-[#2e7d32]"
                }
              `}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRID */}

        <motion.div
          layout
          className="
            grid
            grid-cols-2
            md:grid-cols-3
            lg:grid-cols-4
            gap-5
            auto-rows-[140px]
          "
        >
          <AnimatePresence>
            {filtered.map((item) => (
              <GalleryCard key={item.id} item={item} onClick={setLightbox} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* LIGHTBOX */}

      <AnimatePresence>
        {lightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightbox(null)}
            className="
              fixed
              inset-0
              z-[200]
              flex
              items-center
              justify-center
              p-6
              bg-black/70
              backdrop-blur-sm
            "
          >
            <motion.div
              initial={{
                scale: 0.92,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.92,
                opacity: 0,
              }}
              transition={{ duration: 0.25 }}
              onClick={(e) => e.stopPropagation()}
              className="
                bg-white
                rounded-[36px]
                max-w-xl
                w-full
                overflow-hidden
                shadow-[0_30px_100px_rgba(0,0,0,0.15)]
              "
            >
              {/* TOP */}

              <div
                className="
                  h-[280px]
                  flex
                  items-center
                  justify-center
                  relative
                "
                style={{
                  background: `linear-gradient(135deg, ${lightbox.color}15, ${lightbox.color}25)`,
                }}
              >
                <button
                  onClick={() => setLightbox(null)}
                  className="
                    absolute
                    top-5
                    right-5
                    w-10
                    h-10
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

                <div className="text-8xl">{lightbox.emoji}</div>
              </div>

              {/* CONTENT */}

              <div className="p-8 text-center">
                <h3
                  className="
                  text-3xl
                  font-bold
                  text-gray-900
                  mb-4
                "
                >
                  {lightbox.title}
                </h3>

                <div
                  className="
                    inline-flex
                    px-4
                    py-1.5
                    rounded-full
                    text-sm
                    font-medium
                    mb-6
                  "
                  style={{
                    background: `${lightbox.color}15`,
                    color: lightbox.color,
                  }}
                >
                  {lightbox.category}
                </div>

                <p
                  className="
                  text-gray-600
                  leading-8
                  text-[15px]
                "
                >
                  Upload your actual photos through the Admin Panel to replace
                  these placeholders.
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
