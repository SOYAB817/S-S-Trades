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
    <section id="why" className="py-32 relative">
      <div className="absolute inset-0 grain opacity-30" />
      <div className="max-w-7xl mx-auto px-6 lg:px-10 relative">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Why Choose Us</span>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl font-bold">
            Built On <span className="text-gradient-gold">Trust</span>, Forged To <span className="text-gradient-gold">Last</span>
          </h2>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-border rounded-2xl overflow-hidden border border-border">
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="bg-background hover:bg-card/50 p-10 transition-colors group"
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
