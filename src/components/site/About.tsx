import { motion } from "framer-motion";
import welding from "@/assets/welding.jpg";
import { Award, ShieldCheck, Hammer } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-elegant">
            <img src={welding} alt="Master craftsman welding iron gate" loading="lazy" width={1280} height={1280} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-8 -right-4 lg:-right-12 bg-card border border-gold/30 rounded-xl px-6 py-5 shadow-gold backdrop-blur-md">
            <div className="font-display text-4xl text-gradient-gold">10+</div>
            <div className="text-xs uppercase tracking-wider text-muted-foreground">Years of Mastery</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-xs uppercase tracking-[0.4em] text-gold">About Us</span>
          <h2 className="mt-4 font-display text-4xl lg:text-5xl font-bold leading-tight">
            Forging <span className="text-gradient-gold">Strength</span> &<br />Sculpting <span className="text-gradient-gold">Elegance</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed">
            S.S TRADES, founded by <span className="text-foreground">Yusuf Saifi & Juber Saifi</span>, is a premium iron fabrication studio based in Mukandpur, Baghpat. We specialize in modern main gates, SS railings, window grills, shutters and bespoke MS & SS work — engineered for strength, finished for beauty.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed">
            Every project is hand-crafted by experienced artisans using premium-grade material, precision welding and a luxurious finish. We don't just build — we create iron statements that last decades.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-5">
            {[
              { icon: ShieldCheck, t: "Premium Material" },
              { icon: Hammer, t: "Expert Craftsmen" },
              { icon: Award, t: "Trusted Quality" },
            ].map(({ icon: Icon, t }) => (
              <div key={t} className="p-5 rounded-xl border border-border bg-card/40 hover:border-gold/40 transition-colors">
                <Icon className="w-6 h-6 text-gold" />
                <div className="mt-3 text-sm font-medium text-foreground">{t}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
