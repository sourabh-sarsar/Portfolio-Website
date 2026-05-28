import { useRef } from 'react'
import { motion } from 'motion/react'
import { Gravity, MatterBody } from './ui/Gravity'

const designSkills = [
  { label: 'Figma', tone: 'electric' },
  { label: 'Sketch', tone: 'paper' },
  { label: 'Adobe XD', tone: 'paper' },
  { label: 'Framer', tone: 'lime' },
  { label: 'InVision', tone: 'paper' },
  { label: 'Zeplin', tone: 'paper' },
  { label: 'Photoshop', tone: 'paper' },
  { label: 'Illustrator', tone: 'paper' },
  { label: 'Discovery', tone: 'lime' },
  { label: 'Research', tone: 'paper' },
  { label: 'Workshops', tone: 'electric' },
  { label: 'Wireframing', tone: 'paper' },
  { label: 'High-Fi UI', tone: 'paper' },
  { label: 'Prototyping', tone: 'lime' },
  { label: 'Usability Testing', tone: 'paper' },
  { label: 'UX Audits', tone: 'electric' },
  { label: 'Metrics Analysis', tone: 'paper' },
  { label: 'Design Strategy', tone: 'black' },
  { label: 'Agile', tone: 'paper' },
]

const aiSkills = [
  { label: 'Claude Code', tone: 'electric' },
  { label: 'ChatGPT Codex', tone: 'paper' },
  { label: 'Code Rabbit', tone: 'paper' },
  { label: 'Figma AI', tone: 'lime' },
  { label: 'Google AntiGravity', tone: 'black' },
  { label: 'GitHub Copilot', tone: 'paper' },
  { label: 'Bolt.new', tone: 'paper' },
  { label: 'Google Stitch', tone: 'electric' },
]

const toneClass = {
  electric: 'bg-[#0038FF] text-white border-[#001A99]',
  lime: 'bg-[#CCFF00] text-black border-black/10',
  black: 'bg-black text-white border-black',
  paper: 'bg-white text-black border-black/15',
}

function Chip({ label, tone = 'paper' }) {
  return (
    <div
      className={`select-none whitespace-nowrap px-5 py-2.5 md:px-6 md:py-3 rounded-full border-[1.5px] font-bold text-sm md:text-base shadow-md ${toneClass[tone]}`}
    >
      {label}
    </div>
  )
}

function rand(min, max) {
  return Math.random() * (max - min) + min
}

export default function Skills() {
  const designRef = useRef(null)
  const aiRef = useRef(null)

  return (
    <section
      id="skills"
      className="relative bg-white py-24 md:py-32 px-6 md:px-10 overflow-hidden"
    >
      {/* faint grid */}
      <div className="absolute inset-0 bg-grid-light pointer-events-none" />

      <div className="relative max-w-[1280px] mx-auto">
        {/* Section eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <span className="inline-block w-10 h-[2px] bg-[#0038FF]" />
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/60">
            03 — Skills & Tools
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-10">
          <h2 className="display-stack lg:col-span-7 text-[clamp(2.5rem,5.5vw,5rem)] text-black leading-[0.95]">
            Drop, drag,{' '}
            <span className="italic font-serif font-normal text-[#0038FF]">
              play
            </span>{' '}
            — the stack I ship with.
          </h2>
          <p className="lg:col-span-5 lg:pt-4 text-base md:text-lg text-black/65 leading-relaxed">
            Grab the chips. Toss them around. The tools I use every day for
            discovery, design, and AI-native shipping.
          </p>
        </div>

        {/* Toolkits row label */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/50">
            Design toolkit
          </p>
          <button
            onClick={() => designRef.current?.reset()}
            className="text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-black/15 hover:bg-black hover:text-white transition-colors"
          >
            Reset ↻
          </button>
        </div>

        {/* Design Gravity Bin */}
        <div className="relative w-full h-[480px] md:h-[520px] rounded-[2rem] border-2 border-dashed border-[#0038FF]/30 bg-gradient-to-br from-white via-[#0038FF]/[0.03] to-[#CCFF00]/10 overflow-hidden">
          <p className="absolute top-4 left-6 text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 z-20">
            ↓ gravity bin
          </p>
          <Gravity
            gravity={{ x: 0, y: 1 }}
            addTopWall={false}
            ref={designRef}
            className="w-full h-full"
          >
            {designSkills.map((s) => (
              <MatterBody
                key={s.label}
                matterBodyOptions={{
                  friction: 0.5,
                  restitution: 0.25,
                }}
                x={`${rand(10, 85)}%`}
                y={`${rand(5, 35)}%`}
                angle={rand(-15, 15)}
              >
                <Chip label={s.label} tone={s.tone} />
              </MatterBody>
            ))}
          </Gravity>
        </div>

        {/* AI section */}
        <div className="flex items-center justify-between mt-12 mb-4">
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-black/50">
            AI tools & vibe-coding
          </p>
          <button
            onClick={() => aiRef.current?.reset()}
            className="text-[11px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full border border-black/15 hover:bg-black hover:text-white transition-colors"
          >
            Reset ↻
          </button>
        </div>

        <div className="relative w-full h-[340px] md:h-[380px] rounded-[2rem] border-2 border-dashed border-black/15 bg-gradient-to-br from-black/[0.02] via-white to-[#0038FF]/[0.05] overflow-hidden">
          <p className="absolute top-4 left-6 text-[10px] font-bold uppercase tracking-[0.22em] text-black/40 z-20">
            ↓ AI bin
          </p>
          <Gravity
            gravity={{ x: 0, y: 1 }}
            addTopWall={false}
            ref={aiRef}
            className="w-full h-full"
          >
            {aiSkills.map((s) => (
              <MatterBody
                key={s.label}
                matterBodyOptions={{
                  friction: 0.5,
                  restitution: 0.3,
                }}
                x={`${rand(10, 90)}%`}
                y={`${rand(5, 30)}%`}
                angle={rand(-15, 15)}
              >
                <Chip label={s.label} tone={s.tone} />
              </MatterBody>
            ))}
          </Gravity>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-6 text-xs text-black/50 text-center font-medium"
        >
          Tip: drag and throw the chips. Click reset to start over.
        </motion.p>
      </div>
    </section>
  )
}
