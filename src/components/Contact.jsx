import { motion } from 'motion/react'

const socials = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/sourabhsarsar',
    handle: '/in/sourabhsarsar',
  },
  {
    label: 'Behance',
    href: 'https://www.behance.net/sourabhsarsar/',
    handle: '/sourabhsarsar',
  },
  {
    label: 'SaaS Case Study',
    href: 'https://grid-intelligence-gamma.vercel.app/',
    handle: 'grid-intelligence ↗',
  },
]

export default function Contact() {
  return (
    <footer
      id="contact"
      className="relative bg-black text-white pt-24 md:pt-32 pb-10 px-6 md:px-10 overflow-hidden rounded-t-[2.5rem] md:rounded-t-[3.5rem]"
    >
      {/* Background grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.07]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
        }}
      />

      {/* Lime accent */}
      <div className="absolute -top-32 -right-32 w-[480px] h-[480px] rounded-full bg-[#CCFF00]/15 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-32 -left-32 w-[480px] h-[480px] rounded-full bg-[#0038FF]/25 blur-3xl pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto">
        {/* Eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <span className="inline-block w-10 h-[2px] bg-[#CCFF00]" />
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/60">
            06 · Let's talk
          </p>
        </div>

        {/* Big CTA */}
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7 }}
          className="display-stack text-[clamp(2.5rem,10vw,8rem)] leading-[0.9] text-white"
        >
          Let’s build
          <br />
          something{' '}
          <span className="italic font-serif font-normal text-[#CCFF00]">
            meaningful
          </span>
          .
        </motion.h2>

        {/* Email pill */}
        <motion.a
          href="mailto:sourabhsarsar556@gmail.com"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="group inline-flex items-center gap-3 mt-10 px-6 py-4 rounded-full bg-[#CCFF00] text-black font-bold text-base md:text-lg hover:bg-white transition-colors"
        >
          <span>sourabhsarsar556@gmail.com</span>
          <span className="w-8 h-8 rounded-full bg-black flex items-center justify-center group-hover:rotate-45 transition-transform">
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 text-[#CCFF00]"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </span>
        </motion.a>

        {/* Grid: contact + socials */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          <div className="md:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/40 mb-4">
              Direct
            </p>
            <ul className="space-y-3">
              <li>
                <a
                  href="mailto:sourabhsarsar556@gmail.com"
                  className="text-base md:text-lg text-white/90 hover:text-[#CCFF00] transition-colors"
                >
                  sourabhsarsar556@gmail.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+918209086862"
                  className="text-base md:text-lg text-white/90 hover:text-[#CCFF00] transition-colors"
                >
                  +91 82090 86862
                </a>
              </li>
              <li className="text-base md:text-lg text-white/60">
                Noida, Delhi NCR · India
              </li>
            </ul>
          </div>

          <div className="md:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/40 mb-4">
              On the web
            </p>
            <ul className="space-y-0">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between py-1.5 border-b border-white/5 hover:border-[#CCFF00]/40 transition-colors"
                  >
                    <span className="text-base md:text-lg font-semibold text-white/90 group-hover:text-[#CCFF00] transition-colors">
                      {s.label}
                    </span>
                    <span className="text-sm text-white/40 font-mono group-hover:text-white/80 transition-colors">
                      {s.handle}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="mt-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex items-center gap-1">
            <div className="bg-white text-black font-black tracking-tight text-xs px-3 py-1.5 rounded-2xl rounded-bl-sm relative">
              SOURABH
              <div
                className="absolute -bottom-1.5 left-0 w-3 h-3 bg-white"
                style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
              />
            </div>
            <div className="bg-[#CCFF00] text-black font-black text-xs px-3 py-1.5 rounded-full border-[1.5px] border-white">
              SARSAR
            </div>
          </div>
          <p className="text-xs text-white/40 font-medium">
            © {new Date().getFullYear()} Sourabh Sarsar. Designed & built with{' '}
            <span className="text-[#CCFF00]">love & care</span>.
          </p>
        </div>
      </div>
    </footer>
  )
}
