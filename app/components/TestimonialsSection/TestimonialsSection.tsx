"use client";

import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";
import SvgComponent from "@/public/world_map";
import { TestimonialCard } from "./components/TestimonialCard";

const VISIBLE_COUNT = 6;
const ROTATE_MIN_MS = 2200;
const ROTATE_MAX_MS = 5200;

const TESTIMONIALS = [
  {
    name: "Neha Malhotra",
    position: "Director of Product, Toronto",
    yearOfPassing: "2001",
    testimonial:
      "He taught me over two decades ago, and that foundation still shapes how I solve complex product problems today. His clarity and discipline stay with you for life.",
    imageUrl: "https://i.pravatar.cc/150?u=neha",
  },
  {
    name: "Dr. Arjun Singh",
    position: "Consultant Cardiologist, Dubai",
    yearOfPassing: "1998",
    testimonial:
      "The rigorous thinking and problem-solving habits I learned in his classes helped me far beyond exams. They continue to guide me in high-pressure clinical decisions.",
    imageUrl: "https://i.pravatar.cc/150?u=arjun",
  },
  {
    name: "Rohan Iyer",
    position: "Research Scientist, Melbourne",
    yearOfPassing: "2008",
    testimonial:
      "What stood out most was his ability to build confidence while pushing us to think deeply. His students now work across industries and countries, and that says everything.",
    imageUrl: "https://i.pravatar.cc/150?u=rohan",
  },
  {
    name: "Priya Menon",
    position: "Entrepreneur, Singapore",
    yearOfPassing: "2005",
    testimonial:
      "His teaching shaped my discipline and decision-making. Even while building my company, I still rely on the structured thinking he taught us.",
    imageUrl: "https://i.pravatar.cc/150?u=priya",
  },
  {
    name: "Karan Bhatia",
    position: "Civil Services Officer, New Delhi",
    yearOfPassing: "1999",
    testimonial:
      "He never just taught for marks. He trained us to think clearly and stay calm under pressure, which helped me years later in public service.",
    imageUrl: "https://i.pravatar.cc/150?u=karan",
  },
  {
    name: "Aditi Rao",
    position: "Machine Learning Engineer, Berlin",
    yearOfPassing: "2012",
    testimonial:
      "My confidence in quantitative work comes directly from his classes. The habits of precision and curiosity he built are still with me.",
    imageUrl: "https://i.pravatar.cc/150?u=aditi",
  },
  {
    name: "Vikram Desai",
    position: "Investment Analyst, London",
    yearOfPassing: "2006",
    testimonial:
      "He made difficult topics approachable and gave us a long-term mindset. His students now span finance, medicine, research, and leadership.",
    imageUrl: "https://i.pravatar.cc/150?u=vikram",
  },
  {
    name: "Sana Qureshi",
    position: "Architect, Abu Dhabi",
    yearOfPassing: "2003",
    testimonial:
      "The logic and spatial reasoning I use in architecture was sharpened in his classroom. His influence has quietly stayed with me for decades.",
    imageUrl: "https://i.pravatar.cc/150?u=sana",
  },
  {
    name: "Anmol Gupta",
    position: "Professor of Economics, Boston",
    yearOfPassing: "1997",
    testimonial:
      "He gave us rigor without intimidation. That balance inspired my own teaching style, and I still cite him as one of my strongest mentors.",
    imageUrl: "https://i.pravatar.cc/150?u=anmol",
  },
  {
    name: "Ishita Kapoor",
    position: "UX Research Lead, Amsterdam",
    yearOfPassing: "2010",
    testimonial:
      "He taught us to ask better questions before solving problems. That mindset is now central to my work leading international research teams.",
    imageUrl: "https://i.pravatar.cc/150?u=ishita",
  },
  {
    name: "Harsh Vardhan",
    position: "Startup Founder, Bengaluru",
    yearOfPassing: "2009",
    testimonial:
      "When things get uncertain, I return to the clarity he instilled in us. His students are everywhere because his foundation is universally strong.",
    imageUrl: "https://i.pravatar.cc/150?u=harsh",
  },
  {
    name: "Dr. Naina Sethi",
    position: "Pediatrician, Sydney",
    yearOfPassing: "2002",
    testimonial:
      "From school to medicine, his emphasis on precision helped me at every stage. His classes built confidence that lasted well beyond academics.",
    imageUrl: "https://i.pravatar.cc/150?u=naina",
  },
  {
    name: "Yash Khanna",
    position: "Data Science Manager, San Francisco",
    yearOfPassing: "2011",
    testimonial:
      "He made us fall in love with problem-solving. Today I lead data teams globally, and his early training still informs how I think and lead.",
    imageUrl: "https://i.pravatar.cc/150?u=yash",
  },
  {
    name: "Mitali Bose",
    position: "Policy Advisor, Geneva",
    yearOfPassing: "2004",
    testimonial:
      "He taught us how to reason, not just calculate. That ability to break down complexity became invaluable in policy and international work.",
    imageUrl: "https://i.pravatar.cc/150?u=mitali",
  },
  {
    name: "Siddharth Jain",
    position: "Aviation Engineer, Doha",
    yearOfPassing: "2007",
    testimonial:
      "His classroom discipline translated directly into engineering practice. I still appreciate how he turned fear of hard topics into confidence.",
    imageUrl: "https://i.pravatar.cc/150?u=siddharth",
  },
  {
    name: "Ritika Arora",
    position: "Brand Strategist, Mumbai",
    yearOfPassing: "2013",
    testimonial:
      "Even in a creative field, the analytical clarity he gave us is a superpower. His students thrive because his lessons adapt to any path.",
    imageUrl: "https://i.pravatar.cc/150?u=ritika",
  },
  {
    name: "Deepak Narang",
    position: "Energy Consultant, Houston",
    yearOfPassing: "1996",
    testimonial:
      "Nearly 30 years later, I still remember his methods. He taught generations, and the ripple effect of his mentorship is visible worldwide.",
    imageUrl: "https://i.pravatar.cc/150?u=deepak",
  },
  {
    name: "Tanya Oberoi",
    position: "Legal Counsel, Johannesburg",
    yearOfPassing: "2000",
    testimonial:
      "His insistence on clear reasoning helped me immensely in law. He didn’t just teach Mathematics; he taught us how to think with integrity.",
    imageUrl: "https://i.pravatar.cc/150?u=tanya",
  },
  {
    name: "Manav Chawla",
    position: "Tech Program Manager, Seattle",
    yearOfPassing: "2014",
    testimonial:
      "He balanced warmth and rigor in a way that made everyone believe they could do better. That confidence has stayed with me in every role.",
    imageUrl: "https://i.pravatar.cc/150?u=manav",
  },
  {
    name: "Farah Khan",
    position: "Public Health Specialist, Nairobi",
    yearOfPassing: "2006",
    testimonial:
      "His lessons on structured thinking continue to help in field decisions and research. His students may choose different paths, but carry a shared foundation.",
    imageUrl: "https://i.pravatar.cc/150?u=farah",
  },
  {
    name: "Ritesh Suri",
    position: "Operations Leader, Dublin",
    yearOfPassing: "2002",
    testimonial:
      "His classes built resilience and focus that stayed relevant across every stage of my career. He has influenced more lives than numbers can capture.",
    imageUrl: "https://i.pravatar.cc/150?u=ritesh",
  },
];

