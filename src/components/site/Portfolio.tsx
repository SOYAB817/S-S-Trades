import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import g1 from "@/assets/portfolio-gate1.jpg";
import g2 from "@/assets/hero-gate.jpg";
import railing from "@/assets/portfolio-railing.jpg";
import grill from "@/assets/portfolio-grill.jpg";
import boundary from "@/assets/portfolio-boundary.jpg";
import shutter from "@/assets/portfolio-shutter.jpg";

type Item = { src: string; title: string; cat: string; tall?: boolean };
const items: Item[] = [
  { src: g2, title: "Geometric Luxury Gate", cat: "Gates", tall: true },
  { src: railing, title: "Glass & SS Railing", cat: "Railings" },
  { src: g1, title: "Ornate Villa Gate", cat: "Gates", tall: true },
  { src: grill, title: "Scrollwork Window Grill", cat: "Grills" },
  { src: boundary, title: "Spear-top Boundary Fence", cat: "Boundary" },
  { src: shutter, title: "Commercial Shutter", cat: "Shutters" },
];
const cats = ["All", "Gates", "Railings", "Grills", "Boundary", "Shutters"];

export function Portfolio() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? items : items.filter((i) => i.cat === active);
  return (
    <section id="portfolio" className="site-section">
      <div className="site-shell-wide px-4 lg:px-8">
        <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-8 mb-12">
          <div>
            <span className="section-kicker">Portfolio</span>
            <h2 className="mt-6 font-display text-4xl lg:text-6xl font-bold">
              Our <span className="text-gradient-gold">Signature Work</span>
            </h2>
          </div>
          <div className="flex flex-wrap gap-2 xl:max-w-xl">
            {cats.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-4 py-2 rounded-full text-sm border transition-all ${
                  active === c
                    ? "bg-gradient-gold text-ink border-transparent shadow-gold"
                    : "border-border bg-white/65 text-muted-foreground hover:border-gold/50 hover:text-foreground"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        <motion.div layout className="columns-1 sm:columns-2 xl:columns-3 gap-6 [column-fill:_balance]">
          <AnimatePresence>
            {filtered.map((item, i) => (
              <motion.figure
                key={item.title}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group relative mb-6 break-inside-avoid rounded-[2rem] overflow-hidden border border-border bg-white/70 shadow-card hover:border-gold/50 transition-all cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.title}
                  loading="lazy"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${item.tall ? "aspect-[3/4]" : "aspect-[4/3]"}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(29,24,20,0.86)] via-[rgba(29,24,20,0.18)] to-transparent opacity-65 group-hover:opacity-90 transition-opacity" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold mb-1">{item.cat}</div>
                  <div className="font-display text-xl text-foreground">{item.title}</div>
                </figcaption>
              </motion.figure>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
