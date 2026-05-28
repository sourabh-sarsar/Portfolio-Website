import { motion } from 'motion/react'

const groups = [
  {
    label: 'Lead',
    skills: [
      'Mentorship',
      'Team Workflows',
      'Resource Allocation',
      'Stakeholder Management',
      'Cross-functional Collaboration',
      'Design Ops',
      'Roadmapping',
      'Coaching & Feedback',
      'Sprint Planning',
      'Hiring & Onboarding',
      'OKRs & Goal-setting',
      'Conflict Resolution',
    ],
  },
  {
    label: 'Craft',
    skills: [
      'Discovery',
      'Research',
      'Workshops',
      'Wireframing',
      'High-Fidelity UI',
      'Prototyping',
      'Usability Testing',
      'UX Audits',
      'Metrics Analysis',
      'Design Strategy',
      'Agile Collaboration',
    ],
  },
  {
    label: 'Tools',
    skills: [
      'Figma',
      'Sketch',
      'Adobe XD',
      'Framer',
      'InVision',
      'Zeplin',
      'Photoshop',
      'Illustrator',
    ],
  },
  {
    label: 'AI / Vibe-coding',
    skills: [
      'Claude Code',
      'ChatGPT Codex',
      'Code Rabbit',
      'Figma AI',
      'Google AntiGravity',
      'GitHub Copilot',
      'Bolt.new',
      'Google Stitch',
    ],
  },
]

// Inline Figma multi-color logo
const FigmaLogo = ({ className = 'w-4 h-6' }) => (
  <svg viewBox="0 0 38 57" className={className}>
    <path
      d="M19 28.5C19 25.98 20 23.56 21.78 21.78C23.56 20 25.98 19 28.5 19C31.02 19 33.44 20 35.22 21.78C37 23.56 38 25.98 38 28.5C38 31.02 37 33.44 35.22 35.22C33.44 37 31.02 38 28.5 38C25.98 38 23.56 37 21.78 35.22C20 33.44 19 31.02 19 28.5Z"
      fill="#1ABCFE"
    />
    <path
      d="M0 47.5C0 44.98 1 42.56 2.78 40.78C4.56 39 6.98 38 9.5 38H19V47.5C19 50.02 17.99 52.44 16.22 54.22C14.44 56 12.02 57 9.5 57C6.98 57 4.56 56 2.78 54.22C1 52.44 0 50.02 0 47.5Z"
      fill="#0ACF83"
    />
    <path
      d="M19 0V19H28.5C31.02 19 33.44 18 35.22 16.22C37 14.44 38 12.02 38 9.5C38 6.98 37 4.56 35.22 2.78C33.44 1 31.02 0 28.5 0H19Z"
      fill="#FF7262"
    />
    <path
      d="M0 9.5C0 12.02 1 14.44 2.78 16.22C4.56 18 6.98 19 9.5 19H19V0H9.5C6.98 0 4.56 1 2.78 2.78C1 4.56 0 6.98 0 9.5Z"
      fill="#F24E1E"
    />
    <path
      d="M0 28.5C0 31.02 1 33.44 2.78 35.22C4.56 37 6.98 38 9.5 38H19V19H9.5C6.98 19 4.56 20 2.78 21.78C1 23.56 0 25.98 0 28.5Z"
      fill="#A259FF"
    />
  </svg>
)

// Brand registry
// Each entry can be either:
//  - { type: 'image', src }  → renders an <img>
//  - { type: 'figma' }       → renders inline Figma SVG
//  - { type: 'letter', bg, fg, label }  → fallback colored badge
//  - { type: 'dual', items: [ItemA, ItemB] }  → two icons side by side
const BRAND = {
  // Tools
  Figma: { type: 'figma' },
  Sketch: { type: 'image', src: '/logos/sketch.png', padded: true },
  'Adobe XD': { type: 'image', src: '/logos/adobexd.png', padded: true },
  Framer: { type: 'image', src: '/logos/framer.svg', padded: false },
  InVision: { type: 'image', src: '/logos/invision.svg', padded: true },
  Zeplin: { type: 'image', src: '/logos/zeplin.svg', padded: true },
  Photoshop: { type: 'image', src: '/logos/photoshop.png', padded: true },
  Illustrator: { type: 'image', src: '/logos/illustrator.webp', padded: true },

  // AI / Vibe-coding
  'Claude Code': { type: 'image', src: '/logos/claude-ai.png', padded: true },
  'ChatGPT Codex': { type: 'image', src: '/logos/codex.svg', padded: false },
  'Code Rabbit': { type: 'image', src: '/logos/coderabbit.svg', padded: false },
  'Figma AI': { type: 'figma' },
  'Google AntiGravity': {
    type: 'dual',
    items: [
      { type: 'image', src: '/logos/google.webp', padded: true },
      { type: 'image', src: '/logos/antigravity.webp', padded: true },
    ],
  },
  'GitHub Copilot': {
    type: 'dual',
    items: [
      { type: 'image', src: '/logos/github.svg', padded: true },
      { type: 'image', src: '/logos/copilot.png', padded: true },
    ],
  },
  'Bolt.new': { type: 'image', src: '/logos/bolt.png', padded: true },
  'Google Stitch': {
    type: 'dual',
    items: [
      { type: 'image', src: '/logos/google.webp', padded: true },
      { type: 'image', src: '/logos/stitch.png', padded: true },
    ],
  },
}

