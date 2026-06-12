import { Button } from "@/components/ui/button";

const heroContent = {
  title:
    "most startups don't have a growth problem. they have a clarity problem.",
  description:
    "Clysto is a growth studio for early-stage startups. We find what's actually holding you back — then fix it. Positioning, go-to-market, product experience, content.",
  cta: "book a call",
  eyebrow: "STRATEGY · GO-TO-MARKET · PRODUCT · CONTENT",
};

export const GrowthClarityHeroSection = (): JSX.Element => {
  return (
    <section className="row-[2_/_3] col-[1_/_2] w-full px-[30px] py-0 md:px-[50px]">
      <div className="mx-auto flex w-full max-w-[1200px] items-center py-8 md:min-h-[532px] md:py-0">
        <div className="flex w-full max-w-[800px] flex-col items-start gap-8 md:gap-[31px]">
          <header className="w-full">
            <h1 className="[font-family:'Montserrat',Helvetica] font-light text-[#3c3831b5] text-[28px] leading-[1.45] tracking-[1.5px] sm:text-[36px] sm:leading-[1.5] md:text-5xl md:leading-[76px] md:tracking-[3.00px]">
              {heroContent.title}
            </h1>
          </header>
          <div className="w-full max-w-[576px]">
            <p className="[font-family:'Newsreader',Helvetica] text-[#3c3831] text-lg font-normal leading-[1.9] tracking-[0] sm:text-xl md:text-2xl md:leading-[41px]">
              {heroContent.description}
            </p>
          </div>
          <div className="flex w-full flex-col items-start gap-6 pt-2 md:pt-4">
            <Button
              type="button"
              className="h-auto min-h-[59px] rounded-md bg-[#00917d] px-8 py-4 [font-family:'Montserrat',Helvetica] text-base font-normal uppercase tracking-[2.40px] text-white hover:bg-[#007f6e] md:w-[232px]"
            >
              {heroContent.cta}
            </Button>
            <p className="[font-family:'Montserrat',Helvetica] text-[10px] font-normal leading-[15px] tracking-[2.00px] text-[#3c383180]">
              {heroContent.eyebrow}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
