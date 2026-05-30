import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

import { CLIENT } from "../data/siteData";

import { Phone, Mail, MapPin } from "lucide-react";

import { FaInstagram, FaFacebookF, FaYoutube } from "react-icons/fa";

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

    if (
      !form.name.trim() ||
      !form.email.trim() ||
      !form.phone.trim() ||
      !form.message.trim()
    ) {
      alert("Please fill all fields");
      return;
    }

    const whatsappMessage = `
✨ Hello Rupeshseth,

You have received a new enquiry from your website contact form.

━━━━━━━━━━━━━━

👤 Name: ${form.name}

📱 Phone: ${form.phone}

📧 Email: ${form.email}

💬 Message:
${form.message}

━━━━━━━━━━━━━━

Sent via Website Contact Form
`;

    window.open(
      `https://wa.me/919833451856?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank",
    );

    setSent(true);

    setTimeout(() => {
      setSent(false);
    }, 3000);

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
      {/* CONTACT SECTION */}

      <section
        id="contact"
        className="
          relative
          overflow-hidden
          py-20
          sm:py-24
          lg:py-28
          bg-[#f8f7f4]
        "
      >
        {/* BACKGROUND GLOW */}

        <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-[#2e7d32]/5 rounded-full blur-[120px]" />

        <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-[#f57c00]/5 rounded-full blur-[120px]" />

        {/* CONTAINER */}

        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
            lg:px-10
            relative
            z-10
          "
        >
          {/* HEADER */}

          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="text-center mb-14 sm:mb-16 lg:mb-20"
          >
            <p className="text-[#f57c00] font-semibold uppercase tracking-wide text-sm mb-4">
              Let's Connect
            </p>

            <h2 className="text-center font-black leading-[0.95] tracking-[-1.5px] mb-8">
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
                  px-2
                  py-1
                "
              >
                Get In Touch
              </span>

              <div className="mx-auto mt-5 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#15803d] via-[#f97316] to-[#b45309]" />
            </h2>

            <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-8 max-w-2xl mx-auto">
              For business collaborations, social initiatives, speaking
              engagements, or simply to connect — reach out.
            </p>
          </motion.div>

          {/* MAIN GRID */}

          <div
            className="
              grid
              lg:grid-cols-2
              gap-8
              lg:gap-10
              items-start
            "
          >
            {/* LEFT */}

            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8 sm:mb-10">
                Direct Contact
              </h3>

              {/* SOCIALS */}

              <div className="flex justify-center md:justify-start gap-4 mt-8">
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
                      y: -5,
                      scale: 1.05,
                    }}
                    className={`
                      w-12
                      h-12
                      sm:w-14
                      sm:h-14
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
                    `}
                  >
                    {s.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* FORM */}

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="
                bg-white rounded-[32px] border
                border-gray-100
                p-5
                sm:p-7
                md:p-10
                shadow-[0_20px_60px_rgba(0,0,0,0.05)]
              "
            >
              <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-8">
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
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
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
                        h-13
                        sm:h-14
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
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
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
                    h-14
                    sm:h-16
                    rounded-2xl
                    bg-[#1ab854]
                    hover:bg-[#17a74c]
                    text-white
                    font-semibold
                    text-sm
                    sm:text-base
                    flex
                    items-center
                    justify-center
                    gap-3
                    transition-all
                    duration-300
                    shadow-[0_12px_35px_rgba(26,184,84,0.28)]
                  "
                >
                  {sent ? "Message Sent ✓" : "Send via WhatsApp"}
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FOOTER */}

      <footer
        className="
          relative
          overflow-hidden
          bg-[#1d3b27]
          py-20
          sm:py-24
        "
      >
        <div
          className="
            max-w-7xl
            mx-auto
            px-4
            sm:px-6
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
                flex-col
                md:flex-row
                items-center
                justify-center
                gap-3
                md:gap-4
                mb-6
                text-center
              "
            >
              <img
                className="
                  w-28
                  md:w-36
                  lg:w-40
                  h-auto
                  object-contain
                "
                src="/logo.png"
                alt="Rupeshseth Logo"
              />

              <div>
                <h3 className="text-white text-xl sm:text-2xl font-bold">
                  Rupeshseth Hemantji Gugale
                </h3>

                <p className="text-[#c8e6cf] text-xs sm:text-sm tracking-[2px] uppercase mt-1">
                  Leadership • Legacy • Service
                </p>
              </div>
            </div>

            {/* LINE */}

            <div className="w-40 h-px bg-gradient-to-r from-transparent via-[#f57c00] to-transparent mx-auto mb-8" />

            {/* LOCATION */}

            <p className="text-white/60 text-sm leading-7 max-w-4xl mx-auto mb-8 break-words">
              {CLIENT.location}
            </p>

            {/* NAV */}

            <div className="    flex    flex-wrap    justify-center    gap-4    sm:gap-6    mb-8  ">
              {" "}
              {[
                { label: "Home", href: "/" },
                { label: "About", href: "/about" },
                { label: "Business", href: "/business" },
                { label: "Social Work", href: "/social-work" },
                { label: "Gallery", href: "/gallery" },
                { label: "Contact", href: "/contact" },
              ].map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="        text-white/60        hover:text-[#f0c96a]        transition-colors        text-sm      "
                >
                  {" "}
                  {item.label}{" "}
                </a>
              ))}
            </div>

            {/* COPYRIGHT */}

            <p className="text-white/30 text-sm">
              © {new Date().getFullYear()} Rupeshseth Hemantji Gugale. All
              Rights Reserved.
            </p>

            <p className="mt-2 text-white/30 text-sm">
              Designed & Developed by{" "}
              <a
                href="https://www.linkedin.com/in/swaraj-phalke-b5539b220/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-orange-400 hover:text-orange-300 transition-colors font-semibold"
              >
                Swaraj
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
