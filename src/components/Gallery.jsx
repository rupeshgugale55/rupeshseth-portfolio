import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { X, ZoomIn } from "lucide-react";

import { GALLERY_CATEGORIES } from "../data/siteData";

const createItems = (
  category,
  count,
  folder,
  prefix,
  color,
  videoIndexes = [],
) => {
  return Array.from({ length: count }, (_, i) => {
    const index = i + 1;

    const isVideo = videoIndexes.includes(index);

    return {
      id: `${prefix}-${index}`,

      category,

      title: `${category} ${index}`,

      type: isVideo ? "video" : "image",

      media: `/images/gallery/${folder}/${prefix}${index}.${
        isVideo ? "mp4" : "jpeg"
      }`,

      color,

      aspect: i % 7 === 0 ? "tall" : i % 5 === 0 ? "wide" : "square",
    };
  });
};

/* =========================
   GALLERY ITEMS
========================= */

const GALLERY_ITEMS = [
  ...createItems("Family", 22, "family", "family", "#f97316"),

  ...createItems("Social Work", 25, "social", "social", "#ea580c"),

  ...createItems("Business", 11, "business", "business", "#15803d"),

  ...createItems("Politics", 17, "politics", "politics", "#14532d"),

  ...createItems("Events", 11, "event", "event", "#b45309", [5]),
];



/* =========================
   GALLERY CARD
========================= */

function GalleryCard({ item, onClick }) {
 return (
   <motion.div
     layout
     initial={{ opacity: 0, y: 20 }}
     animate={{ opacity: 1, y: 0 }}
     exit={{ opacity: 0, scale: 0.95 }}
     transition={{ duration: 0.35 }}
     whileHover={{ y: -6 }}
     onClick={() => onClick(item)}
     className="
      relative
      overflow-hidden
      rounded-[30px]
      cursor-pointer
      group
      bg-white
      shadow-sm
      hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
      transition-all
      duration-300
      break-inside-avoid
    "
   >
     {item.type === "video" ? (
       <video
         src={item.media}
         muted
         autoPlay
         loop
         playsInline
         className="
      w-full
      h-auto
      object-cover
      transition-transform
      duration-700
      group-hover:scale-105
    "
       />
     ) : (
       <img
         src={item.media}
         alt={item.title}
         loading="lazy"
         className="
      w-full
      h-auto
      object-cover
      transition-transform
      duration-700
      group-hover:scale-105
    "
       />
     )}

     {/* OVERLAY */}

     <div
       className="
        absolute
        inset-0
        bg-gradient-to-t
        from-black/70
        via-black/10
        to-transparent
      "
     />

     {/* CATEGORY */}

     <div
       className="
        absolute
        bottom-4
        left-4
        px-4
        py-2
        rounded-full
        text-sm
        font-semibold
        text-white
        bg-white/20
        backdrop-blur-md
        z-10
      "
     >
       {item.category}
     </div>

     {/* HOVER ICON */}

     <div
       className="
        absolute
        inset-0
        flex
        items-center
        justify-center
        opacity-0
        group-hover:opacity-100
        transition-all
        duration-300
        bg-black/20
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
          shadow-xl
        "
       >
         <ZoomIn size={22} className="text-black" />
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
       py-33
        bg-[#f8f7f4]
        relative
        overflow-hidden  lg:py-28
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
    columns-2
    sm:columns-2
    lg:columns-3
    xl:columns-4
    gap-4
    space-y-4
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
max-w-5xl                w-full
                overflow-hidden
                shadow-[0_30px_100px_rgba(0,0,0,0.15)]
              "
            >
              {/* TOP */}

              <div
                className="
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
                <div
                  className="
    relative
    overflow-hidden
    bg-black
    flex
    items-center
    justify-center
  "
                >
                  <button
                    onClick={() => setLightbox(null)}
                    className="
      absolute
      top-5
      right-5
      z-20
      w-11
      h-11
      rounded-full
      bg-white
      flex
      items-center
      justify-center
      shadow-lg
    "
                  >
                    <X size={18} />
                  </button>

                  {lightbox.type === "video" ? (
                    <video
                      src={lightbox.media}
                      controls
                      autoPlay
                      className=" max-w-full
  max-h-[85vh]
  w-auto
  h-auto
  object-contain
  block"
                    />
                  ) : (
                    <img
                      src={lightbox.media}
                      alt={lightbox.title}
                      className=" max-w-full
  max-h-[85vh]
  w-auto
  h-auto
  object-contain
  block"
                    />
                  )}
                </div>{" "}
              </div>

              {/* CONTENT */}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
