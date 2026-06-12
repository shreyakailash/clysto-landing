import { Card, CardContent } from "@/components/ui/card";

const steps = [
  {
    number: "01",
    title: "diagnose",
    description: (
      <>
        A 2-week deep dive into your metrics, product, and market perception to
        find the
        <br />
        real friction point.
      </>
    ),
  },
  {
    number: "02",
    title: "align",
    description:
      "Ensuring product and narrative are telling the same story to the same audience.",
  },
  {
    number: "03",
    title: "execute",
    description:
      "Hands-on implementation of the strategy. We don't just write PDFs; we ship.",
  },
  {
    number: "04",
    title: "measure",
    description: (
      <>
        Closing the loop with data to ensure the new foundation is actually
        driving
        <br />
        growth.
      </>
    ),
  },
];

export const EngagementProcessSection = (): JSX.Element => {
  return (
    <section className="row-[5_/_6] col-[1_/_2] w-full bg-[#f9f8f3] px-7 py-0 sm:px-10">
      <div className="flex w-full flex-col items-start gap-[18px]">
        <header className="w-full">
          <h2 className="[font-family:'Montserrat',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#00917d]">
            how we work
          </h2>
        </header>
        <Card className="w-full max-w-2xl border-0 bg-transparent shadow-none rounded-none">
          <CardContent className="p-0">
            <ol className="flex w-full flex-col gap-0">
              {steps.map((step, index) => (
                <li
                  key={step.number}
                  className={`flex w-full items-start gap-4 py-0 pb-8 sm:gap-8 ${
                    index !== steps.length - 1
                      ? "border-b border-[#3c38311a]"
                      : ""
                  }`}
                >
                  <div className="min-w-[64px] sm:min-w-[88px]">
                    <span className="[font-family:'Montserrat',Helvetica] mt-[-1.00px] block text-[40px] font-normal leading-none tracking-[0] text-[#00917d] sm:text-7xl sm:leading-[72px]">
                      {step.number}
                    </span>
                  </div>
                  <article className="flex min-w-0 flex-1 flex-col items-start gap-2 pt-1 sm:pt-0">
                    <h3 className="[font-family:'Montserrat',Helvetica] mt-[-1.00px] text-base font-normal leading-6 tracking-[0] text-[#3c3831]">
                      {step.title}
                    </h3>
                    <p className="[font-family:'Newsreader',Helvetica] mt-[-1.00px] text-sm font-normal leading-5 tracking-[0] text-[#3c383199] sm:text-base sm:leading-6">
                      {step.description}
                    </p>
                  </article>
                </li>
              ))}
            </ol>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};
