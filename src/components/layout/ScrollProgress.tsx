import { useEffect, useState } from "react";

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateScrollUI = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const p = docHeight > 0 ? (window.scrollY / docHeight) * 100 : 0;
      setProgress(p);
    };

    window.addEventListener("scroll", updateScrollUI, { passive: true });
    updateScrollUI();

    return () => window.removeEventListener("scroll", updateScrollUI);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-[3px] z-[9999] pointer-events-none bg-transparent">
      <div 
        className="h-full bg-gradient-to-r from-accent to-gold"
        style={{ width: `${progress}%` }}
      />
    </div>
  );
}
