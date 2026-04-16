import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-20 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="https://framerusercontent.com/images/5OGFm3xDmmisAnJExVwoI7qwrPo.jpg?scale-down-to=2048&width=5184&height=3456"
          alt="Children smiling"
          className="w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.1) 100%)",
          }}
        />
      </div>

      {/* Green top bar */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 h-[6px] w-[60%] rounded-b-full"
        style={{ backgroundColor: "#00b749" }}
      />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-10">
        <p
          className="text-[16px] font-medium mb-4"
          style={{ color: "#00b749" }}
        >
          Together, We Create Impact
        </p>
        <h1
          className="text-[56px] md:text-[80px] lg:text-[96px] font-bold leading-[1.0] tracking-tight mb-6"
          style={{ color: "#fff", fontFamily: "'Inter', sans-serif" }}
        >
          Unite. Act.
          <br />
          Transform
        </h1>
        <p
          className="text-[16px] leading-relaxed max-w-[440px] mb-10"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          Your support powers life changing missions feeding families & rebuilding hope.
        </p>

        <div className="flex items-center gap-4 flex-wrap">
          <a
            href="#donate"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-medium transition-all hover:opacity-90"
            style={{ backgroundColor: "#00b749", color: "#fff" }}
          >
            Donate Now
            <ArrowRight size={16} />
          </a>
          <a
            href="#about"
            className="inline-flex items-center px-6 py-3 rounded-full text-[14px] font-medium transition-all hover:bg-white/10"
            style={{ border: "1px solid rgba(255,255,255,0.3)", color: "#fff" }}
          >
            Learn About Us
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
