import { useRef, useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'motion/react'

const jobs = [
  {
    role: 'Senior Design Engineer · UX/UI/Product',
    company: 'Crosslynx US LLC',
    location: 'Noida, Delhi NCR',
    period: 'Apr 2024 – Present',
    current: true,
    bullets: [
      'Designed AI/ML-enabled SaaS dashboards and mobile experiences across 4+ product areas, improving time-on-task by ~32%',
      'Led 8+ discovery workshops with cross-functional teams, accelerating roadmap definition by ~40%',
      'Lifted dashboard adoption ~28% by re-architecting information architecture based on usage analytics',
      'Mentored 5 designers and drove end-to-end design for 5+ shipping initiatives, reducing handoff cycles by ~35%',
    ],
    tags: ['0→1', 'End-to-End Product Design', 'Desktop', 'Mobile', 'SaaS', 'AI Products', 'Mentorship'],
  },
  {
    role: 'Associate UX Designer',
    company: 'Digitas India (Publicis Groupe)',
    location: 'Mumbai, MH',
    period: 'Sep 2022 – Apr 2024',
    bullets: [
      'Designed user-centered mobile and web apps for 30+ Publicis clients, reducing bounce rate by ~52%',
      'Built wireframes & prototypes that supported $700K+ in presales pitches, contributing to 18 client wins',
      'Ran 20+ usability tests and optimized user journeys, lifting task-completion rate by ~97%',
      'Worked in 2-week agile sprints, cutting design-to-dev handoff revisions by ~40%',
    ],
    tags: [
      'Mobile',
      'Web',
      'Agile',
      'Presales',
      'Usability Testing',
      'Strategy',
      'Scoping',
      'Stakeholder Workshops',
      'User Interviews',
      'UX Research',
    ],
  },
  {
    role: 'Visual Designer · UI/UX Intern',
    company: 'INITIA / Creat, UNO Minda Group',
    location: 'Pune, MH',
    period: 'Mar 2022 – Sep 2022',
    bullets: [
      'Designed automotive HMI interfaces and feature integrations',
      'Applied A/B testing insights to enhance usability',
      'Conducted user research to drive user-centric, business-aligned decisions',
    ],
    tags: [
      'Automotive',
      'HMI',
      'A/B testing',
      'UX Research',
      'Hi-Fi UI',
      'User Research',
      'Automotive Rules',
    ],
  },
  {
    role: 'UI/UX Designer Intern',
    company: 'Work Binders',
    location: 'Jaipur, RJ',
    period: 'Feb 2021 – Jul 2021',
    bullets: [
      'Designed responsive web platforms using Lean UX principles',
      'Conducted user research, wireframing, and feature optimization',
    ],
    tags: ['Lean UX', 'Web', 'Research'],
  },
  {
    role: 'Freelance UX/UI & Product Designer',
    company: 'Self-employed',
    location: 'Remote · India',
    period: 'Mar 2017 – Jan 2021',
    bullets: [
      'Delivered end-to-end UX/UI solutions for web and mobile platforms across multiple domains',
      'Conducted user research and translated insights into intuitive design solutions aligned with business goals',
      'Designed websites and mobile applications, improving usability and engagement',
      'Collaborated with clients to define product strategy, user flows, and conversion-focused experiences',
    ],
    tags: ['Freelance', 'Strategy', 'Multi-domain'],
  },
]

export default function Experience() {
  const timelineRef = useRef(null)
  const digitasDotRef = useRef(null)
  const [splitPct, setSplitPct] = useState(0.4)

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ['start 70%', 'end 60%'],
  })

  // Measure the Digitas dot position relative to the timeline so the
  // blue → cherry transition lands exactly on it.
  useEffect(() => {
    const measure = () => {
      const tl = timelineRef.current
      const dot = digitasDotRef.current
      if (!tl || !dot) return
      const tlRect = tl.getBoundingClientRect()
      const dotRect = dot.getBoundingClientRect()
      const dotCenter =
        dotRect.top - tlRect.top + dotRect.height / 2
      const pct = Math.max(0.05, Math.min(0.95, dotCenter / tlRect.height))
      setSplitPct(pct)
    }
    measure()
    window.addEventListener('resize', measure)
    return () => window.removeEventListener('resize', measure)
  }, [])

  // Blue fills from top down to the Digitas dot, then stops
  const blueHeight = useTransform(
    scrollYProgress,
    [0, splitPct],
    ['0%', `${splitPct * 100}%`]
  )
  // Cherry takes over from the Digitas dot and fills the rest
  const cherryHeight = useTransform(
    scrollYProgress,
    [splitPct, 1],
    ['0%', `${(1 - splitPct) * 100}%`]
  )

  return (
    <section
      id="experience"
      className="relative bg-[#FAFAF7] py-24 md:py-32 px-6 md:px-10"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <span className="inline-block w-10 h-[2px] bg-[#0038FF]" />
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/60">
            03 · Experience
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <h2 className="display-stack lg:col-span-7 text-[clamp(2rem,6.5vw,5rem)] text-black leading-[0.95]">
            From scrappy pixels to{' '}
            <span className="italic font-serif font-normal text-[#0038FF]">
              AI-native
            </span>{' '}
            product systems.
          </h2>
          <p className="lg:col-span-5 lg:pt-4 text-base md:text-lg text-black/65 leading-relaxed">
            Eight+ years. Five teams. Four cities. SaaS, AI/ML, automotive HMI,
            agency presales, and consumer apps. Each one re-shaped how I think
            about research, craft, and product.
          </p>
        </div>

        {/* Timeline */}
        <div ref={timelineRef} className="relative">
          {/* Static gray line */}
          <div className="absolute left-3 md:left-1/2 -translate-x-0 md:-translate-x-1/2 top-0 bottom-0 w-[2px] bg-black/10" />
          {/* Blue segment — Crosslynx to end of Digitas */}
          <motion.div
            style={{ height: blueHeight }}
            className="absolute left-3 md:left-1/2 -translate-x-0 md:-translate-x-1/2 top-0 w-[2px] bg-[#0038FF] origin-top z-[1]"
          />
          {/* Cherry segment — INITIA onwards (after Digitas) */}
          <motion.div
            style={{ height: cherryHeight, top: `${splitPct * 100}%` }}
            className="absolute left-3 md:left-1/2 -translate-x-0 md:-translate-x-1/2 w-[2px] bg-[#E63946] origin-top z-[1]"
          />

          <div className="space-y-12 md:space-y-16">
            {jobs.map((job, i) => {
              const cardLeft = i % 2 !== 0
              return (
                <motion.div
                  key={job.role + job.company}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.6, delay: i * 0.05 }}
                  className="relative grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12"
                >
                  {/* Dot */}
                  <span
                    ref={i === 1 ? digitasDotRef : null}
                    className={`absolute left-1.5 md:left-1/2 -translate-x-1/2 top-2 w-4 h-4 rounded-full border-[3px] border-black z-10 ${
                      job.current ? 'bg-[#CCFF00]' : 'bg-white'
                    }`}
                  />

                  {/* Period block */}
                  <div
                    className={`pl-10 md:pl-0 ${
                      cardLeft
                        ? 'md:pl-12 md:order-2'
                        : 'md:text-right md:pr-12 md:order-1'
                    }`}
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0038FF]">
                      {job.period}
                    </p>
                    <p className="mt-2 text-sm font-semibold text-black/55">
                      {job.location}
                    </p>
                    {job.current && (
                      <span className="inline-flex mt-3 items-center gap-1.5 px-3 py-1 rounded-full bg-[#CCFF00] text-black text-[10px] font-bold uppercase tracking-wider">
                        <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
                        Current
                      </span>
                    )}
                  </div>

                  {/* Card block */}
                  <div
                    className={`pl-10 md:pl-0 ${
                      cardLeft
                        ? 'md:pr-12 md:order-1'
                        : 'md:pl-12 md:order-2'
                    }`}
                  >
                    <div className="bg-white rounded-[1.75rem] border border-black/8 p-6 md:p-7 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
                      <h3 className="text-xl md:text-2xl font-black text-black tracking-tight leading-tight">
                        {job.role}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-[#0038FF]">
                        {job.company}
                      </p>
                      <ul className="mt-4 space-y-2 text-sm text-black/70 leading-relaxed">
                        {job.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2.5">
                            <span className="inline-flex h-[1.625em] items-center shrink-0">
                              <svg
                                aria-hidden
                                viewBox="0 0 16 16"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="w-3 h-3 text-[#0038FF]"
                              >
                                <polyline points="6 3 11 8 6 13" />
                              </svg>
                            </span>
                            <span className="flex-1">{b}</span>
                          </li>
                        ))}
                      </ul>
                      <div className="mt-5 flex flex-wrap gap-1.5">
                        {job.tags.map((t) => (
                          <span
                            key={t}
                            className="px-2.5 py-1 rounded-full bg-black/5 text-black/70 text-[10px] font-bold uppercase tracking-wider"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
