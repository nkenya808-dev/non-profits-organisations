const testimonials = [
  {
    image: "https://framerusercontent.com/images/oguB5Tx8lXqDwbSNrWknzOiU4.jpg?scale-down-to=1024&width=5000&height=3333",
    quote: "Innovating Youth Engagement Developing creative programs to inspire and involve young people in community initiatives.",
    author: "Liam Carter, Program Director",
  },
];

const thumbs = [
  "https://framerusercontent.com/images/kGbwa4d6dl3T9qSyfhfxB8oHqp4.jpg?scale-down-to=512&width=3840&height=5760",
  "https://framerusercontent.com/images/1qOlVnV2OGWz5QUAwfV5EkSHxNc.jpg?scale-down-to=512&width=5381&height=3587",
  "https://framerusercontent.com/images/I2khQu9IkXd26IjTYjBHzDZuYJc.jpg?scale-down-to=512&width=2800&height=1867",
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 px-6 md:px-10" style={{ backgroundColor: "#121212" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-[13px] font-medium uppercase tracking-wider mb-4" style={{ color: "#00b749" }}>
            Testimonials
          </p>
          <h2 className="text-[36px] md:text-[48px] font-bold leading-tight mb-4" style={{ color: "#fff" }}>
            Stories Bringing Hope
          </h2>
          <p className="text-[16px] max-w-[600px] mx-auto" style={{ color: "#b3b3b3" }}>
            Real stories from those we've helped and those who help sharing the hope & heart.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 items-center">
          {/* Main testimonial image */}
          <div className="flex-1 rounded-2xl overflow-hidden">
            <img
              src={testimonials[0].image}
              alt="Testimonial"
              className="w-full h-[400px] object-cover rounded-2xl"
            />
          </div>

          {/* Quote */}
          <div className="flex-1">
            <p className="text-[18px] leading-relaxed mb-6" style={{ color: "#fff" }}>
              {testimonials[0].quote}
            </p>
            <p className="text-[14px] font-medium" style={{ color: "#b3b3b3" }}>
              — {testimonials[0].author}
            </p>

            {/* Thumbs */}
            <div className="flex gap-3 mt-8">
              {thumbs.map((thumb, i) => (
                <div
                  key={i}
                  className="w-16 h-16 rounded-xl overflow-hidden"
                  style={{ border: i === 0 ? "2px solid #00b749" : "2px solid #333" }}
                >
                  <img src={thumb} alt="" className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
