import { motion } from 'motion/react'

const ArrowLimeLeft = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-full h-full text-[#CCFF00] stroke-current overflow-visible"
    fill="none"
    strokeWidth="6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10,90 C 10,40 40,20 60,50 C 70,65 80,75 95,70" />
    <path d="M80,55 L95,70 L85,85" />
  </svg>
)

const ArrowLimeRight = () => (
  <svg
    viewBox="0 0 100 100"
    className="w-full h-full text-[#CCFF00] stroke-current overflow-visible"
    fill="none"
    strokeWidth="6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M90,10 C 80,60 60,80 40,60 C 20,40 40,20 60,30 C 80,40 70,70 50,80" />
    <path d="M65,75 L50,80 L55,65" />
  </svg>
)

const CircularBadge = () => (
  <div className="relative w-24 h-24 md:w-40 md:h-40 bg-[#CCFF00] rounded-full flex items-center justify-center shadow-xl rotate-12 hover:scale-105 transition-transform cursor-pointer border-[3px] border-black/5">
    {/* Outer ring — BUILT FOR THE WORLD (forward spin) */}
    <div className="absolute inset-0 animate-spin-slow">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          id="badgeOuter"
          d="M 50,50 m -42,0 a 42,42 0 1,1 84,0 a 42,42 0 1,1 -84,0"
          fill="none"
        />
        <text
          className="font-black uppercase"
          fill="black"
          style={{ fontSize: '8.5px', letterSpacing: '0.16em' }}
        >
          <textPath href="#badgeOuter" startOffset="0%">
            BUILT FOR THE WORLD • BUILT FOR THE WORLD •
          </textPath>
        </text>
      </svg>
    </div>

    {/* Inner ring — MADE IN INDIA (reverse spin, slower) */}
    <div className="absolute inset-0 animate-spin-slow-reverse">
      <svg viewBox="0 0 100 100" className="w-full h-full">
        <path
          id="badgeInner"
          d="M 50,50 m -25,0 a 25,25 0 1,1 50,0 a 25,25 0 1,1 -50,0"
          fill="none"
        />
        <text
          className="font-black uppercase"
          fill="black"
          style={{ fontSize: '7px', letterSpacing: '0.16em' }}
        >
          <textPath href="#badgeInner" startOffset="0%">
            MADE IN INDIA • MADE IN INDIA •
          </textPath>
        </text>
      </svg>
    </div>

    {/* Center arrow */}
    <div className="absolute inset-0 flex items-center justify-center">
      <svg
        viewBox="0 0 100 100"
        className="w-8 h-8 md:w-10 md:h-10 text-black stroke-current overflow-visible"
        fill="none"
        strokeWidth="8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20,80 Q 40,50 30,30 T 80,20" />
        <path d="M60,10 L80,20 L70,40" />
      </svg>
    </div>
  </div>
)

