const causes = [
  {
    image: "https://framerusercontent.com/images/yZYeZsqVzOBGjYMC8Iia6hVrfqA.jpg?scale-down-to=1024&width=3872&height=2592",
    title: "Fundraising for Education Equality and Access",
    raised: "$40,000",
    goal: "$65,200",
    progress: 61,
  },
  {
    image: "https://framerusercontent.com/images/r3dc2A9SWylLbCkhCXBI2KyM.jpg?scale-down-to=1024&width=3216&height=2136",
    title: "Building Stronger Futures Through Healthcare Access",
    raised: "$52,000",
    goal: "$75,200",
    progress: 69,
  },
  {
    image: "https://framerusercontent.com/images/xYUgLb9v27z3pLpGLEeERemjE.jpg?scale-down-to=1024&width=5760&height=3840",
    title: "Empowering Women and Girls Through Education",
    raised: "$80,000",
    goal: "$85,000",
    progress: 94,
  },
];

const CausesSection = () => {
  return (
    <section id="causes" className="py-24 px-6 md:px-10" style={{ backgroundColor: "#121212" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-[13px] font-medium uppercase tracking-wider mb-4"
            style={{ color: "#00b749" }}
          >
            Causes
          </p>
          <h2
            className="text-[36px] md:text-[48px] font-bold leading-tight mb-4"
            style={{ color: "#fff" }}
          >
            Causes That Inspire
          </h2>
          <p className="text-[16px] max-w-[600px] mx-auto" style={{ color: "#b3b3b3" }}>
            From education to relief efforts, every cause reflects our shared mission to empower.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {causes.map((cause) => (
            <div
              key={cause.title}
              className="rounded-2xl overflow-hidden"
              style={{ backgroundColor: "#1a1a1a" }}
            >
              <div className="h-[220px] overflow-hidden">
                <img
                  src={cause.image}
                  alt={cause.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3
                  className="text-[16px] font-semibold mb-4 leading-snug"
                  style={{ color: "#fff" }}
                >
                  {cause.title}
                </h3>

                {/* Progress bar */}
                <div
                  className="w-full h-[6px] rounded-full mb-4"
                  style={{ backgroundColor: "#333" }}
                >
                  <div
                    className="h-full rounded-full"
                    style={{
                      width: `${cause.progress}%`,
                      backgroundColor: "#00b749",
                    }}
                  />
                </div>

                <div className="flex justify-between text-[13px] mb-4">
                  <div>
                    <p style={{ color: "#808080" }}>Raised Amount</p>
                    <p className="font-semibold" style={{ color: "#fff" }}>
                      {cause.raised}
                    </p>
                  </div>
                  <div className="text-right">
                    <p style={{ color: "#808080" }}>Goal Amount</p>
                    <p className="font-semibold" style={{ color: "#fff" }}>
                      {cause.goal}
                    </p>
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
            </div>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[14px] mb-4" style={{ color: "#b3b3b3" }}>
            Explore all causes and join us in making a meaningful impact.
          </p>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-full text-[14px] font-medium"
            style={{ border: "1px solid #333", color: "#fff" }}
          >
            View All Causes
          </a>
        </div>
      </div>
    </section>
  );
};

export default CausesSection;
