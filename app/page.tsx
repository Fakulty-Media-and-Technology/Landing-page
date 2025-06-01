import AdvantageSection from "@/screens/Home/AdvantageSection";
import DiscoverySection from "@/screens/Home/DiscoverySection";
import HeroSection from "@/screens/Home/HeroSection";
import LaunchSection from "@/screens/Home/LaunchSection";
import React from "react";

<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-LLG8BVLBV9"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());

  gtag('config', 'G-LLG8BVLBV9');
</script>

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
