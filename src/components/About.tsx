const stats = [
  { value: "50+", label: "Projects Delivered" },
  { value: "30+", label: "Happy Clients" },
  { value: "4+", label: "Years Experience" },
  { value: "99%", label: "Client Satisfaction" },
];

const About = () => (
  <section id="about" className="py-24 bg-muted/40">
    <div className="container mx-auto px-4 md:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        {/* Text */}
        <div>
          <p className="text-sm font-semibold gradient-text uppercase tracking-wider mb-3">About Us</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-6">
            Turning Bold Ideas Into{" "}
            <span className="gradient-text">Digital Reality</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-4">
            CypherNest is a technology studio specializing in web development, native mobile apps, 
            IoT systems, and cloud infrastructure. We partner with startups and enterprises alike 
            to build products that are fast, secure, and delightful to use.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            Our team blends engineering precision with creative thinking — every project is 
            an opportunity to push boundaries and deliver measurable impact.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((s) => (
            <div
              key={s.label}
              className="bg-card border border-border rounded-xl p-6 text-center hover:shadow-md transition-shadow"
            >
              <p className="text-3xl font-bold gradient-text mb-1">{s.value}</p>
              <p className="text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default About;
