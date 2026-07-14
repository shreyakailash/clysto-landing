import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "About — Clysto",
  description: "Clysto is a growth studio for early-stage startups.",
};

export default function AboutPage() {
  return (
    <main className="bg-[#f9f8f3] min-h-screen">
      <Navbar />
      <section className="max-w-[1280px] mx-auto px-5 md:px-10 pt-28 md:pt-40 pb-24 flex flex-col gap-6 max-w-[700px]">
        <p className="font-montserrat font-normal text-[14px] text-[#00917d] lowercase tracking-widest">
          about
        </p>
        <h1 className="font-montserrat font-light text-[clamp(28px,3.5vw,48px)] text-[#3c3831] lowercase leading-[1.4] tracking-[2px]">
          we're building the bridge between ambition and execution.
        </h1>
        <p className="font-newsreader text-[18px] text-[rgba(60,56,49,0.7)] leading-[1.8]">
          More details coming soon.
        </p>
      </section>
      <Footer />
    </main>
  );
}
