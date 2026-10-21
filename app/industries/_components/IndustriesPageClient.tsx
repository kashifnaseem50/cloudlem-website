"use client";

import IndustriesHero from "./IndustriesHero";
import IndustryExplorer from "./IndustryExplorer";
import IndustryDetails from "./IndustryDetails";
import Capabilities from "./Capabilities";
import HowWeWork from "./HowWeWork";
import WhyCloudlem from "./WhyCloudlem";
import IndustriesFAQ from "./IndustriesFAQ";
import IndustriesCTA from "./IndustriesCTA";

export default function IndustriesPageClient() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#FBF9FE]">
      <IndustriesHero />
      <IndustryExplorer />
      <IndustryDetails />
      <Capabilities />
      <IndustriesFAQ />
      <IndustriesCTA />
    </main>
  );
}
