import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { About } from "@/components/site/About";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { WhyUs } from "@/components/site/WhyUs";
import { Testimonials } from "@/components/site/Testimonials";
import { ServiceAreas } from "@/components/site/ServiceAreas";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { FloatingWhatsApp } from "@/components/site/FloatingWhatsApp";
import { Loader } from "@/components/site/Loader";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Loader />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Portfolio />
        <WhyUs />
        <Testimonials />
        <ServiceAreas />
        <Contact />
      </main>
      <Footer />
      <FloatingWhatsApp />
      <Toaster theme="dark" />
    </div>
  );
}
