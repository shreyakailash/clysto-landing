import { Button } from "@/components/ui/button";
import { EngagementProcessSection } from "./sections/EngagementProcessSection";
import { GlobalFooterSection } from "./sections/GlobalFooterSection";
import { GrowthClarityHeroSection } from "./sections/GrowthClarityHeroSection";
import { GrowthServicesOverviewSection } from "./sections/GrowthServicesOverviewSection";
import { OpportunityCTASection } from "./sections/OpportunityCTASection";
import { ProblemDiscoveryProvocationSection } from "./sections/ProblemDiscoveryProvocationSection";

const sectionOrder = [
  {
    id: "growth-clarity-hero",
    component: <GrowthClarityHeroSection />,
  },
  {
    id: "problem-discovery-provocation",
    component: <ProblemDiscoveryProvocationSection />,
  },
  {
    id: "growth-services-overview",
    component: <GrowthServicesOverviewSection />,
  },
  {
    id: "engagement-process",
    component: <EngagementProcessSection />,
  },
  {
    id: "opportunity-cta",
    component: <OpportunityCTASection />,
  },
  {
    id: "global-footer",
    component: <GlobalFooterSection />,
  },
];

export const HtmlBody = (): JSX.Element => {
  return (
    <main className="w-full bg-[#f9f8f3]">
      <header className="w-full border-b border-[#e8e5dd] bg-[#f9f8f3]">
        <div className="mx-auto flex h-28 w-full max-w-[1440px] items-center justify-between px-4 sm:px-6 lg:px-[42px]">
          <img
            className="h-auto w-[140px] sm:w-[180px] lg:w-[227.31px]"
            alt="Group"
            src="/figmaAssets/group-1.png"
          />
          <Button
            variant="outline"
            className="h-auto rounded-md border-2 border-solid border-[#00917d] bg-transparent px-4 py-3 [font-family:'Montserrat',Helvetica] text-[10px] font-normal uppercase tracking-[2.40px] text-[#3c3831] hover:bg-[#00917d]/5 sm:px-6 sm:text-xs lg:min-w-[232px]"
          >
            start conversation
          </Button>
        </div>
      </header>
      <div className="flex flex-col">
        {sectionOrder.map((section) => (
          <section key={section.id} className="relative w-full">
            {section.component}
          </section>
        ))}
      </div>
    </main>
  );
};
