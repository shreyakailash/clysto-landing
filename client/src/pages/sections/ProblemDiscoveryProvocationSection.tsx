import { Card, CardContent } from "@/components/ui/card";

const lines = [
  "the real problem is almost never the one you came in with.",
  "we help you find it out.",
];

export const ProblemDiscoveryProvocationSection = (): JSX.Element => {
  return (
    <section
      className="row-[3_/_4] col-[1_/_2] w-full bg-[#232323] py-[42px] shadow-[0px_-19px_33.3px_#00000040] border-b-[6px] border-[#00917d]"
      aria-labelledby="problem-discovery-provocation-heading"
    >
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-center px-6 sm:px-10 md:px-16 lg:px-24 xl:px-[120px]">
        <Card className="w-full border-0 bg-transparent shadow-none">
          <CardContent className="flex min-h-[72px] flex-col items-center justify-center p-0 text-center">
            <h2 id="problem-discovery-provocation-heading" className="sr-only">
              Problem discovery provocation
            </h2>
            <p className="[font-family:'Montserrat',Helvetica] text-center text-[11px] font-light leading-[1.5] tracking-[0] text-[#e9e1d7] sm:text-xs md:text-sm">
              {lines[0]}
              <br />
              <span className="font-semibold italic">{lines[1]}</span>
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
