import { useState } from "react";
import { motion } from "framer-motion";
import { Phone, MessageCircle, MapPin, Mail, Send } from "lucide-react";
import { z } from "zod";
import { SITE, telHref, waHref } from "@/lib/site";
import { toast } from "sonner";

const schema = z.object({
  name: z.string().trim().min(2, "Name too short").max(80),
  phone: z.string().trim().min(7, "Invalid phone").max(20),
  message: z.string().trim().min(5, "Tell us about your project").max(800),
});

export function Contact() {
  const [form, setForm] = useState({ name: "", phone: "", message: "" });
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const res = schema.safeParse(form);
    if (!res.success) {
      toast.error(res.error.issues[0].message);
      return;
    }
    const msg = `Hi S.S TRADES,%0AName: ${encodeURIComponent(form.name)}%0APhone: ${encodeURIComponent(form.phone)}%0A%0A${encodeURIComponent(form.message)}`;
    window.open(`https://wa.me/${SITE.whatsapp}?text=${msg}`, "_blank");
    toast.success("Opening WhatsApp...");
  };
  return (
    <section id="contact" className="site-section relative">
      <div className="site-shell-wide px-4 lg:px-8">
        <div className="text-center mb-16">
          <span className="section-kicker">Get In Touch</span>
          <h2 className="mt-6 font-display text-4xl lg:text-6xl font-bold">
            Request A <span className="text-gradient-gold">Free Quote</span>
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto">Send us your requirements and we'll respond within hours.</p>
        </div>

        <div className="grid lg:grid-cols-[minmax(20rem,0.86fr)_minmax(0,1.14fr)] gap-6 lg:gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            {SITE.phones.map((p) => (
              <a key={p} href={telHref(p)} className="site-panel flex items-center gap-4 p-5 rounded-[1.5rem] hover:border-gold/50 hover:bg-gold/5 transition-all group">
                <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center shadow-gold">
                  <Phone className="w-5 h-5 text-ink" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Call Now</div>
                  <div className="font-display text-xl text-foreground">+91 {p}</div>
                </div>
              </a>
            ))}
            <a href={waHref()} target="_blank" rel="noreferrer" className="site-panel flex items-center gap-4 p-5 rounded-[1.5rem] hover:border-gold/50 hover:bg-gold/5 transition-all">
              <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center shadow-gold">
                <MessageCircle className="w-5 h-5 text-ink" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
                <div className="font-display text-xl text-foreground">Quick Chat</div>
              </div>
            </a>
            <div className="site-panel flex items-start gap-4 p-5 rounded-[1.5rem]">
              <div className="w-12 h-12 rounded-lg bg-gradient-gold flex items-center justify-center shadow-gold shrink-0">
                <MapPin className="w-5 h-5 text-ink" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Workshop</div>
                <div className="text-foreground leading-relaxed">{SITE.address}</div>
              </div>
            </div>
            <div className="rounded-[1.75rem] overflow-hidden border border-border bg-white/70 shadow-card h-56">
              <iframe
                title="S.S TRADES location"
                src={`https://www.google.com/maps?q=${SITE.mapsQuery}&output=embed`}
                className="w-full h-full grayscale-[0.4] contrast-110"
                loading="lazy"
              />
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={onSubmit}
            className="site-panel p-8 lg:p-10 rounded-[2rem] shadow-elegant space-y-5"
          >
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Your Name</label>
              <input
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="mt-2 w-full bg-background/50 border border-border rounded-lg px-4 py-3.5 text-foreground focus:outline-none focus:border-gold transition-colors"
                placeholder="John Doe"
                maxLength={80}
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Phone Number</label>
              <input
                value={form.phone}
                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                className="mt-2 w-full bg-background/50 border border-border rounded-lg px-4 py-3.5 text-foreground focus:outline-none focus:border-gold transition-colors"
                placeholder="+91 98xxxxxxxx"
                maxLength={20}
              />
            </div>
            <div>
              <label className="text-xs uppercase tracking-wider text-muted-foreground">Project Details</label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                rows={5}
                className="mt-2 w-full bg-background/50 border border-border rounded-lg px-4 py-3.5 text-foreground focus:outline-none focus:border-gold transition-colors resize-none"
                placeholder="Tell us about the gate, railing or fabrication work you need..."
                maxLength={800}
              />
            </div>
            <button type="submit" className="w-full inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-gradient-gold text-ink font-semibold shadow-gold hover:scale-[1.02] transition-transform">
              <Send className="w-4 h-4" /> Send via WhatsApp
            </button>
            <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1.5">
              <Mail className="w-3 h-3" /> Or call us directly — we respond fast.
            </p>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
