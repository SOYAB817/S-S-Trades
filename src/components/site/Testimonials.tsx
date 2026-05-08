import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
const reviews = [
  { name: "Rahul Sharma", area: "Dwarka, Delhi", text: "S.S TRADES installed our main gate and railings — the design and finish look straight out of a luxury magazine. Truly premium work." },
  { name: "Aisha Khan", area: "Najafgarh", text: "Yusuf bhai delivered exactly what we sketched. Strong material, modern look, fair price. Highly recommend for fabrication work." },
  { name: "Vikram Tyagi", area: "Baghpat", text: "Got our entire boundary fence and shop shutter done. On-time, clean installation and the team was very professional." },
];
export function Testimonials() {
  return (
    <section className="py-32 bg-gradient-to-b from-background via-card/20 to-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="text-center mb-16">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">Testimonials</span>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl font-bold">
            Loved By <span className="text-gradient-gold">Our Clients</span>
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="relative p-8 rounded-2xl border border-border bg-card/60 backdrop-blur-sm hover:border-gold/40 transition-all"
            >
              <Quote className="w-10 h-10 text-gold/30 absolute top-6 right-6" />
              <div className="flex gap-1 mb-5">
                {[...Array(5)].map((_, k) => <Star key={k} className="w-4 h-4 fill-gold text-gold" />)}
              </div>
              <p className="text-foreground/90 leading-relaxed">"{r.text}"</p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="font-display text-lg">{r.name}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{r.area}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
