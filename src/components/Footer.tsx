import { ArrowRight } from "lucide-react";

const navigation = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Causes", href: "#causes" },
  { label: "Donate", href: "#donate" },
];

const otherLinks = [
  { label: "Programs", href: "#programs" },
  { label: "Blogs", href: "#blog" },
  { label: "Privacy policy", href: "#" },
  { label: "Terms and Conditions", href: "#" },
];

const socialLinks = [
  { label: "Linkedin", href: "#" },
  { label: "Instagram", href: "#" },
  { label: "X/twitter", href: "#" },
];

const marqueeWords = ["Hope", "Unity", "Care", "Impact", "Growth", "Trust", "Together"];

const Footer = () => {
  return (
    <footer id="contact" style={{ backgroundColor: "#121212" }}>
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 pt-20 pb-8">
        {/* Top row */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 mb-16">
          {/* Brand */}
          <div className="max-w-[300px]">
            <h3 className="text-[24px] font-bold mb-4" style={{ color: "#00b749" }}>
              Careon
            </h3>
            <p className="text-[14px] leading-relaxed" style={{ color: "#808080" }}>
              Be the first to hear how you're making a difference.
            </p>
          </div>

          {/* Newsletter */}
          <div className="max-w-[400px]">
            <h4 className="text-[16px] font-semibold mb-2" style={{ color: "#fff" }}>
              Newsletter
            </h4>
            <p className="text-[14px] mb-4" style={{ color: "#808080" }}>
              Sign in to newsletter and never miss update.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="name@email.com"
                className="flex-1 px-4 py-3 rounded-full text-[14px] outline-none"
                style={{ backgroundColor: "#1a1a1a", border: "1px solid #333", color: "#fff" }}
              />
              <button
                className="w-11 h-11 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: "#00b749" }}
              >
                <ArrowRight size={18} style={{ color: "#fff" }} />
              </button>
            </div>
          </div>
        </div>

        {/* Links grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {/* Navigation */}
          <div>
            <h5 className="text-[13px] font-semibold mb-4" style={{ color: "#808080" }}>
              Navigation
            </h5>
            <div className="flex flex-col gap-3">
              {navigation.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[14px] font-medium flex items-center gap-1 hover:opacity-80"
                  style={{ color: "#fff" }}
                >
                  {link.label} <ArrowRight size={12} />
                </a>
              ))}
            </div>
          </div>

          {/* Other Links */}
          <div>
            <h5 className="text-[13px] font-semibold mb-4" style={{ color: "#808080" }}>
              Other Links
            </h5>
            <div className="flex flex-col gap-3">
              {otherLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[14px] font-medium flex items-center gap-1 hover:opacity-80"
                  style={{ color: "#fff" }}
                >
                  {link.label} <ArrowRight size={12} />
                </a>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h5 className="text-[13px] font-semibold mb-4" style={{ color: "#808080" }}>
              Social Connect
            </h5>
            <div className="flex flex-col gap-3">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-[14px] font-medium flex items-center gap-1 hover:opacity-80"
                  style={{ color: "#fff" }}
                >
                  {link.label} <ArrowRight size={12} />
                </a>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h5 className="text-[13px] font-semibold mb-4" style={{ color: "#808080" }}>
              Contact us
            </h5>
            <div className="flex flex-col gap-3 text-[14px]" style={{ color: "#fff" }}>
              <p>+91 9730627087</p>
              <p>Careon.foundation@gmail.com</p>
              <p>123, Park , Las Vegas , - 110016</p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-8" style={{ backgroundColor: "#333" }} />

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[13px]" style={{ color: "#808080" }}>
          <p>All copyrights reserved for @Careon</p>
          <p>Designed by Jitu Raut @fremix.com</p>
        </div>
      </div>

      {/* Marquee */}
      <div className="overflow-hidden py-6" style={{ borderTop: "1px solid #1a1a1a" }}>
        <div className="animate-marquee flex items-center whitespace-nowrap">
          {[...marqueeWords, ...marqueeWords, ...marqueeWords, ...marqueeWords].map((word, i) => (
            <span key={i} className="flex items-center">
              <span className="text-[48px] md:text-[64px] font-bold mx-4" style={{ color: "#333" }}>
                {word}
              </span>
              <span className="text-[24px] mx-4" style={{ color: "#333" }}>✦</span>
            </span>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
