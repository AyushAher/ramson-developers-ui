import { ContactUs } from "./ContactUs";
import { Footer } from "./Footer";
import { HeroSection } from "./HeroSection";
import { Navbar } from "./Navbar";
import { WhatWeDo } from "./WhatWeDo";

export default function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <WhatWeDo />
      <ContactUs />
      <Footer />
    </>
  );
}
