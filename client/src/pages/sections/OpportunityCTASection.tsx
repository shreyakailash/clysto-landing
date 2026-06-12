import { Button } from "@/components/ui/button";

const ctaContent = {
  eyebrow: "we work with a small number of startups at a time.",
  lineStart: "if the fit is ",
  emphasis: "right",
  lineEnd: ", let's find out.",
  buttonLabel: "get in touch",
};

export const OpportunityCTASection = (): JSX.Element => {
  return (
    <section className="row-[6_/_7] col-[1_/_2] w-full self-start bg-[#232323] border-b-[6px] border-[#00917d]">
      <div className="relative w-full border-b border-[#00917d4c]">
        <div className="mx-auto flex min-h-[360px] w-full max-w-[1280px] flex-col items-center justify-center px-6 py-20 text-center sm:px-10">
          <div className="flex w-full max-w-[1200px] flex-col items-center gap-6">
            <header className="flex w-full max-w-screen-md flex-col items-center">
              <p className="[font-family:'Montserrat',Helvetica] text-base font-normal leading-5 tracking-[0] text-[#e9e1d7]">
                {ctaContent.eyebrow}
              </p>
            </header>
            <p className="[font-family:'Newsreader',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#e6e2e0]">
              <span>{ctaContent.lineStart}</span>
              <span className="italic text-[#00917d]">
                {ctaContent.emphasis}
              </span>
              <span>{ctaContent.lineEnd}</span>
            </p>
            <Button
              type="button"
              className="h-auto rounded-md bg-[#00917d] px-12 py-5 [font-family:'Montserrat',Helvetica] text-base font-normal uppercase leading-3 tracking-[2.40px] text-white hover:bg-[#007f6e]"
            >
              {ctaContent.buttonLabel}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
