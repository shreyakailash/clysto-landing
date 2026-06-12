import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const footerMeta = ["© 2026 CLYSTO GROWTH STUDIO", "CLYSTO.CO@GMAIL.COM"];

const socialLinks = ["LINKEDIN", "INSTAGRAM"];

export const GlobalFooterSection = (): JSX.Element => {
  return (
    <footer className="row-[7_/_8] col-[1_/_2] w-full border border-solid border-black bg-[#232323] px-6 py-6 sm:px-10 sm:py-7">
      <Card className="mx-auto w-full max-w-[1200px] border-0 bg-transparent shadow-none">
        <CardContent className="flex min-h-[135px] flex-col items-center justify-between gap-6 p-0 md:flex-row md:items-center">
          <div className="flex shrink-0 items-center justify-center">
            <img
              className="h-[96px] w-[96px] sm:h-[110px] sm:w-[110px] md:h-[135px] md:w-[135px]"
              alt="Clysto"
              src="/figmaAssets/clysto--2--1.svg"
            />
          </div>
          <nav
            aria-label="Footer information and social links"
            className="flex flex-col items-center justify-center gap-4 md:flex-row md:items-center md:gap-6"
          >
            {footerMeta.map((item) => (
              <p
                key={item}
                className="[font-family:'Montserrat',Helvetica] text-center text-[11px] font-normal leading-[16.5px] tracking-[1.10px] text-[#e6e2e080] md:text-left whitespace-nowrap"
              >
                {item}
              </p>
            ))}

            <div className="flex items-center gap-4">
              {socialLinks.map((item) => (
                <Button
                  key={item}
                  variant="ghost"
                  className="h-auto p-0 hover:bg-transparent"
                >
                  <span className="[font-family:'Montserrat',Helvetica] text-[11px] font-normal leading-[16.5px] tracking-[1.10px] text-[#e6e2e080] whitespace-nowrap">
                    {item}
                  </span>
                </Button>
              ))}
            </div>
          </nav>
        </CardContent>
      </Card>
    </footer>
  );
};
