import { useState } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Causes", href: "#causes" },
  { label: "Programs", href: "#programs" },
  { label: "Blog", href: "#blog" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[calc(100%-2rem)] max-w-[960px]">
      <div
        className="flex items-center justify-between px-6 py-3 rounded-full"
        style={{ backgroundColor: "rgba(18,18,18,0.85)", backdropFilter: "blur(12px)" }}
      >
        <a href="#" className="text-[22px] font-bold tracking-tight" style={{ color: "#fff" }}>
          Careon
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] font-medium transition-colors"
              style={{ color: "#fff" }}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:block">
          <a
            href="#donate"
            className="inline-flex items-center px-5 py-2.5 rounded-full text-[14px] font-medium transition-all hover:opacity-90"
            style={{ backgroundColor: "#00b749", color: "#fff" }}
          >
            Donate Now
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden"
          style={{ color: "#fff" }}
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div
          className="md:hidden mt-2 rounded-2xl px-6 py-4 flex flex-col gap-3"
          style={{ backgroundColor: "rgba(18,18,18,0.95)", backdropFilter: "blur(12px)" }}
        >
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-[14px] font-medium py-2"
              style={{ color: "#fff" }}
              onClick={() => setMobileOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donate"
            className="inline-flex items-center justify-center px-5 py-2.5 rounded-full text-[14px] font-medium mt-2"
            style={{ backgroundColor: "#00b749", color: "#fff" }}
          >
            Donate Now
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
