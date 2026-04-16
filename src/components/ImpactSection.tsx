const stats = [
  {
    image: "https://framerusercontent.com/images/KifZ6fUhc5ktFEqSBmYqhn0bjA.jpg?scale-down-to=1024&width=4416&height=2944",
    number: "500,000+",
    title: "Meals Distributed",
    description: "For families and individuals.",
  },
  {
    image: "https://framerusercontent.com/images/5TJrfkcm62NL7GzhdPxOWdNFbnM.jpg?scale-down-to=1024&width=2160&height=2880",
    number: "12,000+",
    title: "Homes rebuilt",
    description: "Families restore safety & dignity.",
  },
  {
    image: "https://framerusercontent.com/images/ukJcS0unMvhGcfeRqTAxx8X0lY.jpg?scale-down-to=1024&width=5184&height=3456",
    number: "300+",
    title: "Projects delivered",
    description: "Supporting in healthcare & crisis.",
  },
];

const ImpactSection = () => {
  return (
    <section className="py-24 px-6 md:px-10" style={{ backgroundColor: "#121212" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <p
            className="text-[13px] font-medium uppercase tracking-wider mb-4"
            style={{ color: "#00b749" }}
          >
            Our Impact
          </p>
          <h2
            className="text-[36px] md:text-[48px] font-bold leading-tight mb-4"
            style={{ color: "#fff" }}
          >
            Together for change
          </h2>
          <p
            className="text-[16px] max-w-[600px] mx-auto"
            style={{ color: "#b3b3b3" }}
          >
            Feeding families, educating children & rebuilding lives what our impact shows.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.title}
              className="rounded-2xl overflow-hidden"
              style={{ backgroundColor: "#1a1a1a" }}
            >
              <div className="h-[240px] overflow-hidden">
                <img
                  src={stat.image}
                  alt={stat.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <p
                  className="text-[36px] font-bold mb-1"
                  style={{ color: "#00b749" }}
                >
                  {stat.number}
                </p>
                <h3
                  className="text-[18px] font-semibold mb-2"
                  style={{ color: "#fff" }}
                >
                  {stat.title}
                </h3>
                <p className="text-[14px]" style={{ color: "#b3b3b3" }}>
                  {stat.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
