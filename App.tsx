/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ArrowUpRight, Github, Instagram, Twitter } from "lucide-react";

export default function App() {
  const works = [
    { id: "01", title: "AESTHETIC", color: "bg-zinc-800" },
    { id: "02", title: "PRECISION", color: "bg-zinc-900" },
    { id: "03", title: "MOTION", color: "bg-white text-black" },
    { id: "04", title: "INTENT", color: "bg-zinc-700" },
  ];

  return (
    <div className="min-h-screen font-sans border-[1px] border-zinc-900 m-4 md:m-8">
      {/* Header */}
      <header className="p-8 md:p-12 border-b border-zinc-900 flex justify-between items-start">
        <div className="font-display text-2xl tracking-tighter uppercase leading-none">
          ST<br />DO
        </div>
        <nav className="flex flex-col gap-2 items-end">
          <span className="text-[10px] uppercase tracking-[0.2em] opacity-40 font-bold mb-2">Navigation</span>
          {["Work", "Studio", "Contact"].map((item) => (
            <a key={item} href="#" className="text-sm font-medium uppercase tracking-widest hover:text-zinc-400 transition-colors">
              {item}
            </a>
          ))}
        </nav>
      </header>

      {/* Hero Section */}
      <main>
        <section className="p-8 md:p-12 pt-20 md:pt-32 pb-24 border-b border-zinc-900 bg-black">
          <div className="mb-8 flex items-center gap-4 text-[10px] uppercase font-bold tracking-[0.3em] opacity-50">
            <div className="w-12 h-[1px] bg-white opacity-20" />
            Independent Creative Practice
          </div>
          <h1 className="font-display text-[22vw] md:text-[18vw] leading-[0.8] uppercase tracking-tighter italic skew-on-hover inline-block">
            MIND<br />SET.
          </h1>
          <div className="mt-16 flex flex-col md:flex-row justify-between gap-12">
            <p className="max-w-md text-xl md:text-2xl leading-relaxed font-light text-zinc-400">
              We design digital products and brands that speak through simplicity and perform with precision.
            </p>
            <button className="self-start md:self-end group flex items-center gap-6 border border-zinc-800 px-10 py-6 rounded-none hover:bg-white hover:text-black transition-all">
              <span className="uppercase font-bold tracking-[0.2em] text-xs">Start Inquiry</span>
              <ArrowUpRight className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </section>

        {/* Work Grid */}
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          {works.map((work) => (
            <div 
              key={work.id} 
              className={`group relative aspect-square p-8 flex flex-col justify-between border-b md:border-r border-zinc-900 transition-all ${work.color}`}
            >
              <div className="flex justify-between items-start">
                <span className="font-display text-4xl opacity-10 group-hover:opacity-100 transition-opacity">{work.id}</span>
                <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <div>
                <h3 className="font-display text-5xl uppercase tracking-tighter leading-none">{work.title}</h3>
                <p className="mt-2 text-[10px] uppercase tracking-widest opacity-50">View Case Study</p>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-1 bg-white scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </div>
          ))}
        </section>

        {/* Footer */}
        <footer className="p-8 md:p-12 flex flex-col md:flex-row justify-between items-center bg-black gap-12">
          <div className="flex gap-8 order-2 md:order-1">
            <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Twitter size={20} /></a>
            <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Instagram size={20} /></a>
            <a href="#" className="opacity-40 hover:opacity-100 transition-opacity"><Github size={20} /></a>
          </div>
          <div className="text-center md:text-right order-1 md:order-2">
            <div className="text-[10px] uppercase font-bold tracking-[0.3em] opacity-30 mb-2">&copy; 2026 Studio Minimal</div>
            <div className="text-xl font-display uppercase tracking-tighter">Based in Tokyo / JP</div>
          </div>
        </footer>
      </main>
    </div>
  );
}
