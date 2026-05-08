import { motion } from "framer-motion";
import { DoorOpen, Fence, Grid3x3, ArrowUpRight, Building2, Shield, Wrench } from "lucide-react";

const services = [
  { icon: DoorOpen, title: "Modern Main Gates", desc: "Custom designed iron and steel main gates with luxurious laser-cut patterns." },
  { icon: Grid3x3, title: "Window Grills", desc: "Decorative & secure grills tailored to architectural style." },
  { icon: Fence, title: "Boundary Gates & Fencing", desc: "Strong perimeter gates and fencing for villas and commercial sites." },
  { icon: ArrowUpRight, title: "Staircase Railings", desc: "Modern SS, MS & glass railings for stairs and balconies." },
  { icon: Building2, title: "Shop Shutters", desc: "Heavy-duty rolling shutters built for daily commercial use." },
  { icon: Shield, title: "MS & SS Work", desc: "Mild steel & stainless steel structural and decorative work." },
  { icon: Wrench, title: "Custom Fabrication", desc: "Bespoke iron fabrication — bring us a sketch, we'll build it." },
];

export function Services() {
  return (
    <section id="services" className="site-section site-section-alt">
      <div className="site-shell-wide px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <span className="section-kicker">Our Services</span>
          <h2 className="mt-6 font-display text-4xl lg:text-6xl font-bold">
            Crafted For <span className="text-gradient-gold">Every Vision</span>
          </h2>
          <p className="mt-5 section-lead">From a single window grill to a grand main gate — we deliver unmatched fabrication excellence.</p>
        </motion.div>

        <div className="mt-14 grid sm:grid-cols-2 xl:grid-cols-12 gap-5">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className={`group relative overflow-hidden rounded-[1.9rem] p-7 sm:p-8 transition-all duration-500 site-panel hover:border-gold/50 ${
                i === 0 || i === 3 ? "xl:col-span-5" : "xl:col-span-3"
              }`}
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(420px circle at top right, oklch(0.83 0.16 86 / 0.13), transparent)" }} />
              <div className="relative">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gold/25 to-white border border-gold/35 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <s.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-2xl font-semibold text-foreground">{s.title}</h3>
                <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                <div className="mt-6 inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-gold opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn More <ArrowUpRight className="w-3.5 h-3.5" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
