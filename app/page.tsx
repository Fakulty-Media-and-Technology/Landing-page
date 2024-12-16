import AdvantageSection from "@/screens/Home/AdvantageSection";
import DiscoverySection from "@/screens/Home/DiscoverySection";
import HeroSection from "@/screens/Home/HeroSection";
import LaunchSection from "@/screens/Home/LaunchSection";
import React from "react";


export default function Home() {
  return (
    <React.Fragment>
      <HeroSection />
      <AdvantageSection />
      <LaunchSection />
      <DiscoverySection />
    </React.Fragment>
  );
}
