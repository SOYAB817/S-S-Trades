import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
export function Loader() {
  const [show, setShow] = useState(true);
  useEffect(() => { const t = setTimeout(() => setShow(false), 1400); return () => clearTimeout(t); }, []);
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6 }}
          className="fixed inset-0 z-[100] bg-ink flex items-center justify-center"
        >
          <div className="text-center">
            <motion.div
              initial={{ scale: 0.6, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="w-20 h-20 mx-auto rounded-xl bg-gradient-gold flex items-center justify-center shadow-gold"
            >
              <span className="font-display text-ink text-4xl font-bold">S</span>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mt-6 font-display text-2xl tracking-[0.3em] text-gradient-gold shimmer-text"
            >
              S.S TRADES
            </motion.div>
            <div className="mt-4 text-[10px] uppercase tracking-[0.4em] text-muted-foreground">Forging Excellence</div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
