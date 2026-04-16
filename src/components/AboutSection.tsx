const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-10" style={{ backgroundColor: "#121212" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Text */}
          <div className="flex-1">
            <p
              className="text-[13px] font-medium uppercase tracking-wider mb-4"
              style={{ color: "#00b749" }}
            >
              About Us
            </p>
            <h2
              className="text-[36px] md:text-[48px] font-bold leading-tight mb-6"
              style={{ color: "#fff" }}
            >
              United Together to Create Enduring Hope
            </h2>
            <p
              className="text-[16px] leading-relaxed mb-8"
              style={{ color: "#b3b3b3" }}
            >
              We are purpose driven organization empowering health & education.
            </p>
            <a
              href="#"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-[14px] font-medium transition-all hover:opacity-90"
              style={{ backgroundColor: "#00b749", color: "#fff" }}
            >
              Learn More
            </a>
          </div>

          {/* Image */}
          <div className="flex-1">
            <img
              src="https://framerusercontent.com/images/t5tIbDRMoCoOJYTfLqWMVuanPo.jpg?scale-down-to=1024&width=5184&height=3456"
              alt="Children sitting on steps"
              className="w-full rounded-2xl object-cover"
              style={{ aspectRatio: "4/3" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
