import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";
import { waHref } from "@/lib/site";
export function FloatingWhatsApp() {
  return (
    <motion.a
      href={waHref()}
      target="_blank"
      rel="noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.2, type: "spring" }}
      className="fixed bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-gradient-gold flex items-center justify-center shadow-gold hover:scale-110 transition-transform group"
      aria-label="Chat on WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-gold/40 animate-ping" />
      <MessageCircle className="w-6 h-6 text-ink relative" />
    </motion.a>
  );
}
