import { motion } from 'motion/react'

const education = [
  {
    degree: 'MBA.Tech · Digital Product Management',
    school: 'IIT Jodhpur',
    period: 'Dec 2024 – Dec 2026',
    status: 'In progress',
    note: 'Strategy, product, and management for digital-native organizations.',
    accent: 'bg-[#0038FF] text-white',
  },
  {
    degree: 'Advanced Certificate · Innovation & Experience Design',
    school: 'MIT Institute of Design, Pune',
    period: '2021 – 2022',
    status: 'Completed',
    note: 'ACIXD: design innovation, human factors, and applied research.',
    accent: 'bg-[#CCFF00] text-black',
  },
  {
    degree: 'B.Tech · Computer Science Engineering',
    school: 'GECB, Bikaner',
    period: '2016 – 2020',
    status: 'Completed',
    note: 'Engineering foundation for shipping technical, design-led products.',
    accent: 'bg-black text-white',
  },
]

const certs = [
  { name: 'Mobile Experience Design', issuer: 'Google', year: '2023' },
  {
    name: 'Digital Skills: User Experience Design',
    issuer: 'Accenture',
    year: '2023',
  },
  {
    name: 'UX Design & Persona Creation',
    issuer: 'LinkedIn Learning',
    year: '2021',
  },
  { name: 'ACIXD', issuer: 'MIT ID, Pune', year: '2021' },
]

export default function Education() {
  return (
    <section
      id="education"
      className="relative bg-[#FAFAF7] py-24 md:py-32 px-6 md:px-10"
    >
      <div className="max-w-[1280px] mx-auto">
        {/* Section eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <span className="inline-block w-10 h-[2px] bg-[#0038FF]" />
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/60">
            05 · Education & Certifications
          </p>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <h2 className="display-stack lg:col-span-7 text-[clamp(2rem,6.5vw,5rem)] text-black leading-[0.95]">
            Engineer by training,{' '}
            <span className="italic font-serif font-normal text-[#0038FF]">
              designer
            </span>{' '}
            by craft.
          </h2>
          <p className="lg:col-span-5 lg:pt-4 text-base md:text-lg text-black/65 leading-relaxed">
            A blend of computer-science fundamentals, design-school methodology,
            and an MBA.Tech in digital product management, built for the AI-native
            era.
          </p>
        </div>

        {/* Education cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-12">
          {education.map((e, i) => (
            <motion.div
              key={e.degree}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className={`relative rounded-[1.75rem] p-7 flex flex-col justify-between min-h-[280px] shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all ${e.accent}`}
            >
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.22em] opacity-70">
                  {e.period}
                </p>
                <h3 className="mt-3 text-xl md:text-2xl font-black tracking-tight leading-tight">
                  {e.degree}
                </h3>
                <p className="mt-2 text-sm font-semibold opacity-90">{e.school}</p>
              </div>
              <div>
                <p className="text-sm leading-relaxed opacity-80 mb-4">
                  {e.note}
                </p>
                <span
                  className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider ${
                    e.status === 'Completed'
                      ? e.accent.includes('bg-black')
                        ? 'bg-[#CCFF00] text-black'
                        : 'bg-black text-[#CCFF00] ring-1 ring-[#CCFF00]/40'
                      : 'bg-white/20'
                  }`}
                >
                  {e.status === 'In progress' && (
                    <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                  )}
                  {e.status}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Certifications strip */}
        <div className="bg-white rounded-[1.75rem] border border-black/10 p-7 md:p-9">
          <div className="flex items-center justify-between mb-6 flex-wrap gap-3">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/50">
              Certifications
            </p>
            <p className="text-xs font-semibold text-black/40">
              {certs.length} verified credentials
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {certs.map((c, i) => (
              <motion.div
                key={c.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="group p-5 rounded-2xl border border-black/8 hover:border-[#0038FF]/40 hover:bg-[#0038FF]/[0.03] transition-all"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="w-9 h-9 rounded-full bg-black flex items-center justify-center group-hover:bg-[#0038FF] transition-colors">
                    <svg
                      viewBox="0 0 24 24"
                      className="w-4 h-4 text-[#CCFF00]"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-black/40">
                    {c.year}
                  </span>
                </div>
                <h4 className="text-sm font-black text-black leading-tight">
                  {c.name}
                </h4>
                <p className="mt-1 text-xs text-black/55 font-semibold">
                  {c.issuer}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