export function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [slotIndexes, setSlotIndexes] = useState(() =>
    Array.from({ length: VISIBLE_COUNT }, (_, index) => index),
  );
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const introOpacity = useTransform(scrollYProgress, [0, 0.25, 0.4], [1, 1, 0]);

  useEffect(() => {
    const randomDelay = () =>
      Math.floor(Math.random() * (ROTATE_MAX_MS - ROTATE_MIN_MS + 1)) +
      ROTATE_MIN_MS;

    const timeoutIds: ReturnType<typeof setTimeout>[] = [];

    const startSlotLoop = (slot: number) => {
      const schedule = () => {
        const timeoutId = setTimeout(() => {
          setSlotIndexes((current) => {
            const next = [...current];
            next[slot] = (next[slot] + VISIBLE_COUNT) % TESTIMONIALS.length;
            return next;
          });
          schedule();
        }, randomDelay());

        timeoutIds.push(timeoutId);
      };

      schedule();
    };

    for (let slot = 0; slot < VISIBLE_COUNT; slot += 1) {
      startSlotLoop(slot);
    }

    return () => {
      timeoutIds.forEach((timeoutId) => clearTimeout(timeoutId));
    };
  }, []);

  const visibleTestimonials = slotIndexes.map(
    (testimonialIndex) => TESTIMONIALS[testimonialIndex],
  );
  const primaryTestimonials = visibleTestimonials.slice(0, 4);
  const secondaryTestimonials = visibleTestimonials.slice(4, 6);

  return (
    <div
      ref={containerRef}
      className="relative h-[200vh] bg-linear-to-b from-[#070d1f] via-[#0d1a3b] to-[#07112a]"
      style={{ marginInline: "calc(-50vw + 50%)", width: "100vw" }}>
      <div className="pointer-events-none absolute inset-0">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div className="absolute inset-0">
            <SvgComponent />
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_25%,rgba(73,121,255,0.25),transparent_45%),radial-gradient(circle_at_80%_75%,rgba(20,200,255,0.14),transparent_42%)]" />
          <div className="absolute inset-0 bg-black/25" />
        </div>
      </div>

      <div className="relative z-10 h-[200vh] w-full text-slate-100">
        <motion.div
          style={{ opacity: introOpacity }}
          className="flex h-screen items-center justify-center px-6">
          <div className="w-full max-w-4xl rounded-3xl border border-white/15 bg-slate-950/45 p-8 text-center shadow-2xl shadow-blue-900/30 backdrop-blur-md sm:p-12">
            <p className="mx-auto mb-4 inline-flex rounded-full border border-blue-300/30 bg-blue-400/15 px-4 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-blue-100">
              35+ years of teaching excellence
            </p>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-5xl">
              Students everywhere,{" "}
              <span className="text-cyan-300">impact everywhere</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base text-slate-200/90 sm:text-lg">
              From classrooms to global careers, generations of students have
              carried his teaching into medicine, technology, research,
              leadership, and entrepreneurship across the world.
            </p>
            <div className="mt-8 grid grid-cols-1 gap-3 text-left sm:grid-cols-3">
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-2xl font-semibold text-cyan-200">35+ yrs</p>
                <p className="text-sm text-slate-300">Teaching legacy</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-2xl font-semibold text-cyan-200">Global</p>
                <p className="text-sm text-slate-300">Alumni footprint</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
                <p className="text-2xl font-semibold text-cyan-200">
                  Diverse roles
                </p>
                <p className="text-sm text-slate-300">
                  Doctors, founders, researchers, leaders
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="flex min-h-screen items-center px-6 pb-16">
          <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-2">
            <div className="grid gap-4 lg:grid-rows-2">
              <div className="h-full rounded-3xl border border-white/15 bg-slate-950/45 p-6 shadow-2xl shadow-blue-900/20 backdrop-blur-md sm:p-7">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-cyan-200/90">
                  A lifelong network
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-white sm:text-3xl">
                  One teacher. Multiple generations of achievers.
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-200/90 sm:text-base">
                  Across countries and careers, his students share one
                  foundation: strong fundamentals and lasting confidence.
                </p>
              </div>

              <div className="grid h-full gap-4 sm:grid-cols-2">
                {secondaryTestimonials.map((testimonial, index) => (
                  <AnimatePresence mode="wait" key={`secondary-slot-${index}`}>
                    <motion.div
                      key={`${testimonial.name}-${slotIndexes[4 + index]}`}
                      initial={{ opacity: 0, y: 12 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -12 }}
                      transition={{ duration: 0.32, ease: "easeOut" }}
                      className="h-full">
                      <TestimonialCard {...testimonial} />
                    </motion.div>
                  </AnimatePresence>
                ))}
              </div>
            </div>

            <div className="grid h-full gap-4 sm:grid-cols-2 lg:grid-rows-2">
              {primaryTestimonials.map((testimonial, index) => (
                <AnimatePresence mode="wait" key={`primary-slot-${index}`}>
                  <motion.div
                    key={`${testimonial.name}-${slotIndexes[index]}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -12 }}
                    transition={{ duration: 0.32, ease: "easeOut" }}
                    className="h-full">
                    <TestimonialCard {...testimonial} />
                  </motion.div>
                </AnimatePresence>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
