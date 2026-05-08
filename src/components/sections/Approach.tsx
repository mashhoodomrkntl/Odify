"use client";

import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import ScrollReveal from "@/components/ScrollReveal";

const steps = [
  { num: "01", title: "Understand", desc: "We begin by understanding your business, your obligations, and your expectations. No assumptions." },
  { num: "02", title: "Structure", desc: "We build a tailored engagement plan covering scope, timelines, deliverables, and review checkpoints." },
  { num: "03", title: "Execute", desc: "Our team delivers with discipline — every file documented, every step reviewed, every standard upheld." },
  { num: "04", title: "Report", desc: "You receive clear, audit-ready outputs and ongoing communication. No surprises. No delays." },
  { num: "05", title: "Improve", desc: "We don't just deliver — we identify opportunities to strengthen your financial operations going forward." },
];

export default function Approach() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  const scaleY = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <section id="approach" className="bg-brand-black relative" ref={containerRef}>
      {/* Background glow contained to prevent overflow */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 left-0 w-full h-[500px] bg-brand-red/[0.03] blur-[120px]" />
      </div>

      <div className="container-custom relative z-10 px-6 md:px-12">
        {/* Sticky Header Wrapper */}
        <div className="sticky top-0 z-30 pt-24 pb-12 bg-brand-black/80 backdrop-blur-md">
          <ScrollReveal>
            <div className="text-center max-w-4xl mx-auto">
              <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-6 block">The Odify Methodology</span>
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight uppercase">
                Trust the Process. <br />
                Trust Odify.
              </h2>
            </div>
          </ScrollReveal>
        </div>

        <div className="relative mt-12 pb-32">
          {/* Static Background Line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-white/5 -translate-x-1/2" />

          {/* Dynamic Animated Line */}
          <motion.div
            style={{ scaleY, originY: 0 }}
            className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-brand-red -translate-x-1/2 z-20 shadow-[0_0:15px_rgba(217,4,41,0.5)]"
          />

          <div className="space-y-24 md:space-y-0">
            {steps.map((step, i) => (
              <div key={step.num} className="relative">
                <ScrollReveal delay={i * 0.1}>
                  <div className={`md:flex items-center gap-12 md:mb-32 ${i % 2 === 0 ? "" : "md:flex-row-reverse"}`}>
                    <div className={`flex-1 text-center ${i % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                      <div className={`group relative bg-brand-dark/40 backdrop-blur-sm border border-white/5 p-8 md:p-10 transition-all duration-500 hover:border-brand-red/30 mx-auto md:mx-0 ${i % 2 === 0 ? "md:ml-auto" : "md:mr-auto"} max-w-md text-left`}>
                        <span className="text-brand-red font-black text-[10px] tracking-[0.3em] uppercase">Phase {step.num}</span>
                        <h3 className="text-2xl font-bold text-white mt-4 mb-4 uppercase tracking-widest group-hover:text-brand-red transition-colors">{step.title}</h3>
                        <p className="text-brand-accent/40 leading-relaxed text-sm font-medium">{step.desc}</p>

                        {/* Corner accent */}
                        <div className={`absolute bottom-0 ${i % 2 === 0 ? "right-0" : "left-0"} w-4 h-4 border-b-2 ${i % 2 === 0 ? "border-r-2" : "border-l-2"} border-brand-red/20 group-hover:border-brand-red group-hover:w-8 group-hover:h-8 transition-all duration-500`} />
                      </div>
                    </div>

                    {/* Center Node */}
                    <div className="hidden md:flex items-center justify-center w-12 h-12 relative z-30 shrink-0">
                      <div className="w-3 h-3 rounded-full bg-brand-black border border-white/20 group-hover:border-brand-red transition-colors duration-500 z-10" />
                      <div className="absolute inset-0 rounded-full bg-brand-red/10 animate-pulse hidden group-hover:block" />
                    </div>

                    <div className="flex-1" />
                  </div>
                </ScrollReveal>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}




// "use client";

// import { motion, useScroll, useTransform } from "framer-motion";
// import { useRef } from "react";
// import ScrollReveal from "@/components/ScrollReveal";

// const steps = [
//   { 
//     num: "01", 
//     title: "Understand", 
//     desc: "We begin by understanding your business, your obligations, and your expectations. No assumptions.",
//     color: "from-brand-red/20 to-transparent"
//   },
//   { 
//     num: "02", 
//     title: "Structure", 
//     desc: "We build a tailored engagement plan covering scope, timelines, deliverables, and review checkpoints.",
//     color: "from-brand-red/10 to-transparent"
//   },
//   { 
//     num: "03", 
//     title: "Execute", 
//     desc: "Our team delivers with discipline — every file documented, every step reviewed, every standard upheld.",
//     color: "from-brand-red/20 to-transparent"
//   },
//   { 
//     num: "04", 
//     title: "Report", 
//     desc: "You receive clear, audit-ready outputs and ongoing communication. No surprises. No delays.",
//     color: "from-brand-red/10 to-transparent"
//   },
//   { 
//     num: "05", 
//     title: "Improve", 
//     desc: "We don't just deliver — we identify opportunities to strengthen your financial operations going forward.",
//     color: "from-brand-red/20 to-transparent"
//   },
// ];

// export default function Approach() {
//   const containerRef = useRef<HTMLDivElement>(null);

//   return (
//     <section id="approach" className="bg-brand-black relative" ref={containerRef}>
//       {/* Background glow */}
//       <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(217,4,41,0.02)_0%,transparent_70%)] pointer-events-none" />

//       <div className="container-custom relative z-10 px-6 md:px-12">
//         {/* Sticky Header */}
//         <div className="sticky top-0 z-30 pt-24 pb-12 bg-brand-black/80 backdrop-blur-md">
//           <ScrollReveal>
//             <div className="text-left border-l-2 border-brand-red pl-8">
//               <span className="text-brand-red font-bold text-[10px] tracking-[0.5em] uppercase mb-4 block">The Odify Methodology</span>
//               <h2 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-[1.1] tracking-tight uppercase">
//                 Trust the Process. <br />
//                 Trust Odify.
//               </h2>
//             </div>
//           </ScrollReveal>
//         </div>

//         {/* Stacking Cards Container */}
//         <div className="space-y-[30vh] pb-[20vh] mt-12">
//           {steps.map((step, i) => (
//             <div 
//               key={step.num} 
//               className="sticky top-64 md:top-80"
//               style={{ paddingTop: `${i * 20}px` }} // Subtle offset for stacking
//             >
//               <motion.div
//                 initial={{ opacity: 0, y: 50 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 viewport={{ once: true, margin: "-100px" }}
//                 transition={{ duration: 0.8, ease: "easeOut" }}
//                 className={`relative bg-brand-dark/60 backdrop-blur-xl border border-white/5 p-8 md:p-16 overflow-hidden group hover:border-brand-red/20 transition-colors duration-700 shadow-2xl`}
//               >
//                 {/* Decorative background gradient */}
//                 <div className={`absolute inset-0 bg-linear-to-br ${step.color} opacity-20 group-hover:opacity-40 transition-opacity duration-700`} />
                
//                 <div className="relative z-10 grid md:grid-cols-[120px_1fr] gap-8 md:gap-16 items-center">
//                   <div className="flex flex-col items-center md:items-start">
//                     <span className="text-7xl md:text-8xl font-black text-white/5 group-hover:text-brand-red/20 transition-colors duration-700 leading-none">
//                       {step.num}
//                     </span>
//                     <div className="w-12 h-[2px] bg-brand-red mt-4 group-hover:w-20 transition-all duration-700" />
//                   </div>

//                   <div>
//                     <h3 className="text-3xl md:text-4xl font-black text-white mb-6 uppercase tracking-widest group-hover:text-brand-red transition-colors duration-500">
//                       {step.title}
//                     </h3>
//                     <p className="text-brand-accent/50 text-lg md:text-xl leading-relaxed font-medium max-w-2xl">
//                       {step.desc}
//                     </p>
//                   </div>
//                 </div>

//                 {/* Corner Accents */}
//                 <div className="absolute top-0 right-0 w-24 h-24 bg-linear-to-bl from-brand-red/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
//                 <div className="absolute bottom-0 left-0 w-2 h-0 bg-brand-red group-hover:h-24 transition-all duration-700" />
//               </motion.div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }
