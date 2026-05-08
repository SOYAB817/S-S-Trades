import { motion } from "framer-motion";
import welding from "@/assets/welding.jpg";
import { Award, ShieldCheck, Hammer } from "lucide-react";

export function About() {
  return (
    <section id="about" className="site-section relative overflow-hidden">
      <div className="site-shell-wide px-4 lg:px-8 grid lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] gap-10 lg:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden shadow-elegant">
            <img src={welding} alt="Master craftsman welding iron gate" loading="lazy" width={1280} height={1280} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-background/85 via-transparent to-transparent" />
          </div>
          <div className="absolute -bottom-6 right-4 sm:-right-4 lg:-right-10 site-panel rounded-[1.5rem] px-6 py-5">
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
          <span className="section-kicker">About Us</span>
          <h2 className="mt-6 font-display text-4xl lg:text-6xl font-bold leading-[1.02]">
            Forging <span className="text-gradient-gold">Strength</span> &<br />Sculpting <span className="text-gradient-gold">Elegance</span>
          </h2>
          <p className="mt-6 text-muted-foreground text-lg leading-relaxed max-w-2xl">
            S.S TRADES, founded by <span className="text-foreground">Yusuf Saifi & Juber Saifi</span>, is a premium iron fabrication studio based in Mukandpur, Baghpat. We specialize in modern main gates, SS railings, window grills, shutters and bespoke MS & SS work — engineered for strength, finished for beauty.
          </p>
          <p className="mt-4 text-muted-foreground leading-relaxed max-w-2xl">
            Every project is hand-crafted by experienced artisans using premium-grade material, precision welding and a luxurious finish. We don't just build — we create iron statements that last decades.
          </p>

          <div className="mt-10 grid sm:grid-cols-3 gap-4">
            {[
              { icon: ShieldCheck, t: "Premium Material" },
              { icon: Hammer, t: "Expert Craftsmen" },
              { icon: Award, t: "Trusted Quality" },
            ].map(({ icon: Icon, t }) => (
              <div key={t} className="site-panel rounded-[1.5rem] p-5 sm:p-6 hover:border-gold/40 transition-colors">
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
