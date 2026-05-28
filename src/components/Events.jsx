import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

import {
  Play,
  X,
  MapPin,
  Sparkles,
  HeartHandshake,
  Building2,
  Users,
  Trophy,
  Landmark,
  Briefcase,
} from "lucide-react";

const MEMORIES = [
  {
    id: 1,
    title: "Swami Samarth Temple Inauguration",
    category: "Spiritual",
    date: "Shaniwar Peth, Pune",
    year: "2021",
    highlight: true,
    description:
      "One of the most sacred milestones — contributing to and witnessing the opening of the Swami Samarth temple. A promise fulfilled to the community and to the divine.",
    type: "image",
  },
  {
    id: 2,
    title: "Community Mega Meal Drive",
    category: "Social Work",
    date: "Mumbai Suburbs",
    year: "2024",
    description:
      "Organized one of the largest community feeding drives, serving thousands of underprivileged families across Mumbai.",
    type: "image",
  },
  {
    id: 3,
    title: "Political Leadership Rally",
    category: "Politics",
    date: "Maharashtra",
    year: "2024",
    description:
      "Led a powerful awareness rally bringing together thousands of citizens, focusing on local development and community rights.",
    type: "video",
  },
  {
    id: 4,
    title: "Business Launch Ceremony",
    category: "Business",
    date: "Mumbai",
    year: "2023",
    description:
      "Grand inauguration of a new business venture — another milestone in the journey of building a respected, multi-sector enterprise.",
    type: "image",
  },
  {
    id: 5,
    title: "Family Celebration",
    category: "Family",
    date: "Pune / Mumbai",
    year: "2023",
    description:
      "Family gatherings that remind us why we work so hard. Every success is dedicated to the people who make it meaningful.",
    type: "image",
  },
  {
    id: 6,
    title: "Cultural Heritage Program",
    category: "Culture",
    date: "Maharashtra",
    year: "2023",
    description:
      "A grand cultural program celebrating the rich traditions of Maharashtra and the spirit of Chhatrapati Shivaji Maharaj.",
    type: "image",
  },
  {
    id: 7,
    title: "Youth Mentorship Summit",
    category: "Leadership",
    date: "Mumbai",
    year: "2022",
    description:
      "Spoke to hundreds of young entrepreneurs sharing wisdom from 4 decades of lived experience — from ground-level hotel work to national leadership.",
    type: "video",
  },
  {
    id: 8,
    title: "Grandfather's Blessings — In Memory",
    category: "Personal",
    date: "Pune",
    year: "2013",
    highlight: true,
    description:
      "The turning point of life. The passing of grandfather Shri Kakanmalji Chunilalji Gugale — whose blessings continue to guide every decision, every step, every success.",
    type: "image",
  },
];

const categoryIcons = {
  Spiritual: Sparkles,
  "Social Work": HeartHandshake,
  Politics: Users,
  Business: Briefcase,
  Family: HeartHandshake,
  Culture: Landmark,
  Leadership: Trophy,
  Personal: Building2,
};

function MemoryCard({ memory, onClick, index }) {
  const Icon = categoryIcons[memory.category] || Sparkles;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        delay: (index % 4) * 0.06,
        duration: 0.5,
      }}
      whileHover={{ y: -6 }}
      onClick={() => onClick(memory)}
      className={`
        group
        bg-white
        border
        border-gray-100
        rounded-[28px]
        overflow-hidden
        cursor-pointer
        transition-all
        duration-300
        hover:shadow-[0_20px_50px_rgba(0,0,0,0.08)]
        ${memory.highlight ? "lg:col-span-2" : ""}
      `}
    >
      {/* TOP */}

      <div
        className="
          relative
          flex
          items-center
          justify-center
          bg-gradient-to-br
          from-[#2e7d32]/8
          to-[#f57c00]/8
        "
        style={{
          height: memory.highlight ? 220 : 170,
        }}
      >
        <div
          className="
            w-20
            h-20
            rounded-3xl
            bg-white
            flex
            items-center
            justify-center
            shadow-sm
            text-[#2e7d32]
          "
        >
          <Icon size={36} />
        </div>

        {/* CATEGORY */}

        <div className="absolute top-4 left-4">
          <span
            className="
              px-3
              py-1
              rounded-full
              text-sm 
              font-semibold
              bg-white
              text-gray-700
              border
              border-gray-200
            "
          >
            {memory.category}
          </span>
        </div>

         
      </div>

      {/* CONTENT */}

      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          <MapPin size={14} className="text-[#f57c00]" />

          <span className="text-sm text-gray-500">
            {memory.date} • {memory.year}
          </span>
        </div>

        <h3
          className={`
            font-semibold
            text-gray-900
            leading-tight
            mb-3 text-xl
           `}
        >
          {memory.title}
        </h3>

        <p className="text-gray-600 leading-8 text-[16px]">
          {memory.description}
        </p>
      </div>
    </motion.div>
  );
}

function MemoryModal({ memory, onClose }) {
  if (!memory) return null;

  const Icon = categoryIcons[memory.category] || Sparkles;

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
        flex
        items-center
        justify-center
        p-6
        bg-black/50
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
        transition={{
          duration: 0.25,
        }}
        onClick={(e) => e.stopPropagation()}
        className="
          bg-white
          rounded-[36px]
          overflow-hidden
          max-w-2xl
          w-full
          shadow-[0_30px_100px_rgba(0,0,0,0.15)]
        "
      >
        {/* TOP */}

        <div
          className="
            relative
            h-[260px]
            bg-gradient-to-br
            from-[#2e7d32]/10
            to-[#f57c00]/10
            flex
            items-center
            justify-center
          "
        >
          <div
            className="
              w-28
              h-28
              rounded-[32px]
              bg-white
              flex
              items-center
              justify-center
              text-[#2e7d32]
              shadow-lg
            "
          >
            <Icon size={54} />
          </div>

          <button
            onClick={onClose}
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
        </div>

        {/* CONTENT */}

        <div className="p-8 md:p-10">
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={15} className="text-[#f57c00]" />

            <span className="text-gray-500 text-sm">
              {memory.date} • {memory.year}
            </span>
          </div>

          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            {memory.title}
          </h2>

          <p className="text-gray-600 leading-9 text-[16px]">
            {memory.description}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Events() {
  const [selected, setSelected] = useState(null);

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="events"
      className="py-15 bg-[#f8f7f4] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        {/* HEADER */}

        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-[#f57c00] font-semibold uppercase tracking-wide text-sm mb-4">
            Moments That Matter
          </p>

          <h2 className="text-center font-black leading-[0.95] tracking-[-1.5px] mb-8">
            <span className="block text-[clamp(2rem,5vw,4rem)] bg-gradient-to-r from-[#14532d] via-[#f97316] to-[#b45309] bg-clip-text text-transparent px-2 py-1">
              Events & Memories
            </span>
            <div className="mx-auto mt-5 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#15803d] via-[#f97316] to-[#b45309] shadow-md" />
          </h2>

          <p className="text-gray-600 text-lg leading-8 max-w-2xl mx-auto">
            A life well-lived leaves behind not just achievements — but moments,
            memories, and emotions that define the journey.
          </p>
        </motion.div>

        {/* GRID */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
          {MEMORIES.map((m, i) => (
            <MemoryCard key={m.id} memory={m} onClick={setSelected} index={i} />
          ))}
        </div>
      </div>

      {/* MODAL */}

      <AnimatePresence>
        {selected && (
          <MemoryModal memory={selected} onClose={() => setSelected(null)} />
        )}
      </AnimatePresence>
    </section>
  );
}
