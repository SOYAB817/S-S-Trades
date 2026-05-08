import { motion } from "framer-motion";
import { Diamond, Sparkles, Layers, Users, BadgeIndianRupee, Heart } from "lucide-react";
const items = [
  { icon: Diamond, title: "Strong Material", desc: "Premium-grade MS & SS sourced from trusted mills." },
  { icon: Sparkles, title: "Premium Finishing", desc: "Powder-coated, rust-proof and showroom finish." },
  { icon: Layers, title: "Modern Designs", desc: "Trend-setting laser-cut and contemporary patterns." },
  { icon: Users, title: "Professional Work", desc: "Disciplined teams, on-time delivery, clean install." },
  { icon: BadgeIndianRupee, title: "Affordable Pricing", desc: "Transparent quotes — no hidden costs, ever." },
  { icon: Heart, title: "Customer First", desc: "After-sales support and satisfaction guarantee." },
];
export function WhyUs() {
  return (
    <section id="why" className="site-section relative">
      <div className="absolute inset-0 grain opacity-30" />
      <div className="site-shell-wide px-4 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <span className="section-kicker">Why Choose Us</span>
          <h2 className="mt-6 font-display text-4xl lg:text-6xl font-bold">
            Built On <span className="text-gradient-gold">Trust</span>, Forged To <span className="text-gradient-gold">Last</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="site-panel rounded-[1.9rem] p-8 sm:p-10 transition-colors group"
            >
              <it.icon className="w-8 h-8 text-gold group-hover:scale-110 transition-transform" />
              <h3 className="mt-5 font-display text-2xl font-semibold">{it.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{it.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
