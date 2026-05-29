import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Crown,
  Shield,
  Users,
  Landmark,
  Award,
  HeartHandshake,
} from "lucide-react";

import { FAMILY } from "../data/siteData";

/* =========================
   ICONS
========================= */

const familyIcons = [Crown, Users, HeartHandshake, Shield, Award, Landmark];

/* =========================
   FAMILY CARD
========================= */

function FamilyCard({ member, index }) {
  const isGrandfather = member.relation.includes("Grandfather");

  const Icon = familyIcons[index % familyIcons.length];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true }}
      transition={{
        delay: index * 0.06,
        duration: 0.45,
      }}
      whileHover={{ y: -3 }}
      className={`
        relative
        overflow-hidden
        rounded-[20px]
        border
        bg-white/80
        backdrop-blur-xl
        p-5
        transition-all
        duration-300
        hover:shadow-[0_15px_35px_rgba(0,0,0,0.07)]

        ${
          isGrandfather
            ? "md:col-span-2 border-[#d4a843]/20 shadow-[0_8px_30px_rgba(212,168,67,0.08)]"
            : "border-white/50 shadow-[0_8px_25px_rgba(0,0,0,0.04)]"
        }
      `}
    >
      {/* TOP LINE */}

      <div
        className="
          absolute
          top-0
          left-0
          right-0
          h-[3px]
        "
        style={{
          background: isGrandfather
            ? "linear-gradient(to right, #d4a843, #f0c96a)"
            : index % 2 === 0
              ? "linear-gradient(to right, #2e7d32, #4caf65)"
              : "linear-gradient(to right, #f57c00, #ff9800)",
        }}
      />

      {/* GLOW */}

      <div
        className="
          absolute
          top-0
          right-0
          w-24
          h-24
          rounded-full
          blur-3xl
          opacity-10
        "
        style={{
          background: isGrandfather
            ? "#d4a843"
            : index % 2 === 0
              ? "#2e7d32"
              : "#f57c00",
        }}
      />

      {/* CONTENT */}

      <div
        className="
    relative
    z-10
    grid
    grid-cols-[56px_1fr]
    gap-4
    items-start
  "
      >
        {/* ICON */}

        <div
          className="
    w-14
    h-14
    rounded-2xl
    flex
    items-center
    justify-center
    bg-gradient-to-br
    from-[#2e7d32]/10
    to-[#f57c00]/10
  "
        >
          <Icon
            size={24}
            className={`
              ${
                isGrandfather
                  ? "text-[#d4a843]"
                  : index % 2 === 0
                    ? "text-[#2e7d32]"
                    : "text-[#f57c00]"
              }
            `}
          />
        </div>

        {/* TEXT */}

        <div className="flex-1">
          {/* RELATION */}

          <div
            className="
              flex
              flex-wrap
              items-center
              gap-3
              mb-3
            "
          >
            <span
              className="
                px-3
                h-7
                rounded-full
                inline-flex
                items-center
                text-[13px]
                font-semibold
              "
              style={{
                background: isGrandfather ? "#d4a84315" : "#2e7d3210",

                color: isGrandfather ? "#b8861e" : "#2e7d32",
              }}
            >
              {member.relation}
            </span>

            <span
              className="
                text-[12px]
                text-gray-500
              "
            >
              {member.role}
            </span>
          </div>

          {/* NAME */}

          <h3
            className={`
              font-bold
              text-gray-900
              mb-3
              leading-tight

              ${isGrandfather ? "text-[21px]" : "text-[19px]"}
            `}
          >
            {member.name}
          </h3>

          {/* DESCRIPTION */}

          <p
            className="
              text-gray-600
              leading-[1.7rem]
              text-[15px]
            "
          >
            {member.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

/* =========================
   FAMILY SECTION
========================= */

export default function Family() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      id="family"
      className="
        py-25
        lg:py-16
        bg-[#f8f7f4]
        relative
        overflow-hidden
      "
    >
      {/* BACKGROUND GLOW */}

      <div
        className="
          absolute
          top-0
          left-0
          w-[260px]
          h-[260px]
          bg-[#2e7d32]/5
          rounded-full
          blur-[100px]
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          w-[240px]
          h-[240px]
          bg-[#f57c00]/5
          rounded-full
          blur-[100px]
        "
      />

      {/* MAIN CONTAINER */}

      <div
        className="
          max-w-[980px]
          mx-auto
          px-5
          sm:px-7
          lg:px-8
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
          className="text-center mb-8 lg:mb-10"
        >
          <p className="text-[#f57c00] font-semibold uppercase tracking-wide text-sm mb-4">
            परिवार — THE GREATEST STRENGTH
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
              Family & Legacy
            </span>
            <div className="mx-auto mt-5 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#15803d] via-[#f97316] to-[#b45309] shadow-md" />
          </h2>

          <p className="text-gray-600 text-lg leading-8 max-w-2xl mx-auto">
            A united family system built on love, discipline, sacrifice, and
            shared values across generations.
          </p>
        </motion.div>

        {/* FAMILY GRID */}

        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-4
            mb-8
          "
        >
          {FAMILY.map((member, i) => (
            <FamilyCard key={i} member={member} index={i} />
          ))}
        </div>

        {/* LEGACY CARD */}

        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="
            relative
            overflow-hidden
            rounded-[24px]
            bg-gradient-to-br
            from-[#2e7d32]
            to-[#256b2a]
            p-5
            sm:p-6
            lg:p-7
            text-center
            shadow-[0_12px_35px_rgba(0,0,0,0.06)]
          "
        >
          {/* GLOW */}

          <div
            className="
              absolute
              top-0
              right-0
              w-[180px]
              h-[180px]
              bg-white/5
              rounded-full
              blur-[90px]
            "
          />

          <div className="relative z-10">
            {/* ICON */}

            <div
              className="
                w-14
                h-14
                rounded-2xl
                bg-white/10
                border
                border-white/10
                flex
                items-center
                justify-center
                mx-auto
                mb-5
              "
            >
              <Landmark size={24} className="text-white" />
            </div>

            {/* TITLE */}

            <h3
              className="
                text-[23px]
                sm:text-[28px]
                lg:text-[34px]
                font-bold
                text-white
                mb-5
              "
            >
              Freedom Fighter Legacy
            </h3>

            {/* TEXT */}

            <p
              className="
                text-white/80
                text-[15px]
                sm:text-[15px]
                leading-[1.8rem]
                max-w-3xl
                mx-auto
              "
            >
              Coming from a respected family honored with the
              <strong className="text-[#f0c96a]"> Tamra Patra</strong> — a
              recognition given to freedom fighters and their families for their
              sacrifice and service to the nation.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
