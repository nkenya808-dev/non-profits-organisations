import { useState } from "react";

const helpItems = [
  {
    icon: "https://framerusercontent.com/images/FZ3UYGnbE4ktO1EVsye4ENTI.svg?width=24&height=24",
    title: "Act During Crisis",
    description: "Join urgent missions with rapid aid, relief, and community recovery.",
    image: "https://framerusercontent.com/images/204XFpHl58wVmWmn285p6Bb5jY.png?width=588&height=342",
  },
  {
    icon: "https://framerusercontent.com/images/T6fzr4EvMgbmvB9FQUuFFJewqJk.svg?width=24&height=24",
    title: "Strengthen Social Good",
    description: "Sponsorships grow awareness and strengthen your brand's purpose.",
    image: "https://framerusercontent.com/images/D2qhIkYg79m0UlLC7a9mBTar81o.png?width=1416&height=920",
  },
  {
    icon: "https://framerusercontent.com/images/ywqaexkUbEgyKvOROgKOZVcE0.svg?width=20&height=20",
    title: "Power Meaningful Change",
    description: "Financial gifts help drive lasting progress in key cause areas.",
    image: "https://framerusercontent.com/images/2fwKmrw0iFY0YymR95KitcnayY.png?width=768&height=684",
  },
  {
    icon: "https://framerusercontent.com/images/8CGr3plXQCOKsLKz04vzZ06uw.svg?width=20&height=18",
    title: "Fuel Greater Impact",
    description: "Your donation scales our work and reaches more communities in need.",
    image: "https://framerusercontent.com/images/Dlfcf6BwUfbzBlXOXPqaeRJPxWU.png?width=2832&height=1024",
  },
  {
    icon: "https://framerusercontent.com/images/RVz9HzNQpvAzhAvDqgT2u2Ncrew.svg?width=24&height=24",
    title: "Share Valuable Resources",
    description: "In-kind support accelerates logistics, technology, and field operations.",
    image: "https://framerusercontent.com/images/mtJn2owzdRBWS4dTsyiAznER3zc.png?width=1416&height=512",
  },
];

const HowToHelpSection = () => {
  const [active, setActive] = useState(0);

  return (
    <section className="py-24 px-6 md:px-10" style={{ backgroundColor: "#121212" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-[13px] font-medium uppercase tracking-wider mb-4" style={{ color: "#00b749" }}>
            How you can help
          </p>
          <h2 className="text-[36px] md:text-[48px] font-bold leading-tight mb-4" style={{ color: "#fff" }}>
            United, We Transform
          </h2>
          <p className="text-[16px] max-w-[600px] mx-auto" style={{ color: "#b3b3b3" }}>
            Feeding families, educating children, impacting lives compassion and support.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Image preview */}
          <div className="flex-1 rounded-2xl overflow-hidden" style={{ backgroundColor: "#1a1a1a" }}>
            <img
              src={helpItems[active].image}
              alt={helpItems[active].title}
              className="w-full h-[400px] object-cover"
            />
          </div>

          {/* Items list */}
          <div className="flex-1 flex flex-col gap-3">
            {helpItems.map((item, i) => (
              <button
                key={item.title}
                onClick={() => setActive(i)}
                className="flex items-start gap-4 p-4 rounded-xl text-left transition-all"
                style={{
                  backgroundColor: active === i ? "#1a1a1a" : "transparent",
                  border: active === i ? "1px solid #333" : "1px solid transparent",
                }}
              >
                <div
                  className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{ backgroundColor: active === i ? "#00b749" : "#1a1a1a" }}
                >
                  <img src={item.icon} alt="" className="w-5 h-5" style={{ filter: "brightness(10)" }} />
                </div>
                <div>
                  <h4 className="text-[16px] font-semibold mb-1" style={{ color: "#fff" }}>
                    {item.title}
                  </h4>
                  {active === i && (
                    <p className="text-[14px]" style={{ color: "#b3b3b3" }}>
                      {item.description}
                    </p>
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToHelpSection;
