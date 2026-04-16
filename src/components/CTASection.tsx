import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="donate" className="py-24 px-6 md:px-10" style={{ backgroundColor: "#121212" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 rounded-2xl overflow-hidden" style={{ backgroundColor: "#1a1a1a" }}>
          {/* Left - Image with text overlay */}
          <div className="relative flex-1 min-h-[300px]">
            <img
              src="https://framerusercontent.com/images/Vo8oBTTlrZylDZdRpIXbXjAos.png?scale-down-to=1024&width=1128&height=1348"
              alt="People at sunset"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 flex items-end p-8" style={{ background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }}>
              <h3 className="text-[32px] md:text-[40px] font-bold leading-tight" style={{ color: "#fff" }}>
                Be the Reason<br />
                Someone <span style={{ color: "#00b749" }}>Smiles.</span>
              </h3>
            </div>
          </div>

          {/* Right - CTA content */}
          <div className="flex-1 p-8 md:p-12 flex flex-col justify-center" style={{ backgroundColor: "#1a1a1a" }}>
            <p className="text-[15px] mb-6 leading-relaxed" style={{ color: "#b3b3b3" }}>
              Join us in the journey to empower communities and change lives.
            </p>
            <p className="text-[48px] md:text-[64px] font-bold mb-2" style={{ color: "#00b749" }}>
              1,660,000+
            </p>
            <p className="text-[14px] mb-8" style={{ color: "#b3b3b3" }}>
              Peoples joined already
            </p>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 w-full py-4 rounded-full text-[15px] font-medium transition-all hover:opacity-90"
              style={{ backgroundColor: "#00b749", color: "#fff" }}
            >
              Donate Now
              <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
