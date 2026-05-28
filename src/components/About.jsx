import { motion } from 'motion/react'

const stats = [
  { value: '~8.5', label: 'Years of design', accent: 'bg-[#0038FF] text-white' },
  { value: '10+', label: 'Domains', accent: 'bg-[#CCFF00] text-black' },
  { value: '8+', label: 'AI tools in stack', accent: 'bg-black text-white' },
  { value: '50+', label: 'Projects completed', accent: 'bg-white text-black border border-black/10' },
]

export default function About() {
  return (
    <section id="about" className="relative bg-white py-24 md:py-32 px-6 md:px-10">
      <div className="max-w-[1280px] mx-auto">
        {/* Section eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <span className="inline-block w-10 h-[2px] bg-[#0038FF]" />
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/60">
            01 · About
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Headline */}
          <div className="lg:col-span-7">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7 }}
              className="display-stack text-[clamp(2rem,7vw,5.5rem)] text-black leading-[1.15] break-words"
            >
              I design <span className="italic font-serif font-normal text-[#0038FF]">human-first</span> SaaS,
              {' '}AI/ML, desktop, mobile, and website{' '}
              <span className="bg-[#CCFF00] px-3">experiences</span>.
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="mt-8 text-base md:text-lg leading-relaxed text-black/70 max-w-2xl"
            >
              Product Designer with <strong className="text-black">~8.5 years</strong> of
              experience (freelance + full-time) across SaaS, AI/ML, automotive, and IT platforms. Specialized in discovery,
              research, wireframing, prototyping, usability testing, and experience optimization.
              Currently designing AI-enabled SaaS dashboards and mobile applications at{' '}
              <strong className="text-black">Crosslynx US LLC</strong>.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="mt-8 flex flex-wrap gap-2"
            >
              {[
                'Discovery',
                'Research',
                'Workshops',
                'Wireframes',
                'High-Fi UI',
                'Prototyping',
                'Usability testing',
                'UX audits',
                'Design strategy',
              ].map((chip) => (
                <span
                  key={chip}
                  className="px-3 py-1.5 rounded-full bg-black/5 text-black/80 text-xs font-semibold"
                >
                  {chip}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Stats Card */}
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative grid grid-cols-2 gap-4"
            >
              {stats.map((s, i) => (
                <div
                  key={s.label}
                  className={`group cursor-default aspect-[1.1/1] rounded-[1.75rem] p-5 flex flex-col justify-between transition-all duration-500 ease-out hover:shadow-2xl hover:scale-[1.04] hover:-rotate-1 ${
                    s.accent
                  } ${
                    i === 1 || i === 3 ? 'translate-y-6 hover:translate-y-4' : 'hover:-translate-y-2'
                  }`}
                >
                  <span className="text-5xl md:text-6xl font-black tracking-tighter leading-none transition-transform duration-500 group-hover:scale-110 origin-left">
                    {s.value}
                  </span>
                  <span className="text-[10px] md:text-xs font-semibold uppercase tracking-wider opacity-80 group-hover:opacity-100 transition-opacity">
                    {s.label}
                  </span>
                </div>
              ))}

              {/* decorative arrow */}
              <svg
                viewBox="0 0 100 100"
                className="absolute -top-12 -left-10 w-20 h-20 text-[#0038FF] hidden md:block"
                fill="none"
                stroke="currentColor"
                strokeWidth="5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20,80 Q 40,20 80,40" />
                <path d="M60,20 L80,40 L50,60" />
              </svg>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
