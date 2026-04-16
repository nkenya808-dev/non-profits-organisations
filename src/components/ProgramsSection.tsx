const programs = [
  {
    tag: "Emergency Health Relief",
    title: "Healthcare Access",
    description: "Ensure fast delivery of medical and health units during emergency to provide care and support recovery.",
    raised: "$16,800",
    goal: "$40,000",
    progress: 42,
    image: "https://framerusercontent.com/images/wFKQPsH9rNbJWNGGelmsCnkTIGc.jpg?scale-down-to=1024&width=7566&height=4750",
  },
  {
    tag: "Food Security Initiative",
    title: "Nutritional Support",
    description: "Ensure timely access to nutritious food, clean water, and supplements for communities in times of crisis.",
    raised: "$60,800",
    goal: "$100,800",
    progress: 60,
    image: "https://framerusercontent.com/images/ygeuhmIB0mDByoO9joNsWk3rCvM.jpg?scale-down-to=1024&width=2992&height=2000",
  },
  {
    tag: "Water Purification Project",
    title: "Access to Clean Water",
    description: "Provide clean water access through filtration systems, safe water distribution and hygiene education.",
    raised: "$20,800",
    goal: "$60,000",
    progress: 35,
    image: "https://framerusercontent.com/images/2srJeanTF7o28bioeTcEYLrSCms.jpg?scale-down-to=1024&width=5760&height=3840",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-24 px-6 md:px-10" style={{ backgroundColor: "#121212" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-[13px] font-medium uppercase tracking-wider mb-4"
            style={{ color: "#00b749" }}
          >
            Programs
          </p>
          <h2
            className="text-[36px] md:text-[48px] font-bold leading-tight mb-4"
            style={{ color: "#fff" }}
          >
            Spark Positive Change
          </h2>
          <p className="text-[16px] max-w-[600px] mx-auto" style={{ color: "#b3b3b3" }}>
            Our efforts provide care, skills, and support igniting hope and lasting impact in the lives.
          </p>
        </div>

        {/* Images row */}
        <div className="grid grid-cols-3 gap-4 mb-12 rounded-2xl overflow-hidden">
          {programs.map((p) => (
            <div key={p.title} className="h-[200px] overflow-hidden">
              <img src={p.image} alt={p.title} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>

        {/* Programs grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programs.map((program) => (
            <div
              key={program.title}
              className="rounded-2xl p-6"
              style={{ backgroundColor: "#1a1a1a" }}
            >
              <span
                className="inline-block text-[11px] font-medium px-3 py-1 rounded-full mb-4"
                style={{ backgroundColor: "#333", color: "#b3b3b3" }}
              >
                {program.tag}
              </span>
              <h3
                className="text-[20px] font-bold mb-3"
                style={{ color: "#fff" }}
              >
                {program.title}
              </h3>
              <p
                className="text-[14px] leading-relaxed mb-5"
                style={{ color: "#b3b3b3" }}
              >
                {program.description}
              </p>

              {/* Progress bar */}
              <div className="w-full h-[6px] rounded-full mb-4" style={{ backgroundColor: "#333" }}>
                <div
                  className="h-full rounded-full"
                  style={{ width: `${program.progress}%`, backgroundColor: "#00b749" }}
                />
              </div>

              <div className="flex justify-between text-[13px] mb-5">
                <div>
                  <p style={{ color: "#808080" }}>Raised Amount</p>
                  <p className="font-bold" style={{ color: "#fff" }}>{program.raised}</p>
                </div>
                <div className="text-right">
                  <p style={{ color: "#808080" }}>Goal Amount</p>
                  <p className="font-bold" style={{ color: "#fff" }}>{program.goal}</p>
                </div>
              </div>

              <a
                href="#"
                className="inline-flex items-center text-[13px] font-medium"
                style={{ color: "#00b749" }}
              >
                Learn More →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsSection;
