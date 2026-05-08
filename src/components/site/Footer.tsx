import { Instagram, Youtube, Facebook, Phone, MapPin } from "lucide-react";
import { SITE, telHref } from "@/lib/site";
export function Footer() {
  return (
    <footer className="border-t border-border/80 bg-[linear-gradient(180deg,rgba(255,248,236,0.94),rgba(247,241,228,0.98))] pt-20 pb-8">
      <div className="site-shell-wide px-4 lg:px-8 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-2xl bg-gradient-gold flex items-center justify-center shadow-gold">
              <span className="font-display text-ink text-xl font-bold">S</span>
            </div>
            <div>
              <div className="font-display text-2xl tracking-wide">S.S TRADES</div>
              <div className="text-[10px] uppercase tracking-[0.3em] text-gold">Premium Iron Fabrication</div>
            </div>
          </div>
          <p className="mt-5 text-muted-foreground max-w-md leading-relaxed">
            Crafting modern gates, railings and bespoke fabrication for Delhi NCR's most discerning homes and businesses. Founded by {SITE.owners.join(" & ")}.
          </p>
          <div className="flex gap-3 mt-6">
            {[{ Icon: Instagram, href: SITE.social.instagram }, { Icon: Youtube, href: SITE.social.youtube }, { Icon: Facebook, href: "#" }].map(({ Icon, href }, i) => (
              <a key={i} href={href} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-gold hover:text-gold transition-all">
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4 text-gold">Quick Links</h4>
          <ul className="space-y-2.5 text-sm text-muted-foreground">
            {[["About", "#about"], ["Services", "#services"], ["Portfolio", "#portfolio"], ["Why Us", "#why"], ["Contact", "#contact"]].map(([l, h]) => (
              <li key={l}><a href={h} className="hover:text-gold transition-colors">{l}</a></li>
            ))}
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg mb-4 text-gold">Reach Us</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            {SITE.phones.map((p) => (
              <li key={p}><a href={telHref(p)} className="flex items-center gap-2 hover:text-gold"><Phone className="w-3.5 h-3.5" /> +91 {p}</a></li>
            ))}
            <li className="flex items-start gap-2"><MapPin className="w-3.5 h-3.5 mt-1 shrink-0" /> {SITE.address}</li>
          </ul>
        </div>
      </div>
      <div className="gold-divider site-shell-wide my-10 opacity-40" />
      <div className="site-shell-wide px-4 lg:px-8 flex flex-col md:flex-row justify-between gap-3 text-xs text-muted-foreground">
        <div>© {new Date().getFullYear()} S.S TRADES. All rights reserved.</div>
        <div>Crafted with precision in Mukandpur, Baghpat.</div>
      </div>
    </footer>
  );
}
