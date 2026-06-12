import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

const serviceCards = [
  {
    title: "positioning",
    description: (
      <>
Redefining who you serve and why you win. We move you from
        {" "}
        "commodity" to
        <br />
"category-of-one" through rigorous market analysis and
        narrative design.
      </>
),
    icon: {
      src: "/figmaAssets/icon-2.svg",
      alt: "Positioning icon",
      className: "h-[25px] w-[25px]",
    },
    className: "md:col-span-7",
    badges: ["Message Architecture", "Category Design"],
  },
  {
    title: "go-to-market",
    description: (
      <>
Engineered growth paths that actually scale. No hacks,
        <br />
just high-leverage distribution strategies mapped to your
        <br />
product&apos;s DNA.
      </>
),
    icon: {
      src: "/figmaAssets/icon-1.svg",
      alt: "Go-to-market icon",
      className: "h-[22.5px] w-[22.5px]",
    },
    className: "md:col-span-5",
  },
  {
    title: "product experience",
    description: (
      <>
Bridging the gap between promise and utility. We optimize user
        <br />
onboarding, friction points, and value realization cycles to drive
        <br />
retention.
      </>
),
    icon: {
      src: "/figmaAssets/icon-3.svg",
      alt: "Product experience icon",
      className: "h-[23.81px] w-[22.5px]",
    },
    className: "md:col-span-6 md:mt-8",
    emphasized: true,
    bullets: ["Retention Audits", "Onboarding Flows"],
  },
  {
    title: "content engine",
    description: (
      <>
Building authority through thought leadership. We help founders
        <br />
articulate their unique worldview to attract the right pipeline,
        <br />
automatically.
      </>
),
    icon: {
      src: "/figmaAssets/icon.svg",
      alt: "Content engine icon",
      className: "h-5 w-[22.5px]",
    },
    className: "md:col-span-6 md:mt-8",
  },
];

export const GrowthServicesOverviewSection = (): JSX.Element => {
  return (
    <section className="row-[4_/_5] col-[1_/_2] w-full bg-[#f9f8f3] px-6 py-12 md:px-10 md:py-16">
<div className="mx-auto flex w-full max-w-[1200px] flex-col items-start gap-12 md:gap-16">
<header className="flex w-full max-w-[800px] flex-col items-start gap-4">
<p className="[font-family:'Montserrat',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#00917d]">
what we do
          </p>
<h2 className="[font-family:'Newsreader',Helvetica] text-3xl font-normal italic leading-9 tracking-[0] text-[#3c3831]">
We start with the diagnosis. Everything else follows from that.
          </h2>
</header>
<div className="grid w-full grid-cols-1 gap-7 md:grid-cols-12 md:gap-8">
{serviceCards.map((card) => (
            <Card
              key={card.title}
              className=
            >
<CardContent className="flex h-full flex-col items-start gap-4 p-8 md:p-12">
<img
                  className={card.icon.className}
                  alt={card.icon.alt}
                  src={card.icon.src}
                />
<div className="w-full pt-2">
<h3 className="[font-family:'Montserrat',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#3c3831]">
{card.title}
                  </h3>
</div>
<div className="w-full">
<p className="[font-family:'Newsreader',Helvetica] text-base font-normal leading-6 tracking-[0] text-[#3c3831b2]">
{card.description}
                  </p>
</div>
{card.badges ? (
                  <div className="flex w-full flex-wrap items-start gap-2 pt-2">
{card.badges.map((badge) => (
                      <Badge
                        key={badge}
                        variant="outline"
                        className="rounded-xl border border-solid border-[#3c383133] bg-transparent px-3 py-1 [font-family:'Montserrat',Helvetica] text-[10px] font-normal leading-[15px] tracking-[0] text-[#3c3831]"
                      >
{badge}
                      </Badge>
))}
                  </div>
) : null}

                {card.bullets ? (
                  <ul className="flex w-full flex-col items-start gap-[7.5px] pt-2">
{card.bullets.map((bullet) => (
                      <li key={bullet} className="flex w-full items-center gap-2">
<span className="h-1 w-1 rounded-xl bg-[#00917d]" />
<span className="[font-family:'Montserrat',Helvetica] text-[11px] font-normal leading-[16.5px] tracking-[0] text-[#3c383199]">
{bullet}
                        </span>
</li>
))}
                  </ul>
) : null}
              </CardContent>
</Card>
))}
        </div>
</div>
</section>
);
};