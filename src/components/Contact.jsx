import { useState } from "react";

import { motion } from "framer-motion";

import { useInView } from "react-intersection-observer";

import { CLIENT } from "../data/siteData";
import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";
 import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
   Send,
} from "lucide-react";

export default function Contact() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

 const handleSubmit = (e) => {
   e.preventDefault();

   // VALIDATION

   if (
     !form.name.trim() ||
     !form.email.trim() ||
     !form.phone.trim() ||
     !form.message.trim()
   ) {
     alert("Please fill all fields");
     return;
   }

   // WHATSAPP MESSAGE

  const whatsappMessage = `
✨ Hello Rupeshseth,

You have received a new enquiry from your website contact form.

━━━━━━━━━━━━━━

👤 *Name:* ${form.name}

📱 *Phone:* ${form.phone}

📧 *Email:* ${form.email}

💬 *Message:*  
${form.message}

━━━━━━━━━━━━━━

Sent via Website Contact Form
`;

   // OPEN WHATSAPP

   window.open(
     `https://wa.me/919833451856?text=${encodeURIComponent(whatsappMessage)}`,
     "_blank",
   );

   // SUCCESS UI

   setSent(true);

   setTimeout(() => {
     setSent(false);
   }, 3000);

   // RESET FORM

   setForm({
     name: "",
     email: "",
     phone: "",
     message: "",
   });
 };
  const contactItems = [
    {
      icon: <Phone size={20} />,
      label: "Phone",
      value: CLIENT.phone,
      href: `tel:${CLIENT.phone}`,
      color: "#2e7d32",
    },

    {
      icon: <Mail size={20} />,
      label: "Email",
      value: CLIENT.email,
      href: `mailto:${CLIENT.email}`,
      color: "#f57c00",
    },

    {
      icon: <MapPin size={20} />,
      label: "Location",
      value: CLIENT.location,
      href: "#",
      color: "#d4a843",
    },
  ];

  return (
    <>
      {/* =========================
          CONTACT SECTION
      ========================= */}

      <section
        id="contact"
        className="
          relative
          overflow-hidden
          py-33
          bg-[#f8f7f4]  lg:py-28
        "
      >
        {/* BACKGROUND GLOWS */}

        <div
          className="
          absolute
          top-0
          left-0
          w-[350px]
          h-[350px]
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
            className="text-center mb-20"
          >
            <p
              className="
             text-[#f57c00] font-semibold uppercase tracking-wide text-sm mb-4
            "
            >
              Let's Connect
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
                Get In Touch
              </span>
              <div className="mx-auto mt-5 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#15803d] via-[#f97316] to-[#b45309] shadow-md" />
            </h2>

            <p
              className="
             text-gray-600 text-lg leading-8 max-w-2xl mx-auto
            "
            >
              For business collaborations, social initiatives, speaking
              engagements, or simply to connect — reach out.
            </p>
          </motion.div>

          {/* MAIN GRID */}

          <div
            className="
            grid
            lg:grid-cols-2
            gap-10
            items-start
          "
          >
            {/* =========================
                LEFT SIDE
            ========================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: -30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3
                className="
                text-3xl
                font-bold
                text-gray-900
                mb-10
              "
              >
                Direct Contact
              </h3>

              {/* CONTACT CARDS */}

              <div className="space-y-5">
                {contactItems.map((item, i) => (
                  <motion.a
                    key={i}
                    href={item.href}
                    whileHover={{ y: -4 }}
                    className="
                      group
                      flex
                      items-center
                      gap-5
                      bg-white
                      border
                      border-gray-100
                      rounded-[28px]
                      p-6
                      no-underline
                      shadow-[0_10px_30px_rgba(0,0,0,0.04)]
                      hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)]
                      transition-all
                      duration-300
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
                        flex-shrink-0
                      "
                      style={{
                        background: `${item.color}12`,
                        color: item.color,
                      }}
                    >
                      {item.icon}
                    </div>

                    {/* CONTENT */}

                    <div>
                      <p
                        className="
                          text-md
                          font-semibold
                          mb-1
                        "
                        style={{
                          color: item.color,
                        }}
                      >
                        {item.label}
                      </p>

                      <p
                        className="
                        text-gray-900
                        text-[16px]
                        leading-7
                      "
                      >
                        {item.value}
                      </p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* WHATSAPP */}

              <motion.a
                href={`https://wa.me/${CLIENT.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                className="
    mt-8
    flex
    items-center
    justify-center
    gap-3
    h-16
    rounded-2xl
    bg-[#1ab854]
    text-white
    font-semibold
    no-underline
    shadow-[0_15px_40px_rgba(37,211,102,0.25)]
    hover:bg-[#1ebe5d]
    transition-all
    duration-300
  "
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="22"
                  height="22"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M20.52 3.48A11.79 11.79 0 0012.05 0C5.5 0 .18 5.32.18 11.88c0 2.1.55 4.15 1.6 5.96L0 24l6.34-1.66a11.82 11.82 0 005.7 1.45h.01c6.55 0 11.87-5.32 11.87-11.88 0-3.17-1.23-6.14-3.4-8.43zM12.05 21.7a9.8 9.8 0 01-5-1.37l-.36-.21-3.76.98 1-3.66-.24-.38a9.78 9.78 0 01-1.5-5.18c0-5.42 4.42-9.84 9.86-9.84 2.63 0 5.1 1.02 6.96 2.88a9.77 9.77 0 012.88 6.96c0 5.43-4.42 9.84-9.84 9.84zm5.4-7.37c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.08 4.48.7.3 1.25.48 1.67.62.7.22 1.33.19 1.83.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                </svg>
                Connect on WhatsApp
              </motion.a>

              {/* SOCIALS */}

              <div
                className="
    flex
    justify-center
    md:justify-start
    gap-4
    mt-8
  "
              >
                {[
                  {
                    icon: <FaInstagram size={18} />,
                    hover: "hover:text-pink-500",
                  },

                  {
                    icon: <FaFacebookF size={18} />,
                    hover: "hover:text-blue-500",
                  },

                  {
                    icon: <FaYoutube size={18} />,
                    hover: "hover:text-red-500",
                  },
                ].map((s, i) => (
                  <motion.a
                    key={i}
                    href="#"
                    whileHover={{
                      y: -6,
                      scale: 1.06,
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`
        w-14
        h-14
        rounded-2xl
        flex
        items-center
        justify-center
        bg-white/70
        backdrop-blur-xl
        border
        border-white/40
        text-gray-700
        shadow-[0_8px_30px_rgba(0,0,0,0.06)]
        transition-all
        duration-300
        ${s.hover}
        hover:bg-white
        hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
      `}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* =========================
                FORM
            ========================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 30,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                bg-white
                rounded-[40px]
                border
                border-gray-100
                p-8
                md:p-10
                shadow-[0_20px_60px_rgba(0,0,0,0.05)]
              "
            >
              <h3
                className="
                text-3xl
                font-bold
                text-gray-900
                mb-8
              "
              >
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                {[
                  {
                    field: "name",
                    label: "Your Name",
                    type: "text",
                    placeholder: "Enter your full name",
                  },

                  {
                    field: "email",
                    label: "Email Address",
                    type: "email",
                    placeholder: "your@email.com",
                  },

                  {
                    field: "phone",
                    label: "Phone Number",
                    type: "tel",
                    placeholder: "+91 XXXXX XXXXX",
                  },
                ].map(({ field, label, type, placeholder }) => (
                  <div key={field}>
                    <label
                      className="
                        block
                        text-sm
                        font-semibold
                        text-gray-700
                        mb-2
                      "
                    >
                      {label}
                    </label>

                    <input
                      required
                      type={type}
                      value={form[field]}
                      onChange={(e) =>
                        setForm((f) => ({
                          ...f,
                          [field]: e.target.value,
                        }))
                      }
                      placeholder={placeholder}
                      className="
                          w-full
                          h-14
                          px-5
                          rounded-2xl
                          bg-[#fafaf9]
                          border
                          border-gray-200
                          outline-none
                          focus:border-[#2e7d32]
                          focus:bg-white
                          transition-all
                          duration-300
                          text-[15px]
                        "
                    />
                  </div>
                ))}

                {/* MESSAGE */}

                <div>
                  <label
                    className="
                    block
                    text-sm
                    font-semibold
                    text-gray-700
                    mb-2
                  "
                  >
                    Message
                  </label>

                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm((f) => ({
                        ...f,
                        message: e.target.value,
                      }))
                    }
                    placeholder="Your message..."
                    className="
                      w-full
                      px-5
                      py-4
                      rounded-2xl
                      bg-[#fafaf9]
                      border
                      border-gray-200
                      outline-none
                      resize-none
                      focus:border-[#2e7d32]
                      focus:bg-white
                      transition-all
                      duration-300
                      text-[15px]
                    "
                  />
                </div>

                {/* BUTTON */}

                <motion.button
                  type="submit"
                  whileHover={{
                    scale: 1.02,
                    y: -2,
                  }}
                  whileTap={{
                    scale: 0.97,
                  }}
                  className="
    w-full
    h-16
    rounded-2xl
    bg-[#1ab854]
    hover:bg-[#17a74c]
    text-white
    font-semibold
    flex
    items-center
    justify-center
    gap-3
    transition-all
    duration-300
    shadow-[0_12px_35px_rgba(26,184,84,0.28)]
    hover:shadow-[0_18px_45px_rgba(26,184,84,0.38)]
  "
                >
                  {sent ? (
                    <>
                      <div
                        className="
          w-8
          h-8
          rounded-full
          bg-white/20
          flex
          items-center
          justify-center
        "
                      >
                        ✓
                      </div>
                      Message Sent
                    </>
                  ) : (
                    <>
                      <div
                        className="
          w-9
          h-9
          rounded-full
          bg-white/20
          backdrop-blur-md
          flex
          items-center
          justify-center
        "
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 24 24"
                          fill="currentColor"
                        >
                          <path d="M20.52 3.48A11.79 11.79 0 0012.05 0C5.5 0 .18 5.32.18 11.88c0 2.1.55 4.15 1.6 5.96L0 24l6.34-1.66a11.82 11.82 0 005.7 1.45h.01c6.55 0 11.87-5.32 11.87-11.88 0-3.17-1.23-6.14-3.4-8.43zM12.05 21.7a9.8 9.8 0 01-5-1.37l-.36-.21-3.76.98 1-3.66-.24-.38a9.78 9.78 0 01-1.5-5.18c0-5.42 4.42-9.84 9.86-9.84 2.63 0 5.1 1.02 6.96 2.88a9.77 9.77 0 012.88 6.96c0 5.43-4.42 9.84-9.84 9.84zm5.4-7.37c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.79-1.47-1.76-1.64-2.06-.17-.3-.02-.46.13-.6.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.07-.8.37-.27.3-1.05 1.02-1.05 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.08 4.48.7.3 1.25.48 1.67.62.7.22 1.33.19 1.83.12.56-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35z" />
                        </svg>
                      </div>
                      Send via WhatsApp
                    </>
                  )}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* =========================
          FOOTER
      ========================= */}

      <footer
        className="
        relative
        overflow-hidden
        bg-[#1d3b27]
        py-33
      "
      >
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
          <div className="text-center">
            {/* LOGO */}

            <div
              className="
              flex
              items-center
              justify-center
              gap-4
              mb-6
            "
            >
              <div className="flex items-center justify-center mb-4">
                <img
                  className="
      w-28
      md:w-36
      lg:w-40
      h-auto
      object-contain
      drop-shadow-[0_4px_12px_rgba(255,215,0,0.35)]
      hover:scale-105
      transition-transform
      duration-300
    "
                  src="/logo.png"
                  alt="Rupeshseth Logo"
                />
              </div>

              <div>
                <h3
                  className="
                  text-white
                  text-2xl
                  font-bold
                "
                >
                  Rupeshseth Hemantji Gugale
                </h3>

                <p
                  className="
                  text-[#c8e6cf]
                  text-sm
                  tracking-[2px]
                  uppercase
                  mt-1
                "
                >
                  Leadership • Legacy • Service
                </p>
              </div>
            </div>

            {/* LINE */}

            <div
              className="
              w-40
              h-px
              bg-gradient-to-r
              from-transparent
              via-[#f57c00]
              to-transparent
              mx-auto
              mb-8
            "
            />

            {/* LOCATION */}

            <p
              className="
              text-white/60
              text-sm
              leading-8
              mb-8
            "
            >
              {CLIENT.location}
            </p>

            {/* NAV */}

            <div
              className="
              flex
              flex-wrap
              justify-center
              gap-6
              mb-8
            "
            >
              {[
                "Journey",
                "Spiritual",
                "Family",
                "Business",
                "Social Work",
                "Gallery",
                "Vision",
                "Contact",
              ].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(" ", "")}`}
                  className="
                    text-white/60
                    hover:text-[#f0c96a]
                    transition-colors
                    text-sm
                  "
                >
                  {item}
                </a>
              ))}
            </div>

            {/* COPYRIGHT */}

            <p
              className="
              text-white/30
              text-sm
            "
            >
              © {new Date().getFullYear()} Rupeshseth Hemantji Gugale. All
              Rights Reserved.
            </p>
            <p
              className="
    mt-1
    text-white/30
    text-sm
  "
            >
              Designed & Developed by{" "}
              <a
                href="https://www.linkedin.com/in/swaraj-phalke-b5539b220/"
                target="_blank"
                rel="noopener noreferrer"
                className="
      text-orange-400
      hover:text-orange-300
      transition-colors
      font-semibold
    "
              >
                Swaraj
              </a>
              .
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
