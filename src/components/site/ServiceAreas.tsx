import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
const areas = ["Delhi NCR", "Baghpat", "Shamli", "Muzaffarnagar", "Ghaziabad", "Delhi"];
export function ServiceAreas() {
  return (
    <section className="site-section relative overflow-hidden">
      <div className="site-shell px-4 lg:px-8">
        <div className="text-center mb-14">
          <span className="section-kicker">Service Areas</span>
          <h2 className="mt-6 font-display text-4xl lg:text-6xl font-bold">
            Serving <span className="text-gradient-gold">Delhi NCR</span> & Beyond
          </h2>
        </div>
        <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
          {areas.map((a, i) => (
            <motion.div
              key={a}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              className="pill-chip group px-5 py-3 sm:px-6 hover:border-gold hover:bg-gold/5 transition-all"
            >
              <MapPin className="w-4 h-4 text-gold" />
              <span className="font-medium">{a}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
