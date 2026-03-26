import { ArrowRight } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden pt-16">
      {/* Background decorations */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] rounded-full opacity-10 gradient-bg blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full opacity-8 gradient-bg blur-3xl" />

      <div className="container mx-auto px-4 md:px-8 relative z-10">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-border bg-card mb-6">
            <div className="w-2 h-2 rounded-full gradient-bg animate-pulse" />
            <span className="text-xs font-medium text-muted-foreground">
              Web · Mobile · IoT · Cloud
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
            Building Digital{" "}
            <span className="gradient-text">Solutions</span>{" "}
            That Matter
          </h1>

          <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            We craft high-performance websites, native mobile apps, IoT systems, 
            and cloud solutions that transform ideas into reality.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToContact}
              className="gradient-bg text-primary-foreground px-7 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Get in Touch
              <ArrowRight size={18} />
            </button>
            <button
              onClick={() => document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" })}
              className="px-7 py-3 rounded-lg font-semibold border border-border text-foreground hover:bg-muted transition-colors"
            >
              Our Services
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
