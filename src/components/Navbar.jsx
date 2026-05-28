import { useEffect, useState } from 'react'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Work', href: '#work' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (open) document.body.style.overflow = 'hidden'
    else document.body.style.overflow = ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'bg-white/85 backdrop-blur-xl border-b border-black/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 py-3.5 md:py-5 flex items-center justify-between">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-1 shrink-0" onClick={() => setOpen(false)}>
          <div className="bg-black text-white font-black tracking-tight text-[11px] md:text-sm px-2.5 md:px-3 py-1.5 rounded-2xl rounded-bl-sm relative shadow-sm">
            SOURABH
            <div
              className="absolute -bottom-1.5 left-0 w-3 h-3 bg-black"
              style={{ clipPath: 'polygon(0 0, 100% 0, 0 100%)' }}
            />
          </div>
          <div
            className={`font-black text-[11px] md:text-sm px-2.5 md:px-3 py-1.5 rounded-full border-[1.5px] shadow-sm transition-colors ${
              scrolled || open
                ? 'bg-[#CCFF00] text-black border-black'
                : 'bg-[#CCFF00] text-black border-white'
            }`}
          >
            SARSAR
          </div>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-1.5">
          {links.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`px-4 py-1.5 rounded-full border text-xs font-semibold uppercase tracking-wider transition-colors ${
                scrolled
                  ? 'border-black/15 text-black/80 hover:bg-black hover:text-white hover:border-black'
                  : 'border-white/30 text-white hover:bg-white hover:text-[#0038FF] hover:border-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>

        {/* Desktop CTAs */}
        <div className="hidden md:flex items-center gap-2">
          <a
            href="/Sourabh_Sarsar_Resume.docx"
            download="Sourabh_Sarsar_Resume.docx"
            className={`group inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-semibold transition-colors ${
              scrolled
                ? 'border-black/15 text-black/80 hover:bg-black hover:text-white hover:border-black'
                : 'border-white/40 text-white hover:bg-white hover:text-[#0038FF] hover:border-white'
            }`}
            aria-label="Download resume"
          >
            <svg
              viewBox="0 0 24 24"
              className="w-3.5 h-3.5 group-hover:translate-y-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            <span>Resume</span>
          </a>

          <a
            href="mailto:sourabhsarsar556@gmail.com"
            className={`group inline-flex items-center gap-2 px-5 py-2 rounded-full text-sm font-semibold transition-colors shadow-lg ${
              scrolled
                ? 'bg-[#0038FF] text-white hover:bg-black shadow-[#0038FF]/20'
                : 'bg-white text-[#0038FF] hover:bg-[#CCFF00] hover:text-black shadow-black/10'
            }`}
          >
            <span>Let's talk</span>
            <span
              aria-hidden
              className={`inline-block w-1.5 h-1.5 rounded-full group-hover:scale-150 transition-transform ${
                scrolled ? 'bg-[#CCFF00]' : 'bg-[#0038FF] group-hover:bg-black'
              }`}
            />
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className={`md:hidden relative w-10 h-10 rounded-full border flex items-center justify-center transition-colors ${
            scrolled || open
              ? 'border-black/15 bg-white text-black'
              : 'border-white/40 bg-white/10 text-white'
          }`}
        >
          <span className="sr-only">Toggle menu</span>
          <span className="relative block w-4 h-3">
            <span
              className={`absolute left-0 top-0 w-full h-[2px] rounded-full bg-current transition-all duration-300 ${
                open ? 'translate-y-[5px] rotate-45' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[5px] w-full h-[2px] rounded-full bg-current transition-all duration-300 ${
                open ? 'opacity-0' : ''
              }`}
            />
            <span
              className={`absolute left-0 top-[10px] w-full h-[2px] rounded-full bg-current transition-all duration-300 ${
                open ? '-translate-y-[5px] -rotate-45' : ''
              }`}
            />
          </span>
        </button>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out ${
          open ? 'max-h-[480px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="px-5 pb-5 pt-1 bg-white">
          <ul className="flex flex-col divide-y divide-black/5">
            {links.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between py-3.5 text-[15px] font-semibold text-black hover:text-[#0038FF] transition-colors"
                >
                  <span>{item.label}</span>
                  <span className="text-black/30">↗</span>
                </a>
              </li>
            ))}
          </ul>
          <div className="mt-4 grid grid-cols-2 gap-2">
            <a
              href="/Sourabh_Sarsar_Resume.docx"
              download="Sourabh_Sarsar_Resume.docx"
              onClick={() => setOpen(false)}
              className="group flex items-center justify-center gap-2 px-4 py-3 rounded-full border border-black/15 text-black text-sm font-semibold hover:bg-black hover:text-white hover:border-black transition-colors"
            >
              <svg
                viewBox="0 0 24 24"
                className="w-3.5 h-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              Resume
            </a>
            <a
              href="mailto:sourabhsarsar556@gmail.com"
              onClick={() => setOpen(false)}
              className="group flex items-center justify-center gap-2 px-4 py-3 rounded-full bg-[#0038FF] text-white text-sm font-semibold hover:bg-black transition-colors"
            >
              Let's talk
              <span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00]" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}
