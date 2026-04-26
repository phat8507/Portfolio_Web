import React from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/utils";

interface LightBeamCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function LightBeamCard({ children, className, ...props }: LightBeamCardProps) {
  return (
    <div 
      className={cn("relative group overflow-hidden isolation-auto", className)} 
      style={{ isolation: "isolate" }}
      {...props}
    >
      {/* Card glow effect on hover */}
      <motion.div 
        className="absolute -inset-[1px] rounded-[inherit] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none -z-10"
        animate={{
          boxShadow: [
            "0 0 10px 2px rgba(15,42,74,0.03)",
            "0 0 15px 5px rgba(37,99,235,0.05)",
            "0 0 10px 2px rgba(15,42,74,0.03)"
          ],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ 
          duration: 4, 
          repeat: Infinity, 
          ease: "easeInOut", 
          repeatType: "mirror" 
        }}
      />

      {/* Traveling light beam effect */}
      <div className="absolute -inset-[1px] rounded-[inherit] overflow-hidden pointer-events-none -z-10">
        {/* Top light beam */}
        <motion.div 
          className="absolute top-0 left-0 h-[3px] w-[50%] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.9)] to-transparent opacity-70"
          initial={{ filter: "blur(2px)" }}
          animate={{ 
            left: ["-50%", "100%"],
            opacity: [0.3, 0.7, 0.3],
            filter: ["blur(1px)", "blur(2.5px)", "blur(1px)"]
          }}
          transition={{ 
            left: { duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1 },
            opacity: { duration: 1.2, repeat: Infinity, repeatType: "mirror" },
            filter: { duration: 1.5, repeat: Infinity, repeatType: "mirror" }
          }}
        />
        
        {/* Right light beam */}
        <motion.div 
          className="absolute top-0 right-0 h-[50%] w-[3px] bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.9)] to-transparent opacity-70"
          initial={{ filter: "blur(2px)" }}
          animate={{ 
            top: ["-50%", "100%"],
            opacity: [0.3, 0.7, 0.3],
            filter: ["blur(1px)", "blur(2.5px)", "blur(1px)"]
          }}
          transition={{ 
            top: { duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1, delay: 0.6 },
            opacity: { duration: 1.2, repeat: Infinity, repeatType: "mirror", delay: 0.6 },
            filter: { duration: 1.5, repeat: Infinity, repeatType: "mirror", delay: 0.6 }
          }}
        />
        
        {/* Bottom light beam */}
        <motion.div 
          className="absolute bottom-0 right-0 h-[3px] w-[50%] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.9)] to-transparent opacity-70"
          initial={{ filter: "blur(2px)" }}
          animate={{ 
            right: ["-50%", "100%"],
            opacity: [0.3, 0.7, 0.3],
            filter: ["blur(1px)", "blur(2.5px)", "blur(1px)"]
          }}
          transition={{ 
            right: { duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1, delay: 1.2 },
            opacity: { duration: 1.2, repeat: Infinity, repeatType: "mirror", delay: 1.2 },
            filter: { duration: 1.5, repeat: Infinity, repeatType: "mirror", delay: 1.2 }
          }}
        />
        
        {/* Left light beam */}
        <motion.div 
          className="absolute bottom-0 left-0 h-[50%] w-[3px] bg-gradient-to-b from-transparent via-[rgba(255,255,255,0.9)] to-transparent opacity-70"
          initial={{ filter: "blur(2px)" }}
          animate={{ 
            bottom: ["-50%", "100%"],
            opacity: [0.3, 0.7, 0.3],
            filter: ["blur(1px)", "blur(2.5px)", "blur(1px)"]
          }}
          transition={{ 
            bottom: { duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 1, delay: 1.8 },
            opacity: { duration: 1.2, repeat: Infinity, repeatType: "mirror", delay: 1.8 },
            filter: { duration: 1.5, repeat: Infinity, repeatType: "mirror", delay: 1.8 }
          }}
        />
        
        {/* Subtle corner glow spots */}
        <motion.div 
          className="absolute top-0 left-0 h-[5px] w-[5px] rounded-full bg-[rgba(255,255,255,0.6)] blur-[1px]"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2, repeat: Infinity, repeatType: "mirror" }}
        />
        <motion.div 
          className="absolute top-0 right-0 h-[6px] w-[6px] rounded-full bg-[rgba(56,189,248,0.5)] blur-[1.5px]"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2.4, repeat: Infinity, repeatType: "mirror", delay: 0.5 }}
        />
        <motion.div 
          className="absolute bottom-0 right-0 h-[6px] w-[6px] rounded-full bg-[rgba(56,189,248,0.5)] blur-[1.5px]"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2.2, repeat: Infinity, repeatType: "mirror", delay: 1 }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 h-[5px] w-[5px] rounded-full bg-[rgba(255,255,255,0.6)] blur-[1px]"
          animate={{ opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 2.3, repeat: Infinity, repeatType: "mirror", delay: 1.5 }}
        />
      </div>

      {/* Card border glow (static subtle ring) */}
      <div className="absolute -inset-[0.5px] rounded-[inherit] bg-gradient-to-r from-[rgba(255,255,255,0.2)] via-[rgba(255,255,255,0.5)] to-[rgba(255,255,255,0.2)] opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none -z-10" />

      {/* Main content */}
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
