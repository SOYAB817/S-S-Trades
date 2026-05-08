import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { SITE, telHref } from "@/lib/site";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#services", label: "Services" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "#why", label: "Why Us" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-background/72 backdrop-blur-2xl border-b border-border/70 shadow-[0_10px_40px_-26px_rgba(0,0,0,0.35)]" : "bg-transparent"
      }`}
    >
      <div className="site-shell-wide flex items-center justify-between h-20 px-4 lg:px-8">
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold transition-transform duration-500 group-hover:scale-105">
            <span className="font-display text-ink text-lg font-bold">S</span>
          </div>
          <div className="leading-tight">
            <div className="font-display text-lg tracking-wide text-foreground">S.S TRADES</div>
            <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Iron Fabrication</div>
          </div>
        </a>
        <nav className="hidden lg:flex items-center gap-3 rounded-full border border-border/80 bg-white/65 px-4 py-2 shadow-[0_20px_40px_-30px_rgba(0,0,0,0.35)] backdrop-blur-xl">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href={telHref(SITE.phones[0])}
          className="hidden lg:inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-gold text-ink font-semibold text-sm shadow-gold hover:scale-105 transition-transform"
        >
          <Phone className="w-4 h-4" /> Call Now
        </a>
        <button onClick={() => setOpen(!open)} className="lg:hidden text-foreground p-2">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="lg:hidden border-t border-border/80 bg-background/95 backdrop-blur-2xl">
          <div className="site-shell px-4 py-6 flex flex-col gap-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="rounded-2xl border border-border/70 bg-white/65 px-4 py-3 text-base text-foreground/80 hover:text-gold">
                {l.label}
              </a>
            ))}
            <a href={telHref(SITE.phones[0])} className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-gradient-gold text-ink font-semibold">
              <Phone className="w-4 h-4" /> Call Now
            </a>
          </div>
        </motion.div>
      )}
    </motion.header>
  );
}
