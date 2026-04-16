import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is your NGO's mission?",
    answer: "Our mission is to empower communities worldwide through sustainable development, education, healthcare access, and emergency relief programs.",
  },
  {
    question: "How are donations used?",
    answer: "Donations directly fund our programs including food distribution, education initiatives, healthcare access, and disaster relief operations.",
  },
  {
    question: "Can I volunteer?",
    answer: "Yes! We welcome volunteers for both local community projects and international field missions. Visit our volunteer page to apply.",
  },
  {
    question: "Besides donating, how else can I help?",
    answer: "You can help by volunteering, spreading awareness on social media, organizing fundraising events, or providing in-kind donations.",
  },
  {
    question: "Can I sponsor a child or family?",
    answer: "Yes, our sponsorship program allows you to directly support a child or family with education, nutrition, and healthcare needs.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 md:px-10" style={{ backgroundColor: "#121212" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left side */}
          <div className="flex-1">
            <p className="text-[13px] font-medium uppercase tracking-wider mb-4" style={{ color: "#00b749" }}>
              FAQ
            </p>
            <h2 className="text-[36px] md:text-[44px] font-bold leading-tight mb-4" style={{ color: "#fff" }}>
              What You're Thinking,{" "}
              <span style={{ color: "#00b749" }}>We've Answered.</span>
            </h2>
            <p className="text-[16px] mb-8" style={{ color: "#b3b3b3" }}>
              Find helpful answers to common questions about donating, volunteering & fundraising.
            </p>

            {/* FAQ items */}
            <div className="flex flex-col gap-3">
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className="rounded-xl overflow-hidden"
                  style={{ backgroundColor: "#1a1a1a" }}
                >
                  <button
                    onClick={() => setOpenIndex(openIndex === i ? null : i)}
                    className="w-full flex items-center justify-between p-5 text-left"
                  >
                    <span className="text-[15px] font-semibold" style={{ color: "#fff" }}>
                      {faq.question}
                    </span>
                    <ChevronDown
                      size={18}
                      className="flex-shrink-0 transition-transform"
                      style={{
                        color: "#b3b3b3",
                        transform: openIndex === i ? "rotate(180deg)" : "rotate(0)",
                      }}
                    />
                  </button>
                  {openIndex === i && (
                    <div className="px-5 pb-5">
                      <p className="text-[14px] leading-relaxed" style={{ color: "#b3b3b3" }}>
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right side image */}
          <div className="flex-1 hidden lg:block">
            <img
              src="https://framerusercontent.com/images/9Ga2RtRCnhnKwjDA1mRRbXTtpz0.jpg?scale-down-to=1024&width=2621&height=3496"
              alt="Children at beach"
              className="w-full h-full object-cover rounded-2xl"
              style={{ maxHeight: "700px" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
