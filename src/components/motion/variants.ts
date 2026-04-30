import type { Variants } from "framer-motion";

export const viewportReveal = {
  once: true,
  amount: 0.18,
} as const;

export const createFadeUpVariants = (reducedMotion: boolean): Variants => ({
  hidden: {
    opacity: reducedMotion ? 1 : 0,
    y: reducedMotion ? 0 : 24,
    filter: "blur(0px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: reducedMotion ? 0 : 0.65,
      ease: "easeOut",
    },
  },
});

export const createBlurFadeUpVariants = (reducedMotion: boolean): Variants => ({
  hidden: {
    opacity: reducedMotion ? 1 : 0,
    y: reducedMotion ? 0 : 24,
    filter: reducedMotion ? "blur(0px)" : "blur(6px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: reducedMotion ? 0 : 0.7,
      ease: "easeOut",
    },
  },
});

export const createStaggerContainerVariants = (reducedMotion: boolean, stagger = 0.08): Variants => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: reducedMotion ? 0 : stagger,
      delayChildren: reducedMotion ? 0 : 0.04,
    },
  },
});

export const createStaggerItemVariants = (reducedMotion: boolean): Variants => ({
  hidden: {
    opacity: reducedMotion ? 1 : 0,
    y: reducedMotion ? 0 : 16,
    filter: reducedMotion ? "blur(0px)" : "blur(4px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: reducedMotion ? 0 : 0.55,
      ease: "easeOut",
    },
  },
});
