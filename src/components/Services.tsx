import { Globe, Smartphone, Cpu, Cloud } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Development",
    description:
      "Custom websites, progressive web apps, and e-commerce platforms built with modern frameworks for speed and scalability.",
  },
  {
    icon: Smartphone,
    title: "Native App Development",
    description:
      "High-performance iOS and Android applications with seamless UX, built natively or with cross-platform solutions.",
  },
  {
    icon: Cpu,
    title: "IoT Projects",
    description:
      "End-to-end IoT solutions — from smart device firmware to cloud dashboards — connecting the physical and digital worlds.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Scalable cloud architectures, CI/CD pipelines, and infrastructure automation to keep your products running smoothly.",
  },
];

const Services = () => (
  <section id="services" className="py-24">
    <div className="container mx-auto px-4 md:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <p className="text-sm font-semibold gradient-text uppercase tracking-wider mb-3">What We Do</p>
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">Services We Offer</h2>
        <p className="text-muted-foreground">
          From concept to deployment, we deliver end-to-end technology solutions tailored to your business needs.
        </p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((s) => (
          <div
            key={s.title}
            className="group relative bg-card rounded-xl border border-border p-6 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-lg gradient-bg flex items-center justify-center mb-5">
              <s.icon size={22} className="text-primary-foreground" />
            </div>
            <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Services;
