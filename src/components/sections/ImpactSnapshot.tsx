import { ClipboardCheck, Landmark, Trophy, Users } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { SignInCardBeamEffect } from "../effects/SignInCardBeamEffect";
import {
  createBlurFadeUpVariants,
  createStaggerContainerVariants,
  createStaggerItemVariants,
  viewportReveal,
} from "../motion/variants";

const impactItems = [
  {
    icon: ClipboardCheck,
    title: "8-member Scrum project",
    text: "Coordinated 3 offline sprint sessions and milestone tracking."
  },
  {
    icon: Users,
    title: "50-member club",
    text: "Oversaw weekly operations, resources, and internal communications."
  },
  {
    icon: Landmark,
    title: "15 institutions",
    text: "Managed inter-school tournament logistics and head coach communication."
  },
  {
    icon: Trophy,
    title: "9/10 + Bronze Medal",
    text: "Delivered measurable outcomes across research and athletics leadership."
  }
];

export function ImpactSnapshot() {
  const shouldReduceMotion = Boolean(useReducedMotion());
  const reveal = createBlurFadeUpVariants(shouldReduceMotion);
  const staggerContainer = createStaggerContainerVariants(shouldReduceMotion, 0.08);
  const staggerItem = createStaggerItemVariants(shouldReduceMotion);

  return (
    <motion.section
      id="impact"
      className="py-[clamp(2.75rem,6vh,4.25rem)] border-t border-[#D8E1EC] relative z-10"
      variants={reveal}
      initial="hidden"
      whileInView="visible"
      viewport={viewportReveal}
    >
      <div className="section-container">
        <div className="mb-8">
          <div className="flex flex-col gap-[6px] mb-4">
            <span className="text-[0.7rem] font-bold tracking-[0.18em] uppercase text-[#2563EB]">
              Impact Snapshot
            </span>
            <div className="w-8 h-[2px] bg-[#2563EB] rounded-full" />
          </div>
          <h2 className="font-display text-[clamp(1.65rem,3vw,2.25rem)] font-extrabold leading-[1.1] tracking-tight text-[#0F2A4A]">
            Coordination evidence at a glance
          </h2>
        </div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={viewportReveal}
        >
          {impactItems.map((item) => {
            const Icon = item.icon;

            return (
              <motion.div key={item.title} variants={staggerItem}>
                <SignInCardBeamEffect
                  enableTilt={false}
                  className="motion-card bg-white/80 border border-[#D8E1EC] rounded-[14px] shadow-[0_2px_14px_rgba(15,42,74,0.045)] overflow-hidden"
                  data-cursor="hover"
                >
                  <article className="relative z-10 p-5 h-full">
                    <div className="w-10 h-10 rounded-full bg-[rgba(37,99,235,0.07)] flex items-center justify-center mb-4">
                      <Icon size={19} className="text-[#2563EB]" />
                    </div>
                    <h3 className="text-[1rem] font-bold text-[#0B1220] leading-tight mb-2">
                      {item.title}
                    </h3>
                    <p className="text-[0.84rem] text-[#5B6B82] leading-[1.55]">
                      {item.text}
                    </p>
                  </article>
                </SignInCardBeamEffect>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </motion.section>
  );
}
