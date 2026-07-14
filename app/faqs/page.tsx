import Navbar from "@/components/Navbar";

export const metadata = {
  title: "FAQs — Clysto",
  description: "Frequently asked questions about Clysto.",
};

export default function FAQsPage() {
  return (
    <main className="bg-[#f9f8f3] min-h-screen">
      <Navbar />
      <section className="max-w-[1280px] mx-auto px-5 md:px-10 pt-28 md:pt-40 pb-24 flex flex-col gap-6 max-w-[700px]">
        <p className="font-montserrat font-normal text-[14px] text-[#00917d] lowercase tracking-widest">
          faqs
        </p>
        <h1 className="font-montserrat font-light text-[clamp(28px,3.5vw,48px)] text-[#3c3831] lowercase leading-[1.4] tracking-[2px]">
          got questions? we've got answers.
        </h1>
        <p className="font-newsreader text-[18px] text-[rgba(60,56,49,0.7)] leading-[1.8]">
          Full FAQ content coming soon.
        </p>
      </section>
    </main>
  );
}
