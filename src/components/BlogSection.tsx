const blogs = [
  {
    image: "https://framerusercontent.com/images/84D3YC9gPH9F7d3pORzAz25QrgI.jpg?scale-down-to=1024&width=1440&height=1105",
    title: "Bringing hope through food, shelter, and support",
    date: "Apr 9, 2025",
  },
  {
    image: "https://framerusercontent.com/images/aKgPLifvKUKYx6PjC7W5KBBT4.jpg?scale-down-to=1024&width=10728&height=7152",
    title: "Building Food Security Through Community Farming",
    date: "Sep 19, 2025",
  },
  {
    image: "https://framerusercontent.com/images/YT7wGvY1UETWbqqsD3UJ8QBWzUE.jpg?scale-down-to=1024&width=5977&height=3985",
    title: "Restoring Hope in Times of Urgency in Human",
    date: "Apr 7, 2025",
  },
];

const BlogSection = () => {
  return (
    <section id="blog" className="py-24 px-6 md:px-10" style={{ backgroundColor: "#121212" }}>
      <div className="max-w-[1200px] mx-auto">
        <div className="text-center mb-16">
          <p className="text-[13px] font-medium uppercase tracking-wider mb-4" style={{ color: "#00b749" }}>
            Blogs
          </p>
          <h2 className="text-[36px] md:text-[48px] font-bold leading-tight mb-4" style={{ color: "#fff" }}>
            News. Stories. Voices
          </h2>
          <p className="text-[16px] max-w-[600px] mx-auto" style={{ color: "#b3b3b3" }}>
            Explore updates, field notes, and impact stories that amplify real-world change daily.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {blogs.map((blog) => (
            <a
              key={blog.title}
              href="#"
              className="group rounded-2xl overflow-hidden block"
              style={{ backgroundColor: "#1a1a1a" }}
            >
              <div className="h-[220px] overflow-hidden">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="text-[16px] font-bold mb-3 leading-snug" style={{ color: "#fff" }}>
                  {blog.title}
                </h3>
                <p className="text-[13px]" style={{ color: "#808080" }}>
                  {blog.date}
                </p>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <p className="text-[14px] mb-4" style={{ color: "#b3b3b3" }}>
            Discover stories and become part of the impact they inspire
          </p>
          <a
            href="#"
            className="inline-flex items-center px-6 py-3 rounded-full text-[14px] font-medium"
            style={{ border: "1px solid #333", color: "#fff" }}
          >
            View All Blogs
          </a>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
