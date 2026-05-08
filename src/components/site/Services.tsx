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
    <section id="services" className="relative py-32 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Our Services</span>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl font-bold">
            Crafted For <span className="text-gradient-gold">Every Vision</span>
          </h2>
          <p className="mt-5 text-muted-foreground">From a single window grill to a grand main gate — we deliver unmatched fabrication excellence.</p>
        </motion.div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative p-8 rounded-2xl border border-border bg-card/60 backdrop-blur-sm hover:border-gold/50 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{ background: "radial-gradient(400px circle at top right, oklch(0.78 0.14 80 / 0.12), transparent)" }} />
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gold/20 to-transparent border border-gold/30 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
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
