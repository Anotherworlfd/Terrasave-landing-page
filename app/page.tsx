import Hero from "./sections/hero";
import About from "./sections/about";
import Services from "./sections/services";
import HowItWorks from "./sections/how-it-works";
import Capabilities from "./sections/capabilities";
import WhyUs from "./sections/why-us";
import Testimonials from "./sections/testimonials";
import CtaBand from "./sections/cta-band";
import LeadForm from "./sections/lead-form";
import Footer from "./sections/footer";

export default function Home() {
  return (
    <>
      <main id="top" className="overflow-x-hidden">
        <Hero />
        <About />
        <Services />
        <HowItWorks />
        <Capabilities />
        <WhyUs />
        <Testimonials />
        <CtaBand />
        <LeadForm />
        <Footer />
      </main>
    </>
  );
}