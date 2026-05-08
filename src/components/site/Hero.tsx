import { motion } from "framer-motion";
import { Phone, MessageCircle, ArrowRight, Sparkles } from "lucide-react";
import heroGate from "@/assets/hero-gate.jpg";
import { SITE, telHref, waHref } from "@/lib/site";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img src={heroGate} alt="Premium luxury iron gate with gold accents" width={1920} height={1080} className="w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        <div className="absolute inset-0" style={{ background: "var(--gradient-radial-gold)" }} />
        <div className="absolute inset-0 grain opacity-40" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-10 py-32 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="max-w-4xl"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gold/40 bg-gold/5 backdrop-blur-sm mb-8">
            <Sparkles className="w-3.5 h-3.5 text-gold" />
            <span className="text-xs uppercase tracking-[0.3em] text-gold font-medium">Established Craftsmanship · Baghpat</span>
          </div>

          <h1 className="font-display text-5xl sm:text-6xl lg:text-8xl font-bold leading-[1.05] text-foreground">
            Premium <span className="text-gradient-gold shimmer-text">Gate & Railing</span><br />
            Fabrication Services
          </h1>

          <p className="mt-8 text-lg lg:text-xl text-muted-foreground max-w-2xl leading-relaxed">
            Strong, stylish & modern iron fabrication crafted with precision in Mukandpur, Baghpat — serving Delhi NCR, Dwarka, Najafgarh and beyond.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a href={telHref(SITE.phones[0])} className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-gold text-ink font-semibold shadow-gold hover:scale-105 transition-transform">
              <Phone className="w-4 h-4" /> Call Now
            </a>
            <a href={waHref()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-gold/40 text-foreground hover:bg-gold/10 hover:border-gold transition-all backdrop-blur-sm">
              <MessageCircle className="w-4 h-4 text-gold" /> WhatsApp Now
            </a>
            <a href="#contact" className="group inline-flex items-center gap-2 px-7 py-4 rounded-full border border-border text-foreground hover:border-gold/60 transition-all">
              Get Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          <div className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
            {[
              ["10+", "Years Experience"],
              ["500+", "Projects Done"],
              ["100%", "Custom Designs"],
              ["24/7", "Quick Support"],
            ].map(([n, l]) => (
              <div key={l} className="border-l border-gold/30 pl-4">
                <div className="font-display text-3xl text-gradient-gold">{n}</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground mt-1">{l}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-xs uppercase tracking-[0.4em] text-muted-foreground"
      >
        Scroll to explore
      </motion.div>
    </section>
  );
}
