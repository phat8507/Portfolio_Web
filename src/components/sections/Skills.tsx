import { CalendarDays, Search, MessageCircle, LayoutGrid, BookOpen } from "lucide-react";
import { SignInCardBeamEffect } from "../effects/SignInCardBeamEffect";
import { TiltCard } from "../effects/TiltCard";

/* ─────────────────────────────────────────────
   Data
───────────────────────────────────────────── */
const skillCards = [
  {
    icon: <CalendarDays size={22} className="text-[#2563EB]" />,
    title: "Project Coordination",
    desc: "Organizing work, tracking progress, and keeping projects on track.",
    tags: ["Planning", "Task Prioritization", "Timeline Coordination", "Documentation", "Event Logistics", "Stakeholder Communication", "Recruitment"],
  },
  {
    icon: <Search size={22} className="text-[#2563EB]" />,
    title: "Research & Analysis",
    desc: "Turning information into insight to support better decisions.",
    tags: ["Desk Research", "Case Study Analysis", "Market Research", "Problem Structuring", "Report Writing", "Data Synthesis"],
  },
  {
    icon: <MessageCircle size={22} className="text-[#2563EB]" />,
    title: "Communication",
    desc: "Communicating clearly and collaborating across teams.",
    tags: ["Public Speaking", "Client Communication", "Teaching", "Feedback Delivery", "Cross-team Coordination", "Partnership Outreach"],
  },
  {
    icon: <LayoutGrid size={22} className="text-[#2563EB]" />,
    title: "Tools & Workflow",
    desc: "Using the right tools to work efficiently and deliver quality.",
    tags: ["Microsoft Office", "PowerPoint", "Google Workspace", "Canva", "CapCut", "GitHub Pages"],
  },
];

const languageItems = [
  "English — IELTS 7.5",
  "Mandarin — HSK 3–4 path",
  "Google Project Management",
];

/* ─────────────────────────────────────────────
   Component
───────────────────────────────────────────── */
export function Skills() {
  return (
    <section id="skills" className="py-[clamp(3.5rem,8vh,5.5rem)] border-t border-[#D8E1EC]">
      <div className="section-container">

        {/* ── Header ─────────────────────────────── */}
        <div className="mb-12">
          <div className="flex flex-col gap-[6px] mb-4">
            <span className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[#2563EB]">
              Capabilities
            </span>
            <div className="w-8 h-[2px] bg-[#2563EB] rounded-full" />
          </div>
          <h2 className="font-display text-[clamp(2rem,4.5vw,3rem)] font-extrabold leading-[1.1] tracking-tight text-[#0F2A4A]">
            Skills
          </h2>
        </div>

        {/* ── 2-column skill grid ─────────────────── */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-5">
          {skillCards.map((card) => (
            <TiltCard
              key={card.title}
              tiltLimit={6}
              scale={1.015}
              perspective={1200}
              effect="evade"
              spotlight={true}
              className="rounded-[16px]"
            >
              <SignInCardBeamEffect
                enableTilt={false}
                className="skill-card bg-white border border-[#D8E1EC] rounded-[16px] shadow-[0_2px_16px_rgba(15,42,74,0.06)] overflow-hidden"
                data-cursor="hover"
              >
                <div className="p-7 flex flex-col h-full relative z-10">
                  {/* Icon + Title row */}
                  <div className="flex items-center gap-4 mb-3">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[rgba(37,99,235,0.07)] flex items-center justify-center">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="text-[1.05rem] font-bold text-[#0B1220] leading-tight">
                        {card.title}
                      </h3>
                      <p className="text-[0.82rem] text-[#5B6B82] mt-[2px] leading-[1.5]">
                        {card.desc}
                      </p>
                    </div>
                  </div>

                  {/* Skill tags */}
                  <div className="flex flex-wrap gap-[7px] mt-4">
                    {card.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-[12px] py-[5px] rounded-full text-[0.75rem] font-medium text-[#2563EB] bg-[rgba(37,99,235,0.06)] border border-[rgba(37,99,235,0.18)] transition-colors hover:bg-[rgba(37,99,235,0.12)] relative z-10"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </SignInCardBeamEffect>
            </TiltCard>
          ))}
        </div>

        {/* ── Languages & Learning row ────────────── */}
        <SignInCardBeamEffect
          enableTilt={false}
          className="skill-card bg-white border border-[#D8E1EC] rounded-[16px] shadow-[0_2px_16px_rgba(15,42,74,0.06)] overflow-hidden"
          data-cursor="hover"
        >
          <div className="flex flex-col sm:flex-row sm:items-center gap-5 px-7 py-5 relative z-10">
            {/* Label */}
            <div className="flex items-center gap-3 sm:pr-6 sm:border-r sm:border-[#D8E1EC] shrink-0">
              <div className="w-10 h-10 rounded-full bg-[rgba(37,99,235,0.07)] flex items-center justify-center">
                <BookOpen size={18} className="text-[#2563EB]" />
              </div>
              <span className="text-[0.95rem] font-bold text-[#0B1220] whitespace-nowrap">
                Languages &amp; Learning
              </span>
            </div>

            {/* Items */}
            <div className="flex flex-wrap gap-x-6 gap-y-3 sm:pl-2 relative z-10">
              {languageItems.map((item, i) => (
                <span
                  key={i}
                  className="text-[0.875rem] text-[#5B6B82] font-medium whitespace-nowrap"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </SignInCardBeamEffect>

      </div>
    </section>
  );
}