export default function Hero() {
  return (
    <section
      id="top"
      className="relative bg-[#0038FF] text-white overflow-hidden w-full pt-32 md:pt-36 selection:bg-[#CCFF00] selection:text-black"
    >
      {/* White grid overlay */}
      <div
        className="absolute inset-0 pointer-events-none z-0"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff15 1px, transparent 1px), linear-gradient(to bottom, #ffffff15 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
        }}
      />


      <main className="relative z-10 px-4 pb-24 md:pb-48 flex flex-col items-center justify-center w-full max-w-[1440px] mx-auto">
        {/* Eyebrow */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/30 bg-white/10 backdrop-blur text-xs font-semibold uppercase tracking-[0.18em] text-white"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-[#CCFF00] opacity-75 animate-ping" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#CCFF00]" />
          </span>
          AI-Product Designer · Noida, IN
        </motion.div>

        {/* Massive Typography Stack */}
        <div className="relative w-full max-w-6xl mx-auto flex flex-col items-center justify-center text-center z-10 mb-16">
          <div className="w-full flex flex-col items-center relative z-10 space-y-2 md:space-y-4">
            {/* AI-PRODUCT — lime, single line */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="w-full flex justify-start pl-[1%] md:pl-[8%] relative z-30"
            >
              <h1
                className="display-stack text-[clamp(2.25rem,10vw,150px)] text-[#CCFF00] m-0 p-0 uppercase whitespace-nowrap"
                style={{
                  textShadow:
                    '1px 1px 0 #001A99, 2px 2px 0 #001A99, 3px 3px 0 #001A99, 4px 4px 0 #001A99, 5px 5px 0 #001A99, 6px 6px 0 #001A99, 7px 7px 0 #001A99, 8px 8px 0 #001A99, 9px 9px 0 #001A99, 10px 10px 0 #001A99, 11px 11px 0 #001A99, 12px 12px 0 #001A99, 13px 13px 0 #001A99, 14px 14px 0 #001A99',
                }}
              >
                AI-PRODUCT
              </h1>
            </motion.div>

            {/* DESIGNER — white (largest) */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
              className="w-full flex justify-end pr-[1%] md:pr-[8%] relative z-20"
            >
              <h1
                className="display-stack text-[clamp(2.75rem,13vw,210px)] text-white m-0 p-0 uppercase"
                style={{
                  textShadow:
                    '1px 1px 0 #001A99, 2px 2px 0 #001A99, 3px 3px 0 #001A99, 4px 4px 0 #001A99, 5px 5px 0 #001A99, 6px 6px 0 #001A99, 7px 7px 0 #001A99, 8px 8px 0 #001A99, 9px 9px 0 #001A99, 10px 10px 0 #001A99, 11px 11px 0 #001A99, 12px 12px 0 #001A99, 13px 13px 0 #001A99, 14px 14px 0 #001A99',
                }}
              >
                DESIGNER
              </h1>
            </motion.div>
          </div>

          {/* Absolute Overlays */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Floating Glass Card 1 — Profile (Bottom Left) */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute bottom-[5%] left-[2%] md:left-[14%] z-30 pointer-events-auto hidden sm:block"
            >
              <div className="w-44 md:w-52 aspect-[3/3.6] bg-white/20 backdrop-blur-md border border-white/40 rounded-[2rem] p-5 flex flex-col items-center justify-center rotate-[-10deg] shadow-2xl hover:rotate-0 transition-transform duration-500">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-[#CCFF00] rounded-full flex items-center justify-center mb-4 shadow-inner border-[3px] border-white/50 overflow-hidden">
                  <img
                    src="/avatar.png"
                    alt="Sourabh Sarsar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-center mt-2">
                  <p className="font-black text-sm md:text-base text-black">
                    Sourabh Sarsar
                  </p>
                  <p className="text-[10px] md:text-[11px] text-black/80 mt-1 font-semibold uppercase tracking-wider">
                    ~8.5 yrs · Sr. Product Designer
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Glass Card 2 — Stack (Top Right) */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: 1,
              }}
              className="absolute top-[10%] right-[2%] md:right-[14%] z-30 pointer-events-auto hidden sm:block"
            >
              <div className="w-44 md:w-52 aspect-[3/3.6] bg-white/20 backdrop-blur-md border border-white/40 rounded-[2rem] p-5 flex flex-col items-center justify-center rotate-[10deg] shadow-2xl hover:rotate-0 transition-transform duration-500">
                <div className="w-16 h-16 md:w-24 md:h-24 bg-white rounded-full flex items-center justify-center mb-4 shadow-inner border-[3px] border-white/50 overflow-hidden">
                  <svg
                    viewBox="0 0 38 57"
                    className="w-7 h-10 md:w-10 md:h-14"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M19 28.5C19 25.9804 20.0009 23.5641 21.7825 21.7825C23.5641 20.0009 25.9804 19 28.5 19C31.0196 19 33.4359 20.0009 35.2175 21.7825C36.9991 23.5641 38 25.9804 38 28.5C38 31.0196 36.9991 33.4359 35.2175 35.2175C33.4359 36.9991 31.0196 38 28.5 38C25.9804 38 23.5641 36.9991 21.7825 35.2175C20.0009 33.4359 19 31.0196 19 28.5Z"
                      fill="#1ABCFE"
                    />
                    <path
                      d="M0 47.5C0 44.9804 1.00089 42.5641 2.78249 40.7825C4.56408 39.0009 6.98044 38 9.5 38H19V47.5C19 50.0196 17.9991 52.4359 16.2175 54.2175C14.4359 55.9991 12.0196 57 9.5 57C6.98044 57 4.56408 55.9991 2.78249 54.2175C1.00089 52.4359 0 50.0196 0 47.5Z"
                      fill="#0ACF83"
                    />
                    <path
                      d="M19 0V19H28.5C31.0196 19 33.4359 17.9991 35.2175 16.2175C36.9991 14.4359 38 12.0196 38 9.5C38 6.98044 36.9991 4.56408 35.2175 2.78249C33.4359 1.00089 31.0196 0 28.5 0H19Z"
                      fill="#FF7262"
                    />
                    <path
                      d="M0 9.5C0 12.0196 1.00089 14.4359 2.78249 16.2175C4.56408 17.9991 6.98044 19 9.5 19H19V0H9.5C6.98044 0 4.56408 1.00089 2.78249 2.78249C1.00089 4.56408 0 6.98044 0 9.5Z"
                      fill="#F24E1E"
                    />
                    <path
                      d="M0 28.5C0 31.0196 1.00089 33.4359 2.78249 35.2175C4.56408 36.9991 6.98044 38 9.5 38H19V19H9.5C6.98044 19 4.56408 20.0009 2.78249 21.7825C1.00089 23.5641 0 25.9804 0 28.5Z"
                      fill="#A259FF"
                    />
                  </svg>
                </div>
                <div className="text-center mt-2">
                  <p className="font-black text-sm md:text-base text-black">
                    Figma
                  </p>
                  <p className="text-[10px] md:text-[11px] text-black/80 mt-1 font-semibold uppercase tracking-wider">
                    AI-native workflows
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Decorative Arrow Left (lime) */}
            <div className="absolute bottom-[-2%] left-[-2%] md:left-[8%] w-16 h-16 md:w-32 md:h-32 z-20">
              <ArrowLimeLeft />
            </div>

            {/* Decorative Arrow Right (lime) */}
            <div className="absolute top-[2%] right-[-2%] md:right-[6%] w-16 h-16 md:w-32 md:h-32 z-20">
              <ArrowLimeRight />
            </div>

            {/* Circular Badge */}
            <div className="absolute bottom-[-56%] right-[2%] md:bottom-[-30%] md:right-[-2%] z-40 pointer-events-auto">
              <CircularBadge />
            </div>
          </div>
        </div>

        {/* Subline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="max-w-2xl text-center text-base md:text-lg text-white/85 leading-relaxed mb-8 px-4"
        >
          Engineer-trained, design-school sharpened, AI-native by choice. I turn
          ambiguous problems into <span className="font-semibold text-[#CCFF00]">shipped</span>{' '}
          SaaS, AI, desktop, mobile, and website experiences, from 0→1
          discovery to high-fidelity handoff.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          <a
            href="https://grid-intelligence-gamma.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#CCFF00] text-black text-sm font-semibold hover:bg-white transition-colors shadow-lg shadow-black/20"
          >
            View SaaS case study
            <svg
              viewBox="0 0 24 24"
              className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </a>
          <a
            href="https://www.behance.net/sourabhsarsar/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/40 text-white text-sm font-semibold hover:bg-white hover:text-[#0038FF] hover:border-white transition-colors"
          >
            Behance portfolio
          </a>
        </motion.div>
      </main>
    </section>
  )
}