function MiniBadge({ item, size = 'w-12 h-12' }) {
  if (item.type === 'figma') {
    return (
      <span
        className={`${size} rounded-2xl bg-white flex items-center justify-center shadow-md border-2 border-white overflow-hidden`}
      >
        <FigmaLogo className="w-5 h-7" />
      </span>
    )
  }
  if (item.type === 'image') {
    return (
      <span
        className={`${size} rounded-2xl bg-white flex items-center justify-center shadow-md border-2 border-white overflow-hidden`}
      >
        <img
          src={item.src}
          alt=""
          className={`w-full h-full object-contain ${item.padded ? 'p-1' : ''}`}
        />
      </span>
    )
  }
  // letter
  return (
    <span
      className={`${size} rounded-2xl flex items-center justify-center text-[11px] font-black shadow-md border-2 border-white`}
      style={{ backgroundColor: item.bg, color: item.fg }}
    >
      {item.label}
    </span>
  )
}

function Chip({ name }) {
  const brand = BRAND[name]
  const isDual = brand?.type === 'dual'

  return (
    <span className="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/15 bg-white/[0.04] text-white/90 text-sm font-semibold hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] transition-colors">
      <span className="relative z-0">{name}</span>
      {brand && (
        <span
          aria-hidden
          className="pointer-events-none absolute -top-7 -right-4 opacity-0 scale-50 rotate-0 group-hover:opacity-100 group-hover:scale-100 group-hover:-rotate-[14deg] transition-all duration-300 ease-out z-20 flex items-center"
        >
          {isDual ? (
            <span className="flex items-center -space-x-2.5">
              <MiniBadge item={brand.items[0]} size="w-11 h-11" />
              <MiniBadge item={brand.items[1]} size="w-11 h-11" />
            </span>
          ) : (
            <MiniBadge item={brand} />
          )}
        </span>
      )}
    </span>
  )
}

export default function SkillsStrip() {
  return (
    <section
      id="skills"
      aria-label="Skills"
      className="relative bg-black text-white px-6 md:px-10 py-24 md:py-32"
    >
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.06]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '4rem 4rem',
        }}
      />

      {/* Lime accent glow */}
      <div className="pointer-events-none absolute top-1/3 -right-32 w-[420px] h-[420px] rounded-full bg-[#CCFF00]/10 blur-3xl" />

      <div className="relative max-w-[1280px] mx-auto">
        {/* Section eyebrow */}
        <div className="flex items-center gap-3 mb-10">
          <span className="inline-block w-10 h-[2px] bg-[#CCFF00]" />
          <p className="text-xs font-bold uppercase tracking-[0.22em] text-white/50">
            04 · Skills
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12">
          <h2 className="display-stack lg:col-span-7 text-[clamp(2rem,6.5vw,5rem)] text-white leading-[1.05]">
            The skills, tools &{' '}
            <span className="italic font-serif font-normal text-[#CCFF00]">
              AI tooling
            </span>{' '}
            behind the work.
          </h2>
          <p className="lg:col-span-5 lg:pt-4 text-base md:text-lg text-white/60 leading-relaxed">
            Leadership, craft, and the products I reach for. Curated, battle-tested,
            and updated as the landscape evolves. Hover any chip to see its mark.
          </p>
        </div>

        {/* Groups */}
        <div className="space-y-10">
          {groups.map((g, gi) => (
            <motion.div
              key={g.label}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: gi * 0.08 }}
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.24em] text-white/40 mb-4">
                {g.label}
              </p>
              <div className="flex flex-wrap gap-x-2 gap-y-4">
                {g.skills.map((s) => (
                  <Chip key={s} name={s} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
