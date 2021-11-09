import React, { useEffect } from "react";
import AOS from "aos";
import HomeSection from "../components/HomeSection";
import IntoSection from "../components/IntoSection";
import MintSection from "../components/MintSection";
import FAQSection from "../components/FAQSection";
import TeamSection from "../components/TeamSection";
import Footer from "../components/Footer";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <HomeSection />
      <IntoSection />
      <MintSection />
      <FAQSection />
      <TeamSection />
      <Footer />
    </>
  );
};

export default Home;
