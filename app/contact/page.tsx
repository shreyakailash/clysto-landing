"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";

const tabs = [
  {
    id: "grow",
    label: "grow your brand",
    email: "inquiries@clysto.net",
    placeholder: "Tell us about yourself, and we'll help you fix your loop",
  },
  {
    id: "partnership",
    label: "partnership",
    email: "partnerships@clysto.net",
    placeholder: "Tell us about your business and what a partnership could look like",
  },
  {
    id: "general",
    label: "general queries",
    email: "hello@clysto.net",
    placeholder: "What's on your mind? We'd love to hear from you",
  },
];

type Status = "idle" | "loading" | "success" | "error";

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("grow");
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");

  const currentTab = tabs.find((t) => t.id === activeTab)!;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          category: currentTab.label,
          targetEmail: currentTab.email,
        }),
      });
      setStatus(res.ok ? "success" : "error");
    } catch {
      setStatus("error");
    }
  };

  const inputClass =
    "w-full bg-transparent border-0 border-b border-[rgba(60,56,49,0.18)] focus:border-[#00917d] outline-none py-3 font-newsreader text-[17px] text-[#3c3831] transition-colors duration-300 placeholder:text-[rgba(60,56,49,0.28)]";

  return (
    <main className="bg-[#f9f8f3] min-h-screen flex flex-col">
      <Navbar />

      <section className="flex-1 max-w-[1280px] w-full mx-auto px-5 md:px-10 pt-28 md:pt-36 pb-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-16 lg:gap-24 items-start">

          {/* Left — manifesto */}
          <motion.div
            className="lg:col-span-2 lg:sticky lg:top-24"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="font-montserrat font-normal text-[13px] text-[#00917d] lowercase tracking-widest mb-6">
              contact us
            </p>
            <h1 className="font-montserrat font-light text-[clamp(26px,3vw,46px)] text-[#3c3831] lowercase leading-[1.35] tracking-[1.5px]">
              let's build something together
            </h1>
            <p className="mt-6 font-newsreader text-[17px] text-[rgba(60,56,49,0.6)] leading-[1.8]">
              Whether you're scaling a brand, exploring a partnership, or simply curious — we're listening.
            </p>
            <div className="mt-10 flex flex-col gap-2">
              <span className="font-montserrat text-[11px] uppercase tracking-[3px] text-[rgba(60,56,49,0.35)]">
                reach us directly
              </span>
              <a
                href="mailto:hello@clysto.net"
                className="font-newsreader text-[16px] text-[#3c3831] hover:text-[#00917d] transition-colors duration-300"
              >
                hello@clysto.net
              </a>
            </div>
          </motion.div>

          {/* Right — form */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, ease: [0.16, 1, 0.3, 1], delay: 0.12 }}
          >
            <AnimatePresence mode="wait">
              {status === "success" ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="py-16 flex flex-col gap-5"
                >
                  <p className="font-montserrat font-light text-[clamp(28px,3vw,42px)] text-[#3c3831] lowercase tracking-[2px]">
                    thank you.
                  </p>
                  <p className="font-newsreader text-[17px] text-[rgba(60,56,49,0.6)] leading-[1.8]">
                    we've received your message. response time is typically 24–48 hours.
                  </p>
                </motion.div>
              ) : (
                <motion.div key="form">
                  {/* Tab switcher */}
                  <div className="flex flex-wrap gap-0 border-b border-[rgba(60,56,49,0.12)] mb-10">
                    {tabs.map((tab) => {
                      const active = activeTab === tab.id;
                      return (
                        <button
                          key={tab.id}
                          onClick={() => {
                            setActiveTab(tab.id);
                            setForm((f) => ({ ...f, message: "" }));
                          }}
                          className={`font-montserrat text-[12px] lowercase tracking-widest pb-3 pr-7 relative transition-colors duration-300 ${
                            active
                              ? "text-[#00917d]"
                              : "text-[rgba(60,56,49,0.4)] hover:text-[#3c3831]"
                          }`}
                        >
                          {tab.label}
                          <span
                            className={`absolute bottom-0 left-0 h-px bg-[#00917d] transition-all duration-300 ease-out ${
                              active ? "right-7 opacity-100" : "right-7 opacity-0 scale-x-0"
                            }`}
                          />
                        </button>
                      );
                    })}
                  </div>

                  {/* Form */}
                  <form onSubmit={handleSubmit} className="flex flex-col gap-9">
                    <div>
                      <label className="font-montserrat text-[10px] uppercase tracking-[3px] text-[rgba(60,56,49,0.4)] block mb-2">
                        name
                      </label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="font-montserrat text-[10px] uppercase tracking-[3px] text-[rgba(60,56,49,0.4)] block mb-2">
                        email
                      </label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                        className={inputClass}
                      />
                    </div>

                    <div>
                      <label className="font-montserrat text-[10px] uppercase tracking-[3px] text-[rgba(60,56,49,0.4)] block mb-2">
                        message
                      </label>
                      <AnimatePresence mode="wait">
                        <motion.textarea
                          key={activeTab}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.25 }}
                          required
                          rows={5}
                          value={form.message}
                          onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                          placeholder={currentTab.placeholder}
                          className={`${inputClass} resize-none`}
                        />
                      </AnimatePresence>
                    </div>

                    {status === "error" && (
                      <p className="font-montserrat text-[12px] lowercase tracking-wide text-red-500">
                        something went wrong. please try again or email us at hello@clysto.net
                      </p>
                    )}

                    <div>
                      <button
                        type="submit"
                        disabled={status === "loading"}
                        className="group relative inline-flex items-center justify-center w-[156px] h-[50px] overflow-hidden bg-[#00917d] text-white font-montserrat font-normal text-[13px] lowercase tracking-[2.5px] rounded-[4px] transition-all duration-300 hover:bg-[#007a6a] hover:shadow-[0_12px_30px_-8px_rgba(0,145,125,0.5)] disabled:opacity-50 disabled:cursor-not-allowed"
                      >
                        <span className="relative z-10">
                          {status === "loading" ? "sending..." : "send"}
                        </span>
                        <span className="absolute inset-0 overflow-hidden rounded-[4px]" aria-hidden="true">
                          <span className="absolute top-0 -left-full h-full w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-transform duration-700 ease-out group-hover:translate-x-[420%]" />
                        </span>
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
