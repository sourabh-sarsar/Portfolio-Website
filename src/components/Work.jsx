import { useRef, useState, useEffect } from 'react'
import { motion } from 'motion/react'

const projects = [
  {
    title: 'Amperly',
    subtitle: "UX Case Study · India's Prepaid Smart-Meter",
    url: 'https://www.behance.net/gallery/249707191/Amperly-UX-Case-study-for-Indias-prepaid-smart-meter',
    thumb:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/c3358f249707191.6a0da0e2c2f05.png',
    tags: ['SaaS', 'IoT', 'Case Study'],
    appreciations: 22,
    views: 3737,
  },
  {
    title: 'Concept Vehicle HMI Design',
    subtitle: 'Automotive interface system for next-gen mobility',
    url: 'https://www.behance.net/gallery/176907521/Concept-Vehicle-HMI-Design',
    thumb:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/83edbe176907521.64cccda56cc99.png',
    tags: ['Automotive', 'HMI'],
    appreciations: 24,
    views: 768,
  },
  {
    title: 'FlightScape',
    subtitle: 'Travel companion mobile experience',
    url: 'https://www.behance.net/gallery/171849287/FlightScape-Travel-Companion',
    thumb:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/926b23171849287.6475cf33bd4b1.png',
    tags: ['Mobile', 'Travel'],
    appreciations: 6,
    views: 195,
  },
  {
    title: 'Personal Finance Manager',
    subtitle: 'Money tracking, budgeting and insights',
    url: 'https://www.behance.net/gallery/148810611/Personal-Finance-Management-System',
    thumb:
      'https://mir-s3-cdn-cf.behance.net/project_modules/1400_webp/a1c0ca148810611.62dc08862a9db.png',
    tags: ['FinTech', 'Web'],
    appreciations: 7,
    views: 325,
  },
]

function ProjectCard({ project, index }) {
  return (
    <motion.a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6, delay: (index % 3) * 0.08 }}
      className="group relative shrink-0 snap-start w-[85%] sm:w-[60%] md:w-[48%] lg:w-[40%] xl:w-[34%] block rounded-[1.75rem] overflow-hidden bg-white border border-black/8 hover:-translate-y-1 hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-black/5">
        <img
          src={project.thumb}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover object-top group-hover:scale-[1.04] transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-[#0038FF]/0 group-hover:bg-[#0038FF]/10 transition-colors duration-500 pointer-events-none" />
        <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:rotate-0 -rotate-45 transition-all duration-500">
          <svg
            viewBox="0 0 24 24"
            className="w-4 h-4 text-[#0038FF]"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M7 17L17 7M17 7H7M17 7V17" />
          </svg>
        </div>
      </div>

      <div className="p-6 md:p-7">
        <div className="flex items-start justify-between gap-4">
          <div className="min-w-0">
            <h3 className="text-lg md:text-xl font-black text-black tracking-tight leading-tight truncate">
              {project.title}
            </h3>
            <p className="mt-1 text-sm text-black/60 leading-snug">
              {project.subtitle}
            </p>
          </div>
          <span className="shrink-0 text-[10px] font-bold uppercase tracking-wider text-black/40 flex items-center gap-1">
            <svg viewBox="0 0 24 24" className="w-3 h-3" fill="currentColor">
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
            {project.appreciations}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((t) => (
            <span
              key={t}
              className="px-2.5 py-1 rounded-full bg-black/5 text-black/70 text-[10px] font-bold uppercase tracking-wider"
            >
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.a>
  )
}

export default function Work() {
  const scrollRef = useRef(null)
  const [canScrollLeft, setCanScrollLeft] = useState(false)
  const [canScrollRight, setCanScrollRight] = useState(true)

  const updateScrollState = () => {
    const el = scrollRef.current
    if (!el) return
    setCanScrollLeft(el.scrollLeft > 8)
    setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 8)
  }

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return
    updateScrollState()
    el.addEventListener('scroll', updateScrollState, { passive: true })
    window.addEventListener('resize', updateScrollState)
    return () => {
      el.removeEventListener('scroll', updateScrollState)
      window.removeEventListener('resize', updateScrollState)
    }
  }, [])

  const scrollBy = (dir) => {
    const el = scrollRef.current
    if (!el) return
    // Scroll by one card width (use first card's width as reference)
    const firstCard = el.querySelector('a')
    const step = firstCard
      ? firstCard.getBoundingClientRect().width + 24 // include gap
      : el.clientWidth * 0.7
    el.scrollBy({ left: dir * step, behavior: 'smooth' })
  }

  return (
    <section id="work" className="relative bg-white py-24 md:py-32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-10">
        {/* Section eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <span className="inline-block w-10 h-[2px] bg-[#0038FF]" />
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/60">
            02 · Selected Work
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
          <h2 className="display-stack lg:col-span-7 text-[clamp(2rem,6.5vw,5rem)] text-black leading-[1.05]">
            Selected studies &{' '}
            <span className="italic font-serif font-normal text-[#0038FF]">
              concepts
            </span>
            .
          </h2>
          <div className="lg:col-span-5 lg:pt-4">
            <p className="text-base md:text-lg text-black/65 leading-relaxed mb-6">
              A handpicked selection from my Behance portfolio: SaaS,
              automotive HMI, mobile, and consumer products. Each one a real
              problem worked through with discovery, research, and craft.
            </p>
            <a
              href="https://www.behance.net/sourabhsarsar/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold text-[#0038FF] hover:gap-3 transition-all"
            >
              See full portfolio on Behance
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M7 17L17 7M17 7H7M17 7V17" />
              </svg>
            </a>
          </div>
        </div>

        {/* Controls */}
        <div className="flex items-center justify-end mb-5">
          <div className="flex items-center gap-2">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scrollBy(-1)}
              disabled={!canScrollLeft}
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-all active:scale-95 ${
                canScrollLeft
                  ? 'bg-[#CCFF00] text-black border border-[#CCFF00] hover:brightness-95'
                  : 'bg-transparent text-black/30 border border-black/15 cursor-not-allowed'
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scrollBy(1)}
              disabled={!canScrollRight}
              className={`w-11 h-11 rounded-full flex items-center justify-center transition-all active:scale-95 ${
                canScrollRight
                  ? 'bg-[#0038FF] text-white border border-[#0038FF] hover:brightness-110 shadow-lg shadow-[#0038FF]/25'
                  : 'bg-transparent text-black/30 border border-black/15 cursor-not-allowed'
              }`}
            >
              <svg
                viewBox="0 0 24 24"
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Horizontal carousel — left-aligned to container, bleeds right */}
      <div className="relative">
        <div
          ref={scrollRef}
          className="work-carousel flex gap-5 md:gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth py-12 -my-12 pr-6 md:pr-10"
          style={{
            paddingLeft: 'max(1.5rem, calc((100vw - 1280px) / 2 + 2.5rem))',
            scrollPaddingLeft: 'max(1.5rem, calc((100vw - 1280px) / 2 + 2.5rem))',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
          }}
        >
          {projects.map((p, i) => (
            <ProjectCard key={p.url} project={p} index={i} />
          ))}
          {/* Trailing spacer so last card can snap into view */}
          <div className="shrink-0 w-2 md:w-6" aria-hidden />
        </div>
      </div>
    </section>
  )
}
