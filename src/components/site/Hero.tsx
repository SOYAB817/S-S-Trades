import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, MessageCircle, Phone, Sparkles } from "lucide-react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import heroGate from "@/assets/hero-gate.jpg";
import portfolioGate from "@/assets/portfolio-gate1.jpg";
import welding from "@/assets/welding.jpg";
import { SITE, telHref, waHref } from "@/lib/site";

const stats = [
  ["10+", "Years Experience"],
  ["500+", "Projects Done"],
  ["100%", "Custom Designs"],
  ["24/7", "Quick Support"],
] as const;

const slides = [
  {
    image: heroGate,
    alt: "Premium luxury iron gate with gold accents",
    eyebrow: "Established Craftsmanship · Baghpat",
    heading: (
      <>
        Premium <span className="text-gradient-gold shimmer-text">Gate & Railing</span>
        <br className="hidden sm:block" />
        <span className="block">Fabrication Services</span>
      </>
    ),
    text:
      "Strong, stylish & modern iron fabrication crafted with precision in Mukandpur, Baghpat — serving Delhi NCR, Shamli, Muzaffarnagar, Ghaziabad, Delhi.",
  },
  {
    image: portfolioGate,
    alt: "Decorative villa gate fabrication project",
    eyebrow: "Luxury Fabrication · Signature Designs",
    heading: (
      <>
        Custom <span className="text-gradient-gold shimmer-text">Main Gates</span>
        <br className="hidden sm:block" />
        <span className="block">Built For Every Entrance</span>
      </>
    ),
    text:
      "From statement villa gates to elegant boundary work, every fabrication detail is designed for strength, finish and premium curb appeal.",
  },
  {
    image: welding,
    alt: "Expert welding and fabrication craftsmanship",
    eyebrow: "Precision Work · Trusted Finish",
    heading: (
      <>
        Modern <span className="text-gradient-gold shimmer-text">Iron Work</span>
        <br className="hidden sm:block" />
        <span className="block">Finished With Care</span>
      </>
    ),
    text:
      "Expert welding, staircase railings, shutters and custom metalwork delivered with disciplined workmanship and a refined final look.",
  },
] as const;

export function Hero() {
  return (
    <section id="home" className="hero-slider-section relative overflow-hidden pt-24 sm:pt-28">
      <div className="site-shell-wide relative px-4 lg:px-8">
        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          slidesPerView={1}
          loop
          speed={900}
          autoplay={{ delay: 4200, disableOnInteraction: false, pauseOnMouseEnter: true }}
          navigation={{
            prevEl: ".hero-swiper-prev",
            nextEl: ".hero-swiper-next",
          }}
          pagination={{ clickable: true, el: ".hero-swiper-pagination" }}
          className="hero-swiper"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="hero-slide relative min-h-[calc(100vh-9rem)] overflow-hidden rounded-[2rem] sm:rounded-[2.5rem]">
                <div className="absolute inset-0">
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    width={1920}
                    height={1080}
                    className="h-full w-full object-cover object-center"
                  />
                  <div className="hero-slide-overlay absolute inset-0" />
                  <div className="absolute inset-0 grain opacity-15" />
                </div>

                <div className="relative grid min-h-[calc(100vh-9rem)] items-end gap-8 px-5 py-10 sm:px-8 sm:py-12 lg:grid-cols-[minmax(0,1.1fr)_minmax(20rem,0.82fr)] lg:px-12 lg:py-14">
                  <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.15 }}
                    className="pb-4 lg:pb-8"
                  >
                    <div className="section-kicker mb-6 sm:mb-8">
                      <Sparkles className="w-3.5 h-3.5 text-gold" />
                      <span>{slide.eyebrow}</span>
                    </div>

                    <h1 className="section-title max-w-5xl text-foreground">{slide.heading}</h1>

                    <p className="section-lead mt-6 sm:mt-8">{slide.text}</p>

                    <div className="mt-8 sm:mt-10 flex flex-wrap gap-3 sm:gap-4">
                      <a
                        href={telHref(SITE.phones[0])}
                        className="group inline-flex items-center gap-2 px-7 py-4 rounded-full bg-gradient-gold text-ink font-semibold shadow-gold hover:scale-105 transition-transform"
                      >
                        <Phone className="w-4 h-4" /> Call Now
                      </a>
                      <a
                        href={waHref()}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 px-7 py-4 rounded-full border border-border bg-white/70 text-foreground hover:bg-gold/10 hover:border-gold transition-all backdrop-blur-sm"
                      >
                        <MessageCircle className="w-4 h-4 text-gold" /> WhatsApp Now
                      </a>
                      <a
                        href="#contact"
                        className="group inline-flex items-center gap-2 px-7 py-4 rounded-full border border-border bg-white/55 text-foreground hover:border-gold/60 hover:bg-white/75 transition-all"
                      >
                        Get Free Quote <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.25 }}
                    className="grid grid-cols-2 gap-4 sm:gap-5 lg:self-end lg:justify-self-end lg:w-full lg:max-w-[28rem]"
                  >
                    {stats.map(([n, l]) => (
                      <div key={l} className="site-panel rounded-[1.75rem] p-5 sm:p-6">
                        <div className="font-display text-3xl sm:text-4xl text-gradient-gold">{n}</div>
                        <div className="mt-2 text-[11px] sm:text-xs uppercase tracking-[0.26em] text-muted-foreground">{l}</div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="pointer-events-none absolute inset-x-4 bottom-6 z-20 flex items-end justify-between sm:inset-x-8 lg:inset-x-12">
          <div className="hero-swiper-controls pointer-events-auto hidden items-center gap-3 md:flex">
            <button type="button" className="hero-swiper-prev hero-swiper-button" aria-label="Previous slide">
              <ArrowLeft className="h-4 w-4" />
            </button>
            <button type="button" className="hero-swiper-next hero-swiper-button" aria-label="Next slide">
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>

          <div className="hero-swiper-pagination pointer-events-auto ml-auto" />
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="pointer-events-none absolute bottom-6 left-1/2 z-20 hidden -translate-x-1/2 text-[11px] uppercase tracking-[0.4em] text-muted-foreground lg:block"
        >
          Scroll to explore
        </motion.div>
      </div>
    </section>
  );
}
